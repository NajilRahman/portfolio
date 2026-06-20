import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Download, CheckCircle, AlertTriangle } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) {
      setStatus('error');
      return;
    }
    setStatus('sending');
    // Simulate API delay
    setTimeout(() => {
      setStatus('success');
      setFormState({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 4000);
    }, 1500);
  };

  const handleResumeDownload = () => {
    const a = document.createElement('a');
    a.href = '/NAJIL_RAHMAN_PM.pdf';
    a.download = 'Najil_Rahman_PM_Resume.pdf';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <section id="contact" className="flex flex-col gap-6 w-full scroll-mt-8 pb-16">
      <div className="flex flex-col gap-2">
        <h2 className="font-serif text-3xl md:text-4xl font-semibold tracking-tight text-white">
          Get in Touch
        </h2>
        <p className="font-mono text-[11px] text-graphite uppercase tracking-widest">
          Let's build something scalable together
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
        {/* Contact Form - 3/5 width */}
        <div className="glass-panel rounded-3xl p-6 md:p-8 lg:col-span-3 flex flex-col gap-6">
          <h3 className="font-serif text-xl text-white font-medium">
            Send a Message
          </h3>
          
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label htmlFor="name" className="font-mono text-[9px] uppercase tracking-wider text-graphite">
                  Your Name
                </label>
                <input 
                  type="text" 
                  id="name"
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  placeholder="Alex Chen"
                  className="w-full bg-white/5 border border-white/8 rounded-xl px-4 py-3 font-sans text-sm text-white placeholder-white/20 focus:outline-none focus:border-emerald-glow/30 focus:bg-white/[0.08] transition-all"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label htmlFor="email" className="font-mono text-[9px] uppercase tracking-wider text-graphite">
                  Email Address
                </label>
                <input 
                  type="email" 
                  id="email"
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  placeholder="recruiter@company.com"
                  className="w-full bg-white/5 border border-white/8 rounded-xl px-4 py-3 font-sans text-sm text-white placeholder-white/20 focus:outline-none focus:border-emerald-glow/30 focus:bg-white/[0.08] transition-all"
                />
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="message" className="font-mono text-[9px] uppercase tracking-wider text-graphite">
                Message
              </label>
              <textarea 
                id="message"
                rows={4}
                value={formState.message}
                onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                placeholder="Hi Najil, I reviewed your portfolio and would like to discuss..."
                className="w-full bg-white/5 border border-white/8 rounded-xl px-4 py-3 font-sans text-sm text-white placeholder-white/20 focus:outline-none focus:border-emerald-glow/30 focus:bg-white/[0.08] transition-all resize-none"
              />
            </div>

            <button 
              type="submit" 
              disabled={status === 'sending'}
              className="btn-mercury-primary py-3 rounded-xl flex items-center justify-center gap-2 font-mono text-[11px] uppercase tracking-wider font-semibold text-white/95 mt-2 cursor-pointer"
            >
              {status === 'sending' ? (
                <>
                  <div className="w-4 h-4 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                  Routing...
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  Send Transmission
                </>
              )}
            </button>
          </form>

          {/* Form Feedbacks */}
          {status === 'success' && (
            <div className="flex items-center gap-3 bg-emerald-glow/5 border border-emerald-glow/15 p-4 rounded-2xl animate-fade-in">
              <CheckCircle className="w-5 h-5 text-emerald-glow shrink-0" />
              <p className="font-sans text-xs text-white/90">
                Transmission success! Thank you. I will reply to you within 24 hours.
              </p>
            </div>
          )}

          {status === 'error' && (
            <div className="flex items-center gap-3 bg-rose-500/5 border border-rose-500/15 p-4 rounded-2xl animate-fade-in">
              <AlertTriangle className="w-5 h-5 text-rose-400 shrink-0" />
              <p className="font-sans text-xs text-white/90">
                Validation error: Please populate all input channels (Name, Email, Message).
              </p>
            </div>
          )}
        </div>

        {/* Credentials and Resume - 2/5 width */}
        <div className="lg:col-span-2 flex flex-col gap-5 justify-between">
          <div className="glass-panel rounded-3xl p-6 flex flex-col gap-5">
            <h3 className="font-serif text-xl text-white font-medium">
              Direct Channels
            </h3>
            
            <div className="flex flex-col gap-4 font-mono text-xs border-t border-white/5 pt-4">
              <div className="flex items-start gap-4">
                <div className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4 text-white/70" />
                </div>
                <div className="flex flex-col">
                  <span className="text-graphite uppercase text-[9px] tracking-wide">Secure Mail</span>
                  <a href="mailto:najilrahmanpm@gmail.com" className="text-white hover:text-emerald-glow transition-colors mt-0.5">
                    najilrahmanpm@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4 text-white/70" />
                </div>
                <div className="flex flex-col">
                  <span className="text-graphite uppercase text-[9px] tracking-wide">Direct Line</span>
                  <a href="tel:+919048649412" className="text-white hover:text-emerald-glow transition-colors mt-0.5">
                    +91 9048649412
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4 text-white/70" />
                </div>
                <div className="flex flex-col">
                  <span className="text-graphite uppercase text-[9px] tracking-wide">Station Location</span>
                  <span className="text-white mt-0.5">
                    Calicut, Kerala, India
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Resume Download CTA */}
          <button
            onClick={handleResumeDownload}
            className="btn-mercury py-4 px-6 rounded-3xl flex flex-col items-center gap-1.5 w-full text-center group cursor-pointer"
          >
            <div className="flex items-center gap-2">
              <Download className="w-4 h-4 text-emerald-glow animate-pulse-slow" />
              <span className="font-mono text-xs uppercase tracking-wider font-semibold text-white">
                Download ATS Resume
              </span>
            </div>
            <span className="font-mono text-[9px] text-graphite uppercase">
              PDF Format // Direct Download
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};
