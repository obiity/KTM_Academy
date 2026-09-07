import React from 'react';
import { contentFr } from '@/content/fr';
import { SectionHeader } from '../ui/SectionHeader';
import { VrHeadset } from '../ui/VrHeadset';
import {
  GraduationCap,
  FileText,
  MonitorPlay,
  Gamepad2,
  BarChart3,
  Users,
  Globe
} from 'lucide-react';

export const CatalogueServices: React.FC = () => {
  const { catalogue_services } = contentFr;

  const serviceIcons = [
    GraduationCap,
    FileText,
    MonitorPlay,
    Gamepad2,
    VrHeadset,
    BarChart3,
    Users,
    Globe
  ];

  return (
    <section id="services" className="bg-[#151A20] text-[#EFEAE2] py-24 lg:py-36 border-b border-[#28323C]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <SectionHeader
          title="Catalogue de services"
          intro={catalogue_services.intro}
          theme="dark"
        />

        {/* 4x2 Asymmetric Plotted Grid with Icons & Micro-Animations */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-r border-b border-[#28323C]">
          {catalogue_services.items.map((item, idx) => {
            const IconComponent = serviceIcons[idx] || GraduationCap;
            const isTall = idx === 0 || idx === 3 || idx === 4;

            return (
              <div
                key={idx}
                className={`border-t border-l border-[#28323C] p-8 flex flex-col justify-between group hover:bg-[#28323C]/30 transition-all duration-300 relative overflow-hidden ${
                  isTall ? 'min-h-[300px] lg:min-h-[360px]' : 'min-h-[240px]'
                }`}
              >
                {/* Top Corner Accent Line on Hover */}
                <div className="absolute top-0 left-0 w-0 h-1 bg-[#FE640E] group-hover:w-full transition-all duration-300" />

                <div className="space-y-5">
                  {/* Header Row: Service Number & Icon */}
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs text-[#7C8894] tracking-wider block">
                      SERVICE {String(idx + 1).padStart(2, '0')}
                    </span>
                    <div className="p-2.5 rounded-[4px] bg-[#28323C]/50 text-[#5C7C93] group-hover:bg-[#FE640E]/15 group-hover:text-[#FE640E] transition-all duration-300">
                      <IconComponent className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="font-archivo-display font-bold text-xl lg:text-2xl text-[#EFEAE2] group-hover:text-[#FE640E] transition-colors leading-snug">
                    {item.titre}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-sm lg:text-base text-[#7C8894] group-hover:text-[#EFEAE2]/80 mt-6 leading-relaxed transition-colors">
                  {item.texte}
                </p>
              </div>
            );
          })}
        </div>

        {/* Clôture & Quick Stats */}
        <div className="mt-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pt-8 border-t border-[#28323C]">
          <p className="text-base lg:text-lg font-medium text-[#EFEAE2]/90 max-prose-width">
            {catalogue_services.cloture}
          </p>
          <div className="flex items-center gap-12">
            {catalogue_services.chiffres.map((c, i) => (
              <div key={i} className="text-left">
                <span className="font-mono text-2xl lg:text-3xl font-bold text-[#FE640E] block" style={{ fontFamily: 'var(--font-martian), monospace' }}>
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
