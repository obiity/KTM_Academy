import React from 'react';
import { contentFr } from '@/content/fr';
import { SectionHeader } from '../ui/SectionHeader';

export const Perspectives: React.FC = () => {
  const { perspectives } = contentFr;

  return (
    <section id="perspectives" className="bg-[#EFEAE2] text-[#151A20] py-24 lg:py-36 border-b border-[#28323C]/20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <SectionHeader
          title={perspectives.titre}
          intro={perspectives.vision}
          theme="light"
        />

        {/* 6 Items in a 3x2 Grid with Hairline Separators */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-r border-b border-[#28323C]/30 my-12">
          {perspectives.items.map((item, i) => (
            <div
              key={i}
              className="border-t border-l border-[#28323C]/30 p-8 space-y-3 bg-[#EFEAE2] hover:bg-[#151A20]/5 transition-colors"
            >
              <span className="font-mono text-xs font-semibold text-[#FE640E] block">
                AXE 0{i + 1}
              </span>
              <h3 className="font-archivo-display font-bold text-xl text-[#151A20]">
                {item.titre}
              </h3>
              <p className="text-sm text-[#28323C] leading-relaxed">
                {item.texte}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Vision 2030 Statement as a Full-Width Archivo Band on --encre */}
      <div className="mt-16 bg-[#151A20] text-[#EFEAE2] py-16 px-6 lg:px-12 border-t border-b border-[#28323C]">
        <div className="max-w-7xl mx-auto text-center space-y-4">
          <p className="font-archivo-display font-bold text-2xl lg:text-3xl text-[#EFEAE2] tracking-tight leading-snug">
            {perspectives.bande_cloture}
          </p>
        </div>
      </div>
    </section>
  );
};
