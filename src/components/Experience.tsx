import React from 'react';
import { Link } from 'react-router-dom';
import { Briefcase, Calendar, ArrowRight, Building, CheckCircle2 } from 'lucide-react';
import { experienceData } from '../data/portfolioData';

export const Experience: React.FC = () => {
  return (
    <section className="py-20 border-b border-neutral-200 dark:border-neutral-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <p className="text-xs font-mono uppercase tracking-wider text-cyan-600 dark:text-cyan-400 mb-2">
            Work History
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white">
            Experience & Internships
          </h2>
          <p className="mt-3 text-base text-neutral-600 dark:text-neutral-400 leading-relaxed">
            Professional internships and hands-on software development experience.
          </p>
        </div>

        {/* Experience List */}
        <div className="space-y-6 max-w-4xl">
          {experienceData.map((exp, index) => (
            <div
              key={index}
              className="rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/60 p-6 sm:p-8 shadow-sm transition-colors hover:border-neutral-300 dark:hover:border-neutral-700"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-neutral-100 dark:border-neutral-800">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="p-1.5 rounded-md bg-cyan-50 dark:bg-cyan-950/40 text-cyan-600 dark:text-cyan-400">
                      <Briefcase className="w-4 h-4" />
                    </span>
                    <h3 className="text-lg font-bold text-neutral-900 dark:text-white">
                      {exp.role}
                    </h3>
                  </div>
                  <div className="flex items-center gap-2 mt-1 text-sm font-medium text-neutral-700 dark:text-neutral-300">
                    <Building className="w-3.5 h-3.5 text-neutral-400" />
                    <span>{exp.company}</span>
                    <span className="text-neutral-300 dark:text-neutral-600">·</span>
                    <span className="text-neutral-500">{exp.area}</span>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 text-xs font-mono text-neutral-500 bg-neutral-100 dark:bg-neutral-800/60 px-3 py-1.5 rounded-md self-start sm:self-center">
                  <Calendar className="w-3.5 h-3.5 text-cyan-500" />
                  <span>{exp.duration}</span>
                </div>
              </div>

              <div className="pt-4 space-y-4">
                <p className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
                  "{exp.description}"
                </p>

                <div className="space-y-2">
                  <p className="text-xs font-mono uppercase tracking-wider text-neutral-400">
                    Key Deliverables:
                  </p>
                  <ul className="space-y-2">
                    {exp.highlights.map((h, hIdx) => (
                      <li key={hIdx} className="flex items-start gap-2.5 text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-500 mt-0.5 shrink-0" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-2 flex items-center justify-between">
                  <div className="text-xs text-neutral-500">
                    Associated Project: <strong className="text-neutral-800 dark:text-neutral-200">{exp.project}</strong>
                  </div>
                  <Link
                    to={`/projects/${exp.projectSlug}`}
                    className="inline-flex items-center gap-1 text-xs font-medium text-cyan-600 dark:text-cyan-400 hover:underline"
                  >
                    <span>Read Internship Project Case Study</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
