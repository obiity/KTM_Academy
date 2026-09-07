import React from 'react';
import { Hero } from '@/components/hero/Hero';
import { Positionnement } from '@/components/sections/Positionnement';
import { CatalogueServices } from '@/components/sections/CatalogueServices';
import { ServicesOrganisations } from '@/components/sections/ServicesOrganisations';
import { Expertises } from '@/components/sections/Expertises';
import { ModelePedagogique } from '@/components/sections/ModelePedagogique';
import { Modalites } from '@/components/sections/Modalites';
import { Immersif } from '@/components/sections/Immersif';
import { Ingenierie } from '@/components/sections/Ingenierie';
import { PoleHubTech } from '@/components/sections/PoleHubTech';
import { Solutions } from '@/components/sections/Solutions';
import { Capacites } from '@/components/sections/Capacites';
import { Perspectives } from '@/components/sections/Perspectives';
import { Equipe } from '@/components/sections/Equipe';
import { Contact } from '@/components/sections/Contact';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Positionnement />
      <CatalogueServices />
      <ServicesOrganisations />
      <Expertises />
      <ModelePedagogique />
      <Modalites />
      <Immersif />
      <Ingenierie />
      <PoleHubTech />
      <Solutions />
      <Capacites />
      <Perspectives />
      <Equipe />
      <Contact />
    </>
  );
}
