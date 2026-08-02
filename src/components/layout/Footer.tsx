import React from 'react';
import { profileData } from '../../data/portfolioData';
import { IconChevronDown } from '../ui/MinimalIcons';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 border-t border-[#E4E4E7] relative z-10 font-mono text-xs text-[#52525B]">
      <div className="max-w-[1280px] mx-auto px-6 sm:px-10 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          &copy; {new Date().getFullYear()} {profileData.name} &bull; Senior Web Developer @ FlumenX
        </div>

        <div className="flex items-center gap-6">
          <span>Handcrafted Luxury Light Portfolio</span>
          <button
            onClick={scrollToTop}
            className="hover:text-[#7C5CFF] transition-colors cursor-pointer flex items-center gap-1 font-bold text-[#09090B]"
          >
            <span>Back to top</span>
            <IconChevronDown size={14} className="rotate-180 text-[#7C5CFF]" />
          </button>
        </div>
      </div>
    </footer>
  );
};
