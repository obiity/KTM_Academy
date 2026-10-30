'use client';

import React from 'react';
import Link from 'next/link';
import { LogoLockup } from '../brand/LogoLockup';
import { Mail, MapPin, Phone, ArrowUpRight } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#070C12] border-t border-[#28323C] text-[#EFEAE2] py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-[#28323C]">
          
          {/* Col 1: Logo & Brief Description */}
          <div className="md:col-span-5 space-y-5">
            <LogoLockup variant="knockout" height={60} />
            <p className="text-sm text-[#EFEAE2]/80 leading-relaxed max-w-sm">
              Former autrement. Transformer les compétences. Solutions concrètes pour la formation professionnelle et l’innovation pédagogique.
            </p>
            <p className="text-xs text-[#7C8894]">
              Une EdTech sénégalaise engagée pour l’emploi et la maîtrise des compétences terrain.
            </p>
          </div>

          {/* Col 2: Navigation rapide (4 entrées) */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="font-mono text-xs uppercase tracking-wider text-[#FE640E] font-semibold">
              Navigation
            </h4>
            <ul className="space-y-3 text-sm text-[#EFEAE2]/80">
              <li>
                <a href="#hero" className="hover:text-[#FE640E] transition-colors">
                  Accueil (Promesse)
                </a>
              </li>
              <li>
                <a href="#solutions" className="hover:text-[#FE640E] transition-colors">
                  Nos solutions
                </a>
              </li>
              <li>
                <a href="#voksia" className="hover:text-[#FE640E] transition-colors">
                  Plateforme VOKSIA
                </a>
              </li>
              <li>
                <a href="#preuves" className="hover:text-[#FE640E] transition-colors">
                  Nos preuves & cas
                </a>
              </li>
              <li>
                <a href="#a-propos" className="hover:text-[#FE640E] transition-colors">
                  À propos & Équipe
                </a>
              </li>
              <li>
                <a href="#partenaires" className="hover:text-[#FE640E] transition-colors">
                  Nos partenaires
                </a>
              </li>
              <li>
                <a href="#contact" className="text-[#FE640E] font-medium hover:underline flex items-center gap-1">
                  <span>Demander un diagnostic</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Informations de bas de page officielles du brief */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="font-mono text-xs uppercase tracking-wider text-[#FE640E] font-semibold">
              Coordonnées officielles
            </h4>
            <div className="space-y-3 text-sm text-[#EFEAE2]/80">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#FE640E] shrink-0 mt-0.5" />
                <span>KTM Skills Academy | Dakar</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#FE640E] shrink-0" />
                <a href="mailto:ktmacademysn@gmail.com" className="hover:text-[#FE640E] transition-colors">
                  ktmacademysn@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#FE640E] shrink-0" />
                <a href="tel:+221773840008" className="hover:text-[#FE640E] transition-colors">
                  +221 77 384 00 08
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Filiation & Mentions légales */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#7C8894]">
          <p>© {new Date().getFullYear()} KTM Skills Academy. Tous droits réservés.</p>
          <p className="text-center sm:text-right">
            Savoir-faire et socle d’expérience issus de l’historique KTM Advance · Dakar, Sénégal
          </p>
        </div>
      </div>
    </footer>
  );
};
