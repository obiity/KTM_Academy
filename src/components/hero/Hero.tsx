'use client';

import React from 'react';
import { contentFr } from '@/content/fr';
import { Button } from '../ui/Button';
import { Trace } from './Trace';
import { Telemetry } from './Telemetry';

export const Hero: React.FC = () => {
  const headlineLines = [
    "Former autrement.",
    "Déployer à grande échelle."
  ];

  return (
    <section
      id="hero"
      className="relative min-h-screen w-full bg-[#151A20] text-[#EFEAE2] flex flex-col justify-between pt-28 lg:pt-36 pb-12 overflow-hidden border-b border-[#28323C]"
    >
      {/* Background Vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 70% 30%, transparent 40%, #0C1116 100%)'
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full flex-1 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        {/* Left Column (6 Cols) - Text & Actions */}
        <div className="lg:col-span-6 xl:col-span-6 space-y-8">
          {/* Clipped Mask Headlines Reveal */}
          <h1 className="space-y-1">
            <span className="block overflow-hidden py-1">
              <span className="block text-hero-headline font-archivo-display tracking-tight">
                <span className="font-black text-[#EFEAE2]">Former </span>
                <span className="font-light italic text-[#FE640E]">autrement.</span>
              </span>
            </span>
            <span className="block overflow-hidden py-1">
              <span className="block text-hero-headline font-archivo-display tracking-tight">
                <span className="font-black text-[#EFEAE2]">Déployer </span>
                <span className="font-light text-[#EFEAE2]/60">à </span>
                <span className="font-black text-[#FE640E]">grande échelle.</span>
              </span>
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-base lg:text-lg text-[#EFEAE2]/85 leading-relaxed max-prose-width font-normal">
            {contentFr.identite.descriptif}
          </p>

          {/* Actions */}
          <div className="flex flex-wrap items-center gap-6 pt-2">
            <Button href="#contact" variant="primary">
              Démarrer un pilote
            </Button>
            <Button href="#services" variant="link">
              Voir le catalogue
            </Button>
          </div>
        </div>

        {/* Right Column (6 Cols) - Gesture Trace */}
        <div className="lg:col-span-6 xl:col-span-6 flex items-center justify-center">
          <Trace />
        </div>
      </div>

      {/* Bottom Telemetry Readout */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full pt-8 relative z-10">
        <Telemetry />
      </div>
    </section>
  );
};
