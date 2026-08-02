import React, { useState } from 'react';
import { skillCategoriesData } from '../../data/portfolioData';

export const SkillsSection: React.FC = () => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  return (
    <section id="skills" className="py-24 sm:py-32 border-t border-[#1E1E24] relative z-10">
      <div className="max-w-[1240px] mx-auto px-6 sm:px-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="text-xs font-mono tracking-widest uppercase text-[#7C5CFF] mb-3">
              04 &bull; Core Stack & Engineering Competencies
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-5xl text-[#F4F4F6] tracking-tight">
              Interactive 3D Technology Cards
            </h2>
          </div>
          <div className="text-sm font-mono text-[#90909E]">
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
                <h3 className="font-display font-bold text-xl sm:text-2xl text-[#F4F4F6]">
                  {category.title}
                </h3>
                <span className="text-xs font-mono text-[#90909E] hidden sm:inline">
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
                          ? 'perspective(1000px) rotateX(3deg) rotateY(-3deg) translateZ(8px)'
                          : 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)',
                        transition: 'transform 0.35s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.35s ease',
                      }}
                      className={`p-6 rounded-2xl bg-[#121214] border transition-all cursor-default flex flex-col justify-between ${
                        isHovered
                          ? 'border-[#7C5CFF] shadow-xl shadow-[#7C5CFF]/10'
                          : 'border-[#1E1E24]'
                      }`}
                    >
                      <div>
                        <div className="flex items-center justify-between mb-3">
                          <h4 className="font-display font-bold text-lg text-[#F4F4F6]">
                            {skill.name}
                          </h4>
                          <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-[#161619] text-[#7C5CFF] border border-[#7C5CFF]/30">
                            {skill.level}
                          </span>
                        </div>

                        {/* Usage Detail on Hover or Static */}
                        <p className="text-xs text-[#90909E] leading-relaxed font-mono">
                          {skill.usage}
                        </p>
                      </div>

                      <div className="mt-4 pt-3 border-t border-[#1E1E24] flex justify-between items-center text-[10px] font-mono text-[#5B5B66]">
                        <span>PRODUCTION READY</span>
                        <span className={isHovered ? "text-[#7C5CFF]" : ""}>FLUMENX ENGINE</span>
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
