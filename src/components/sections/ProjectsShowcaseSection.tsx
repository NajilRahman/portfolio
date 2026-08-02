import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { projectsData } from '../../data/portfolioData';
import type { Project } from '../../types/portfolio';
import { IconArrowUpRight, IconGithub } from '../ui/MinimalIcons';

gsap.registerPlugin(ScrollTrigger);

export const ProjectsShowcaseSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const categories = [
    { id: 'all', label: 'All Works' },
    { id: 'luvid', label: 'Luvid Technologies' },
    { id: 'flumenx', label: 'FlumenX Projects' },
    { id: 'enterprise', label: 'Enterprise & ERP' },
    { id: 'healthcare', label: 'Healthcare CMS' },
    { id: 'fintech', label: 'FinTech & Lending' },
    { id: 'security', label: 'Security & SSO' },
    { id: 'crm', label: 'CRM & Automation' },
  ];

  const filteredProjects =
    activeCategory === 'all'
      ? projectsData
      : activeCategory === 'luvid'
      ? projectsData.filter((p) => p.company === 'Luvid Technologies')
      : activeCategory === 'flumenx'
      ? projectsData.filter((p) => p.company === 'FlumenX')
      : projectsData.filter((p) => p.category === activeCategory);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedProject]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Fast, Snappy 2026 Project Card Reveal Animation
      const cards = gsap.utils.toArray<HTMLElement>('.project-card');
      cards.forEach((card) => {
        gsap.fromTo(
          card,
          { y: 25, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.35,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 92%',
            },
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, [activeCategory]);

  return (
    <section id="projects" ref={containerRef} className="py-24 sm:py-32 border-t border-[#222227] relative z-10">
      <div className="max-w-[1280px] mx-auto px-6 sm:px-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="text-xs font-mono tracking-widest uppercase text-[#7C5CFF] mb-3 font-bold">
              02 &bull; Selected Works & Platform Architecture
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-5xl text-white tracking-tight">
              Featured Case Studies & Production Engines
            </h2>
          </div>
          <div className="text-sm font-mono text-[#E4E4E7]">
            Production Platforms ({projectsData.length})
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap gap-2 mb-14">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs font-mono transition-all cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-[#7C5CFF] text-white font-semibold shadow-md shadow-[#7C5CFF]/20'
                  : 'bg-[#121214] text-[#E4E4E7] hover:text-white border border-[#222227]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              className="project-card group relative rounded-3xl bg-[#121214] border border-[#222227] overflow-hidden flex flex-col justify-between transition-all duration-500 hover:border-[#7C5CFF]/60 hover:shadow-2xl"
            >
              {/* Project Image Preview Container */}
              <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-[#161619]">
                {project.imageUrl ? (
                  <img
                    src={project.imageUrl}
                    alt={project.name}
                    className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                ) : null}

                <div className="absolute inset-0 bg-gradient-to-t from-[#121214] via-transparent to-transparent opacity-90" />

                {/* Top Badge */}
                <div className="absolute top-4 left-4 right-4 flex justify-between items-center z-10">
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full text-[11px] font-mono bg-[#0B0B0C]/80 backdrop-blur-md text-[#7C5CFF] border border-[#7C5CFF]/40 font-bold shadow-sm">
                      {project.category.toUpperCase()}
                    </span>
                    {project.company && (
                      <span className="px-2.5 py-1 rounded-full text-[10px] font-mono bg-[#7C5CFF]/20 text-[#A78BFA] border border-[#7C5CFF]/40 font-semibold">
                        {project.company}
                      </span>
                    )}
                  </div>
                  {project.isPrivate && (
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-mono bg-[#161619]/90 text-[#E4E4E7] border border-[#222227]">
                      PROPRIETARY
                    </span>
                  )}
                </div>
              </div>

              {/* Content Body */}
              <div className="p-8 flex-1 flex flex-col justify-between">
                <div>
                  <div className="text-xs font-mono text-[#7C5CFF] font-semibold mb-2">
                    {project.tagline}
                  </div>
                  <h3 className="font-display font-bold text-2xl text-white mb-3 group-hover:text-[#7C5CFF] transition-colors">
                    {project.name}
                  </h3>
                  <p className="text-sm text-[#E4E4E7] leading-relaxed mb-6 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Architecture Highlights */}
                  {project.architecturePoints && project.architecturePoints.length > 0 && (
                    <div className="space-y-1.5 mb-6">
                      {project.architecturePoints.slice(0, 2).map((point: string, i: number) => (
                        <div key={i} className="text-xs font-mono text-[#E4E4E7] flex items-start gap-2">
                          <span className="text-[#7C5CFF] font-bold mt-0.5">&bull;</span>
                          <span>{point}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Footer Tech Stack & Actions */}
                <div className="pt-6 border-t border-[#222227]">
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.slice(0, 5).map((tech: string, i: number) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-[#161619] text-white border border-[#222227]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="text-xs font-mono text-[#7C5CFF] font-bold hover:underline cursor-pointer flex items-center gap-1"
                    >
                      View Case Details
                      <IconArrowUpRight size={14} />
                    </button>

                    <div className="flex items-center gap-3">
                      {project.sourceUrl && (
                        <a
                          href={project.sourceUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="p-2 rounded-full bg-[#161619] text-white hover:border-[#7C5CFF] border border-[#222227] transition-colors"
                          title="View Repository"
                        >
                          <IconGithub size={16} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>

              </div>
            </article>
          ))}
        </div>

      </div>

      {/* Case Details Scrollable Modal with Lenis Bypass Attributes */}
      {selectedProject && (
        <div
          data-lenis-prevent="true"
          data-lenis-prevent-wheel="true"
          data-lenis-prevent-touch="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#0B0B0C]/90 backdrop-blur-xl overflow-y-auto"
          onClick={() => setSelectedProject(null)}
        >
          <div
            data-lenis-prevent="true"
            data-lenis-prevent-wheel="true"
            data-lenis-prevent-touch="true"
            className="bg-[#121214] border border-[#222227] rounded-3xl max-w-2xl w-full my-auto shadow-2xl overflow-hidden flex flex-col max-h-[88vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="p-6 sm:p-8 border-b border-[#222227] flex justify-between items-start shrink-0 bg-[#121214]">
              <div>
                <span className="text-xs font-mono text-[#7C5CFF] uppercase tracking-wider font-semibold">
                  {selectedProject.category} Case Study
                </span>
                <h3 className="font-display font-bold text-2xl sm:text-3xl text-white mt-1">
                  {selectedProject.name}
                </h3>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="w-9 h-9 rounded-full bg-[#161619] border border-[#222227] text-white hover:text-[#7C5CFF] hover:border-[#7C5CFF] flex items-center justify-center font-mono text-sm transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                ✕
              </button>
            </div>

            {/* Modal Body - Smooth Scrollable */}
            <div
              data-lenis-prevent="true"
              data-lenis-prevent-wheel="true"
              data-lenis-prevent-touch="true"
              className="p-6 sm:p-8 overflow-y-auto space-y-6 scrollbar-thin"
              style={{ overscrollBehavior: 'contain' }}
            >
              <p className="text-sm text-[#E4E4E7] leading-relaxed">
                {selectedProject.description}
              </p>

              <div>
                <h4 className="text-xs font-mono uppercase text-[#7C5CFF] mb-2 font-bold">Impact Summary</h4>
                <p className="text-sm text-white bg-[#161619] p-4 rounded-2xl border border-[#222227] leading-relaxed">
                  {selectedProject.impact}
                </p>
              </div>

              {selectedProject.architecturePoints && (
                <div>
                  <h4 className="text-xs font-mono uppercase text-[#7C5CFF] mb-2 font-bold">Architecture Highlights</h4>
                  <ul className="space-y-2">
                    {selectedProject.architecturePoints.map((pt: string, i: number) => (
                      <li key={i} className="text-xs font-mono text-[#E4E4E7] flex items-start gap-2">
                        <span className="text-[#7C5CFF] font-bold mt-0.5">&bull;</span>
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div>
                <h4 className="text-xs font-mono uppercase text-[#7C5CFF] mb-2 font-bold">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech: string, i: number) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-md text-xs font-mono bg-[#161619] text-white border border-[#222227]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4 sm:p-6 border-t border-[#222227] shrink-0 bg-[#121214] flex justify-end gap-4">
              <button
                onClick={() => setSelectedProject(null)}
                className="px-6 py-2.5 rounded-full text-xs font-mono bg-[#7C5CFF] text-white hover:bg-[#9275FF] font-bold cursor-pointer transition-colors shadow-md shadow-[#7C5CFF]/20"
              >
                Close Case
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
