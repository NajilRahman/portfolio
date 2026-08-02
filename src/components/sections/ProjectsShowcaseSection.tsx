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
    { id: 'enterprise', label: 'Enterprise & FlumenX' },
    { id: 'healthcare', label: 'Healthcare' },
    { id: 'security', label: 'Security & Auth' },
    { id: 'crm', label: 'CRM & Automation' },
  ];

  const filteredProjects =
    activeCategory === 'all'
      ? projectsData
      : projectsData.filter((p) => p.category === activeCategory);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>('.project-card');
      cards.forEach((card) => {
        gsap.fromTo(
          card,
          { y: 50, opacity: 0 },
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
  }, [activeCategory]);

  return (
    <section id="projects" ref={containerRef} className="py-24 sm:py-32 border-t border-[#E4E4E7] relative z-10">
      <div className="max-w-[1280px] mx-auto px-6 sm:px-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="text-xs font-mono tracking-widest uppercase text-[#7C5CFF] mb-3 font-bold">
              02 &bull; Selected Works & Platform Architecture
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-5xl text-[#09090B] tracking-tight">
              Featured Case Studies & Production Engines
            </h2>
          </div>
          <div className="text-sm font-mono text-[#3F3F46]">
            FlumenX & Full-Stack Projects ({projectsData.length})
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
                  : 'bg-white text-[#3F3F46] hover:text-[#09090B] border border-[#E4E4E7] shadow-sm'
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
              className="project-card group relative rounded-3xl bg-white border border-[#E4E4E7] shadow-sm overflow-hidden flex flex-col justify-between transition-all duration-500 hover:border-[#7C5CFF]/60 hover:shadow-xl"
            >
              {/* Image Preview Container */}
              <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-[#F4F4F5]">
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

                <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-90" />

                {/* Top Badge */}
                <div className="absolute top-4 left-4 right-4 flex justify-between items-center z-10">
                  <span className="px-3 py-1 rounded-full text-[11px] font-mono bg-white/90 backdrop-blur-md text-[#7C5CFF] border border-[#7C5CFF]/30 font-bold shadow-sm">
                    {project.category.toUpperCase()}
                  </span>
                  {project.isPrivate && (
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-mono bg-white/90 text-[#71717A] border border-[#E4E4E7] shadow-sm">
                      CONFIDENTIAL / PROPRIETARY
                    </span>
                  )}
                </div>
              </div>

              {/* Content Body */}
              <div className="p-8 flex-1 flex flex-col justify-between">
                <div>
                  <div className="text-xs font-mono text-[#7C5CFF] font-bold mb-2">
                    {project.tagline}
                  </div>
                  <h3 className="font-display font-bold text-2xl text-[#09090B] mb-3 group-hover:text-[#7C5CFF] transition-colors">
                    {project.name}
                  </h3>
                  <p className="text-sm text-[#3F3F46] leading-relaxed mb-6 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Architecture Highlights */}
                  {project.architecturePoints && project.architecturePoints.length > 0 && (
                    <div className="space-y-1.5 mb-6">
                      {project.architecturePoints.slice(0, 2).map((point: string, i: number) => (
                        <div key={i} className="text-xs font-mono text-[#3F3F46] flex items-start gap-2">
                          <span className="text-[#7C5CFF] font-bold mt-0.5">&bull;</span>
                          <span>{point}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Footer Tech Stack & Actions */}
                <div className="pt-6 border-t border-[#E4E4E7]">
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.slice(0, 5).map((tech: string, i: number) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-[#F4F4F5] text-[#09090B] border border-[#E4E4E7]"
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
                          className="p-2 rounded-full bg-[#F4F4F5] text-[#09090B] hover:text-[#7C5CFF] border border-[#E4E4E7] transition-colors"
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

      {/* Case Details Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#09090B]/60 backdrop-blur-md"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-white border border-[#E4E4E7] rounded-3xl max-w-2xl w-full p-6 sm:p-8 max-h-[85vh] overflow-y-auto shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-start mb-6">
              <div>
                <span className="text-xs font-mono text-[#7C5CFF] uppercase tracking-wider font-bold">
                  {selectedProject.category} Case Study
                </span>
                <h3 className="font-display font-bold text-2xl sm:text-3xl text-[#09090B] mt-1">
                  {selectedProject.name}
                </h3>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="text-[#09090B] hover:text-[#7C5CFF] text-lg font-mono px-2 py-1 cursor-pointer"
              >
                ✕
              </button>
            </div>

            <p className="text-sm text-[#3F3F46] leading-relaxed mb-6">
              {selectedProject.description}
            </p>

            <div className="mb-6">
              <h4 className="text-xs font-mono uppercase text-[#7C5CFF] mb-2 font-bold">Impact Summary</h4>
              <p className="text-sm text-[#09090B] bg-[#F4F4F5] p-4 rounded-2xl border border-[#E4E4E7] leading-relaxed">
                {selectedProject.impact}
              </p>
            </div>

            {selectedProject.architecturePoints && (
              <div className="mb-6">
                <h4 className="text-xs font-mono uppercase text-[#7C5CFF] mb-2 font-bold">Architecture Highlights</h4>
                <ul className="space-y-2">
                  {selectedProject.architecturePoints.map((pt: string, i: number) => (
                    <li key={i} className="text-xs font-mono text-[#3F3F46] flex items-start gap-2">
                      <span className="text-[#7C5CFF] font-bold mt-0.5">&bull;</span>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="mb-8">
              <h4 className="text-xs font-mono uppercase text-[#7C5CFF] mb-2 font-bold">Technologies Used</h4>
              <div className="flex flex-wrap gap-2">
                {selectedProject.technologies.map((tech: string, i: number) => (
                  <span
                    key={i}
                    className="px-3 py-1 rounded-md text-xs font-mono bg-[#F4F4F5] text-[#09090B] border border-[#E4E4E7]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex justify-end gap-4 pt-4 border-t border-[#E4E4E7]">
              <button
                onClick={() => setSelectedProject(null)}
                className="px-6 py-2.5 rounded-full text-xs font-mono bg-white text-[#09090B] hover:border-[#7C5CFF] border border-[#E4E4E7] shadow-sm cursor-pointer"
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
