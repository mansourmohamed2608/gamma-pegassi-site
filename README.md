# Gamma Pegassi Website

Static-export compatible Next.js website for Gamma Pegassi, a Dubai-based technology startup and software studio. The site uses the provided Pegasus/wing logo mark, App Router, TypeScript, Tailwind CSS, Motion for React, and static pages only.

## Run Locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Build

```bash
npm run build
```

The static export is generated in `out/`.

## Quality Checks

```bash
npm run lint
npm run typecheck
npm run build
npx playwright install chromium
npm run test:e2e
```

`npm run verify` runs lint, type checking, the production export, and Playwright in sequence. The
Playwright tests serve the existing `out/` directory locally and cover public routes, internal
links, metadata, the responsive menu, the contact fallback, and representative overflow checks.

The workflow in `.github/workflows/quality.yml` performs validation only. It does not deploy the
website or connect to the production server.

## Deploy To VPS/Nginx

Build the project, review the generated `out/` directory, then copy its contents to the Nginx web
root. The server must resolve extensionless Next.js links to the matching exported HTML file.

Example:

```bash
npm run build
rsync -av out/ user@server:/var/www/gamma-pegassi/
```

An appropriate Nginx location block is:

```nginx
location / {
    try_files $uri $uri.html $uri/ =404;
}
```

Deployment checklist:

1. Configure approved `NEXT_PUBLIC_*` variables in the build environment.
2. Run `npm ci` and `npm run verify`.
3. Confirm the expected HTML routes and `_next/static` assets exist in `out/`.
4. Copy the contents of `out/` to a versioned release directory on the VPS.
5. Point the Nginx web root or release symlink to that directory.
6. Run `nginx -t`, reload Nginx, and smoke-test navigation, icons, the contact path, and legal pages.
7. Keep the previous release available for rollback.

No Node server, backend, database, API routes, or authentication are required in production.
Repository pushes do not deploy the site unless a separate, authorized deployment mechanism is
configured outside this repository.

## Change The Logo

Replace `public/brand/pegassi-mark.png` with the approved transparent square logo mark. Do not redesign the logo or use a white-background wordmark in the dark navbar.

## Change Calendly

Set the public environment variable before building or running locally:

```bash
NEXT_PUBLIC_CALENDLY_URL="https://calendly.com/your-link" npm run build
```

If no URL is provided, the contact page shows a static inquiry form and direct email path.

## Configure Contact Submission

The default contact flow is deliberately email-based: it prepares a draft and offers a copyable
project note, but never claims the message was delivered.

To activate direct form delivery, set a public HTTPS form endpoint before building:

```bash
NEXT_PUBLIC_CONTACT_FORM_ENDPOINT="https://form-provider.example/approved-endpoint" npm run build
```

The endpoint must accept browser `POST` requests with `multipart/form-data`, return a successful
HTTP status only after receipt, allow requests from `https://gammapegassi.com`, and support the
`_gotcha` honeypot field. Formspree or an approved serverless/VPS form endpoint can satisfy this
contract. Do not place provider secrets in a `NEXT_PUBLIC_*` variable. Test success, rejection,
rate limiting, spam handling, notification delivery, and the provider's privacy terms before
enabling it in production.

## Configure The Tash8eel Application Link

Set the public URL only when the product application is reachable:

```bash
NEXT_PUBLIC_TASH8EEL_APP_URL="https://your-approved-product-url" npm run build
```

Without this value, the Tash8eel page directs visitors to the project inquiry page instead of
showing an unavailable application link.

## Public Content Approval

See `docs/content-approval-checklist.md` for the evidence required before publishing named team
game projects, named game-development technologies, or embedded-systems services.

## Switch Hero Visual Mode

Edit `lib/site.ts`:

```ts
heroVisualMode: "static"
```

Use `"motion"` to restore the isolated animated hero in `components/visuals/HeroMotionExperiment.tsx`.
