import React from 'react';
import { profileData } from '../../data/portfolioData';
import { TextScrubReveal } from '../motion/TextScrubReveal';
import { IconGlobe, IconMapPin, IconMail } from '../ui/MinimalIcons';
import profilePhoto from '../../assets/myimage.jpg.jpeg';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 sm:py-32 border-t border-[#E4E4E7] relative z-10">
      <div className="max-w-[1280px] mx-auto px-6 sm:px-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="text-xs font-mono tracking-widest uppercase text-[#7C5CFF] mb-3 font-bold">
              01 &bull; Engineering Philosophy & Architecture
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-5xl text-[#09090B] tracking-tight">
              High-Throughput Engineering & Enterprise Security
            </h2>
          </div>
          <div className="text-sm font-mono text-[#3F3F46] flex items-center gap-2">
            <IconMapPin size={16} className="text-[#7C5CFF]" />
            {profileData.location}
          </div>
        </div>

        {/* Story Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Main Narrative Column with Text Scrub Reveal */}
          <div className="lg:col-span-7 space-y-8 text-base sm:text-xl text-[#3F3F46] font-normal leading-relaxed">
            
            <TextScrubReveal
              text={profileData.bio[0]}
              className="text-lg sm:text-2xl text-[#09090B] font-semibold leading-relaxed"
            />

            <TextScrubReveal
              text={profileData.bio[1]}
              className="text-base sm:text-lg text-[#3F3F46] leading-relaxed"
            />

            <TextScrubReveal
              text={profileData.bio[2]}
              className="text-base sm:text-lg text-[#3F3F46] leading-relaxed"
            />

            {/* Core Directives List */}
            <div className="pt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm font-mono">
              <div className="p-5 rounded-2xl bg-white border border-[#E4E4E7] shadow-sm">
                <div className="text-[#7C5CFF] font-bold mb-1.5">01. Cloud VPS Hosting</div>
                <div className="text-[#52525B] text-xs leading-normal">
                  Linux VPS server management, Nginx reverse proxies, PM2 clustering & automated SSL certificates.
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-[#E4E4E7] shadow-sm">
                <div className="text-[#7C5CFF] font-bold mb-1.5">02. Statutory Engines</div>
                <div className="text-[#52525B] text-xs leading-normal">
                  High-throughput salary calculation pipelines processing compliant payroll for 150,000+ active employees.
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-[#E4E4E7] shadow-sm">
                <div className="text-[#7C5CFF] font-bold mb-1.5">03. Zero-Trust Auth</div>
                <div className="text-[#52525B] text-xs leading-normal">
                  WebAuthn passkey identity providers, encrypted HTTP-only JWT exchange & RBAC guards.
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-[#E4E4E7] shadow-sm">
                <div className="text-[#7C5CFF] font-bold mb-1.5">04. Real-time Systems</div>
                <div className="text-[#52525B] text-xs leading-normal">
                  Socket.IO WebSocket engines providing sub-100ms multi-client state syncing for live event platforms.
                </div>
              </div>
            </div>

          </div>

          {/* Sidebar Column: Portrait & Education Cards */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Secondary Portrait Badge */}
            <div className="p-4 rounded-3xl bg-white border border-[#E4E4E7] shadow-lg overflow-hidden">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden mb-4 bg-[#F4F4F5]">
                <img
                  src={profilePhoto}
                  alt={profileData.name}
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="px-2 pb-2">
                <div className="font-display font-bold text-lg text-[#09090B]">
                  {profileData.name}
                </div>
                <div className="text-xs font-mono text-[#71717A]">
                  Senior Web Developer @ FlumenX
                </div>
              </div>
            </div>

            {/* Current Position Card */}
            <div className="p-8 rounded-3xl bg-white border border-[#E4E4E7] shadow-sm">
              <div className="text-xs font-mono text-[#7C5CFF] uppercase tracking-wider mb-2 font-bold">
                Current Position
              </div>
              <h3 className="font-display font-bold text-xl text-[#09090B] mb-1">
                Senior Web Developer
              </h3>
              <div className="text-sm font-semibold text-[#09090B] mb-4">
                FlumenX
              </div>
              <p className="text-xs text-[#52525B] leading-relaxed mb-6">
                Leading senior web engineering, full-stack application development, and production Linux VPS cloud hosting infrastructure.
              </p>
              <div className="pt-4 border-t border-[#E4E4E7] flex items-center justify-between text-xs font-mono text-[#52525B]">
                <span>July 2026 &ndash; Present</span>
                <span className="text-[#7C5CFF] font-bold">Active</span>
              </div>
            </div>

            {/* Education Card */}
            <div className="p-8 rounded-3xl bg-white border border-[#E4E4E7] shadow-sm">
              <div className="text-xs font-mono text-[#7C5CFF] uppercase tracking-wider mb-2 font-bold">
                Academic Background
              </div>
              <h3 className="font-display font-bold text-xl text-[#09090B] mb-1">
                {profileData.education.degree}
              </h3>
              <div className="text-sm text-[#09090B] mb-2 font-medium">
                {profileData.education.field}
              </div>
              <div className="text-xs text-[#52525B]">
                {profileData.education.institution} &bull; {profileData.education.period}
              </div>
            </div>

            {/* Direct Contact Card */}
            <div className="p-6 rounded-3xl bg-white border border-[#E4E4E7] shadow-sm flex flex-col gap-3">
              <a
                href={`mailto:${profileData.email}`}
                className="flex items-center gap-3 text-sm text-[#3F3F46] hover:text-[#7C5CFF] transition-colors"
              >
                <IconMail size={18} className="text-[#7C5CFF]" />
                {profileData.email}
              </a>
              <a
                href={profileData.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 text-sm text-[#3F3F46] hover:text-[#7C5CFF] transition-colors"
              >
                <IconGlobe size={18} className="text-[#7C5CFF]" />
                github.com/NajilRahman
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
