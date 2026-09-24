import React from 'react';
import { Projects } from '../components/Projects';

export const ProjectsPage: React.FC = () => {
  return (
    <main className="pt-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="max-w-3xl">
          <p className="text-xs font-mono uppercase tracking-wider text-cyan-600 dark:text-cyan-400 mb-2">
            Case Studies & Applications
          </p>
          <h1 className="text-4xl font-extrabold tracking-tight text-neutral-900 dark:text-white">
            Projects Portfolio
          </h1>
          <p className="mt-3 text-base text-neutral-600 dark:text-neutral-400 leading-relaxed">
            Every project has a complete case study detailing problem formulation, system workflow, architecture, technical challenges, and key engineering takeaways. Click on any card below to read the comprehensive breakdown.
          </p>
        </div>
      </div>

      <Projects showTitle={false} />
    </main>
  );
};
