import {
  Activity,
  Blocks,
  Bot,
  BrainCircuit,
  Building2,
  CloudCog,
  Code2,
  Gauge,
  Headphones,
  LayoutDashboard,
  LineChart,
  Network,
  Rocket,
  ShieldCheck,
  Store,
  UsersRound,
  Workflow,
} from "lucide-react";

export type HeroVisualMode = "static" | "motion";

export const site = {
  companyName: "Gamma Pegassi",
  legalName: "Gamma Pegassi TB L.L.C-FZ",
  description:
    "Gamma Pegassi is a Dubai-based technology startup and software studio building practical software systems, AI-assisted workflows, and SaaS products for teams that need reliable digital operations.",
  shortPositioning:
    "Software, AI, and business systems built with precision, simplicity, and long-term intent.",
  location: "Dubai, United Arab Emirates",
  publicAddress: "Meydan Grandstand, 6th floor, Meydan Road, Nad Al Sheba, Dubai, UAE",
  freeZone: "Meydan Free Zone",
  founded: "February 2025",
  foundedDisplay: "Founded in 2025",
  licensedActivities: [
    "General Trading",
    "Computer programming, consultancy and related activities",
  ],
  email: "hello@gammapegassi.com",
  url: "https://gammapegassi.com",
  calendlyUrl: process.env.NEXT_PUBLIC_CALENDLY_URL,
  whatsappUrl: process.env.NEXT_PUBLIC_WHATSAPP_URL,
  heroVisualMode: "motion" as HeroVisualMode,
  logo: {
    mark: "/brand/pegassi-mark.png",
  },
  nav: [
    { label: "Services", href: "/services" },
    { label: "Products", href: "/products" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
  socialLinks: [] as Array<{ label: string; href: string }>,
};

export const positioningStrip = [
  "Dubai, UAE",
  "Meydan Free Zone",
  "Founded in 2025",
  "Software Services",
  "SaaS Products",
  "AI & Automation",
];

export const companyCredentials = [
  {
    title: "Dubai, UAE",
    description:
      "Based in Dubai, United Arab Emirates, with a public business address at Meydan Grandstand, Nad Al Sheba.",
    icon: Building2,
  },
  {
    title: "Meydan Free Zone",
    description: "Established through Meydan Free Zone as Gamma Pegassi TB L.L.C-FZ.",
    icon: ShieldCheck,
  },
  {
    title: "Licensed technology activities",
    description:
      "Licensed for computer programming, consultancy, and related activities, alongside general trading.",
    icon: Code2,
  },
  {
    title: "Founded in 2025",
    description:
      "A new company by design, focused on useful systems, honest delivery, and long-term quality.",
    icon: Rocket,
  },
];

export const services = [
  {
    title: "SaaS MVP Development",
    description:
      "Focused first versions for founders who need to validate a product with clean architecture and room to grow.",
    icon: Rocket,
  },
  {
    title: "Custom Web Platforms",
    description:
      "Secure portals, operational platforms, and business-critical web systems shaped around real workflows.",
    icon: Blocks,
  },
  {
    title: "Internal Tools & Dashboards",
    description:
      "Interfaces that turn scattered data and manual decisions into faster, clearer daily operations.",
    icon: LayoutDashboard,
  },
  {
    title: "AI Workflow Integration",
    description:
      "Practical AI-assisted flows connected to existing tools, policies, and measurable business tasks.",
    icon: Bot,
  },
  {
    title: "Automation Systems",
    description:
      "Reliable automations for repetitive work, approvals, notifications, reporting, and handoffs.",
    icon: Workflow,
  },
  {
    title: "Maintenance & Scaling",
    description:
      "Ongoing improvements that keep systems stable, observable, secure, and easier to extend.",
    icon: ShieldCheck,
  },
];

export const detailedServices = [
  ...services,
  {
    title: "Business Dashboards",
    description:
      "Decision-focused dashboards for leadership, operations, sales, finance, and project teams.",
    icon: Gauge,
  },
  {
    title: "API & Integration Work",
    description:
      "Connections between SaaS tools, payment services, CRMs, spreadsheets, databases, and internal systems.",
    icon: Network,
  },
];

export const processSteps = [
  {
    title: "Understand",
    description:
      "Map the business objective, users, constraints, risks, and the workflows the software must improve.",
  },
  {
    title: "Design",
    description:
      "Turn the problem into a focused product shape with clear flows, technical choices, and scope boundaries.",
  },
  {
    title: "Build",
    description:
      "Develop the system in tight increments with maintainable code, visible progress, and practical tradeoffs.",
  },
  {
    title: "Launch",
    description:
      "Ship with testing, production-ready details, documentation, and a clean path for handover or continued work.",
  },
  {
    title: "Improve",
    description:
      "Use feedback, data, and operational reality to refine the system after it meets real users.",
  },
];

export const capabilities = [
  {
    title: "Software Development",
    points: [
      "SaaS MVPs and first product versions",
      "Custom web platforms and portals",
      "Internal tools and dashboards",
      "API integrations and workflow systems",
      "Deployment, training, and ongoing support",
    ],
    icon: Code2,
  },
  {
    title: "AI & Analytics",
    points: [
      "AI-assisted business workflows",
      "Data dashboards and analytics",
      "Predictive analytics and decision support",
      "NLP and image-processing use cases",
      "Reporting and business visibility",
    ],
    icon: BrainCircuit,
  },
  {
    title: "Business Systems",
    points: [
      "CRM and ERP-style internal systems",
      "POS and branch operation workflows",
      "Inventory and reporting systems",
      "Order management and operational dashboards",
      "Connected systems instead of disconnected tools",
    ],
    icon: Store,
  },
  {
    title: "Outsourcing & Dedicated Teams",
    points: [
      "Talent sourcing and vetting",
      "Dedicated team setup",
      "Remote workforce management",
      "Process outsourcing and automation",
      "Quality assurance and performance tracking",
    ],
    icon: UsersRound,
  },
  {
    title: "Cloud, DevOps & Operations",
    points: [
      "Dockerized deployment workflows",
      "Nginx-based production serving",
      "CI/CD with GitHub Actions",
      "Monitoring, errors, logs, and observability",
      "Scalable cloud deployment planning",
    ],
    icon: CloudCog,
  },
  {
    title: "Maintenance & Scaling",
    points: [
      "Post-launch support",
      "Performance and stability improvements",
      "Feature iteration after real users",
      "Documentation and handover",
      "Long-term maintainability",
    ],
    icon: Headphones,
  },
];

export const technologyAreas = [
  {
    title: "Frontend",
    items: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Angular", "React Native", "Flutter"],
  },
  {
    title: "Backend",
    items: ["NestJS", "Node.js", "FastAPI", "Python", ".NET", "Django"],
  },
  {
    title: "AI & Data",
    items: ["NLP", "OpenCV", "PyTorch", "Scikit-learn", "Power BI", "Predictive Analytics"],
  },
  {
    title: "Database",
    items: ["PostgreSQL", "Redis", "SQL"],
  },
  {
    title: "Cloud & DevOps",
    items: ["AWS", "Azure", "GCP", "Docker", "GitHub Actions", "Nginx"],
  },
  {
    title: "Monitoring & Observability",
    items: ["Sentry", "Prometheus", "Grafana", "ELK", "OpenSearch"],
  },
];

export const detailedDeliverySteps = [
  {
    title: "Consultation & Requirement Analysis",
    description:
      "We assess the business goal, users, workflows, constraints, and technical requirements before deciding what should be built.",
  },
  {
    title: "Strategic Planning & Project Scoping",
    description:
      "We define the scope, delivery path, priorities, timeline, and risks so the project starts with clear expectations.",
  },
  {
    title: "Design & Prototyping",
    description:
      "We turn requirements into user flows, interface direction, and practical product structure before heavy development begins.",
  },
  {
    title: "Development & Integration",
    description:
      "We build in focused increments, connect systems, integrate APIs, and keep the implementation maintainable.",
  },
  {
    title: "Testing & Quality Assurance",
    description:
      "We test core flows, edge cases, performance, and production readiness before launch.",
  },
  {
    title: "Deployment, Training & Ongoing Support",
    description:
      "We support launch, documentation, handover, training, and post-launch improvements.",
  },
];

export const productLab = [
  {
    label: "In development",
    title: "Operational SaaS systems",
    description:
      "Focused tools for teams that need clearer internal workflows, approvals, and recurring business processes.",
  },
  {
    label: "Research",
    title: "Automation-first products",
    description:
      "Ideas shaped around reducing repetitive work without adding another heavy platform to manage.",
  },
  {
    label: "Product Lab",
    title: "Founder-grade MVP patterns",
    description:
      "Reusable product foundations that help new SaaS ideas reach real validation faster.",
  },
];

export const tash8eelAi = {
  label: "MVP stage / pilot-ready",
  name: "Tash8eel AI",
  title: "Tash8eel AI - intelligent operations for stores and restaurants.",
  description:
    "Tash8eel AI is an AI-driven merchant operating system for restaurants, cafes, retail shops, and multi-branch businesses. It connects customer communication, orders, POS and cashier workflows, inventory visibility, finance, reports, calls, and automations into one platform.",
  detail:
    "Tash8eel AI is being shaped as a connected operating platform for merchants who deal with scattered messages, manual orders, cashier workflows, stock updates, and reporting gaps. The goal is to bring daily operations into one practical system instead of disconnected tools.",
  note: "Public launch details will be announced when the product is ready.",
  appUrl: "https://app.gammapegassi.com",
  operator: "Gamma Pegassi TB L.L.C-FZ",
  ownerLocation: "Dubai, United Arab Emirates",
  capabilities: [
    "WhatsApp, Messenger, and Instagram customer communication",
    "AI replies and order capture",
    "Customer conversations in Egyptian Arabic where relevant",
    "POS / cashier workflows",
    "Inventory visibility and low-stock alerts",
    "Reports and analytics",
    "AI call-handling concept",
    "Follow-up automation for customers and operations",
    "Order management from multiple channels",
    "Business visibility across sales, inventory, and workflows",
  ],
};

export const tash8eelPublicLinks = [
  { label: "Tash8eel AI", href: "/tash8eel" },
  { label: "Privacy Policy", href: "/tash8eel/privacy" },
  { label: "Terms of Service", href: "/tash8eel/terms" },
  { label: "Data Deletion", href: "/tash8eel/data-deletion" },
];

export const tash8eelLandingSections = [
  {
    title: "What Tash8eel AI does",
    description:
      "Tash8eel AI connects customer communication, orders, POS and cashier workflows, inventory visibility, finance, reports, calls, and automations into one merchant operating layer.",
  },
  {
    title: "Channels and integrations",
    description:
      "The platform is designed to support merchant communication across WhatsApp, Messenger, Instagram, and related business integrations where approved and configured.",
  },
  {
    title: "AI operations layer",
    description:
      "AI-assisted workflows help capture orders, classify requests, support replies, summarize activity, and surface operational context for merchant teams.",
  },
  {
    title: "Merchant control and human escalation",
    description:
      "Merchants stay in control of customer communication, templates, business settings, staff workflows, and when conversations should move to a human operator.",
  },
  {
    title: "Security and data handling",
    description:
      "Tash8eel AI is designed around practical access control, service-provider integrations, operational logs, and data handling practices suitable for merchant workflows.",
  },
  {
    title: "Public review links",
    description:
      "Privacy Policy, Terms of Service, and Data Deletion Instructions are publicly available for platform review, merchants, users, and authorized requesters.",
  },
];

export const principles = [
  "Build useful software",
  "Move fast without destroying quality",
  "Keep systems maintainable",
  "Design and engineering belong together",
  "Automate real work, not fake demos",
  "Communicate honestly",
];

export const whyPoints = [
  {
    title: "Realistic timelines",
    description:
      "We avoid overpromising and define delivery expectations clearly before implementation.",
    icon: Activity,
  },
  {
    title: "Long-term quality",
    description:
      "Systems are built to stay understandable, maintainable, and extendable after launch.",
    icon: ShieldCheck,
  },
  {
    title: "Budget visibility",
    description:
      "We keep scope, tradeoffs, and priorities visible so decisions are made with context.",
    icon: LineChart,
  },
  {
    title: "Proactive post-launch support",
    description:
      "The work does not stop at launch. We support stability, performance, and continuous improvement.",
    icon: Headphones,
  },
  {
    title: "Partner mindset",
    description: "We work as a technical partner, not just a vendor delivering screens.",
    icon: Workflow,
  },
  {
    title: "Clear communication",
    description:
      "Risks, decisions, and technical choices are explained in plain language.",
    icon: Network,
  },
];
