'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { contentFr } from '@/content/fr';
import { Button } from '../ui/Button';
import { PixelMarker } from '../ui/PixelMarker';
import { MessageSquare, SearchCheck, Rocket } from 'lucide-react';

const contactFormSchema = z.object({
  nom: z.string().min(1, contentFr.contact.formulaire.champ_requis),
  organisation: z.string().optional(),
  email: z.string().email(contentFr.contact.formulaire.email_invalide),
  telephone: z.string().optional(),
  besoin: z.string().min(1, contentFr.contact.formulaire.champ_requis)
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export const Contact: React.FC = () => {
  const { contact } = contentFr;
  const [statusMessage, setStatusMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema)
  });

  const onSubmit = async (data: ContactFormData) => {
    setStatusMessage(null);
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      const result = await response.json();
      if (response.ok && result.success) {
        setStatusMessage({ type: 'success', text: contact.formulaire.succes });
        reset();
      } else {
        setStatusMessage({ type: 'error', text: contact.formulaire.erreur_reseau });
      }
    } catch {
      setStatusMessage({ type: 'error', text: contact.formulaire.erreur_reseau });
    }
  };

  return (
    <section id="contact" className="bg-[#151A20] text-[#EFEAE2] py-24 lg:py-36 border-b border-[#28323C]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Centred Title Statement (The ONLY centred block on the site) */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-section-title font-archivo-display font-bold text-[#EFEAE2]">
            {contact.titre}
          </h2>
          <p className="text-base lg:text-lg text-[#EFEAE2]/80 leading-relaxed">
            {contact.corps}
          </p>
        </div>

        {/* Two Column Split: Form Left, Coordinates Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start my-12">
          {/* Form Left (7 Cols) */}
          <div className="lg:col-span-7 bg-[#0C1116] p-8 lg:p-12 border border-[#28323C] rounded-[2px] shadow-2xl">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Nom & prénom */}
                <div className="space-y-2">
                  <label className="block text-xs uppercase tracking-wider text-[#7C8894] font-medium">
                    {contact.formulaire.champs[0]} *
                  </label>
                  <input
                    {...register('nom')}
                    type="text"
                    className="w-full bg-[#151A20] border border-[#28323C] rounded-[2px] px-4 py-3 text-sm text-[#EFEAE2] focus:border-[#FE640E] focus:outline-none"
                  />
                  {errors.nom && (
                    <span className="text-xs text-[#FE640E]">{errors.nom.message}</span>
                  )}
                </div>

                {/* Organisation */}
                <div className="space-y-2">
                  <label className="block text-xs uppercase tracking-wider text-[#7C8894] font-medium">
                    {contact.formulaire.champs[1]}
                  </label>
                  <input
                    {...register('organisation')}
                    type="text"
                    className="w-full bg-[#151A20] border border-[#28323C] rounded-[2px] px-4 py-3 text-sm text-[#EFEAE2] focus:border-[#FE640E] focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* E-mail professionnel */}
                <div className="space-y-2">
                  <label className="block text-xs uppercase tracking-wider text-[#7C8894] font-medium">
                    {contact.formulaire.champs[2]} *
                  </label>
                  <input
                    {...register('email')}
                    type="email"
                    className="w-full bg-[#151A20] border border-[#28323C] rounded-[2px] px-4 py-3 text-sm text-[#EFEAE2] focus:border-[#FE640E] focus:outline-none"
                  />
                  {errors.email && (
                    <span className="text-xs text-[#FE640E]">{errors.email.message}</span>
                  )}
                </div>

                {/* Téléphone */}
                <div className="space-y-2">
                  <label className="block text-xs uppercase tracking-wider text-[#7C8894] font-medium">
                    {contact.formulaire.champs[3]}
                  </label>
                  <input
                    {...register('telephone')}
                    type="tel"
                    className="w-full bg-[#151A20] border border-[#28323C] rounded-[2px] px-4 py-3 text-sm text-[#EFEAE2] focus:border-[#FE640E] focus:outline-none"
                  />
                </div>
              </div>

              {/* Votre besoin */}
              <div className="space-y-2">
                <label className="block text-xs uppercase tracking-wider text-[#7C8894] font-medium">
                  {contact.formulaire.champs[4]} *
                </label>
                <textarea
                  id="contact-besoin"
                  {...register('besoin')}
                  rows={4}
                  className="w-full bg-[#151A20] border border-[#28323C] rounded-[2px] px-4 py-3 text-sm text-[#EFEAE2] focus:border-[#FE640E] focus:outline-none resize-none"
                />
                {errors.besoin && (
                  <span className="text-xs text-[#FE640E]">{errors.besoin.message}</span>
                )}
              </div>

              {statusMessage && (
                <div
                  className={`p-4 text-xs rounded-[2px] ${
                    statusMessage.type === 'success'
                      ? 'bg-[#FE640E]/10 border border-[#FE640E] text-[#FE640E]'
                      : 'bg-red-950/40 border border-red-500 text-red-400'
                  }`}
                >
                  {statusMessage.text}
                </div>
              )}

              <Button
                variant="primary"
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5"
              >
                {isSubmitting ? 'Envoi en cours...' : contact.formulaire.cta}
              </Button>
            </form>
          </div>

          {/* Coordinates Right (5 Cols) */}
          <div className="lg:col-span-5 space-y-8 bg-[#28323C]/30 p-8 lg:p-12 border border-[#28323C] rounded-[2px]">
            <div className="space-y-6">
              <h3 className="font-archivo-display font-bold text-xl text-[#EFEAE2]">
                Coordonnées
              </h3>

              <div className="space-y-4 text-sm text-[#EFEAE2]/90">
                <div>
                  <span className="block text-xs text-[#7C8894] uppercase tracking-wider">
                    {contact.coordonnees.adresse_label}
                  </span>
                  <span className="font-medium text-base">{contact.coordonnees.adresse}</span>
                </div>

                <div>
                  <span className="block text-xs text-[#7C8894] uppercase tracking-wider">
                    {contact.coordonnees.telephone_label}
                  </span>
                  <a href={`tel:${contact.coordonnees.telephone}`} className="font-mono text-base hover:text-[#FE640E] transition-colors">
                    {contact.coordonnees.telephone}
                  </a>
                </div>

                <div>
                  <span className="block text-xs text-[#7C8894] uppercase tracking-wider">
                    {contact.coordonnees.email_label}
                  </span>
                  <a href={`mailto:${contact.coordonnees.email}`} className="font-mono text-base text-[#5C7C93] hover:text-[#FE640E] transition-colors">
                    {contact.coordonnees.email}
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-[#28323C] space-y-2">
              <p className="font-archivo-display font-bold text-lg text-[#FE640E]">
                {contact.signature}
              </p>
            </div>
          </div>
        </div>

        {/* 3-Step Engagement Process (01 -> 03 Markers) */}
        <div className="mt-20 pt-16 border-t border-[#28323C]">
          <h3 className="font-archivo-display font-semibold text-center text-sm uppercase tracking-wider text-[#7C8894] mb-10">
            Parcours d'engagement
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative max-w-4xl mx-auto">
            {contact.processus.map((p, i) => {
              const icons = [MessageSquare, SearchCheck, Rocket];
              const IconComp = icons[i] || MessageSquare;

              return (
                <div key={i} className="bg-[#0C1116] p-6 rounded-[4px] border border-[#28323C] flex flex-col items-center text-center space-y-4 hover:border-[#FE640E] transition-all duration-300 group shadow-lg">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs font-bold text-[#FE640E] bg-[#151A20] border border-[#FE640E]/40 px-3 py-1 rounded-[3px]">
                      0{i + 1}
                    </span>
                    <div className="p-2.5 bg-[#151A20] text-[#FE640E] rounded-[4px] border border-[#28323C] group-hover:scale-110 transition-transform">
                      <IconComp className="w-5 h-5" />
                    </div>
                  </div>
                  <h4 className="font-archivo-display font-bold text-lg text-[#EFEAE2] group-hover:text-[#FE640E] transition-colors">
                    {p}
                  </h4>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
