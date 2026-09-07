import React from 'react';
import { contentFr } from '@/content/fr';
import { SectionHeader } from '../ui/SectionHeader';
import { Search, Layers, Rocket, TrendingUp, CheckCircle2 } from 'lucide-react';

export const ServicesOrganisations: React.FC = () => {
  const { services_organisations } = contentFr;

  const processIcons = [Search, Layers, Rocket, TrendingUp];

  return (
    <section id="organisations" className="bg-[#EFEAE2] text-[#151A20] py-24 lg:py-36 border-b border-[#28323C]/20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <SectionHeader
          title="Services aux organisations"
          intro={services_organisations.intro}
          theme="light"
        />

        {/* 4 Steps Sequence Connected by Trace Motif */}
        <div className="my-16">
          <h3 className="font-archivo-display font-semibold text-lg uppercase tracking-wider text-[#7C8894] mb-8">
            Processus d'accompagnement
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {/* Connecting horizontal trace hairline on desktop */}
            <div className="hidden lg:block absolute top-[28px] left-[50px] right-[50px] h-[2px] bg-gradient-to-r from-[#FE640E] to-[#FF8812] z-0" />

            {services_organisations.etapes.map((etape, i) => {
              const IconComp = processIcons[i] || Search;
              return (
                <div key={i} className="relative z-10 bg-[#EFEAE2] p-6 rounded-[4px] border border-[#28323C]/20 shadow-sm space-y-4 hover:border-[#FE640E] transition-all duration-300 group">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-sm font-bold bg-[#151A20] text-[#FE640E] px-3 py-1 rounded-[3px]">
                      0{i + 1}
                    </span>
                    <div className="p-2 bg-[#151A20] text-[#FE640E] rounded-[3px] group-hover:scale-110 transition-transform">
                      <IconComp className="w-5 h-5" />
                    </div>
                  </div>
                  <h4 className="font-archivo-display font-bold text-xl text-[#151A20] group-hover:text-[#FE640E] transition-colors">
                    {etape.titre}
                  </h4>
                  <p className="text-sm text-[#28323C] leading-relaxed">
                    {etape.texte}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Split Grid: Benefits & Statement Quote */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-20 pt-16 border-t border-[#28323C]/30 items-center">
          {/* Benefits List (7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="font-archivo-display font-bold text-2xl text-[#151A20]">
              {services_organisations.benefices_titre}
            </h3>
            <ul className="space-y-4">
              {services_organisations.benefices.map((b, i) => (
                <li key={i} className="flex items-start gap-3.5 text-base text-[#151A20] group">
                  <CheckCircle2 className="w-5 h-5 text-[#FE640E] shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                  <span className="font-medium">{b}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Quote set large (5 Cols) */}
          <div className="lg:col-span-5 bg-[#151A20] text-[#EFEAE2] p-10 rounded-[4px] shadow-2xl border-t-4 border-[#FE640E] space-y-4">
            <blockquote className="font-archivo-display font-bold text-2xl lg:text-3xl leading-tight">
              {services_organisations.citation}
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};
