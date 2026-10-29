import React from 'react';
import { HeroV2 } from '@/components/v2/HeroV2';
import { PourquoiKtmV2 } from '@/components/v2/PourquoiKtmV2';
import { SolutionsV2 } from '@/components/v2/SolutionsV2';
import { VoksiaSection } from '@/components/v2/VoksiaSection';
import { PreuvesV2 } from '@/components/v2/PreuvesV2';
import { AProposV2 } from '@/components/v2/AProposV2';
import { DiagnosticContactV2 } from '@/components/v2/DiagnosticContactV2';

export default function HomePage() {
  return (
    <>
      {/* 01. SECTION 01 — PROMESSE (HERO) */}
      <HeroV2 />

      {/* 02. SECTION 02 — POURQUOI CHOISIR KTM ? */}
      <PourquoiKtmV2 />

      {/* 03. SECTION 03 — TROIS FAÇONS DE TRAVAILLER AVEC KTM (SOLUTIONS) */}
      <SolutionsV2 />

      {/* 04. SECTION 04 — VOKSIA (PLATEFORME & APPLICATION MOBILE DÉDIÉE) */}
      <VoksiaSection />

      {/* 05. SECTION 05 — MONTRER PLUTÔT QUE RACONTER (PREUVES & RÉALISATIONS) */}
      <PreuvesV2 />

      {/* 06. SECTION 06 — VISION, VALEURS & ÉQUIPE (À PROPOS) */}
      <AProposV2 />

      {/* 07. SECTION 07 — QUEL EST VOTRE DÉFI DE FORMATION ? (DIAGNOSTIC & CONTACT) */}
      <DiagnosticContactV2 />
    </>
  );
}
