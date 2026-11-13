export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  techStack: string[];
  liveUrl?: string;
  githubUrl: string;
  featured: boolean;
  category: "Frontend" | "Systems" | "AI & Data" | "Full Stack";
  highlightBadge: string;
  metrics: { label: string; value: string }[];
  image?: string;
}

export interface Experience {
  company: string;
  role: string;
  timeline: string;
  location: string;
  track: string;
  summary: string;
  proofUrl?: string;
  proofLabel?: string;
  achievements: string[];
  technologies: string[];
}

export interface Honor {
  title: string;
  organization: string;
  year: string;
  description: string;
  badge: string;
  image?: string;
}

export interface SkillCategory {
  title: string;
  subtitle: string;
  skills: { name: string; level: number; highlight?: boolean }[];
}

export const PERSONAL_INFO = {
  name: "Nidhi Singh",
  role: "Creative UI Engineer & Frontend Architect",
  tagline: "I build high-stakes enterprise interfaces, fluid design systems, and resilient web tools where aesthetic precision meets sub-millisecond runtime performance.",
  bio: "Final-year Electronics & Computer Science engineer at KIIT (9.01 CGPA) with hands-on experience shipping across 10+ production web applications in React and TypeScript. From engineering low-latency Linux process telemetry engines in C++ to building multi-model LLM benchmarking dashboards and complex CRM workflows at WhatBytes, I obsess over the intersection of mechanical software efficiency, typography, and uncompromised user ergonomics.",
  location: "Hyderabad / Bengaluru, India",
  availability: "Available for Worldwide Remote, Hybrid & High-Growth Engineering Roles",
  email: "nidhiatwork.01@gmail.com",
  phone: "+91-8101414224",
  cgpa: "9.01 / 10.0",
  university: "KIIT University (2023 - 2027)",
  degree: "B.Tech in Electronics & Computer Science",
  socials: {
    github: "https://github.com/nidhiatwork01-cmyk",
    linkedin: "https://www.linkedin.com/in/nidhi-singh-b0834b288/",
    leetcode: "https://leetcode.com/u/nidhisingh01/",
    portfolio: "https://portfolio01-kohl-mu.vercel.app/"
  },
  stats: [
    { label: "Production Apps Shipped", value: "10+" },
    { label: "Academic CGPA (KIIT)", value: "9.01" },
    { label: "LeetCode DSA Solved", value: "200+" },
    { label: "Defect Leakage Cut", value: "-35%" },
    { label: "On-Time Sprint Delivery", value: "90%" }
  ]
};

export const PROJECTS: Project[] = [
  {
    id: "pixii-aeo",
    title: "Pixii AEO Scout",
    subtitle: "Multi-Model LLM Benchmarking Interface",
    category: "AI & Data",
    featured: true,
    highlightBadge: "Award Winner (Pixii Founder)",
    description: "Side-by-side streaming LLM output evaluation, token visualization, latency metrics, and sleek dark aesthetic.",
    longDescription: "Architected a high-throughput benchmarking UI that streams responses simultaneously from Google Gemini 1.5 and Meta Llama 3. Designed interactive token heatmaps, real-time response latency gauges, and side-by-side diffing engines for AI output verification. Won Top Project Submission Award by Pixii.ai founder.",
    techStack: ["Next.js 15", "TypeScript", "Tailwind CSS", "Google Gemini 1.5", "Meta Llama 3"],
    liveUrl: "https://pixii-5zqb.vercel.app/",
    githubUrl: "https://github.com/nidhiatwork01-cmyk/pixii",
    metrics: [
      { label: "Latency Reduction", value: "40%" },
      { label: "Parallel Streams", value: "2x Models" },
      { label: "Recognition", value: "Founder Award" }
    ],
    image: "/tech-stack.png"
  },
  {
    id: "aura-skincare",
    title: "AURA Skincare (Nua)",
    subtitle: "Resilient Mobile-First Storefront",
    category: "Frontend",
    featured: true,
    highlightBadge: "Production Architecture",
    description: "Smooth slide-out drawers, animated product carousels, URL query sync on filters, and optimistic UI updates.",
    longDescription: "Crafted an ultra-ergonomic commerce experience built around fluid tactile gestures. Engineered URL-synchronized parametric filters, resilient skeleton fallbacks, responsive drawer state machines, and zero-jank micro-animations across all breakpoints.",
    techStack: ["React 18", "TypeScript", "Vite", "SCSS Modules", "React Router"],
    liveUrl: "https://nua-eight-rosy.vercel.app/",
    githubUrl: "https://github.com/nidhiatwork01-cmyk/Nua",
    metrics: [
      { label: "Lighthouse Performance", value: "98/100" },
      { label: "Re-render Shift", value: "0.00 CLS" },
      { label: "State Sync", value: "URL Query" }
    ],
    image: "/aura-skincare.png"
  },
  {
    id: "minitop-engine",
    title: "minitop",
    subtitle: "High-Performance Linux Process Telemetry Engine",
    category: "Systems",
    featured: true,
    highlightBadge: "Systems Depth (C++17)",
    description: "Asynchronous parsing of kernel /proc filesystem with thread-safe atomic circular buffers and sub-1% CPU overhead.",
    longDescription: "Engineered a lightweight systems telemetry daemon and terminal viewer in modern C++17. Utilizes asynchronous non-blocking POSIX I/O to read Linux /proc pseudo-filesystem, tracking thread status, memory maps, CPU slice utilization, and IPC signals with negligible resource consumption.",
    techStack: ["C++17", "Linux /proc", "POSIX", "GDB", "ThreadSanitizer", "Valgrind"],
    githubUrl: "https://github.com/nidhiatwork01-cmyk/minitop",
    metrics: [
      { label: "CPU Overhead", value: "<1.0%" },
      { label: "Memory Footprint", value: "<4MB" },
      { label: "Concurrency", value: "Lock-Free" }
    ]
  },
  {
    id: "meridian-ai",
    title: "Meridian AI Scout",
    subtitle: "High-Throughput Intelligence Interface",
    category: "AI & Data",
    featured: true,
    highlightBadge: "Cmd+K Powered",
    description: "Paginated data exploration with Cmd+K command palette and instant client-side caching for enterprise intelligence.",
    longDescription: "Built a high-density enterprise intelligence console with Groq API hardware acceleration, instant client caching via custom React hooks, and an omni-present command bar for swift data queries.",
    techStack: ["Next.js 15", "TypeScript", "Tailwind CSS", "Groq API", "Llama 3"],
    liveUrl: "https://meridian-ai-scout.vercel.app/companies",
    githubUrl: "https://github.com/nidhiatwork01-cmyk/meridian-ai-scout",
    metrics: [
      { label: "Inference Speed", value: "300+ tok/s" },
      { label: "Query Search", value: "<50ms" },
      { label: "Cache Hit Rate", value: "92%" }
    ],
    image: "/nidhi-coding.jpeg"
  },
  {
    id: "thriftapp",
    title: "ThriftApp Marketplace",
    subtitle: "Full-Stack Marketplace Engine",
    category: "Full Stack",
    featured: false,
    highlightBadge: "Database Optimized",
    description: "Normalized PostgreSQL schemas, connection pooling, and B-tree indexing that slashed query latency by 30% under load.",
    longDescription: "Engineered a resilient e-commerce backend and dynamic frontend with secure JWT auth, robust transactional integrity for checkout, relational schema normalization, and automated database migrations.",
    techStack: ["PostgreSQL", "Node.js", "TypeScript", "Express", "JWT", "REST APIs"],
    liveUrl: "https://thriftapp-3ofiii.vercel.app/",
    githubUrl: "https://github.com/nidhiatwork01-cmyk/thriftapp",
    metrics: [
      { label: "Query Latency", value: "-30%" },
      { label: "Data Integrity", value: "ACID" },
      { label: "Auth Standard", value: "JWT + HTTPS" }
    ]
  },
  {
    id: "tesla-valuation",
    title: "Tesla DCF Strategic Valuation",
    subtitle: "5-Year Quantitative Valuation Dashboard",
    category: "AI & Data",
    featured: false,
    highlightBadge: "Financial Engineering",
    description: "Multi-variable sensitivity matrices analyzing capex drivers, peer multiples, and ESG risk parameters with interactive slide decks.",
    longDescription: "Constructed an interactive quantitative financial analysis model evaluating DCF parameters, WACC sensitivity, margin shifts, and autonomous vehicle revenue inflection curves.",
    techStack: ["Python", "Advanced Excel", "Sensitivity Analysis", "Data Modeling"],
    liveUrl: "https://scripts-vert-theta.vercel.app/",
    githubUrl: "https://github.com/nidhiatwork01-cmyk/-Tesla-Valuation-M-A-Strategic-Analysis-project",
    metrics: [
      { label: "Horizon", value: "5 Years" },
      { label: "Scenario Matrix", value: "3x3 Stress" },
      { label: "Model Complexity", value: "Multi-stage DCF" }
    ]
  }
];

export const EXPERIENCES: Experience[] = [
  {
    company: "HighRadius",
    role: "Forward Deployed Engineer Intern",
    track: "Data Systems Track",
    timeline: "July 2026 – November 2026",
    location: "Hyderabad, India",
    summary: "Enterprise Data Systems, Query Optimization & Automated Reconciliation for Fortune 500 financial operations.",
    technologies: ["SQL (Recursive CTEs)", "Enterprise ERP Schemas", "Six Sigma DMAIC", "Agile/Scrum"],
    achievements: [
      "Reconciled and validated multi-million-row financial ledgers across enterprise ERP schemas, preserving 99.9% audit integrity.",
      "Engineered intensive SQL verification queries, multi-table joins, and recursive CTE logic to automate compliance pipelines.",
      "Applied the Six Sigma DMAIC framework to identify data ingestion bottlenecks, driving a 35% reduction in processing cycle time.",
      "Coordinated production release readiness with engineering teams in daily Agile/Scrum stand-ups."
    ]
  },
  {
    company: "WhatBytes",
    role: "Frontend Developer Intern",
    track: "Web Applications & Design System Engineering",
    timeline: "April 2026 – July 2026",
    location: "Remote",
    summary: "Shipped user-facing features and maintained component architectures across 10+ production web applications using React and TypeScript.",
    proofUrl: "https://drive.google.com/file/d/1NBT7Y9pP8V2L6vqcNXAGWL_zPpIqIwkr/view?usp=sharing",
    proofLabel: "View Certificate Proof",
    technologies: ["React 18", "TypeScript", "Chrome DevTools Profiler", "Postman", "Ngrok", "Design Systems"],
    achievements: [
      "Architected core modules for the Skadoosh CRM platform: engineered dynamic multi-step form workflows with schema-aware client validation, booking calendar funnels, and modal state machines.",
      "Partnered with backend engineers to define JSON API data contracts, writing automated tests with Postman and validating endpoints via Ngrok tunnels, cutting defect leakage by 35%.",
      "Audited runtime re-renders using Chrome DevTools Profiler, eliminating unnecessary layout shifts and achieving snappy, sub-second responses.",
      "Maintained and expanded strict design tokens and reusable component libraries adopted across the entire engineering team."
    ]
  },
  {
    company: "MagicTeal",
    role: "Product Management & Operations Intern",
    track: "Workflow Optimization & Sprint Operations",
    timeline: "March 2026 – May 2026",
    location: "Remote",
    summary: "Diagnosed engineering bottlenecks and spearheaded operational alignment across distributed cross-functional teams.",
    proofUrl: "https://docs.google.com/document/d/1NfVjlNRHM7JjKAteIRc0JksoV-69b5LO0qMHsVbuJ-Q/edit?usp=sharing",
    proofLabel: "Read Jui Case Study",
    technologies: ["Operational Matrices", "Sprint Retrospectives", "Process Optimization", "Stakeholder Alignment"],
    achievements: [
      "Managed deliverables across 10+ concurrent workstreams in a fast-paced 10-person startup.",
      "Authored the Jui Project Case Study: diagnosed communication friction between offshore stakeholders and engineering leads, introducing a Granular Transparency Matrix that boosted on-time delivery from 50% to 90% in 2 weeks.",
      "Standardized sprint backlogs, feature PRDs, and acceptance criteria to streamline handoffs."
    ]
  },
  {
    company: "Sellar",
    role: "Frontend Developer Intern",
    track: "E-Commerce Architecture & Mobile-First Component Systems",
    timeline: "March 2026 – April 2026",
    location: "Remote",
    summary: "Built accessible, mobile-first e-commerce web applications with resilient UX feedback loops.",
    technologies: ["React", "Responsive Design", "Error Boundaries", "Figma Handoff", "REST APIs"],
    achievements: [
      "Translated wireframes into responsive, accessible UI components with pixel-precise fidelity to Figma specifications.",
      "Streamlined checkout interactions with error boundaries and intuitive loading feedback, reducing bounce rates."
    ]
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "UI, Frameworks & Modern Web",
    subtitle: "Sub-millisecond render trees & tactile ergonomics",
    skills: [
      { name: "React 18 / 19", level: 98, highlight: true },
      { name: "Next.js 15 (App Router)", level: 95, highlight: true },
      { name: "TypeScript", level: 96, highlight: true },
      { name: "JavaScript (ES6+)", level: 98 },
      { name: "Tailwind CSS", level: 97, highlight: true },
      { name: "Framer Motion & GSAP", level: 92, highlight: true },
      { name: "HTML5 Semantic Arch", level: 96 },
      { name: "SCSS Modules / CSS3", level: 92 }
    ]
  },
  {
    title: "Architecture & State Engines",
    subtitle: "Predictable state machines & zero layout shift",
    skills: [
      { name: "Custom React Hooks", level: 95, highlight: true },
      { name: "Context API & Redux Toolkit", level: 92 },
      { name: "URL Query State Sync", level: 94, highlight: true },
      { name: "Optimistic UI Architecture", level: 90 },
      { name: "Error Boundaries & Fallbacks", level: 92 },
      { name: "Chrome DevTools Profiler", level: 93, highlight: true }
    ]
  },
  {
    title: "API Contracts & Systems Tooling",
    subtitle: "Robust schemas & automated endpoint verification",
    skills: [
      { name: "RESTful JSON Contracts", level: 95, highlight: true },
      { name: "Postman (Contract Tests)", level: 94 },
      { name: "Ngrok (Tunnel Verification)", level: 90 },
      { name: "Git / GitHub PR Workflows", level: 94 },
      { name: "Figma-to-Code Precision", level: 98, highlight: true },
      { name: "CI/CD & Vercel Pipeline", level: 90 }
    ]
  },
  {
    title: "Backend, Systems & Data Depth",
    subtitle: "Low-level systems rigor & high-scale schemas",
    skills: [
      { name: "C++17 (POSIX, /proc)", level: 88, highlight: true },
      { name: "PostgreSQL & Indexing", level: 86 },
      { name: "SQL (Recursive CTEs, Window)", level: 92, highlight: true },
      { name: "Python & Data Modeling", level: 90 },
      { name: "Node.js & Express", level: 88 },
      { name: "Six Sigma DMAIC", level: 91, highlight: true }
    ]
  },
  {
    title: "AI & Multi-Model Acceleration",
    subtitle: "Streaming interfaces & frontier LLM workflows",
    skills: [
      { name: "Gemini 1.5 & Llama 3 APIs", level: 92, highlight: true },
      { name: "Streaming LLM Visualizers", level: 94, highlight: true },
      { name: "Model Context Protocol (MCP)", level: 89 },
      { name: "v0 & AI-Assisted Prototyping", level: 95 },
      { name: "Prompt Engineering & Tokens", level: 92 }
    ]
  }
];

export const HONORS: Honor[] = [
  {
    title: "McKinsey Forward Leadership Scholar",
    organization: "McKinsey & Company",
    year: "2026",
    badge: "Selective Leadership Program",
    description: "Selected for an intensive global leadership curriculum focused on structured problem solving, executive communication, and agile delivery under uncertainty."
  },
  {
    title: "1st Place Winner — Hack-A-Bot 2.0",
    organization: "AI Innovation Championship",
    year: "2025",
    badge: "1st Place Trophy",
    description: "Led a 4-engineer team to architect, prototype, and ship a functional AI-powered web product from scratch in under 24 hours.",
    image: "/hackathon-image.jpeg"
  },
  {
    title: "Six Sigma Certified Practitioner",
    organization: "Quality Management Framework",
    year: "2026",
    badge: "DMAIC Quality Framework",
    description: "Accredited in root-cause analysis, variance mitigation, and defect reduction methodologies applied to high-throughput data pipelines."
  },
  {
    title: "Top 25 Finalist — NeuroHack Challenge",
    organization: "IIT Guwahati",
    year: "2026",
    badge: "National Finalist",
    description: "Competed against premier engineering institutions across India in deep computational challenge tracks."
  },
  {
    title: "Lead Stage Host & Anchor",
    organization: "KIIT Anchoring Society",
    year: "2024 – 2026",
    badge: "1,000+ Audience Leadership",
    description: "Directed stage operations, technical transitions, and live-anchored flagship university-wide conventions and tech conclaves hosting 1,000+ attendees.",
    image: "/nidhi-stage-full.jpeg"
  }
];
