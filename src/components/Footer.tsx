import React from 'react';
import { Github, Linkedin, Mail, Heart, ArrowUp } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full border-t border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 py-12 text-neutral-600 dark:text-neutral-400 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Brand & Copyright */}
          <div className="text-center md:text-left space-y-1">
            <p className="text-sm font-semibold text-neutral-900 dark:text-white">
              © 2026 Ritesh Kumar. All rights reserved.
            </p>
            <p className="text-xs text-neutral-500 flex items-center justify-center md:justify-start gap-1">
              <span>Built with passion for technology and learning.</span>
            </p>
          </div>

          {/* Social Links & Back to top */}
          <div className="flex items-center gap-4">
            <a
              href={personalInfo.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-neutral-500 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors"
              aria-label="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href={personalInfo.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-neutral-500 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <a
              href={`mailto:${personalInfo.email}`}
              className="p-2 rounded-lg text-neutral-500 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>

            <div className="h-4 w-px bg-neutral-200 dark:bg-neutral-800 mx-1" />

            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg text-neutral-500 hover:text-cyan-500 hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors text-xs font-mono flex items-center gap-1.5"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
              <span className="hidden sm:inline">Top</span>
            </button>
          </div>

        </div>
      </div>
    </footer>
  );
};
