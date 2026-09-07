'use client';

import React, { useEffect, useRef, useState } from 'react';
import { HERO_TRACE_PATH, HERO_MARKERS } from '@/lib/grid';
import { isReducedMotion } from '@/lib/motion';

export const Trace: React.FC = () => {
  const pathRef = useRef<SVGPathElement>(null);
  const [orbPos, setOrbPos] = useState<{ x: number; y: number }>({ x: 100, y: 468 });
  const [activeStep, setActiveStep] = useState<number>(0);
  const [pathLength, setPathLength] = useState<number>(1000);
  const [dashOffset, setDashOffset] = useState<number>(0);

  useEffect(() => {
    if (isReducedMotion()) return;

    const path = pathRef.current;
    if (!path) return;

    const length = path.getTotalLength();
    setPathLength(length);

    let animationFrameId: number;
    const duration = 5500; // 5.5s smooth continuous loop cycle
    let startTime: number | null = null;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = (elapsed % duration) / duration; // 0.0 -> 1.0 continuously

      try {
        const point = path.getPointAtLength(progress * length);
        setOrbPos({ x: point.x, y: point.y });
      } catch (e) {
        // Fallback if SVG path not ready
      }

      // Step threshold determination (0 -> 3)
      const currentStep = Math.min(3, Math.floor(progress * 4));
      setActiveStep(currentStep);

      // Continuous laser stroke movement
      setDashOffset(-progress * length * 2);

      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="relative w-full h-full min-h-[520px] lg:min-h-[640px] xl:min-h-[720px] flex items-center justify-center p-2 lg:p-4 overflow-visible">
      {/* Background Grid Motif */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, #7C8894 1px, transparent 1px), linear-gradient(to bottom, #7C8894 1px, transparent 1px)`,
          backgroundSize: '48px 48px',
          maskImage: 'radial-gradient(ellipse at center, black 60%, transparent 90%)'
        }}
      />

      {/* Enlarged SVG Trace Curve & Loop Animation */}
      <div className="w-full h-auto transform-gpu scale-105 sm:scale-110 lg:scale-115 xl:scale-120 transition-transform duration-500">
        <svg
          viewBox="0 0 1000 520"
          className="w-full h-auto overflow-visible relative z-10 drop-shadow-2xl"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Main Neon Orange Gradient */}
            <linearGradient id="traceGradient" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#FE640E" />
              <stop offset="50%" stopColor="#FF8812" />
              <stop offset="100%" stopColor="#EFEAE2" />
            </linearGradient>

            {/* Glowing Filters */}
            <filter id="neonGlow" x="-40%" y="-40%" width="180%" height="180%">
              <feGaussianBlur stdDeviation="7" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>

            <filter id="orbGlow" x="-60%" y="-60%" width="220%" height="220%">
              <feGaussianBlur stdDeviation="10" result="blur1" />
              <feGaussianBlur stdDeviation="4" result="blur2" />
              <feMerge>
                <feMergeNode in="blur1" />
                <feMergeNode in="blur2" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Heavy Base Track Line */}
          <path
            d={HERO_TRACE_PATH}
            stroke="#28323C"
            strokeWidth="8"
            strokeLinecap="round"
            fill="none"
            opacity={0.75}
          />

          {/* Animated Glowing Laser Stroke */}
          <path
            ref={pathRef}
            d={HERO_TRACE_PATH}
            stroke="url(#traceGradient)"
            strokeWidth="6"
            strokeLinecap="round"
            fill="none"
            filter="url(#neonGlow)"
            style={{
              strokeDasharray: `${pathLength / 3} ${pathLength / 6}`,
              strokeDashoffset: `${dashOffset}`
            }}
          />

          {/* Travelling Laser Energy Orb */}
          <g transform={`translate(${orbPos.x}, ${orbPos.y})`}>
            <circle r="26" fill="#FE640E" opacity="0.45" filter="url(#orbGlow)" />
            <circle r="14" fill="#FF8812" opacity="0.85" filter="url(#orbGlow)" />
            <circle r="6" fill="#EFEAE2" />
          </g>

          {/* 4 Stage Nodes (Apprendre, Jouer, Pratiquer, Maîtriser) */}
          {HERO_MARKERS.map((m, idx) => {
            const isActive = activeStep === idx;
            const stepNum = `0${idx + 1}`;
            const labelOffsetY = idx % 2 === 0 ? -48 : 44;

            return (
              <g
                key={m.id}
                className="transition-all duration-500"
                transform={`translate(${m.x}, ${m.y})`}
              >
                {/* Outer Pulse Wave when Active */}
                {isActive && (
                  <circle
                    r="34"
                    fill="none"
                    stroke="#FE640E"
                    strokeWidth="2.5"
                    opacity="0.85"
                    className="animate-ping"
                  />
                )}

                {/* Central Node Circle */}
                <circle
                  r={isActive ? 20 : 12}
                  fill={isActive ? '#FE640E' : '#28323C'}
                  stroke={isActive ? '#EFEAE2' : '#5C7C93'}
                  strokeWidth={isActive ? '4' : '2.5'}
                  filter={isActive ? 'url(#neonGlow)' : undefined}
                  className="transition-all duration-300"
                />

                {/* Node Center Dot */}
                <circle
                  r={isActive ? 6 : 4}
                  fill={isActive ? '#EFEAE2' : '#7C8894'}
                  className="transition-all duration-300"
                />

                {/* Callout Card / Pill Label */}
                <g
                  transform={`translate(0, ${labelOffsetY})`}
                  className="transition-all duration-300"
                >
                  {/* High Contrast Card Background */}
                  <rect
                    x="-88"
                    y="-23"
                    width="176"
                    height="46"
                    rx="8"
                    fill={isActive ? '#0C1116' : '#151A20'}
                    stroke={isActive ? '#FE640E' : '#28323C'}
                    strokeWidth={isActive ? '2.5' : '1.5'}
                    opacity={isActive ? '0.98' : '0.85'}
                    filter={isActive ? 'url(#neonGlow)' : undefined}
                  />

                  {/* Step Number (01, 02, 03, 04) */}
                  <text
                    x="-74"
                    y="6"
                    fill={isActive ? '#FE640E' : '#5C7C93'}
                    fontSize="14"
                    fontWeight="800"
                    fontFamily="var(--font-martian), monospace"
                  >
                    {stepNum}
                  </text>

                  {/* Step Name (Apprendre, Jouer, Pratiquer, Maîtriser) */}
                  <text
                    x="-42"
                    y="6"
                    fill={isActive ? '#EFEAE2' : '#7C8894'}
                    fontSize="16"
                    fontWeight={isActive ? '800' : '600'}
                    fontFamily="var(--font-archivo), sans-serif"
                    letterSpacing="-0.01em"
                  >
                    {m.label}
                  </text>
                </g>
              </g>
            );
          })}
        </svg>
      </div>
    </div>
  );
};
