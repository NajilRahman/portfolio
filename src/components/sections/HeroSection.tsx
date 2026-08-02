import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { profileData } from '../../data/portfolioData';
import { MagneticButton } from '../ui/MagneticButton';
import { IconArrowUpRight, IconChevronDown, IconMapPin, IconShield } from '../ui/MinimalIcons';
import profilePhoto from '../../assets/myimage.jpg.jpeg';

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
  const portraitFrameRef = useRef<HTMLDivElement>(null);

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
          portraitFrameRef.current,
          { scale: 0.95, opacity: 0 },
          { scale: 1, opacity: 1, duration: 1.1, ease: 'power3.out' },
          '-=1.1'
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
      className="min-h-screen pt-32 sm:pt-40 pb-16 flex flex-col justify-between relative z-10 bg-purple-ambient"
    >
      <div className="max-w-[1280px] mx-auto w-full px-6 sm:px-10">
        
        {/* 12-Column Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          
          {/* Left Column (7 cols): Editorial Typography */}
          <div className="lg:col-span-7">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#121214] border border-[#222227] text-xs font-mono text-[#E4E4E7] mb-8 shadow-md">
              <span className="w-2 h-2 rounded-full bg-[#7C5CFF] animate-pulse" />
              <span className="font-semibold text-white">{profileData.name}</span>
              <span className="text-[#E4E4E7]">&bull; {profileData.title} @ {profileData.company}</span>
            </div>

            {/* Massive Pure White Editorial Headline */}
            <h1
              ref={headlineRef}
              className="font-display font-extrabold text-4xl sm:text-6xl lg:text-7xl xl:text-8xl tracking-tight text-white leading-[1.06] mb-8 opacity-0"
            >
              Architecting <span className="text-[#7C5CFF]">Enterprise</span> Web Systems & High-Throughput Engines.
            </h1>

            {/* High Clarity Bio Subtitle */}
            <p
              ref={subtitleRef}
              className="text-lg sm:text-2xl text-[#E4E4E7] font-normal leading-relaxed max-w-2xl mb-10 opacity-0"
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
                className="bg-[#121214] hover:bg-[#1C1C22] text-white border border-[#222227] font-semibold"
              >
                Get In Touch
              </MagneticButton>
            </div>

          </div>

          {/* Right Column (5 cols): Profile Portrait Hero Centerpiece */}
          <div className="lg:col-span-5 flex justify-center">
            <div
              ref={portraitFrameRef}
              className="w-full max-w-[420px] relative rounded-3xl bg-[#121214] border border-[#222227] p-3.5 shadow-2xl transition-all duration-500 hover:border-[#7C5CFF]/60 hover:scale-[1.01] opacity-0"
            >
              {/* Image Frame Container */}
              <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden bg-[#161619]">
                <img
                  src={profilePhoto}
                  alt={profileData.name}
                  className="w-full h-full object-cover object-top filter brightness-[1.03] contrast-[1.04] transition-transform duration-700"
                />

                {/* Subtle Bottom Vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0C] via-transparent to-transparent opacity-80" />

                {/* Overlay Badge Details */}
                <div className="absolute bottom-4 left-4 right-4 z-10 flex justify-between items-end text-white">
                  <div>
                    <div className="text-xs font-mono tracking-wider uppercase text-[#7C5CFF] font-bold">
                      SENIOR ENGINEER
                    </div>
                    <div className="font-display font-bold text-lg leading-snug text-white">
                      {profileData.name}
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0B0B0C]/80 backdrop-blur-md text-[11px] font-mono text-white font-semibold border border-[#222227]">
                    <IconMapPin size={13} className="text-[#7C5CFF]" />
                    Kerala, IN
                  </div>
                </div>
              </div>

              {/* Bottom Frame Caption */}
              <div className="pt-3 px-2 flex justify-between items-center text-[11px] font-mono text-[#E4E4E7]">
                <span className="flex items-center gap-1.5">
                  <IconShield size={14} className="text-[#7C5CFF]" />
                  FLUMENX CORE DEV
                </span>
                <span className="text-[#7C5CFF] font-bold">AVAILABILITY: OPEN</span>
              </div>
            </div>
          </div>

        </div>

        {/* High-Contrast Impact Metrics Bar */}
        <div
          ref={metricsRef}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-10 border-t border-[#222227] opacity-0"
        >
          {profileData.metrics.map((metric, idx) => (
            <div key={idx} className="group p-5 rounded-2xl bg-[#121214] border border-[#222227] shadow-sm hover:border-[#7C5CFF]/40 transition-all">
              <div className="font-display font-extrabold text-2xl sm:text-3xl lg:text-4xl text-white mb-1 group-hover:text-[#7C5CFF] transition-colors">
                {metric.value}
              </div>
              <div className="text-xs sm:text-sm font-bold text-white mb-1">
                {metric.label}
              </div>
              <div className="text-xs text-[#E4E4E7] font-normal leading-normal">
                {metric.detail}
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Scroll Down Indicator */}
      <div className="max-w-[1280px] mx-auto w-full px-6 sm:px-10 mt-12 flex justify-between items-center text-xs font-mono text-[#E4E4E7]">
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
