# Gamma Pegassi Website — Codex Build Brief

You are inside an empty project folder for a new company website.

## Your job

Create the entire project from scratch in this current folder.

Do not only give instructions.
Do not only write a plan.
Actually create the project files, install dependencies if possible, implement the website, and make sure it builds.

## Company

- Name: Gamma Pegassi
- Location: Dubai, United Arab Emirates
- Founded: February 2025
- Type: technology startup and software studio
- Work: software services, SaaS MVPs, custom web platforms, dashboards, automation systems, AI workflow integrations, internal business tools, and future SaaS products
- Brand feeling: premium, precise, fast, technical, calm, futuristic, trustworthy, Dubai-ready, global

## Important honesty rules

Gamma Pegassi is new.

Do not invent:
- fake clients
- fake numbers
- fake testimonials
- fake team members
- fake case studies
- fake awards
- fake partners
- fake press mentions
- fake "100+ projects"
- fake "trusted by" sections

The site should still feel premium without lying.

## Logo rule

The logo is already designed.

Do not:
- create a new logo
- redesign the logo
- generate logo concepts
- modify the logo shape

Use the provided logo asset only.

## Logo file handling

Look in the current folder for a logo image file. The user may place it as one of:

- `pegassi-mark.png`
- `logo.png`
- `logo.jpg`
- `Our Logo.png`
- `Our Logo(1).png`

Use the best transparent square Pegasus/wing mark as the primary logo.

Create this folder:

```txt
public/brand/
```

Copy or move the chosen logo into:

```txt
public/brand/pegassi-mark.png
```

If there are multiple logo files, prefer the transparent square mark.

Do not use a white-background wordmark image in the dark navbar.

In the navbar, use the transparent logo mark plus live HTML/CSS text:

```txt
GAMMA PEGASSI
```

The wordmark text should be clean, premium, letter-spaced, and not image-based.

The logo mark should stay recognizable, sharp, and undistorted.

## Project creation

Use Next.js with App Router, TypeScript, Tailwind CSS, ESLint, and import alias.

Preferred command if possible:

```bash
npx create-next-app@latest . --ts --tailwind --eslint --app --src-dir false --import-alias "@/*"
```

If `create-next-app` refuses because the folder is not empty due to the logo file:

- Do not delete the logo.
- Either move the logo temporarily, scaffold the app, then move it into `public/brand/`.
- Or manually create the Next.js project files.

The final result must be a complete working Next.js project in the current folder.

## Tech stack

- Next.js with App Router
- TypeScript
- Tailwind CSS
- Motion for React for UI animations
- GSAP + ScrollTrigger only if needed for one advanced scroll section
- No backend
- No API routes
- No database
- No authentication
- No server-only features
- Static export must work using `output: "export"`
- Final build must generate an `/out` folder deployable on a VPS/Nginx server

## Dependencies

Install needed dependencies:

- `next`
- `react`
- `react-dom`
- `motion` or `framer-motion`, depending on current package compatibility
- `gsap` only if used
- `lucide-react` for icons if useful
- `clsx` and `tailwind-merge` if useful

## Static-site constraints

Do not use:
- API routes
- middleware
- server actions
- dynamic server functions
- features that break static export

Do not require a Node server in production.

The final site must run as static HTML/CSS/JS after build.

Production deployment should work by copying the `/out` folder to an Nginx web root.

## Required pages

1. Home: `/`
2. Services: `/services`
3. Products: `/products`
4. About: `/about`
5. Contact / Book a Call: `/contact`

## Global layout

Create:

- Sticky dark transparent navbar with subtle blur
- Logo mark on the left + `GAMMA PEGASSI` text
- Navigation links:
  - Services
  - Products
  - About
  - Contact
- CTA button:
  - Book a Call
- Responsive mobile menu
- Premium footer with:
  - Logo
  - Short company description
  - Dubai, UAE
  - Email placeholder from config
  - Links
  - Copyright
  - Optional WhatsApp link from config if available

## Visual direction

- Dark-first premium interface
- Avoid generic purple/blue AI gradients
- Avoid cheap SaaS-template look
- Avoid stock 3D robots, cubes, and fake AI graphics
- Use near-black, charcoal, dark blue-grey, metallic grey, soft ice-blue, and white

Suggested palette:

```txt
Background: #050607
Surface: #0B0F12
Elevated surface: #101820
Border: rgba(255,255,255,0.10)
Text: #F4F8FA
Muted text: #9AA6AD
Logo ice blue: #BDEEFF
Accent blue: #78DFFF
Metallic grey: #6F777C
```

Design requirements:

- Use subtle noise texture
- Use thin borders
- Use bento-grid layouts
- Use large clean typography
- Use strong whitespace
- Use precise spacing
- Use soft glow only where it supports the logo identity
- Use subtle line/grid motifs inspired by speed, wings, and engineering
- The website should look custom, sharp, premium, and serious
- It should not look like it was generated by AI

## Typography

- Use a premium modern sans-serif
- Suggested fonts: Inter, Manrope, Sora, or Space Grotesk
- Use uppercase tracking for small labels
- Use large editorial hero type
- Do not overuse futuristic fonts
- The site should feel premium and readable

## Core design principle

The website must look premium even if all experimental animation is disabled.

Animation should enhance the experience, not carry the whole design.

## Animation system

Use animation as a brand signature, not decoration.

Create two hero visual modes controlled from `lib/site.ts`:

```ts
heroVisualMode: "static" | "motion"
```

Default:

```ts
heroVisualMode: "motion"
```

### Mode 1: `static`

- Premium static hero
- Large clean logo mark or abstract brand composition
- Subtle background gradient/noise/grid
- No heavy animation
- This must look complete and production-ready by itself

### Mode 2: `motion`

- Experimental animated hero visual
- Use the logo mark carefully
- Add subtle glow, light sweep, parallax, particles, or motion around the logo
- Do not spin the logo
- Do not warp the logo
- Do not bend the logo
- Do not over-distort the logo
- Do not fake a real 3D logo from the PNG
- Do not make it look like a gaming intro
- Do not make it look like an AI-generated SaaS template

The motion version must be isolated in:

```txt
components/visuals/HeroMotionExperiment.tsx
```

The static version must be isolated in:

```txt
components/visuals/HeroStaticVisual.tsx
```

The Hero component should switch between them using the config value only.

If the motion experiment looks bad, removing it should require only changing:

```ts
heroVisualMode: "static"
```

Do not spread experimental animation logic across the whole codebase.

## Logo animation rules

The provided logo is a 2D raster image, not a real 3D model.

Do not pretend it is a real 3D logo.

Allowed logo/hero motion:

- opacity reveal
- subtle scale
- subtle parallax
- soft ice-blue glow
- light sweep around or behind the mark
- background particles inspired by the wing direction
- small hover interaction in the navbar
- optional slow floating motion in the hero

Forbidden logo motion:

- spinning
- aggressive rotation
- ugly 3D tilt
- heavy blur
- warping
- morphing the logo shape
- making the mark unreadable
- cheesy neon intro effects

## Required animations

### 1. Hero entrance

- Headline and subheadline reveal smoothly
- CTA buttons fade/slide in
- Visual appears after text with subtle delay
- Use staggered animation

### 2. Section reveals

- Sections fade/slide into view
- Cards reveal in small staggered groups
- Keep reveal distances subtle

### 3. Bento card hover

- Cards lift slightly
- Border glow follows hover
- Use transform and opacity where possible
- Do not create heavy layout shifts

### 4. Process section

Create a premium scroll-driven section showing:

```txt
Understand → Design → Build → Launch → Improve
```

This can use GSAP ScrollTrigger if needed.

Keep it smooth and not annoying.

No scroll hijacking.

### 5. Background motion

- Use subtle animated light beams, grid movement, or soft particles
- Keep opacity low
- Must not reduce readability

## Animation quality rules

- Animate mostly transform and opacity
- Respect `prefers-reduced-motion`
- Keep all content readable without animation
- Do not hide key content behind scroll effects
- Do not use scroll hijacking
- Do not add random 3D objects, robots, cubes, or generic AI visuals
- No fake futuristic nonsense
- The site should feel like a serious Dubai-based software company, not a demo reel

## 3D rule

Do not add heavy 3D in the first version.

Do not add:
- random 3D objects
- 3D robots
- 3D cubes
- fake AI objects

If you add any WebGL/React Three Fiber later, it must be:
- isolated
- lazy-loaded
- decorative only
- disabled on low-power/mobile if needed
- removable without affecting the page

## Home page structure

### 1. Hero section

Headline:

```txt
Software systems built with speed, clarity, and long-term intent.
```

Subheadline:

```txt
Gamma Pegassi is a Dubai-based technology startup building software services and SaaS products for teams that need reliable digital systems, not throwaway prototypes.
```

CTAs:

- Book a Call
- Explore Services

Hero visual:

- Use the Pegasus/wing logo mark
- Use either `HeroStaticVisual` or `HeroMotionExperiment` depending on `heroVisualMode`
- No stock illustration
- No generic 3D illustration
- No random AI graphic

### 2. Positioning strip

Include:

- Dubai, UAE
- Founded in 2025
- Software Services
- SaaS Products
- Automation & AI Workflows

### 3. Services preview bento grid

Cards:

- SaaS MVP Development
- Custom Web Platforms
- Internal Tools & Dashboards
- AI Workflow Integration
- Automation Systems
- Maintenance & Scaling

Each card should have:

- Short title
- Clear one-sentence description
- Small icon or abstract line visual
- Subtle hover animation

### 4. Product Lab section

Copy direction:

```txt
Alongside client work, Gamma Pegassi builds its own SaaS products. Our product lab turns repeated business problems into focused software products. Public launches will be announced as they mature.
```

Important:

- Do not invent launched products
- Do not create fake product screenshots
- Use abstract product cards marked clearly as:
  - In development
  - Research
  - Product Lab

### 5. Process section

Steps:

- Understand
- Design
- Build
- Launch
- Improve

Each step should explain how Gamma Pegassi works with clients.

### 6. Why Gamma Pegassi section

Points:

- Clear technical thinking
- Fast execution without messy shortcuts
- Product-minded engineering
- Maintainable systems
- Honest communication
- Dubai-based, global mindset

### 7. Booking CTA section

Text:

```txt
Have a product, platform, or workflow you want to build? Book a short call and we’ll map the clearest next step.
```

Requirements:

- Include Calendly inline embed if `NEXT_PUBLIC_CALENDLY_URL` exists
- Otherwise show a strong CTA button linking to `/contact`
- Do not require a backend

## Services page

Hero title:

```txt
Software services for teams that need systems, not just screens.
```

Page content:

- Explain services clearly
- Include detailed service cards:
  - SaaS MVP Development
  - Custom Web Platforms
  - Business Dashboards
  - AI Workflow Integration
  - Automation Systems
  - API & Integration Work
  - Maintenance & Scaling

Add a "Best fit for" section:

- Founders validating SaaS ideas
- Businesses replacing manual workflows
- Teams needing dashboards or portals
- Companies needing automation
- Companies that need reliable software but do not want messy shortcuts

Add delivery approach:

- Discovery
- Scope
- Design
- Build
- Test
- Launch
- Improve

Add CTA:

```txt
Book a Call
```

## Products page

Hero title:

```txt
Our product lab turns repeated problems into SaaS products.
```

Content:

- Explain that Gamma Pegassi also builds its own software products
- Sections:
  - SaaS products in development
  - Problems we like solving
  - How we decide what to build
  - Product principles

Rules:

- Do not create fake product names unless clearly marked as placeholder concepts
- Do not claim anything is launched unless configured in site data
- Use labels like:
  - Research
  - In development
  - Product Lab
  - Coming later

## About page

Mention:

- Gamma Pegassi is based in Dubai, UAE
- Founded in February 2025
- It is a technology startup focused on software services and SaaS products

Mission:

```txt
To build practical software systems that help teams move faster, operate clearer, and scale with less chaos.
```

Principles:

- Build useful software
- Move fast without destroying quality
- Keep systems maintainable
- Design and engineering belong together
- Automate real work, not fake demos
- Communicate honestly

Rules:

- Do not add fake team photos
- Do not invent founder bios unless provided
- Do not invent a long company history

## Contact page

Hero title:

```txt
Book a call with Gamma Pegassi.
```

Content:

- Include Calendly section
- Include simple static inquiry form UI
- Include direct email from config
- Include location: Dubai, UAE

Form fields:

- Name
- Email
- Company
- Project type
- Budget range
- Timeline
- Message

Static form rule:

Because this is a static site, do not wire the form to a backend unless config exists.

Add clear TODO comments for connecting one of these later:

- Formspree
- Tally
- custom VPS endpoint
- email service provider

## Configuration

Create `lib/site.ts` with:

- `companyName: "Gamma Pegassi"`
- legalName placeholder
- `location: "Dubai, United Arab Emirates"`
- `founded: "February 2025"`
- email placeholder
- calendlyUrl from `NEXT_PUBLIC_CALENDLY_URL`
- whatsappUrl optional
- social links optional
- logo paths
- navigation links
- `heroVisualMode: "static" | "motion"`
- services data
- product lab data

Suggested config shape:

```ts
export const site = {
  companyName: "Gamma Pegassi",
  location: "Dubai, United Arab Emirates",
  founded: "February 2025",
  email: "hello@gammpegassi.com",
  calendlyUrl: process.env.NEXT_PUBLIC_CALENDLY_URL,
  heroVisualMode: "motion",
  logo: {
    mark: "/brand/pegassi-mark.png",
  },
  nav: [
    { label: "Services", href: "/services" },
    { label: "Products", href: "/products" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
};
```

## SEO

Add:

- title and metadata for each page
- Open Graph metadata
- Twitter card metadata
- `robots.txt`
- `sitemap.xml` or static sitemap compatible with static export
- Organization JSON-LD:
  - name: Gamma Pegassi
  - location: Dubai, UAE
  - url from config
  - logo from config
  - sameAs from config if available
- semantic HTML
- alt text for logo and important visuals

## Component structure

Create clean components:

```txt
components/layout/Navbar.tsx
components/layout/Footer.tsx
components/layout/MobileMenu.tsx
components/sections/Hero.tsx
components/sections/ServicesBento.tsx
components/sections/ProductLab.tsx
components/sections/ProcessTimeline.tsx
components/sections/WhyGammaPegassi.tsx
components/sections/BookingCTA.tsx
components/sections/ContactForm.tsx
components/ui/Button.tsx
components/ui/Card.tsx
components/ui/Reveal.tsx
components/ui/SectionLabel.tsx
components/visuals/HeroStaticVisual.tsx
components/visuals/HeroMotionExperiment.tsx
lib/site.ts
lib/seo.ts
app/globals.css
```

## Required project files

Create:

```txt
package.json
next.config.ts or next.config.mjs
tsconfig.json
tailwind.config.ts
postcss.config.mjs
eslint config
app/layout.tsx
app/page.tsx
app/services/page.tsx
app/products/page.tsx
app/about/page.tsx
app/contact/page.tsx
public/robots.txt
public/sitemap.xml
README.md
AGENTS.md
```

## Next config

Configure static export:

```ts
output: "export"
```

If using `next/image`, configure:

```ts
images: { unoptimized: true }
```

Avoid dynamic features that break static export.

## README.md requirements

README.md must include:

- Project overview
- How to run locally
- How to build
- How to deploy `/out` to VPS/Nginx
- How to change the logo
- How to change Calendly URL
- How to switch `heroVisualMode` from `"motion"` to `"static"`

## AGENTS.md requirements

AGENTS.md must include:

- Do not create fake company claims
- Do not redesign logo
- Keep static export working
- Do not add backend/API routes
- Keep design premium and non-generic
- Run build before final response

## Implementation rules

- Keep copy editable in data/config files where possible
- Use reusable components
- No messy hardcoding
- No fake claims
- No stock photos unless explicitly provided
- No generic AI illustrations
- No random 3D robots
- No excessive glow
- No overcomplicated scroll hijacking
- No broken mobile layout
- No hydration errors
- No console errors
- No TypeScript errors
- `npm run build` must pass
- Static export must work

## Booking

- Use Calendly
- Use `NEXT_PUBLIC_CALENDLY_URL`
- If URL exists, render inline embed on contact page
- For navbar and CTA buttons, link to `/contact`
- Do not require backend for booking

## Responsive behavior

Desktop:

- premium full layout with bento grids and scroll animations

Tablet:

- keep grids clean and readable

Mobile:

- simplify hero visual
- reduce animation intensity
- keep CTA visible
- make mobile menu smooth and accessible
- avoid heavy effects

## Accessibility

- Respect `prefers-reduced-motion`
- All buttons and links must be keyboard accessible
- Use aria labels where needed
- Maintain good color contrast
- Do not place important text only inside images
- Use semantic sections and headings

## Performance

- Avoid heavy bundles
- Lazy-load non-critical animation components
- Do not use unnecessary large libraries
- Optimize images
- Avoid layout shift
- Use CSS transforms and opacity for motion
- Ensure the site feels fast

## Design quality bar

The site should look like a high-end independent software studio/startup from Dubai.

It should feel custom, sharp, and premium.

It should not look like a generic Tailwind SaaS template.

It should not look like it was generated by AI.

The Pegasus/wing logo should drive the visual language subtly.

## Final acceptance criteria

- Project is created inside the current folder
- Logo file is preserved and copied to `public/brand/pegassi-mark.png`
- `npm install` works
- `npm run dev` works
- `npm run build` works
- Static export creates `/out`
- All pages load correctly
- Navbar links work
- Mobile menu works
- Calendly URL is configurable
- Logo uses `/public/brand/pegassi-mark.png`
- The logo is not redesigned
- Animations work
- Static hero mode works
- Motion hero mode works
- Changing `heroVisualMode` to `"static"` removes the experimental hero animation cleanly
- Reduced motion works
- Site is responsive
- SEO metadata exists
- Contact page works as a static page
- No fake clients
- No fake case studies
- No fake testimonials
- No fake awards
- No fake metrics
- No fake team members
- Website feels premium, modern, and custom

## After implementation

1. Run `npm install` if dependencies are not installed.
2. Run `npm run build`.
3. Fix any errors.
4. Give a short final summary of:
   - What was created
   - How to run it
   - How to build it
   - Where to change the logo
   - Where to change Calendly
   - How to switch `heroVisualMode` to static
