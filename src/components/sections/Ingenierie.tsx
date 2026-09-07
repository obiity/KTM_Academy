import React from 'react';
import { contentFr } from '@/content/fr';
import { SectionHeader } from '../ui/SectionHeader';
import { PencilRuler, Sliders, Globe2, Smartphone, BrainCircuit, Sparkles } from 'lucide-react';

export const Ingenierie: React.FC = () => {
  const { ingenierie } = contentFr;

  const pilierIcons = [PencilRuler, Sliders, Globe2, Smartphone, BrainCircuit];

  return (
    <section id="ingenierie" className="bg-[#EFEAE2] text-[#151A20] py-24 lg:py-36 border-b border-[#28323C]/20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <SectionHeader
          title={ingenierie.titre}
          intro={ingenierie.sous_titre}
          theme="light"
        />

        {/* 5 Engineering Pillars Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-12">
          {ingenierie.piliers.map((pilier, i) => {
            const IconComp = pilierIcons[i] || PencilRuler;
            const isFeatured = i === 0 || i === 4;

            return (
              <div
                key={i}
                className={`bg-[#151A20] text-[#EFEAE2] p-8 rounded-[4px] border border-[#28323C] flex flex-col justify-between space-y-6 hover:border-[#FE640E] transition-all duration-300 group shadow-lg relative overflow-hidden ${
                  isFeatured ? 'lg:col-span-1 border-t-4 border-t-[#FE640E]' : ''
                }`}
              >
                {/* Top Corner Accent Glow */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#FE640E] to-[#FF8812] opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="space-y-4">
                  {/* Header Row: Step Number & Retro-lit Icon */}
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold text-[#FE640E] bg-[#0C1116] border border-[#FE640E]/30 px-3 py-1 rounded-[3px]">
                      0{i + 1} / PILIER
                    </span>
                    <div className="p-3 bg-[#0C1116] text-[#FE640E] rounded-[4px] border border-[#28323C] group-hover:scale-110 group-hover:border-[#FE640E] transition-all duration-300">
                      <IconComp className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="font-archivo-display font-bold text-xl text-[#EFEAE2] group-hover:text-[#FE640E] transition-colors leading-snug">
                    {pilier.titre}
                  </h3>
                </div>

                <p className="text-sm text-[#7C8894] group-hover:text-[#EFEAE2]/90 leading-relaxed transition-colors pt-4 border-t border-[#28323C]">
                  {pilier.texte}
                </p>
              </div>
            );
          })}
        </div>

        {/* Conviction & Impact Metrics Banner */}
        <div className="mt-16 bg-[#151A20] text-[#EFEAE2] p-8 lg:p-12 rounded-[4px] border-l-4 border-[#FE640E] shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 text-[#FE640E] text-xs font-mono uppercase tracking-widest font-semibold">
              <Sparkles className="w-4 h-4" />
              <span>NOTRE CONVICTION PÉDAGOGIQUE</span>
            </div>
            <h3 className="font-archivo-display font-bold text-2xl lg:text-3xl leading-snug text-[#EFEAE2]">
              « {ingenierie.conviction} »
            </h3>
          </div>

          <div className="flex items-center gap-8 lg:gap-12 shrink-0 border-t lg:border-t-0 lg:border-l border-[#28323C] pt-6 lg:pt-0 lg:pl-10 w-full lg:w-auto justify-around">
            {ingenierie.chiffres.map((c, i) => (
              <div key={i} className="text-center">
                <span className="font-mono text-2xl lg:text-3xl font-bold text-[#FE640E] block" style={{ fontFamily: 'var(--font-martian), monospace' }}>
                  {c.valeur}
                </span>
                <span className="text-xs text-[#7C8894] block mt-1">
                  {c.libelle}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
