'use client';

import React, { useState, useEffect } from 'react';
import { SECTION_LIST } from '@/lib/grid';

export const CalibrationRail: React.FC = () => {
  const [scrollPercent, setScrollPercent] = useState(0);
  const [activeSectionIndex, setActiveSectionIndex] = useState("01");

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight <= 0) return;
      const currentProgress = Math.min(100, Math.max(0, (window.scrollY / totalHeight) * 100));
      setScrollPercent(currentProgress);

      // Determine active section index
      const sections = SECTION_LIST.map(s => document.getElementById(s.id)).filter(Boolean);
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sec = sections[i];
        if (sec && sec.offsetTop <= scrollPosition) {
          const match = SECTION_LIST.find(s => s.id === sec.id);
          if (match) {
            setActiveSectionIndex(match.index);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Desktop Fixed Left Calibration Rail (72px) */}
      <aside
        className="hidden lg:flex fixed top-0 left-0 bottom-0 w-[72px] bg-[#0A1017] border-r border-[#28323C] z-30 flex-col justify-between items-center py-8 select-none"
        aria-label="Rail de calibration et navigation"
      >
        {/* Top tick mark + current index */}
        <div className="flex flex-col items-center gap-2">
          <div className="w-3 h-[1px] bg-[#7C8894]" />
          <span className="font-mono text-xs font-semibold text-[#FE640E] tracking-tighter">
            {activeSectionIndex}
          </span>
        </div>

        {/* Vertical Rail Line with orange scroll trace thread */}
        <div className="relative flex-1 my-6 w-[1px] bg-[#28323C]">
          <div
            className="absolute top-0 left-0 w-full bg-[#FE640E] transition-all duration-150 ease-out"
            style={{ height: `${scrollPercent}%` }}
          />
          {/* Ticks for 5 sections */}
          <div className="absolute top-[20%] left-[-4px] w-2 h-[1px] bg-[#7C8894]/40" />
          <div className="absolute top-[40%] left-[-4px] w-2 h-[1px] bg-[#7C8894]/40" />
          <div className="absolute top-[60%] left-[-4px] w-2 h-[1px] bg-[#7C8894]/40" />
          <div className="absolute top-[80%] left-[-4px] w-2 h-[1px] bg-[#7C8894]/40" />
        </div>

        {/* Bottom tick mark + total sections count (07) */}
        <div className="flex flex-col items-center gap-2">
          <span className="font-mono text-[10px] text-[#7C8894]">
            07
          </span>
          <div className="w-3 h-[1px] bg-[#7C8894]" />
        </div>
      </aside>

      {/* Mobile / Tablet 4px Top Scroll Progress Bar (< 1024px) */}
      <div className="lg:hidden fixed top-0 left-0 right-0 h-[3px] bg-[#28323C] z-50">
        <div
          className="h-full bg-gradient-to-r from-[#FE640E] to-[#FF8812] transition-all duration-150 ease-out"
          style={{ width: `${scrollPercent}%` }}
        />
      </div>
    </>
  );
};
