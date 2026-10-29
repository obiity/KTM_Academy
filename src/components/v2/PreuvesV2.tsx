'use client';

import React from 'react';
import Image from 'next/image';
import { ShieldCheck, Info, ExternalLink, CheckCircle } from 'lucide-react';
import Link from 'next/link';

export const PreuvesV2: React.FC = () => {
  return (
    <section
      id="preuves"
      className="bg-[#0E151E] text-[#EFEAE2] py-24 lg:py-32 border-b border-[#28323C]"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <span className="font-mono text-xs uppercase tracking-wider text-[#FE640E] font-semibold">
            04 · Réalisations concrètes
          </span>
          <h2 className="font-archivo-display text-2xl sm:text-3xl lg:text-4xl font-bold text-[#EFEAE2] leading-snug">
            Montrer plutôt que raconter
          </h2>
          <p className="text-xl sm:text-2xl text-[#EFEAE2]/85 font-light">
            « Des expériences conçues pour des situations réelles. »
          </p>
        </div>

        {/* CAS PRIORITAIRE (Pleine largeur mise en valeur) */}
        <div className="bg-[#151A20] border border-[#28323C] rounded-[2px] overflow-hidden mb-12 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* Visual Capture (7 Cols) */}
            <div className="lg:col-span-7 relative min-h-[360px] lg:min-h-[460px] bg-[#0C1116]">
              <Image
                src="/simulation_quest3_diagnostic_v3.jpg"
                alt="Mécanicien en tenue KTM Skills Academy équipé d'un casque Meta Quest 3 dépannant une panne en réalité virtuelle"
                fill
                className="object-cover object-center"
              />
              <div className="absolute top-4 left-4 bg-[#0C1116]/90 backdrop-blur-md px-3 py-1.5 rounded-[2px] border border-[#FE640E]/40 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#FE640E] animate-pulse" />
                <span className="font-mono text-xs font-semibold text-[#EFEAE2]">CAS PRIORITAIRE · SIMULATION</span>
              </div>
            </div>

            {/* Description & Technical Breakdown (5 Cols) */}
            <div className="lg:col-span-5 p-8 lg:p-10 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="inline-block font-mono text-xs text-[#FE640E] uppercase tracking-wider">
                  Diagnostic automobile & industriel
                </div>
                <h3 className="font-archivo-display text-2xl lg:text-3xl font-bold text-[#EFEAE2]">
                  Simulation de diagnostic & mécatronique
                </h3>

                <div className="space-y-4 pt-2 text-sm text-[#EFEAE2]/80 leading-relaxed">
                  <div>
                    <h4 className="font-semibold text-[#EFEAE2] text-xs uppercase tracking-wider text-[#7C8894] mb-1">
                      Besoin traité :
                    </h4>
                    <p>
                      Former au diagnostic de pannes complexes et de systèmes électroniques sans risquer d’endommager le matériel réel ni exposer les apprenants à des risques.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-[#EFEAE2] text-xs uppercase tracking-wider text-[#7C8894] mb-1">
                      Situation pratiquée :
                    </h4>
                    <p>
                      Relevés oscilloscopes 4 voies, analyse OBD-II en direct, lecture de schémas de câblage et prise de décision sous contrainte de temps.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-[#EFEAE2] text-xs uppercase tracking-wider text-[#7C8894] mb-1">
                      Rôle exact de KTM :
                    </h4>
                    <p>
                      Scénarisation didactique complète, modélisation des boucles de feedback et intégration d'une grille d'évaluation des compétences acquises.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-[#28323C] flex items-center justify-between">
                <span className="inline-flex items-center gap-2 text-xs font-medium text-[#7C8894]">
                  <CheckCircle className="w-4 h-4 text-[#FE640E]" />
                  Validé en conditions réelles
                </span>
                <a
                  href="#contact"
                  className="text-xs font-semibold text-[#FE640E] hover:text-[#FF8812] underline underline-offset-4"
                >
                  Demander une démo
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* 2 EXEMPLES SECONDAIRES CONCRETS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          
          {/* EXEMPLE 2 : Serious Game & Apprentissage Interactif sur Tablette */}
          <div className="bg-[#151A20] border border-[#28323C] rounded-[2px] overflow-hidden flex flex-col group">
            <div className="relative aspect-[16/10] w-full bg-[#0C1116]">
              <Image
                src="/adolescents_tablettes_ktm.jpg"
                alt="Adolescents concentrés en formation technique sur tablettes tactiles portant des polos avec logo KTM Skills Academy"
                fill
                className="object-cover group-hover:scale-[1.02] transition-transform duration-300"
              />
              <div className="absolute top-3 left-3 bg-[#0C1116]/90 px-2.5 py-1 rounded-[2px] border border-[#28323C]">
                <span className="font-mono text-[11px] font-semibold text-[#FE640E]">EXEMPLE 2 · EXERCICES & TABLETTES</span>
              </div>
            </div>
            <div className="p-8 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="font-archivo-display text-xl font-bold text-[#EFEAE2] mb-3">
                  Serious games & environnements immersifs
                </h3>
                <p className="text-sm text-[#EFEAE2]/80 leading-relaxed mb-4">
                  Mises en situation virtuelles et exercices interactifs sur tablettes permettant aux apprenants d’expérimenter la résolution de pannes, les protocoles de sécurité et la prise de décision en équipe.
                </p>
              </div>
              <div className="pt-4 border-t border-[#28323C] text-xs text-[#7C8894]">
                <strong>Rôle :</strong> Scénarisation didactique, conception des exercices numériques et évaluation des compétences.
              </div>
            </div>
          </div>

          {/* EXEMPLE 3 : Bootcamp & Séquence pratique atelier à Dakar */}
          <div className="bg-[#151A20] border border-[#28323C] rounded-[2px] overflow-hidden flex flex-col group">
            <div className="relative aspect-[16/10] w-full bg-[#0C1116]">
              <Image
                src="/bootcamp_atelier_ktm.jpg"
                alt="Bootcamp et séquence de pratique métier en atelier professionnel aux couleurs de KTM Skills Academy"
                fill
                className="object-cover group-hover:scale-[1.02] transition-transform duration-300"
              />
              <div className="absolute top-3 left-3 bg-[#0C1116]/90 px-2.5 py-1 rounded-[2px] border border-[#28323C]">
                <span className="font-mono text-[11px] font-semibold text-[#FE640E]">EXEMPLE 3 · BOOTCAMP TERRAIN</span>
              </div>
            </div>
            <div className="p-8 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="font-archivo-display text-xl font-bold text-[#EFEAE2] mb-3">
                  Bootcamp métier & ateliers d'immersion
                </h3>
                <p className="text-sm text-[#EFEAE2]/80 leading-relaxed mb-4">
                  Séquences intensives de formation technique associant tablettes de diagnostic numérique et intervention sur bancs d'essais réels avec des formateurs chevronnés.
                </p>
              </div>
              <div className="pt-4 border-t border-[#28323C] text-xs text-[#7C8894]">
                <strong>Rôle :</strong> Ingénierie des livrets d’exercices, encadrement et certification pratique.
              </div>
            </div>
          </div>

        </div>

        {/* PRÉCAUTION ÉTHIQUE & SOCLE D'EXPÉRIENCE (CONFORME AU BRIEF) */}
        <div className="p-6 lg:p-7 bg-[#151A20]/40 border border-[#28323C] rounded-[2px] flex items-start gap-4">
          <Info className="w-5 h-5 text-[#5C7C93] shrink-0 mt-0.5" />
          <p className="text-xs sm:text-sm text-[#7C8894] leading-relaxed">
            <strong className="text-[#EFEAE2]">Filiation et rigueur professionnelle :</strong> Les réalisations historiques de KTM Advance sont présentées comme le socle d’expérience et de savoir-faire ayant nourri la création de KTM Skills Academy, avec une équipe ancrée localement au Sénégal.
          </p>
        </div>

      </div>
    </section>
  );
};
