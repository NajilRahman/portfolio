import React from 'react';
import { Home, Folder, Cpu, Briefcase, User, Mail, Search, Download } from 'lucide-react';
import { MagneticButton } from '../ui/MagneticButton';

interface DockNavProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  onOpenCommandPalette: () => void;
}

export const DockNav: React.FC<DockNavProps> = ({
  activeSection,
  onNavigate,
  onOpenCommandPalette,
}) => {
  const navItems = [
    { id: 'hero', label: 'Overview', icon: <Home className="w-4.5 h-4.5" /> },
    { id: 'projects', label: 'Projects', icon: <Folder className="w-4.5 h-4.5" /> },
    { id: 'skills', label: 'Tech Stack', icon: <Cpu className="w-4.5 h-4.5" /> },
    { id: 'experience', label: 'Experience', icon: <Briefcase className="w-4.5 h-4.5" /> },
    { id: 'about', label: 'About', icon: <User className="w-4.5 h-4.5" /> },
    { id: 'contact', label: 'Contact', icon: <Mail className="w-4.5 h-4.5" /> },
  ];

  const handleResumeDownload = () => {
    const a = document.createElement('a');
    a.href = '/NAJIL_RAHMAN_PM.pdf';
    a.download = 'Najil_Rahman_PM_Resume.pdf';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <nav className="fixed bottom-5 left-1/2 -translate-x-1/2 z-40 max-w-[95vw] md:max-w-none">
      <div className="glass-panel px-3 py-2 rounded-2xl md:rounded-full flex items-center gap-1.5 md:gap-2 border border-white/15 bg-[#0D0D12]/75 backdrop-blur-xl shadow-2xl shadow-black/80">
        {navItems.map((item) => {
          const isActive = activeSection === item.id;
          return (
            <div key={item.id} className="relative group">
              <button
                onClick={() => onNavigate(item.id)}
                className={`relative px-3 py-2 rounded-xl md:rounded-full flex items-center gap-2 transition-all duration-300 ${
                  isActive
                    ? 'bg-white/15 text-white shadow-inner border border-white/20'
                    : 'text-white/60 hover:text-white hover:bg-white/10'
                }`}
                aria-label={item.label}
              >
                <span className={`${isActive ? 'text-emerald-glow' : ''}`}>
                  {item.icon}
                </span>
                <span className="hidden md:inline font-mono text-xs font-medium">
                  {item.label}
                </span>

                {/* Active Indicator Glow Dot */}
                {isActive && (
                  <span className="absolute -top-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-emerald-glow shadow-[0_0_8px_#00FA9A]" />
                )}
              </button>

              {/* Tooltip for Mobile / Compact Icon */}
              <div className="absolute -top-10 left-1/2 -translate-x-1/2 px-2.5 py-1 rounded-md bg-black/90 border border-white/10 text-white font-mono text-[10px] whitespace-nowrap opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-200 shadow-lg md:hidden">
                {item.label}
              </div>
            </div>
          );
        })}

        {/* Separator */}
        <div className="h-5 w-[1px] bg-white/10 mx-1" />

        {/* Command Palette Trigger */}
        <button
          onClick={onOpenCommandPalette}
          className="px-2.5 py-2 rounded-xl md:rounded-full bg-white/5 border border-white/10 hover:bg-white/15 text-white/70 hover:text-white transition-all flex items-center gap-2 font-mono text-xs group"
          title="Open Command Palette (Cmd+K)"
        >
          <Search className="w-4 h-4 text-emerald-glow" />
          <span className="hidden lg:inline text-[11px] text-graphite group-hover:text-white/80">
            <kbd className="px-1 py-0.5 rounded bg-white/10 text-[9px]">Cmd+K</kbd>
          </span>
        </button>

        {/* Quick Resume Download CTA */}
        <MagneticButton
          onClick={handleResumeDownload}
          className="px-3 py-2 rounded-xl md:rounded-full bg-gradient-to-r from-deep-violet/80 to-sapphire/80 border border-white/20 text-white hover:border-emerald-glow/50 transition-all flex items-center gap-1.5 font-mono text-xs font-semibold shrink-0"
          title="Download Resume"
        >
          <Download className="w-3.5 h-3.5 text-emerald-glow" />
          <span className="hidden sm:inline text-[11px]">Resume</span>
        </MagneticButton>
      </div>
    </nav>
  );
};
