import React, { useState } from 'react';
import { LayoutDashboard, Stethoscope, Server, ShieldCheck, Users, ShoppingCart, Car, Calendar, Key, ShoppingBag, BookOpen, Brain, Lock, Github, Code, CheckCircle, X, Layers } from 'lucide-react';
import type { Project } from '../../types/portfolio';
import { projectsData } from '../../data/portfolioData';
import { TiltCard } from '../ui/TiltCard';

const iconMap: Record<string, React.ReactNode> = {
  LayoutDashboard: <LayoutDashboard className="w-5 h-5 text-cyan-400" />,
  Stethoscope: <Stethoscope className="w-5 h-5 text-teal-400" />,
  Server: <Server className="w-5 h-5 text-indigo-400" />,
  ShieldCheck: <ShieldCheck className="w-5 h-5 text-blue-400" />,
  Users: <Users className="w-5 h-5 text-emerald-400" />,
  ShoppingCart: <ShoppingCart className="w-5 h-5 text-amber-400" />,
  Car: <Car className="w-5 h-5 text-pink-400" />,
  Calendar: <Calendar className="w-5 h-5 text-rose-400" />,
  Key: <Key className="w-5 h-5 text-amber-400" />,
  ShoppingBag: <ShoppingBag className="w-5 h-5 text-emerald-400" />,
  BookOpen: <BookOpen className="w-5 h-5 text-sky-400" />,
  Brain: <Brain className="w-5 h-5 text-purple-400" />,
  Lock: <Lock className="w-5 h-5 text-teal-400" />,
};

export const ProjectsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeProjectModal, setActiveProjectModal] = useState<Project | null>(null);

  const categories = [
    { id: 'all', label: 'All Systems' },
    { id: 'enterprise', label: 'Enterprise & HRMS' },
    { id: 'security', label: 'Security & Auth' },
    { id: 'healthcare', label: 'Healthcare CMS' },
    { id: 'crm', label: 'CRM & AI' },
    { id: 'saas', label: 'SaaS APIs' },
  ];

  const filteredProjects = selectedCategory === 'all'
    ? projectsData
    : projectsData.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="py-16 md:py-24 flex flex-col gap-10 w-full relative z-10 scroll-mt-10">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="flex flex-col gap-2">
          <span className="font-mono text-xs text-emerald-glow uppercase tracking-widest flex items-center gap-2">
            <Layers className="w-4 h-4 text-emerald-glow" />
            Product Architecture & Systems Showcase
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold tracking-tight text-white">
            Engineered Projects
          </h2>
          <p className="font-sans text-sm md:text-base text-graphite max-w-xl">
            Production backend systems, zero-trust authentication gateways, and statutory calculation engines built for scale.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap gap-1.5 p-1.5 rounded-2xl bg-white/5 border border-white/10 max-w-full">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3 py-1.5 rounded-xl font-mono text-xs transition-all cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-gradient-to-r from-deep-violet to-sapphire text-white shadow-md border border-white/20'
                  : 'text-graphite hover:text-white hover:bg-white/5'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* MacOS / SaaS Window Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
        {filteredProjects.map((project) => (
          <TiltCard
            key={project.id}
            className="glass-panel rounded-3xl border border-white/10 bg-[#0D0D14]/75 hover:bg-[#0D0D14]/90 hover:border-white/20 transition-all duration-300 flex flex-col justify-between h-full group"
          >
            <div>
              {/* MacOS Window Control Header */}
              <div className="flex items-center justify-between p-4 border-b border-white/5 bg-white/[0.02]">
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                </div>

                <span className="font-mono text-[9px] uppercase tracking-wider text-graphite bg-white/5 px-2 py-0.5 rounded border border-white/5">
                  {project.category}
                </span>
              </div>

              {/* Body */}
              <div className="p-5 flex flex-col gap-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    {iconMap[project.iconName] || <Code className="w-5 h-5 text-emerald-glow" />}
                  </div>

                  <div className="flex flex-col">
                    <h3 className="font-serif text-base md:text-lg font-semibold text-white group-hover:text-emerald-glow transition-colors leading-snug">
                      {project.name}
                    </h3>
                    <span className="font-mono text-[11px] text-graphite mt-0.5">
                      {project.tagline}
                    </span>
                  </div>
                </div>

                <p className="font-sans text-xs text-graphite/90 leading-relaxed line-clamp-3">
                  {project.description}
                </p>

                {/* Key Outcome Highlight */}
                <div className="p-3 rounded-xl bg-emerald-glow/[0.03] border border-emerald-glow/10 flex flex-col gap-1">
                  <span className="font-mono text-[8px] uppercase tracking-widest text-emerald-glow font-bold">
                    Impact Metric
                  </span>
                  <p className="font-sans text-[11px] text-white/90 leading-normal">
                    {project.impact}
                  </p>
                </div>
              </div>
            </div>

            {/* Footer & Actions */}
            <div className="p-5 pt-0 flex flex-col gap-4">
              {/* Tech Tags */}
              <div className="flex flex-wrap gap-1.5">
                {project.technologies.slice(0, 5).map((tech, tIdx) => (
                  <span
                    key={tIdx}
                    className="font-mono text-[9px] px-2 py-0.5 rounded bg-white/5 border border-white/5 text-white/70"
                  >
                    {tech}
                  </span>
                ))}
                {project.technologies.length > 5 && (
                  <span className="font-mono text-[9px] px-1.5 py-0.5 rounded bg-white/5 text-graphite">
                    +{project.technologies.length - 5}
                  </span>
                )}
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-2 border-t border-white/5 pt-4">
                <button
                  onClick={() => setActiveProjectModal(project)}
                  className="flex-1 py-2 px-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/15 text-white font-mono text-[10px] uppercase tracking-wider font-semibold flex items-center justify-center gap-1.5 transition-all cursor-pointer"
                >
                  <Code className="w-3 h-3 text-emerald-glow" />
                  Specs & Architecture
                </button>

                {project.isPrivate ? (
                  <span className="px-3 py-2 rounded-xl bg-white/[0.02] border border-white/5 text-graphite font-mono text-[9px] uppercase tracking-wider flex items-center gap-1 opacity-70">
                    <Lock className="w-3 h-3" />
                    Private Repo
                  </span>
                ) : (
                  <a
                    href={project.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-xl bg-white/5 border border-white/10 hover:bg-white/15 text-white transition-all"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>

          </TiltCard>
        ))}
      </div>

      {/* Interactive Project Specs Modal */}
      {activeProjectModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-lg animate-fade-in">
          <div
            className="w-full max-w-2xl bg-[#0D0D14] border border-white/20 rounded-3xl p-6 md:p-8 flex flex-col gap-6 shadow-2xl shadow-black relative max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-start justify-between gap-4 border-b border-white/10 pb-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                  {iconMap[activeProjectModal.iconName] || <Code className="w-6 h-6 text-emerald-glow" />}
                </div>
                <div className="flex flex-col">
                  <span className="font-mono text-xs text-emerald-glow uppercase tracking-wider">
                    {activeProjectModal.category} Engine
                  </span>
                  <h3 className="font-serif text-xl md:text-2xl font-bold text-white">
                    {activeProjectModal.name}
                  </h3>
                </div>
              </div>

              <button
                onClick={() => setActiveProjectModal(null)}
                className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-white/60 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Overview */}
            <div className="flex flex-col gap-2">
              <span className="font-mono text-xs text-graphite uppercase tracking-wider">
                System Overview
              </span>
              <p className="font-sans text-sm text-white/90 leading-relaxed">
                {activeProjectModal.description}
              </p>
            </div>

            {/* Architecture Highlights */}
            <div className="flex flex-col gap-3">
              <span className="font-mono text-xs text-emerald-glow uppercase tracking-wider">
                Key Architectural Wins & Security Decisions
              </span>
              <div className="flex flex-col gap-2">
                {activeProjectModal.architecturePoints.map((point, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/5 font-sans text-xs text-white/90">
                    <CheckCircle className="w-4 h-4 text-emerald-glow shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Impact Metric Card */}
            <div className="p-4 rounded-2xl bg-gradient-to-r from-deep-violet/30 to-sapphire/30 border border-white/10 flex flex-col gap-1">
              <span className="font-mono text-xs text-emerald-glow font-bold uppercase tracking-wider">
                Measured Business Outcome
              </span>
              <p className="font-sans text-xs md:text-sm text-white font-medium">
                {activeProjectModal.impact}
              </p>
            </div>

            {/* Tech Stack Chips */}
            <div className="flex flex-col gap-2">
              <span className="font-mono text-xs text-graphite uppercase tracking-wider">
                Technology Stack
              </span>
              <div className="flex flex-wrap gap-2">
                {activeProjectModal.technologies.map((t, idx) => (
                  <span key={idx} className="font-mono text-xs px-3 py-1 rounded-xl bg-white/5 border border-white/10 text-white/80">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between border-t border-white/10 pt-4 mt-2">
              <span className="font-mono text-xs text-graphite">
                Architecture Spec #0{projectsData.findIndex(p => p.id === activeProjectModal.id) + 1}
              </span>

              <button
                onClick={() => setActiveProjectModal(null)}
                className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-deep-violet to-sapphire text-white font-mono text-xs uppercase tracking-wider font-semibold hover:border-emerald-glow/50 transition-all cursor-pointer"
              >
                Close Specs
              </button>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};
