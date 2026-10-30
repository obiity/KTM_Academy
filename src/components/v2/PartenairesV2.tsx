'use client';

import React from 'react';
import Image from 'next/image';
import { Handshake } from 'lucide-react';

export const PartenairesV2: React.FC = () => {
  const partenaires = [
    {
      nom: 'ENCAF',
      logo: '/ENCAF_dark.png',
      sizeClass: 'h-12 sm:h-14 w-[180px] sm:w-[210px]'
    },
    {
      nom: 'GIZ',
      logo: '/GIZ_dark.png',
      sizeClass: 'h-12 sm:h-14 w-[180px] sm:w-[210px]'
    },
    {
      nom: 'DER',
      logo: '/DER_dark.png',
      sizeClass: 'h-11 sm:h-[52px] w-[210px] sm:w-[245px]'
    },
    {
      nom: 'FOTTEN',
      logo: '/FOTTEN.png',
      sizeClass: 'h-9 sm:h-11 w-[150px] sm:w-[180px]'
    }
  ];

  // Repeat twice per half so even ultra-wide screens stay continuously filled
  const marqueeHalf = [...partenaires, ...partenaires];

  return (
    <section
      id="partenaires"
      className="bg-[#070C12] text-[#EFEAE2] py-16 lg:py-24 border-b border-[#28323C] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-[#FE640E] font-semibold">
              <Handshake className="w-4 h-4" />
              <span>Écosystème & Partenaires</span>
            </div>
            <h2 className="font-archivo-display text-2xl sm:text-3xl font-bold text-[#EFEAE2] leading-snug">
              Ils accompagnent notre dynamique
            </h2>
          </div>
        </div>
      </div>

      {/* Frameless Infinite Horizontal Logo Marquee */}
      <div
        className="relative w-full overflow-hidden py-4"
        style={{
          maskImage:
            'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)',
          WebkitMaskImage:
            'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)'
        }}
      >
        <div className="flex w-max animate-partner-marquee">
          {[0, 1].map((halfIdx) => (
            <div
              key={halfIdx}
              aria-hidden={halfIdx === 1}
              className="flex shrink-0 items-center gap-16 sm:gap-24 pr-16 sm:pr-24"
            >
              {marqueeHalf.map((p, idx) => (
                <div
                  key={`${halfIdx}-${p.nom}-${idx}`}
                  className={`relative shrink-0 ${p.sizeClass} opacity-85 hover:opacity-100 transition-opacity duration-300`}
                >
                  <Image
                    src={p.logo}
                    alt={p.nom}
                    fill
                    unoptimized
                    className="object-contain"
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
