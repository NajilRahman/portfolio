import React from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, ExternalLink, ShieldCheck } from 'lucide-react';

export const Sidebar: React.FC = () => {
  return (
    <aside className="glass-panel w-full lg:w-[320px] rounded-3xl p-6 lg:sticky lg:top-8 flex flex-col gap-6 select-none shrink-0 self-start">
      {/* Dynamic Profile Avatar Area */}
      <div className="relative group w-full aspect-square rounded-2xl overflow-hidden flex items-center justify-center bg-gradient-to-br from-deep-violet to-sapphire p-[2px]">
        {/* Living Inner Atmosphere */}
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px] transition-all group-hover:bg-black/20" />
        
        {/* CSS Glass Avatar Graphic */}
        <div className="relative z-10 w-full h-full rounded-2xl bg-[#0D0D0D]/80 backdrop-blur-md flex flex-col items-center justify-center border border-white/5 transition-all group-hover:bg-[#0D0D0D]/60">
          <div className="relative w-24 h-24 rounded-full bg-gradient-to-br from-[#4B0082] via-[#0F52BA] to-[#00FA9A] flex items-center justify-center p-[2px] shadow-lg shadow-black/50">
            <div className="w-full h-full rounded-full bg-[#0D0D0D] flex items-center justify-center font-serif text-3xl font-bold text-white tracking-widest">
              NR
            </div>
            <div className="absolute -bottom-1 -right-1 w-7 h-7 rounded-full bg-[#0D0D0D] border border-white/10 flex items-center justify-center shadow-lg">
              <ShieldCheck className="w-4 h-4 text-emerald-glow" />
            </div>
          </div>
          <span className="mt-4 font-mono text-[10px] uppercase tracking-[0.25em] text-emerald-glow font-bold animate-pulse-slow">
            SECURE ENGINE
          </span>
        </div>

        {/* Ambient Hover Glow */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-tr from-deep-violet/40 to-emerald-glow/40 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-xl" />
      </div>

      {/* Info Stack */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <span className="font-mono text-[10px] text-graphite uppercase tracking-wider flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-glow animate-ping" />
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-glow absolute" />
            Available for Hire
          </span>
          <span className="font-mono text-[9px] px-2 py-0.5 rounded bg-white/5 border border-white/10 text-white/70">
            v1.2.0
          </span>
        </div>
        
        <h1 className="font-serif text-3xl font-semibold tracking-tight text-white mt-2">
          Najil Rahman P M
        </h1>
        <p className="font-sans text-sm text-white/90 font-medium">
          Software Engineer
        </p>
        <p className="font-mono text-[11px] text-graphite uppercase tracking-wide mt-1">
          Luvid Technologies
        </p>
      </div>

      {/* Value Proposition */}
      <p className="font-sans text-xs leading-relaxed text-graphite border-t border-white/5 pt-4">
        Crafting high-throughput backend services, secure authentication gateways, and fluid full-stack systems with architectural precision.
      </p>

      {/* Contact Grid */}
      <div className="flex flex-col gap-3 border-t border-white/5 pt-4 font-mono text-xs">
        <a 
          href="mailto:najilrahmanpm@gmail.com" 
          className="flex items-center gap-3 text-graphite hover:text-white transition-colors group py-1"
        >
          <Mail className="w-4 h-4 text-white/60 group-hover:text-emerald-glow transition-colors shrink-0" />
          <span className="truncate">najilrahmanpm@gmail.com</span>
        </a>
        <a 
          href="tel:+919048649412" 
          className="flex items-center gap-3 text-graphite hover:text-white transition-colors group py-1"
        >
          <Phone className="w-4 h-4 text-white/60 group-hover:text-emerald-glow transition-colors shrink-0" />
          <span>+91 9048649412</span>
        </a>
        <div className="flex items-center gap-3 text-graphite py-1">
          <MapPin className="w-4 h-4 text-white/60 shrink-0" />
          <span>Calicut, Kerala, India</span>
        </div>
      </div>

      {/* Social and CTA */}
      <div className="flex flex-col gap-2.5 mt-auto pt-4 border-t border-white/5">
        <div className="flex gap-2">
          <a 
            href="https://github.com/NajilRahman" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex-1 glass-pill hover:bg-white/10 transition-colors flex items-center justify-center py-2.5 rounded-xl text-white/80 hover:text-white gap-2 font-mono text-[11px]"
          >
            <Github className="w-4 h-4" />
            GitHub
          </a>
          <a 
            href="https://linkedin.com/in/najilrahmanpm" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex-1 glass-pill hover:bg-white/10 transition-colors flex items-center justify-center py-2.5 rounded-xl text-white/80 hover:text-white gap-2 font-mono text-[11px]"
          >
            <Linkedin className="w-4 h-4" />
            LinkedIn
          </a>
        </div>
        
        <a 
          href="https://najilrahmanpm.netlify.app"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-mercury py-3 rounded-xl flex items-center justify-center gap-2 font-mono text-[11px] uppercase tracking-wider font-semibold text-white/90"
        >
          Original Site
          <ExternalLink className="w-3.5 h-3.5 opacity-60" />
        </a>
      </div>
    </aside>
  );
};
