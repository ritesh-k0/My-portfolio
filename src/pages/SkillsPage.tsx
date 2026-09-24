import React from 'react';
import { Skills } from '../components/Skills';
import { CodingDSA } from '../components/CodingDSA';
import { CurrentFocus } from '../components/CurrentFocus';

export const SkillsPage: React.FC = () => {
  return (
    <main>
      <Skills />
      <CodingDSA />
      <CurrentFocus />
    </main>
  );
};
