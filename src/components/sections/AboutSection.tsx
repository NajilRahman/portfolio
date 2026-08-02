import React from 'react';
import { profileData } from '../../data/portfolioData';
import { IconGlobe, IconMapPin, IconMail } from '../ui/MinimalIcons';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 sm:py-32 border-t border-[#1E1E24] relative z-10">
      <div className="max-w-[1240px] mx-auto px-6 sm:px-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="text-xs font-mono tracking-widest uppercase text-[#7C5CFF] mb-3">
              01 &bull; About & Engineering Philosophy
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-5xl text-[#F4F4F6] tracking-tight">
              High-Throughput Engineering & Enterprise Security
            </h2>
          </div>
          <div className="text-sm font-mono text-[#90909E] flex items-center gap-2">
            <IconMapPin size={16} className="text-[#7C5CFF]" />
            {profileData.location}
          </div>
        </div>

        {/* Story Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Main Narrative Column */}
          <div className="lg:col-span-7 space-y-6 text-base sm:text-lg text-[#90909E] font-normal leading-relaxed">
            {profileData.bio.map((paragraph, index) => (
              <p key={index} className={index === 0 ? "text-[#F4F4F6] font-medium text-lg sm:text-xl" : ""}>
                {paragraph}
              </p>
            ))}

            {/* Core Directives List */}
            <div className="pt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm font-mono">
              <div className="p-4 rounded-xl bg-[#121214] border border-[#1E1E24]">
                <div className="text-[#7C5CFF] font-bold mb-1">01. Cloud VPS Hosting</div>
                <div className="text-[#90909E] text-xs leading-normal">
                  Linux VPS server management, Nginx reverse proxies, PM2 clustering & automated SSL certificates.
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#121214] border border-[#1E1E24]">
                <div className="text-[#7C5CFF] font-bold mb-1">02. Statutory Engines</div>
                <div className="text-[#90909E] text-xs leading-normal">
                  High-throughput salary calculation pipelines processing compliant payroll for 150,000+ active employees.
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#121214] border border-[#1E1E24]">
                <div className="text-[#7C5CFF] font-bold mb-1">03. Zero-Trust Auth</div>
                <div className="text-[#90909E] text-xs leading-normal">
                  WebAuthn passkey identity providers, encrypted HTTP-only JWT exchange & RBAC guards.
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#121214] border border-[#1E1E24]">
                <div className="text-[#7C5CFF] font-bold mb-1">04. Real-time Systems</div>
                <div className="text-[#90909E] text-xs leading-normal">
                  Socket.IO WebSocket engines providing sub-100ms multi-client state syncing for live event platforms.
                </div>
              </div>
            </div>
          </div>

          {/* Education & Info Sidebar */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Current Position Card */}
            <div className="p-8 rounded-2xl bg-[#121214] border border-[#1E1E24]">
              <div className="text-xs font-mono text-[#7C5CFF] uppercase tracking-wider mb-2">
                Current Position
              </div>
              <h3 className="font-display font-bold text-xl text-[#F4F4F6] mb-1">
                Senior Web Developer
              </h3>
              <div className="text-sm font-semibold text-[#F4F4F6] mb-4">
                FlumenX
              </div>
              <p className="text-xs text-[#90909E] leading-relaxed mb-6">
                Leading core web engineering, full-stack application development, and production Linux VPS cloud hosting infrastructure.
              </p>
              <div className="pt-4 border-t border-[#1E1E24] flex items-center justify-between text-xs font-mono text-[#90909E]">
                <span>July 2026 &ndash; Present</span>
                <span className="text-[#7C5CFF]">Active</span>
              </div>
            </div>

            {/* Education Card */}
            <div className="p-8 rounded-2xl bg-[#121214] border border-[#1E1E24]">
              <div className="text-xs font-mono text-[#7C5CFF] uppercase tracking-wider mb-2">
                Academic Background
              </div>
              <h3 className="font-display font-bold text-xl text-[#F4F4F6] mb-1">
                {profileData.education.degree}
              </h3>
              <div className="text-sm text-[#F4F4F6] mb-2">
                {profileData.education.field}
              </div>
              <div className="text-xs text-[#90909E]">
                {profileData.education.institution} &bull; {profileData.education.period}
              </div>
            </div>

            {/* Direct Contact Card */}
            <div className="p-6 rounded-2xl bg-[#121214] border border-[#1E1E24] flex flex-col gap-3">
              <a
                href={`mailto:${profileData.email}`}
                className="flex items-center gap-3 text-sm text-[#90909E] hover:text-[#7C5CFF] transition-colors"
              >
                <IconMail size={18} className="text-[#7C5CFF]" />
                {profileData.email}
              </a>
              <a
                href={profileData.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 text-sm text-[#90909E] hover:text-[#7C5CFF] transition-colors"
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
