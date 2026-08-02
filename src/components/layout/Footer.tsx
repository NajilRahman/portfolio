import React from 'react';
import { profileData } from '../../data/portfolioData';
import { IconChevronDown } from '../ui/MinimalIcons';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 border-t border-[#222227] relative z-10 font-mono text-xs text-[#E4E4E7]">
      <div className="max-w-[1280px] mx-auto px-6 sm:px-10 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          &copy; {new Date().getFullYear()} {profileData.name} &bull; Senior Web Developer @ FlumenX
        </div>

        <div className="flex items-center gap-6">
          <span>Handcrafted Premium Portfolio</span>
          <button
            onClick={scrollToTop}
            className="hover:text-[#7C5CFF] transition-colors cursor-pointer flex items-center gap-1 font-semibold"
          >
            <span>Back to top</span>
            <IconChevronDown size={14} className="rotate-180" />
          </button>
        </div>
      </div>
    </footer>
  );
};
