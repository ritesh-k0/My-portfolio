import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Download, Github, Linkedin, Mail, Code2, Terminal, Sparkles } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden pt-12 pb-20 md:py-24 border-b border-neutral-200 dark:border-neutral-800/80">
      {/* Subtle ambient gradient mesh */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-cyan-500/5 dark:bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Hero Text & Actions */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-cyan-600 dark:text-cyan-400 bg-cyan-50 dark:bg-cyan-950/40 border border-cyan-200 dark:border-cyan-800/50 px-3 py-1.5 rounded-md">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Available for Software Engineering & Placement Opportunities</span>
            </div>

            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-neutral-900 dark:text-white">
                Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 via-teal-400 to-blue-500">Ritesh Kumar</span>
              </h1>
              <p className="text-lg sm:text-xl font-medium text-neutral-700 dark:text-neutral-300">
                B.Tech CSE Student | Aspiring Software Engineer | Full-Stack Developer
              </p>
            </div>

            <p className="text-base text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-2xl">
              I'm a Computer Science Engineering student passionate about software development, problem solving, web technologies and building practical projects. I enjoy learning new technologies and improving my programming and development skills.
            </p>

            {/* Quick Unboxed Metadata */}
            <div className="flex flex-wrap items-center gap-y-2 text-xs font-mono text-neutral-500 dark:text-neutral-400">
              <span>Sandip University, Sijoul</span>
              <span className="mx-2" aria-hidden="true">·</span>
              <span>4th Year CSE</span>
              <span className="mx-2" aria-hidden="true">·</span>
              <span>Graduation 2027</span>
              <span className="mx-2" aria-hidden="true">·</span>
              <span>India</span>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-neutral-900 hover:bg-neutral-800 dark:bg-white dark:hover:bg-neutral-100 text-white dark:text-neutral-900 font-medium text-sm transition-colors shadow-sm"
              >
                <span>View My Projects</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <a
                href={personalInfo.resumeUrl}
                download
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 hover:bg-neutral-50 dark:hover:bg-neutral-800 text-neutral-800 dark:text-neutral-200 font-medium text-sm transition-colors"
                title="Download Resume PDF (Replace #RESUME_URL with actual file path)"
              >
                <Download className="w-4 h-4 text-cyan-500" />
                <span>Download Resume</span>
              </a>
            </div>

            {/* Secondary Profile Links */}
            <div className="pt-2 flex items-center gap-6 text-sm text-neutral-600 dark:text-neutral-400">
              <span className="text-xs uppercase tracking-wider text-neutral-400 dark:text-neutral-500 font-mono">
                Connect:
              </span>
              <a
                href={personalInfo.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>GitHub ({personalInfo.githubUsername})</span>
              </a>
              <a
                href={personalInfo.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors"
              >
                <Linkedin className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="inline-flex items-center gap-1.5 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>Email</span>
              </a>
            </div>
          </div>

          {/* Right Column: Developer-Themed Interactive Visual Console */}
          <div className="lg:col-span-5">
            <div className="rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white/80 dark:bg-neutral-900/90 backdrop-blur-md shadow-xl overflow-hidden">
              
              {/* Window Header */}
              <div className="flex items-center justify-between px-4 py-3 bg-neutral-100/90 dark:bg-neutral-950/70 border-b border-neutral-200 dark:border-neutral-800">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-400/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-400/80" />
                  <span className="ml-2 text-xs font-mono text-neutral-500 dark:text-neutral-400">
                    DeveloperProfile.java
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-xs font-mono text-neutral-400">
                  <Code2 className="w-3.5 h-3.5 text-cyan-500" />
                  <span>Java 21</span>
                </div>
              </div>

              {/* Code Editor Body */}
              <div className="p-5 font-mono text-xs leading-relaxed space-y-1 text-neutral-700 dark:text-neutral-300 overflow-x-auto">
                <div>
                  <span className="text-purple-600 dark:text-purple-400">public class</span>{' '}
                  <span className="text-amber-600 dark:text-amber-300 font-semibold">RiteshKumar</span> {'{'}
                </div>
                <div className="pl-4">
                  <span className="text-purple-600 dark:text-purple-400">String</span> role ={' '}
                  <span className="text-emerald-600 dark:text-emerald-400">"Software Engineer"</span>;
                </div>
                <div className="pl-4">
                  <span className="text-purple-600 dark:text-purple-400">String</span> education ={' '}
                  <span className="text-emerald-600 dark:text-emerald-400">"B.Tech CSE (4th Year)"</span>;
                </div>
                <div className="pl-4">
                  <span className="text-purple-600 dark:text-purple-400">String</span> college ={' '}
                  <span className="text-emerald-600 dark:text-emerald-400">"Sandip University, Sijoul"</span>;
                </div>
                <div className="pl-4">
                  <span className="text-purple-600 dark:text-purple-400">String[]</span> coreSkills = {'{'}
                </div>
                <div className="pl-8 text-cyan-600 dark:text-cyan-300">
                  "Java", "Data Structures", "Algorithms",<br />
                  "React.js", "Node.js", "MongoDB", "SQL"
                </div>
                <div className="pl-4">{'};'}</div>
                <div className="pl-4 pt-1">
                  <span className="text-purple-600 dark:text-purple-400">String</span> longTermGoal ={' '}
                  <span className="text-emerald-600 dark:text-emerald-400">"Software Engineer @ Top Tech (Google)"</span>;
                </div>
                <div className="pl-4 pt-2">
                  <span className="text-purple-600 dark:text-purple-400">void</span>{' '}
                  <span className="text-blue-600 dark:text-blue-400">solveProblem</span>() {'{'}
                </div>
                <div className="pl-8 text-neutral-500 dark:text-neutral-400 italic">
                  // Practice daily on HackerRank & prepare for placements
                </div>
                <div className="pl-8">
                  continuousLearning.buildProjects();
                </div>
                <div className="pl-4">{'}'}</div>
                <div>{'}'}</div>
              </div>

              {/* Terminal Output Footer */}
              <div className="p-3.5 bg-neutral-900 text-neutral-200 border-t border-neutral-800 font-mono text-xs flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                  <span className="text-emerald-400">$</span>
                  <span className="text-neutral-400">javac RiteshKumar.java && run</span>
                </div>
                <span className="text-[11px] text-emerald-400 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  Build: Clean
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
