import React, { useEffect, useState, useRef } from 'react';

export const SpotlightCursor: React.FC = () => {
  const [hoverType, setHoverType] = useState<'none' | 'button' | 'card' | 'link'>('none');
  const [hoverLabel, setHoverLabel] = useState<string>('');
  const [isVisible, setIsVisible] = useState(false);
  const [isMouseDown, setIsMouseDown] = useState(false);
  
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const spotlightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only enable on desktop devices with fine pointer
    if (window.matchMedia('(pointer: coarse)').matches) return;

    let animationFrameId: number;
    let mouseX = -100;
    let mouseY = -100;
    let ringX = -100;
    let ringY = -100;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (!isVisible) setIsVisible(true);

      // Instant center reticle tracking
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
      }

      // Detect interactive element type
      const targetEl = e.target as HTMLElement | null;
      if (!targetEl) {
        setHoverType('none');
        setHoverLabel('');
        return;
      }

      const isButton = targetEl.tagName === 'BUTTON' || targetEl.closest('button');
      const isCard = targetEl.classList.contains('project-card') || targetEl.closest('.project-card') || targetEl.closest('.editorial-card');
      const isLink = targetEl.tagName === 'A' || targetEl.closest('a');

      if (isCard) {
        setHoverType('card');
        setHoverLabel('CASE STUDY');
      } else if (isButton) {
        setHoverType('button');
        setHoverLabel('VIEW');
      } else if (isLink) {
        setHoverType('link');
        setHoverLabel('EXPLORE');
      } else {
        setHoverType('none');
        setHoverLabel('');
      }
    };

    const handleMouseDown = () => setIsMouseDown(true);
    const handleMouseUp = () => setIsMouseDown(false);
    const handleMouseLeave = () => setIsVisible(false);

    // Spring inertia physics loop for outer orbital ring & spotlight background
    const loop = () => {
      ringX += (mouseX - ringX) * 0.15;
      ringY += (mouseY - ringY) * 0.15;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
      }

      if (spotlightRef.current) {
        spotlightRef.current.style.background = `radial-gradient(500px circle at ${ringX}px ${ringY}px, rgba(124, 92, 255, 0.09), transparent 80%)`;
      }

      animationFrameId = requestAnimationFrame(loop);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseleave', handleMouseLeave);
    loop();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  const isHovered = hoverType !== 'none';

  return (
    <>
      {/* Background Radial Purple Glow Spotlight */}
      <div
        ref={spotlightRef}
        className="pointer-events-none fixed inset-0 z-40 transition-opacity duration-500"
      />

      {/* Crosshair Center Reticle */}
      <div
        ref={dotRef}
        className={`pointer-events-none fixed top-0 left-0 z-50 transition-transform duration-75 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center ${
          isMouseDown ? 'scale-75' : 'scale-100'
        }`}
      >
        <div className="w-2.5 h-2.5 rounded-full bg-[#7C5CFF] shadow-[0_0_12px_#7C5CFF]" />
        
        {/* Precision Crosshair Corner Ticks */}
        {!isHovered && (
          <div className="absolute inset-0 w-6 h-6 -translate-x-1.5 -translate-y-1.5 pointer-events-none opacity-40">
            <span className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-1.5 bg-[#7C5CFF]" />
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1px] h-1.5 bg-[#7C5CFF]" />
            <span className="absolute left-0 top-1/2 -translate-y-1/2 h-[1px] w-1.5 bg-[#7C5CFF]" />
            <span className="absolute right-0 top-1/2 -translate-y-1/2 h-[1px] w-1.5 bg-[#7C5CFF]" />
          </div>
        )}
      </div>

      {/* Fluid Kinetic Orbital Ring & Interactive Badge */}
      <div
        ref={ringRef}
        className={`pointer-events-none fixed top-0 left-0 z-50 rounded-full border -translate-x-1/2 -translate-y-1/2 flex items-center justify-center transition-all duration-300 ease-out ${
          isMouseDown
            ? 'scale-90 opacity-90'
            : isHovered
            ? 'w-20 h-20 bg-[#7C5CFF]/20 border-[#7C5CFF] shadow-[0_0_35px_rgba(124,92,255,0.45)] backdrop-blur-[2px] scale-100'
            : 'w-10 h-10 bg-transparent border-[#7C5CFF]/40 shadow-[0_0_15px_rgba(124,92,255,0.15)] scale-100'
        }`}
      >
        {/* Interactive Badge Text */}
        {isHovered && hoverLabel && (
          <span className="text-[9px] font-mono font-extrabold tracking-widest text-white uppercase animate-pulse">
            {hoverLabel}
          </span>
        )}
      </div>
    </>
  );
};
