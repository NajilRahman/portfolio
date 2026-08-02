import { Briefcase, GraduationCap, CheckCircle } from 'lucide-react';
import { experienceData, profileData } from '../../data/portfolioData';

export const StoryTimelineSection: React.FC = () => {
  return (
    <section id="experience" className="py-20 flex flex-col gap-12 w-full relative z-10 scroll-mt-10">
      
      {/* Chapter Title */}
      <div className="flex flex-col gap-2">
        <span className="font-mono text-xs text-electric-indigo uppercase tracking-widest flex items-center gap-2">
          <Briefcase className="w-4 h-4 text-electric-indigo" />
          Chapter 2 &bull; Career Narrative & Progression
        </span>
        <h2 className="font-serif text-3xl md:text-5xl font-bold tracking-tight text-white">
          The Journey
        </h2>
        <p className="font-sans text-sm md:text-base text-graphite max-w-xl">
          From computer science foundations to leading senior web engineering and Linux VPS cloud server administration at FlumenX.
        </p>
      </div>

      {/* Storytelling Timeline Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Sticky Progress Anchor (4 Cols) */}
        <div className="lg:col-span-4 lg:sticky lg:top-24 flex flex-col gap-6">
          <div className="glass-panel rounded-3xl p-6 border border-white/10 flex flex-col gap-4">
            <span className="font-mono text-xs text-electric-indigo font-bold uppercase tracking-wider">
              NARRATIVE PROGRESSION
            </span>

            <div className="flex flex-col gap-3 font-mono text-xs">
              <div className="flex items-center gap-3 text-white">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-signal shadow-[0_0_8px_#10B981]" />
                <span className="font-bold text-emerald-signal">July 2026 – Present &bull; FlumenX</span>
              </div>
              <div className="flex items-center gap-3 text-graphite">
                <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
                <span>2025 – 2026 &bull; Luvid Technologies</span>
              </div>
              <div className="flex items-center gap-3 text-graphite">
                <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
                <span>2024 &bull; Luminar Technolab</span>
              </div>
              <div className="flex items-center gap-3 text-graphite">
                <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
                <span>2021 – 2024 &bull; University of Calicut</span>
              </div>
            </div>

            <div className="border-t border-white/10 pt-4 flex flex-col gap-1">
              <span className="font-mono text-[10px] text-graphite uppercase">Current Senior Focus</span>
              <span className="font-sans text-xs text-white font-semibold">
                Senior Web Developer @ FlumenX • Linux VPS & Enterprise Apps
              </span>
            </div>
          </div>
        </div>

        {/* Right Stepping Story Cards (8 Cols) */}
        <div className="lg:col-span-8 flex flex-col gap-8">
          
          {/* FlumenX (Current Senior Role) */}
          <div className="glass-panel rounded-3xl p-6 md:p-8 border border-white/10 flex flex-col gap-6 glass-panel-hover relative overflow-hidden">
            <div className="absolute top-0 right-0 px-4 py-1 bg-gradient-to-r from-electric-indigo via-cyber-lavender to-emerald-signal text-white font-mono text-[10px] font-bold uppercase rounded-bl-2xl">
              Active Senior Chapter
            </div>

            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-3">
                <h3 className="font-serif text-2xl font-bold text-white">
                  FlumenX
                </h3>
              </div>
              <span className="font-mono text-sm text-emerald-signal font-bold">
                Senior Web Developer &bull; July 2026 – Present
              </span>
              <span className="font-mono text-xs text-graphite">
                Kerala, India
              </span>
            </div>

            <p className="font-sans text-sm text-white/90 leading-relaxed font-medium">
              {experienceData[0].summary}
            </p>

            <div className="flex flex-col gap-3 border-t border-white/10 pt-5">
              <span className="font-mono text-xs text-cyan-glow font-bold uppercase tracking-wider">
                Senior Engineering Accomplishments
              </span>
              {experienceData[0].highlights.map((bullet, idx) => (
                <div key={idx} className="flex items-start gap-3 font-sans text-xs md:text-sm text-graphite leading-relaxed">
                  <CheckCircle className="w-4 h-4 text-emerald-signal shrink-0 mt-0.5" />
                  <span className="text-white/90">{bullet}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-2 pt-2 border-t border-white/5">
              {experienceData[0].skillsUsed.map((skill, sIdx) => (
                <span key={sIdx} className="font-mono text-xs px-3 py-1 rounded-xl bg-white/5 border border-white/5 text-white/80">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Luvid Technologies */}
          <div className="glass-panel rounded-3xl p-6 md:p-8 border border-white/10 flex flex-col gap-6 glass-panel-hover">
            <div className="flex flex-col gap-1">
              <h3 className="font-serif text-xl font-bold text-white">
                Luvid Technologies
              </h3>
              <span className="font-mono text-sm text-electric-indigo font-semibold">
                Junior Software Engineer &bull; Jan. 2025 – June 2026
              </span>
              <span className="font-mono text-xs text-graphite">
                Kozhikode, Kerala, India
              </span>
            </div>

            <p className="font-sans text-sm text-graphite leading-relaxed">
              {experienceData[1].summary}
            </p>

            <div className="flex flex-col gap-2 border-t border-white/10 pt-4">
              {experienceData[1].highlights.map((bullet, idx) => (
                <div key={idx} className="flex items-start gap-3 font-sans text-xs text-graphite leading-relaxed">
                  <CheckCircle className="w-4 h-4 text-electric-indigo shrink-0 mt-0.5" />
                  <span className="text-white/80">{bullet}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-2 pt-2 border-t border-white/5">
              {experienceData[1].skillsUsed.map((skill, sIdx) => (
                <span key={sIdx} className="font-mono text-xs px-3 py-1 rounded-xl bg-white/5 border border-white/5 text-white/80">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Luminar Technolab */}
          <div className="glass-panel rounded-3xl p-6 md:p-8 border border-white/10 flex flex-col gap-6 glass-panel-hover">
            <div className="flex flex-col gap-1">
              <h3 className="font-serif text-xl font-bold text-white">
                Luminar Technolab
              </h3>
              <span className="font-mono text-sm text-cyan-glow font-semibold">
                MERN Stack Intern &bull; May 2024 – Dec. 2024
              </span>
            </div>

            <p className="font-sans text-sm text-graphite leading-relaxed">
              Engineered full-stack MERN web applications with custom REST APIs, compound database indexing, and query optimizations in Agile development teams.
            </p>
          </div>

          {/* Academic Foundation */}
          <div className="glass-panel rounded-3xl p-6 border border-white/10 flex items-start gap-4">
            <div className="p-3 rounded-2xl bg-white/5 border border-white/10 shrink-0">
              <GraduationCap className="w-6 h-6 text-electric-indigo" />
            </div>
            <div className="flex flex-col gap-1">
              <span className="font-mono text-xs text-graphite uppercase">Academic Foundation</span>
              <h4 className="font-serif text-lg font-bold text-white">
                {profileData.education.degree} in {profileData.education.field}
              </h4>
              <p className="font-sans text-xs text-graphite">
                {profileData.education.institution} &bull; {profileData.education.period}
              </p>
            </div>
          </div>

        </div>

      </div>

    </section>
  );
};
