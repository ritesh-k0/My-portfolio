import React from 'react';
import { Target, ArrowRight, CheckCircle2 } from 'lucide-react';
import { currentFocusList } from '../data/portfolioData';

export const CurrentFocus: React.FC = () => {
  return (
    <section className="py-20 border-b border-neutral-200 dark:border-neutral-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <p className="text-xs font-mono uppercase tracking-wider text-cyan-600 dark:text-cyan-400 mb-2">
            Active Trajectory
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white">
            What I'm Currently Working On
          </h2>
          <p className="mt-3 text-base text-neutral-600 dark:text-neutral-400 leading-relaxed">
            Daily routines, skill refinement targets, interview preparation, and development initiatives currently in progress.
          </p>
        </div>

        {/* Focus Grid */}
        <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/60 p-6 sm:p-8 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {currentFocusList.map((focusItem, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-neutral-50 dark:bg-neutral-800/40 border border-neutral-100 dark:border-neutral-800/80 flex items-start gap-3 hover:border-neutral-300 dark:hover:border-neutral-700 transition-colors"
              >
                <div className="w-5 h-5 rounded-md bg-cyan-50 dark:bg-cyan-950/60 border border-cyan-200 dark:border-cyan-800/50 flex items-center justify-center text-cyan-600 dark:text-cyan-400 text-xs font-mono shrink-0 mt-0.5">
                  {idx + 1}
                </div>
                <p className="text-xs sm:text-sm font-medium text-neutral-800 dark:text-neutral-200 leading-relaxed">
                  {focusItem}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-neutral-100 dark:border-neutral-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-neutral-500">
            <span className="flex items-center gap-1.5 font-mono">
              <Target className="w-4 h-4 text-cyan-500" />
              <span>Target: Placement Readiness & Full-Stack Mastery</span>
            </span>
            <span className="font-mono text-cyan-600 dark:text-cyan-400">
              Actively Preparing for Graduate Engineering Roles (2027 Batch)
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};
