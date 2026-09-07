import React from 'react';
import Image from 'next/image';
import { contentFr } from '@/content/fr';
import { SectionHeader } from '../ui/SectionHeader';
import {
  Server,
  Smartphone,
  Layers,
  ShieldCheck,
  BarChart3,
  HelpCircle,
  FolderArchive,
  FlaskConical,
  Cpu,
  Network
} from 'lucide-react';

export const PoleHubTech: React.FC = () => {
  const { hub_tech } = contentFr;

  const poleIcons = [Server, Smartphone, Layers, ShieldCheck, BarChart3];
  const hubIcons = [HelpCircle, FolderArchive, FlaskConical, Cpu, Network];

  return (
    <section id="hub-tech" className="bg-[#151A20] text-[#EFEAE2] py-24 lg:py-36 border-b border-[#28323C]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <SectionHeader
          title={hub_tech.titre}
          intro={hub_tech.intro}
          theme="dark"
        />

        {/* High-Tech Dashboard Image Showcase */}
        <div className="my-12 relative aspect-[21/9] w-full rounded-[4px] overflow-hidden border border-[#28323C] shadow-2xl group">
          <Image
            src="/hub_tech_african.png"
            alt="Ingénieurs EdTech et Tableau de bord LMS KTM Hub-Tech à Dakar"
            fill
            className="object-cover group-hover:scale-102 transition-transform duration-700 opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#151A20]/90 via-transparent to-[#151A20]/80" />
          <div className="absolute bottom-6 left-6 p-4 bg-[#0C1116]/85 backdrop-blur-md border border-[#5C7C93]/40 rounded-[4px]">
            <span className="font-mono text-xs text-[#FE640E] font-bold block">HUB-TECH PLATFORM ARCHITECTURE</span>
            <span className="text-xs text-[#EFEAE2]/90 font-medium">Monitoring SCORM, Analytics & Ecosystème de formation</span>
          </div>
        </div>

        {/* Strict Diptych with 1px Vertical Rule Down the Centre */}
        <div className="grid grid-cols-1 lg:grid-cols-2 border border-[#28323C] divide-y lg:divide-y-0 lg:divide-x divide-[#28323C] my-12 rounded-[4px] overflow-hidden">
          {/* Pôle-Tech Left: --bleu-acier (#5C7C93) accent */}
          <div className="p-8 lg:p-12 space-y-6 bg-[#151A20] border-t-4 border-[#5C7C93] hover:bg-[#28323C]/20 transition-colors">
            <div className="space-y-2">
              <span className="font-mono text-xs uppercase tracking-widest text-[#5C7C93] font-semibold">
                DISPOSITIF 01
              </span>
              <h3 className="font-archivo-display font-bold text-3xl text-[#EFEAE2]">
                {hub_tech.pole_tech.titre}
              </h3>
              <p className="text-sm text-[#5C7C93] font-medium">
                Produire la technologie
              </p>
            </div>

            <ul className="space-y-4 pt-4">
              {hub_tech.pole_tech.items.map((item, i) => {
                const IconComp = poleIcons[i] || Server;
                return (
                  <li key={i} className="flex items-start gap-3.5 text-base text-[#EFEAE2]/90 group">
                    <div className="p-1.5 bg-[#28323C]/60 text-[#5C7C93] rounded-[3px] shrink-0 mt-0.5 group-hover:text-[#FE640E] group-hover:bg-[#FE640E]/10 transition-colors">
                      <IconComp className="w-4 h-4" />
                    </div>
                    <span>{item}</span>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Hub-Tech Right: --orange-ktm (#FE640E) accent */}
          <div className="p-8 lg:p-12 space-y-6 bg-[#151A20] border-t-4 border-[#FE640E] hover:bg-[#28323C]/20 transition-colors">
            <div className="space-y-2">
              <span className="font-mono text-xs uppercase tracking-widest text-[#FE640E] font-semibold">
                DISPOSITIF 02
              </span>
              <h3 className="font-archivo-display font-bold text-3xl text-[#EFEAE2]">
                {hub_tech.hub_tech.titre}
              </h3>
              <p className="text-sm text-[#FE640E] font-medium">
                Faire vivre l'écosystème
              </p>
            </div>

            <ul className="space-y-4 pt-4">
              {hub_tech.hub_tech.items.map((item, i) => {
                const IconComp = hubIcons[i] || Network;
                return (
                  <li key={i} className="flex items-start gap-3.5 text-base text-[#EFEAE2]/90 group">
                    <div className="p-1.5 bg-[#28323C]/60 text-[#FE640E] rounded-[3px] shrink-0 mt-0.5 group-hover:scale-110 transition-transform">
                      <IconComp className="w-4 h-4" />
                    </div>
                    <span>{item}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* Diptych Statement */}
        <div className="p-8 bg-[#0C1116] border border-[#28323C] rounded-[4px] mt-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <p className="text-base lg:text-lg font-normal text-[#EFEAE2]/90 max-prose-width">
            « {hub_tech.statement} »
          </p>
          <div className="flex items-center gap-8 shrink-0">
            {hub_tech.chiffres.map((c, i) => (
              <div key={i} className="text-center">
                <span className="font-mono text-2xl font-bold text-[#FE640E] block" style={{ fontFamily: 'var(--font-martian), monospace' }}>
                  {c.valeur}
                </span>
                <span className="text-xs text-[#7C8894] block">
                  {c.libelle}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
