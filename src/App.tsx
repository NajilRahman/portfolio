import { useState, useEffect } from 'react';
import { EditorialCanvas } from './components/canvas/EditorialCanvas';
import { SmoothScroll } from './components/motion/SmoothScroll';
import { HeaderNav } from './components/layout/HeaderNav';
import { ScrollProgress } from './components/ui/ScrollProgress';
import { SpotlightCursor } from './components/ui/SpotlightCursor';
import SplashCursor from './components/ui/SplashCursor';
import { HeroSection } from './components/sections/HeroSection';
import { AboutSection } from './components/sections/AboutSection';
import { ProjectsShowcaseSection } from './components/sections/ProjectsShowcaseSection';
import { ExperienceTimelineSection } from './components/sections/ExperienceTimelineSection';
import { SkillsSection } from './components/sections/SkillsSection';
import { ContactSection } from './components/sections/ContactSection';
import { Footer } from './components/layout/Footer';

function App() {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const sections = ['hero', 'about', 'projects', 'experience', 'skills', 'contact'];
    const activeObservers: IntersectionObserver[] = [];

    sections.forEach((secId) => {
      const el = document.getElementById(secId);
      if (el) {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setActiveSection(secId);
            }
          },
          {
            rootMargin: '-30% 0px -40% 0px',
            threshold: 0,
          }
        );
        observer.observe(el);
        activeObservers.push(observer);
      }
    });

    return () => {
      activeObservers.forEach((obs) => obs.disconnect());
    };
  }, []);

  const handleNavigate = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <SmoothScroll>
      <div className="relative min-h-screen bg-[#0B0B0C] text-[#F4F4F6] font-sans select-none overflow-x-hidden">
        
        {/* React Bits Fluid WebGL Splash Cursor */}
        <SplashCursor
          SIM_RESOLUTION={128}
          DYE_RESOLUTION={1440}
          DENSITY_DISSIPATION={3.5}
          VELOCITY_DISSIPATION={2}
          PRESSURE={0.1}
          PRESSURE_ITERATIONS={20}
          CURL={3}
          SPLAT_RADIUS={0.2}
          SPLAT_FORCE={6000}
          SHADING={true}
          COLOR="#7C5CFF"
          RAINBOW_MODE={true}
        />

        {/* Custom Precision Magnetic Crosshair Cursor */}
        <SpotlightCursor />

        {/* Top Reading Progress Bar */}
        <ScrollProgress />

        {/* 3D Ambient Backdrop Canvas */}
        <EditorialCanvas />

        {/* Editorial Sticky Header Navigation */}
        <HeaderNav activeSection={activeSection} onNavigate={handleNavigate} />

        {/* Page Main Content Container */}
        <main className="relative z-10">
          <HeroSection onNavigate={handleNavigate} />
          <AboutSection />
          <ProjectsShowcaseSection />
          <ExperienceTimelineSection />
          <SkillsSection />
          <ContactSection />
        </main>

        {/* Footer */}
        <Footer />

      </div>
    </SmoothScroll>
  );
}

export default App;
