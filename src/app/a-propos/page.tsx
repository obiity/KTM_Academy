'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, MapPin, Mail, Phone, ShieldCheck, Users, Target, Compass } from 'lucide-react';

export default function AProposPage() {
  const equipe = [
    {
      nom: "Mame Diarra Bousso DIOP",
      role: "Directrice Générale",
      photo: "/Mame Diarra Bousso Diop.jpg",
      bio: "Pilote la stratégie globale, le développement institutionnel et la qualité d'impact des programmes de formation de KTM Skills Academy."
    },
    {
      nom: "Ousmane BITÉYE",
      role: "Directeur Artistique",
      photo: "/Ousmane Biteye.jpeg",
      bio: "Dirige la création visuelle, l'expérience utilisateur (UX/UI) des plateformes et la direction artistique des solutions immersives."
    },
    {
      nom: "Vieux Moussa DIÉDHIOU",
      role: "Directeur Technique",
      photo: "/Vieux Moussa Diédhiou.JPG",
      bio: "Supervise l'architecture technologique, l'ingénierie logicielle, les simulateurs en réalité mixte et l'environnement VOKSIA."
    }
  ];

  return (
    <div className="bg-[#0A1017] text-[#EFEAE2] min-h-screen pt-28 lg:pt-36 pb-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Breadcrumb */}
        <div className="mb-6 flex items-center gap-3 text-xs font-mono text-[#FE640E]">
          <Link href="/" className="hover:underline">Accueil</Link>
          <span>/</span>
          <span>À Propos</span>
        </div>

        {/* Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <h1 className="font-archivo-display text-4xl sm:text-5xl font-black text-[#EFEAE2] leading-tight">
            Une academy sénégalaise fondée sur une expertise solide.
          </h1>
          <p className="text-xl text-[#EFEAE2]/85 font-light leading-relaxed">
            Notre ambition : réinventer la formation professionnelle en Afrique de l'Ouest en combinant rigueur didactique et innovation digitale.
          </p>
        </div>

        {/* Vision & Raison d'être */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
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
              Nous bénéficions de l'héritage méthodologique et des retours d'expérience pionniers de KTM Advance dans les technologies immersives et les serious games.
            </p>
          </div>
        </div>

        {/* Équipe */}
        <div className="mb-24">
          <div className="max-w-2xl mb-12">
            <span className="font-mono text-xs uppercase tracking-wider text-[#FE640E] font-semibold">
              Les visages du projet
            </span>
            <h2 className="font-archivo-display text-3xl font-bold text-[#EFEAE2] mt-2">
              Une équipe engagée au quotidien
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {equipe.map((m) => (
              <div
                key={m.nom}
                className="group bg-[#151A20] border border-[#28323C] hover:border-[#FE640E] rounded-[2px] overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1.5 cursor-pointer"
              >
                <div className="relative aspect-[4/5] w-full bg-[#0C1116] overflow-hidden">
                  <Image
                    src={m.photo}
                    alt={m.nom}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover object-top grayscale group-hover:grayscale-0 group-hover:scale-[1.03] transition-all duration-500 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#151A20] via-transparent to-transparent opacity-75 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none" />
                </div>
                <div className="p-5 text-center">
                  <h3 className="font-archivo-display text-lg font-bold text-[#EFEAE2] group-hover:text-[#FE640E] transition-colors duration-200">
                    {m.nom}
                  </h3>
                  <p className="text-xs font-mono uppercase tracking-wider text-[#FE640E] mt-1 font-semibold">
                    {m.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mentions Légales & Coordonnées */}
        <div className="bg-[#151A20] border border-[#28323C] rounded-[2px] p-8 lg:p-12 mb-16">
          <h2 className="font-archivo-display text-2xl font-bold text-[#EFEAE2] mb-6">
            Informations juridiques & Contact
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm text-[#EFEAE2]/80">
            <div className="space-y-3">
              <p><strong>Entité :</strong> KTM Skills Academy</p>
              <p><strong>Siège social :</strong> Dakar, Castor, Lot 11, Sénégal</p>
              <p><strong>Contact électronique :</strong> <a href="mailto:ktmacademysn@gmail.com" className="text-[#FE640E]">ktmacademysn@gmail.com</a></p>
              <p><strong>Téléphone :</strong> +221 77 384 00 08</p>
            </div>
            <div className="space-y-3 text-xs text-[#7C8894] leading-relaxed">
              <p>
                <strong>Propriété intellectuelle :</strong> L’ensemble des contenus, marques, logos et éléments graphiques de ce site sont protégés par le droit de la propriété intellectuelle.
              </p>
              <p>
                <strong>Protection des données :</strong> Les informations recueillies via le formulaire de diagnostic font l’objet d’un traitement strictement destiné à l’étude de vos besoins de formation et ne sont en aucun cas cédées à des tiers.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center p-12 bg-[#0E151E] border border-[#28323C] rounded-[2px]">
          <h3 className="font-archivo-display text-2xl sm:text-3xl font-bold text-[#EFEAE2] mb-3">
            Parlons de vos besoins de formation
          </h3>
          <p className="text-base text-[#EFEAE2]/80 max-w-xl mx-auto mb-8">
            Rencontrons-nous à nos bureaux de Dakar ou échangeons à distance autour de votre projet.
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
