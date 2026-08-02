import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface TextScrubRevealProps {
  text: string;
  className?: string;
}

export const TextScrubReveal: React.FC<TextScrubRevealProps> = ({ text, className = '' }) => {
  const containerRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const words = containerRef.current.querySelectorAll('.scrub-word');

    const ctx = gsap.context(() => {
      gsap.fromTo(
        words,
        { opacity: 0.4 },
        {
          opacity: 1,
          stagger: 0.05,
          ease: 'none',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 85%',
            end: 'bottom 55%',
            scrub: 0.8,
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, [text]);

  const wordsArr = text.split(' ');

  return (
    <p ref={containerRef} className={className}>
      {wordsArr.map((word, idx) => (
        <span key={idx} className="scrub-word inline-block mr-1.5 transition-opacity text-white">
          {word}
        </span>
      ))}
    </p>
  );
};
