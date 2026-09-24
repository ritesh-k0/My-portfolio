import React from 'react';
import { Trophy, CheckCircle2, Target, Cpu, Code2 } from 'lucide-react';
import { achievementsData } from '../data/portfolioData';

export const Achievements: React.FC = () => {
  return (
    <section className="py-20 border-b border-neutral-200 dark:border-neutral-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <p className="text-xs font-mono uppercase tracking-wider text-cyan-600 dark:text-cyan-400 mb-2">
            Milestones & Goals
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white">
            Key Learning Milestones
          </h2>
          <p className="mt-3 text-base text-neutral-600 dark:text-neutral-400 leading-relaxed">
            Consistent preparation, programming milestones, placement readiness, and hardware engineering outcomes achieved during college.
          </p>
        </div>

        {/* Milestones Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievementsData.map((item, idx) => (
            <div
              key={idx}
              className="rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/60 p-6 shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono text-cyan-600 dark:text-cyan-400">
                    {item.category}
                  </span>
                  <span className="text-[11px] font-mono text-neutral-500 bg-neutral-100 dark:bg-neutral-800 px-2 py-0.5 rounded">
                    {item.status}
                  </span>
                </div>

                <h3 className="text-base font-bold text-neutral-900 dark:text-white mb-2">
                  {item.title}
                </h3>

                <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-neutral-100 dark:border-neutral-800 flex items-center gap-2 text-[11px] font-mono text-emerald-600 dark:text-emerald-400">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Verified Milestones</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
