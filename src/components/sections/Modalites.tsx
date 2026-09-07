import React from 'react';
import { contentFr } from '@/content/fr';
import { SectionHeader } from '../ui/SectionHeader';
import {
  Monitor,
  Tablet,
  Smartphone,
  WifiOff,
  Users2,
  Laptop,
  Zap,
  Award,
  CheckCircle2,
  Layers
} from 'lucide-react';

export const Modalites: React.FC = () => {
  const { modalites } = contentFr;

  const itemIcons = [Laptop, Zap, Award, WifiOff, Users2];

  return (
    <section id="modalites" className="bg-[#EFEAE2] text-[#151A20] py-24 lg:py-36 border-b border-[#28323C]/20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <SectionHeader
          title={modalites.titre}
          intro={modalites.sous_titre}
          theme="light"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center my-12">
          {/* Left Column (6 Cols) - Definition List with Icons */}
          <div className="lg:col-span-6 space-y-4">
            {modalites.items.map((item, i) => {
              const IconComp = itemIcons[i] || Laptop;
              return (
                <div
                  key={i}
                  className="p-5 bg-[#151A20] text-[#EFEAE2] rounded-[4px] border-l-4 border-[#FE640E] flex items-start gap-4 shadow-md group hover:bg-[#0C1116] transition-all duration-300"
                >
                  <div className="p-2.5 bg-[#FE640E]/15 text-[#FE640E] rounded-[4px] shrink-0 mt-0.5 group-hover:scale-110 transition-transform">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <span className="font-archivo-display font-bold text-lg text-[#EFEAE2] block group-hover:text-[#FE640E] transition-colors">
                      {item.terme}
                    </span>
                    <p className="text-sm text-[#7C8894] group-hover:text-[#EFEAE2]/90 leading-relaxed transition-colors">
                      {item.texte}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column (6 Cols) - Multi-Device & Offline Compatibility Display Card */}
          <div className="lg:col-span-6 bg-[#151A20] text-[#EFEAE2] p-8 lg:p-10 rounded-[4px] border border-[#28323C] shadow-2xl space-y-8">
            <div className="space-y-2 border-b border-[#28323C] pb-6">
              <span className="font-mono text-xs text-[#FE640E] font-bold tracking-widest block uppercase">
                COMPATIBILITÉ MULTI-SUPPORTS
              </span>
              <h3 className="font-archivo-display font-bold text-2xl text-[#EFEAE2]">
                Apprenez où que vous soyez, en ligne ou hors ligne
              </h3>
            </div>

            {/* Device Grid Badges */}
            <div className="grid grid-cols-3 gap-4">
              {/* Desktop */}
              <div className="p-5 bg-[#0C1116] border border-[#28323C] rounded-[4px] text-center space-y-3 hover:border-[#FE640E] transition-all duration-300 group">
                <div className="p-3 bg-[#28323C] text-[#5C7C93] group-hover:text-[#FE640E] group-hover:scale-110 rounded-[4px] w-fit mx-auto transition-all duration-300">
                  <Monitor className="w-6 h-6" />
                </div>
                <div>
                  <span className="font-archivo-display font-bold text-sm block text-[#EFEAE2]">Ordinateur</span>
                  <span className="text-[11px] text-[#7C8894]">LMS complet</span>
                </div>
              </div>

              {/* Tablet */}
              <div className="p-5 bg-[#0C1116] border border-[#28323C] rounded-[4px] text-center space-y-3 hover:border-[#FE640E] transition-all duration-300 group">
                <div className="p-3 bg-[#28323C] text-[#5C7C93] group-hover:text-[#FE640E] group-hover:scale-110 rounded-[4px] w-fit mx-auto transition-all duration-300">
                  <Tablet className="w-6 h-6" />
                </div>
                <div>
                  <span className="font-archivo-display font-bold text-sm block text-[#EFEAE2]">Tablette</span>
                  <span className="text-[11px] text-[#7C8894]">Interactif</span>
                </div>
              </div>

              {/* Mobile */}
              <div className="p-5 bg-[#0C1116] border border-[#28323C] rounded-[4px] text-center space-y-3 hover:border-[#FE640E] transition-all duration-300 group">
                <div className="p-3 bg-[#28323C] text-[#5C7C93] group-hover:text-[#FE640E] group-hover:scale-110 rounded-[4px] w-fit mx-auto transition-all duration-300">
                  <Smartphone className="w-6 h-6" />
                </div>
                <div>
                  <span className="font-archivo-display font-bold text-sm block text-[#EFEAE2]">Smartphone</span>
                  <span className="text-[11px] text-[#7C8894]">Microlearning</span>
                </div>
              </div>
            </div>

            {/* Offline Sync Banner */}
            <div className="p-4 bg-[#0C1116] border border-[#FE640E]/30 rounded-[4px] flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-[#FE640E]/15 text-[#FE640E] rounded-[3px]">
                  <WifiOff className="w-5 h-5" />
                </div>
                <div>
                  <span className="font-archivo-display font-bold text-sm block text-[#EFEAE2]">Accès Hors Ligne Partiel</span>
                  <span className="text-xs text-[#7C8894]">Synchronisation automatique dès reconnexion</span>
                </div>
              </div>
              <div className="w-2.5 h-2.5 bg-[#FE640E] rounded-full animate-pulse shrink-0" />
            </div>
          </div>
        </div>

        <p className="mt-8 text-base font-semibold text-[#151A20] pt-6 border-t border-[#28323C]/20 text-center">
          {modalites.cloture}
        </p>
      </div>
    </section>
  );
};
