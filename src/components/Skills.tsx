import React from 'react';
import { Cpu, Terminal, Shield, Wrench, Layers } from 'lucide-react';

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  items: string[];
}

const skillsData: SkillCategory[] = [
  {
    title: "Backend Core",
    icon: <Cpu className="w-4 h-4 text-indigo-400" />,
    items: ["Node.js", "Express.js", "TypeScript", "JavaScript", "REST APIs", "Socket.IO", "Mongoose", "MongoDB Aggregation Pipelines"]
  },
  {
    title: "Frontend UI/UX",
    icon: <Layers className="w-4 h-4 text-emerald-400" />,
    items: ["React.js", "Next.js (Basic)", "React Native (Expo) (Basic)", "Tailwind CSS", "HTML5/CSS3", "Framer Motion", "UI Design Systems"]
  },
  {
    title: "Databases & Cache",
    icon: <Terminal className="w-4 h-4 text-amber-400" />,
    items: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "Database Indexing", "Query Optimization"]
  },
  {
    title: "Security & Gateway",
    icon: <Shield className="w-4 h-4 text-rose-400" />,
    items: ["WebAuthn (Passkeys)", "JWT Authentication", "Single Sign-On (SSO)", "RBAC Guards", "ABAC Guards", "API Rate Limiting"]
  },
  {
    title: "Infrastructure & Tools",
    icon: <Wrench className="w-4 h-4 text-sky-400" />,
    items: ["Docker (Basic)", "Domain Integration", "DNS Routing", "Git & GitHub", "Swagger Docs", "Postman APIs", "Ollama LLM", "OpenRouter AI"]
  }
];

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="flex flex-col gap-6 w-full scroll-mt-8">
      <div className="flex flex-col gap-2">
        <h2 className="font-serif text-3xl md:text-4xl font-semibold tracking-tight text-white">
          Technical Expertise
        </h2>
        <p className="font-mono text-[11px] text-graphite uppercase tracking-widest">
          Languages, frameworks & system design capabilities
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {skillsData.map((category, idx) => (
          <div 
            key={idx} 
            className="glass-panel rounded-3xl p-5 md:p-6 flex flex-col gap-4 border border-white/5 hover:border-white/12 hover:bg-white/[0.05] transition-all duration-300 group"
          >
            {/* Category Header */}
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-gradient-to-br group-hover:from-deep-violet/15 group-hover:to-sapphire/15 transition-all">
                {category.icon}
              </div>
              <h3 className="font-sans text-sm font-semibold text-white/90 uppercase tracking-widest">
                {category.title}
              </h3>
            </div>

            {/* Chips Flow */}
            <div className="flex flex-wrap gap-2 border-t border-white/5 pt-4">
              {category.items.map((skill, sIdx) => (
                <span 
                  key={sIdx}
                  className="font-mono text-xs px-3 py-1.5 rounded-xl bg-white/5 border border-white/5 text-white/80 hover:bg-white/15 hover:border-white/20 hover:text-white hover:scale-105 hover:-translate-y-0.5 transition-all duration-300 cursor-default select-none shadow-sm hover:shadow-emerald-glow/5"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
