import React, { useEffect, useState } from 'react';
import { profileData } from '../../data/portfolioData';

interface HeaderNavProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export const HeaderNav: React.FC<HeaderNavProps> = ({ activeSection, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
          onClick={() => onNavigate('hero')}
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
                onClick={() => onNavigate(item.id)}
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

        {/* Mobile & Desktop Action CTA */}
        <div>
          <button
            onClick={() => onNavigate('contact')}
            className="text-[11px] sm:text-xs font-mono tracking-wider uppercase px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full border border-[#222227] bg-[#121214] text-white font-bold hover:border-[#7C5CFF] hover:text-[#7C5CFF] transition-colors cursor-pointer"
          >
            Contact
          </button>
        </div>

      </div>
    </header>
  );
};
