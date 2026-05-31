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

## Deploy To VPS/Nginx

Build the project, then copy the contents of `out/` to your Nginx web root.

Example:

```bash
npm run build
rsync -av out/ user@server:/var/www/gamma-pegassi/
```

Point the Nginx site root at that folder and serve it as static files. No Node server, backend, database, API routes, or authentication are required in production.

## Change The Logo

Replace `public/brand/pegassi-mark.png` with the approved transparent square logo mark. Do not redesign the logo or use a white-background wordmark in the dark navbar.

## Change Calendly

Set the public environment variable before building or running locally:

```bash
NEXT_PUBLIC_CALENDLY_URL="https://calendly.com/your-link" npm run build
```

If no URL is provided, the contact page shows a static inquiry form and direct email path.

## Switch Hero Visual Mode

Edit `lib/site.ts`:

```ts
heroVisualMode: "static"
```

Use `"motion"` to restore the isolated animated hero in `components/visuals/HeroMotionExperiment.tsx`.
