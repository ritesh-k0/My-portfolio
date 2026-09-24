import React from 'react';
import { About } from '../components/About';
import { Education } from '../components/Education';
import { CodingDSA } from '../components/CodingDSA';
import { CurrentFocus } from '../components/CurrentFocus';

export const AboutPage: React.FC = () => {
  return (
    <main>
      <About />
      <Education />
      <CodingDSA />
      <CurrentFocus />
    </main>
  );
};
