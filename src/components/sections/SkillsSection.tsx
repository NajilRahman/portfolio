import React, { useState } from 'react';
import { skillCategoriesData } from '../../data/portfolioData';

export const SkillsSection: React.FC = () => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  return (
    <section id="skills" className="py-24 sm:py-32 border-t border-[#222227] relative z-10">
      <div className="max-w-[1280px] mx-auto px-6 sm:px-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="text-xs font-mono tracking-widest uppercase text-[#7C5CFF] mb-3 font-bold">
              04 &bull; Core Stack & Platform Engineering
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-5xl text-white tracking-tight">
              Interactive Technology Cards
            </h2>
          </div>
          <div className="text-sm font-mono text-[#E4E4E7]">
            Hover cards for production usage details
          </div>
        </div>

        {/* Categories Stack */}
        <div className="space-y-16">
          {skillCategoriesData.map((category) => (
            <div key={category.id} className="space-y-6">
              
              {/* Category Title Bar */}
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-[#7C5CFF]" />
                <h3 className="font-display font-bold text-xl sm:text-2xl text-white">
                  {category.title}
                </h3>
                <span className="text-xs font-mono text-[#E4E4E7] hidden sm:inline">
                  &mdash; {category.description}
                </span>
              </div>

              {/* Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.items.map((skill, idx) => {
                  const skillKey = `${category.id}-${skill.name}`;
                  const isHovered = hoveredSkill === skillKey;

                  return (
                    <div
                      key={idx}
                      onMouseEnter={() => setHoveredSkill(skillKey)}
                      onMouseLeave={() => setHoveredSkill(null)}
                      style={{
                        transform: isHovered
                          ? 'perspective(1000px) rotateX(3deg) rotateY(-3deg) translateZ(6px)'
                          : 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)',
                        transition: 'transform 0.35s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.35s ease',
                      }}
                      className={`p-6 rounded-2xl bg-[#121214] border transition-all cursor-default flex flex-col justify-between shadow-sm ${
                        isHovered
                          ? 'border-[#7C5CFF] shadow-xl shadow-[#7C5CFF]/15'
                          : 'border-[#222227]'
                      }`}
                    >
                      <div>
                        <div className="flex items-center justify-between mb-3">
                          <h4 className="font-display font-bold text-lg text-white">
                            {skill.name}
                          </h4>
                          <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-[#161619] text-[#7C5CFF] border border-[#7C5CFF]/40 font-bold">
                            {skill.level}
                          </span>
                        </div>

                        <p className="text-xs text-[#E4E4E7] leading-relaxed font-mono">
                          {skill.usage}
                        </p>
                      </div>

                      <div className="mt-4 pt-3 border-t border-[#222227] flex justify-between items-center text-[10px] font-mono text-[#E4E4E7]">
                        <span>PRODUCTION READY</span>
                        <span className={isHovered ? "text-[#7C5CFF] font-bold" : ""}>FLUMENX ENGINE</span>
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
