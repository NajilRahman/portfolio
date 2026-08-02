import React, { useRef, useState } from 'react';
import { ExternalLink, Github, Database, Brain, Lock, Server, Car, Calendar, ShoppingBag, BookOpen, Key, ShieldCheck, Users, ShoppingCart, LayoutDashboard, Stethoscope } from 'lucide-react';

interface Project {
  name: string;
  description: string;
  technologies: string[];
  impact: string;
  icon: React.ReactNode;
  demoUrl: string;
  sourceUrl: string;
  isPrivate?: boolean;
}

const projectsData: Project[] = [
  {
    name: "Masters Expo Campaign Command Center",
    description: "Real-time event marketing & campaign management operations center built with Next.js 14 and Express. Features real-time Socket.IO synchronization, multi-tier role-based page/menu authorization rules, deliverable task workflows, and live KPI/budget analytics.",
    technologies: ["Next.js 14", "React", "TypeScript", "Node.js", "Express.js", "MongoDB", "Socket.IO", "Zustand", "Chart.js", "Tailwind CSS"],
    impact: "Streamlined live event operations with real-time push alerts, dynamic campaign KPI tracking, and permission-controlled asset workflows.",
    icon: <LayoutDashboard className="w-5 h-5 text-cyan-400" />,
    demoUrl: "#",
    sourceUrl: "https://github.com/NajilRahman",
    isPrivate: true
  },
  {
    name: "SUSRUTHA Healthcare CMS & Patient Portal",
    description: "Enterprise hospital management platform & patient web engine for a 40-bed research-backed hospital. Features multi-branch OPD slot booking, tele-consultation workflows, Panchakarma therapy catalog, and a full-featured CMS admin panel with automated media processing pipelines.",
    technologies: ["Node.js", "Express.js", "TypeScript", "MongoDB", "Next.js 14", "React", "Sharp", "Zod", "Swagger", "Tailwind CSS"],
    impact: "Digitized inpatient inquiries, Panchakarma care package workflows, and multi-branch doctor schedules with automated video/image compression.",
    icon: <Stethoscope className="w-5 h-5 text-teal-400" />,
    demoUrl: "#",
    sourceUrl: "https://github.com/NajilRahman",
    isPrivate: true
  },
  {
    name: "Worksphere API (HRMS & Payroll Platform)",
    description: "High-volume salary calculation, shift scheduling, and statutory compliance pipeline. Engineered high-throughput MongoDB data models, aggregation pipelines, and CPU-aware worker clustering to optimize background processing.",
    technologies: ["Node.js", "Express.js", "TypeScript", "MongoDB", "PostgreSQL", "Redis", "Socket.IO"],
    impact: "Processed compliant monthly payroll for 150,000+ employees. Implemented worker clustering, boosting request throughput by 65%.",
    icon: <Server className="w-5 h-5 text-indigo-400" />,
    demoUrl: "#",
    sourceUrl: "https://github.com/NajilRahman",
    isPrivate: true
  },
  {
    name: "Centralized SSO Authentication Gateway",
    description: "Centralized single sign-on (SSO) gateway. Handles secure session hand-offs, cookie protection, role-based authorization rules, and brute-force API rate-limiting rules.",
    technologies: ["Node.js", "Express.js", "TypeScript", "MongoDB", "Mongoose", "JWT", "Zod", "Express Rate Limit"],
    impact: "Implemented secure token exchange flow and custom middleware checks, mitigating credential sniffing and session hijack vectors.",
    icon: <ShieldCheck className="w-5 h-5 text-blue-400" />,
    demoUrl: "#",
    sourceUrl: "https://github.com/NajilRahman",
    isPrivate: true
  },
  {
    name: "Ecosystem Multi-Tenant CRM API",
    description: "Multi-tenant business lead pipeline, client messaging schedulers, and support queue automation API. Backed by Socket.IO for live agents communications.",
    technologies: ["Node.js", "Express.js", "TypeScript", "MongoDB", "Redis", "Socket.IO", "Nodemailer", "PDFKit", "Node-Cron"],
    impact: "Integrated Redis-based queues and cron job workers to automate daily operations reports, increasing team responsiveness.",
    icon: <Users className="w-5 h-5 text-emerald-400" />,
    demoUrl: "#",
    sourceUrl: "https://github.com/NajilRahman",
    isPrivate: true
  },
  {
    name: "Flow E-commerce API",
    description: "High-volume retail e-commerce backend engine supporting dynamic cart checkouts, invoice PDF generators, and automated inventory spreadsheets exports.",
    technologies: ["Node.js", "Express.js", "TypeScript", "MongoDB", "PDFKit", "XLSX", "Zod"],
    impact: "Engineered automated billing generators and sales audit pipelines, eliminating invoice generation delays.",
    icon: <ShoppingCart className="w-5 h-5 text-amber-400" />,
    demoUrl: "#",
    sourceUrl: "https://github.com/NajilRahman",
    isPrivate: true
  },
  {
    name: "Arnoc API (Gamified Car Wash Platform)",
    description: "Robust service booking and product commerce backend. Created reusable controller engines to scale business workflows and customized Mongoose pagination aggregation pipelines.",
    technologies: ["Node.js", "Express.js", "TypeScript", "MongoDB", "Mongoose", "JWT", "Bcrypt"],
    impact: "Reduced duplicate backend logic by 40% through modular shared core architectures.",
    icon: <Car className="w-5 h-5 text-pink-400" />,
    demoUrl: "#",
    sourceUrl: "https://github.com/NajilRahman",
    isPrivate: true
  },
  {
    name: "Attendance & Shift Booking API",
    description: "High-throughput real-time check-in and shift booking microservice. Features secure location-bound clocking logic and live attendance updates.",
    technologies: ["Node.js", "Express.js", "TypeScript", "MongoDB", "Mongoose", "JWT", "Bcrypt"],
    impact: "Eliminated reporting discrepancies to zero through geolocation-bound validation rules.",
    icon: <Calendar className="w-5 h-5 text-rose-400" />,
    demoUrl: "#",
    sourceUrl: "https://github.com/NajilRahman",
    isPrivate: true
  },
  {
    name: "Lendit API (Multi-Tenant SaaS Rental Flow)",
    description: "Tenant-isolated rental flow engine managing product catalogs, customer rental agreements, automated rental billing, and inventory status tracking.",
    technologies: ["Node.js", "Express.js", "TypeScript", "MongoDB", "JWT", "Bcrypt"],
    impact: "Engineered secure tenant-isolated database models and middlewares for seamless organization onboarding.",
    icon: <Key className="w-5 h-5 text-amber-400" />,
    demoUrl: "#",
    sourceUrl: "https://github.com/NajilRahman",
    isPrivate: true
  },
  {
    name: "Stocksigo API (Inventory & Billing Engine)",
    description: "Enterprise product sales, shop billing, daily expenses tracking, and real-time transaction ledger backend.",
    technologies: ["Node.js", "Express.js", "JavaScript", "MongoDB", "JWT", "Bcrypt"],
    impact: "Engineered real-time stock aggregation workflows and transaction logs, preventing data/billing mismatches.",
    icon: <ShoppingBag className="w-5 h-5 text-emerald-400" />,
    demoUrl: "#",
    sourceUrl: "https://github.com/NajilRahman",
    isPrivate: true
  },
  {
    name: "Athenora API (LMS & Class Scheduler)",
    description: "Educational class scheduling, teacher session bookings, student course matching, and digital class notes distribution backend.",
    technologies: ["Node.js", "Express.js", "TypeScript", "MongoDB", "JWT", "Cors"],
    impact: "Created modular REST endpoints for student-teacher sessions and cloud file/folder organization structures.",
    icon: <BookOpen className="w-5 h-5 text-sky-400" />,
    demoUrl: "#",
    sourceUrl: "https://github.com/NajilRahman",
    isPrivate: true
  },
  {
    name: "AI-Assisted Customer Relationship Management",
    description: "A multi-tenant CRM orchestrating automated lead pipelines and marketing schedules. Integrated AI layers for lead scoring and client engagement recommendation.",
    technologies: ["Node.js", "Express.js", "MongoDB", "React.js", "OpenRouter", "Ollama"],
    impact: "Integrated local Ollama & OpenRouter models to automate qualitative lead triage and categorization.",
    icon: <Brain className="w-5 h-5 text-purple-400" />,
    demoUrl: "#",
    sourceUrl: "https://github.com/NajilRahman",
    isPrivate: true
  },
  {
    name: "WebAuthn Passkey & SSO Handoff Gateway",
    description: "Enterprise-grade zero-trust passwordless authentication server featuring biometric login and secure session exchanges to defeat session hijacking.",
    technologies: ["TypeScript", "Node.js", "WebAuthn API", "JWT", "Redis", "RBAC/ABAC Guards"],
    impact: "Replaced legacy credentials with Passkeys, cutting login latency by 50% and protecting session cookies.",
    icon: <Lock className="w-5 h-5 text-teal-400" />,
    demoUrl: "#",
    sourceUrl: "https://github.com/NajilRahman",
    isPrivate: true
  }
];

// Interactive 3D Parallax Tilt Card
const TiltCard: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [tiltStyle, setTiltStyle] = useState<React.CSSProperties>({
    transform: 'rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
    transition: 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const card = cardRef.current;
    const box = card.getBoundingClientRect();
    const x = e.clientX - box.left - box.width / 2;
    const y = e.clientY - box.top - box.height / 2;
    
    // Smooth 3D tilt calculation (6 deg maximum for grids to keep it subtle)
    const rotateX = -(y / (box.height / 2)) * 6;
    const rotateY = (x / (box.width / 2)) * 6;
    
    setTiltStyle({
      transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.015, 1.015, 1.015)`,
      transition: 'transform 0.1s cubic-bezier(0.16, 1, 0.3, 1)',
    });
  };

  const handleMouseLeave = () => {
    setTiltStyle({
      transform: 'rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
      transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
    });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        perspective: 1000,
        transformStyle: 'preserve-3d',
        ...tiltStyle
      }}
      className={className}
    >
      <div style={{ transform: 'translateZ(10px)', transformStyle: 'preserve-3d', height: '100%' }} className="flex flex-col h-full justify-between">
        {children}
      </div>
    </div>
  );
};

export const Projects: React.FC = () => {
  const [showFeedback, setShowFeedback] = useState<string | null>(null);

  const triggerMockAlert = (projName: string) => {
    setShowFeedback(projName);
    setTimeout(() => setShowFeedback(null), 3000);
  };

  return (
    <section id="projects" className="flex flex-col gap-6 w-full scroll-mt-8">
      <div className="flex flex-col gap-2">
        <h2 className="font-serif text-3xl md:text-4xl font-semibold tracking-tight text-white">
          Featured Projects
        </h2>
        <p className="font-mono text-[11px] text-graphite uppercase tracking-widest">
          Systems & architectures I've designed & built
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
        {projectsData.map((project, idx) => (
          <TiltCard 
            key={idx}
            className="glass-panel rounded-3xl p-5 md:p-6 hover:bg-white/[0.06] hover:border-white/20 transition-all duration-300 group flex flex-col justify-between h-full"
          >
            <div>
              {/* Project Header */}
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform mt-0.5">
                    {project.icon}
                  </div>
                  <h3 className="font-serif text-base md:text-lg font-medium text-white group-hover:text-emerald-glow transition-colors duration-300 leading-snug">
                    {project.name}
                  </h3>
                </div>
                <span className="font-mono text-[9px] text-graphite/40 uppercase tracking-widest mt-1">
                  {(idx + 1).toString().padStart(2, '0')}
                </span>
              </div>

              {/* Description */}
              <p className="font-sans text-xs text-graphite mt-3 leading-relaxed">
                {project.description}
              </p>

              {/* Business Impact Card */}
              <div className="mt-4 p-3.5 rounded-xl bg-emerald-glow/[0.02] border border-emerald-glow/5 flex flex-col gap-1">
                <span className="font-mono text-[8px] uppercase tracking-wider text-emerald-glow font-bold">
                  Key Outcome & Impact
                </span>
                <p className="font-sans text-[11px] text-white/80 leading-relaxed">
                  {project.impact}
                </p>
              </div>
            </div>

            <div>
              {/* Tech Tags */}
              <div className="flex flex-wrap gap-1.5 mt-4">
                {project.technologies.map((tech, tIdx) => (
                  <span 
                    key={tIdx}
                    className="font-mono text-[9px] px-2 py-0.5 rounded bg-white/5 border border-white/5 text-white/60"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Actions */}
              {project.isPrivate ? (
                <div className="flex items-center justify-between border-t border-white/5 pt-4 mt-5 gap-3 w-full">
                  <span className="font-mono text-[9px] uppercase tracking-wider text-graphite bg-white/2 px-3 py-2 rounded-xl border border-white/5 flex items-center gap-1.5 flex-1 justify-center select-none opacity-60">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-400/80" />
                    Internal System
                  </span>
                  <span className="font-mono text-[9px] uppercase tracking-wider text-graphite bg-white/2 px-3 py-2 rounded-xl border border-white/5 flex items-center gap-1.5 flex-1 justify-center select-none opacity-60">
                    <Lock className="w-3 h-3 text-graphite/80" />
                    Private Repo
                  </span>
                </div>
              ) : (
                <div className="flex items-center justify-between border-t border-white/5 pt-4 mt-5 gap-3">
                  <button 
                    onClick={() => triggerMockAlert(project.name)}
                    className="btn-mercury-primary py-2 px-4 rounded-xl flex items-center justify-center gap-1.5 font-mono text-[10px] uppercase tracking-wider font-semibold text-white/90 cursor-pointer flex-1 min-w-[90px]"
                  >
                    Live View
                    <ExternalLink className="w-3 h-3 opacity-80" />
                  </button>
                  
                  <a 
                    href={project.sourceUrl}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn-mercury py-2 px-4 rounded-xl flex items-center justify-center gap-1.5 font-mono text-[10px] uppercase tracking-wider font-semibold text-white/85 flex-1 min-w-[90px]"
                  >
                    <Github className="w-3 h-3" />
                    Code
                  </a>
                </div>
              )}
            </div>

            {/* Dynamic visual notification overlay */}
            {showFeedback === project.name && (
              <div className="absolute inset-0 bg-black/95 backdrop-blur-md rounded-3xl flex items-center justify-center p-5 text-center animate-fade-in z-20 border border-white/10">
                <div className="flex flex-col items-center gap-2">
                  <Database className="w-7 h-7 text-emerald-glow animate-bounce" />
                  <p className="font-sans text-xs font-semibold text-white">
                    Live Demo Server Connected
                  </p>
                  <p className="font-mono text-[9px] text-graphite">
                    Connecting: {project.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}-service
                  </p>
                  <p className="font-sans text-[10px] text-emerald-glow mt-1 px-2.5 py-0.5 rounded-full bg-emerald-glow/10 border border-emerald-glow/20">
                    SaaS Console Sandbox Active
                  </p>
                </div>
              </div>
            )}
          </TiltCard>
        ))}
      </div>
    </section>
  );
};
