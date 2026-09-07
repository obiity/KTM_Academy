import React from 'react';
import { contentFr } from '@/content/fr';
import { LogoLockup } from '../brand/LogoLockup';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0C1116] border-t border-[#28323C] text-[#EFEAE2] py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-[#28323C]">
          {/* Column 1: Logo & Signature */}
          <div className="md:col-span-6 space-y-6">
            <LogoLockup variant="knockout" height={80} />
            <p className="text-base text-[#EFEAE2]/80 max-prose-width">
              {contentFr.footer.signature}
            </p>
            <p className="text-sm text-[#7C8894]">
              {contentFr.identite.mention_structure}
            </p>
          </div>

          {/* Column 2: Domaines */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="font-archivo-display font-semibold text-sm uppercase tracking-wider text-[#7C8894]">
              Expertises
            </h4>
            <ul className="space-y-2.5 text-sm text-[#EFEAE2]/80">
              {contentFr.identite.domaines.map((d) => (
                <li key={d}>{d}</li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact quick ref */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="font-archivo-display font-semibold text-sm uppercase tracking-wider text-[#7C8894]">
              Contact
            </h4>
            <div className="space-y-2 text-sm text-[#EFEAE2]/80">
              <p>{contentFr.contact.coordonnees.adresse}</p>
              <p>{contentFr.contact.coordonnees.telephone}</p>
              <p className="text-[#5C7C93] font-medium">{contentFr.contact.coordonnees.email}</p>
            </div>
          </div>
        </div>

        {/* Bottom copyright & legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#7C8894]">
          <p>{contentFr.footer.copyright}</p>
          <div className="flex items-center gap-6">
            {contentFr.footer.liens.map((link) => (
              <a key={link} href="#" className="hover:text-[#EFEAE2] transition-colors">
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
