"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Rewind, FastForward, ChevronLeft, ChevronRight, Sparkles, ArrowUpRight, Play, Pause } from "lucide-react";

export interface CarouselItem {
  id: number | string;
  title: string;
  subtitle?: string;
  detail?: string;
  badge?: string;
  image?: string;
  tech?: string[];
  features?: string[];
  stats?: { label: string; value: string }[];
  actionLabel?: string;
  onAction?: () => void;
}

const ITEM_WIDTH = 540; // width of each item box in px
const ITEM_GAP = 40;    // gap between items in px
const ITEM_STEP = ITEM_WIDTH + ITEM_GAP; // 580px step per item

// Create infinite items by triplicating the array
const createInfiniteItems = (originalItems: CarouselItem[]) => {
  const items: (CarouselItem & { originalIndex: number })[] = [];
  for (let i = 0; i < 3; i++) {
    originalItems.forEach((item, index) => {
      items.push({
        ...item,
        id: `${i}-${item.id}`,
        originalIndex: index,
      });
    });
  }
  return items;
};

const RulerLines = ({
  top = true,
  totalLines = 80,
}: {
  top?: boolean;
  totalLines?: number;
}) => {
  const lines = [];
  const lineSpacing = 100 / (totalLines - 1);

  for (let i = 0; i < totalLines; i++) {
    const isFifth = i % 5 === 0;
    const isTenth = i % 10 === 0;
    const isCenter = i === Math.floor(totalLines / 2);

    let height = "h-2.5";
    let color = "bg-zinc-700 dark:bg-zinc-700 opacity-60";

    if (isCenter) {
      height = "h-8";
      color = "bg-[#7C5CFF] opacity-100 shadow-[0_0_12px_#7C5CFF]";
    } else if (isTenth) {
      height = "h-5";
      color = "bg-[#7C5CFF]/80 opacity-90";
    } else if (isFifth) {
      height = "h-3.5";
      color = "bg-zinc-400 opacity-70";
    }

    const positionClass = top ? "top-0" : "bottom-0";

    lines.push(
      <div
        key={i}
        className={`absolute w-0.5 ${height} ${color} ${positionClass} transition-colors rounded-full`}
        style={{ left: `${i * lineSpacing}%` }}
      />
    );
  }

  return <div className="relative w-full h-8 px-2 overflow-hidden">{lines}</div>;
};

export function RulerCarousel({
  originalItems,
  onSelect,
  autoPlayDuration = 4000, // default 4 seconds per view time
}: {
  originalItems: CarouselItem[];
  onSelect?: (index: number, item: CarouselItem) => void;
  autoPlayDuration?: number;
}) {
  const infiniteItems = createInfiniteItems(originalItems);
  const itemsPerSet = originalItems.length;

  // Start centered in the middle set
  const initialIndex = itemsPerSet + Math.floor(itemsPerSet / 2);
  const [activeIndex, setActiveIndex] = useState(initialIndex);
  const [isResetting, setIsResetting] = useState(false);
  const [isAutoPlayEnabled, setIsAutoPlayEnabled] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const previousIndexRef = useRef(initialIndex);

  const handleItemClick = (newIndex: number) => {
    if (isResetting) return;

    const targetOriginalIndex = newIndex % itemsPerSet;
    const possibleIndices = [
      targetOriginalIndex,
      targetOriginalIndex + itemsPerSet,
      targetOriginalIndex + itemsPerSet * 2,
    ];

    let closestIndex = possibleIndices[0];
    let smallestDistance = Math.abs(possibleIndices[0] - activeIndex);

    for (const index of possibleIndices) {
      const distance = Math.abs(index - activeIndex);
      if (distance < smallestDistance) {
        smallestDistance = distance;
        closestIndex = index;
      }
    }

    previousIndexRef.current = activeIndex;
    setActiveIndex(closestIndex);
  };

  const handlePrevious = useCallback(() => {
    if (isResetting) return;
    setActiveIndex((prev) => prev - 1);
  }, [isResetting]);

  const handleNext = useCallback(() => {
    if (isResetting) return;
    setActiveIndex((prev) => prev + 1);
  }, [isResetting]);

  // Handle infinite scrolling reset
  useEffect(() => {
    if (isResetting) return;

    if (activeIndex < itemsPerSet) {
      setIsResetting(true);
      setTimeout(() => {
        setActiveIndex(activeIndex + itemsPerSet);
        setIsResetting(false);
      }, 0);
    } else if (activeIndex >= itemsPerSet * 2) {
      setIsResetting(true);
      setTimeout(() => {
        setActiveIndex(activeIndex - itemsPerSet);
        setIsResetting(false);
      }, 0);
    }
  }, [activeIndex, itemsPerSet, isResetting]);

  // AUTO-PLAY SLIDE TIMER
  useEffect(() => {
    if (!isAutoPlayEnabled || isHovered || isResetting) return;

    const interval = setInterval(() => {
      handleNext();
    }, autoPlayDuration);

    return () => clearInterval(interval);
  }, [isAutoPlayEnabled, isHovered, isResetting, handleNext, autoPlayDuration]);

  // Keyboard Navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (isResetting) return;

      if (event.key === "ArrowLeft") {
        event.preventDefault();
        handlePrevious();
      } else if (event.key === "ArrowRight") {
        event.preventDefault();
        handleNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isResetting, handlePrevious, handleNext]);

  // Trigger onSelect callback
  const currentOriginalIndex = activeIndex % itemsPerSet;
  const currentItem = originalItems[currentOriginalIndex];

  useEffect(() => {
    if (currentItem && onSelect) {
      onSelect(currentOriginalIndex, currentItem);
    }
  }, [currentOriginalIndex, currentItem, onSelect]);

  // Math to center the active item precisely:
  const targetX = -(activeIndex * ITEM_STEP + ITEM_WIDTH / 2);

  const currentPage = currentOriginalIndex + 1;
  const totalPages = itemsPerSet;

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="w-full flex flex-col items-center justify-center bg-[#0C0C0E] border border-[#222227] rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden my-6"
    >
      {/* View Time Progress Bar */}
      {isAutoPlayEnabled && !isHovered && (
        <motion.div
          key={activeIndex}
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: autoPlayDuration / 1000, ease: "linear" }}
          className="absolute top-0 left-0 h-1 bg-[#7C5CFF] shadow-[0_0_10px_#7C5CFF] z-30"
        />
      )}
      
      {/* Top Header Controls Bar */}
      <div className="w-full flex flex-wrap items-center justify-between pb-6 mb-4 border-b border-[#1E1E24] gap-4">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#7C5CFF] animate-pulse" />
          <span className="text-xs font-mono tracking-widest uppercase text-white font-bold">
            Companies Worked & Key Achievements
          </span>
          {currentItem?.badge && (
            <span className="hidden sm:inline-block text-[10px] font-mono bg-[#7C5CFF]/20 text-[#7C5CFF] border border-[#7C5CFF]/40 px-2 py-0.5 rounded-full ml-2 font-bold">
              {currentItem.badge}
            </span>
          )}
        </div>

        <div className="flex items-center gap-3 text-xs font-mono text-[#A1A1AA]">
          {/* Auto Play Toggle Button */}
          <button
            onClick={() => setIsAutoPlayEnabled(!isAutoPlayEnabled)}
            className={`flex items-center gap-1.5 px-3 py-1 rounded-xl border transition-all cursor-pointer ${
              isAutoPlayEnabled
                ? 'bg-[#7C5CFF]/15 border-[#7C5CFF]/40 text-[#7C5CFF]'
                : 'bg-[#161619] border-[#27272A] text-[#71717A]'
            }`}
            title={isAutoPlayEnabled ? "Auto-play is Active (Click to Pause)" : "Auto-play is Paused (Click to Play)"}
          >
            {isAutoPlayEnabled ? <Pause size={12} /> : <Play size={12} />}
            <span>{isAutoPlayEnabled ? (isHovered ? "Paused (Hover)" : "Auto Move") : "Paused"}</span>
          </button>

          <span className="hidden md:inline text-[#52525B]">&bull;</span>
          <span className="hidden md:inline">Drag or Use &larr; &rarr; Keys</span>

          <div className="flex items-center gap-1 bg-[#161619] border border-[#27272A] px-3 py-1 rounded-xl">
            <span className="text-white font-bold">{currentPage}</span>
            <span className="text-[#52525B]">/</span>
            <span className="text-[#A1A1AA]">{totalPages}</span>
          </div>
        </div>
      </div>

      {/* Main Ruler Viewport */}
      <div className="w-full flex flex-col items-center justify-center relative py-2">
        
        {/* Top Ruler Tick Marks */}
        <div className="w-full max-w-4xl relative mb-2">
          <RulerLines top />
        </div>

        {/* Center Indicator Needle */}
        <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-0.5 bg-[#7C5CFF] z-20 pointer-events-none shadow-[0_0_15px_#7C5CFF]">
          <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-[#7C5CFF] rotate-45" />
          <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-[#7C5CFF] rotate-45" />
        </div>

        {/* Moving Items Container Track */}
        <div className="w-full h-[140px] sm:h-[160px] relative overflow-hidden flex items-center justify-center">
          <motion.div
            className="flex items-center justify-start absolute left-1/2"
            style={{ gap: `${ITEM_GAP}px` }}
            animate={{
              x: isResetting ? targetX : targetX,
            }}
            transition={
              isResetting
                ? { duration: 0 }
                : {
                    type: "spring",
                    stiffness: 280,
                    damping: 24,
                    mass: 0.8,
                  }
            }
          >
            {infiniteItems.map((item, index) => {
              const isActive = index === activeIndex;

              return (
                <motion.button
                  key={item.id}
                  onClick={() => handleItemClick(index)}
                  className={`shrink-0 h-[120px] rounded-2xl flex flex-col items-center justify-center px-6 transition-colors cursor-pointer select-none border ${
                    isActive
                      ? "bg-[#18181C] border-[#7C5CFF] shadow-[0_0_30px_rgba(124,92,255,0.25)] text-white"
                      : "bg-[#101014]/60 border-[#222227] text-[#71717A] hover:text-white hover:border-[#3F3F46]"
                  }`}
                  style={{
                    width: `${ITEM_WIDTH}px`,
                  }}
                  animate={{
                    scale: isActive ? 1 : 0.82,
                    opacity: isActive ? 1 : 0.35,
                  }}
                  transition={
                    isResetting
                      ? { duration: 0 }
                      : {
                          type: "spring",
                          stiffness: 400,
                          damping: 25,
                        }
                  }
                >
                  <div className="text-xl sm:text-3xl md:text-4xl font-extrabold uppercase tracking-tight text-center truncate max-w-full">
                    {item.title}
                  </div>
                  {item.subtitle && (
                    <div className={`text-xs font-mono mt-1 tracking-wider uppercase ${isActive ? 'text-[#7C5CFF]' : 'text-[#52525B]'}`}>
                      {item.subtitle}
                    </div>
                  )}
                </motion.button>
              );
            })}
          </motion.div>
        </div>

        {/* Bottom Ruler Tick Marks */}
        <div className="w-full max-w-4xl relative mt-2">
          <RulerLines top={false} />
        </div>
      </div>

      {/* Interactive Detail Card for Active Item */}
      <AnimatePresence mode="wait">
        {currentItem && (
          <motion.div
            key={currentItem.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="w-full max-w-4xl mt-6 p-6 rounded-2xl bg-[#121216] border border-[#222227] flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-xl"
          >
            <div className="flex items-start gap-4 flex-1">
              <div className="p-3 rounded-xl bg-[#7C5CFF]/15 border border-[#7C5CFF]/30 text-[#7C5CFF] shrink-0 mt-1">
                <Sparkles size={22} />
              </div>
              <div className="space-y-2 flex-1">
                <div className="flex flex-wrap items-center gap-2">
                  <h4 className="text-lg font-bold text-white font-display">
                    {currentItem.title}
                  </h4>
                  {currentItem.badge && (
                    <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-[#7C5CFF]/20 text-[#7C5CFF] font-semibold border border-[#7C5CFF]/40">
                      {currentItem.badge}
                    </span>
                  )}
                </div>

                <p className="text-sm text-[#A1A1AA] font-mono leading-relaxed">
                  {currentItem.detail || `${currentItem.title} — Key engineering highlight & production implementation.`}
                </p>

                {/* Tech Stack Pills */}
                {currentItem.tech && currentItem.tech.length > 0 && (
                  <div className="flex flex-wrap items-center gap-2 pt-1">
                    <span className="text-[11px] font-mono text-[#71717A]">Stack:</span>
                    {currentItem.tech.map((t, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-[#1C1C22] border border-[#2A2A32] text-white"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Stats & Action Column */}
            <div className="flex flex-col sm:flex-row md:flex-col items-stretch sm:items-center md:items-end justify-between gap-3 shrink-0 w-full md:w-auto">
              {currentItem.stats && currentItem.stats.length > 0 && (
                <div className="flex items-center gap-3">
                  {currentItem.stats.map((stat, sIdx) => (
                    <div key={sIdx} className="px-3 py-1.5 rounded-xl bg-[#1B1B20] border border-[#2A2A32] text-center min-w-[80px]">
                      <div className="text-sm font-bold text-white font-mono">{stat.value}</div>
                      <div className="text-[10px] text-[#A1A1AA] font-mono">{stat.label}</div>
                    </div>
                  ))}
                </div>
              )}

              {currentItem.onAction && (
                <button
                  onClick={currentItem.onAction}
                  className="inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl bg-[#7C5CFF] hover:bg-[#9275FF] text-white font-mono text-xs font-bold transition-all shadow-lg shadow-[#7C5CFF]/20 cursor-pointer"
                >
                  <span>{currentItem.actionLabel || "View Details"}</span>
                  <ArrowUpRight size={14} />
                </button>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Navigation Buttons Row */}
      <div className="flex items-center justify-center gap-6 mt-6 pt-4 border-t border-[#1C1C22] w-full">
        <button
          onClick={handlePrevious}
          disabled={isResetting}
          className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#161619] border border-[#27272A] text-xs font-mono text-white font-semibold hover:bg-[#222227] hover:border-[#7C5CFF]/50 transition-all cursor-pointer disabled:opacity-50"
          aria-label="Previous item"
        >
          <ChevronLeft className="w-4 h-4 text-[#7C5CFF]" />
          <span>Previous</span>
        </button>

        <div className="flex items-center gap-2 text-xs font-mono text-[#A1A1AA]">
          <button
            onClick={handlePrevious}
            className="p-2 rounded-lg bg-[#161619] border border-[#27272A] hover:text-white cursor-pointer"
          >
            <Rewind className="w-4 h-4" />
          </button>
          <button
            onClick={handleNext}
            className="p-2 rounded-lg bg-[#161619] border border-[#27272A] hover:text-white cursor-pointer"
          >
            <FastForward className="w-4 h-4" />
          </button>
        </div>

        <button
          onClick={handleNext}
          disabled={isResetting}
          className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#161619] border border-[#27272A] text-xs font-mono text-white font-semibold hover:bg-[#222227] hover:border-[#7C5CFF]/50 transition-all cursor-pointer disabled:opacity-50"
          aria-label="Next item"
        >
          <span>Next</span>
          <ChevronRight className="w-4 h-4 text-[#7C5CFF]" />
        </button>
      </div>

    </div>
  );
}
