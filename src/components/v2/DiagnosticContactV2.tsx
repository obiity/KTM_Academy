'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import {
  Mail,
  MapPin,
  Phone,
  Send,
  CheckCircle2,
  ArrowRight,
  Wrench,
  MonitorSmartphone,
  Gamepad2,
  Users,
  Layers,
  Check
} from 'lucide-react';

const BESOIN_Values = [
  "Former aux métiers d'avenir",
  "Digitaliser mes formations",
  "Créer une expérience immersive (VR, serious games, simulations 3D)",
  "Organiser un bootcamp ou un atelier pratique",
  "Développer un projet sur mesure"
] as const;

type BesoinOption = (typeof BESOIN_Values)[number];

const BESOIN_ITEMS: Array<{
  value: BesoinOption;
  label: string;
  detail?: string;
  icon: React.ElementType;
}> = [
  {
    value: "Former aux métiers d'avenir",
    label: "Former aux métiers d'avenir",
    icon: Wrench
  },
  {
    value: "Digitaliser mes formations",
    label: "Digitaliser mes formations",
    icon: MonitorSmartphone
  },
  {
    value: "Créer une expérience immersive (VR, serious games, simulations 3D)",
    label: "Créer une expérience immersive",
    detail: "(VR, serious games, simulations 3D)",
    icon: Gamepad2
  },
  {
    value: "Organiser un bootcamp ou un atelier pratique",
    label: "Organiser un bootcamp ou un atelier pratique",
    icon: Users
  },
  {
    value: "Développer un projet sur mesure",
    label: "Développer un projet sur mesure",
    icon: Layers
  }
];

const formSchema = z.object({
  nom: z.string().min(2, "Veuillez renseigner votre nom et organisation"),
  organisation: z.string().optional(),
  email: z.string().email("Veuillez renseigner une adresse email valide"),
  telephone: z.string().optional(),
  besoin: z.enum(BESOIN_Values),
  message: z.string().min(5, "Veuillez décrire brièvement votre défi")
});

type FormData = z.infer<typeof formSchema>;

export const DiagnosticContactV2: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [selectedBesoin, setSelectedBesoin] = useState<BesoinOption>(BESOIN_Values[0]);

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors, isSubmitting }
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      besoin: BESOIN_Values[0]
    }
  });

  const onSubmit = async (data: FormData) => {
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      if (res.ok) {
        setSubmitted(true);
        reset();
        setSelectedBesoin(BESOIN_Values[0]);
      } else {
        setSubmitted(true);
      }
    } catch {
      setSubmitted(true);
    }
  };

  const handleBesoinClick = (besoin: BesoinOption) => {
    setSelectedBesoin(besoin);
    setValue('besoin', besoin, { shouldValidate: true });
  };

  return (
    <section
      id="contact"
      className="bg-[#0A1017] text-[#EFEAE2] py-24 lg:py-32 border-b border-[#28323C] relative overflow-hidden"
    >
      {/* Background Accent Glow */}
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[350px] bg-[#FE640E]/[0.05] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-14 space-y-4">
          <span className="font-mono text-xs uppercase tracking-wider text-[#FE640E] font-semibold">
            08 · Échange & Diagnostic
          </span>
          <h2 className="font-archivo-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#EFEAE2] leading-tight">
            Quel est votre défi de formation ?
          </h2>
          <p className="text-xl sm:text-2xl text-[#EFEAE2]/85 font-light">
            Parlons de votre public, des compétences à développer et du format le mieux adapté.
          </p>
        </div>

        {/* Diagnostic Form Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Main Form Box (7 cols) */}
          <div className="lg:col-span-7 bg-[#151A20] p-6 sm:p-8 lg:p-10 border border-[#28323C] rounded-[2px] shadow-2xl">
            {submitted ? (
              <div className="py-12 text-center space-y-6">
                <div className="w-16 h-16 rounded-full bg-[#FE640E]/10 border border-[#FE640E]/30 text-[#FE640E] flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-archivo-display text-2xl font-bold text-[#EFEAE2]">
                  Votre demande de diagnostic est enregistrée !
                </h3>
                <p className="text-base text-[#EFEAE2]/80 max-w-md mx-auto leading-relaxed">
                  Notre équipe étudiera votre demande et vous recontactera pour définir les prochaines étapes.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="inline-flex items-center gap-2 text-sm text-[#FE640E] hover:text-[#FF8812] font-semibold pt-4"
                >
                  <span>Envoyer un autre message</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Unified 5-Option Priority Selector */}
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between">
                    <label className="block text-xs uppercase font-mono tracking-wider text-[#7C8894]">
                      Votre besoin prioritaire *
                    </label>
                    <span className="text-[11px] text-[#7C8894]">1 choix</span>
                  </div>

                  <div
                    role="radiogroup"
                    aria-label="Votre besoin prioritaire"
                    className="rounded-[2px] border border-[#28323C] bg-[#0C1116] divide-y divide-[#28323C]/80 overflow-hidden"
                  >
                    {BESOIN_ITEMS.map((item) => {
                      const Icon = item.icon;
                      const isSelected = selectedBesoin === item.value;

                      return (
                        <button
                          type="button"
                          role="radio"
                          aria-checked={isSelected}
                          key={item.value}
                          onClick={() => handleBesoinClick(item.value)}
                          className={`relative w-full px-4 py-3.5 text-left flex items-center justify-between gap-4 transition-colors duration-150 ${
                            isSelected
                              ? 'bg-[#FE640E]/[0.09] text-[#EFEAE2]'
                              : 'hover:bg-[#151A20]/70 text-[#EFEAE2]/85'
                          }`}
                        >
                          {/* Active Left Indicator Bar */}
                          {isSelected && (
                            <span
                              aria-hidden="true"
                              className="absolute left-0 top-0 bottom-0 w-[3px] bg-[#FE640E]"
                            />
                          )}

                          <div className="flex items-center gap-3.5 min-w-0">
                            <span
                              className={`w-8 h-8 rounded-[2px] border flex items-center justify-center shrink-0 transition-colors ${
                                isSelected
                                  ? 'bg-[#FE640E]/15 border-[#FE640E]/50 text-[#FE640E]'
                                  : 'bg-[#151A20] border-[#28323C] text-[#7C8894]'
                              }`}
                            >
                              <Icon className="w-4 h-4" />
                            </span>

                            <div className="text-sm leading-snug">
                              <span className={isSelected ? 'font-semibold text-[#EFEAE2]' : 'font-medium'}>
                                {item.label}
                              </span>
                              {item.detail && (
                                <span
                                  className={`block sm:inline sm:ml-1.5 text-xs font-normal ${
                                    isSelected ? 'text-[#EFEAE2]/75' : 'text-[#7C8894]'
                                  }`}
                                >
                                  {item.detail}
                                </span>
                              )}
                            </div>
                          </div>

                          {/* Crisp Radio Check Indicator */}
                          <span
                            className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 transition-all ${
                              isSelected
                                ? 'bg-[#FE640E] border-[#FE640E] text-[#EFEAE2]'
                                : 'border-[#28323C] bg-transparent'
                            }`}
                          >
                            {isSelected && <Check className="w-3 h-3 stroke-[3]" />}
                          </span>
                        </button>
                      );
                    })}
                  </div>

                  <input type="hidden" {...register('besoin')} value={selectedBesoin} />
                </div>

                {/* Nom et organisation */}
                <div className="space-y-2">
                  <label className="block text-xs uppercase font-mono tracking-wider text-[#7C8894]">
                    Nom et organisation *
                  </label>
                  <input
                    {...register('nom')}
                    placeholder="Ex: Fatou Ndiaye · Direction RH / Entreprise XYZ"
                    className="w-full bg-[#0C1116] border border-[#28323C] focus:border-[#FE640E] text-[#EFEAE2] px-4 py-3 rounded-[2px] text-sm focus:outline-none transition-colors"
                  />
                  {errors.nom && (
                    <p className="text-xs text-red-400">{errors.nom.message}</p>
                  )}
                </div>

                {/* E-mail & Téléphone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="block text-xs uppercase font-mono tracking-wider text-[#7C8894]">
                      E-mail professionnel *
                    </label>
                    <input
                      {...register('email')}
                      type="email"
                      placeholder="nom@organisation.sn"
                      className="w-full bg-[#0C1116] border border-[#28323C] focus:border-[#FE640E] text-[#EFEAE2] px-4 py-3 rounded-[2px] text-sm focus:outline-none transition-colors"
                    />
                    {errors.email && (
                      <p className="text-xs text-red-400">{errors.email.message}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <label className="block text-xs uppercase font-mono tracking-wider text-[#7C8894]">
                      Téléphone (facultatif)
                    </label>
                    <input
                      {...register('telephone')}
                      type="tel"
                      placeholder="+221 ..."
                      className="w-full bg-[#0C1116] border border-[#28323C] focus:border-[#FE640E] text-[#EFEAE2] px-4 py-3 rounded-[2px] text-sm focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                {/* Message libre */}
                <div className="space-y-2">
                  <label className="block text-xs uppercase font-mono tracking-wider text-[#7C8894]">
                    Votre défi de formation en quelques mots *
                  </label>
                  <textarea
                    {...register('message')}
                    rows={3}
                    placeholder="Décrivez votre public (salariés, étudiants...), les compétences visées et vos contraintes de déploiement..."
                    className="w-full bg-[#0C1116] border border-[#28323C] focus:border-[#FE640E] text-[#EFEAE2] px-4 py-3 rounded-[2px] text-sm focus:outline-none transition-colors"
                  />
                  {errors.message && (
                    <p className="text-xs text-red-400">{errors.message.message}</p>
                  )}
                </div>

                {/* Bouton Principal de conversion */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#FE640E] hover:bg-[#FF8812] text-[#EFEAE2] font-semibold py-4 px-6 rounded-[2px] shadow-lg shadow-[#FE640E]/20 transition-all duration-200 flex items-center justify-center gap-3 disabled:opacity-50 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>{isSubmitting ? "Envoi en cours..." : "Demander un diagnostic"}</span>
                </button>

                <p className="text-center text-xs text-[#EFEAE2]/75 pt-1">
                  Notre équipe étudiera votre demande et vous recontactera pour définir les prochaines étapes.
                </p>
              </form>
            )}
          </div>

          {/* Contact Direct & Alternatif Visible (5 cols, sticky on desktop) */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 space-y-6">
            <div className="bg-[#151A20] p-8 border border-[#28323C] rounded-[2px]">
              <h3 className="font-archivo-display text-xl font-bold text-[#EFEAE2] mb-6">
                Contact direct alternatif
              </h3>

              <ul className="space-y-6 text-sm">
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-[2px] bg-[#28323C]/50 flex items-center justify-center text-[#FE640E] shrink-0 mt-0.5">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs font-mono text-[#7C8894] uppercase tracking-wider mb-1">
                      Email direct
                    </span>
                    <a
                      href="mailto:ktmacademysn@gmail.com"
                      className="text-base font-semibold text-[#EFEAE2] hover:text-[#FE640E] transition-colors"
                    >
                      ktmacademysn@gmail.com
                    </a>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-[2px] bg-[#28323C]/50 flex items-center justify-center text-[#FE640E] shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs font-mono text-[#7C8894] uppercase tracking-wider mb-1">
                      Siège & Ateliers
                    </span>
                    <p className="text-base font-medium text-[#EFEAE2]">
                      Dakar
                    </p>
                    <p className="text-xs text-[#7C8894]">Sénégal</p>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-[2px] bg-[#28323C]/50 flex items-center justify-center text-[#FE640E] shrink-0 mt-0.5">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs font-mono text-[#7C8894] uppercase tracking-wider mb-1">
                      Téléphone
                    </span>
                    <a
                      href="tel:+221773840008"
                      className="text-base font-semibold text-[#EFEAE2] hover:text-[#FE640E] transition-colors"
                    >
                      +221 77 384 00 08
                    </a>
                  </div>
                </li>
              </ul>
            </div>

            {/* Engagement de Réponse Rapide */}
            <div className="p-6 bg-[#0E151E] border border-[#28323C] rounded-[2px]">
              <h4 className="font-semibold text-sm text-[#EFEAE2] mb-2">
                Pourquoi un diagnostic préalable ?
              </h4>
              <p className="text-xs text-[#7C8894] leading-relaxed">
                Que vous soyez une entreprise, une institution, un professionnel ou un porteur de projet, KTM Academy vous accompagne dans la conception de solutions de formation, d'expériences immersives et de programmes pratiques adaptés à vos objectifs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
