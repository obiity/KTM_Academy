import React from 'react';
import Image from 'next/image';
import { contentFr } from '@/content/fr';
import { SectionHeader } from '../ui/SectionHeader';
import { VrHeadset } from '../ui/VrHeadset';
import { Gamepad2, Users, Target, Sparkles } from 'lucide-react';

export const Immersif: React.FC = () => {
  const { immersif } = contentFr;

  const itemIcons = [Gamepad2, VrHeadset, Users, Target];

  return (
    <section id="immersif" className="relative bg-[#151A20] text-[#EFEAE2] py-24 lg:py-36 overflow-hidden border-b border-[#28323C]">
      {/* Background Deep Layer */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 70% 50%, #0C1116 0%, #151A20 80%)'
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="inline-flex items-center gap-2 bg-[#FE640E]/10 border border-[#FE640E] text-[#FE640E] text-xs font-mono uppercase tracking-widest px-3.5 py-1.5 mb-4 rounded-[3px]">
          <Sparkles className="w-3.5 h-3.5" />
          <span>{immersif.accroche}</span>
        </div>

        <SectionHeader
          title={immersif.titre}
          theme="dark"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center my-12">
          {/* Left Column (6 Cols) - 4 Immersive Items List */}
          <div className="lg:col-span-6 space-y-5">
            {immersif.items.map((item, i) => {
              const IconComp = itemIcons[i] || Gamepad2;
              return (
                <div
                  key={i}
                  className="flex items-start gap-4 p-6 bg-[#28323C]/30 border-l-4 border-[#FE640E] rounded-r-[4px] hover:bg-[#28323C]/60 transition-all duration-300 group"
                >
                  <div className="p-2.5 bg-[#151A20] text-[#FE640E] rounded-[4px] border border-[#28323C] group-hover:scale-110 transition-transform">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-archivo-display font-bold text-xl text-[#EFEAE2] group-hover:text-[#FE640E] transition-colors">
                      {item.titre}
                    </h3>
                    <p className="text-sm lg:text-base text-[#7C8894] group-hover:text-[#EFEAE2]/90 leading-relaxed transition-colors">
                      {item.texte}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column (6 Cols) - Generated High-Tech Visual Demonstration Card */}
          <div className="lg:col-span-6 space-y-6">
            <div className="relative aspect-[16/9] w-full rounded-[4px] overflow-hidden border border-[#28323C] group shadow-2xl">
              <Image
                src="/vr_simulation_african.png"
                alt="Simulation Immersive VR KTM Academy à Dakar"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0C1116] via-transparent to-transparent opacity-80" />

              {/* Holographic Badge Overlay */}
              <div className="absolute bottom-4 left-4 right-4 p-4 bg-[#0C1116]/90 backdrop-blur-md border border-[#FE640E]/40 rounded-[4px] flex items-center justify-between">
                <div>
                  <span className="font-mono text-xs text-[#FE640E] font-bold block">LABORATOIRE VR & SIMULATION</span>
                  <span className="text-xs text-[#EFEAE2]/80 font-medium">Conception de scénarios immersifs métiers</span>
                </div>
                <div className="w-2.5 h-2.5 bg-[#FE640E] rounded-full animate-ping" />
              </div>
            </div>

            {/* Display Statement Card */}
            <div className="bg-[#0C1116] p-8 lg:p-10 border border-[#28323C] rounded-[4px] shadow-xl space-y-3 border-l-4 border-l-[#FE640E]">
              <p className="font-archivo-display font-semibold text-xl lg:text-2xl text-[#EFEAE2] leading-relaxed italic">
                « {immersif.statement} »
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
