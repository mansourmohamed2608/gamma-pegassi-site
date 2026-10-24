import {
  Activity,
  Blocks,
  Bot,
  BrainCircuit,
  Building2,
  CloudCog,
  Code2,
  Gamepad2,
  Gauge,
  Headphones,
  Layers3,
  LayoutDashboard,
  LineChart,
  Network,
  Rocket,
  ShieldCheck,
  SlidersHorizontal,
  Sparkles,
  Store,
  TestTube2,
  UsersRound,
  Workflow,
} from "lucide-react";

export type HeroVisualMode = "static" | "motion";

export const site = {
  companyName: "Gamma Pegassi",
  legalName: "Gamma Pegassi TB L.L.C-FZ",
  description:
    "Gamma Pegassi is a Dubai-based technology studio building custom software, AI-assisted business systems, SaaS products, and interactive game experiences.",
  shortPositioning:
    "Software, AI, and game development shaped with clarity, technical care, and long-term intent.",
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
  contactFormEndpoint: process.env.NEXT_PUBLIC_CONTACT_FORM_ENDPOINT,
  heroVisualMode: "motion" as HeroVisualMode,
  logo: { mark: "/brand/pegassi-mark.png" },
  nav: [
    { label: "Services", href: "/services" },
    { label: "Game Studio", href: "/game-development" },
    { label: "Our Work", href: "/our-work" },
    { label: "Products", href: "/products" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
  socialLinks: [
    { label: "Gamma Pegassi on LinkedIn", href: "https://www.linkedin.com/company/gamma-pegassi/" },
  ],
};

export const companyWork = [
  {
    label: "Company product / MVP stage",
    title: "Tash8eel AI",
    description:
      "A Gamma Pegassi product being developed to connect merchant communication, orders, cashier workflows, inventory visibility, reporting, and operational automation.",
    status: "MVP stage / pilot-ready",
    href: "/tash8eel",
    linkLabel: "Review product status",
    areas: ["Merchant operations", "Workflow automation", "AI-assisted operations"],
  },
];

export const gameTechnologyAreas = [
  {
    title: "Engine & platform fit",
    description:
      "Engine, language, target devices, and build constraints are confirmed during scoping instead of being presented as a fixed stack.",
  },
  {
    title: "Gameplay implementation",
    description:
      "Core loops, player controls, progression, interactions, and reusable systems are defined around the intended experience.",
  },
  {
    title: "Content pipeline",
    description:
      "Asset handoff, implementation boundaries, versioning, and performance budgets are agreed with the creative and technical teams.",
  },
  {
    title: "Testing & profiling",
    description:
      "Test plans, target hardware, regression coverage, and runtime bottlenecks are reviewed against measurable project goals.",
  },
];

export const positioningStrip = [
  "Dubai, UAE",
  "Custom Software",
  "AI & Automation",
  "Business Systems",
  "Game Development",
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
      "A young studio focused on useful systems, transparent delivery, and work designed to last.",
    icon: Rocket,
  },
];

export const homeServices = [
  {
    number: "01",
    title: "Software Development",
    description:
      "Custom web platforms, mobile applications, SaaS products, internal systems, and integrations built around real workflows.",
    href: "/services#software-development",
    icon: Code2,
  },
  {
    number: "02",
    title: "AI & Automation",
    description:
      "AI-assisted systems, analytics, and automations that reduce repetitive work and make operational information more useful.",
    href: "/services#ai-business-systems",
    icon: BrainCircuit,
  },
  {
    number: "03",
    title: "Game Development Studio",
    description:
      "Prototyping, gameplay systems, design implementation, testing, and optimization for interactive experiences.",
    href: "/game-development",
    icon: Gamepad2,
  },
  {
    number: "04",
    title: "Dedicated Teams & Collaboration",
    description:
      "Scoped delivery, technical collaboration, integration support, and dedicated capacity shaped to the project.",
    href: "/services#dedicated-teams",
    icon: UsersRound,
  },
];

export const serviceGroups = [
  {
    id: "software-development",
    label: "Build",
    title: "Software Development",
    description:
      "From focused first versions to operational platforms, we shape software around the people and processes that will use it.",
    points: [
      "Custom web platforms and portals",
      "Mobile application development",
      "SaaS MVPs and product foundations",
      "Internal tools and dashboards",
      "API integrations and connected workflows",
      "Maintenance, scaling, and technical handover",
    ],
    icon: Code2,
  },
  {
    id: "ai-business-systems",
    label: "Improve",
    title: "AI & Business Systems",
    description:
      "Practical intelligence for operations: clearer reporting, less repetitive work, and connected tools that support decisions.",
    points: [
      "AI-assisted business workflows",
      "Business automation and approvals",
      "Operational dashboards and analytics",
      "CRM and ERP-style internal systems",
      "Order, inventory, and reporting workflows",
      "Project-fit data and AI integrations",
    ],
    icon: Bot,
  },
  {
    id: "game-development",
    label: "Create",
    title: "Game Development Studio",
    description:
      "Focused support from early playable ideas through systems implementation, testing, and performance refinement.",
    points: [
      "Game design and rapid prototyping",
      "Gameplay systems and mechanics",
      "Level design implementation",
      "Game UI and player controls",
      "Testing and quality assurance",
      "Performance optimization",
    ],
    href: "/game-development",
    icon: Gamepad2,
  },
  {
    id: "dedicated-teams",
    label: "Collaborate",
    title: "Dedicated Teams & Technical Collaboration",
    description:
      "Flexible engineering capacity for teams that need defined ownership, dependable communication, and clean integration with existing work.",
    points: [
      "Scoped development engagements",
      "Dedicated technical capacity",
      "Integration with existing product teams",
      "Quality assurance and delivery support",
      "Documentation and knowledge transfer",
      "Ongoing technical maintenance",
    ],
    icon: UsersRound,
  },
];

export const gameServices = [
  {
    number: "01",
    title: "Game Design & Prototyping",
    description:
      "Turn a concept into a focused playable prototype that can test the core loop before production expands.",
    icon: Sparkles,
  },
  {
    number: "02",
    title: "Gameplay Systems & Mechanics",
    description:
      "Implement responsive rules, progression, interactions, and reusable systems around the intended player experience.",
    icon: Gamepad2,
  },
  {
    number: "03",
    title: "Level Design & Implementation",
    description:
      "Translate level intent into playable spaces, encounters, pacing, triggers, and production-ready implementation.",
    icon: Layers3,
  },
  {
    number: "04",
    title: "Game UI & Player Controls",
    description:
      "Build clear interfaces, feedback states, input flows, and controls that support the game instead of interrupting it.",
    icon: SlidersHorizontal,
  },
  {
    number: "05",
    title: "Testing & Quality Assurance",
    description:
      "Test core flows, edge cases, usability, and regression risk with actionable reporting throughout development.",
    icon: TestTube2,
  },
  {
    number: "06",
    title: "Performance Optimization",
    description:
      "Profile bottlenecks, improve runtime behavior, and prioritize technical changes against the project's target experience.",
    icon: Gauge,
  },
];

export const processSteps = [
  {
    title: "Understand",
    description:
      "Map the objective, users, constraints, risks, and the experience or workflow the project needs to improve.",
  },
  {
    title: "Design",
    description:
      "Turn the brief into a focused product shape with clear flows, technical choices, and scope boundaries.",
  },
  {
    title: "Build",
    description:
      "Develop in visible increments with maintainable code, practical tradeoffs, and regular feedback.",
  },
  {
    title: "Validate",
    description:
      "Test the important paths, resolve production risks, and confirm that the work answers the original need.",
  },
  {
    title: "Launch & Improve",
    description:
      "Support release, handover, and measured iteration once the product meets real users and operating conditions.",
  },
];

export const technologyAreas = [
  {
    title: "Web & Mobile",
    items: ["Next.js", "React", "TypeScript", "Angular", "React Native", "Flutter"],
  },
  {
    title: "Backend",
    items: ["NestJS", "Node.js", "FastAPI", "Python", ".NET", "Django"],
  },
  {
    title: "AI & Data",
    items: ["NLP", "OpenCV", "PyTorch", "Scikit-learn", "Power BI", "Predictive analytics"],
  },
  {
    title: "Databases & Storage",
    items: ["PostgreSQL", "Redis", "SQL-based data modeling"],
  },
  {
    title: "Cloud, DevOps & Monitoring",
    items: ["AWS", "Azure", "GCP", "Docker", "GitHub Actions", "Nginx", "Sentry", "Grafana"],
  },
  {
    title: "Game Development",
    items: [
      "Project-fit engine selection",
      "Gameplay systems",
      "Performance profiling",
      "Test planning",
    ],
    note: "Engines, languages, target platforms, and production tools are selected against each project's requirements rather than presented as a fixed stack.",
  },
];

export const detailedDeliverySteps = [
  {
    title: "Consultation & Requirement Analysis",
    description:
      "We assess the goal, users, workflows, constraints, and technical requirements before deciding what should be built.",
  },
  {
    title: "Strategic Planning & Project Scoping",
    description:
      "We define scope, priorities, delivery path, dependencies, and risk so the work starts with shared expectations.",
  },
  {
    title: "Design & Prototyping",
    description:
      "We turn requirements into flows, interface direction, system behavior, and a practical product structure.",
  },
  {
    title: "Development & Integration",
    description:
      "We build in focused increments, connect systems, integrate approved services, and keep implementation maintainable.",
  },
  {
    title: "Testing & Quality Assurance",
    description:
      "We test core flows, edge cases, accessibility, performance, and production readiness before release.",
  },
  {
    title: "Deployment, Handover & Support",
    description:
      "We support launch, documentation, knowledge transfer, and the next measured round of improvement.",
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
    label: "Product foundations",
    title: "Reusable MVP patterns",
    description:
      "Reusable technical foundations intended to help new software ideas reach useful validation sooner.",
  },
];

export const tash8eelAi = {
  label: "MVP stage / pilot-ready",
  name: "Tash8eel AI",
  title: "Intelligent operations for stores and restaurants.",
  description:
    "Tash8eel AI is an AI-driven merchant operating system being developed for restaurants, cafes, retail shops, and multi-branch businesses.",
  detail:
    "The MVP brings customer communication, order handling, cashier workflows, inventory visibility, reporting, and operational automation into one connected product direction.",
  note: "Product access and pilot scope are confirmed directly with Gamma Pegassi. Public launch details will be announced when the product is ready.",
  appUrl: process.env.NEXT_PUBLIC_TASH8EEL_APP_URL,
  operator: "Gamma Pegassi TB L.L.C-FZ",
  ownerLocation: "Dubai, United Arab Emirates",
  statusGroups: [
    {
      label: "MVP focus",
      items: [
        "Customer communication and order capture",
        "POS and cashier workflows",
        "Inventory visibility and reporting",
        "Operational dashboards and follow-up automation",
      ],
    },
    {
      label: "Integration direction",
      items: [
        "WhatsApp, Messenger, and Instagram workflows where approved and configured",
        "Connected order management across supported channels",
      ],
    },
    {
      label: "Exploratory",
      items: ["AI-assisted call-handling concept"],
    },
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
    title: "Connected merchant workflows",
    description:
      "The MVP direction connects customer communication, orders, cashier workflows, inventory visibility, reporting, and automation.",
  },
  {
    title: "Configured integrations",
    description:
      "Channel and provider integrations are enabled only where they are approved, configured, and appropriate for the pilot scope.",
  },
  {
    title: "AI-assisted operations",
    description:
      "AI-assisted flows are intended to support order capture, request classification, replies, summaries, and operational context.",
  },
  {
    title: "Human control",
    description:
      "Merchant teams remain responsible for business settings, staff workflows, customer communication, and human escalation.",
  },
  {
    title: "Practical data handling",
    description:
      "The product is designed around access control, provider integrations, operational logs, and merchant workflow requirements.",
  },
  {
    title: "Public review links",
    description:
      "Privacy, terms, and data-deletion information remain publicly available for product review and authorized requests.",
  },
];

export const principles = [
  "Start with the real problem",
  "Make scope and tradeoffs visible",
  "Design and engineering together",
  "Keep systems maintainable",
  "Validate before expanding",
  "Communicate in plain language",
];

export const whyPoints = [
  {
    title: "Scope with a reason",
    description:
      "Every feature and technical choice is tied back to a user, operating need, or measurable project goal.",
    icon: Activity,
  },
  {
    title: "Maintainable by design",
    description:
      "We value understandable systems, documented decisions, and a clean path for future teams to extend the work.",
    icon: ShieldCheck,
  },
  {
    title: "Visible tradeoffs",
    description:
      "Priorities, constraints, risk, and budget implications stay visible so decisions can be made with context.",
    icon: LineChart,
  },
  {
    title: "One collaborative process",
    description:
      "Creative, technical, and operational questions are handled together instead of being passed between silos.",
    icon: Workflow,
  },
];

// Retained exports for existing page compatibility while public content stays centralized here.
export const services = homeServices;
export const detailedServices = homeServices;
export const capabilities = serviceGroups;

export const supportingServiceIcons = {
  blocks: Blocks,
  dashboard: LayoutDashboard,
  network: Network,
  cloud: CloudCog,
  support: Headphones,
  store: Store,
};
