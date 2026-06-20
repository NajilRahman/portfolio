import React, { useEffect, useState } from 'react';

export const ProgressIndicator: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        const currentProgress = (window.scrollY / totalScroll) * 100;
        setScrollProgress(currentProgress);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Run once initially to capture any existing scroll position
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="hidden lg:flex w-3.5 h-[400px] sticky top-1/4 rounded-full bg-white/5 border border-white/10 p-[2px] overflow-hidden shadow-[inset_0_2px_8px_rgba(0,0,0,0.8)] self-start shrink-0">
      <div 
        className="w-full rounded-full bg-gradient-to-b from-deep-violet via-sapphire to-emerald-glow shadow-[0_0_12px_rgba(0,250,154,0.5)] transition-all duration-75 ease-out"
        style={{ height: `${scrollProgress}%` }}
      />
    </div>
  );
};
