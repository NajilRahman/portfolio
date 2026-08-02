import React from 'react';

interface InfiniteMarqueeProps {
  items?: string[];
  direction?: 'left' | 'right';
  speed?: number;
}

const defaultItems = [
  "Node.js ES2024",
  "Express.js REST APIs",
  "TypeScript Strict",
  "WebAuthn Passkeys",
  "MongoDB Aggregations",
  "Redis Cache & Queues",
  "Socket.IO WebSockets",
  "React 19",
  "Next.js 14",
  "GSAP ScrollTrigger",
  "Lenis Smooth Scroll",
  "Zod Schema Validation",
  "Zero-Trust Auth",
  "CPU Worker Clustering"
];

export const InfiniteMarquee: React.FC<InfiniteMarqueeProps> = ({
  items = defaultItems,
  direction = 'left',
  speed = 30,
}) => {
  const marqueeItems = [...items, ...items, ...items];

  return (
    <div className="w-full overflow-hidden py-4 border-y border-white/10 bg-[#0A0D14]/80 backdrop-blur-md relative z-10 select-none">
      <div
        className={`flex items-center gap-8 whitespace-nowrap ${
          direction === 'left' ? 'animate-marquee-left' : 'animate-marquee-right'
        }`}
        style={{
          animationDuration: `${speed}s`,
        }}
      >
        {marqueeItems.map((item, idx) => (
          <div key={idx} className="flex items-center gap-3 shrink-0">
            <span className="w-2 h-2 rounded-full bg-emerald-glow shadow-[0_0_8px_#00FA9A]" />
            <span className="font-mono text-xs md:text-sm text-white/90 font-medium tracking-wider uppercase">
              {item}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
