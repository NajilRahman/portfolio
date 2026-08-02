import React, { useEffect, useState } from 'react';

interface StoryChapterHeaderProps {
  activeSection: string;
}

export const StoryChapterHeader: React.FC<StoryChapterHeaderProps> = ({ activeSection }) => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      const progress = totalHeight > 0 ? (currentScroll / totalHeight) * 100 : 0;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const chapters: Record<string, { number: string; title: string }> = {
    hero: { number: '01', title: 'THE PROLOGUE & IDENTITY' },
    experience: { number: '02', title: 'THE CAREER NARRATIVE' },
    projects: { number: '03', title: 'ARCHITECTURE SHOWCASE' },
    skills: { number: '04', title: 'ENGINEERING TAXONOMY' },
    about: { number: '05', title: 'SYSTEMS DOSSIER' },
    contact: { number: '06', title: 'INITIATE TRANSMISSION' },
  };

  const currentChapter = chapters[activeSection] || chapters.hero;

  return (
    <header className="fixed top-5 left-5 z-40 hidden md:flex items-center gap-3">
      <div className="glass-panel px-3.5 py-2 rounded-full border border-white/10 bg-[#0E1118]/80 backdrop-blur-xl flex items-center gap-2.5 shadow-xl">
        <span className="w-2 h-2 rounded-full bg-emerald-glow animate-ping" />
        <span className="font-mono text-xs text-emerald-glow font-bold">
          CHAPTER {currentChapter.number}
        </span>
        <span className="text-white/20 font-mono text-xs">|</span>
        <span className="font-mono text-[11px] text-white/90 tracking-wider">
          {currentChapter.title}
        </span>
      </div>

      {/* Mini Scroll Progress Bar */}
      <div className="w-24 h-1.5 rounded-full bg-white/10 overflow-hidden border border-white/10">
        <div
          className="h-full bg-gradient-to-r from-emerald-glow via-sky-cyan to-kinetic-violet transition-all duration-150"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>
    </header>
  );
};
