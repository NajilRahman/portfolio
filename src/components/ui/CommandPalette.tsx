import React, { useEffect, useState } from 'react';
import { Search, X, Folder, Cpu, Download, Mail, Github, Linkedin, ArrowRight } from 'lucide-react';
import { projectsData, skillCategoriesData, profileData } from '../../data/portfolioData';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectSection: (sectionId: string) => void;
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({
  isOpen,
  onClose,
  onSelectSection,
}) => {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
        else {
          // Open signal triggered elsewhere or toggle
        }
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleResumeDownload = () => {
    const a = document.createElement('a');
    a.href = '/NAJIL_RAHMAN_PM.pdf';
    a.download = 'Najil_Rahman_PM_Resume.pdf';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    onClose();
  };

  const filteredProjects = projectsData.filter((p) =>
    p.name.toLowerCase().includes(query.toLowerCase()) ||
    p.technologies.some((t) => t.toLowerCase().includes(query.toLowerCase())) ||
    p.description.toLowerCase().includes(query.toLowerCase())
  );

  const filteredSkills = skillCategoriesData.filter((s) =>
    s.title.toLowerCase().includes(query.toLowerCase()) ||
    s.items.some((i) => i.name.toLowerCase().includes(query.toLowerCase()))
  );

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 md:pt-28 px-4 bg-black/70 backdrop-blur-md animate-fade-in">
      <div
        className="w-full max-w-2xl bg-[#0D0D12]/90 border border-white/15 rounded-2xl shadow-2xl shadow-black/80 overflow-hidden flex flex-col max-h-[80vh] relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Header */}
        <div className="flex items-center px-4 py-3.5 border-b border-white/10 gap-3 bg-white/[0.02]">
          <Search className="w-5 h-5 text-emerald-glow shrink-0" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Type a command, project, or tech stack... (e.g. Node.js, WebAuthn, Projects)"
            className="w-full bg-transparent text-white placeholder-white/40 font-sans text-sm focus:outline-none"
            autoFocus
          />
          <button
            onClick={onClose}
            className="p-1 rounded-lg hover:bg-white/10 text-white/50 hover:text-white transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Results List */}
        <div className="flex-1 overflow-y-auto p-3 flex flex-col gap-4 font-sans text-sm">
          {/* Action Commands */}
          {!query && (
            <div className="flex flex-col gap-1">
              <span className="font-mono text-[10px] text-graphite uppercase tracking-widest px-2 py-1">
                Quick Actions
              </span>
              <button
                onClick={handleResumeDownload}
                className="flex items-center justify-between px-3 py-2.5 rounded-xl hover:bg-white/10 text-white transition-colors group text-left"
              >
                <div className="flex items-center gap-3">
                  <Download className="w-4 h-4 text-emerald-glow" />
                  <span>Download ATS Resume / CV (PDF)</span>
                </div>
                <ArrowRight className="w-4 h-4 text-white/30 group-hover:text-emerald-glow group-hover:translate-x-1 transition-all" />
              </button>
              <button
                onClick={() => {
                  onSelectSection('contact');
                  onClose();
                }}
                className="flex items-center justify-between px-3 py-2.5 rounded-xl hover:bg-white/10 text-white transition-colors group text-left"
              >
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-sky-400" />
                  <span>Send Direct Email Transmission</span>
                </div>
                <ArrowRight className="w-4 h-4 text-white/30 group-hover:text-sky-400 group-hover:translate-x-1 transition-all" />
              </button>
              <a
                href={profileData.github}
                target="_blank"
                rel="noopener noreferrer"
                onClick={onClose}
                className="flex items-center justify-between px-3 py-2.5 rounded-xl hover:bg-white/10 text-white transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <Github className="w-4 h-4 text-purple-400" />
                  <span>Open Najil's GitHub Profile</span>
                </div>
                <ArrowRight className="w-4 h-4 text-white/30 group-hover:text-purple-400 group-hover:translate-x-1 transition-all" />
              </a>
              <a
                href={profileData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                onClick={onClose}
                className="flex items-center justify-between px-3 py-2.5 rounded-xl hover:bg-white/10 text-white transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <Linkedin className="w-4 h-4 text-blue-400" />
                  <span>Open Najil's LinkedIn Profile</span>
                </div>
                <ArrowRight className="w-4 h-4 text-white/30 group-hover:text-blue-400 group-hover:translate-x-1 transition-all" />
              </a>
            </div>
          )}

          {/* Projects Results */}
          {filteredProjects.length > 0 && (
            <div className="flex flex-col gap-1">
              <span className="font-mono text-[10px] text-graphite uppercase tracking-widest px-2 py-1">
                Featured Projects ({filteredProjects.length})
              </span>
              {filteredProjects.map((p) => (
                <button
                  key={p.id}
                  onClick={() => {
                    onSelectSection('projects');
                    onClose();
                  }}
                  className="flex items-center justify-between px-3 py-2.5 rounded-xl hover:bg-white/10 text-white transition-colors group text-left"
                >
                  <div className="flex items-center gap-3 overflow-hidden">
                    <Folder className="w-4 h-4 text-emerald-glow shrink-0" />
                    <div className="flex flex-col truncate">
                      <span className="font-medium text-white truncate">{p.name}</span>
                      <span className="font-mono text-[11px] text-graphite truncate">{p.tagline}</span>
                    </div>
                  </div>
                  <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-white/5 text-white/60 shrink-0">
                    {p.category}
                  </span>
                </button>
              ))}
            </div>
          )}

          {/* Skills & Architecture */}
          {filteredSkills.length > 0 && (
            <div className="flex flex-col gap-1">
              <span className="font-mono text-[10px] text-graphite uppercase tracking-widest px-2 py-1">
                Technical Stack ({filteredSkills.length})
              </span>
              {filteredSkills.map((s) => (
                <button
                  key={s.id}
                  onClick={() => {
                    onSelectSection('skills');
                    onClose();
                  }}
                  className="flex items-center justify-between px-3 py-2.5 rounded-xl hover:bg-white/10 text-white transition-colors group text-left"
                >
                  <div className="flex items-center gap-3">
                    <Cpu className="w-4 h-4 text-indigo-400 shrink-0" />
                    <div className="flex flex-col">
                      <span className="font-medium text-white">{s.title}</span>
                      <span className="font-mono text-[11px] text-graphite">{s.items.map(i => i.name).slice(0, 4).join(', ')}</span>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Footer info */}
        <div className="px-4 py-2.5 border-t border-white/10 bg-white/[0.02] flex items-center justify-between font-mono text-[10px] text-graphite">
          <span>Navigate with mouse or arrow keys</span>
          <span>Press <kbd className="px-1.5 py-0.5 rounded bg-white/10 text-white">ESC</kbd> to exit</span>
        </div>
      </div>
    </div>
  );
};
