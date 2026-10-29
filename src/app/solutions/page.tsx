'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Wrench, MonitorSmartphone, Gamepad2, ArrowRight, CheckCircle2, HelpCircle, Layers, Sparkles } from 'lucide-react';

export default function SolutionsPage() {
  // Mini-orienteur state
  const [selectedProfile, setSelectedProfile] = useState<'metiers' | 'digital' | 'immersif' | null>('digital');

  const profileResults = {
    metiers: {
      titre: "Recommandation : Parcours Métiers & Bootcamps Techniques",
      description: "Idéal pour former des techniciens opérationnels immédiatement sur vos équipements réels, en ateliers immersifs encadrés par des experts de terrain à Dakar.",
      format: "Présentiel intensif & ateliers pratiques",
      delai: "Modules de 2 à 8 semaines",
      action: "Demander un cadrage de bootcamp"
    },
    digital: {
      titre: "Recommandation : Digitalisation de formations & Plateforme VOKSIA",
      description: "Parfait pour démultiplier l'impact auprès de centaines d'apprenants répartis sur plusieurs sites, avec micro-learning vidéo et suivi personnalisé.",
      format: "Plateforme LMS VOKSIA + E-learning interactif",
      delai: "Déploiement en 3 à 6 semaines",
      action: "Demander un accès démo VOKSIA"
    },
    immersif: {
      titre: "Recommandation : Serious Games & Simulations VR",
      description: "Conçu pour l'entraînement aux procédures critiques, au diagnostic de pannes complexes et à la sécurité sans risque matériel ni humain.",
      format: "Simulateur 3D / Réalité Virtuelle / Serious Game",
      delai: "Conception sur mesure selon cahier des charges",
      action: "Tester une simulation pilote"
    }
  };

  return (
    <div className="bg-[#0A1017] text-[#EFEAE2] min-h-screen pt-28 lg:pt-36 pb-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Breadcrumb / Section tag */}
        <div className="mb-6 flex items-center gap-3 text-xs font-mono text-[#FE640E]">
          <Link href="/" className="hover:underline">Accueil</Link>
          <span>/</span>
          <span>Solutions de formation</span>
        </div>

        {/* Hero de la page Solutions */}
        <div className="max-w-3xl mb-20 space-y-4">
          <h1 className="font-archivo-display text-4xl sm:text-5xl font-black text-[#EFEAE2] leading-tight">
            Des réponses concrètes adaptées à vos objectifs.
          </h1>
          <p className="text-xl text-[#EFEAE2]/85 leading-relaxed font-light">
            Découvrez nos 3 familles d’offres, testez notre mini-orienteur de besoin et découvrez l’environnement numérique VOKSIA.
          </p>
        </div>

        {/* INTERACTION DU BRIEF : MINI-ORIENTEUR « Quel est votre besoin ? » (3 choix maximum) */}
        <div className="bg-[#151A20] border border-[#28323C] rounded-[2px] p-8 lg:p-12 mb-24 shadow-2xl relative">
          <div className="max-w-2xl mb-8 space-y-2">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#FE640E]">
              <HelpCircle className="w-4 h-4" />
              <span>Mini-orienteur de décision</span>
            </div>
            <h2 className="font-archivo-display text-2xl sm:text-3xl font-bold text-[#EFEAE2]">
              Quel est votre besoin prioritaire ?
            </h2>
            <p className="text-sm text-[#7C8894]">
              Sélectionnez votre enjeu pour obtenir immédiatement le format pédagogique le plus pertinent.
            </p>
          </div>

          {/* 3 Choix Clairs */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <button
              onClick={() => setSelectedProfile('metiers')}
              className={`p-6 text-left rounded-[2px] border transition-all duration-200 ${
                selectedProfile === 'metiers'
                  ? 'bg-[#FE640E]/10 border-[#FE640E] text-[#EFEAE2]'
                  : 'bg-[#0C1116] border-[#28323C] hover:border-[#5C7C93] text-[#EFEAE2]/80'
              }`}
            >
              <Wrench className="w-6 h-6 text-[#FE640E] mb-3" />
              <h3 className="font-bold text-base text-[#EFEAE2] mb-1">
                Former des compétences terrain
              </h3>
              <p className="text-xs text-[#7C8894] leading-relaxed">
                Vos collaborateurs ou étudiants doivent maîtriser des gestes techniques et pratiques.
              </p>
            </button>

            <button
              onClick={() => setSelectedProfile('digital')}
              className={`p-6 text-left rounded-[2px] border transition-all duration-200 ${
                selectedProfile === 'digital'
                  ? 'bg-[#FE640E]/10 border-[#FE640E] text-[#EFEAE2]'
                  : 'bg-[#0C1116] border-[#28323C] hover:border-[#5C7C93] text-[#EFEAE2]/80'
              }`}
            >
              <MonitorSmartphone className="w-6 h-6 text-[#FE640E] mb-3" />
              <h3 className="font-bold text-base text-[#EFEAE2] mb-1">
                Digitaliser & massifier
              </h3>
              <p className="text-xs text-[#7C8894] leading-relaxed">
                Vous souhaitez rendre accessible un cursus en ligne avec LMS et suivi d’acquis.
              </p>
            </button>

            <button
              onClick={() => setSelectedProfile('immersif')}
              className={`p-6 text-left rounded-[2px] border transition-all duration-200 ${
                selectedProfile === 'immersif'
                  ? 'bg-[#FE640E]/10 border-[#FE640E] text-[#EFEAE2]'
                  : 'bg-[#0C1116] border-[#28323C] hover:border-[#5C7C93] text-[#EFEAE2]/80'
              }`}
            >
              <Gamepad2 className="w-6 h-6 text-[#FE640E] mb-3" />
              <h3 className="font-bold text-base text-[#EFEAE2] mb-1">
                Entraîner aux situations critiques
              </h3>
              <p className="text-xs text-[#7C8894] leading-relaxed">
                Vous voulez entraîner à la prise de décision, pannes rares et scénarios à risques.
              </p>
            </button>
          </div>

          {/* Résultat du mini-orienteur */}
          {selectedProfile && (
            <div className="bg-[#0C1116] border-l-4 border-[#FE640E] p-6 lg:p-8 rounded-[2px] space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h4 className="font-archivo-display text-xl font-bold text-[#EFEAE2]">
                    {profileResults[selectedProfile].titre}
                  </h4>
                  <p className="text-sm text-[#EFEAE2]/80 mt-1 max-w-2xl">
                    {profileResults[selectedProfile].description}
                  </p>
                </div>
                <Link
                  href="/#contact"
                  className="inline-flex items-center gap-2 bg-[#FE640E] hover:bg-[#FF8812] text-[#EFEAE2] px-5 py-3 rounded-[2px] font-semibold text-xs whitespace-nowrap self-start sm:self-center transition-colors"
                >
                  <span>{profileResults[selectedProfile].action}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              <div className="flex flex-wrap gap-6 pt-2 border-t border-[#28323C] text-xs text-[#7C8894]">
                <div><strong className="text-[#EFEAE2]">Format type :</strong> {profileResults[selectedProfile].format}</div>
                <div><strong className="text-[#EFEAE2]">Délai estimé :</strong> {profileResults[selectedProfile].delai}</div>
              </div>
            </div>
          )}
        </div>

        {/* ZOOM SUR L'ENVIRONNEMENT VOKSIA (Exigence explicite du brief page 4) */}
        <div className="mb-24 bg-[#151A20] border border-[#28323C] rounded-[2px] overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            <div className="lg:col-span-6 p-8 lg:p-12 flex flex-col justify-between space-y-8">
              <div className="space-y-4">
                <span className="font-mono text-xs uppercase tracking-wider text-[#FE640E] font-semibold">
                  Plateforme Numérique Propriétaire
                </span>
                <h2 className="font-archivo-display text-3xl font-bold text-[#EFEAE2]">
                  VOKSIA : l’environnement d’apprentissage KTM
                </h2>
                <p className="text-base text-[#EFEAE2]/80 leading-relaxed">
                  Conçu spécialement pour les contextes professionnels et techniques, VOKSIA centralise vos cohortes d’apprenants, vos modules multimédias et le suivi des compétences acquises.
                </p>

                <div className="space-y-3 pt-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#FE640E] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-semibold text-[#EFEAE2]">Micro-learning vidéo & interactif</h4>
                      <p className="text-xs text-[#7C8894]">Contenus découpés en séquences courtes rythmées par des quiz de validation immédiate.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#FE640E] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-semibold text-[#EFEAE2]">Radar de compétences individualisé</h4>
                      <p className="text-xs text-[#7C8894]">Visualisation dynamique de la progression pour chaque apprenant et chaque cohorte.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#FE640E] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-semibold text-[#EFEAE2]">Accès optimisé faible bande passante</h4>
                      <p className="text-xs text-[#7C8894]">Architecture pensée pour une fluidité d'accès sur mobile et réseau local.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <Link
                  href="/#contact"
                  className="inline-flex items-center gap-2 bg-[#FE640E] hover:bg-[#FF8812] text-[#EFEAE2] px-6 py-3.5 rounded-[2px] font-semibold text-sm transition-colors"
                >
                  <span>Demander un diagnostic pour déployer VOKSIA</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6 relative min-h-[360px] bg-[#0C1116]">
              <Image
                src="/VOKSIA2.png"
                alt="Interface officielle de la plateforme VOKSIA de KTM Skills Academy"
                fill
                className="object-cover object-left-top"
              />
            </div>
          </div>
        </div>

        {/* CTA Vers Diagnostic */}
        <div className="text-center p-12 bg-[#0E151E] border border-[#28323C] rounded-[2px]">
          <h3 className="font-archivo-display text-2xl sm:text-3xl font-bold text-[#EFEAE2] mb-3">
            Vous avez un projet de formation à structurer ?
          </h3>
          <p className="text-base text-[#EFEAE2]/80 max-w-xl mx-auto mb-8">
            Bénéficiez d’un échange préalable avec nos ingénieurs pédagogiques pour cadrer votre dispositif.
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
