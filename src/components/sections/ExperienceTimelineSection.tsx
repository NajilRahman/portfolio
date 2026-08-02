import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { experienceData } from '../../data/portfolioData';
import architectureWorkspacePhoto from '../../assets/architecture-workspace.jpg';

gsap.registerPlugin(ScrollTrigger);

export const ExperienceTimelineSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Timeline SVG Line Drawing
      if (pathRef.current) {
        const pathLength = pathRef.current.getTotalLength();
        gsap.set(pathRef.current, {
          strokeDasharray: pathLength,
          strokeDashoffset: pathLength,
        });

        gsap.to(pathRef.current, {
          strokeDashoffset: 0,
          ease: 'none',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 70%',
            end: 'bottom 60%',
            scrub: 0.8,
          },
        });
      }

      // Card Stagger Fade-In
      const cards = gsap.utils.toArray<HTMLElement>('.experience-card');
      cards.forEach((card) => {
        gsap.fromTo(
          card,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
            },
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="experience" ref={containerRef} className="py-24 sm:py-32 border-t border-[#222227] relative z-10">
      <div className="max-w-[1280px] mx-auto px-6 sm:px-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="text-xs font-mono tracking-widest uppercase text-[#7C5CFF] mb-3 font-bold">
              03 &bull; Career & Technical Evolution
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-5xl text-white tracking-tight">
              Work Experience & Platform Milestones
            </h2>
          </div>
          <div className="text-sm font-mono text-[#E4E4E7]">
            2024 &ndash; 2026+ Timeline
          </div>
        </div>

        {/* Feature Architectural Workspace Banner */}
        <div className="mb-20 rounded-3xl bg-[#121214] border border-[#222227] overflow-hidden shadow-2xl grid grid-cols-1 lg:grid-cols-12 items-center">
          <div className="lg:col-span-7 p-8 sm:p-12 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#7C5CFF]/15 border border-[#7C5CFF]/40 text-xs font-mono text-[#7C5CFF] font-bold">
              <span className="w-2 h-2 rounded-full bg-[#7C5CFF] animate-pulse" />
              SYSTEM ARCHITECT & TECH LEAD
            </div>
            <h3 className="font-display font-bold text-2xl sm:text-4xl text-white">
              Architecting High-Throughput Distributed Cloud Systems
            </h3>
            <p className="text-sm sm:text-base text-[#E4E4E7] leading-relaxed">
              Designing scalable microservice architectures, fault-tolerant message queues (Kafka / RabbitMQ), high-concurrency Node.js services, and production Linux VPS deployments at FlumenX.
            </p>
          </div>
          <div className="lg:col-span-5 aspect-[16/10] overflow-hidden bg-[#161619]">
            <img
              src={architectureWorkspacePhoto}
              alt="System Architecture Workstation"
              className="w-full h-full object-cover filter brightness-[1.04]"
            />
          </div>
        </div>

        {/* Vertical Timeline Container */}
        <div className="relative pl-6 sm:pl-10 space-y-16">
          
          {/* Animated SVG Connecting Line */}
          <div className="absolute left-[7px] sm:left-[11px] top-3 bottom-3 w-[2px] pointer-events-none">
            <svg className="w-full h-full" preserveAspectRatio="none">
              <path
                ref={pathRef}
                d="M 1 0 V 1000"
                fill="none"
                stroke="#7C5CFF"
                strokeWidth="2"
              />
            </svg>
          </div>

          {experienceData.map((exp, idx) => (
            <div key={idx} className="experience-card relative group">
              
              {/* Timeline Node Point */}
              <div
                className={`absolute -left-[31px] sm:-left-[47px] top-1.5 w-4 h-4 rounded-full border-2 transition-all ${
                  exp.isCurrent
                    ? 'bg-[#7C5CFF] border-[#7C5CFF] shadow-md shadow-[#7C5CFF]/40'
                    : 'bg-[#121214] border-[#222227] group-hover:border-[#7C5CFF]'
                }`}
              />

              {/* Milestone Card Content */}
              <div className="p-8 rounded-3xl bg-[#121214] border border-[#222227] shadow-sm group-hover:border-[#7C5CFF]/50 group-hover:shadow-lg transition-all duration-300">
                
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-2">
                  <div>
                    <div className="text-xs font-mono text-[#7C5CFF] font-bold mb-1">
                      {exp.period} &bull; {exp.location}
                    </div>
                    <h3 className="font-display font-bold text-2xl text-white">
                      {exp.role}
                    </h3>
                  </div>
                  <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#161619] border border-[#222227] text-xs font-mono text-white font-bold w-fit">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#7C5CFF]" />
                    {exp.company}
                  </div>
                </div>

                <p className="text-sm text-[#E4E4E7] leading-relaxed mb-6 font-normal">
                  {exp.summary}
                </p>

                {/* Highlights */}
                <div className="space-y-2 mb-6">
                  {exp.highlights.map((highlight, i) => (
                    <div key={i} className="text-xs text-[#E4E4E7] flex items-start gap-2.5 leading-relaxed">
                      <span className="text-[#7C5CFF] font-bold text-sm leading-none mt-0.5">&bull;</span>
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>

                {/* Skills Tags */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-[#222227]">
                  {exp.skillsUsed.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-[#161619] text-white border border-[#222227]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
