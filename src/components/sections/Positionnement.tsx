import React from 'react';
import { contentFr } from '@/content/fr';
import { SectionHeader } from '../ui/SectionHeader';

export const Positionnement: React.FC = () => {
  const { positionnement } = contentFr;

  return (
    <section id="positionnement" className="bg-[#EFEAE2] text-[#151A20] py-24 lg:py-36 border-b border-[#28323C]/20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <SectionHeader
          title={positionnement.titre}
          theme="light"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Channel (7 Cols) - Prose & Positionnement */}
          <div className="lg:col-span-7 space-y-8">
            <p className="text-lg lg:text-xl font-normal leading-relaxed text-[#151A20] max-prose-width">
              {positionnement.corps}
            </p>
            <p className="text-base text-[#28323C] leading-relaxed max-prose-width">
              {positionnement.positionnement}
            </p>
            <p className="text-base font-medium text-[#FE640E] max-prose-width">
              {positionnement.ambition}
            </p>
          </div>

          {/* Right Channel (5 Cols) - Large Mission Pull-Quote */}
          <div className="lg:col-span-5 bg-[#151A20] text-[#EFEAE2] p-8 lg:p-10 rounded-[2px] shadow-lg border-l-4 border-[#FE640E]">
            <blockquote className="font-archivo-display font-semibold text-2xl lg:text-3xl leading-snug tracking-tight">
              « {positionnement.mission} »
            </blockquote>
          </div>
        </div>

        {/* 3 Values in Horizontal Row separated by 1px rules (NO CARDS) */}
        <div className="mt-20 border-t border-b border-[#28323C]/30 divide-y md:divide-y-0 md:divide-x divide-[#28323C]/30 grid grid-cols-1 md:grid-cols-3">
          {positionnement.valeurs.map((valeur, i) => (
            <div key={i} className="py-8 md:px-8 first:pl-0 last:pr-0 space-y-2">
              <h3 className="font-archivo-display font-bold text-xl text-[#151A20]">
                {valeur.titre}
              </h3>
              <p className="text-base text-[#7C8894]">
                {valeur.texte}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
