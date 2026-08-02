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
  const [statusText, setStatusText] = useState<string>('INITIALIZING SYSTEM KERNEL...');

  const images = [heroPortrait, aboutDesk, architectureWorkspace, contactHeadshot];
  
  const statusMessages = [
    'INITIALIZING SYSTEM KERNEL...',
    'LOADING EXECUTIVE ARCHITECTURE...',
    'CONNECTING FLUMENX CLUSTER...',
    'ENCRYPTING AUTHENTICATION GATEWAY...',
    'MOUNTING FULL-STACK PLATFORM...'
  ];

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    // Fast smooth 00 to 100% counter
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsFadingOut(true);
            setTimeout(() => {
              setIsDismissed(true);
              document.body.style.overflow = 'unset';
              if (onComplete) onComplete();
            }, 750);
          }, 350);
          return 100;
        }

        // Update status text based on progress milestone
        const msgIdx = Math.floor((prev / 100) * statusMessages.length);
        if (statusMessages[msgIdx]) {
          setStatusText(statusMessages[msgIdx]);
        }

        return prev + 2;
      });
    }, 24);

    // Rapid Photo Morph Animation
    const imageInterval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 400);

    return () => {
      clearInterval(interval);
      clearInterval(imageInterval);
      document.body.style.overflow = 'unset';
    };
  }, []);

  if (isDismissed) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] bg-[#0B0B0C] flex flex-col justify-between p-6 sm:p-12 transition-all duration-700 ease-in-out select-none overflow-hidden ${
        isFadingOut ? 'scale-105 opacity-0 pointer-events-none filter blur-lg' : 'scale-100 opacity-100'
      }`}
    >
      {/* Background Animated Laser Mesh Grid & Radial Glow */}
      <div className="absolute inset-0 pointer-events-none opacity-20 bg-[linear-gradient(to_right,#222227_1px,transparent_1px),linear-gradient(to_bottom,#222227_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,rgba(124,92,255,0.25)_0%,transparent_65%)]" />

      {/* Top Header Status */}
      <div className="relative z-10 flex justify-between items-center text-xs font-mono tracking-widest text-[#E4E4E7] border-b border-[#222227]/80 pb-6">
        <div className="flex items-center gap-3">
          <span className="w-2.5 h-2.5 rounded-full bg-[#7C5CFF] shadow-[0_0_12px_#7C5CFF] animate-pulse" />
          <span className="font-bold text-white uppercase tracking-wider text-xs sm:text-sm">NAJIL RAHMAN P M</span>
        </div>
        
        <div className="hidden md:flex items-center gap-2 text-[#7C5CFF] font-semibold text-xs uppercase bg-[#161619] px-4 py-1.5 rounded-full border border-[#7C5CFF]/30">
          <span className="w-1.5 h-1.5 rounded-full bg-[#7C5CFF] animate-ping" />
          IT TEAM LEAD & SENIOR WEB DEVELOPER @ FLUMENX
        </div>

        <div className="flex items-center gap-1.5">
          <span className="text-white font-mono font-bold text-xs sm:text-sm">BUILD 2026.08</span>
        </div>
      </div>

      {/* Center Motion Showcase Stage */}
      <div className="relative z-10 my-auto flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-20 py-6">
        
        {/* Kinetic 3D Photo Stack */}
        <div className="relative w-56 h-72 sm:w-72 sm:h-96 group perspective-1000">
          
          {/* Ambient Motion Halo */}
          <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-[#7C5CFF] via-[#9275FF] to-white opacity-40 blur-2xl animate-pulse" />

          {/* Photo Frames Stack */}
          <div className="relative w-full h-full rounded-3xl overflow-hidden border-2 border-[#7C5CFF] bg-[#121214] shadow-[0_0_60px_rgba(124,92,255,0.4)]">
            {images.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt="Najil Rahman"
                className={`absolute inset-0 w-full h-full object-cover object-top transition-all duration-700 transform ${
                  idx === currentImageIndex
                    ? 'opacity-100 scale-100 rotate-0'
                    : 'opacity-0 scale-110 -rotate-2'
                }`}
              />
            ))}

            {/* Gradient Darkener Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0C] via-transparent to-transparent opacity-70" />

            {/* Badge Indicator */}
            <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center">
              <span className="px-3 py-1 rounded-full text-[10px] font-mono bg-[#0B0B0C]/90 backdrop-blur-md text-[#7C5CFF] border border-[#7C5CFF]/40 font-bold uppercase tracking-wider shadow-lg">
                FRAME 0{currentImageIndex + 1} / 04
              </span>
              <span className="w-2 h-2 rounded-full bg-[#7C5CFF] animate-ping" />
            </div>
          </div>
        </div>

        {/* Monospaced Counter & Headline Motion Graphics */}
        <div className="text-center lg:text-left space-y-4 max-w-xl">
          
          {/* Massive Kinetic Percentage Counter */}
          <div className="flex items-baseline justify-center lg:justify-start gap-2">
            <span className="font-display font-black text-6xl sm:text-8xl text-transparent bg-clip-text bg-gradient-to-r from-white via-[#E4E4E7] to-[#7C5CFF] tracking-tighter">
              {String(progress).padStart(3, '0')}
            </span>
            <span className="font-mono font-extrabold text-2xl sm:text-3xl text-[#7C5CFF]">
              %
            </span>
          </div>

          <div className="text-xs font-mono text-[#7C5CFF] uppercase tracking-widest font-bold">
            {statusText}
          </div>

          <h1 className="font-display font-bold text-2xl sm:text-4xl text-white tracking-tight leading-tight">
            Architecting High-Throughput Enterprise Web Systems.
          </h1>

          {/* Equalizer Audio / Frequency Bouncing Bars */}
          <div className="flex items-center justify-center lg:justify-start gap-1 pt-2">
            {[40, 70, 30, 90, 50, 80, 60, 100, 45, 75].map((h, i) => (
              <div
                key={i}
                className="w-1 bg-[#7C5CFF] rounded-full transition-all duration-300 animate-pulse"
                style={{
                  height: `${(h * (progress / 100)) / 3}px`,
                  animationDelay: `${i * 0.08}s`
                }}
              />
            ))}
          </div>

        </div>

      </div>

      {/* Bottom Progress Line */}
      <div className="relative z-10 space-y-3">
        <div className="w-full bg-[#161619] h-2 rounded-full overflow-hidden border border-[#222227] p-0.5">
          <div
            className="bg-gradient-to-r from-[#7C5CFF] via-[#9275FF] to-white h-full rounded-full transition-all duration-200 ease-out shadow-[0_0_20px_#7C5CFF]"
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="flex justify-between items-center text-[10px] sm:text-[11px] font-mono text-[#E4E4E7]">
          <span>FLUMENX EXECUTIVE PORTFOLIO ARCHITECTURE</span>
          <span className="text-[#7C5CFF] font-semibold">ALL SYSTEMS OPERATIONAL</span>
        </div>
      </div>

    </div>
  );
};
