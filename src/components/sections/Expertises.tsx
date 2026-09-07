import React from 'react';
import { contentFr } from '@/content/fr';
import { SectionHeader } from '../ui/SectionHeader';
import { VrHeadset } from '../ui/VrHeadset';
import {
  Gamepad2,
  GraduationCap,
  HeartHandshake,
  Compass,
  BookOpen,
  Cpu,
  MapPin
} from 'lucide-react';

export const Expertises: React.FC = () => {
  const { expertises } = contentFr;

  const expertiseIcons = [
    Gamepad2,
    GraduationCap,
    VrHeadset,
    HeartHandshake,
    Compass
  ];

  const pilierIcons = [BookOpen, Cpu, MapPin];

  return (
    <section id="expertises" className="bg-[#EFEAE2] text-[#151A20] py-24 lg:py-36 border-b border-[#28323C]/20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <SectionHeader
          title="Nos expertises"
          intro={expertises.difference}
          theme="light"
        />

        {/* 5 Hairline Spectrum Columns with Icons */}
        <div className="border-t border-b border-[#28323C]/30 divide-y md:divide-y-0 md:divide-x divide-[#28323C]/30 grid grid-cols-1 md:grid-cols-5 my-12">
          {expertises.items.map((item, i) => {
            const IconComp = expertiseIcons[i] || Gamepad2;
            return (
              <div key={i} className="py-8 md:px-6 first:pl-0 last:pr-0 space-y-4 group">
                <div className="p-3 bg-[#151A20] text-[#FE640E] rounded-[4px] w-fit group-hover:bg-[#FE640E] group-hover:text-[#EFEAE2] transition-colors duration-300">
                  <IconComp className="w-5 h-5" />
                </div>
                <h3 className="font-archivo-display font-bold text-xl text-[#151A20] group-hover:text-[#FE640E] transition-colors">
                  {item.titre}
                </h3>
                <p className="text-sm text-[#28323C] leading-relaxed">
                  {item.texte}
                </p>
              </div>
            );
          })}
        </div>

        {/* 3 Pillars Band on --acier (#28323C) */}
        <div className="mt-16 bg-[#28323C] text-[#EFEAE2] p-8 lg:p-12 rounded-[4px] shadow-2xl">
          <div className="mb-8 pb-6 border-b border-[#7C8894]/30">
            <h3 className="font-archivo-display font-bold text-xl lg:text-2xl text-[#EFEAE2]">
              {expertises.bande}
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {expertises.piliers.map((pilier, i) => {
              const PilierIcon = pilierIcons[i] || BookOpen;
              return (
                <div key={i} className="space-y-4 p-6 bg-[#151A20]/50 rounded-[4px] border border-[#7C8894]/20 hover:border-[#FE640E] transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-[#FE640E]/15 text-[#FE640E] rounded-[3px]">
                      <PilierIcon className="w-5 h-5" />
                    </div>
                    <h4 className="font-archivo-display font-bold text-lg text-[#EFEAE2]">
                      {pilier.titre}
                    </h4>
                  </div>
                  <p className="text-sm text-[#EFEAE2]/80 leading-relaxed">
                    {pilier.texte}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
