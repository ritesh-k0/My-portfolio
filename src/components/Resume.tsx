import React from 'react';
import { Download, FileText, CheckCircle2, Mail } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const Resume: React.FC = () => {
  return (
    <section className="py-20 border-b border-neutral-200 dark:border-neutral-800/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/60 p-8 sm:p-12 shadow-sm text-center relative overflow-hidden">
          {/* Ambient Glow */}
          <div className="absolute top-0 right-1/4 w-72 h-72 bg-cyan-500/10 blur-[90px] rounded-full pointer-events-none" />

          <div className="max-w-2xl mx-auto space-y-6 relative z-10">
            <div className="w-12 h-12 mx-auto rounded-xl bg-cyan-50 dark:bg-cyan-950/50 border border-cyan-200 dark:border-cyan-800/60 flex items-center justify-center text-cyan-600 dark:text-cyan-400">
              <FileText className="w-6 h-6" />
            </div>

            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white">
                Interested in working together?
              </h2>
              <p className="text-base text-neutral-600 dark:text-neutral-400 leading-relaxed">
                I'm actively preparing for software engineering opportunities and looking forward to building meaningful technology solutions.
              </p>
            </div>

            {/* Resume Highlights */}
            <div className="flex flex-wrap items-center justify-center gap-y-2 gap-x-6 text-xs text-neutral-600 dark:text-neutral-400 font-mono pt-2">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-500" />
                <span>B.Tech CSE Student</span>
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-500" />
                <span>Java & Full-Stack Projects</span>
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-500" />
                <span>i2i Internship Experience</span>
              </span>
            </div>

            {/* Resume Download Action */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={personalInfo.resumeUrl}
                download
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-neutral-900 hover:bg-neutral-800 dark:bg-white dark:hover:bg-neutral-100 text-white dark:text-neutral-900 font-medium text-sm transition-colors shadow-sm"
                title="Download Resume (Replace #RESUME_URL in portfolioData.ts with actual file path or link)"
              >
                <Download className="w-4 h-4 text-cyan-500" />
                <span>Download Resume</span>
              </a>

              <a
                href={`mailto:${personalInfo.email}`}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 hover:bg-neutral-50 dark:hover:bg-neutral-800 text-neutral-800 dark:text-neutral-200 font-medium text-sm transition-colors"
              >
                <Mail className="w-4 h-4 text-cyan-500" />
                <span>Contact Directly</span>
              </a>
            </div>

            <p className="text-[11px] font-mono text-neutral-400 pt-1">
              Resume URL Placeholder: <code className="text-cyan-600 dark:text-cyan-400">#RESUME_URL</code> (easily customized in <code className="text-cyan-600 dark:text-cyan-400">portfolioData.ts</code>)
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
