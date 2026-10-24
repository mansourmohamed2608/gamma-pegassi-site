import { expect, test } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

const publicRoutes = [
  "/",
  "/services",
  "/game-development",
  "/our-work",
  "/products",
  "/about",
  "/contact",
  "/tash8eel",
  "/tash8eel/privacy",
  "/tash8eel/terms",
  "/tash8eel/data-deletion",
];

test("all public routes load with one visible heading", async ({ page }) => {
  for (const route of publicRoutes) {
    const response = await page.goto(route);
    expect(response?.ok(), `${route} should load`).toBeTruthy();
    await expect(page.locator("h1")).toHaveCount(1);
    await expect(page.locator("h1")).toBeVisible();
  }
});

test("internal links resolve", async ({ page, request }) => {
  await page.goto("/");
  const links = await page.locator('a[href^="/"]').evaluateAll((anchors) =>
    [...new Set(anchors.map((anchor) => (anchor as HTMLAnchorElement).getAttribute("href")))].filter(
      (href): href is string => Boolean(href) && !href!.startsWith("/#"),
    ),
  );

  for (const href of links) {
    const response = await request.get(href);
    expect(response.ok(), `${href} should resolve`).toBeTruthy();
  }
});

test("metadata, robots, and sitemap include required public routes", async ({ page, request }) => {
  await page.goto("/our-work");
  await expect(page).toHaveTitle(/Our Work \| Gamma Pegassi/);
  await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
    "href",
    "https://gammapegassi.com/our-work",
  );
  await expect(page.locator('meta[property="og:title"]')).toHaveAttribute("content", /Our Work/);

  const sitemap = await (await request.get("/sitemap.xml")).text();
  expect(sitemap).toContain("https://gammapegassi.com/game-development");
  expect(sitemap).toContain("https://gammapegassi.com/our-work");
  expect(sitemap).toContain("https://gammapegassi.com/tash8eel/privacy");

  const robots = await (await request.get("/robots.txt")).text();
  expect(robots).toContain("Sitemap: https://gammapegassi.com/sitemap.xml");
});

for (const width of [320, 375, 390, 768]) {
  test(`mobile menu is keyboard-safe at ${width}px`, async ({ page }) => {
    await page.setViewportSize({ width, height: width === 768 ? 640 : 700 });
    await page.goto("/");
    const trigger = page.getByRole("button", { name: "Open navigation menu" });
    await trigger.click();
    const dialog = page.getByRole("dialog", { name: "Site navigation" });
    await expect(dialog).toBeVisible();
    const dialogBox = await dialog.boundingBox();
    expect(dialogBox?.y).toBeCloseTo(80, 0);
    expect(dialogBox?.height).toBeCloseTo((width === 768 ? 640 : 700) - 80, 0);
    await expect(dialog.getByRole("link", { name: "Services" })).toBeFocused();
    await page.keyboard.press("Shift+Tab");
    await expect(page.getByRole("button", { name: "Close navigation menu" })).toBeFocused();
    await page.keyboard.press("Shift+Tab");
    await expect(dialog.getByRole("link", { name: "Discuss a Project" })).toBeFocused();
    await page.keyboard.press("Tab");
    await expect(page.getByRole("button", { name: "Close navigation menu" })).toBeFocused();
    await expect(page.locator("body")).toHaveCSS("overflow", "hidden");
    await expect(page.locator("main")).toHaveAttribute("inert", "");

    await page.keyboard.press("Escape");
    await expect(page.getByRole("dialog", { name: "Site navigation" })).toHaveCount(0);
    await expect(trigger).toBeFocused();
    await expect(page.locator("body")).not.toHaveCSS("overflow", "hidden");

    await trigger.click();
    await page
      .getByRole("dialog", { name: "Site navigation" })
      .getByRole("link", { name: "Our Work" })
      .click();
    await expect(page).toHaveURL(/\/our-work$/);
    await expect(page.getByRole("dialog", { name: "Site navigation" })).toHaveCount(0);
    await page.goBack();
    await expect(page.getByRole("dialog", { name: "Site navigation" })).toHaveCount(0);
  });
}

test("desktop navigation replaces the mobile trigger at 1024px", async ({ page }) => {
  await page.setViewportSize({ width: 1024, height: 768 });
  await page.goto("/");
  await expect(page.getByRole("button", { name: "Open navigation menu" })).toHaveCount(0);
  await expect(page.getByRole("navigation", { name: "Primary navigation" })).toBeVisible();
});

test("contact fallback validates and never claims delivery", async ({ page }) => {
  await page.goto("/contact");
  await page.getByRole("button", { name: "Prepare Email" }).click();
  await expect(page.getByText("Please complete every required field and check the highlighted values."))
    .toBeVisible();

  await page.getByLabel("Name (required)").fill("Test User");
  await page.getByLabel("Email (required)").fill("test@example.com");
  await page.getByLabel("Project type (required)").selectOption("Custom software");
  await page.getByLabel("Expected timeline (required)").selectOption("Exploring options");
  await page
    .getByLabel("Project description (required)")
    .fill("A sufficiently detailed project note for validating the static contact fallback.");
  await page.getByRole("button", { name: "Prepare Email" }).click();
  await expect(page.getByRole("status")).toContainText("nothing has been sent yet");
  await expect(page.getByLabel("Name (required)")).toHaveValue("Test User");
});

test("mobile project CTA closes its dialog before navigation", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 700 });
  await page.goto("/");
  await page.getByRole("button", { name: "Open navigation menu" }).click();
  await page
    .getByRole("dialog", { name: "Site navigation" })
    .getByRole("link", { name: "Discuss a Project" })
    .click();
  await expect(page).toHaveURL(/\/contact$/);
  await expect(page.getByRole("dialog", { name: "Site navigation" })).toHaveCount(0);
});

test("every mobile navigation link closes the dialog", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 700 });
  for (const [label, route] of [
    ["Services", "/services"],
    ["Game Studio", "/game-development"],
    ["Our Work", "/our-work"],
    ["Products", "/products"],
    ["About", "/about"],
    ["Contact", "/contact"],
  ]) {
    await page.goto("/");
    await page.getByRole("button", { name: "Open navigation menu" }).click();
    await page
      .getByRole("dialog", { name: "Site navigation" })
      .getByRole("link", { name: label, exact: true })
      .click();
    await expect(page).toHaveURL(new RegExp(`${route}$`));
    await expect(page.getByRole("dialog", { name: "Site navigation" })).toHaveCount(0);
  }
});

test("mobile menu remains usable in landscape", async ({ page }) => {
  await page.setViewportSize({ width: 768, height: 320 });
  await page.goto("/");
  await page.getByRole("button", { name: "Open navigation menu" }).click();
  const dialog = page.getByRole("dialog", { name: "Site navigation" });
  await expect(dialog).toHaveCSS("overflow-y", "auto");
  const dimensions = await dialog.evaluate((element) => ({
    clientHeight: element.clientHeight,
    scrollHeight: element.scrollHeight,
  }));
  expect(dimensions.scrollHeight).toBeGreaterThan(dimensions.clientHeight);
  await dialog.getByRole("link", { name: "Discuss a Project" }).scrollIntoViewIfNeeded();
  await expect(dialog.getByRole("link", { name: "Discuss a Project" })).toBeVisible();
});

test("representative pages have no horizontal overflow", async ({ page }) => {
  for (const width of [320, 375, 390, 768, 1024, 1440]) {
    await page.setViewportSize({ width, height: 900 });
    for (const route of ["/", "/services", "/game-development", "/our-work", "/contact"]) {
      await page.goto(route);
      const dimensions = await page.evaluate(() => ({
        viewport: document.documentElement.clientWidth,
        content: document.documentElement.scrollWidth,
      }));
      expect(dimensions.content, `${route} at ${width}px`).toBeLessThanOrEqual(dimensions.viewport + 1);
    }
  }
});

test("representative pages have no serious or critical accessibility violations", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  for (const route of publicRoutes) {
    await page.goto(route);
    const results = await new AxeBuilder({ page }).analyze();
    const blocking = results.violations.filter(({ impact }) =>
      impact === "serious" || impact === "critical",
    );
    expect(blocking, `${route}: ${JSON.stringify(blocking, null, 2)}`).toEqual([]);
  }
});
