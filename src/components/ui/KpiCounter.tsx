'use client';

import React, { useEffect, useRef, useState } from 'react';
import { isReducedMotion } from '@/lib/motion';

interface KpiCounterProps {
  value: string; // e.g. "250+", "40 h+", "4+", "100%"
  label: string;
  className?: string;
  theme?: 'dark' | 'light';
}

export const KpiCounter: React.FC<KpiCounterProps> = ({
  value,
  label,
  className = '',
  theme = 'dark'
}) => {
  const [displayValue, setDisplayValue] = useState<string>(value);
  const containerRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (isReducedMotion()) {
      setDisplayValue(value);
      return;
    }

    const element = containerRef.current;
    if (!element) return;

    // Extract numeric portion for counting effect if applicable
    const match = value.match(/(\d+)/);
    if (!match) return;

    const targetNum = parseInt(match[1], 10);
    const suffix = value.replace(match[1], '');

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          let currentNum = 0;
          const duration = 1200; // ms
          const stepTime = 30;
          const steps = duration / stepTime;
          const increment = targetNum / steps;

          const timer = setInterval(() => {
            currentNum += increment;
            if (currentNum >= targetNum) {
              currentNum = targetNum;
              clearInterval(timer);
            }
            setDisplayValue(`${Math.floor(currentNum)}${suffix}`);
          }, stepTime);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [value]);

  const valueColor = theme === 'dark' ? 'text-[#EFEAE2]' : 'text-[#151A20]';
  const labelColor = theme === 'dark' ? 'text-[#7C8894]' : 'text-[#28323C]';

  return (
    <div ref={containerRef} className={`space-y-1 ${className}`}>
      <div
        className={`font-mono text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight ${valueColor}`}
        style={{ fontFamily: 'var(--font-martian), monospace' }}
      >
        {displayValue}
      </div>
      <div className={`text-sm lg:text-base font-normal max-w-xs ${labelColor}`}>
        {label}
      </div>
    </div>
  );
};
