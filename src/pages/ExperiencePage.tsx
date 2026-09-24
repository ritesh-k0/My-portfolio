import React from 'react';
import { Experience } from '../components/Experience';
import { Projects } from '../components/Projects';

export const ExperiencePage: React.FC = () => {
  return (
    <main>
      <Experience />
      <Projects showTitle={true} limit={3} />
    </main>
  );
};
