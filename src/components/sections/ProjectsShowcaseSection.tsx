import React, { useState } from 'react';
import { projectsData } from '../../data/portfolioData';
import type { Project } from '../../types/portfolio';
import { IconArrowUpRight, IconGithub } from '../ui/MinimalIcons';

export const ProjectsShowcaseSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

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

  return (
    <section id="projects" className="py-24 sm:py-32 border-t border-[#1E1E24] relative z-10">
      <div className="max-w-[1240px] mx-auto px-6 sm:px-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="text-xs font-mono tracking-widest uppercase text-[#7C5CFF] mb-3">
              02 &bull; Selected Works & Platform Architecture
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-5xl text-[#F4F4F6] tracking-tight">
              Featured Case Studies & Production Engines
            </h2>
          </div>
          <div className="text-sm font-mono text-[#90909E]">
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
                  : 'bg-[#121214] text-[#90909E] hover:text-[#F4F4F6] border border-[#1E1E24]'
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
              className="group relative rounded-2xl bg-[#121214] border border-[#1E1E24] overflow-hidden flex flex-col justify-between transition-all duration-500 hover:border-[#7C5CFF]/50"
            >
              {/* Project Image Preview Container */}
              <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-[#161619]">
                {/* Image */}
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

                {/* Abstract Handcrafted Backdrop Graphic */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#121214] via-transparent to-transparent opacity-90" />

                {/* Top Badge */}
                <div className="absolute top-4 left-4 right-4 flex justify-between items-center z-10">
                  <span className="px-3 py-1 rounded-full text-[11px] font-mono bg-[#0B0B0C]/80 backdrop-blur-md text-[#7C5CFF] border border-[#7C5CFF]/30">
                    {project.category.toUpperCase()}
                  </span>
                  {project.isPrivate && (
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-mono bg-[#1E1E24]/80 text-[#90909E]">
                      CONFIDENTIAL / PROPRIETARY
                    </span>
                  )}
                </div>
              </div>

              {/* Content Body */}
              <div className="p-8 flex-1 flex flex-col justify-between">
                <div>
                  <div className="text-xs font-mono text-[#7C5CFF] mb-2">
                    {project.tagline}
                  </div>
                  <h3 className="font-display font-bold text-2xl text-[#F4F4F6] mb-3 group-hover:text-[#7C5CFF] transition-colors">
                    {project.name}
                  </h3>
                  <p className="text-sm text-[#90909E] leading-relaxed mb-6 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Architecture Highlights */}
                  {project.architecturePoints && project.architecturePoints.length > 0 && (
                    <div className="space-y-1.5 mb-6">
                      {project.architecturePoints.slice(0, 2).map((point: string, i: number) => (
                        <div key={i} className="text-xs font-mono text-[#90909E] flex items-start gap-2">
                          <span className="text-[#7C5CFF] mt-0.5">&bull;</span>
                          <span>{point}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Footer Tech Stack & Actions */}
                <div className="pt-6 border-t border-[#1E1E24]">
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.slice(0, 5).map((tech: string, i: number) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-[#161619] text-[#F4F4F6] border border-[#222227]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="text-xs font-mono text-[#7C5CFF] hover:underline cursor-pointer flex items-center gap-1"
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
                          className="p-2 rounded-full bg-[#161619] text-[#90909E] hover:text-white hover:border-[#7C5CFF] border border-[#222227] transition-colors"
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
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#0B0B0C]/90 backdrop-blur-xl"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-[#121214] border border-[#222227] rounded-2xl max-w-2xl w-full p-6 sm:p-8 max-h-[85vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-start mb-6">
              <div>
                <span className="text-xs font-mono text-[#7C5CFF] uppercase tracking-wider">
                  {selectedProject.category}
                </span>
                <h3 className="font-display font-bold text-2xl sm:text-3xl text-[#F4F4F6] mt-1">
                  {selectedProject.name}
                </h3>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="text-[#90909E] hover:text-white text-lg font-mono px-2 py-1 cursor-pointer"
              >
                ✕
              </button>
            </div>

            <p className="text-sm text-[#90909E] leading-relaxed mb-6">
              {selectedProject.description}
            </p>

            <div className="mb-6">
              <h4 className="text-xs font-mono uppercase text-[#7C5CFF] mb-2">Impact Summary</h4>
              <p className="text-sm text-[#F4F4F6] bg-[#161619] p-4 rounded-xl border border-[#222227] leading-relaxed">
                {selectedProject.impact}
              </p>
            </div>

            {selectedProject.architecturePoints && (
              <div className="mb-6">
                <h4 className="text-xs font-mono uppercase text-[#7C5CFF] mb-2">Architecture Highlights</h4>
                <ul className="space-y-2">
                  {selectedProject.architecturePoints.map((pt: string, i: number) => (
                    <li key={i} className="text-xs font-mono text-[#90909E] flex items-start gap-2">
                      <span className="text-[#7C5CFF] mt-0.5">&bull;</span>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="mb-8">
              <h4 className="text-xs font-mono uppercase text-[#7C5CFF] mb-2">Technologies Used</h4>
              <div className="flex flex-wrap gap-2">
                {selectedProject.technologies.map((tech: string, i: number) => (
                  <span
                    key={i}
                    className="px-3 py-1 rounded-md text-xs font-mono bg-[#161619] text-[#F4F4F6] border border-[#222227]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex justify-end gap-4 pt-4 border-t border-[#1E1E24]">
              <button
                onClick={() => setSelectedProject(null)}
                className="px-6 py-2.5 rounded-full text-xs font-mono bg-[#161619] text-[#90909E] hover:text-white cursor-pointer"
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
