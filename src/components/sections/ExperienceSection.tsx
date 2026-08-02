import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle } from 'lucide-react';
import { experienceData } from '../../data/portfolioData';
import { TiltCard } from '../ui/TiltCard';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-16 md:py-24 flex flex-col gap-10 w-full relative z-10 scroll-mt-10">
      
      {/* Header */}
      <div className="flex flex-col gap-2">
        <span className="font-mono text-xs text-emerald-glow uppercase tracking-widest flex items-center gap-2">
          <Briefcase className="w-4 h-4 text-emerald-glow" />
          Career Journey & Engineering Achievements
        </span>
        <h2 className="font-serif text-3xl md:text-5xl font-bold tracking-tight text-white">
          Work Experience
        </h2>
        <p className="font-sans text-sm md:text-base text-graphite max-w-xl">
          Track record of designing production APIs, statutory calculation engines, and microservices.
        </p>
      </div>

      {/* Linear-Style Timeline Stream */}
      <div className="flex flex-col gap-8 relative before:absolute before:left-4 md:before:left-8 before:top-4 before:bottom-4 before:w-[1px] before:bg-gradient-to-b before:from-emerald-glow before:via-sapphire before:to-transparent">
        {experienceData.map((job, idx) => (
          <div key={idx} className="relative pl-10 md:pl-20">
            
            {/* Timeline Node Icon */}
            <div className={`absolute left-0 md:left-4 top-2 w-8 h-8 rounded-full border flex items-center justify-center -translate-x-1/2 shadow-lg shadow-black ${
              job.isCurrent
                ? 'bg-emerald-glow text-black border-emerald-glow shadow-[0_0_15px_#00FA9A]'
                : 'bg-[#0D0D14] text-white/70 border-white/20'
            }`}>
              <Briefcase className="w-4 h-4" />
            </div>

            <TiltCard className="glass-panel rounded-3xl p-6 md:p-8 border border-white/10 bg-[#0D0D14]/80 shadow-2xl shadow-black flex flex-col gap-6 group hover:border-white/20 transition-all">
              
              {/* Job Card Header */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/10 pb-4">
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-3">
                    <h3 className="font-serif text-xl md:text-2xl font-bold text-white group-hover:text-emerald-glow transition-colors">
                      {job.role}
                    </h3>
                    {job.isCurrent && (
                      <span className="font-mono text-[10px] px-2.5 py-0.5 rounded-full bg-emerald-glow/10 border border-emerald-glow/20 text-emerald-glow font-bold uppercase tracking-wider">
                        Current Role
                      </span>
                    )}
                  </div>
                  <span className="font-mono text-sm text-white/80 font-medium">
                    {job.company}
                  </span>
                </div>

                <div className="flex flex-col md:items-end gap-1 font-mono text-xs text-graphite">
                  <span className="flex items-center gap-1.5 bg-white/5 px-3 py-1 rounded-lg border border-white/5 text-white/90">
                    <Calendar className="w-3.5 h-3.5 opacity-60" />
                    {job.period}
                  </span>
                  <span className="flex items-center gap-1.5 text-graphite mt-0.5">
                    <MapPin className="w-3.5 h-3.5 opacity-60" />
                    {job.location}
                  </span>
                </div>
              </div>

              {/* Summary */}
              <p className="font-sans text-sm text-white/90 leading-relaxed font-medium">
                {job.summary}
              </p>

              {/* Highlights List */}
              <div className="flex flex-col gap-3">
                <span className="font-mono text-xs text-emerald-glow uppercase tracking-wider">
                  Key Accomplishments & Systems Built
                </span>
                <div className="flex flex-col gap-2.5">
                  {job.highlights.map((bullet, bIdx) => (
                    <div key={bIdx} className="flex items-start gap-3 font-sans text-xs md:text-sm text-graphite/90 leading-relaxed">
                      <CheckCircle className="w-4 h-4 text-emerald-glow shrink-0 mt-0.5" />
                      <span className="text-white/80">{bullet}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Skills Used Tags */}
              <div className="flex flex-wrap gap-2 border-t border-white/5 pt-4">
                {job.skillsUsed.map((skill, sIdx) => (
                  <span key={sIdx} className="font-mono text-xs px-3 py-1 rounded-xl bg-white/5 border border-white/5 text-white/80">
                    {skill}
                  </span>
                ))}
              </div>

            </TiltCard>
          </div>
        ))}
      </div>

    </section>
  );
};
