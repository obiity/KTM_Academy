import React from 'react';
import { contentFr } from '@/content/fr';
import { SectionHeader } from '../ui/SectionHeader';
import { KpiCounter } from '../ui/KpiCounter';

export const Capacites: React.FC = () => {
  const { capacites } = contentFr;

  return (
    <section id="capacites" className="bg-[#151A20] text-[#EFEAE2] py-24 lg:py-36 border-b border-[#28323C]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <SectionHeader
          title={capacites.titre}
          intro={capacites.intro}
          theme="dark"
        />

        {/* 4 KPI Counters in Martian Mono */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 py-12 border-t border-b border-[#28323C] my-12">
          {capacites.kpi.map((kpi, i) => (
            <KpiCounter
              key={i}
              value={kpi.valeur}
              label={kpi.libelle}
              theme="dark"
            />
          ))}
        </div>

        {/* Domaines d'expérience */}
        <div className="my-12 space-y-6">
          <h3 className="font-archivo-display font-semibold text-xl text-[#EFEAE2]">
            {capacites.domaines_titre}
          </h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {capacites.domaines.map((d, i) => (
              <li key={i} className="bg-[#28323C]/40 p-4 border-l-2 border-[#5C7C93] text-sm text-[#EFEAE2]/90">
                {d}
              </li>
            ))}
          </ul>
        </div>

        {/* Strategic Transparency Note (Full-width Bordered Block in --craie with High Typographic Presence) */}
        <div className="mt-16 bg-[#EFEAE2] text-[#151A20] p-8 lg:p-10 rounded-[2px] border-l-8 border-[#FE640E] shadow-xl space-y-3">
          <h4 className="font-archivo-display font-bold text-xl uppercase tracking-wider text-[#151A20]">
            {capacites.transparence_titre}
          </h4>
          <p className="text-base lg:text-lg italic font-normal leading-relaxed text-[#28323C]">
            « {capacites.transparence_texte} »
          </p>
        </div>
      </div>
    </section>
  );
};
