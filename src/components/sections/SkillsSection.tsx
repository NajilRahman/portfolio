import React, { useState } from 'react';
import { skillCategoriesData } from '../../data/portfolioData';

const marqueeRow1 = [
  { name: "Node.js", logo: "nodedotjs", tag: "Backend Engine", level: "Expert" },
  { name: "TypeScript", logo: "typescript", tag: "Strict Type Safety", level: "Expert" },
  { name: "Express.js", logo: "express", tag: "REST API Microservices", level: "Expert" },
  { name: "React.js", logo: "react", tag: "Frontend UI/UX", level: "Expert" },
  { name: "Next.js 14", logo: "nextdotjs", tag: "App Router & SSR", level: "Expert" },
  { name: "Linux VPS", logo: "linux", tag: "Cloud Infrastructure", level: "Expert" },
  { name: "Nginx", logo: "nginx", tag: "Reverse Proxy & SSL", level: "Expert" },
  { name: "MongoDB", logo: "mongodb", tag: "Aggregation & Schemas", level: "Expert" },
  { name: "Redis", logo: "redis", tag: "In-Memory Cache & Queues", level: "Advanced" },
  { name: "Go / Golang", logo: "go", tag: "Statutory Payroll Engine", level: "Advanced" },
  { name: "Docker", logo: "docker", tag: "Containerization", level: "Proficient" },
  { name: "Socket.IO", logo: "socketdotio", tag: "Real-Time WebSockets", level: "Advanced" },
];

const marqueeRow2 = [
  { name: "WebAuthn", logo: "auth0", tag: "Passkey Security", level: "Advanced" },
  { name: "PostgreSQL", logo: "postgresql", tag: "Relational Schemas", level: "Proficient" },
  { name: "MySQL", logo: "mysql", tag: "Database Indexing", level: "Proficient" },
  { name: "Tailwind CSS v4", logo: "tailwindcss", tag: "Design Token Utility", level: "Expert" },
  { name: "GSAP & ScrollTrigger", logo: "greensock", tag: "Kinetic Motion & Parallax", level: "Advanced" },
  { name: "Framer Motion", logo: "framer", tag: "Layout Animations", level: "Advanced" },
  { name: "PM2 Cluster", logo: "pm2", tag: "Process Management", level: "Expert" },
  { name: "Cloudflare", logo: "cloudflare", tag: "DNS & Edge Protection", level: "Expert" },
  { name: "Postman / OpenAPI", logo: "postman", tag: "API Contract Specs", level: "Expert" },
  { name: "JavaScript ESNext", logo: "javascript", tag: "Async I/O & Streams", level: "Expert" },
];

export const SkillsSection: React.FC = () => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  // Quadruple items to create a seamless infinite loop
  const row1Repeated = [...marqueeRow1, ...marqueeRow1, ...marqueeRow1, ...marqueeRow1];
  const row2Repeated = [...marqueeRow2, ...marqueeRow2, ...marqueeRow2, ...marqueeRow2];

  return (
    <section id="skills" className="py-24 sm:py-32 border-t border-[#222227] relative z-10 overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6 sm:px-10 mb-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="text-xs font-mono tracking-widest uppercase text-[#7C5CFF] mb-3 font-bold">
              04 &bull; Core Stack &amp; Platform Engineering
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-5xl text-white tracking-tight">
              Technology Stack &amp; Moving Brand Ticker
            </h2>
          </div>
          <div className="text-sm font-mono text-[#E4E4E7]">
            Hover marquee cards to pause &bull; Production stacks
          </div>
        </div>

      </div>

      {/* FAST BRANDING MARQUEE BANNER 1 (Leftwards Fast) */}
      <div className="relative w-full overflow-hidden py-4 mb-6 bg-[#121214]/60 border-y border-[#222227] backdrop-blur-md">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#0B0B0C] to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#0B0B0C] to-transparent z-20 pointer-events-none" />

        <div className="animate-marquee-fast flex items-center gap-4 whitespace-nowrap">
          {row1Repeated.map((item, idx) => (
            <div
              key={`r1-${idx}`}
              className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-[#161619] border border-[#222227] hover:border-[#7C5CFF] hover:bg-[#1C1C22] transition-all cursor-pointer group shadow-lg shrink-0"
            >
              <div className="w-8 h-8 rounded-xl bg-[#0B0B0C] border border-[#222227] p-1.5 flex items-center justify-center shrink-0 group-hover:border-[#7C5CFF]/60 transition-colors">
                <img
                  src={`https://cdn.simpleicons.org/${item.logo}/7C5CFF`}
                  alt={item.name}
                  className="w-full h-full object-contain filter brightness-120"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <span className="font-display font-bold text-sm text-white group-hover:text-[#7C5CFF] transition-colors">
                    {item.name}
                  </span>
                  <span className="px-2 py-0.5 rounded-full text-[9px] font-mono bg-[#7C5CFF]/15 text-[#7C5CFF] font-bold border border-[#7C5CFF]/30">
                    {item.level}
                  </span>
                </div>
                <span className="text-[11px] font-mono text-[#A1A1AA]">
                  {item.tag}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* FAST BRANDING MARQUEE BANNER 2 (Rightwards Fast Reverse) */}
      <div className="relative w-full overflow-hidden py-4 mb-20 bg-[#121214]/60 border-b border-[#222227] backdrop-blur-md">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#0B0B0C] to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#0B0B0C] to-transparent z-20 pointer-events-none" />

        <div className="animate-marquee-fast-reverse flex items-center gap-4 whitespace-nowrap">
          {row2Repeated.map((item, idx) => (
            <div
              key={`r2-${idx}`}
              className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-[#161619] border border-[#222227] hover:border-[#7C5CFF] hover:bg-[#1C1C22] transition-all cursor-pointer group shadow-lg shrink-0"
            >
              <div className="w-8 h-8 rounded-xl bg-[#0B0B0C] border border-[#222227] p-1.5 flex items-center justify-center shrink-0 group-hover:border-[#7C5CFF]/60 transition-colors">
                <img
                  src={`https://cdn.simpleicons.org/${item.logo}/7C5CFF`}
                  alt={item.name}
                  className="w-full h-full object-contain filter brightness-120"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <span className="font-display font-bold text-sm text-white group-hover:text-[#7C5CFF] transition-colors">
                    {item.name}
                  </span>
                  <span className="px-2 py-0.5 rounded-full text-[9px] font-mono bg-[#7C5CFF]/15 text-[#7C5CFF] font-bold border border-[#7C5CFF]/30">
                    {item.level}
                  </span>
                </div>
                <span className="text-[11px] font-mono text-[#A1A1AA]">
                  {item.tag}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* DETAILED CATEGORIES GRID */}
      <div className="max-w-[1280px] mx-auto px-6 sm:px-10">
        <div className="space-y-16">
          {skillCategoriesData.map((category) => (
            <div key={category.id} className="space-y-6">
              
              {/* Category Title Bar */}
              <div className="flex items-center gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-[#7C5CFF]" />
                <h3 className="font-display font-bold text-xl sm:text-2xl text-white">
                  {category.title}
                </h3>
                <span className="text-xs font-mono text-[#E4E4E7] hidden sm:inline">
                  &mdash; {category.description}
                </span>
              </div>

              {/* Cards Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
                {category.items.map((skill, idx) => {
                  const skillKey = `${category.id}-${skill.name}`;
                  const isHovered = hoveredSkill === skillKey;
                  const logoUrl = skill.logoSlug
                    ? `https://cdn.simpleicons.org/${skill.logoSlug}/7C5CFF`
                    : null;

                  return (
                    <div
                      key={idx}
                      onMouseEnter={() => setHoveredSkill(skillKey)}
                      onMouseLeave={() => setHoveredSkill(null)}
                      style={{
                        transform: isHovered
                          ? 'perspective(1000px) rotateX(2deg) rotateY(-2deg) translateZ(4px)'
                          : 'none',
                        transition: 'transform 0.35s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.35s ease',
                      }}
                      className={`p-5 sm:p-6 rounded-2xl bg-[#121214] border transition-all cursor-default flex flex-col justify-between shadow-sm ${
                        isHovered
                          ? 'border-[#7C5CFF] shadow-xl shadow-[#7C5CFF]/15'
                          : 'border-[#222227]'
                      }`}
                    >
                      <div>
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center gap-3">
                            {/* Official Tech Logo Icon */}
                            {logoUrl ? (
                              <div className="w-10 h-10 rounded-xl bg-[#161619] border border-[#222227] p-2 flex items-center justify-center shrink-0">
                                <img
                                  src={logoUrl}
                                  alt={skill.name}
                                  className="w-full h-full object-contain filter brightness-110"
                                  onError={(e) => {
                                    e.currentTarget.style.display = 'none';
                                  }}
                                />
                              </div>
                            ) : (
                              <div className="w-10 h-10 rounded-xl bg-[#161619] border border-[#222227] flex items-center justify-center text-[#7C5CFF] font-bold text-xs">
                                {skill.name.substring(0, 2)}
                              </div>
                            )}

                            <h4 className="font-display font-bold text-base sm:text-lg text-white">
                              {skill.name}
                            </h4>
                          </div>

                          <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-[#161619] text-[#7C5CFF] border border-[#7C5CFF]/40 font-bold shrink-0">
                            {skill.level}
                          </span>
                        </div>

                        <p className="text-xs text-[#E4E4E7] leading-relaxed font-mono">
                          {skill.usage}
                        </p>
                      </div>

                    </div>
                  );
                })}
              </div>

            </div>
          ))}
        </div>
      </div>

    </section>
  );
};
