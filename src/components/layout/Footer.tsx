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
          &copy; {new Date().getFullYear()} {profileData.name} &bull; IT Team Lead & Senior Web Developer @ FlumenX
        </div>

        <div className="flex items-center gap-6">
          <span>Handcrafted Luxury Portfolio</span>
          <button
            onClick={scrollToTop}
            className="hover:text-[#7C5CFF] transition-colors cursor-pointer flex items-center gap-1 font-bold text-white bg-[#18181B] border border-[#27272A] px-4 py-2 rounded-xl shadow-lg hover:border-[#7C5CFF]/60"
          >
            <span>Back to top</span>
            <IconChevronDown size={14} className="rotate-180 text-[#7C5CFF]" />
          </button>
        </div>
      </div>
    </footer>
  );
};
