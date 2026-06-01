# Gamma Pegassi Website Patch Brief

Use this as the source of truth for the next Codex patch.

## Task

Continue the existing Gamma Pegassi static Next.js website.

Do **not** rebuild from scratch.  
Do **not** redesign the whole site.  
Do **not** change or regenerate the logo.  
Do **not** add fake clients, testimonials, metrics, awards, case studies, partners, press, or team members.  
Keep the dark premium design, bento layout, ice-blue accents, subtle glassmorphism, and existing animation system.  
Keep static export working.  
Run `npm run build` before finishing.

## Goal

Make the website feel more specific to Gamma Pegassi by adding real company content from the PDFs/company materials, while keeping the current premium UI direction.

## Public-safe company facts

- Company name: Gamma Pegassi
- Legal/public name: Gamma Pegassi TB L.L.C-FZ
- Location: Dubai, United Arab Emirates
- Free zone: Meydan Free Zone
- Public address: Meydan Grandstand, 6th floor, Meydan Road, Nad Al Sheba, Dubai, UAE
- Founded / license issue date: February 2025
- Company type: technology startup and software studio
- Licensed activities include:
  - General Trading
  - Computer programming, consultancy and related activities

## Do not publish

- Tax registration number
- License number, unless configured later
- Manager names
- Certificate scans
- QR codes
- Private/personal emails from PDFs
- Personal phone numbers unless configured in `lib/site.ts`

Use the public email from config. Default: `hello@gammpegassi.com`.

## Brand positioning

Main positioning:

> Gamma Pegassi is a Dubai-based technology startup and software studio building practical software systems, AI-assisted workflows, and SaaS products for teams that need reliable digital operations.

Shorter version:

> Software, AI, and business systems built with precision, simplicity, and long-term intent.

Tone: premium, precise, technical, calm, direct, trustworthy, product-minded, not overhyped.

Avoid:
- revolutionary digital transformation
- cutting-edge solutions for everyone
- trusted by leading brands
- award-winning
- 100+ successful projects
- world-class team

Prefer:
- practical systems
- clear workflows
- maintainable software
- realistic timelines
- reliable delivery
- product-minded engineering
- AI-assisted operations
- post-launch stability
- budget visibility
- partner mindset

---

# Required Changes

## 1. Homepage copy refresh

Keep the current hero design.

Hero label:

```txt
Dubai software studio
```

Hero headline:

```txt
Software, AI, and business systems built with clarity.
```

Hero subheadline:

```txt
Gamma Pegassi is a Dubai-based technology startup and software studio building practical software systems, AI-assisted workflows, and SaaS products for teams that need reliable digital operations.
```

Hero CTAs:
- Book a Call
- Explore Services

Positioning strip:
- Dubai, UAE
- Meydan Free Zone
- Founded in 2025
- Software Services
- SaaS Products
- AI & Automation

## 2. About page: Company Credentials section

Add a section titled:

```txt
Dubai-based, legally established, and built for long-term work.
```

Cards:

### Dubai, UAE
Based in Dubai, United Arab Emirates, with a public business address at Meydan Grandstand, Nad Al Sheba.

### Meydan Free Zone
Established through Meydan Free Zone as Gamma Pegassi TB L.L.C-FZ.

### Licensed technology activities
Licensed for computer programming, consultancy, and related activities, alongside general trading.

### Founded in 2025
A new company by design, focused on useful systems, honest delivery, and long-term quality.

Do not include private/legal sensitive details.

## 3. Services page: Capabilities section

Title:

```txt
Capabilities across software, AI, and operations.
```

Intro:

```txt
Gamma Pegassi combines digital development, engineering, consulting, and ongoing support into one practical delivery model.
```

Capability cards:

### Software Development
- SaaS MVPs and first product versions
- Custom web platforms and portals
- Internal tools and dashboards
- API integrations and workflow systems
- Deployment, training, and ongoing support

### AI & Analytics
- AI-assisted business workflows
- Data dashboards and analytics
- Predictive analytics and decision support
- NLP and image-processing use cases
- Reporting and business visibility

### Business Systems
- CRM and ERP-style internal systems
- POS and branch operation workflows
- Inventory and reporting systems
- Order management and operational dashboards
- Connected systems instead of disconnected tools

### Outsourcing & Dedicated Teams
- Talent sourcing and vetting
- Dedicated team setup
- Remote workforce management
- Process outsourcing and automation
- Quality assurance and performance tracking

### Cloud, DevOps & Operations
- Dockerized deployment workflows
- Nginx-based production serving
- CI/CD with GitHub Actions
- Monitoring, errors, logs, and observability
- Scalable cloud deployment planning

### Maintenance & Scaling
- Post-launch support
- Performance and stability improvements
- Feature iteration after real users
- Documentation and handover
- Long-term maintainability

## 4. Services page: Tech Stack section

Title:

```txt
Technology areas we work with.
```

Subtitle:

```txt
Our work spans modern frontend, backend, AI, data, database, DevOps, and monitoring tools. The stack is selected based on the product, team, and operational requirements.
```

Use categorized chips/cards.

### Frontend
- Next.js
- React
- TypeScript
- Tailwind CSS
- Angular
- React Native
- Flutter

### Backend
- NestJS
- Node.js
- FastAPI
- Python
- .NET
- Django

### AI & Data
- NLP
- OpenCV
- PyTorch
- Scikit-learn
- Power BI
- Predictive Analytics

### Database
- PostgreSQL
- Redis
- SQL

### Cloud & DevOps
- AWS
- Azure
- GCP
- Docker
- GitHub Actions
- Nginx

### Monitoring & Observability
- Sentry
- Prometheus
- Grafana
- ELK
- OpenSearch

Important wording:
Do not say “we are experts in every technology.” Use “technology areas we work with” or “stack areas we can support depending on project needs.”

## 5. Services page: Detailed delivery process

Title:

```txt
How we deliver software work.
```

Steps:

### 1. Consultation & Requirement Analysis
We assess the business goal, users, workflows, constraints, and technical requirements before deciding what should be built.

### 2. Strategic Planning & Project Scoping
We define the scope, delivery path, priorities, timeline, and risks so the project starts with clear expectations.

### 3. Design & Prototyping
We turn requirements into user flows, interface direction, and practical product structure before heavy development begins.

### 4. Development & Integration
We build in focused increments, connect systems, integrate APIs, and keep the implementation maintainable.

### 5. Testing & Quality Assurance
We test core flows, edge cases, performance, and production readiness before launch.

### 6. Deployment, Training & Ongoing Support
We support launch, documentation, handover, training, and post-launch improvements.

## 6. Why Gamma Pegassi

Title:

```txt
Why teams work with Gamma Pegassi.
```

Cards:

### Realistic timelines
We avoid overpromising and define delivery expectations clearly before implementation.

### Long-term quality
Systems are built to stay understandable, maintainable, and extendable after launch.

### Budget visibility
We keep scope, tradeoffs, and priorities visible so decisions are made with context.

### Proactive post-launch support
The work does not stop at launch. We support stability, performance, and continuous improvement.

### Partner mindset
We work as a technical partner, not just a vendor delivering screens.

### Clear communication
Risks, decisions, and technical choices are explained in plain language.

## 7. Products page: Tash8eel AI

Add a stronger product-lab section.

Do not claim:
- fully launched
- active customers
- revenue
- fake screenshots

Label it clearly as:

```txt
Product Lab / In development
```

Product name:

```txt
Tash8eel AI
```

Short description:

```txt
Tash8eel AI is an intelligent operations platform concept for shops, restaurants, and small businesses. It connects customer communication, orders, POS, inventory, calls, reports, and automation into one operating system.
```

Capabilities:
- WhatsApp, Messenger, and Instagram customer communication
- AI replies and order capture
- Customer conversations in Egyptian Arabic where relevant
- POS / cashier workflows
- Inventory visibility and low-stock alerts
- Reports and analytics
- AI call-handling concept
- Follow-up automation for customers and operations
- Order management from multiple channels
- Business visibility across sales, inventory, and workflows

Suggested section title:

```txt
Tash8eel AI — intelligent operations for stores and restaurants.
```

Suggested copy:

```txt
Tash8eel AI is being shaped as a connected operating platform for merchants who deal with scattered messages, manual orders, cashier workflows, stock updates, and reporting gaps. The goal is to bring daily operations into one practical system instead of disconnected tools.
```

Add this note:

```txt
Public launch details will be announced when the product is ready.
```

Keep existing product-lab categories too:
- Operational SaaS systems
- Automation-first products
- Founder-grade MVP patterns

## 8. Visual influence from company deck

The company deck uses dark backgrounds with chrome/liquid abstract objects.

Do not copy it directly.

Add subtle visual alignment:
- low-opacity metallic/chrome abstract accents
- CSS/SVG gradients or lightweight decorative shapes
- use them only in hero backgrounds, product cards, section dividers, or footer glow
- keep them subtle and premium
- no heavy 3D
- no robots
- no cubes
- no generic AI graphics
- no crypto-template look
- do not reduce readability

Suggested reusable component:

```txt
components/visuals/ChromeAccent.tsx
```

It should be decorative and set `aria-hidden="true"`.

## 9. Contact page refinement

Hero title:

```txt
Book a call with Gamma Pegassi.
```

Subheadline:

```txt
Share the product, platform, dashboard, automation, or workflow you want to build. The first step is a clear conversation.
```

Booking panel title:

```txt
Start with a short project note.
```

Booking panel copy:

```txt
Send the essentials and Gamma Pegassi will reply with the clearest next step and available call times.
```

Helper copy:

```txt
Use the inquiry form if you want to send project context first. Use the Book a Call button if you already have a Calendly link configured.
```

If `NEXT_PUBLIC_CALENDLY_URL` is set, show Calendly or a direct booking CTA.  
If not set, keep form and email path.  
Do not create backend/API routes.

## 10. Fixes

Fix favicon:
- Current logs showed `/favicon.ico` returning 404.
- Add `favicon.ico` or valid metadata icon using the existing logo mark if possible.
- Add simple icon metadata if appropriate.

Centralize email:
- All emails should come from `lib/site.ts`.
- Default: `hello@gammpegassi.com`.
- Do not use private emails from PDFs.

Centralize location:
- Use `Dubai, United Arab Emirates`.
- Public address where needed:
  `Meydan Grandstand, 6th floor, Meydan Road, Nad Al Sheba, Dubai, UAE`

Check:
- navbar links
- footer links
- hover/focus states
- reduced motion
- mobile layout
- build

## 11. Accessibility and animation rules

Animation should:
- guide attention
- confirm interaction
- make sections feel smooth
- not distract from content

Do not add animations that:
- spin the logo
- distort the logo
- hijack scroll
- make text hard to read
- slow the site
- feel like a game intro
- feel like a generic AI template

Technical rules:
- Respect `prefers-reduced-motion`.
- Animate mainly `transform` and `opacity`.
- Decorative visuals must be `aria-hidden`.
- Buttons and links must be keyboard accessible.
- Inputs must have labels.
- Maintain good contrast.
- Do not hide important text inside images.

## File organization

- Keep copy editable in `lib/site.ts` or structured content files.
- Reuse existing components.
- Add new components only where useful.
- Avoid duplicating the same content in multiple files.
- Keep static export compatible.

## Acceptance criteria

- Existing project remains intact.
- Current design direction remains premium and dark.
- Website feels more specific to Gamma Pegassi.
- About page includes public-safe Dubai/Meydan credentials.
- Services page includes Capabilities and Tech Stack.
- Services page includes detailed delivery process.
- Products page includes Tash8eel AI as Product Lab / In development.
- Contact page wording is clearer.
- Favicon no longer returns 404.
- No private legal/tax/manager details are exposed.
- No fake claims are added.
- `npm run build` passes.
- Static export still creates `out/`.

## Final response

After finishing, summarize:

1. What sections were added or changed
2. Changed files
3. Build result
4. Where to edit:
   - company content
   - email
   - location
   - Calendly URL
   - heroVisualMode
   - Tash8eel product status
