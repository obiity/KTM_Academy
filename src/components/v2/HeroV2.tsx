'use client';

import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Trace } from '@/components/hero/Trace';

export const HeroV2: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative min-h-[92vh] w-full bg-[#0A1017] text-[#EFEAE2] flex flex-col justify-center pt-28 lg:pt-36 pb-16 overflow-hidden border-b border-[#28323C]/70"
    >
      {/* Background Video */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="w-full h-full object-cover object-center"
        >
          <source src="/Video.mp4" type="video/mp4" />
        </video>
        {/* Contrast Overlays for Editorial & Header Readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A1017]/90 via-[#0A1017]/70 to-[#0A1017]/45" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A1017]/75 via-transparent to-[#0A1017]/90" />
      </div>

      {/* Subtle Background Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-[#FE640E]/[0.06] rounded-full blur-[140px] pointer-events-none z-[1]" />
      <div className="absolute -top-24 right-0 w-[500px] h-[400px] bg-[#5C7C93]/[0.08] rounded-full blur-[120px] pointer-events-none z-[1]" />

      <div className="max-w-[1440px] mx-auto px-6 lg:px-10 xl:px-12 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 xl:gap-12 items-center">
          
          {/* Left Column (6 cols): Editorial Content Conforming to Brief V2 */}
          <div className="lg:col-span-6 space-y-6 relative z-20">
            
            {/* Surtitre Officiel Brief */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#151A20] border border-[#28323C] text-xs font-medium text-[#FE640E] tracking-wide">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FE640E] animate-pulse" />
              <span>KTM Skills Academy · Formation professionnelle · Innovation pédagogique</span>
            </div>

            {/* Titre H1 Officiel Brief */}
            <h1 className="font-archivo-display text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.08] text-[#EFEAE2]">
              Former autrement.{' '}
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#FE640E] to-[#FF9342]">
                Transformer les compétences.
              </span>
            </h1>

            {/* Texte Officiel Brief */}
            <p className="text-lg lg:text-xl text-[#EFEAE2]/85 leading-relaxed max-w-xl font-normal">
              Nous concevons des formations concrètes et interactives qui rapprochent l’apprentissage de la réalité professionnelle : parcours digitaux, mises en situation et expériences immersives.
            </p>

            {/* Public Cible Officiel Brief */}
            <div className="pt-2 pb-1">
              <div className="inline-flex items-center gap-2.5 text-[13px] xl:text-sm text-[#9AA6B2] font-medium bg-[#151A20]/85 backdrop-blur-sm px-4 py-2.5 rounded-[2px] border border-[#28323C]/60 md:whitespace-nowrap">
                <CheckCircle2 className="w-4 h-4 text-[#FE640E] shrink-0" />
                <span>
                  <strong className="text-[#EFEAE2] font-semibold">Pour :</strong> Entreprises, institutions publiques, centres de formation, ONG et partenaires au développement.
                </span>
              </div>
            </div>

            {/* Actions : 1 Bouton principal unique + 1 Lien secondaire */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 pt-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-3 bg-[#FE640E] hover:bg-[#FF8812] text-[#EFEAE2] px-7 py-4 rounded-[2px] font-semibold text-base shadow-lg shadow-[#FE640E]/20 hover:shadow-[#FE640E]/30 transition-all duration-200 active:translate-y-[1px]"
              >
                <span>Demander un diagnostic</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#preuves"
                className="inline-flex items-center gap-2 text-sm text-[#EFEAE2]/90 hover:text-[#FE640E] font-medium py-3 px-2 underline underline-offset-8 decoration-[#28323C] hover:decoration-[#FE640E] transition-colors"
              >
                <span>Voir nos réalisations</span>
              </a>
            </div>
          </div>

          {/* Right Column (6 cols): Animated Interactive Trace (Apprendre, Jouer, Pratiquer, Maîtriser) */}
          <div className="lg:col-span-6 flex items-center justify-start relative lg:-mt-16 xl:-mt-20">
            <Trace />
          </div>

        </div>
      </div>
    </section>
  );
};
