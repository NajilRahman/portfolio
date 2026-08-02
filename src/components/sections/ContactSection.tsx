import React, { useState } from 'react';
import { profileData } from '../../data/portfolioData';
import { MagneticButton } from '../ui/MagneticButton';
import { IconMail, IconPhone, IconMapPin, IconGithub, IconLinkedin, IconArrowUpRight } from '../ui/MinimalIcons';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'submitted'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email || !formData.message) return;

    setStatus('submitting');
    setTimeout(() => {
      setStatus('submitted');
      setFormData({ name: '', email: '', message: '' });
    }, 1000);
  };

  return (
    <section id="contact" className="py-24 sm:py-36 border-t border-[#1E1E24] relative z-10">
      <div className="max-w-[1240px] mx-auto px-6 sm:px-10">
        
        {/* Editorial Contact Header */}
        <div className="max-w-4xl mb-20">
          <div className="text-xs font-mono tracking-widest uppercase text-[#7C5CFF] mb-4">
            05 &bull; Initiate Collaboration
          </div>
          <h2 className="font-display font-extrabold text-4xl sm:text-6xl lg:text-7xl text-[#F4F4F6] tracking-tight leading-[1.1] mb-6">
            Let&apos;s build something <span className="text-[#7C5CFF]">extraordinary</span> together.
          </h2>
          <p className="text-base sm:text-lg text-[#90909E] font-normal leading-relaxed">
            Open for high-impact Software Engineering roles, senior web development positions, enterprise full-stack platforms, or cloud infrastructure consulting.
          </p>
        </div>

        {/* Form and Contact Info Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Minimal Form */}
          <form
            onSubmit={handleSubmit}
            className="lg:col-span-7 space-y-6 p-8 sm:p-10 rounded-2xl bg-[#121214] border border-[#1E1E24]"
          >
            <div>
              <label htmlFor="name" className="block text-xs font-mono uppercase text-[#90909E] mb-2">
                Your Name
              </label>
              <input
                id="name"
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="e.g. Alexander Wright"
                className="w-full px-5 py-4 rounded-xl bg-[#161619] border border-[#222227] text-[#F4F4F6] placeholder-[#5B5B66] text-sm focus:outline-none focus:border-[#7C5CFF] transition-colors"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-xs font-mono uppercase text-[#90909E] mb-2">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="e.g. alexander@company.com"
                className="w-full px-5 py-4 rounded-xl bg-[#161619] border border-[#222227] text-[#F4F4F6] placeholder-[#5B5B66] text-sm focus:outline-none focus:border-[#7C5CFF] transition-colors"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-xs font-mono uppercase text-[#90909E] mb-2">
                Project Details or Inquiry
              </label>
              <textarea
                id="message"
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Tell me about your project, platform engineering needs, or open role..."
                className="w-full px-5 py-4 rounded-xl bg-[#161619] border border-[#222227] text-[#F4F4F6] placeholder-[#5B5B66] text-sm focus:outline-none focus:border-[#7C5CFF] transition-colors resize-none"
                required
              />
            </div>

            <div className="pt-2 flex items-center justify-between">
              {status === 'submitted' ? (
                <div className="text-sm font-mono text-[#7C5CFF]">
                  ✓ Message transmitted successfully. I will get back to you shortly!
                </div>
              ) : (
                <MagneticButton
                  className="bg-[#7C5CFF] hover:bg-[#9275FF] text-white font-semibold shadow-lg shadow-[#7C5CFF]/20"
                >
                  {status === 'submitting' ? 'Transmitting...' : 'Send Message'}
                  <IconArrowUpRight className="ml-2" size={18} />
                </MagneticButton>
              )}
            </div>
          </form>

          {/* Direct Communication Channels */}
          <div className="lg:col-span-5 space-y-8">
            
            <div className="p-8 rounded-2xl bg-[#121214] border border-[#1E1E24] space-y-6">
              <h3 className="font-display font-bold text-xl text-[#F4F4F6] mb-4">
                Direct Channels
              </h3>

              <a
                href={`mailto:${profileData.email}`}
                className="flex items-center gap-4 text-sm text-[#F4F4F6] hover:text-[#7C5CFF] transition-colors group p-3 rounded-xl hover:bg-[#161619]"
              >
                <div className="w-10 h-10 rounded-full bg-[#161619] border border-[#222227] flex items-center justify-center text-[#7C5CFF] group-hover:border-[#7C5CFF]">
                  <IconMail size={18} />
                </div>
                <div>
                  <div className="text-xs font-mono text-[#90909E]">Email Address</div>
                  <div className="font-medium">{profileData.email}</div>
                </div>
              </a>

              <a
                href={`tel:${profileData.phone}`}
                className="flex items-center gap-4 text-sm text-[#F4F4F6] hover:text-[#7C5CFF] transition-colors group p-3 rounded-xl hover:bg-[#161619]"
              >
                <div className="w-10 h-10 rounded-full bg-[#161619] border border-[#222227] flex items-center justify-center text-[#7C5CFF] group-hover:border-[#7C5CFF]">
                  <IconPhone size={18} />
                </div>
                <div>
                  <div className="text-xs font-mono text-[#90909E]">Phone / WhatsApp</div>
                  <div className="font-medium">{profileData.phone}</div>
                </div>
              </a>

              <div className="flex items-center gap-4 text-sm text-[#F4F4F6] p-3">
                <div className="w-10 h-10 rounded-full bg-[#161619] border border-[#222227] flex items-center justify-center text-[#7C5CFF]">
                  <IconMapPin size={18} />
                </div>
                <div>
                  <div className="text-xs font-mono text-[#90909E]">Location</div>
                  <div className="font-medium">{profileData.location}</div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="p-8 rounded-2xl bg-[#121214] border border-[#1E1E24]">
              <h3 className="font-display font-bold text-lg text-[#F4F4F6] mb-4">
                Profiles & Repositories
              </h3>

              <div className="flex items-center gap-4">
                <a
                  href={profileData.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 py-3 px-4 rounded-xl bg-[#161619] border border-[#222227] hover:border-[#7C5CFF] text-xs font-mono text-[#F4F4F6] flex items-center justify-between transition-colors"
                >
                  <span className="flex items-center gap-2">
                    <IconGithub size={16} /> GitHub
                  </span>
                  <IconArrowUpRight size={14} />
                </a>

                <a
                  href={profileData.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 py-3 px-4 rounded-xl bg-[#161619] border border-[#222227] hover:border-[#7C5CFF] text-xs font-mono text-[#F4F4F6] flex items-center justify-between transition-colors"
                >
                  <span className="flex items-center gap-2">
                    <IconLinkedin size={16} /> LinkedIn
                  </span>
                  <IconArrowUpRight size={14} />
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
