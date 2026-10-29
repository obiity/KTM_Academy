'use client';

import React from 'react';
import { Wrench, MonitorSmartphone, Gamepad2, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export const SolutionsV2: React.FC = () => {
  const offres = [
    {
      id: "former-metiers",
      icon: Wrench,
      titre: "Former aux métiers",
      description: "Parcours techniques, ateliers pratiques et bootcamps pour développer les compétences recherchées sur le terrain.",
      points: [
        "Ateliers et bootcamps intensifs",
        "Gestes techniques et maintenance",
        "Formateurs de terrain certifiés"
      ]
    },
    {
      id: "digitaliser-formations",
      icon: MonitorSmartphone,
      titre: "Digitaliser les formations",
      description: "E-learning, contenus interactifs et plateforme LMS pour déployer et suivre les parcours.",
      points: [
        "Plateforme LMS & parcours sur mesure",
        "Modules interactifs et microlearning",
        "Suivi des cohortes et progression"
      ]
    },
    {
      id: "pratiquer-autrement",
      icon: Gamepad2,
      titre: "Faire pratiquer autrement",
      description: "Serious games, simulations et réalité virtuelle pour s’exercer dans des situations professionnelles.",
      points: [
        "Simulations de pannes & gestes critiques",
        "Mises en situation en réalité virtuelle",
        "Entraînement sans risque matériel"
      ]
    }
  ];

  return (
    <section
      id="solutions"
      className="bg-[#0A1017] text-[#EFEAE2] py-24 lg:py-32 border-b border-[#28323C]"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <span className="font-mono text-xs uppercase tracking-wider text-[#FE640E] font-semibold">
            03 · Offres
          </span>
          <h2 className="font-archivo-display text-2xl sm:text-3xl lg:text-4xl font-bold text-[#EFEAE2] leading-snug">
            Trois façons de travailler avec KTM
          </h2>
          <p className="text-xl sm:text-2xl text-[#EFEAE2]/85 font-light">
            « Une réponse adaptée à votre besoin de formation. »
          </p>
        </div>

        {/* 3 Cartes d'Offres Lisibles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-14">
          {offres.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="bg-[#151A20] p-8 lg:p-10 border border-[#28323C] hover:border-[#FE640E]/60 rounded-[2px] flex flex-col justify-between transition-all duration-300 group"
              >
                <div>
                  <div className="w-14 h-14 rounded-[2px] bg-[#FE640E]/10 border border-[#FE640E]/20 flex items-center justify-center text-[#FE640E] mb-6 group-hover:scale-105 transition-transform duration-200">
                    <Icon className="w-7 h-7" />
                  </div>

                  <h3 className="font-archivo-display text-2xl font-bold text-[#EFEAE2] mb-4">
                    {item.titre}
                  </h3>

                  <p className="text-base text-[#EFEAE2]/80 leading-relaxed mb-6">
                    {item.description}
                  </p>

                  <ul className="space-y-2.5 pt-4 border-t border-[#28323C]/70">
                    {item.points.map((pt, idx) => (
                      <li key={idx} className="flex items-center gap-2.5 text-sm text-[#7C8894]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#FE640E]" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-8">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#FE640E] hover:text-[#FF8812] transition-colors"
                  >
                    <span>Explorer ce format</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Lien ancre vers la section dédiée VOKSIA */}
        <div className="text-center pt-2">
          <a
            href="#voksia"
            className="inline-flex items-center gap-3 bg-[#151A20] hover:bg-[#28323C]/50 border border-[#28323C] hover:border-[#5C7C93] text-[#EFEAE2] px-8 py-4 rounded-[2px] text-base font-semibold transition-all duration-200"
          >
            <span>Découvrir notre environnement digital VOKSIA</span>
            <ArrowRight className="w-4 h-4 text-[#FE640E]" />
          </a>
        </div>

      </div>
    </section>
  );
};
