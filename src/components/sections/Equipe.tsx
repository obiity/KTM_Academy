import React from 'react';
import Image from 'next/image';
import { contentFr } from '@/content/fr';
import { SectionHeader } from '../ui/SectionHeader';

export const Equipe: React.FC = () => {
  const { equipe } = contentFr;

  const teamPhotos = [
    '/Mame Diarra Bousso Diop.jpg',
    '/Vieux Moussa Diédhiou.JPG',
    '/Ousmane Biteye.jpeg'
  ];

  return (
    <section id="equipe" className="bg-[#EFEAE2] text-[#151A20] py-24 lg:py-36 border-b border-[#28323C]/20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <SectionHeader
          title={equipe.titre}
          intro={equipe.intro}
          theme="light"
        />

        {/* 3 Founders Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-12">
          {equipe.membres.map((m, i) => (
            <div
              key={i}
              tabIndex={0}
              className="group bg-[#151A20] text-[#EFEAE2] rounded-[2px] overflow-hidden border border-[#28323C] hover:border-[#FE640E] transition-all duration-300 focus-visible:outline-2 focus-visible:outline-[#5C7C93]"
            >
              {/* 4:5 Studio Portrait with Grayscale -> Full Color transition on hover & focus */}
              <div className="relative aspect-[4/5] bg-[#28323C] overflow-hidden">
                <Image
                  src={teamPhotos[i]}
                  alt={m.nom}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover object-top grayscale group-hover:grayscale-0 group-focus:grayscale-0 group-hover:scale-105 group-focus:scale-105 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#151A20] via-transparent to-transparent opacity-70 group-hover:opacity-40 transition-opacity duration-300 pointer-events-none" />
              </div>

              {/* Info */}
              <div className="p-6 space-y-2">
                <h3 className="font-archivo-display font-bold text-xl text-[#EFEAE2] group-hover:text-[#FE640E] transition-colors">
                  {m.nom}
                </h3>
                <p className="text-sm font-semibold text-[#5C7C93]">
                  {m.role}
                </p>
                <p className="text-xs text-[#7C8894] pt-2 border-t border-[#28323C] leading-relaxed">
                  {m.perimetre}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Clôture & Stats */}
        <div className="pt-8 border-t border-[#28323C]/20 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-base text-[#151A20] font-medium max-prose-width">
            {equipe.cloture}
          </p>
          <div className="flex items-center gap-8">
            {equipe.chiffres.map((c, i) => (
              <div key={i} className="text-center">
                <span className="font-mono text-xl font-bold text-[#FE640E] block" style={{ fontFamily: 'var(--font-martian), monospace' }}>
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
