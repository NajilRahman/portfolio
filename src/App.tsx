import { useState, useEffect } from 'react';
import { Sidebar } from './components/Sidebar';
import { ProgressIndicator } from './components/ProgressIndicator';
import { FloatNav } from './components/FloatNav';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

function App() {
  const [activeSection, setActiveSection] = useState('experience');

  const sections = [
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' },
  ];

  useEffect(() => {
    const activeObservers: { observer: IntersectionObserver; element: HTMLElement }[] = [];

    sections.forEach((sec) => {
      const el = document.getElementById(sec.id);
      if (el) {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setActiveSection(sec.id);
            }
          },
          {
            rootMargin: '-25% 0px -55% 0px',
            threshold: 0,
          }
        );
        observer.observe(el);
        activeObservers.push({ observer, element: el });
      }
    });

    return () => {
      activeObservers.forEach(({ observer, element }) => {
        observer.unobserve(element);
      });
    };
  }, []);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Initial page load reveal
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    // Animate Sidebar on load
    tl.fromTo('aside', 
      { opacity: 0, x: -60 }, 
      { opacity: 1, x: 0, duration: 1.2 }
    );

    // Animate first section content on load
    tl.fromTo('#experience', 
      { opacity: 0, y: 40 }, 
      { opacity: 1, y: 0, duration: 1.0 }, 
      '-=0.8'
    );

    // Scroll reveal triggers for the rest of the sections
    const animateSections = ['projects', 'skills', 'about', 'contact'];

    animateSections.forEach((secId) => {
      const el = document.getElementById(secId);
      if (el) {
        // Create scroll trigger for heading
        gsap.fromTo(el.querySelectorAll('h2, p.font-mono'), 
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.1,
            scrollTrigger: {
              trigger: el,
              start: 'top 85%',
              toggleActions: 'play none none none',
            }
          }
        );

        // Sub-elements animations
        if (secId === 'projects') {
          gsap.fromTo(el.querySelectorAll('.glass-panel'),
            { opacity: 0, y: 50, scale: 0.96 },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.8,
              stagger: 0.15,
              scrollTrigger: {
                trigger: el,
                start: 'top 75%',
                toggleActions: 'play none none none',
              }
            }
          );
        } else if (secId === 'skills') {
          gsap.fromTo(el.querySelectorAll('.glass-panel'),
            { opacity: 0, scale: 0.92, y: 30 },
            {
              opacity: 1,
              scale: 1,
              y: 0,
              duration: 0.7,
              stagger: 0.12,
              scrollTrigger: {
                trigger: el,
                start: 'top 75%',
                toggleActions: 'play none none none',
              }
            }
          );
        } else if (secId === 'about') {
          gsap.fromTo(el.querySelectorAll('.glass-panel'),
            { opacity: 0, x: -40 },
            {
              opacity: 1,
              x: 0,
              duration: 0.8,
              stagger: 0.2,
              scrollTrigger: {
                trigger: el,
                start: 'top 75%',
                toggleActions: 'play none none none',
              }
            }
          );
        } else if (secId === 'contact') {
          gsap.fromTo(el.querySelectorAll('.glass-panel, form, button'),
            { opacity: 0, y: 40 },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              stagger: 0.12,
              scrollTrigger: {
                trigger: el,
                start: 'top 75%',
                toggleActions: 'play none none none',
              }
            }
          );
        }
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <div className="min-h-screen bg-obsidian text-offwhite flex justify-center py-6 px-4 md:py-12 md:px-8 lg:px-12 relative font-sans select-none">
      
      {/* Drifting Organic Gradient Blobs (Liquid Atmosphere) */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
        {/* Violet Blob */}
        <div className="absolute top-[8%] left-[-5%] w-[350px] h-[350px] md:w-[600px] md:h-[600px] rounded-full bg-deep-violet/20 blur-[100px] md:blur-[150px] animate-blob-slow" />
        
        {/* Sapphire Blue Blob */}
        <div className="absolute top-[42%] right-[-10%] w-[400px] h-[400px] md:w-[700px] md:h-[700px] rounded-full bg-sapphire/18 blur-[110px] md:blur-[160px] animate-blob-slow-reverse" />
        
        {/* Emerald Glow Blob */}
        <div className="absolute bottom-[5%] left-[10%] w-[300px] h-[300px] md:w-[500px] md:h-[500px] rounded-full bg-emerald-glow/6 blur-[90px] md:blur-[130px] animate-blob-medium" />
      </div>

      {/* Main Dashboard Layout Grid */}
      <div className="w-full max-w-[1140px] flex flex-col lg:flex-row gap-8 lg:gap-10 relative z-10">
        
        {/* Column 1: Sticky Profile Sidebar */}
        <Sidebar />

        {/* Column 2: Scroll Progress Bar (Desktop only) */}
        <ProgressIndicator />

        {/* Column 3: Scrollable Content Modules */}
        <main className="flex-1 flex flex-col gap-10 md:gap-14 lg:gap-16">
          <Experience />
          
          {/* Subtle separator divider */}
          <div className="h-[1px] w-full bg-white/5" />
          
          <Projects />
          
          {/* Subtle separator divider */}
          <div className="h-[1px] w-full bg-white/5" />
          
          <Skills />
          
          {/* Subtle separator divider */}
          <div className="h-[1px] w-full bg-white/5" />
          
          <About />
          
          {/* Subtle separator divider */}
          <div className="h-[1px] w-full bg-white/5" />
          
          <Contact />
        </main>

        {/* Floating Right Navigation dots */}
        <FloatNav activeSection={activeSection} sections={sections} />
      </div>
    </div>
  );
}

export default App;
