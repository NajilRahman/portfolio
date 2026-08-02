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
          ? 'bg-[#FBFBFD]/90 backdrop-blur-md border-b border-[#E4E4E7] py-4 shadow-sm'
          : 'bg-transparent py-6 sm:py-8'
      }`}
    >
      <div className="max-w-[1280px] mx-auto px-6 sm:px-10 flex items-center justify-between">
        
        {/* Brand Mark */}
        <button
          onClick={() => onNavigate('hero')}
          className="group flex items-center gap-3 cursor-pointer text-left"
        >
          <span className="w-9 h-9 rounded-full bg-white border border-[#E4E4E7] shadow-sm flex items-center justify-center font-display font-bold text-sm text-[#09090B] group-hover:border-[#7C5CFF] transition-colors">
            NR
          </span>
          <div className="hidden sm:block">
            <div className="font-display font-bold text-sm tracking-tight text-[#09090B]">
              {profileData.name}
            </div>
            <div className="text-[11px] font-mono text-[#71717A] flex items-center gap-1.5 font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-[#7C5CFF] animate-pulse" />
              FlumenX Senior Dev
            </div>
          </div>
        </button>

        {/* Minimal Navigation */}
        <nav className="flex items-center gap-1 sm:gap-6">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`px-3 py-1.5 text-xs sm:text-sm font-medium transition-all relative cursor-pointer ${
                  isActive ? 'text-[#09090B] font-bold' : 'text-[#52525B] hover:text-[#09090B]'
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

        {/* Action Button */}
        <div className="hidden lg:block">
          <button
            onClick={() => onNavigate('contact')}
            className="text-xs font-mono tracking-wider uppercase px-4 py-2 rounded-full border border-[#E4E4E7] bg-white text-[#09090B] shadow-sm font-bold hover:border-[#7C5CFF] hover:text-[#7C5CFF] transition-colors cursor-pointer"
          >
            Get In Touch
          </button>
        </div>

      </div>
    </header>
  );
};
