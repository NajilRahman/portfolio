import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Code, Github, Lock, CheckCircle, Layers } from 'lucide-react';
import { projectsData } from '../../data/portfolioData';
import type { Project } from '../../types/portfolio';

export const HorizontalProjectScroll: React.FC = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const scrollTrackRef = useRef<HTMLDivElement>(null);
  const [activeModal, setActiveModal] = useState<Project | null>(null);

  const featuredProjects = projectsData.filter((p) => p.featured || true).slice(0, 6);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const track = scrollTrackRef.current;
    const container = targetRef.current;
    if (!track || !container) return;

    // Only apply horizontal scroll pinning on desktop (>768px)
    if (window.innerWidth < 768) return;

    const totalScrollWidth = track.scrollWidth - window.innerWidth + 120;

    const ctx = gsap.context(() => {
      gsap.to(track, {
        x: -totalScrollWidth,
        ease: 'none',
        scrollTrigger: {
          trigger: container,
          pin: true,
          scrub: 1,
          start: 'top top',
          end: () => `+=${totalScrollWidth}`,
          invalidateOnRefresh: true,
        },
      });
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <section id="projects" ref={targetRef} className="py-20 relative w-full overflow-hidden scroll-mt-10">
      
      {/* Section Header */}
      <div className="max-w-[1240px] mx-auto px-4 mb-10 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div className="flex flex-col gap-2">
          <span className="font-mono text-xs text-electric-indigo uppercase tracking-widest flex items-center gap-2">
            <Layers className="w-4 h-4 text-electric-indigo" />
            Chapter 3 &bull; Systems Architecture Showcase
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold tracking-tight text-white">
            Engineered Product Showcase
          </h2>
        </div>
        
        <span className="font-mono text-xs text-graphite hidden md:inline">
          Scroll vertically to slide through systems &rarr;
        </span>
      </div>

      {/* Track Container */}
      <div className="w-full">
        <div
          ref={scrollTrackRef}
          className="flex flex-col md:flex-row gap-8 px-4 md:px-12 w-full md:w-max overflow-x-auto md:overflow-visible pb-6 md:pb-0"
        >
          {featuredProjects.map((project, idx) => (
            <div
              key={project.id}
              className="w-full md:w-[680px] shrink-0 glass-panel rounded-3xl p-6 md:p-8 flex flex-col justify-between border border-white/10 glass-panel-hover"
            >
              <div>
                {/* Header Badge */}
                <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-5">
                  <span className="font-mono text-xs text-electric-indigo font-bold">
                    0{idx + 1} // {project.category.toUpperCase()}
                  </span>
                  
                  {project.isPrivate ? (
                    <span className="font-mono text-[10px] px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-graphite flex items-center gap-1">
                      <Lock className="w-3 h-3" /> Private System
                    </span>
                  ) : (
                    <span className="font-mono text-[10px] px-2.5 py-0.5 rounded-full bg-emerald-signal/10 border border-emerald-signal/20 text-emerald-signal">
                      Production Live
                    </span>
                  )}
                </div>

                <h3 className="font-serif text-2xl font-bold text-white mb-2">
                  {project.name}
                </h3>
                
                <p className="font-mono text-xs text-cyan-glow mb-4">
                  {project.tagline}
                </p>

                <p className="font-sans text-sm text-graphite leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Key Metric Box */}
                <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 flex flex-col gap-1 mb-6">
                  <span className="font-mono text-[10px] text-electric-indigo font-bold uppercase tracking-wider">
                    High Concurrency & Metric Outcome
                  </span>
                  <span className="font-sans text-sm text-white font-semibold">
                    {project.impact}
                  </span>
                </div>
              </div>

              <div>
                {/* Tech Stack Chips */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, tIdx) => (
                    <span key={tIdx} className="font-mono text-xs px-3 py-1 rounded-xl bg-white/5 border border-white/5 text-white/80">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex items-center gap-3 border-t border-white/10 pt-4">
                  <button
                    onClick={() => setActiveModal(project)}
                    className="flex-1 py-3 px-4 rounded-xl bg-gradient-to-r from-electric-indigo to-cyan-glow text-white font-mono text-xs uppercase tracking-wider font-semibold shadow-lg hover:opacity-95 transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Code className="w-4 h-4" />
                    Inspect Architecture Specs
                  </button>

                  {!project.isPrivate && (
                    <a
                      href={project.sourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/15 text-white transition-colors"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>

      {/* Architecture Specs Modal */}
      {activeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xl animate-fade-in">
          <div
            className="w-full max-w-2xl bg-[#12131C] border border-white/20 rounded-3xl p-6 md:p-8 flex flex-col gap-6 shadow-2xl shadow-black relative max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div className="flex flex-col">
                <span className="font-mono text-xs text-electric-indigo uppercase font-bold">
                  {activeModal.category} Engine Architecture
                </span>
                <h3 className="font-serif text-2xl font-bold text-white">
                  {activeModal.name}
                </h3>
              </div>

              <button
                onClick={() => setActiveModal(null)}
                className="px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-mono text-xs transition-colors"
              >
                Close
              </button>
            </div>

            <p className="font-sans text-sm text-graphite leading-relaxed">
              {activeModal.description}
            </p>

            <div className="flex flex-col gap-3">
              <span className="font-mono text-xs text-cyan-glow uppercase tracking-wider font-bold">
                Key Architectural Decisions
              </span>
              {activeModal.architecturePoints.map((point, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/5 font-sans text-xs text-white/90">
                  <CheckCircle className="w-4 h-4 text-emerald-signal shrink-0 mt-0.5" />
                  <span>{point}</span>
                </div>
              ))}
            </div>

            <div className="p-4 rounded-2xl bg-electric-indigo/10 border border-electric-indigo/20 flex flex-col gap-1">
              <span className="font-mono text-xs text-electric-indigo font-bold uppercase">
                Impact Metric
              </span>
              <span className="font-sans text-sm text-white">{activeModal.impact}</span>
            </div>

            <div className="flex items-center justify-between border-t border-white/10 pt-4">
              <span className="font-mono text-xs text-graphite">Najil Rahman Architecture Spec</span>
              <button
                onClick={() => setActiveModal(null)}
                className="px-5 py-2 rounded-xl bg-electric-indigo text-white font-mono text-xs uppercase font-semibold"
              >
                Done
              </button>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};
