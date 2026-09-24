import React from 'react';
import { Education } from '../components/Education';
import { Certifications } from '../components/Certifications';
import { Achievements } from '../components/Achievements';

export const EducationPage: React.FC = () => {
  return (
    <main>
      <Education />
      <Certifications />
      <Achievements />
    </main>
  );
};
