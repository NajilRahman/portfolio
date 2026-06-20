import React from 'react';

interface Section {
  id: string;
  label: string;
}

interface FloatNavProps {
  activeSection: string;
  sections: Section[];
}

export const FloatNav: React.FC<FloatNavProps> = ({ activeSection, sections }) => {
  const handleScrollTo = (id: string) => {
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav 
      className="fixed right-3 lg:right-6 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-5 p-3 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl shadow-2xl select-none"
      aria-label="Sidebar navigation"
    >
      {sections.map((section) => {
        const isActive = activeSection === section.id;
        return (
          <button
            key={section.id}
            onClick={() => handleScrollTo(section.id)}
            className="group relative flex items-center justify-center w-4 h-4 cursor-pointer focus:outline-none"
            aria-label={`Navigate to ${section.label}`}
          >
            {/* Elegant glass tooltip */}
            <span className="absolute right-8 px-2.5 py-1 rounded-md bg-[#0D0D0D]/90 border border-white/10 text-white font-mono text-[9px] uppercase tracking-widest opacity-0 pointer-events-none translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 shadow-xl shrink-0 white-space-nowrap">
              {section.label}
            </span>
            
            {/* Indicator Dot */}
            <div 
              className={`w-2 h-2 rounded-full transition-all duration-500 ease-out ${
                isActive 
                  ? 'bg-emerald-glow scale-150 shadow-[0_0_10px_rgba(0,250,154,0.8)] border border-emerald-300/20' 
                  : 'bg-white/30 group-hover:bg-white/80 group-hover:scale-125'
              }`}
            />
          </button>
        );
      })}
    </nav>
  );
};
