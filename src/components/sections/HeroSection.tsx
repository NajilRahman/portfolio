import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { profileData } from '../../data/portfolioData';
import { MagneticButton } from '../ui/MagneticButton';
import { IconArrowUpRight, IconChevronDown, IconMapPin, IconShield } from '../ui/MinimalIcons';
import { RulerCarousel, type CarouselItem } from '../ui/ruler-carousel';

import heroPortrait from '../../assets/hero-portrait.jpg';
import myImage from '../../assets/myimage.jpg.jpeg';
import aboutDesk from '../../assets/about-desk.jpg';
import architectureWorkspace from '../../assets/architecture-workspace.jpg';
import contactHeadshot from '../../assets/contact-headshot.jpg';

gsap.registerPlugin(ScrollTrigger);

interface HeroSectionProps {
  onNavigate: (sectionId: string) => void;
}

const galleryImages = [
  { src: heroPortrait, label: "Executive Portrait", tag: "FlumenX IT Team Lead" },
  { src: myImage, label: "Engineering Lead", tag: "Full-Stack Specialist" },
  { src: aboutDesk, label: "Developer Workspace", tag: "System Architecture" },
  { src: architectureWorkspace, label: "Platform Operations", tag: "Linux VPS & Nginx" },
  { src: contactHeadshot, label: "Professional Profile", tag: "Available for Hire" },
];

export const HeroSection: React.FC<HeroSectionProps> = ({ onNavigate }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const metricsRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const portraitFrameRef = useRef<HTMLDivElement>(null);
  const portraitImageRef = useRef<HTMLImageElement>(null);

  const [activeGalleryIndex, setActiveGalleryIndex] = useState(0);

  const heroCarouselItems: CarouselItem[] = [
    {
      id: 1,
      title: "150K+ EMPLOYEES PROCESSED",
      subtitle: "High-Volume Statutory Payroll Engine",
      badge: "Luvid Payroll Milestone",
      detail: "Architected high-throughput statutory compliance engine processing monthly payroll calculations for 150,000+ active employees with Go execution microservices (`salary-processor-go`) and zero computation failures.",
      tech: ["Node.js Cluster", "Go Microservice", "Redis Cache", "MongoDB", "AG-Grid"],
      stats: [{ label: "Scale", value: "150K+" }, { label: "Company", value: "Luvid Tech" }],
      actionLabel: "View Experience",
      onAction: () => onNavigate('experience'),
    },
    {
      id: 2,
      title: "+65% THROUGHPUT BOOST",
      subtitle: "CPU-Aware Node.js Worker Clustering",
      badge: "Luvid Performance Tuning",
      detail: "Implemented CPU-aware Node.js worker process distribution across multi-core CPU instances and Redis caching layers for core HRMS APIs, boosting request throughput by 65%.",
      tech: ["Node.js Worker Threads", "Redis", "TypeScript", "Express 5", "System Tuning"],
      stats: [{ label: "Boost", value: "+65%" }, { label: "Latency", value: "Sub-50ms" }],
      actionLabel: "View Performance Details",
      onAction: () => onNavigate('experience'),
    },
    {
      id: 3,
      title: "ECOSYSTEM SUITE PLATFORM",
      subtitle: "Orchestrated Auth Gateway, CRM & Flow E-Commerce",
      badge: "Luvid Microservices Architecture",
      detail: "Engineered a concurrently-orchestrated microservices stack (`ecosystem-suite`) uniting centralized SSO authentication (`auth-api`), omnichannel CRM (`crm-api`), and Flow E-Commerce with PDFKit invoice generation (`flow-api`).",
      tech: ["Express 5", "TypeScript", "React", "Next.js", "PDFKit", "Zod"],
      stats: [{ label: "Services", value: "Auth+CRM+Flow" }, { label: "Company", value: "Luvid Tech" }],
      actionLabel: "Explore Ecosystem",
      onAction: () => onNavigate('projects'),
    },
    {
      id: 4,
      title: "ZERO-TRUST WEBAUTHN SSO",
      subtitle: "Biometric Passkeys & SSO Handoff Gateway",
      badge: "Luvid Cyber Security",
      detail: "Architected biometric FIDO2 WebAuthn passkey identity provider (`SSO`) and SSO Handoff Gateway using JWT token exchange to eliminate credential sniffing and session hijacking across microservice domains.",
      tech: ["WebAuthn", "FIDO2", "JWT Exchange", "TypeScript", "SameSite Cookie"],
      stats: [{ label: "Standard", value: "FIDO2" }, { label: "Security", value: "Zero-Trust" }],
      actionLabel: "View Security Architecture",
      onAction: () => onNavigate('projects'),
    },
    {
      id: 5,
      title: "SAMAY SHIFT SCHEDULING PWA",
      subtitle: "Smart Shift Rosters & Automated Timecard Exports",
      badge: "Luvid Next.js 15 PWA",
      detail: "Built Next.js 15 PWA (`samay-ui`/`samay-api`) with Radix UI & AG-Grid Enterprise for rotational shift rosters, leave approvals, and instant client-side jsPDF & html2canvas timecard PDF generation.",
      tech: ["Next.js 15", "React 19", "Express 5", "Radix UI", "AG-Grid", "jsPDF"],
      stats: [{ label: "Framework", value: "Next.js 15" }, { label: "Feature", value: "PWA Offline" }],
      actionLabel: "View Samay PWA",
      onAction: () => onNavigate('projects'),
    },
    {
      id: 6,
      title: "40% CODE REDUCTION",
      subtitle: "Shared Core Controllers & Modular Architecture",
      badge: "Luvid Clean Architecture",
      detail: "Designed shared calculation engines and reusable controller modules across multi-tenant ERP & CRM platforms (`ERP`, `arnoc-api`), cutting duplicate business logic by 40%.",
      tech: ["TypeScript", "Modular Architecture", "Express", "Mongoose", "DRY Code"],
      stats: [{ label: "Code Saved", value: "40%" }, { label: "Quality", value: "Enterprise" }],
      actionLabel: "View Code Highlights",
      onAction: () => onNavigate('experience'),
    },
    {
      id: 7,
      title: "LABOURJET FLEET DISPATCH",
      subtitle: "Real-Time Field Worker Dispatch Platform",
      badge: "Luvid On-Demand Fleet Engine",
      detail: "Engineered real-time field worker dispatch system (`labourjet`) with sub-second Socket.IO WebSocket push alerts, Cloudinary image verification, and Docker containerized deployment behind Nginx.",
      tech: ["Socket.IO", "Express", "MongoDB", "Cloudinary", "Docker", "Nginx"],
      stats: [{ label: "Alerts", value: "Sub-Second" }, { label: "Deploy", value: "Docker/Nginx" }],
      actionLabel: "Explore Fleet Engine",
      onAction: () => onNavigate('projects'),
    },
    {
      id: 8,
      title: "LENDIT & STOCKSIGO ENGINES",
      subtitle: "Microfinance EMI Engine & Barcode Stock Control",
      badge: "Luvid FinTech & Warehouse Logistics",
      detail: "Programmed transactional compound interest & EMI disbursement pipelines in LendIt (`lendit-api`), alongside multi-warehouse atomic barcode SKU tracking and Redis BullMQ expiry alerts in StocksIgo (`stocksigo-api`).",
      tech: ["Node.js", "TypeScript", "Redis BullMQ", "Zod", "Atomic Ops"],
      stats: [{ label: "Lending", value: "Automated EMI" }, { label: "Inventory", value: "Real-Time SKU" }],
      actionLabel: "View FinTech & Logistics",
      onAction: () => onNavigate('projects'),
    }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out', duration: 1 } });

      // Typography entrance
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
        // Primary Portrait Hero Clip-Path Scale Animation
        .fromTo(
          portraitFrameRef.current,
          { scale: 0.96, opacity: 0, clipPath: 'inset(10% 10% 10% 10% round 24px)' },
          {
            scale: 1,
            opacity: 1,
            clipPath: 'inset(0% 0% 0% 0% round 24px)',
            duration: 1.2,
            ease: 'power3.out',
          },
          '-=1.2'
        )
        .fromTo(
          metricsRef.current,
          { opacity: 0, y: 25 },
          { opacity: 1, y: 0, duration: 0.8 },
          '-=0.4'
        );

      // Subtle Scroll Parallax on Portrait
      if (portraitImageRef.current) {
        gsap.to(portraitImageRef.current, {
          y: 35,
          ease: 'none',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: true,
          },
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const currentGalleryItem = galleryImages[activeGalleryIndex];

  return (
    <section
      id="hero"
      ref={containerRef}
      className="min-h-screen pt-28 sm:pt-36 pb-16 flex flex-col justify-between relative z-10 bg-purple-ambient overflow-hidden"
    >
      <div className="max-w-[1280px] mx-auto w-full px-6 sm:px-10">
        
        {/* 12-Column Keynote Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-12">
          
          {/* Left Column (7 cols): Editorial Typography */}
          <div className="lg:col-span-7">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#121214] border border-[#222227] text-xs font-mono text-[#E4E4E7] mb-8 shadow-md">
              <span className="w-2 h-2 rounded-full bg-[#7C5CFF] animate-pulse" />
              <span className="font-semibold text-white">{profileData.name}</span>
              <span className="text-[#E4E4E7]">&bull; {profileData.title} @ {profileData.company}</span>
            </div>

            {/* Sleek Hero Heading with Primary Keyword H1 */}
            <h1
              ref={headlineRef}
              className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl tracking-tight text-white leading-[1.1] mb-6 opacity-0"
            >
              <span className="block text-sm sm:text-base font-mono font-semibold text-[#7C5CFF] tracking-widest uppercase mb-3">
                SYSTEMS ARCHITECT &amp; SENIOR WEB DEVELOPER
              </span>
              Architecting <span className="text-[#7C5CFF]">Enterprise</span> Web Systems.
            </h1>

            {/* Bio Subtitle */}
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

          {/* Right Column (5 cols): Primary Executive Portrait & Image Gallery Centerpiece */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center gap-4">
            <div
              ref={portraitFrameRef}
              className="w-full max-w-[420px] relative rounded-3xl bg-[#121214] border border-[#222227] p-3.5 shadow-2xl transition-all duration-500 hover:border-[#7C5CFF]/60 hover:scale-[1.01] opacity-0"
            >
              {/* Image Frame Container */}
              <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden bg-[#161619]">
                <img
                  ref={portraitImageRef}
                  src={currentGalleryItem.src}
                  alt={`Najil Rahman - ${currentGalleryItem.label} - Senior Web Developer at FlumenX`}
                  className="w-full h-full object-cover object-top filter brightness-[1.03] contrast-[1.04] transition-all duration-500"
                  loading="eager"
                />

                {/* Bottom Vignette Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0C] via-transparent to-transparent opacity-85" />

                {/* Overlay Badge Details */}
                <div className="absolute bottom-4 left-4 right-4 z-10 flex justify-between items-end text-white">
                  <div>
                    <div className="text-xs font-mono tracking-wider uppercase text-[#7C5CFF] font-bold">
                      {currentGalleryItem.tag}
                    </div>
                    <div className="font-display font-bold text-xl leading-snug text-white">
                      {profileData.name}
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0B0B0C]/80 backdrop-blur-md text-[11px] font-mono text-white font-semibold border border-[#222227]">
                    <IconMapPin size={13} className="text-[#7C5CFF]" />
                    Kerala, IN
                  </div>
                </div>
              </div>

              {/* Bottom Frame Image Selector Thumbnails */}
              <div className="pt-3 px-1 flex justify-between items-center text-[11px] font-mono text-[#E4E4E7]">
                <span className="flex items-center gap-1.5 font-bold text-white">
                  <IconShield size={14} className="text-[#7C5CFF]" />
                  {currentGalleryItem.label}
                </span>
                <div className="flex items-center gap-1.5">
                  {galleryImages.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveGalleryIndex(idx)}
                      className={`w-6 h-6 rounded-md overflow-hidden border transition-all cursor-pointer ${
                        activeGalleryIndex === idx
                          ? 'border-[#7C5CFF] ring-2 ring-[#7C5CFF]/40 scale-110'
                          : 'border-[#333] opacity-60 hover:opacity-100'
                      }`}
                      title={img.label}
                    >
                      <img src={img.src} alt={img.label} className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* HERO RULER CAROUSEL SHOWCASE (FEATURING KEY ACHIEVEMENTS & MILESTONES) */}
        <div className="w-full my-6">
          <RulerCarousel originalItems={heroCarouselItems} autoPlayDuration={4000} />
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
      <div className="max-w-[1280px] mx-auto w-full px-6 sm:px-10 mt-10 flex justify-between items-center text-xs font-mono text-[#E4E4E7]">
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
