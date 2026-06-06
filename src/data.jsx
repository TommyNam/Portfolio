// ─── DATA ────────────────────────────────────────────────────────────────────

const NAV_ITEMS = [
  { id: "hero", label: "HOME_BASE" },
  { id: "about", label: "THE_LORE" },
  { id: "skills", label: "THE_GEAR" },
  { id: "projects", label: "QUEST_LOG" },
  { id: "contact", label: "SEND_RAVEN" },
];

const SKILLS = [
  { name: "Django / Python", level: 88, category: "backend", icon: "🐍" },
  { name: "React / Next.js", level: 85, category: "frontend", icon: "⚛" },
  { name: "Node.js / Express", level: 80, category: "backend", icon: "🟩" },
  { name: "MongoDB / Mongoose", level: 78, category: "database", icon: "🍃" },
  { name: "PostgreSQL", level: 75, category: "database", icon: "🐘" },
  { name: "TypeScript", level: 82, category: "frontend", icon: "📘" },
  { name: "Docker / K8s", level: 70, category: "devops", icon: "🐳" },
  { name: "AWS / Cloud", level: 68, category: "devops", icon: "☁" },
];

const PROJECTS = [
  {
    id: 1,
    title: "Project Alpha",
    subtitle: "Full-Stack SaaS Platform",
    description:
      "A multi-tenant SaaS platform with real-time collaboration, role-based auth, and subscription billing. Built for scale with microservice-ready architecture.",
    tech: ["Django", "React", "PostgreSQL", "Redis", "Stripe"],
    status: "DEPLOYED",
    liveUrl: "#",
    codeUrl: "#",
    year: "2024",
  },
  {
    id: 2,
    title: "Project Beta",
    subtitle: "Real-Time Analytics Dashboard",
    description:
      "Interactive analytics dashboard with WebSocket-powered live data streams, D3.js visualizations, and exportable reports.",
    tech: ["Node.js", "React", "MongoDB", "Socket.io", "D3.js"],
    status: "DEPLOYED",
    liveUrl: "#",
    codeUrl: "#",
    year: "2024",
  },
  {
    id: 3,
    title: "Project Gamma",
    subtitle: "AI-Powered Content Pipeline",
    description:
      "Automated content generation and scheduling pipeline integrating LLM APIs with custom fine-tuning, queue management, and webhook delivery.",
    tech: ["Python", "FastAPI", "Celery", "OpenAI", "PostgreSQL"],
    status: "BETA",
    liveUrl: "#",
    codeUrl: "#",
    year: "2025",
  },
  {
    id: 4,
    title: "Project Delta",
    subtitle: "E-Commerce Mobile App",
    description:
      "Cross-platform mobile commerce app with AR product preview, real-time inventory sync, and one-tap checkout with biometric auth.",
    tech: ["React Native", "Node.js", "MongoDB", "Stripe", "ARKit"],
    status: "IN_DEV",
    liveUrl: "#",
    codeUrl: "#",
    year: "2025",
  },
];

const DISCIPLINES = [
  {
    activity: "Rock Climbing",
    icon: "🧗",
    trait: "Agility & Problem Decomposition",
    description:
      "Every route is a system — read the wall, plan the sequence, adapt mid-climb. This maps directly to breaking complex features into elegant, atomic solutions.",
    stat: "V6 Boulderer",
  },
  {
    activity: "Snowboarding",
    icon: "🏂",
    trait: "Momentum & Flow State",
    description:
      "Speed demands commitment. In code, that means shipping with confidence, iterating fast, and trusting the architecture you've built beneath your feet.",
    stat: "Park Rider",
  },
  {
    activity: "Gaming",
    icon: "🎮",
    trait: "Persistent Problem Solving",
    description:
      "Games teach you to fail forward — study the system, optimize the build, adapt your strategy. Debugging production issues at 2am feels strangely familiar.",
    stat: "Soulsborne Enjoyer",
  },
];