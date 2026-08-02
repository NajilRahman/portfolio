import React, { useEffect, useState } from 'react';
import { profileData } from '../../data/portfolioData';
import { soundFx } from '../../utils/soundEffects';

interface HeaderNavProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export const HeaderNav: React.FC<HeaderNavProps> = ({ activeSection, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleToggleSound = () => {
    const mutedState = soundFx.toggleMute();
    setIsMuted(mutedState);
    if (!mutedState) soundFx.playClick();
  };

  const handleNavClick = (sectionId: string) => {
    soundFx.playClick();
    onNavigate(sectionId);
  };

  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'skills', label: 'Tech Stack' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0B0B0C]/85 backdrop-blur-md border-b border-[#222227] py-3 sm:py-4 shadow-xl'
          : 'bg-transparent py-4 sm:py-8'
      }`}
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-10 flex items-center justify-between">
        
        {/* Brand Mark */}
        <button
          onClick={() => handleNavClick('hero')}
          onMouseEnter={() => soundFx.playHover()}
          className="group flex items-center gap-2.5 sm:gap-3 cursor-pointer text-left"
        >
          <span className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#121214] border border-[#222227] flex items-center justify-center font-display font-bold text-xs sm:text-sm text-white group-hover:border-[#7C5CFF] transition-colors">
            NR
          </span>
          <div>
            <div className="font-display font-bold text-xs sm:text-sm tracking-tight text-white">
              {profileData.name}
            </div>
            <div className="text-[10px] sm:text-[11px] font-mono text-[#E4E4E7] flex items-center gap-1 font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-[#7C5CFF] animate-pulse" />
              IT Team Lead @ FlumenX
            </div>
          </div>
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                onMouseEnter={() => soundFx.playHover()}
                className={`px-3 py-1.5 text-sm font-medium transition-all relative cursor-pointer ${
                  isActive ? 'text-white font-bold' : 'text-[#E4E4E7] hover:text-white'
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-[#7C5CFF]" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Action Controls: Audio Toggle + Contact CTA */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          {/* Audio Mute/Unmute Button */}
          <button
            onClick={handleToggleSound}
            onMouseEnter={() => soundFx.playHover()}
            className="p-2 rounded-full border border-[#222227] bg-[#121214] text-[#E4E4E7] hover:text-[#7C5CFF] hover:border-[#7C5CFF] transition-colors cursor-pointer"
            title={isMuted ? 'Unmute Sound Effects' : 'Mute Sound Effects'}
          >
            {isMuted ? (
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
              </svg>
            ) : (
              <svg className="w-4 h-4 text-[#7C5CFF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
              </svg>
            )}
          </button>

          <button
            onClick={() => handleNavClick('contact')}
            onMouseEnter={() => soundFx.playHover()}
            className="text-[11px] sm:text-xs font-mono tracking-wider uppercase px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full border border-[#222227] bg-[#121214] text-white font-bold hover:border-[#7C5CFF] hover:text-[#7C5CFF] transition-colors cursor-pointer"
          >
            Contact
          </button>
        </div>

      </div>
    </header>
  );
};
