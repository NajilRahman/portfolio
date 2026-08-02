import type { ProfileData, Project, Position, SkillCategory } from '../types/portfolio';

export const profileData: ProfileData = {
  name: "Najil Rahman P M",
  title: "Senior Web Developer",
  company: "FlumenX",
  location: "Kerala, India",
  availability: "Senior Web Developer @ FlumenX • Open for High-Impact Software Engineering Roles",
  email: "najilrahmanpm@gmail.com",
  phone: "+91 9048649412",
  github: "https://github.com/NajilRahman",
  linkedin: "https://linkedin.com/in/najilrahmanpm",
  whatsapp: "https://wa.me/919048649412",
  bio: [
    "I am a Senior Web Developer at FlumenX, specializing in architecting high-throughput full-stack platforms, cloud server infrastructure (Linux VPS, Nginx, PM2), and zero-trust security layers.",
    "Currently leading core web engineering at FlumenX, I build enterprise solutions like the Masters Expo Campaign Command Center and SUSRUTHA Healthcare CMS, while managing production Linux VPS cloud hosting and Nginx reverse proxies.",
    "Over my career across FlumenX and Luvid Technologies, I've constructed statutory calculation engines for 150,000+ employees, zero-trust WebAuthn passkey security layers, and scalable cloud architectures."
  ],
  metrics: [
    { label: "Active Employees Processed", value: "150K+", detail: "High-volume monthly statutory compliance & payroll processing" },
    { label: "Request Throughput Boost", value: "+65%", detail: "Achieved via CPU-aware Node.js worker clustering & Redis cache" },
    { label: "Duplicate Code Reduction", value: "40%", detail: "Built shared core engines & reusable controller modules" },
    { label: "Linux VPS Uptime", value: "99.9%", detail: "Configured Nginx reverse proxies, PM2 cluster, and SSL/TLS security" }
  ],
  education: {
    degree: "Bachelor of Science (B.Sc.)",
    field: "Computer Science",
    institution: "University of Calicut",
    location: "Calicut, Kerala, India",
    period: "2021 – 2024"
  }
};

export const projectsData: Project[] = [
  {
    id: "masters-expo",
    name: "Masters Expo Campaign Command Center",
    category: "enterprise",
    tagline: "Real-Time Event Marketing & Operations Command Center (FlumenX)",
    description: "Real-time event marketing & campaign management operations center engineered at FlumenX using Next.js 14 and Express. Features real-time Socket.IO synchronization, multi-tier role-based page/menu authorization rules, deliverable task workflows, and live KPI/budget analytics.",
    technologies: ["Next.js 14", "React", "TypeScript", "Node.js", "Express.js", "MongoDB", "Socket.IO", "Linux VPS", "Nginx", "PM2"],
    impact: "Streamlined live event operations for FlumenX clients with real-time push alerts, dynamic campaign KPI tracking, and permission-controlled asset workflows deployed on production Linux VPS servers.",
    architecturePoints: [
      "Socket.IO WebSocket engine for sub-100ms multi-client state syncing",
      "Dynamic RBAC menu guard system parsing JWT claims per request route",
      "Deployed on production Linux VPS with Nginx reverse proxy & PM2 process clustering"
    ],
    iconName: "LayoutDashboard",
    imageUrl: "/images/masters_expo.png",
    demoUrl: "#",
    sourceUrl: "https://github.com/NajilRahman",
    isPrivate: true,
    featured: true,
    stats: [
      { label: "Company", value: "FlumenX" },
      { label: "Sync Speed", value: "<100ms" }
    ]
  },
  {
    id: "susrutha",
    name: "SUSRUTHA Healthcare CMS & Patient Portal",
    category: "healthcare",
    tagline: "Enterprise Hospital Engine & Automated Panchakarma Portal (FlumenX)",
    description: "Enterprise hospital management platform & patient web engine engineered at FlumenX for a 40-bed research-backed hospital. Features multi-branch OPD slot booking, tele-consultation workflows, Panchakarma therapy catalog, and a full-featured CMS admin panel with automated media processing pipelines.",
    technologies: ["Node.js", "Express.js", "TypeScript", "MongoDB", "Next.js 14", "React", "Sharp", "Zod", "Linux VPS", "Nginx"],
    impact: "Digitized inpatient inquiries, Panchakarma care package workflows, and multi-branch doctor schedules with automated video/image compression pipelines hosted on Linux VPS cloud servers.",
    architecturePoints: [
      "Sharp-powered background worker for non-blocking image asset compression",
      "Multi-branch time-slot concurrency locks preventing double-booking",
      "Hosted on Linux VPS with automated SSL/TLS certificate renewals & Nginx routing"
    ],
    iconName: "Stethoscope",
    imageUrl: "/images/susrutha.png",
    demoUrl: "#",
    sourceUrl: "https://github.com/NajilRahman",
    isPrivate: true,
    featured: true,
    stats: [
      { label: "Company", value: "FlumenX" },
      { label: "Capacity", value: "40 Beds" }
    ]
  },
  {
    id: "worksphere",
    name: "Worksphere API (HRMS & Payroll Platform)",
    category: "enterprise",
    tagline: "High-Throughput Payroll & Statutory Calculation Pipeline",
    description: "High-volume salary calculation, shift scheduling, and statutory compliance pipeline. Engineered high-throughput MongoDB data models, aggregation pipelines, and CPU-aware worker clustering to optimize background processing.",
    technologies: ["Node.js", "Express.js", "TypeScript", "MongoDB", "PostgreSQL", "Redis", "Socket.IO"],
    impact: "Processed compliant monthly payroll for 150,000+ employees. Implemented worker clustering, boosting request throughput by 65%.",
    architecturePoints: [
      "Node.js cluster workers distribution across multi-core CPU instances",
      "Redis memory caching for recurring employee tax & compliance lookups",
      "Atomic MongoDB updates ensuring transaction safety during payroll runs"
    ],
    iconName: "Server",
    imageUrl: "/images/worksphere.png",
    demoUrl: "#",
    sourceUrl: "https://github.com/NajilRahman",
    isPrivate: true,
    featured: true,
    stats: [
      { label: "Scale", value: "150,000+ Employees" },
      { label: "Throughput", value: "+65% Efficiency" }
    ]
  },
  {
    id: "sso-gateway",
    name: "Centralized SSO Authentication Gateway",
    category: "security",
    tagline: "Zero-Trust Session Exchange & Passkey Identity Provider",
    description: "Centralized single sign-on (SSO) gateway. Handles secure session hand-offs, cookie protection, role-based authorization rules, and brute-force API rate-limiting rules.",
    technologies: ["Node.js", "Express.js", "TypeScript", "MongoDB", "Mongoose", "JWT", "Zod", "Express Rate Limit"],
    impact: "Implemented secure token exchange flow and custom middleware checks, mitigating credential sniffing and session hijack vectors.",
    architecturePoints: [
      "Encrypted HTTP-only SameSite cookie token exchange flow",
      "Leaky-bucket rate limiter defending against high-frequency brute-force attempts",
      "Modular Auth Guard middleware injected across microservice boundaries"
    ],
    iconName: "ShieldCheck",
    imageUrl: "/images/sso_gateway.png",
    demoUrl: "#",
    sourceUrl: "https://github.com/NajilRahman",
    isPrivate: true,
    featured: true,
    stats: [
      { label: "Security Level", value: "Zero-Trust" },
      { label: "Session Protection", value: "HttpOnly + JWT" }
    ]
  }
];

export const experienceData: Position[] = [
  {
    company: "FlumenX",
    role: "Senior Web Developer",
    location: "Kerala, India",
    period: "July 2026 – Present",
    isCurrent: true,
    logoBadge: "FLUMENX",
    summary: "Leading senior web engineering, full-stack application development, and production Linux VPS server hosting infrastructure (Nginx, PM2, SSL/TLS, reverse proxies) for enterprise clients.",
    highlights: [
      "Architected and deployed enterprise platforms including the Masters Expo Campaign Command Center (Next.js 14, Express, Socket.IO) and SUSRUTHA Healthcare CMS & Patient Portal (Node.js, Express, MongoDB, Sharp).",
      "Configured production Linux VPS server hosting environments, setting up Nginx reverse proxy routing, PM2 cluster process management, SSL/TLS security certificates, and UFW firewall rules.",
      "Spearheaded senior web engineering standards, automated deployment pipelines, and high-performance frontend/backend architectures across client projects.",
      "Optimized cloud server memory management, database indexing, and domain DNS routing to maintain 99.9% uptime and zero-downtime deployments."
    ],
    skillsUsed: ["Next.js 14", "Express.js", "TypeScript", "MongoDB", "Linux VPS", "Nginx", "PM2", "Socket.IO", "SSL/TLS", "Sharp"]
  },
  {
    company: "Luvid Technologies",
    role: "Junior Software Engineer",
    location: "Kozhikode, Kerala, India",
    period: "Jan. 2025 – June 2026",
    isCurrent: false,
    logoBadge: "LUVID",
    summary: "Architected high-volume backend microservices, statutory compliance calculation engines for 150,000+ employees, zero-trust auth layers, and multi-tenant platforms.",
    highlights: [
      "Developed secure, modular RESTful APIs for a multi-tenant ERP and CRM platform using Express.js and TypeScript, reducing duplicate business logic by 40% through shared core engines.",
      "Implemented secure passkey (WebAuthn) passwordless authentication, attribute-based permissions (RBAC/ABAC guards), and an SSO Handoff gateway using JWT code exchange protocols to block session hijacking.",
      "Optimized backend process scalability for a core HRMS platform processing salaries for 150,000+ employees, implementing CPU-aware worker clustering to increase concurrent request throughput by 65%.",
      "Programmed statutory payroll calculations for PF, ESI, overtime, vouchers, and reimbursement heads while ensuring compliance with business rules and government regulations.",
      "Designed and optimized TypeScript-based backend services, MongoDB data models, aggregation pipelines, and Redis caching layers for payroll and employee management modules, reducing database load and improving response performance."
    ],
    skillsUsed: ["Node.js", "Express.js", "TypeScript", "MongoDB", "Redis", "WebAuthn", "RBAC/ABAC", "Socket.IO", "System Architecture"]
  },
  {
    company: "Luminar Technolab",
    role: "MERN Stack Intern (3-Month Internship)",
    location: "Kozhikode, Kerala, India",
    period: "Oct. 2024 – Dec. 2024",
    isCurrent: false,
    logoBadge: "LUMINAR",
    summary: "Completed an intensive 3-month MERN Stack internship building full-stack web applications, REST APIs, and database pipelines.",
    highlights: [
      "Engineered full-stack MERN (MongoDB, Express.js, React.js, Node.js) web applications with secure authentication flows and custom RESTful endpoints.",
      "Optimized database query performance, indexing, and MongoDB schema design across multi-table project pipelines.",
      "Collaborated in Agile sprints to deliver production-ready code, clean UI components, and API integration tests."
    ],
    skillsUsed: ["MongoDB", "Express.js", "React.js", "Node.js", "REST APIs", "JavaScript", "Git"]
  }
];

export const skillCategoriesData: SkillCategory[] = [
  {
    id: "backend",
    title: "Backend Engineering & Core Systems",
    description: "Building scalable, high-throughput microservices and data pipelines",
    iconName: "Cpu",
    items: [
      { name: "Node.js", level: "Expert", usage: "Engineered multi-core worker clusters processing 150k+ payroll records", logoSlug: "nodedotjs" },
      { name: "Express.js", level: "Expert", usage: "Constructed modular REST APIs with shared controller factories", logoSlug: "express" },
      { name: "TypeScript", level: "Expert", usage: "Strict type safety across backend services & Zod runtime validation", logoSlug: "typescript" },
      { name: "JavaScript (ESNext)", level: "Expert", usage: "Asynchronous I/O, event loops, stream processing & buffers", logoSlug: "javascript" },
      { name: "REST APIs", level: "Expert", usage: "Clean API contract design with Swagger/OpenAPI documentation", logoSlug: "postman" },
      { name: "Socket.IO", level: "Advanced", usage: "Sub-100ms real-time WebSocket state synchronization for Masters Expo", logoSlug: "socketdotio" },
      { name: "Mongoose & Aggregation", level: "Expert", usage: "Complex multi-stage aggregation pipelines for stock & payroll analytics", logoSlug: "mongodb" }
    ]
  },
  {
    id: "infrastructure",
    title: "Linux VPS Hosting & Cloud Infrastructure",
    description: "Production Linux server administration, Nginx, and cloud hosting",
    iconName: "Wrench",
    items: [
      { name: "Linux VPS Hosting", level: "Expert", usage: "Configuring Ubuntu server instances, firewall UFW rules & SSH hardening", logoSlug: "linux" },
      { name: "Nginx Reverse Proxy", level: "Expert", usage: "Setting up virtual hosts, SSL/TLS termination & load balancing", logoSlug: "nginx" },
      { name: "PM2 Cluster Manager", level: "Expert", usage: "Zero-downtime process reloads, cluster mode & log rotation", logoSlug: "pm2" },
      { name: "Domain & DNS Routing", level: "Expert", usage: "DNS A/CNAME record management, Cloudflare & SSL certificate renewals", logoSlug: "cloudflare" },
      { name: "Docker (Basic)", level: "Proficient", usage: "Containerized microservice environments & Compose scripts", logoSlug: "docker" },
      { name: "Swagger / Postman", level: "Expert", usage: "Interactive API testing suites & OpenAPI specification", logoSlug: "swagger" }
    ]
  },
  {
    id: "security",
    title: "Security, Auth & Identity Protocols",
    description: "Zero-trust session protection and authentication gateways",
    iconName: "Shield",
    items: [
      { name: "WebAuthn (Passkeys)", level: "Advanced", usage: "FIDO2 biometric passwordless authentication flows", logoSlug: "auth0" },
      { name: "JWT Session Gateway", level: "Expert", usage: "Encrypted token hand-offs & SameSite HttpOnly cookie shields", logoSlug: "jsonwebtokens" },
      { name: "RBAC & ABAC Guards", level: "Expert", usage: "Attribute & role-based middleware guards for enterprise menus", logoSlug: "shield" },
      { name: "API Rate Limiting", level: "Advanced", usage: "Leaky-bucket & sliding window rate limits preventing brute-force", logoSlug: "fastapi" },
      { name: "SSO Handoff Protocol", level: "Advanced", usage: "Cross-domain session delegation defeating session hijacking", logoSlug: "authy" }
    ]
  },
  {
    id: "database",
    title: "Databases, Caching & Performance",
    description: "High-performance data storage, indexing, and memory optimization",
    iconName: "Terminal",
    items: [
      { name: "MongoDB", level: "Expert", usage: "Schema design, compound indexing, atomic transactions & replication", logoSlug: "mongodb" },
      { name: "Redis Cache & BullMQ", level: "Advanced", usage: "In-memory caching layer & async background queue processing", logoSlug: "redis" },
      { name: "PostgreSQL", level: "Proficient", usage: "Relational table schemas, foreign key constraints & SQL queries", logoSlug: "postgresql" },
      { name: "MySQL", level: "Proficient", usage: "Multi-table query optimization and index tuning", logoSlug: "mysql" },
      { name: "Database Indexing", level: "Advanced", usage: "Query plan analysis & compound index optimizations", logoSlug: "dbeaver" }
    ]
  },
  {
    id: "frontend",
    title: "Frontend UI/UX & Motion Systems",
    description: "Creating liquid glass interfaces with smooth 60fps animations",
    iconName: "Layers",
    items: [
      { name: "React.js", level: "Expert", usage: "Modern component architecture, custom hooks & state management", logoSlug: "react" },
      { name: "Next.js 14", level: "Expert", usage: "App Router, Server Components & SEO meta structures for FlumenX projects", logoSlug: "nextdotjs" },
      { name: "Tailwind CSS v4", level: "Expert", usage: "Custom design token systems, glassmorphic utilities & responsive grids", logoSlug: "tailwindcss" },
      { name: "GSAP & ScrollTrigger", level: "Advanced", usage: "Kinetic scroll reveals, timeline animations & parallax depth", logoSlug: "greensock" },
      { name: "Framer Motion", level: "Advanced", usage: "Physics-based layout transitions & gesture motion", logoSlug: "framer" },
      { name: "Lenis Smooth Scroll", level: "Advanced", usage: "Butter-smooth momentum scrolling and camera inertia", logoSlug: "vibe" }
    ]
  }
];
