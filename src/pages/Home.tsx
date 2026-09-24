import React from 'react';
import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { Skills } from '../components/Skills';
import { CodingDSA } from '../components/CodingDSA';
import { Education } from '../components/Education';
import { Experience } from '../components/Experience';
import { Projects } from '../components/Projects';
import { Certifications } from '../components/Certifications';
import { Achievements } from '../components/Achievements';
import { CurrentFocus } from '../components/CurrentFocus';
import { Resume } from '../components/Resume';
import { Contact } from '../components/Contact';

export const Home: React.FC = () => {
  return (
    <main>
      <Hero />
      <About />
      <Skills />
      <CodingDSA />
      <Projects limit={6} />
      <Experience />
      <Education />
      <Certifications />
      <Achievements />
      <CurrentFocus />
      <Resume />
      <Contact />
    </main>
  );
};
