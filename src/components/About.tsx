import React from 'react';
import { GraduationCap, Award, Cpu, Code2 } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="flex flex-col gap-6 w-full scroll-mt-8">
      <div className="flex flex-col gap-2">
        <h2 className="font-serif text-3xl md:text-4xl font-semibold tracking-tight text-white">
          About & Education
        </h2>
        <p className="font-mono text-[11px] text-graphite uppercase tracking-widest">
          Who I am, what drives me, and academic foundation
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
        {/* Story Paragraphs - 3/5 width on desktop */}
        <div className="glass-panel rounded-3xl p-6 md:p-8 lg:col-span-3 flex flex-col gap-5">
          <h3 className="font-serif text-xl text-white font-medium">
            Engineering for Scale, Security, and Impact
          </h3>
          <p className="font-sans text-sm text-graphite leading-relaxed">
            I am a Software Engineer driven by the challenge of designing high-throughput backend services and secure authentication architectures. Over my career, I've specialized in constructing core calculations for payroll systems supporting 150,000+ employees and designing zero-trust WebAuthn passkey authentication layers to block session hijacking vectors.
          </p>
          <p className="font-sans text-sm text-graphite leading-relaxed">
            My engineering philosophy focuses on clean code, thorough automated testing, and performance optimization. By implementing worker clustering and intelligent Redis caching, I seek to squeeze maximum utility out of application servers, reducing duplicate business logic and server latency.
          </p>
          <p className="font-sans text-sm text-graphite leading-relaxed">
            Beyond coding, I approach tasks with deep product-thinking. I believe developers should understand not just how to implement APIs, but why they serve the user—ensuring compliance, security, and smooth UX at every touchpoint.
          </p>

          <div className="grid grid-cols-2 gap-4 border-t border-white/5 pt-5 mt-2">
            <div className="flex items-center gap-3">
              <Cpu className="w-5 h-5 text-indigo-400 shrink-0" />
              <div className="flex flex-col">
                <span className="font-sans text-xs font-semibold text-white">Systems Architect</span>
                <span className="font-mono text-[9px] text-graphite uppercase">Logic isolation</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Code2 className="w-5 h-5 text-emerald-400 shrink-0" />
              <div className="flex flex-col">
                <span className="font-sans text-xs font-semibold text-white">Clean Code Practitioner</span>
                <span className="font-mono text-[9px] text-graphite uppercase">90%+ Jest Coverage</span>
              </div>
            </div>
          </div>
        </div>

        {/* Education & Achievements - 2/5 width on desktop */}
        <div className="lg:col-span-2 flex flex-col gap-5">
          {/* Education Card */}
          <div className="glass-panel rounded-3xl p-6 flex flex-col gap-4 border border-white/5 hover:border-white/12 transition-all duration-300">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                <GraduationCap className="w-5 h-5 text-white/70" />
              </div>
              <div>
                <h4 className="font-sans text-xs font-semibold uppercase tracking-wider text-graphite">
                  Academic Background
                </h4>
                <span className="font-serif text-sm font-semibold text-white">
                  Bachelor of Science
                </span>
              </div>
            </div>

            <div className="border-t border-white/5 pt-4 flex flex-col gap-2">
              <span className="font-sans text-sm font-bold text-white leading-tight">
                Computer Science
              </span>
              <p className="font-sans text-xs text-graphite leading-relaxed">
                University of Calicut
              </p>
              <div className="flex items-center justify-between font-mono text-[10px] text-graphite mt-2">
                <span>Calicut, Kerala, India</span>
                <span className="bg-white/5 px-2 py-0.5 rounded border border-white/5 text-white/80">
                  2021 – 2024
                </span>
              </div>
            </div>
          </div>

          {/* Philosophy / Value Statement Card */}
          <div className="glass-panel rounded-3xl p-6 flex flex-col gap-4 border border-white/5 bg-gradient-to-br from-deep-violet/[0.04] to-transparent hover:border-white/12 transition-all duration-300">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                <Award className="w-5 h-5 text-emerald-glow" />
              </div>
              <h4 className="font-sans text-xs font-semibold uppercase tracking-wider text-graphite">
                Core Principles
              </h4>
            </div>

            <div className="border-t border-white/5 pt-4 flex flex-col gap-2 font-mono text-[11px] text-white/80">
              <div className="flex justify-between py-1 border-b border-white/5">
                <span className="text-graphite">Security:</span>
                <span>Zero-Trust API Guards</span>
              </div>
              <div className="flex justify-between py-1 border-b border-white/5">
                <span className="text-graphite">Scalability:</span>
                <span>Worker Clustering</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-graphite">Testing:</span>
                <span>Coverage &gt; 90%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
