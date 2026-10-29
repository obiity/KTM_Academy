'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, CheckCircle2, ShieldCheck, Info } from 'lucide-react';

export default function RealisationsPage() {
  const caseStudies = [
    {
      id: "mecatronique",
      tag: "Cas Prioritaire · Simulation Virtuelle",
      titre: "Simulateur interactif de diagnostic mécatronique & moteur",
      image: "/simulation_quest3_diagnostic_v3.jpg",
      contexte: "La formation pratique au diagnostic de pannes complexes sur bancs d'essais moteurs présentait des coûts d'immobilisation élevés et des risques d'endommagement.",
      reponse: "Développement d’une simulation logicielle intégrant schémas électriques interactifs, analyseur OBD-II en direct, oscilloscope 4 voies et simulation de pannes réelles.",
      resultats: "Apprentissage des gestes et méthodes de dépannage sans immobilisation de véhicules, multiplication par 4 du nombre de répétitions par apprenant.",
      roleKtm: "Ingénierie didactique, modélisation des boucles de pannes, scénarisation des exercices et grille d'évaluation."
    },
    {
      id: "serious-games",
      tag: "Exemple 2 · Serious Game & VR Immersif",
      titre: "Serious games & simulateurs d'interventions techniques",
      image: "/adolescents_tablettes_ktm.jpg",
      contexte: "Nécessité d'entraîner les équipes aux procédures d'urgence et à la prise de décision critique sans exposer les collaborateurs ni immobiliser d'infrastructures réelles.",
      reponse: "Création d'environnements virtuels 3D interactifs avec scénarios décisionnels sous contrainte et évaluation continue des réflexes de sécurité.",
      resultats: "Diminution drastique des erreurs de manipulation et assimilation rapide des protocoles techniques complexes.",
      roleKtm: "Scénarisation didactique, modélisation 3D et intégration de la grille d'évaluation des compétences."
    },
    {
      id: "bootcamp",
      tag: "Exemple 3 · Pratique Terrain",
      titre: "Bootcamps techniques & Ateliers pratiques en situation réelle",
      image: "/bootcamp_atelier_ktm.jpg",
      contexte: "Besoin de renforcer rapidement les compétences opérationnelles de techniciens avant affectation sur des chantiers ou ateliers industriels.",
      reponse: "Organisation de bootcamps intensifs en atelier avec utilisation conjointe de tablettes de diagnostic numérique et d'outillages mécaniques réels.",
      resultats: "Autonomie opérationnelle immédiate des promotions formées, encadrement direct par des maîtres-praticiens.",
      roleKtm: "Conception des livrets d’ateliers, encadrement technique, logistique pédagogique et délivrance des certifications."
    }
  ];

  return (
    <div className="bg-[#0A1017] text-[#EFEAE2] min-h-screen pt-28 lg:pt-36 pb-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Breadcrumb */}
        <div className="mb-6 flex items-center gap-3 text-xs font-mono text-[#FE640E]">
          <Link href="/" className="hover:underline">Accueil</Link>
          <span>/</span>
          <span>Nos Réalisations</span>
        </div>

        {/* Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <h1 className="font-archivo-display text-4xl sm:text-5xl font-black text-[#EFEAE2] leading-tight">
            Des preuves concrètes pour des situations réelles.
          </h1>
          <p className="text-xl text-[#EFEAE2]/85 font-light">
            Découvrez comment nous concevons des environnements d’apprentissage ancrés dans les réalités de terrain.
          </p>
        </div>

        {/* Filiation & Déclaration d'Attribution */}
        <div className="p-6 bg-[#151A20] border border-[#28323C] rounded-[2px] mb-16 flex items-start gap-4">
          <Info className="w-5 h-5 text-[#5C7C93] shrink-0 mt-0.5" />
          <p className="text-sm text-[#7C8894] leading-relaxed">
            <strong className="text-[#EFEAE2]">Attribution et transparence :</strong> Les savoir-faire et méthodologies présentés ici s’appuient sur l’expérience historique cumulée au sein de KTM Advance et réinvestie aujourd’hui au bénéfice exclusif de KTM Skills Academy au Sénégal.
          </p>
        </div>

        {/* Case Studies List */}
        <div className="space-y-20 mb-24">
          {caseStudies.map((cs, idx) => (
            <div
              key={cs.id}
              className="bg-[#151A20] border border-[#28323C] rounded-[2px] overflow-hidden shadow-2xl"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12">
                <div className="lg:col-span-7 relative min-h-[340px] lg:min-h-[460px] bg-[#0C1116]">
                  <Image
                    src={cs.image}
                    alt={cs.titre}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-[#0C1116]/90 px-3 py-1.5 rounded-[2px] border border-[#28323C]">
                    <span className="font-mono text-xs font-semibold text-[#FE640E]">
                      {cs.tag}
                    </span>
                  </div>
                </div>

                <div className="lg:col-span-5 p-8 lg:p-10 flex flex-col justify-between space-y-6">
                  <div>
                    <h2 className="font-archivo-display text-2xl font-bold text-[#EFEAE2] mb-4">
                      {cs.titre}
                    </h2>

                    <div className="space-y-4 text-sm text-[#EFEAE2]/80 leading-relaxed">
                      <div>
                        <h3 className="font-semibold text-xs uppercase tracking-wider text-[#7C8894] mb-1">
                          Le problème à résoudre :
                        </h3>
                        <p>{cs.contexte}</p>
                      </div>

                      <div>
                        <h3 className="font-semibold text-xs uppercase tracking-wider text-[#7C8894] mb-1">
                          La réponse KTM :
                        </h3>
                        <p>{cs.reponse}</p>
                      </div>

                      <div>
                        <h3 className="font-semibold text-xs uppercase tracking-wider text-[#7C8894] mb-1">
                          Ce qui a été démontré :
                        </h3>
                        <p>{cs.resultats}</p>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-[#28323C]">
                    <span className="block text-[11px] font-mono text-[#7C8894] uppercase tracking-wider mb-1">
                      Rôle exact de KTM Skills Academy
                    </span>
                    <p className="text-xs text-[#EFEAE2] font-medium">
                      {cs.roleKtm}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center p-12 bg-[#0E151E] border border-[#28323C] rounded-[2px]">
          <h3 className="font-archivo-display text-2xl sm:text-3xl font-bold text-[#EFEAE2] mb-3">
            Vous souhaitez voir une démonstration en direct ?
          </h3>
          <p className="text-base text-[#EFEAE2]/80 max-w-xl mx-auto mb-8">
            Prenez rendez-vous pour tester nos simulateurs ou découvrir la plateforme VOKSIA lors d'un échange personnalisé.
          </p>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-3 bg-[#FE640E] hover:bg-[#FF8812] text-[#EFEAE2] px-8 py-4 rounded-[2px] font-semibold text-base shadow-lg transition-all"
          >
            <span>Demander un diagnostic</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </div>
  );
}
