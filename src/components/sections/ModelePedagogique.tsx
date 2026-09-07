import React from 'react';
import { contentFr } from '@/content/fr';
import { SectionHeader } from '../ui/SectionHeader';
import { BookOpen, Gamepad2, Wrench, Trophy } from 'lucide-react';

export const ModelePedagogique: React.FC = () => {
  const { modele_pedagogique } = contentFr;

  const etapeIcons = [BookOpen, Gamepad2, Wrench, Trophy];

  return (
    <section id="modele" className="bg-[#151A20] text-[#EFEAE2] py-24 lg:py-36 border-b border-[#28323C]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <SectionHeader
          title={modele_pedagogique.titre}
          intro={modele_pedagogique.intro}
          theme="dark"
        />

        {/* 4 Stages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 my-12">
            {modele_pedagogique.etapes.map((etape, i) => {
              const IconComp = etapeIcons[i] || BookOpen;
              return (
                <div
                  key={i}
                  className="bg-[#28323C]/40 border border-[#28323C] p-8 rounded-[4px] space-y-4 hover:border-[#FE640E] transition-all duration-300 group hover:bg-[#28323C]/60"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-sm font-bold text-[#FE640E] bg-[#151A20] px-3 py-1 border border-[#FE640E]/40 rounded-[3px]">
                      0{i + 1}
                    </span>
                    <div className="p-2.5 bg-[#151A20] text-[#FE640E] rounded-[4px] border border-[#28323C] group-hover:scale-110 transition-transform">
                      <IconComp className="w-5 h-5" />
                    </div>
                  </div>
                  <h3 className="font-archivo-display font-bold text-2xl text-[#EFEAE2] group-hover:text-[#FE640E] transition-colors">
                    {etape.titre}
                  </h3>
                  <p className="text-sm text-[#7C8894] group-hover:text-[#EFEAE2]/90 leading-relaxed transition-colors">
                    {etape.texte}
                  </p>
                </div>
              );
            })}
          </div>

        {/* Clôture */}
        <div className="pt-8 border-t border-[#28323C] flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-base lg:text-lg font-medium text-[#EFEAE2]/90">
            {modele_pedagogique.cloture}
          </p>
          <div className="flex items-center gap-8">
            {modele_pedagogique.chiffres.map((c, i) => (
              <div key={i} className="text-center">
                <span className="font-mono text-2xl font-bold text-[#FE640E] block" style={{ fontFamily: 'var(--font-martian), monospace' }}>
                  {c.valeur}
                </span>
                <span className="text-xs text-[#7C8894] block">
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
