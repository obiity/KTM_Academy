'use client';

import React from 'react';
import Image from 'next/image';
import { Target, Compass, ShieldCheck } from 'lucide-react';

export const AProposV2: React.FC = () => {
  const equipe = [
    {
      nom: "Mame Diarra Bousso DIOP",
      role: "Directrice Générale",
      photo: "/Mame Diarra Bousso Diop.jpg",
      objectPosition: "object-[center_top]"
    },
    {
      nom: "Ousmane BITÉYE",
      role: "Directeur Artistique",
      photo: "/Ousmane Biteye.jpeg",
      objectPosition: "object-center"
    },
    {
      nom: "Vieux Moussa DIÉDHIOU",
      role: "Directeur Technique",
      photo: "/Vieux Moussa Diédhiou.JPG",
      objectPosition: "object-[center_top]"
    }
  ];

  return (
    <section
      id="a-propos"
      className="bg-[#0E151E] text-[#EFEAE2] py-24 lg:py-32 border-b border-[#28323C]"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <span className="font-mono text-xs uppercase tracking-wider text-[#FE640E] font-semibold">
            06 · Vision & Équipe
          </span>
          <h2 className="font-archivo-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#EFEAE2] leading-tight">
            Une academy sénégalaise fondée sur une expertise solide.
          </h2>
          <p className="text-xl sm:text-2xl text-[#EFEAE2]/85 font-light leading-relaxed">
            Notre ambition : réinventer la formation professionnelle en Afrique de l’Ouest en combinant rigueur didactique et innovation digitale.
          </p>
        </div>

        {/* 3 Blocs Piliers */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <div className="bg-[#151A20] p-8 border border-[#28323C] rounded-[2px]">
            <Target className="w-8 h-8 text-[#FE640E] mb-4" />
            <h3 className="font-archivo-display text-xl font-bold text-[#EFEAE2] mb-2">
              L'impact avant tout
            </h3>
            <p className="text-sm text-[#EFEAE2]/80 leading-relaxed">
              Nous refusons les cours purement théoriques. Chaque programme est conçu pour produire des compétences vérifiables sur le poste de travail.
            </p>
          </div>

          <div className="bg-[#151A20] p-8 border border-[#28323C] rounded-[2px]">
            <Compass className="w-8 h-8 text-[#FE640E] mb-4" />
            <h3 className="font-archivo-display text-xl font-bold text-[#EFEAE2] mb-2">
              Ancrage local à Dakar
            </h3>
            <p className="text-sm text-[#EFEAE2]/80 leading-relaxed">
              Implantée à Dakar (Castor), notre équipe comprend les spécificités des entreprises locales, les contraintes de connectivité et les besoins réels des filières.
            </p>
          </div>

          <div className="bg-[#151A20] p-8 border border-[#28323C] rounded-[2px]">
            <ShieldCheck className="w-8 h-8 text-[#FE640E] mb-4" />
            <h3 className="font-archivo-display text-xl font-bold text-[#EFEAE2] mb-2">
              Le socle KTM Advance
            </h3>
            <p className="text-sm text-[#EFEAE2]/80 leading-relaxed">
              Nous bénéficions de l’héritage méthodologique et des retours d'expérience pionniers de KTM Advance dans les technologies immersives et les serious games.
            </p>
          </div>
        </div>

        {/* Trombinoscope Équipe : Uniquement Nom et Fonction */}
        <div className="mb-12">
          <div className="max-w-2xl mb-10">
            <span className="font-mono text-xs uppercase tracking-wider text-[#FE640E] font-semibold">
              Les visages du projet
            </span>
            <h3 className="font-archivo-display text-2xl sm:text-3xl font-bold text-[#EFEAE2] mt-2">
              Une équipe de spécialistes engagée au quotidien
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {equipe.map((m) => (
              <div
                key={m.nom}
                className="group bg-[#151A20] border border-[#28323C] hover:border-[#FE640E] rounded-[2px] overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1.5 cursor-pointer"
              >
                {/* 4:5 Portrait avec transition noir & blanc -> couleurs + zoom subtil */}
                <div className="relative aspect-[4/5] w-full bg-[#0C1116] overflow-hidden">
                  <Image
                    src={m.photo}
                    alt={m.nom}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className={`object-cover ${m.objectPosition} grayscale group-hover:grayscale-0 group-hover:scale-[1.03] transition-all duration-500 ease-out`}
                  />
                  {/* Dégradé doux qui s'efface au survol */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#151A20] via-transparent to-transparent opacity-75 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none" />
                </div>

                {/* Uniquement Nom et Fonction */}
                <div className="p-5 text-center">
                  <h4 className="font-archivo-display text-lg font-bold text-[#EFEAE2] group-hover:text-[#FE640E] transition-colors duration-200">
                    {m.nom}
                  </h4>
                  <p className="text-xs font-mono uppercase tracking-wider text-[#FE640E] mt-1 font-semibold">
                    {m.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
