import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { profileData } from '../../data/portfolioData';
import { MagneticButton } from '../ui/MagneticButton';
import { IconArrowUpRight, IconChevronDown } from '../ui/MinimalIcons';
import { Hero3DGlobe } from '../canvas/Hero3DGlobe';

gsap.registerPlugin(ScrollTrigger);

interface HeroSectionProps {
  onNavigate: (sectionId: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onNavigate }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const metricsRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const globeContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out', duration: 1 } });

      tl.fromTo(
        headlineRef.current,
        { y: 60, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, delay: 0.2 }
      )
        .fromTo(
          subtitleRef.current,
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 1 },
          '-=0.8'
        )
        .fromTo(
          ctaRef.current,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8 },
          '-=0.6'
        )
        .fromTo(
          globeContainerRef.current,
          { scale: 0.8, opacity: 0 },
          { scale: 1, opacity: 1, duration: 1.2, ease: 'back.out(1.4)' },
          '-=1.2'
        )
        .fromTo(
          metricsRef.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.8 },
          '-=0.4'
        );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="hero"
      ref={containerRef}
      className="min-h-screen pt-28 sm:pt-40 pb-16 flex flex-col justify-between relative z-10"
    >
      <div className="max-w-[1240px] mx-auto w-full px-6 sm:px-10">
        
        {/* Main Grid: Headline & 3D Interactive Hero Globe */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          
          {/* Left Column Text Content */}
          <div className="lg:col-span-7">
            {/* Role Pill */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#121214] border border-[#222227] text-xs font-mono text-[#90909E] mb-8">
              <span className="w-2 h-2 rounded-full bg-[#7C5CFF] animate-pulse" />
              <span>Senior Web Developer &bull; FlumenX</span>
            </div>

            {/* Massive Hero Heading */}
            <h1
              ref={headlineRef}
              className="font-display font-extrabold text-4xl sm:text-6xl lg:text-7xl xl:text-8xl tracking-tight text-[#F4F4F6] leading-[1.06] mb-8 opacity-0"
            >
              Architecting <span className="text-[#7C5CFF]">Enterprise</span> Web Systems & High-Throughput Engines.
            </h1>

            {/* Bio Subtitle */}
            <p
              ref={subtitleRef}
              className="text-base sm:text-xl text-[#90909E] font-normal leading-relaxed max-w-2xl mb-10 opacity-0"
            >
              {profileData.bio[0]}
            </p>

            {/* Magnetic CTAs */}
            <div ref={ctaRef} className="flex flex-wrap items-center gap-4 sm:gap-6 opacity-0">
              <MagneticButton
                onClick={() => onNavigate('projects')}
                className="bg-[#7C5CFF] hover:bg-[#9275FF] text-white font-semibold shadow-lg shadow-[#7C5CFF]/20"
              >
                Explore Selected Works
                <IconArrowUpRight className="ml-2" size={18} />
              </MagneticButton>

              <MagneticButton
                onClick={() => onNavigate('contact')}
                className="bg-[#121214] hover:bg-[#1C1C22] text-[#F4F4F6] border border-[#222227]"
              >
                Get In Touch
              </MagneticButton>
            </div>
          </div>

          {/* Right Column: 3D Globe Component */}
          <div ref={globeContainerRef} className="lg:col-span-5 flex justify-center opacity-0">
            <div className="w-full max-w-[420px] aspect-square relative rounded-3xl bg-[#121214]/40 border border-[#1E1E24] p-4 flex flex-col justify-between overflow-hidden shadow-2xl">
              <div className="flex justify-between items-center text-[11px] font-mono text-[#90909E] z-10 px-2 pt-2">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#7C5CFF]" />
                  INTERACTIVE 3D GLOBE
                </span>
                <span>DRAG TO ROTATE</span>
              </div>

              {/* 3D WebGL Earth */}
              <Hero3DGlobe />

              <div className="text-center text-[10px] font-mono text-[#5B5B66] pb-2">
                FLUMENX ENGINE &bull; THREE.JS WEBGL MESH
              </div>
            </div>
          </div>

        </div>

        {/* Impact Metrics Bar */}
        <div
          ref={metricsRef}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-10 border-t border-[#1E1E24] opacity-0"
        >
          {profileData.metrics.map((metric, idx) => (
            <div key={idx} className="group">
              <div className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl text-[#F4F4F6] mb-1 group-hover:text-[#7C5CFF] transition-colors">
                {metric.value}
              </div>
              <div className="text-xs sm:text-sm font-medium text-[#F4F4F6] mb-1">
                {metric.label}
              </div>
              <div className="text-xs text-[#90909E] font-normal leading-normal">
                {metric.detail}
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Scroll Down Indicator */}
      <div className="max-w-[1240px] mx-auto w-full px-6 sm:px-10 mt-12 flex justify-between items-center text-xs font-mono text-[#5B5B66]">
        <span>SCROLL TO DISCOVER</span>
        <button
          onClick={() => onNavigate('about')}
          className="hover:text-[#7C5CFF] transition-colors animate-bounce cursor-pointer"
          aria-label="Scroll down to about section"
        >
          <IconChevronDown size={20} />
        </button>
      </div>

    </section>
  );
};
