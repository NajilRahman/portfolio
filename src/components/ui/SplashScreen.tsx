import React, { useEffect, useState } from 'react';
import heroPortrait from '../../assets/hero-portrait.jpg';
import aboutDesk from '../../assets/about-desk.jpg';
import architectureWorkspace from '../../assets/architecture-workspace.jpg';
import contactHeadshot from '../../assets/contact-headshot.jpg';

interface SplashScreenProps {
  onComplete?: () => void;
}

export const SplashScreen: React.FC<SplashScreenProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState<number>(0);
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
  const [isFadingOut, setIsFadingOut] = useState<boolean>(false);
  const [isDismissed, setIsDismissed] = useState<boolean>(false);

  const images = [heroPortrait, aboutDesk, architectureWorkspace, contactHeadshot];

  useEffect(() => {
    // Check session storage to only show splash once per session
    const hasSeenSplash = sessionStorage.getItem('hasSeenPortfolioSplash');
    if (hasSeenSplash === 'true') {
      setIsDismissed(true);
      if (onComplete) onComplete();
      return;
    }

    // Lock body scroll during splash
    document.body.style.overflow = 'hidden';

    // Progress counter timer
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsFadingOut(true);
            setTimeout(() => {
              setIsDismissed(true);
              document.body.style.overflow = 'unset';
              sessionStorage.setItem('hasSeenPortfolioSplash', 'true');
              if (onComplete) onComplete();
            }, 800);
          }, 400);
          return 100;
        }
        return prev + 2;
      });
    }, 28);

    // Image carousel ticker
    const imageInterval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 450);

    return () => {
      clearInterval(interval);
      clearInterval(imageInterval);
      document.body.style.overflow = 'unset';
    };
  }, []);

  if (isDismissed) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] bg-[#0B0B0C] flex flex-col justify-between p-6 sm:p-12 transition-all duration-700 ease-in-out select-none ${
        isFadingOut ? '-translate-y-full opacity-0 pointer-events-none' : 'translate-y-0 opacity-100'
      }`}
    >
      {/* Background Radial Ambient Spotlight */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,rgba(124,92,255,0.15)_0%,transparent_70%)]" />

      {/* Top Header info */}
      <div className="relative z-10 flex justify-between items-center text-xs font-mono tracking-widest text-[#E4E4E7] border-b border-[#222227] pb-6">
        <div className="flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-[#7C5CFF] animate-ping" />
          <span className="font-bold text-white uppercase tracking-wider">NAJIL RAHMAN P M</span>
        </div>
        <div className="hidden sm:block text-[#7C5CFF] font-semibold uppercase">
          IT TEAM LEAD & SENIOR WEB DEVELOPER @ FLUMENX
        </div>
        <div className="font-bold text-white">{String(progress).padStart(3, '0')}%</div>
      </div>

      {/* Center Hero Photo Showcase & Kinetic Typography */}
      <div className="relative z-10 my-auto flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 py-8">
        
        {/* Keynote Portrait Frame */}
        <div className="relative w-48 h-64 sm:w-64 sm:h-80 rounded-3xl overflow-hidden border-2 border-[#7C5CFF]/60 shadow-[0_0_50px_rgba(124,92,255,0.3)] group">
          {images.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt="Najil Rahman"
              className={`absolute inset-0 w-full h-full object-cover object-top transition-all duration-500 transform ${
                idx === currentImageIndex ? 'opacity-100 scale-105' : 'opacity-0 scale-95'
              }`}
            />
          ))}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0C] via-transparent to-transparent opacity-60" />
          
          <div className="absolute bottom-3 left-3 right-3 text-center">
            <span className="px-3 py-1 rounded-full text-[10px] font-mono bg-[#0B0B0C]/80 backdrop-blur-md text-[#7C5CFF] border border-[#7C5CFF]/40 font-bold uppercase">
              EXECUTIVE PORTRAIT 0{currentImageIndex + 1}
            </span>
          </div>
        </div>

        {/* Editorial Text Reveal */}
        <div className="text-center md:text-left max-w-lg">
          <div className="text-xs font-mono text-[#7C5CFF] uppercase tracking-widest font-bold mb-3">
            SYSTEM ARCHITECTURE & FULL-STACK ENGINE
          </div>
          <h1 className="font-display font-bold text-3xl sm:text-5xl text-white tracking-tight leading-tight mb-4">
            Building High-Throughput Web Systems.
          </h1>
          <p className="text-xs sm:text-sm font-mono text-[#E4E4E7] leading-relaxed">
            Directing engineering teams, production Linux VPS deployments, zero-trust security layers, and enterprise Web Applications.
          </p>
        </div>

      </div>

      {/* Bottom Progress Bar & Status */}
      <div className="relative z-10 space-y-4">
        <div className="w-full bg-[#161619] h-1.5 rounded-full overflow-hidden border border-[#222227]">
          <div
            className="bg-gradient-to-r from-[#7C5CFF] via-[#9275FF] to-white h-full transition-all duration-150 ease-out shadow-[0_0_15px_#7C5CFF]"
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="flex justify-between items-center text-[11px] font-mono text-[#E4E4E7]">
          <span>INITIALIZING DIGITAL EXPERIENCE...</span>
          <span className="text-[#7C5CFF] font-semibold">FLUMENX ENTERPRISE INFRASTRUCTURE</span>
        </div>
      </div>

    </div>
  );
};
