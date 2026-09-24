import React from 'react';
import { GraduationCap, MapPin, Calendar, Building2, BookMarked } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const Education: React.FC = () => {
  const { education } = personalInfo;

  return (
    <section className="py-20 border-b border-neutral-200 dark:border-neutral-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <p className="text-xs font-mono uppercase tracking-wider text-cyan-600 dark:text-cyan-400 mb-2">
            Academic Background
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white">
            Education
          </h2>
          <p className="mt-3 text-base text-neutral-600 dark:text-neutral-400 leading-relaxed">
            Formal undergraduate engineering curriculum in Computer Science and Engineering.
          </p>
        </div>

        {/* Timeline Card */}
        <div className="relative pl-6 sm:pl-8 border-l-2 border-neutral-200 dark:border-neutral-800 max-w-3xl space-y-8">
          
          <div className="relative group">
            {/* Timeline bullet */}
            <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-cyan-500 border-4 border-white dark:border-neutral-950" />

            <div className="p-6 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/60 shadow-sm space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="text-xs font-mono text-cyan-600 dark:text-cyan-400 bg-cyan-50 dark:bg-cyan-950/40 px-2.5 py-1 rounded">
                  {education.currentYear} (Expected Graduation: {education.expectedGraduation})
                </span>
                <span className="text-xs text-neutral-500 font-mono flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5" /> {education.location}
                </span>
              </div>

              <div>
                <h3 className="text-xl font-bold text-neutral-900 dark:text-white">
                  {education.degree}
                </h3>
                <p className="text-sm font-medium text-neutral-700 dark:text-neutral-300 mt-1 flex items-center gap-1.5">
                  <Building2 className="w-4 h-4 text-neutral-400" />
                  <span>{education.institution}</span>
                </p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-0.5">
                  {education.department}
                </p>
              </div>

              <div className="pt-3 border-t border-neutral-100 dark:border-neutral-800 text-xs text-neutral-600 dark:text-neutral-400 space-y-2 leading-relaxed">
                <p>
                  Comprehensive coursework covering core Computer Science disciplines: Data Structures, Algorithms, Object-Oriented Programming (OOP) in Java & C++, Database Management Systems (DBMS), Operating Systems, Computer Networks, and Software Engineering.
                </p>
                <div className="flex items-center gap-2 text-[11px] font-mono text-neutral-400">
                  <BookMarked className="w-3.5 h-3.5 text-cyan-500" />
                  <span>Academic Focus: Practical Software Development & Engineering Logic</span>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
