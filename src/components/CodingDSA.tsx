import React from 'react';
import { Terminal, BrainCircuit, CheckSquare, Layers } from 'lucide-react';
import { javaDsaData } from '../data/portfolioData';

export const CodingDSA: React.FC = () => {
  return (
    <section className="py-20 border-b border-neutral-200 dark:border-neutral-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <p className="text-xs font-mono uppercase tracking-wider text-cyan-600 dark:text-cyan-400 mb-2">
            Engineering Rigor
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white">
            Java, OOP & Data Structures
          </h2>
          <p className="mt-3 text-base text-neutral-600 dark:text-neutral-400 leading-relaxed">
            A disciplined study of core object-oriented software engineering principles in Java and algorithmic problem solving practiced daily on HackerRank.
          </p>
        </div>

        {/* 3 Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {javaDsaData.map((section, idx) => (
            <div
              key={idx}
              className="rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/60 p-6 flex flex-col justify-between shadow-sm"
            >
              <div>
                <div className="flex items-center gap-2.5 mb-3">
                  <div className="p-2 rounded-lg bg-cyan-50 dark:bg-cyan-950/40 text-cyan-600 dark:text-cyan-400">
                    {section.category === 'Java' && <Terminal className="w-4 h-4" />}
                    {section.category === 'DSA' && <BrainCircuit className="w-4 h-4" />}
                    {section.category === 'Practice' && <Layers className="w-4 h-4" />}
                  </div>
                  <h3 className="text-base font-semibold text-neutral-900 dark:text-white">
                    {section.title}
                  </h3>
                </div>

                <p className="text-xs text-neutral-500 dark:text-neutral-400 mb-5 leading-relaxed">
                  {section.description}
                </p>

                {/* Topics List */}
                <ul className="space-y-2.5">
                  {section.topics.map((topic, tIdx) => (
                    <li key={tIdx} className="flex items-start gap-2.5 text-xs text-neutral-700 dark:text-neutral-300">
                      <CheckSquare className="w-3.5 h-3.5 text-cyan-500 mt-0.5 shrink-0" />
                      <span>{topic}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 pt-4 border-t border-neutral-100 dark:border-neutral-800 text-[11px] font-mono text-neutral-500 flex items-center justify-between">
                <span>Verification</span>
                <span className="text-neutral-700 dark:text-neutral-300 font-medium">Active Practice</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
