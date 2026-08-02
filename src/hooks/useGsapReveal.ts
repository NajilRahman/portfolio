import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

interface UseGsapRevealOptions {
  type?: 'fade-up' | 'scale-in' | 'slide-right' | 'clip-mask';
  duration?: number;
  delay?: number;
  stagger?: number;
  triggerOffset?: string;
}

export function useGsapReveal<T extends HTMLElement = HTMLDivElement>(
  options: UseGsapRevealOptions = {}
) {
  const elementRef = useRef<T>(null);

  const {
    type = 'fade-up',
    duration = 0.8,
    delay = 0,
    stagger = 0.1,
    triggerOffset = 'top 85%',
  } = options;

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const el = elementRef.current;
    if (!el) return;

    const children = el.children.length > 0 ? Array.from(el.children) : [el];

    let fromVars: gsap.TweenVars = { opacity: 0 };
    let toVars: gsap.TweenVars = {
      opacity: 1,
      duration,
      delay,
      stagger,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: el,
        start: triggerOffset,
        toggleActions: 'play none none none',
      },
    };

    switch (type) {
      case 'fade-up':
        fromVars = { opacity: 0, y: 40 };
        toVars = { ...toVars, y: 0 };
        break;
      case 'scale-in':
        fromVars = { opacity: 0, scale: 0.92 };
        toVars = { ...toVars, scale: 1 };
        break;
      case 'slide-right':
        fromVars = { opacity: 0, x: -50 };
        toVars = { ...toVars, x: 0 };
        break;
      case 'clip-mask':
        fromVars = { opacity: 0, clipPath: 'polygon(0 0, 0 0, 0 100%, 0 100%)' };
        toVars = { ...toVars, clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' };
        break;
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(children, fromVars, toVars);
    }, el);

    return () => ctx.revert();
  }, [type, duration, delay, stagger, triggerOffset]);

  return elementRef;
}
