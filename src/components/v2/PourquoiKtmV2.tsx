'use client';

import React from 'react';
import { Target, Zap, Sliders, Quote } from 'lucide-react';

export const PourquoiKtmV2: React.FC = () => {
  const argumentsList = [
    {
      num: "01",
      icon: Target,
      titre: "Ancrés dans vos métiers",
      texte: "Nous partons de vos objectifs, de vos publics et des situations réelles de travail."
    },
    {
      num: "02",
      icon: Zap,
      titre: "Actifs, pas passifs",
      texte: "Les apprenants comprennent, prennent des décisions et s’entraînent grâce à des activités pratiques."
    },
    {
      num: "03",
      icon: Sliders,
      titre: "Adaptés à votre réalité",
      texte: "Nous combinons présentiel, digital et simulation selon vos contraintes, avec des outils de suivi adaptés."
    }
  ];

  return (
    <section
      id="pourquoi-ktm"
      className="bg-[#0E151E] text-[#EFEAE2] py-24 lg:py-32 border-b border-[#28323C]"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <span className="font-mono text-xs uppercase tracking-wider text-[#FE640E] font-semibold">
            02 · Différenciation
          </span>
          <h2 className="font-archivo-display text-2xl sm:text-3xl lg:text-4xl font-bold text-[#EFEAE2] leading-snug">
            Pourquoi choisir KTM ?
          </h2>
          <p className="text-xl sm:text-2xl text-[#EFEAE2]/90 font-light italic leading-relaxed pt-2 border-l-2 border-[#FE640E] pl-4 lg:pl-6">
            « Vous ne cherchez pas simplement à diffuser un cours. Vous voulez développer des compétences qui se mettent en pratique. »
          </p>
        </div>

        {/* 3 Arguments Clients */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {argumentsList.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.num}
                className="bg-[#151A20] p-8 lg:p-10 border border-[#28323C] hover:border-[#FE640E]/50 rounded-[2px] transition-all duration-300 relative group"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-[2px] bg-[#FE640E]/10 border border-[#FE640E]/20 flex items-center justify-center text-[#FE640E] group-hover:bg-[#FE640E] group-hover:text-[#EFEAE2] transition-colors duration-200">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="font-mono text-xs font-semibold text-[#7C8894]">
                    {item.num}
                  </span>
                </div>

                <h3 className="font-archivo-display text-xl font-bold text-[#EFEAE2] mb-3">
                  {item.titre}
                </h3>
                <p className="text-base text-[#EFEAE2]/80 leading-relaxed">
                  {item.texte}
                </p>
              </div>
            );
          })}
        </div>

        {/* Phrase de clôture officielle brief */}
        <div className="p-8 lg:p-10 bg-[#151A20]/60 border border-[#28323C] rounded-[2px] text-center max-w-4xl mx-auto relative overflow-hidden">
          <div className="absolute top-2 left-6 text-[#28323C] pointer-events-none">
            <Quote className="w-12 h-12 opacity-30" />
          </div>
          <p className="font-archivo-display text-lg sm:text-xl lg:text-2xl text-[#EFEAE2] font-semibold leading-relaxed relative z-10">
            « Chez KTM, la technologie n’est pas une fin en soi. <br className="hidden sm:inline" />
            <span className="text-[#FE640E]">Elle sert la pédagogie, et la pédagogie sert la compétence.</span> »
          </p>
        </div>

      </div>
    </section>
  );
};
