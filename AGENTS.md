# Gamma Pegassi Project Rules

- Do not create fake company claims, clients, testimonials, numbers, team members, awards, partners, press mentions, or case studies.
- Do not publish tax registration numbers, license numbers, manager names, certificate scans, QR codes, private emails, or personal phone numbers unless explicitly configured for public site use.
- Do not redesign, regenerate, warp, or replace the logo shape. Use the provided logo asset at `public/brand/pegassi-mark.png`.
- Keep the site static-export compatible with `output: "export"` and an `out/` deployment target.
- Do not add backend code, API routes, middleware, server actions, authentication, or database requirements.
- Keep public company content centralized in `lib/site.ts` where practical, including email, location, public address, company credentials, services, technology areas, and product status.
- Keep the design premium, precise, non-generic, and aligned with a Dubai-based software studio.
- Keep experimental hero animation isolated in `components/visuals/HeroMotionExperiment.tsx` and controlled by `heroVisualMode` in `lib/site.ts`.
- Respect reduced motion and keep all content readable without animation.
- Run `npm run build` before any final response after code changes.
