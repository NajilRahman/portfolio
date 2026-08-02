import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

interface TextScrubRevealProps {
  text: string;
  className?: string;
  highlightWords?: string[];
}

export const TextScrubReveal: React.FC<TextScrubRevealProps> = ({
  text,
  className = '',
  highlightWords = [],
}) => {
  const containerRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const container = containerRef.current;
    if (!container) return;

    const wordElements = container.querySelectorAll('.scrub-word');

    const ctx = gsap.context(() => {
      gsap.fromTo(
        wordElements,
        { opacity: 0.2 },
        {
          opacity: 1,
          stagger: 0.08,
          ease: 'none',
          scrollTrigger: {
            trigger: container,
            start: 'top 85%',
            end: 'bottom 45%',
            scrub: 0.4,
          },
        }
      );
    }, container);

    return () => ctx.revert();
  }, [text]);

  const words = text.split(' ');

  return (
    <p ref={containerRef} className={`font-sans leading-relaxed block ${className}`}>
      {words.map((word, idx) => {
        const cleanWord = word.replace(/[^a-zA-Z0-9]/g, '');
        const isHighlighted = highlightWords.some(
          (h) => h.toLowerCase() === cleanWord.toLowerCase()
        );

        return (
          <span
            key={idx}
            className={`scrub-word inline-block transition-colors py-0.5 ${
              isHighlighted
                ? 'text-transparent bg-clip-text bg-gradient-to-r from-electric-indigo to-cyan-glow font-bold'
                : 'text-white'
            }`}
            style={{ opacity: 0.2, marginRight: '0.3em' }}
          >
            {word}
          </span>
        );
      })}
    </p>
  );
};
