import type { ProfileData, Project, Position, SkillCategory } from '../types/portfolio';
import flumenxLogo from '../assets/flumenx-logo.png';
import trackpiLogo from '../assets/trackpi-logo.png';

export const profileData: ProfileData = {
  name: "Najil Rahman P M",
  title: "IT Team Lead & Senior Web Developer",
  company: "FlumenX",
  location: "Kerala, India",
  availability: "IT Team Lead & Senior Web Developer @ FlumenX • Open for High-Impact Software Engineering Roles",
  email: "najilrahmanpm@gmail.com",
  phone: "+91 9048649412",
  github: "https://github.com/NajilRahman",
  linkedin: "https://linkedin.com/in/najilrahmanpm",
  whatsapp: "https://wa.me/919048649412",
  bio: [
    "I am the IT Team Lead & Senior Web Developer at FlumenX, specializing in architecting high-throughput full-stack platforms, cloud server infrastructure (Linux VPS, Nginx, PM2), and zero-trust security layers.",
    "As IT Team Lead at FlumenX, I direct core web engineering and infrastructure, building enterprise solutions like the Masters Expo Campaign Command Center and SUSRUTHA Healthcare CMS while managing production Linux VPS cloud hosting.",
    "Over my career across FlumenX, Luvid Technologies, Track Pi, and Luminar Technolab, I've constructed statutory calculation engines for 150,000+ employees, zero-trust WebAuthn passkey security layers, and scalable cloud architectures."
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
    id: "sass-ecommerce",
    name: "Multi-Tenant SaaS E-Commerce Platform",
    company: "Personal SaaS Project",
    category: "ecommerce",
    tagline: "Multi-Tenant Storefront Engine & MongoDB Replica Set Pipeline",
    description: "Self-engineered multi-tenant SaaS e-commerce platform (`D:\\project ideas\\SaSS ECOMERCE`). Built with Next.js 14 App Router, Express, TypeScript, and MongoDB replica sets. Features dynamic tenant storefront routing, background image optimization pipelines (Sharp & Cloudinary), Zustand store state management, and Zod payload validation.",
    technologies: ["Next.js 14", "Express.js", "TypeScript", "MongoDB Replica Set", "Zustand", "Sharp", "Cloudinary", "Zod", "Tailwind CSS"],
    impact: "Constructed an end-to-end multi-tenant e-commerce platform supporting dynamic subdomains, custom tenant themes, and atomic transactional orders.",
    architecturePoints: [
      "MongoDB replica set transaction engine ensuring zero inventory oversell during high-volume checkout",
      "Sharp & Cloudinary background worker for instant image compression & CDN delivery",
      "Zustand lightweight state store managing dynamic cart, multi-step checkout & tenant session states"
    ],
    iconName: "ShoppingBag",
    imageUrl: "/images/crm.png",
    demoUrl: "#",
    sourceUrl: "https://github.com/NajilRahman",
    isPrivate: true,
    featured: true,
    stats: [
      { label: "Owner", value: "Self-Engineered SaaS" },
      { label: "Stack", value: "Next.js 14 + Monorepo" }
    ]
  },
  {
    id: "worksphere-payroll",
    name: "WorkSphere Statutory Payroll & HRMS Engine",
    company: "Luvid Technologies",
    category: "enterprise",
    tagline: "Multi-Tenant Statutory Payroll Processor & Go Microservice (150K+ Employees)",
    description: "High-volume statutory payroll calculation engine, shift management, and workforce compliance processing platform built at Luvid Technologies (`D:\\luvidtechnologies\\projects\\worksphere-*`). Powered by a multi-threaded Go calculation microservice (`salary-processor-go`), CPU-aware Node.js worker clusters, and AG-Grid data tables for instant calculation of PF, ESI, overtime, vouchers, and statutory tax rules.",
    technologies: ["Node.js", "Go", "Express.js", "TypeScript", "React", "Redux Toolkit", "AG-Grid", "MongoDB", "Redis"],
    impact: "Processed compliant monthly statutory payroll for 150,000+ employees with zero calculation failures. Boosted request throughput by 65%.",
    architecturePoints: [
      "Dedicated multi-threaded Go statutory calculation microservice (`salary-processor-go`) integration",
      "Node.js cluster worker distribution across multi-core CPU server instances",
      "AG-Grid Enterprise integration handling 100,000+ employee records with real-time editing"
    ],
    iconName: "Server",
    imageUrl: "/images/worksphere.png",
    demoUrl: "#",
    sourceUrl: "https://github.com/NajilRahman",
    isPrivate: true,
    featured: true,
    stats: [
      { label: "Company", value: "Luvid Technologies" },
      { label: "Scale", value: "150,000+ Employees" },
      { label: "Throughput", value: "+65% Efficiency" }
    ]
  },
  {
    id: "ecosystem-suite",
    name: "Ecosystem Suite (Auth, CRM & Flow E-Commerce)",
    company: "Luvid Technologies",
    category: "saas",
    tagline: "Orchestrated Multi-Service Suite (Auth Gateway, CRM & Flow E-Commerce)",
    description: "Unified enterprise microservice platform engineered at Luvid Technologies (`D:\\luvidtechnologies\\projects\\ecosystem-suite`). Integrates centralized OAuth2/SSO identity provider (`auth-api`/`auth-ui`), omnichannel CRM (`crm-api`/`crm-ui`), and the Flow E-Commerce & PDF reporting engine (`flow-api`/`flow-ui`) running concurrently with zero-trust session handoffs.",
    technologies: ["Node.js", "Express.js 5", "TypeScript", "React", "Next.js", "PDFKit", "Zod", "MongoDB", "Redis", "Concurrently"],
    impact: "Unified multi-domain corporate workflows into a single orchestrated ecosystem powered by shared zero-trust auth and automated PDF/XLSX export pipelines.",
    architecturePoints: [
      "Concurrently-orchestrated microservices stack spanning Auth, CRM, and Flow E-Commerce",
      "Automated PDFKit invoice generation and Excel (XLSX) financial reporting pipelines",
      "Shared zero-trust authentication handoffs across subdomains with HTTP-only tokens"
    ],
    iconName: "LayoutDashboard",
    imageUrl: "/images/erp.png",
    demoUrl: "#",
    sourceUrl: "https://github.com/NajilRahman",
    isPrivate: true,
    featured: true,
    stats: [
      { label: "Company", value: "Luvid Technologies" },
      { label: "Architecture", value: "Microservices Suite" }
    ]
  },
  {
    id: "samay-scheduling",
    name: "Samay Smart Shift Scheduling & Timekeeping PWA",
    company: "Luvid Technologies",
    category: "enterprise",
    tagline: "Next.js 15 PWA Shift Roster & Automated Timecard Export Engine",
    description: "Enterprise workforce shift allocation, leave approval, and attendance calculation PWA built at Luvid Technologies (`D:\\luvidtechnologies\\projects\\samay-*`). Engineered with Next.js 15, React 19, Radix UI, and AG-Grid Enterprise. Features client-side html2canvas & jsPDF pipelines for dynamic payslip and timecard generation.",
    technologies: ["Next.js 15", "React 19", "Express.js 5", "TypeScript", "PWA", "Radix UI", "AG-Grid", "jsPDF", "MongoDB"],
    impact: "Automated daily time tracking, rotational shift roster allocations, and instant PDF report exports for enterprise operations teams.",
    architecturePoints: [
      "Next.js 15 Progressive Web App (PWA) with offline caching & installable mobile shell",
      "jsPDF & html2canvas client-side reporting pipeline for dynamic timecard generation",
      "AG-Grid Enterprise & Radix UI data tables handling thousands of timekeeping logs"
    ],
    iconName: "Clock",
    imageUrl: "/images/attendance.png",
    demoUrl: "#",
    sourceUrl: "https://github.com/NajilRahman",
    isPrivate: true,
    featured: true,
    stats: [
      { label: "Company", value: "Luvid Technologies" },
      { label: "Stack", value: "Next.js 15 + PWA" }
    ]
  },
  {
    id: "sso-identity-gateway",
    name: "Centralized Zero-Trust SSO & Identity Gateway",
    company: "Luvid Technologies",
    category: "security",
    tagline: "OAuth2 / FIDO2 WebAuthn Passwordless Identity Provider & Token Handoff Gateway",
    description: "Centralized single sign-on (SSO) authentication gateway and zero-trust identity provider engineered at Luvid Technologies (`D:\\luvidtechnologies\\projects\\SSO`). Manages secure cross-domain JWT code exchanges, FIDO2 WebAuthn passkey authentication, SameSite HttpOnly cookie protection, and sliding-window rate limiting.",
    technologies: ["Node.js", "Express.js", "TypeScript", "WebAuthn", "MongoDB", "JWT", "Redis", "Helmet"],
    impact: "Secured enterprise microservices against session hijacking, credential sniffing, and brute-force vectors with token hand-offs.",
    architecturePoints: [
      "FIDO2 WebAuthn passkey biometric authentication flow",
      "Encrypted HTTP-only SameSite cookie token exchange flow across domain boundaries",
      "Leaky-bucket rate limiter defending against high-frequency brute-force attempts"
    ],
    iconName: "ShieldCheck",
    imageUrl: "/images/sso_gateway.png",
    demoUrl: "#",
    sourceUrl: "https://github.com/NajilRahman",
    isPrivate: true,
    featured: true,
    stats: [
      { label: "Company", value: "Luvid Technologies" },
      { label: "Security Level", value: "Zero-Trust" }
    ]
  },
  {
    id: "enterprise-erp",
    name: "Arnoc Multi-Tenant ERP & Shared Controller Engine",
    company: "Luvid Technologies",
    category: "enterprise",
    tagline: "Multi-Tenant Core Operations, Procurement & Financial Accounting System",
    description: "Comprehensive multi-tenant ERP platform managing enterprise procurement, vendor invoicing, financial ledgers, and multi-department approval workflows engineered at Luvid Technologies (`D:\\luvidtechnologies\\projects\\ERP`). Features modular controller factories that eliminate duplicate business logic.",
    technologies: ["Node.js", "Express.js", "TypeScript", "MongoDB", "React", "Tailwind CSS", "Mongoose"],
    impact: "Unified company-wide operational accounting, procurement tracking, and inventory ledgers while cutting duplicate backend logic by 40%.",
    architecturePoints: [
      "Modular controller factory architecture reducing duplicate business logic by 40%",
      "Multi-tenant tenant isolation layer with DB connection pooling",
      "Real-time ledger audit trails with compound Mongoose indexes"
    ],
    iconName: "LayoutDashboard",
    imageUrl: "/images/erp.png",
    demoUrl: "#",
    sourceUrl: "https://github.com/NajilRahman",
    isPrivate: true,
    featured: true,
    stats: [
      { label: "Company", value: "Luvid Technologies" },
      { label: "Code Reuse", value: "+40%" }
    ]
  },
  {
    id: "labourjet-fleet",
    name: "LabourJet On-Demand Field Worker Fleet System",
    company: "Luvid Technologies",
    category: "enterprise",
    tagline: "Real-Time Field Labor Dispatch & Duty Verification Platform",
    description: "On-demand labor deployment and field worker management system engineered at Luvid Technologies (`D:\\luvidtechnologies\\projects\\labourjet`). Features live Socket.IO push alerts for job allocation, Cloudinary image upload workflows, and Docker/Nginx production deployment.",
    technologies: ["Node.js", "Express.js", "MongoDB", "Socket.IO", "Cloudinary", "Docker", "Nginx", "React"],
    impact: "Digitized field labor dispatching and duty verification with real-time push alerts and automated worker allocation pipelines.",
    architecturePoints: [
      "Socket.IO real-time WebSocket dispatcher for sub-seconds job alerts",
      "Dockerized microservice containers behind Nginx reverse proxy",
      "Cloudinary automated image media optimization pipeline for ID verification"
    ],
    iconName: "Users",
    imageUrl: "/images/ats.png",
    demoUrl: "#",
    sourceUrl: "https://github.com/NajilRahman",
    isPrivate: true,
    featured: true,
    stats: [
      { label: "Company", value: "Luvid Technologies" },
      { label: "Platform", value: "Real-Time Dispatch" }
    ]
  },
  {
    id: "superwell-healthcare",
    name: "SuperWell Enterprise Healthcare Platform",
    company: "Luvid Technologies",
    category: "healthcare",
    tagline: "Clinical Operations, FullCalendar Scheduler & Patient Portal",
    description: "Comprehensive healthcare and clinical administration platform built at Luvid Technologies (`D:\\luvidtechnologies\\projects\\superwell-*`). Features FullCalendar appointment scheduling, patient EMR history, AG-Grid patient records, and multi-department consultation management.",
    technologies: ["React 18", "Express.js", "TypeScript", "FullCalendar", "AG-Grid", "Redux Toolkit", "MongoDB"],
    impact: "Centralized patient appointment schedules, clinical history ledgers, and doctor consultation workflows into a unified hospital system.",
    architecturePoints: [
      "FullCalendar interactive appointment scheduler with concurrency lock middleware",
      "AG-Grid high-performance patient record tables handling complex medical data",
      "Redux Toolkit centralized state management for multi-department workflows"
    ],
    iconName: "Stethoscope",
    imageUrl: "/images/susrutha.png",
    demoUrl: "#",
    sourceUrl: "https://github.com/NajilRahman",
    isPrivate: true,
    featured: false,
    stats: [
      { label: "Company", value: "Luvid Technologies" },
      { label: "Domain", value: "Clinical CMS" }
    ]
  },
  {
    id: "fintech-lendit",
    name: "LendIt FinTech Microfinance & Credit Engine",
    company: "Luvid Technologies",
    category: "fintech",
    tagline: "Automated Credit Scoring, EMI Disbursement & Micro-Lending Portal",
    description: "FinTech lending operations platform engineered at Luvid Technologies (`D:\\luvidtechnologies\\projects\\lendit-api`). Manages applicant credit scoring, automated loan approval matrices, EMI repayment schedules, and interest calculation pipelines.",
    technologies: ["Node.js", "Express.js", "TypeScript", "MongoDB", "Redis", "Zod"],
    impact: "Automated micro-loan verification, interest processing, and disbursement schedules with zero calculation discrepancies.",
    architecturePoints: [
      "Compound interest & EMI calculation engine with transactional database locks",
      "Automated loan repayment schedule generator with Redis job queues",
      "Strict Zod schema validation for all financial payloads"
    ],
    iconName: "ShieldCheck",
    imageUrl: "/images/fintech.png",
    demoUrl: "#",
    sourceUrl: "https://github.com/NajilRahman",
    isPrivate: true,
    featured: false,
    stats: [
      { label: "Company", value: "Luvid Technologies" },
      { label: "Disbursement", value: "Automated EMI" }
    ]
  },
  {
    id: "stocksigo-inventory",
    name: "StocksIgo Multi-Warehouse Stock & Expiry Control",
    company: "Luvid Technologies",
    category: "enterprise",
    tagline: "Multi-Location Stock Movement Tracking & Batch Expiry Auditing Engine",
    description: "High-concurrency stock tracking and warehouse inventory management system built at Luvid Technologies (`D:\\luvidtechnologies\\projects\\stocksigo-api`). Handles SKU barcode scanning, inter-warehouse stock transfers, minimum stock alert triggers, and batch expiry tracking.",
    technologies: ["Node.js", "Express.js", "TypeScript", "MongoDB", "Redis", "BullMQ"],
    impact: "Eliminated inventory stock-out incidents and automated batch expiry notifications across multiple regional fulfillment centers.",
    architecturePoints: [
      "Atomic stock increment/decrement operations preventing race conditions",
      "Real-time stock threshold alert dispatcher via Redis BullMQ queues",
      "High-speed SKU lookup indexes for instant barcode scanning"
    ],
    iconName: "Server",
    imageUrl: "/images/inventory.png",
    demoUrl: "#",
    sourceUrl: "https://github.com/NajilRahman",
    isPrivate: true,
    featured: false,
    stats: [
      { label: "Company", value: "Luvid Technologies" },
      { label: "Tracking", value: "Real-Time Barcode" }
    ]
  },
  {
    id: "omnichannel-crm",
    name: "Arnoc Omnichannel Lead CRM & Marketing Engine",
    company: "Luvid Technologies",
    category: "crm",
    tagline: "Automated Campaign Nurturing, Lead Scoring & Sales Funnel Analytics",
    description: "Customer Relationship Management (CRM) & marketing automation platform built at Luvid Technologies (`D:\\luvidtechnologies\\projects\\arnoc marketing`). Features automated lead capturing, pipeline staging, campaign tracking, and multi-channel notification dispatchers.",
    technologies: ["Node.js", "TypeScript", "React", "Express.js", "MongoDB", "Socket.IO"],
    impact: "Accelerated lead conversion rates and sales pipeline visibility with real-time lead score calculation engines.",
    architecturePoints: [
      "Automated lead scoring pipeline trigger based on customer interactions",
      "Socket.IO live push notifications for sales team assignment alerts",
      "Dynamic lead filter builder with MongoDB aggregation pipelines"
    ],
    iconName: "Users",
    imageUrl: "/images/crm.png",
    demoUrl: "#",
    sourceUrl: "https://github.com/NajilRahman",
    isPrivate: true,
    featured: false,
    stats: [
      { label: "Company", value: "Luvid Technologies" },
      { label: "Pipeline", value: "Real-Time CRM" }
    ]
  },
  {
    id: "rentalflow-property",
    name: "RentalFlow Property & Lease Management System",
    company: "Luvid Technologies",
    category: "enterprise",
    tagline: "Smart Property Rental Management & Tenant Ledger System",
    description: "Real estate property rental & asset management engine built at Luvid Technologies (`D:\\luvidtechnologies\\projects\\rentalflow-app`). Manages tenant lease contracts, automated rent payment reminders, maintenance requests, and unit availability analytics.",
    technologies: ["Node.js", "Express.js", "React", "TypeScript", "MongoDB", "Tailwind CSS"],
    impact: "Automated tenant billing, lease expiry tracking, and property maintenance dispatches across residential and commercial units.",
    architecturePoints: [
      "Lease agreement ledger with automated payment due calculations",
      "Unit availability state machine with instant booking locks",
      "Maintenance ticket dispatch system with photo attachments"
    ],
    iconName: "LayoutDashboard",
    imageUrl: "/images/erp.png",
    demoUrl: "#",
    sourceUrl: "https://github.com/NajilRahman",
    isPrivate: true,
    featured: false,
    stats: [
      { label: "Company", value: "Luvid Technologies" },
      { label: "Domain", value: "PropTech" }
    ]
  },
  {
    id: "masters-expo",
    name: "Real-Time Event Marketing & Campaign Command Center (CMS)",
    company: "FlumenX",
    category: "enterprise",
    tagline: "Real-Time Operations & Campaign Command Platform (FlumenX)",
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
    name: "Enterprise Healthcare CMS & Inpatient Patient Portal",
    company: "FlumenX",
    category: "healthcare",
    tagline: "Research Hospital Operating Engine & Inpatient Patient Portal (FlumenX)",
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
  }
];

export const experienceData: Position[] = [
  {
    company: "FlumenX",
    role: "IT Team Lead & Senior Web Developer",
    location: "Kerala, India",
    period: "July 2026 – Present",
    isCurrent: true,
    logoBadge: "FLUMENX",
    logoUrl: flumenxLogo,
    summary: "Serving as IT Team Lead & Senior Web Developer, directing engineering team operations, web architecture, full-stack application development, and production Linux VPS server hosting infrastructure (Nginx, PM2, SSL/TLS, reverse proxies) for enterprise clients.",
    highlights: [
      "Directed IT team engineering workflows, architecture decisions, code reviews, and production server deployments across client initiatives at FlumenX.",
      "Architected and deployed enterprise platforms including the Masters Expo Campaign Command Center (Next.js 14, Express, Socket.IO) and SUSRUTHA Healthcare CMS & Patient Portal (Node.js, Express, MongoDB, Sharp).",
      "Configured production Linux VPS server hosting environments, setting up Nginx reverse proxy routing, PM2 cluster process management, SSL/TLS security certificates, and UFW firewall rules.",
      "Spearheaded senior web engineering standards, automated deployment pipelines, and high-performance frontend/backend architectures across client projects.",
      "Optimized cloud server memory management, database indexing, and domain DNS routing to maintain 99.9% uptime and zero-downtime deployments."
    ],
    skillsUsed: ["IT Team Leadership", "Next.js 14", "Express.js", "TypeScript", "MongoDB", "Linux VPS", "Nginx", "PM2", "Socket.IO", "SSL/TLS", "Sharp"]
  },
  {
    company: "Luvid Technologies",
    role: "Junior Software Engineer",
    location: "Kozhikode, Kerala, India",
    period: "Jan. 2025 – June 2026",
    isCurrent: false,
    logoBadge: "LUVID",
    logoUrl: "https://www.luvid.in/assets/LUVID-LOGO-DoqVVSWo.png",
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
    company: "Track Pi",
    role: "MERN Stack Intern (3-Month Internship)",
    location: "Kozhikode, Kerala, India",
    period: "Oct. 2024 – Dec. 2024",
    isCurrent: false,
    logoBadge: "TRACK PI",
    logoUrl: trackpiLogo,
    summary: "Engineered Track Pi's in-house company website, administrative control panel, and core operational software systems using full-stack MERN architecture.",
    highlights: [
      "Built Track Pi's primary in-house website and administrative control panel featuring role-based access control and live data management tools.",
      "Constructed custom MERN (MongoDB, Express.js, React.js, Node.js) software systems with secure JWT authentication and real-time operational dashboards.",
      "Engineered responsive frontend interfaces and state management flows connected to modular Express RESTful backend microservices."
    ],
    skillsUsed: ["MongoDB", "Express.js", "React.js", "Node.js", "REST APIs", "JavaScript", "Admin Panels", "Git"]
  },
  {
    company: "Luminar Technolab",
    role: "MERN Stack Intern",
    location: "Kozhikode, Kerala, India",
    period: "May 2024 – Dec. 2024",
    isCurrent: false,
    logoBadge: "LUMINAR",
    logoUrl: "https://www.luminartechnolab.com/static/assets/img/favicon.png",
    summary: "Developed and deployed full-stack MERN applications with secure authentication and custom REST APIs.",
    highlights: [
      "Developed and deployed full-stack MERN applications with secure authentication and custom REST APIs.",
      "Optimized MongoDB/MySQL queries and collaborated in Agile teams to deliver production-ready features."
    ],
    skillsUsed: ["MongoDB", "Express.js", "React.js", "Node.js", "REST APIs", "MySQL", "Git"]
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
      { name: "RBAC & ABAC Guards", level: "Expert", usage: "Attribute & role-based middleware guards for enterprise menus", logoSlug: "letsencrypt" },
      { name: "API Rate Limiting", level: "Advanced", usage: "Leaky-bucket & sliding window rate limits preventing brute-force", logoSlug: "fastapi" },
      { name: "SSO Handoff Protocol", level: "Advanced", usage: "Cross-domain session delegation defeating session hijacking", logoSlug: "auth0" }
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
      { name: "Lenis Smooth Scroll", level: "Advanced", usage: "Butter-smooth momentum scrolling and camera inertia", logoSlug: "framer" }
    ]
  }
];
