'use client';

import React, { useState } from 'react';
import { contentFr } from '@/content/fr';
import { SectionHeader } from '../ui/SectionHeader';
import { Button } from '../ui/Button';
import { PixelMarker } from '../ui/PixelMarker';
import { VrHeadset } from '../ui/VrHeadset';
import {
  Rocket,
  Gamepad2,
  LayoutGrid,
  Wrench,
  Users,
  Send,
  BarChart3,
  CheckCircle2
} from 'lucide-react';

export const Solutions: React.FC = () => {
  const { solutions } = contentFr;
  const { configurateur } = solutions;

  // Selected base pack (index 0..4)
  const [selectedPackIndex, setSelectedPackIndex] = useState<number>(0);
  // Selected complements (set of indices 0..3)
  const [selectedComplements, setSelectedComplements] = useState<number[]>([]);

  const packIcons = [Rocket, Gamepad2, VrHeadset, LayoutGrid, Wrench];
  const complementIcons = [Users, Send, Wrench, BarChart3];

  const handlePackSelect = (index: number) => {
    setSelectedPackIndex(index);
  };

  const handleComplementToggle = (index: number) => {
    if (selectedComplements.includes(index)) {
      setSelectedComplements(selectedComplements.filter((i) => i !== index));
    } else {
      setSelectedComplements([...selectedComplements, index]);
    }
  };

  const selectedPack = solutions.packs[selectedPackIndex];
  const chosenComplementsList = selectedComplements
    .map((i) => solutions.complements[i].titre)
    .join(', ');

  const summarySentence = selectedComplements.length > 0
    ? configurateur.template_avec
        .replace('{PACK}', selectedPack.titre)
        .replace('{COMPLÉMENTS}', chosenComplementsList)
    : configurateur.template_sans.replace('{PACK}', selectedPack.titre);

  const handleSendConfig = () => {
    const contactTextarea = document.getElementById('contact-besoin') as HTMLTextAreaElement;
    if (contactTextarea) {
      contactTextarea.value = `[Configuration choisie] ${summarySentence}`;
    }
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="solutions" className="bg-[#EFEAE2] text-[#151A20] py-24 lg:py-36 border-b border-[#28323C]/20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <SectionHeader
          title="Nos solutions"
          intro={solutions.intro}
          theme="light"
        />

        {/* Modular Packs Display Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 my-12">
          {solutions.packs.map((pack, i) => {
            const IconComp = packIcons[i] || Rocket;
            return (
              <div
                key={i}
                className="bg-[#151A20] text-[#EFEAE2] p-6 rounded-[4px] border-t-4 border-t-[#FE640E] border border-[#28323C] flex flex-col justify-between space-y-4 hover:border-[#FE640E] transition-all duration-300 group shadow-md"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs text-[#7C8894]">PACK 0{i + 1}</span>
                    <div className="p-2 bg-[#28323C] text-[#FE640E] rounded-[3px] group-hover:scale-110 transition-transform">
                      <IconComp className="w-4 h-4" />
                    </div>
                  </div>
                  <h3 className="font-archivo-display font-bold text-lg text-[#EFEAE2] group-hover:text-[#FE640E] transition-colors">
                    {pack.titre}
                  </h3>
                  <p className="text-xs text-[#FE640E] font-semibold">{pack.contenu}</p>
                </div>
                <p className="text-xs text-[#7C8894] pt-4 border-t border-[#28323C] leading-relaxed">
                  {pack.usage}
                </p>
              </div>
            );
          })}
        </div>

        {/* Interactive Configurator Surface */}
        <div className="mt-16 bg-[#151A20] text-[#EFEAE2] p-8 lg:p-12 rounded-[4px] border-l-4 border-[#FE640E] shadow-2xl space-y-8">
          <div>
            <h3 className="font-archivo-display font-bold text-2xl lg:text-3xl text-[#EFEAE2]">
              {configurateur.titre}
            </h3>
            <p className="text-sm text-[#7C8894] mt-1">
              Personnalisez votre projet de formation en temps réel.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Step 1: Base Pack Selection (Radio Group) */}
            <div className="lg:col-span-5 space-y-4">
              <h4 className="font-archivo-display font-semibold text-sm uppercase tracking-wider text-[#7C8894]">
                {configurateur.label_packs}
              </h4>

              <div role="radiogroup" aria-label={configurateur.label_packs} className="space-y-3">
                {solutions.packs.map((pack, idx) => {
                  const isSelected = selectedPackIndex === idx;
                  const IconComp = packIcons[idx] || Rocket;
                  return (
                    <div
                      key={idx}
                      role="radio"
                      aria-checked={isSelected}
                      tabIndex={0}
                      onClick={() => handlePackSelect(idx)}
                      onKeyDown={(e) => {
                        if (e.key === ' ' || e.key === 'Enter') {
                          e.preventDefault();
                          handlePackSelect(idx);
                        }
                      }}
                      className={`p-4 rounded-[4px] cursor-pointer transition-all duration-200 flex items-center justify-between border ${
                        isSelected
                          ? 'bg-[#28323C] border-[#FE640E] border-l-4 pl-4 shadow-md'
                          : 'bg-[#151A20] border-[#28323C] hover:border-[#7C8894]'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`p-2 rounded-[3px] ${isSelected ? 'bg-[#FE640E] text-[#EFEAE2]' : 'bg-[#28323C] text-[#7C8894]'}`}>
                          <IconComp className="w-4 h-4" />
                        </div>
                        <div className="space-y-0.5">
                          <span className="font-archivo-display font-semibold text-base block text-[#EFEAE2]">
                            {pack.titre}
                          </span>
                          <span className="text-xs text-[#7C8894]">{pack.contenu}</span>
                        </div>
                      </div>
                      {isSelected && <CheckCircle2 className="w-5 h-5 text-[#FE640E]" />}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Complements Selection (Checkbox Group) */}
            <div className="lg:col-span-4 space-y-4">
              <h4 className="font-archivo-display font-semibold text-sm uppercase tracking-wider text-[#7C8894]">
                {configurateur.label_complements}
              </h4>

              <div className="space-y-3">
                {solutions.complements.map((comp, idx) => {
                  const isChecked = selectedComplements.includes(idx);
                  const IconComp = complementIcons[idx] || Users;
                  return (
                    <div
                      key={idx}
                      role="checkbox"
                      aria-checked={isChecked}
                      tabIndex={0}
                      onClick={() => handleComplementToggle(idx)}
                      onKeyDown={(e) => {
                        if (e.key === ' ' || e.key === 'Enter') {
                          e.preventDefault();
                          handleComplementToggle(idx);
                        }
                      }}
                      className={`p-4 rounded-[4px] cursor-pointer transition-all duration-200 flex items-center justify-between border ${
                        isChecked
                          ? 'bg-[#28323C] border-[#FE640E] border-l-4 pl-4 shadow-md'
                          : 'bg-[#151A20] border-[#28323C] hover:border-[#7C8894]'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`p-2 rounded-[3px] ${isChecked ? 'bg-[#FE640E] text-[#EFEAE2]' : 'bg-[#28323C] text-[#7C8894]'}`}>
                          <IconComp className="w-4 h-4" />
                        </div>
                        <div className="space-y-0.5">
                          <span className="font-archivo-display font-semibold text-base block text-[#EFEAE2]">
                            {comp.titre}
                          </span>
                          <span className="text-xs text-[#7C8894]">{comp.texte}</span>
                        </div>
                      </div>
                      {isChecked && <CheckCircle2 className="w-5 h-5 text-[#FE640E]" />}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Live Summary Panel */}
            <div className="lg:col-span-3 bg-[#0C1116] p-6 rounded-[4px] border border-[#28323C] space-y-6">
              <h4 className="font-archivo-display font-semibold text-sm uppercase tracking-wider text-[#7C8894]">
                {configurateur.label_resume}
              </h4>

              <div aria-live="polite" className="space-y-3">
                <p className="text-sm text-[#EFEAE2] font-normal leading-relaxed">
                  {summarySentence}
                </p>
              </div>

              <Button
                variant="primary"
                onClick={handleSendConfig}
                className="w-full text-xs py-3 px-4"
              >
                {configurateur.cta}
              </Button>
            </div>
          </div>
        </div>

        <p className="mt-8 text-center text-sm text-[#7C8894]">
          {solutions.cloture}
        </p>
      </div>
    </section>
  );
};
