import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { profileData } from '../../data/portfolioData';
import { MagneticButton } from '../ui/MagneticButton';
import { IconArrowUpRight, IconChevronDown } from '../ui/MinimalIcons';

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

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out', duration: 1 } });

      tl.fromTo(
        headlineRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.1, delay: 0.1 }
      )
        .fromTo(
          subtitleRef.current,
          { y: 25, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.9 },
          '-=0.7'
        )
        .fromTo(
          ctaRef.current,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8 },
          '-=0.5'
        )
        .fromTo(
          metricsRef.current,
          { opacity: 0, y: 25 },
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
      className="min-h-screen pt-32 sm:pt-44 pb-16 flex flex-col justify-between relative z-10"
    >
      <div className="max-w-[1280px] mx-auto w-full px-6 sm:px-10">
        
        {/* Main Content Area: Editorial Headline & High-Contrast Typography */}
        <div className="max-w-4xl mb-16">
          
          {/* Role Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#121214] border border-[#222227] text-xs font-mono text-[#E4E4E7] mb-8">
            <span className="w-2 h-2 rounded-full bg-[#7C5CFF] animate-pulse" />
            <span>Senior Web Developer &bull; FlumenX</span>
          </div>

          {/* Massive Editorial Heading */}
          <h1
            ref={headlineRef}
            className="font-display font-extrabold text-4xl sm:text-6xl lg:text-7xl xl:text-8xl tracking-tight text-white leading-[1.06] mb-8 opacity-0"
          >
            Architecting <span className="text-[#7C5CFF]">Enterprise</span> Web Systems & High-Throughput Engines.
          </h1>

          {/* High-Clarity Bio Subtitle */}
          <p
            ref={subtitleRef}
            className="text-lg sm:text-2xl text-[#E4E4E7] font-normal leading-relaxed max-w-3xl mb-10 opacity-0"
          >
            {profileData.bio[0]}
          </p>

          {/* Magnetic CTAs */}
          <div ref={ctaRef} className="flex flex-wrap items-center gap-4 sm:gap-6 opacity-0">
            <MagneticButton
              onClick={() => onNavigate('projects')}
              className="bg-[#7C5CFF] hover:bg-[#9275FF] text-white font-semibold shadow-lg shadow-[#7C5CFF]/25"
            >
              Explore Selected Works
              <IconArrowUpRight className="ml-2" size={18} />
            </MagneticButton>

            <MagneticButton
              onClick={() => onNavigate('contact')}
              className="bg-[#121214] hover:bg-[#1C1C22] text-white border border-[#222227]"
            >
              Get In Touch
            </MagneticButton>
          </div>

        </div>

        {/* High-Contrast Impact Metrics Bar */}
        <div
          ref={metricsRef}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-10 border-t border-[#1E1E24] opacity-0"
        >
          {profileData.metrics.map((metric, idx) => (
            <div key={idx} className="group">
              <div className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl text-white mb-1 group-hover:text-[#7C5CFF] transition-colors">
                {metric.value}
              </div>
              <div className="text-xs sm:text-sm font-semibold text-white mb-1">
                {metric.label}
              </div>
              <div className="text-xs text-[#D4D4D8] font-normal leading-normal">
                {metric.detail}
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Scroll Down Indicator */}
      <div className="max-w-[1280px] mx-auto w-full px-6 sm:px-10 mt-12 flex justify-between items-center text-xs font-mono text-[#A1A1AA]">
        <span>SCROLL TO DISCOVER</span>
        <button
          onClick={() => onNavigate('about')}
          className="hover:text-[#7C5CFF] transition-colors cursor-pointer"
          aria-label="Scroll down to about section"
        >
          <IconChevronDown size={20} />
        </button>
      </div>

    </section>
  );
};
