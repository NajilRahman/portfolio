import React from 'react';

interface MobileBottomBarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export const MobileBottomBar: React.FC<MobileBottomBarProps> = ({ activeSection, onNavigate }) => {
  const tabs = [
    {
      id: 'hero',
      label: 'Home',
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 00-1-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 00-1 1m-6 0h6" />
        </svg>
      )
    },
    {
      id: 'about',
      label: 'About',
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      )
    },
    {
      id: 'projects',
      label: 'Works',
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      )
    },
    {
      id: 'experience',
      label: 'Timeline',
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      id: 'contact',
      label: 'Contact',
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    }
  ];

  return (
    <div className="fixed bottom-3 left-3 right-3 z-50 md:hidden pointer-events-auto flex justify-center">
      <nav className="bg-[#121214]/95 backdrop-blur-2xl border border-[#222227] rounded-2xl p-1.5 shadow-[0_12px_40px_rgba(0,0,0,0.9)] flex items-center justify-around w-full max-w-sm relative overflow-hidden">
        {tabs.map((tab) => {
          const isActive = activeSection === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => onNavigate(tab.id)}
              className={`relative flex flex-col items-center justify-center py-1.5 px-3 rounded-xl transition-all duration-300 cursor-pointer ${
                isActive
                  ? 'bg-[#7C5CFF]/20 text-white font-bold border border-[#7C5CFF]/60 shadow-[0_0_15px_rgba(124,92,255,0.3)] scale-105'
                  : 'text-[#A1A1AA] hover:text-white border border-transparent'
              }`}
            >
              {/* Active Top Glow Bar Indicator */}
              {isActive && (
                <span className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-7 h-1 bg-[#7C5CFF] rounded-full shadow-[0_0_10px_#7C5CFF]" />
              )}

              <div className="relative">
                {tab.icon}
              </div>

              <span className={`text-[10px] font-mono tracking-tight mt-1 ${isActive ? 'text-white font-extrabold' : 'text-[#A1A1AA]'}`}>
                {tab.label}
              </span>
            </button>
          );
        })}
      </nav>
    </div>
  );
};
