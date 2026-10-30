'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import {
  Smartphone,
  Monitor,
  Maximize2,
  X,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Cpu,
  Layers,
  BarChart3,
  Award,
  BookOpen,
  Zap,
  Eye,
  Grid,
  Check,
  Compass,
  Wrench
} from 'lucide-react';

export const VoksiaSection: React.FC = () => {
  // Navigation active tabs
  const [activeTab, setActiveTab] = useState<'mobile' | 'web' | 'domaines'>('mobile');
  
  // Mobile stage state
  const [activeScreenIndex, setActiveScreenIndex] = useState<number>(0);
  const [mobileDisplayMode, setMobileDisplayMode] = useState<'studio' | 'panorama'>('studio');

  // Lightbox Modal
  const [modalImage, setModalImage] = useState<string | null>(null);

  // Active Fonction on Web Cockpit
  const [activeFonction, setActiveFonction] = useState<string | null>(null);

  // 5 Authentic Mobile Screens extracted directly from VOKSIA1.png
  const mobileScreens = [
    {
      num: "01",
      titre: "Écran d'Accueil & Onboarding",
      tag: "Vision & Identité",
      slogan: "« Apprendre aujourd'hui, bâtir demain. »",
      description: "Portail d'entrée immersif présentant les filières d'avenir, l'accès sécurisé apprenant et la signature KTM Skills Academy.",
      image: "/voksia_phone_1.png",
      keyPoints: [
        "Accès rapide aux 6 domaines techniques fondamentaux",
        "Espace de connexion sécurisé apprenant / formateur",
        "Graphisme haute fidélité inspiré des métiers du futur"
      ]
    },
    {
      num: "02",
      titre: "Tableau de Bord Apprenant",
      tag: "Expérience Amina",
      slogan: "« Prête à développer vos compétences ? »",
      description: "Interface d'accueil personnalisée pour chaque jeune apprenant, centralisant ses formations en cours, alertes et bootcamps.",
      image: "/voksia_phone_2.png",
      keyPoints: [
        "Recherche universelle intelligente par compétence ou métier",
        "Accès direct au Bootcamp e-Mobilité 2026 (Diamniadio)",
        "Barre de navigation rapide : Accueil, Formations, Bootcamps, VR, Profil"
      ]
    },
    {
      num: "03",
      titre: "Catalogue des Formations",
      tag: "Filières Métiers",
      slogan: "6 Domaines techniques certifiants",
      description: "Bibliothèque complète des modules modulaires avec notation étoiles, durée estimée et barre de progression continue.",
      image: "/voksia_phone_3.png",
      keyPoints: [
        "Mécatronique auto (12 modules · 5h20 · 67% acquis)",
        "Maintenance industrielle, Agro-industrie & Solaire",
        "Filtres par domaines d'activité et mode hors-ligne"
      ]
    },
    {
      num: "04",
      titre: "Bootcamps pour l'Emploi",
      tag: "Insertion Terrain",
      slogan: "Immersion intensive & entrepreneuriat",
      description: "Plateforme de candidature et de sélection pour les camps d'entraînement intensifs en présentiel (ex: CSFP-MEM Diamniadio).",
      image: "/voksia_phone_4.png",
      keyPoints: [
        "Sessions intensives de 5 jours / 5 modules pratiques",
        "Candidature en 1 clic avec suivi du statut d'admission",
        "Calendrier des promotions régionales (Dakar, Thiès, St-Louis)"
      ]
    },
    {
      num: "05",
      titre: "Lecteur de Cours & Passerelle VR",
      tag: "Pédagogie Active",
      slogan: "Capteurs, actionneurs & réalité virtuelle",
      description: "Lecteur vidéo séquencé haute performance avec passerelle directe vers les simulateurs Meta Quest 3 en atelier.",
      image: "/voksia_phone_5.png",
      keyPoints: [
        "Module 3 : Capteurs de position (PMH), papillon et ECU",
        "Bouton Passerelle VR pour basculer en immersion 3D",
        "Quiz de validation obligatoires avant déblocage"
      ]
    }
  ];

  // 9 Domaines Techniques d'Avenir (issus directement de l'application réelle)
  const domainesTechniques = [
    {
      titre: "Mécanique & Mécatronique",
      icon: "🚗",
      modules: "12 modules · 5h20",
      image: "/domaines/mecanique-mecatronique.jpg",
      accent: "from-blue-600/25 to-blue-950/40 border-blue-500/40 text-blue-400",
      desc: "Diagnostic électronique, calculateurs ECU, bus CAN et capteurs d'injection automobile."
    },
    {
      titre: "Électromobilité & Véhicules Électriques",
      icon: "⚡",
      modules: "5 modules · 5 jours (Bootcamp)",
      image: "/domaines/electromobilite.jpg",
      accent: "from-amber-600/25 to-amber-950/40 border-amber-500/40 text-amber-400",
      desc: "Batteries haute tension, onduleurs, moteurs synchrones et protocoles de consignation électrique."
    },
    {
      titre: "Maintenance Industrielle 4.0",
      icon: "⚙️",
      modules: "10 modules · 4h10",
      image: "/domaines/maintenance-industrielle.jpg",
      accent: "from-orange-600/25 to-orange-950/40 border-orange-500/40 text-orange-400",
      desc: "Maintenance prédictive, pneumatique, électromécanique et capteurs de vibrations en usine."
    },
    {
      titre: "Énergie Solaire & Photovoltaïque",
      icon: "☀️",
      modules: "10 modules · 4h30",
      image: "/domaines/energie-solaire.jpg",
      accent: "from-yellow-600/25 to-yellow-950/40 border-yellow-500/40 text-yellow-400",
      desc: "Dimensionnement d'installations solaires hybrides, onduleurs et maintenance d'onduleurs PV."
    },
    {
      titre: "Agro-industrie & Transformation",
      icon: "🌾",
      modules: "8 modules · 3h45",
      image: "/domaines/agro-industrie.jpg",
      accent: "from-emerald-600/25 to-emerald-950/40 border-emerald-500/40 text-emerald-400",
      desc: "Lignes automatisées de transformation céréalière et conservation agroalimentaire aux normes HACCP."
    },
    {
      titre: "Bâtiment & Construction",
      icon: "🏗️",
      modules: "8 modules · 4h00",
      image: "/domaines/batiment-construction.jpg",
      accent: "from-cyan-600/25 to-cyan-950/40 border-cyan-500/40 text-cyan-400",
      desc: "Lecture de plans numériques BIM, sécurité de chantier et techniques éco-constructives."
    },
    {
      titre: "Logistique & Fret Transport",
      icon: "🚚",
      modules: "6 modules · 3h20",
      image: "/domaines/logistique-transport.jpg",
      accent: "from-indigo-600/25 to-indigo-950/40 border-indigo-500/40 text-indigo-400",
      desc: "Gestion d'entrepôt numérique WMS, maintenance de flotte poids lourds et flux de transport."
    },
    {
      titre: "Santé & Équipements Biomédicaux",
      icon: "🩺",
      modules: "Cursus spécialisé",
      image: "/domaines/sante-biomedical.jpg",
      accent: "from-rose-600/25 to-rose-950/40 border-rose-500/40 text-rose-400",
      desc: "Maintenance des appareils de monitorage, concentrateurs d'oxygène et stérilisation clinique."
    },
    {
      titre: "Soft Skills & Entrepreneuriat",
      icon: "🤝",
      modules: "Transversal",
      image: "/domaines/soft-skills-entrepreneuriat.jpg",
      accent: "from-purple-600/25 to-purple-950/40 border-purple-500/40 text-purple-400",
      desc: "Gestion d'atelier, chiffrage de devis, relation client et création de micro-entreprise technique."
    }
  ];

  // Fonctions clés du Cockpit Web
  const webFonctions = [
    {
      key: "vision",
      title: "Hero Banner & Vision Métiers",
      icon: Sparkles,
      desc: "Accès immédiat aux 5 étapes de VOKSIA : Se former, Pratiquer, Certifier, S’immerger et S’insérer.",
      preview: null
    },
    {
      key: "radar",
      title: "Radar Apprenant Amina (75%)",
      icon: BarChart3,
      desc: "Baromètre de progression en temps réel : 12 formations en cours, 5 terminées et 3 certifications officielles vérifiables.",
      preview: "/voksia_web_profile_kpi.png"
    },
    {
      key: "simulateur",
      title: "Simulateur Moteur & Mécatronique",
      icon: Cpu,
      desc: "Exploration interactive des capteurs de position (PMH), papillon électronique et calculateur ECU.",
      preview: "/voksia_web_engine_player.png"
    },
    {
      key: "vr",
      title: "Passerelle VR & Serious Game",
      icon: Zap,
      desc: "Passerelle directe en un clic entre la révision théorique web et les sessions d'immersion sur casque Meta Quest 3.",
      preview: null
    }
  ];

  const currentScreen = mobileScreens[activeScreenIndex];

  return (
    <section
      id="voksia"
      className="bg-[#050A10] text-[#EFEAE2] py-24 lg:py-36 border-b border-[#28323C] relative overflow-hidden select-none"
    >
      {/* Background Studio Glow & Ambient Mesh */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[1200px] h-[700px] bg-gradient-to-tr from-[#FE640E]/[0.09] via-[#5C7C93]/[0.05] to-transparent rounded-full blur-[170px] pointer-events-none" />
      <div className="absolute -bottom-32 right-0 w-[600px] h-[500px] bg-[#FE640E]/[0.05] rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">

        {/* Header Section */}
        <div className="flex flex-col items-center text-center max-w-5xl mx-auto mb-16 space-y-5">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#151A20]/90 border border-[#FE640E]/40 text-xs font-mono uppercase tracking-widest text-[#FE640E] shadow-lg shadow-[#FE640E]/10">
            <span className="w-2 h-2 rounded-full bg-[#FE640E] animate-pulse" />
            <span>Plateforme Numérique & LMS Propriétaire · KTM Skills Academy</span>
          </div>

          <h2 className="font-archivo-display text-3xl sm:text-4xl lg:text-5xl font-black text-[#EFEAE2] tracking-tight leading-[1.12] max-w-4xl">
            VOKSIA : L’écosystème digital des{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FE640E] via-[#FF8812] to-[#FFB066]">
              métiers techniques d’avenir.
            </span>
          </h2>

          <p className="text-lg sm:text-xl text-[#EFEAE2]/80 font-light max-w-2xl leading-relaxed">
            « Apprendre aujourd’hui, bâtir demain. » Des formations pratiques, interactives et certifiantes conçues pour l'Afrique de l'Ouest, avec passerelle directe vers la Réalité Virtuelle.
          </p>

          {/* 5 Interactive Steps Circuit */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 pt-4 w-full">
            <div className="p-3 bg-[#151A20]/80 border border-[#28323C] rounded-[2px] flex items-center gap-2.5">
              <span className="w-7 h-7 rounded-full bg-[#FE640E]/10 border border-[#FE640E]/30 flex items-center justify-center shrink-0">
                <BookOpen className="w-3.5 h-3.5 text-[#FE640E]" />
              </span>
              <div className="text-left">
                <span className="block text-xs font-bold text-[#EFEAE2]">Se former</span>
                <span className="block text-[10px] text-[#7C8894] leading-snug">Microlearning mobile</span>
              </div>
            </div>

            <div className="p-3 bg-[#151A20]/80 border border-[#28323C] rounded-[2px] flex items-center gap-2.5">
              <span className="w-7 h-7 rounded-full bg-[#FE640E]/10 border border-[#FE640E]/30 flex items-center justify-center shrink-0">
                <Cpu className="w-3.5 h-3.5 text-[#FE640E]" />
              </span>
              <div className="text-left">
                <span className="block text-xs font-bold text-[#EFEAE2]">Pratiquer</span>
                <span className="block text-[10px] text-[#7C8894] leading-snug">Simulations 3D & VR</span>
              </div>
            </div>

            <div className="p-3 bg-[#151A20]/80 border border-[#28323C] rounded-[2px] flex items-center gap-2.5">
              <span className="w-7 h-7 rounded-full bg-[#FE640E]/10 border border-[#FE640E]/30 flex items-center justify-center shrink-0">
                <Award className="w-3.5 h-3.5 text-[#FE640E]" />
              </span>
              <div className="text-left">
                <span className="block text-xs font-bold text-[#EFEAE2]">Certifier</span>
                <span className="block text-[10px] text-[#7C8894] leading-snug">Badges & certifications</span>
              </div>
            </div>

            <div className="p-3 bg-[#151A20]/80 border border-[#28323C] rounded-[2px] flex items-center gap-2.5">
              <span className="w-7 h-7 rounded-full bg-[#FE640E]/10 border border-[#FE640E]/30 flex items-center justify-center shrink-0">
                <Wrench className="w-3.5 h-3.5 text-[#FE640E]" />
              </span>
              <div className="text-left">
                <span className="block text-xs font-bold text-[#EFEAE2]">S’immerger</span>
                <span className="block text-[10px] text-[#7C8894] leading-snug">Bootcamps & ateliers pratiques</span>
              </div>
            </div>

            <div className="p-3 bg-[#151A20]/80 border border-[#28323C] rounded-[2px] flex items-center gap-2.5 sm:col-span-2 lg:col-span-1">
              <span className="w-7 h-7 rounded-full bg-[#FE640E]/10 border border-[#FE640E]/30 flex items-center justify-center shrink-0">
                <Compass className="w-3.5 h-3.5 text-[#FE640E]" />
              </span>
              <div className="text-left">
                <span className="block text-xs font-bold text-[#EFEAE2]">S’insérer</span>
                <span className="block text-[10px] text-[#7C8894] leading-snug">Emploi & entrepreneuriat</span>
              </div>
            </div>
          </div>
        </div>

        {/* Studio Command Deck / Mode Switcher */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8 bg-[#0C121A] p-2 sm:p-2.5 rounded-[4px] border border-[#28323C]">
          
          {/* Main Tabs */}
          <div className="flex items-center gap-1.5 w-full sm:w-auto">
            <button
              onClick={() => setActiveTab('mobile')}
              className={`flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-[2px] font-semibold text-xs transition-all duration-200 ${
                activeTab === 'mobile'
                  ? 'bg-[#FE640E] text-[#EFEAE2] shadow-lg shadow-[#FE640E]/20'
                  : 'text-[#EFEAE2]/70 hover:text-[#EFEAE2] hover:bg-[#151A20]'
              }`}
            >
              <Smartphone className="w-4 h-4" />
              <span>Application Mobile (5 Écrans)</span>
            </button>

            <button
              onClick={() => setActiveTab('web')}
              className={`flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-[2px] font-semibold text-xs transition-all duration-200 ${
                activeTab === 'web'
                  ? 'bg-[#FE640E] text-[#EFEAE2] shadow-lg shadow-[#FE640E]/20'
                  : 'text-[#EFEAE2]/70 hover:text-[#EFEAE2] hover:bg-[#151A20]'
              }`}
            >
              <Monitor className="w-4 h-4" />
              <span>Cockpit Web & LMS</span>
            </button>

            <button
              onClick={() => setActiveTab('domaines')}
              className={`flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-[2px] font-semibold text-xs transition-all duration-200 ${
                activeTab === 'domaines'
                  ? 'bg-[#FE640E] text-[#EFEAE2] shadow-lg shadow-[#FE640E]/20'
                  : 'text-[#EFEAE2]/70 hover:text-[#EFEAE2] hover:bg-[#151A20]'
              }`}
            >
              <Grid className="w-4 h-4" />
              <span>9 Domaines d'Avenir</span>
            </button>
          </div>

          {/* Quick Actions & View Filters */}
          <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
            {activeTab === 'mobile' && (
              <div className="flex items-center bg-[#151A20] p-1 rounded-[2px] border border-[#28323C] text-xs font-mono">
                <button
                  onClick={() => setMobileDisplayMode('studio')}
                  className={`px-3 py-1 rounded-[2px] transition-colors ${
                    mobileDisplayMode === 'studio' ? 'bg-[#FE640E] text-[#EFEAE2]' : 'text-[#7C8894] hover:text-[#EFEAE2]'
                  }`}
                >
                  Vue Focus
                </button>
                <button
                  onClick={() => setMobileDisplayMode('panorama')}
                  className={`px-3 py-1 rounded-[2px] transition-colors ${
                    mobileDisplayMode === 'panorama' ? 'bg-[#FE640E] text-[#EFEAE2]' : 'text-[#7C8894] hover:text-[#EFEAE2]'
                  }`}
                >
                  Vue Deck 5 Écrans
                </button>
              </div>
            )}

            <button
              onClick={() => setModalImage(activeTab === 'web' ? '/VOKSIA2.png' : '/VOKSIA1.png')}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-[2px] bg-[#151A20] hover:bg-[#28323C] text-xs font-mono text-[#EFEAE2] border border-[#28323C] transition-colors shrink-0"
              title="Agrandir en haute définition"
            >
              <Maximize2 className="w-3.5 h-3.5 text-[#FE640E]" />
              <span className="hidden sm:inline">Plein écran HD</span>
            </button>
          </div>

        </div>

        {/* TAB 1 : MOBILE EXPERIENCE */}
        {activeTab === 'mobile' && (
          <div className="space-y-8 animate-in fade-in duration-300">
            
            {mobileDisplayMode === 'studio' ? (
              /* STUDIO FOCUS MODE : Smartphone Stage on left, interactive card deck on right */
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#0C121A] border border-[#28323C] rounded-[4px] p-6 sm:p-10 lg:p-12 shadow-2xl relative overflow-hidden">
                
                {/* Background Ambient Spot */}
                <div className="absolute top-1/2 left-1/4 -translate-y-1/2 -translate-x-1/2 w-[450px] h-[450px] bg-[#FE640E]/[0.08] rounded-full blur-[120px] pointer-events-none" />

                {/* Left Column : 3D Floating Smartphone Frame */}
                <div className="lg:col-span-5 flex flex-col items-center justify-center relative">
                  
                  {/* Floating Telemetry Badge */}
                  <div className="mb-4 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#151A20] border border-[#28323C] text-[11px] font-mono text-[#FE640E]">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                    <span>Écran {currentScreen.num} / 05 · {currentScreen.tag}</span>
                  </div>

                  {/* Device Stage with Drop Shadow & Seamless Alpha */}
                  <div
                    onClick={() => setModalImage(currentScreen.image)}
                    className="relative w-[260px] sm:w-[285px] aspect-[278/682] cursor-zoom-in group transition-transform duration-500 hover:scale-[1.02]"
                  >
                    {/* Atmospheric Glow */}
                    <div className="absolute -inset-4 bg-gradient-to-b from-[#FE640E]/20 to-transparent rounded-[52px] blur-2xl opacity-60 group-hover:opacity-100 transition-opacity pointer-events-none" />

                    {/* Smartphone Mockup (Transparent PNG with native drop shadow) */}
                    <div className="relative w-full h-full filter drop-shadow-[0_25px_50px_rgba(0,0,0,0.85)]">
                      <Image
                        src={currentScreen.image}
                        alt={currentScreen.titre}
                        fill
                        quality={100}
                        unoptimized
                        className="object-contain"
                        priority
                      />
                    </div>

                    {/* Zoom Hint */}
                    <div className="absolute bottom-6 right-6 bg-[#0C1116]/90 backdrop-blur-sm px-2.5 py-1 rounded-[2px] border border-[#28323C] text-[10px] font-mono text-[#FE640E] flex items-center gap-1.5 opacity-80 group-hover:opacity-100 transition-opacity pointer-events-none">
                      <Maximize2 className="w-3 h-3" />
                      <span>Zoomer</span>
                    </div>
                  </div>

                  {/* Quick Carousel Arrows */}
                  <div className="flex items-center gap-4 mt-6">
                    <button
                      onClick={() => setActiveScreenIndex((prev) => (prev > 0 ? prev - 1 : mobileScreens.length - 1))}
                      className="p-2.5 rounded-full bg-[#151A20] hover:bg-[#FE640E] text-[#EFEAE2] border border-[#28323C] transition-colors"
                      title="Écran précédent"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    
                    <div className="flex items-center gap-1.5">
                      {mobileScreens.map((_, i) => (
                        <button
                          key={i}
                          onClick={() => setActiveScreenIndex(i)}
                          className={`h-2 rounded-full transition-all duration-300 ${
                            activeScreenIndex === i ? 'w-8 bg-[#FE640E]' : 'w-2 bg-[#28323C] hover:bg-[#5C7C93]'
                          }`}
                        />
                      ))}
                    </div>

                    <button
                      onClick={() => setActiveScreenIndex((prev) => (prev < mobileScreens.length - 1 ? prev + 1 : 0))}
                      className="p-2.5 rounded-full bg-[#151A20] hover:bg-[#FE640E] text-[#EFEAE2] border border-[#28323C] transition-colors"
                      title="Écran suivant"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>

                </div>

                {/* Right Column : Interactive Stepper Cards */}
                <div className="lg:col-span-7 space-y-4">
                  
                  {/* Active Screen Details Hero */}
                  <div className="p-6 bg-[#151A20] border border-[#FE640E]/40 rounded-[2px] shadow-lg mb-6">
                    <div className="flex items-center justify-between gap-3 mb-2">
                      <span className="font-mono text-xs font-bold text-[#FE640E] uppercase tracking-wider">
                        {currentScreen.tag}
                      </span>
                      <span className="text-[11px] font-mono text-[#7C8894]">
                        {currentScreen.slogan}
                      </span>
                    </div>

                    <h3 className="font-archivo-display text-2xl font-black text-[#EFEAE2] mb-3">
                      {currentScreen.titre}
                    </h3>

                    <p className="text-sm text-[#EFEAE2]/85 leading-relaxed mb-4">
                      {currentScreen.description}
                    </p>

                    <div className="space-y-2 pt-2 border-t border-[#28323C]">
                      {currentScreen.keyPoints.map((pt, idx) => (
                        <div key={idx} className="flex items-center gap-2.5 text-xs text-[#EFEAE2]/90">
                          <Check className="w-3.5 h-3.5 text-[#FE640E] shrink-0" />
                          <span>{pt}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* 5 Screen Selector Buttons */}
                  <div className="space-y-2.5">
                    {mobileScreens.map((screen, idx) => (
                      <button
                        key={idx}
                        onClick={() => setActiveScreenIndex(idx)}
                        className={`w-full p-3.5 rounded-[2px] border text-left flex items-center justify-between gap-4 transition-all duration-200 ${
                          activeScreenIndex === idx
                            ? 'bg-[#151A20] border-[#FE640E] shadow-md shadow-[#FE640E]/10 translate-x-1'
                            : 'bg-[#0E151E]/70 border-[#28323C] hover:border-[#5C7C93] hover:bg-[#151A20]/60'
                        }`}
                      >
                        <div className="flex items-center gap-3.5">
                          <span className={`w-7 h-7 rounded-[2px] font-mono text-xs font-bold flex items-center justify-center shrink-0 ${
                            activeScreenIndex === idx
                              ? 'bg-[#FE640E] text-[#EFEAE2]'
                              : 'bg-[#151A20] text-[#7C8894] border border-[#28323C]'
                          }`}>
                            {screen.num}
                          </span>
                          <div>
                            <h4 className="font-archivo-display text-xs sm:text-sm font-bold text-[#EFEAE2] leading-snug">
                              {screen.titre}
                            </h4>
                            <p className="text-[11px] text-[#7C8894] line-clamp-1">
                              {screen.slogan}
                            </p>
                          </div>
                        </div>

                        <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-[#FE640E]/10 text-[#FE640E] shrink-0">
                          {screen.tag}
                        </span>
                      </button>
                    ))}
                  </div>

                </div>

              </div>
            ) : (
              /* PANORAMIC 5-PHONE DECK MODE */
              <div className="bg-[#0C121A] border border-[#28323C] rounded-[4px] p-6 sm:p-10 shadow-2xl space-y-8">
                
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-[#28323C] pb-6">
                  <div>
                    <h3 className="font-archivo-display text-xl font-bold text-[#EFEAE2]">
                      Parcours Complet de l'Application Mobile VOKSIA
                    </h3>
                    <p className="text-xs text-[#7C8894]">
                      Survolez ou cliquez sur n'importe quel écran pour l'afficher en haute définition.
                    </p>
                  </div>
                  <button
                    onClick={() => setModalImage('/VOKSIA1.png')}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-[2px] bg-[#151A20] border border-[#FE640E]/40 text-xs font-mono text-[#FE640E] hover:bg-[#FE640E] hover:text-[#EFEAE2] transition-colors"
                  >
                    <Maximize2 className="w-3.5 h-3.5" />
                    <span>Agrandir le poster panoramique 4K</span>
                  </button>
                </div>

                {/* 5 Phones Side by Side */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6 items-end">
                  {mobileScreens.map((s, idx) => (
                    <div
                      key={idx}
                      onClick={() => {
                        setActiveScreenIndex(idx);
                        setModalImage(s.image);
                      }}
                      className="group flex flex-col items-center text-center cursor-zoom-in"
                    >
                      <div className="relative w-full aspect-[278/682] filter drop-shadow-[0_15px_30px_rgba(0,0,0,0.7)] group-hover:drop-shadow-[0_20px_40px_rgba(254,100,14,0.35)] group-hover:-translate-y-3 transition-all duration-300">
                        <Image
                          src={s.image}
                          alt={s.titre}
                          fill
                          quality={100}
                          unoptimized
                          className="object-contain"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center p-3 rounded-[36px]">
                          <span className="text-[11px] font-mono text-[#FE640E] bg-[#0C1116]/90 px-2.5 py-1 rounded-[2px] border border-[#FE640E]/40 flex items-center gap-1">
                            <Maximize2 className="w-3 h-3" />
                            Zoomer
                          </span>
                        </div>
                      </div>

                      <div className="mt-4 space-y-1">
                        <span className="font-mono text-xs font-bold text-[#FE640E]">{s.num}</span>
                        <h4 className="font-archivo-display text-xs font-bold text-[#EFEAE2] leading-tight">
                          {s.titre}
                        </h4>
                        <p className="text-[10px] text-[#7C8894] line-clamp-1">{s.tag}</p>
                      </div>
                    </div>
                  ))}
                </div>

              </div>
            )}

          </div>
        )}

        {/* TAB 2 : WEB COCKPIT & LMS (VOKSIA2.png) */}
        {activeTab === 'web' && (
          <div className="space-y-8 animate-in fade-in duration-300">
            
            {/* Monitor Showcase Container */}
            <div className="bg-[#0C121A] border border-[#28323C] rounded-[4px] shadow-2xl overflow-hidden">
              
              {/* Top macOS Browser Window Bar */}
              <div className="px-4 py-3 bg-[#151A20] border-b border-[#28323C] flex items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-[#FF5F56] border border-[#E0443E]" />
                    <span className="w-3 h-3 rounded-full bg-[#FFBD2E] border border-[#DEA123]" />
                    <span className="w-3 h-3 rounded-full bg-[#27C93F] border border-[#1AAB29]" />
                  </div>
                  <span className="text-[11px] font-mono text-[#7C8894] hidden sm:inline ml-3">
                    Cockpit Apprenant · Plateforme VOKSIA v2.4
                  </span>
                </div>

                <div className="flex items-center gap-2 bg-[#0C1116] px-3 py-1 rounded-[2px] border border-[#28323C] text-[11px] font-mono text-[#7C8894] max-w-sm w-full justify-center">
                  <span className="text-emerald-400">https://</span>
                  <span className="text-[#EFEAE2]">voksia.ktm-academy.com</span>
                  <span className="text-[#7C8894]">/espace-apprenant</span>
                </div>

                <div className="flex items-center gap-2 text-xs font-mono text-[#7C8894]">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  <span className="hidden md:inline">Synchronisé VR</span>
                </div>
              </div>

              {/* Main Display Stage with Interactive Hotspots */}
              <div className="relative p-2 sm:p-4 bg-[#070D14] flex flex-col items-center">
                
                <div
                  onClick={() => setModalImage('/VOKSIA2.png')}
                  className="relative w-full aspect-[1672/941] rounded-[2px] overflow-hidden border border-[#28323C] bg-black shadow-2xl cursor-zoom-in group"
                >
                  <Image
                    src="/VOKSIA2.png"
                    alt="Cockpit Web VOKSIA : LMS, suivi de progression, modules et simulateur interactif"
                    fill
                    quality={100}
                    unoptimized
                    className="object-contain"
                    priority
                  />

                  {/* Zoom Indicator */}
                  <div className="absolute bottom-3 right-3 bg-[#0C1116]/90 backdrop-blur-sm px-3 py-1.5 rounded-[2px] border border-[#28323C] text-[11px] font-mono text-[#FE640E] flex items-center gap-1.5 pointer-events-none">
                    <Maximize2 className="w-3.5 h-3.5" />
                    <span>Cliquez pour zoomer en HD</span>
                  </div>
                </div>

              </div>

              {/* Fonctions Clés Selector Bar (Sans chiffres) */}
              <div className="p-4 sm:p-6 bg-[#151A20] border-t border-[#28323C] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {webFonctions.map((f) => {
                  const Icon = f.icon;
                  return (
                    <button
                      key={f.key}
                      onClick={() => setActiveFonction(activeFonction === f.key ? null : f.key)}
                      className={`p-3.5 rounded-[2px] border text-left transition-all ${
                        activeFonction === f.key
                          ? 'bg-[#0C121A] border-[#FE640E] shadow-md'
                          : 'bg-[#0E151E] border-[#28323C] hover:border-[#5C7C93]'
                      }`}
                    >
                      <div className="flex items-center gap-2 mb-1.5">
                        <span className="w-6 h-6 rounded-[2px] bg-[#FE640E]/10 border border-[#FE640E]/30 text-[#FE640E] flex items-center justify-center shrink-0">
                          <Icon className="w-3.5 h-3.5" />
                        </span>
                        <h4 className="font-archivo-display text-xs font-bold text-[#EFEAE2]">
                          {f.title}
                        </h4>
                      </div>
                      <p className="text-[11px] text-[#7C8894] leading-relaxed line-clamp-2">
                        {f.desc}
                      </p>
                    </button>
                  );
                })}
              </div>

              {/* 3 Detail Highlight Cards from VOKSIA2 (Sans images) */}
              <div className="p-6 sm:p-8 bg-[#0C121A] border-t border-[#28323C] grid grid-cols-1 md:grid-cols-3 gap-6">
                
                <div className="p-5 bg-[#151A20] border border-[#28323C] rounded-[2px] transition-all hover:border-[#5C7C93]">
                  <div className="w-8 h-8 rounded-[2px] bg-[#FE640E]/10 flex items-center justify-center text-[#FE640E] mb-3">
                    <BookOpen className="w-4 h-4" />
                  </div>
                  <h4 className="font-archivo-display text-sm font-bold text-[#EFEAE2] mb-1.5">
                    Pédagogie Microlearning & Vidéo
                  </h4>
                  <p className="text-xs text-[#7C8894] leading-relaxed">
                    Vidéos de gestes métiers (5-15 min) avec questions de vérification obligatoires avant le déblocage des étapes supérieures.
                  </p>
                </div>

                <div className="p-5 bg-[#151A20] border border-[#28323C] rounded-[2px] transition-all hover:border-[#5C7C93]">
                  <div className="w-8 h-8 rounded-[2px] bg-[#FE640E]/10 flex items-center justify-center text-[#FE640E] mb-3">
                    <BarChart3 className="w-4 h-4" />
                  </div>
                  <h4 className="font-archivo-display text-sm font-bold text-[#EFEAE2] mb-1.5">
                    Radar de Compétences Apprenant
                  </h4>
                  <p className="text-xs text-[#7C8894] leading-relaxed">
                    Évaluation continue en temps réel : 75% acquis, baromètre individuel pour identifier les points de renfort avant l'immersion.
                  </p>
                </div>

                <div className="p-5 bg-[#151A20] border border-[#28323C] rounded-[2px] transition-all hover:border-[#5C7C93]">
                  <div className="w-8 h-8 rounded-[2px] bg-[#FE640E]/10 flex items-center justify-center text-[#FE640E] mb-3">
                    <Zap className="w-4 h-4" />
                  </div>
                  <h4 className="font-archivo-display text-sm font-bold text-[#EFEAE2] mb-1.5">
                    Passerelle Directe vers le Casque VR
                  </h4>
                  <p className="text-xs text-[#7C8894] leading-relaxed">
                    Un seul clic permet de passer du cours théorique en ligne aux Serious Games en 3D sur casque Meta Quest 3 en atelier KTM.
                  </p>
                </div>

              </div>

            </div>

          </div>
        )}

        {/* TAB 3 : 9 DOMAINES TECHNIQUES D'AVENIR */}
        {activeTab === 'domaines' && (
          <div className="space-y-8 animate-in fade-in duration-300">
            
            <div className="text-center max-w-2xl mx-auto mb-10">
              <h3 className="font-archivo-display text-2xl font-bold text-[#EFEAE2] mb-2">
                Les 9 Domaines Techniques Clés de VOKSIA
              </h3>
              <p className="text-sm text-[#7C8894]">
                Directement alignés sur les filières prioritaires de développement industriel et technologique au Sénégal.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {domainesTechniques.map((d, idx) => (
                <div
                  key={idx}
                  className="relative overflow-hidden min-h-[260px] p-6 rounded-[2px] border border-[#28323C] hover:border-[#FE640E]/70 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl group bg-[#0A1017]"
                >
                  {/* Background Domain Photograph */}
                  <div className="absolute inset-0 z-0 pointer-events-none">
                    <Image
                      src={d.image}
                      alt={d.titre}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-b ${d.accent} opacity-40 mix-blend-multiply`} />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050A10]/95 via-[#070E16]/80 to-[#050A10]/20 group-hover:from-[#050A10]/90 group-hover:via-[#070E16]/65 group-hover:to-transparent transition-all duration-300" />
                  </div>

                  {/* Top Row: Icon Badge & Modules Pill */}
                  <div className="relative z-10 flex items-center justify-between mb-12">
                    <span className="w-10 h-10 rounded-[2px] bg-[#0C1116]/75 backdrop-blur-md border border-white/15 flex items-center justify-center text-xl group-hover:scale-110 group-hover:border-[#FE640E]/50 transition-all duration-200">
                      {d.icon}
                    </span>
                    <span className="text-[10px] font-mono uppercase px-2.5 py-1 rounded-[2px] bg-[#0C1116]/85 backdrop-blur-md border border-white/15 text-[#EFEAE2]/95">
                      {d.modules}
                    </span>
                  </div>

                  {/* Bottom Editorial Content */}
                  <div className="relative z-10 mt-auto">
                    <h4 className="font-archivo-display text-lg font-bold text-[#EFEAE2] group-hover:text-white mb-2 leading-snug drop-shadow-sm">
                      {d.titre}
                    </h4>

                    <p className="text-xs text-[#EFEAE2]/85 leading-relaxed mb-4">
                      {d.desc}
                    </p>

                    <div className="pt-3 border-t border-white/15 flex items-center justify-between text-[11px] font-mono">
                      <span className="text-[#FE640E] font-semibold">Parcours Certifiant</span>
                      <a href="#contact" className="hover:underline flex items-center gap-1 text-[#EFEAE2] group-hover:text-[#FE640E] transition-colors">
                        <span>Postuler</span>
                        <ArrowRight className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        )}

        {/* Bottom Call to Action Footer */}
        <div className="mt-16 p-8 bg-[#0C121A] border border-[#28323C] rounded-[4px] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h4 className="font-archivo-display text-xl font-bold text-[#EFEAE2]">
              Vous souhaitez déployer VOKSIA pour votre établissement ou vos collaborateurs ?
            </h4>
            <p className="text-xs sm:text-sm text-[#7C8894]">
              Déploiement sur mesure en marque blanche, parcours sectoriels dédiés et intégration directe de vos ateliers VR.
            </p>
          </div>

          <a
            href="#contact"
            className="inline-flex items-center gap-3 bg-[#FE640E] hover:bg-[#FF8812] text-[#EFEAE2] px-7 py-3.5 rounded-[2px] font-semibold text-xs sm:text-sm shadow-lg shadow-[#FE640E]/20 transition-all shrink-0"
          >
            <span>Demander une démo interactive</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>

      {/* FULLSCREEN LIGHTBOX MODAL */}
      {modalImage && (
        <div
          onClick={() => setModalImage(null)}
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 cursor-zoom-out animate-in fade-in duration-200"
        >
          <button
            onClick={() => setModalImage(null)}
            className="absolute top-6 right-6 p-2 rounded-full bg-[#151A20] text-[#EFEAE2] border border-[#28323C] hover:border-[#FE640E] transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
          <div className={`relative w-full ${modalImage.includes('voksia_phone') ? 'max-w-sm aspect-[278/682] max-h-[88vh]' : 'max-w-6xl max-h-[92vh] aspect-[16/10] sm:aspect-[16/9]'}`}>
            <Image
              src={modalImage}
              alt="Aperçu HD VOKSIA"
              fill
              quality={100}
              unoptimized
              className="object-contain"
            />
          </div>
        </div>
      )}

    </section>
  );
};
