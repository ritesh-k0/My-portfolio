import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowLeft,
  ArrowRight,
  Github,
  ExternalLink,
  Code2,
  Cpu,
  Layers,
  CheckCircle2,
  AlertTriangle,
  Lightbulb,
  Workflow,
  Sparkles,
  Maximize2,
  FileCode,
  Users
} from 'lucide-react';
import { ProjectItem, projectsData } from '../data/projects';
import { LightboxModal } from './LightboxModal';

interface ProjectDetailProps {
  project: ProjectItem;
}

export const ProjectDetail: React.FC<ProjectDetailProps> = ({ project }) => {
  const [selectedScreenshot, setSelectedScreenshot] = useState<{
    title: string;
    description: string;
    placeholderNote: string;
  } | null>(null);

  const [showCodeSnippet, setShowCodeSnippet] = useState(false);

  // Find previous and next projects
  const currentIndex = projectsData.findIndex(p => p.id === project.id);
  const prevProject = currentIndex > 0 ? projectsData[currentIndex - 1] : null;
  const nextProject = currentIndex < projectsData.length - 1 ? projectsData[currentIndex + 1] : null;

  return (
    <article className="py-12 md:py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Navigation Breadcrumb / Back button */}
        <div className="flex items-center justify-between">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>← Back to Projects</span>
          </Link>

          <div className="text-xs font-mono text-neutral-500">
            Case Study {currentIndex + 1} of {projectsData.length}
          </div>
        </div>

        {/* 1. Project Hero */}
        <header className="space-y-6 pb-8 border-b border-neutral-200 dark:border-neutral-800">
          <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-neutral-500">
            <span className="text-cyan-600 dark:text-cyan-400 font-semibold">{project.category}</span>
            <span aria-hidden="true">·</span>
            <span>{project.type}</span>
            {project.company && (
              <>
                <span aria-hidden="true">·</span>
                <span className="text-neutral-700 dark:text-neutral-300 font-medium">{project.company}</span>
              </>
            )}
            {project.duration && (
              <>
                <span aria-hidden="true">·</span>
                <span>{project.duration}</span>
              </>
            )}
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-neutral-900 dark:text-white">
            {project.title}
          </h1>

          <p className="text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed max-w-3xl">
            {project.description}
          </p>

          {/* Educational Disclaimer (if applicable) */}
          {project.disclaimer && (
            <div className="p-3.5 rounded-lg bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800/50 flex items-start gap-3 text-xs text-amber-800 dark:text-amber-300">
              <AlertTriangle className="w-4 h-4 shrink-0 mt-0.5" />
              <span>{project.disclaimer}</span>
            </div>
          )}

          {/* Tech Badges */}
          <div className="flex flex-wrap gap-2 pt-2">
            {project.technologies.map((tech, idx) => (
              <span
                key={idx}
                className="px-3 py-1 text-xs font-medium rounded-md bg-neutral-100 dark:bg-neutral-800/80 text-neutral-800 dark:text-neutral-200 border border-neutral-200 dark:border-neutral-700"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Action Links */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 text-xs sm:text-sm font-medium shadow-sm">
              <Github className="w-4 h-4" />
              <span>{project.github}</span>
            </div>

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 text-neutral-800 dark:text-neutral-200 text-xs sm:text-sm font-medium">
              <ExternalLink className="w-4 h-4 text-cyan-500" />
              <span>{project.liveDemo}</span>
            </div>

            <span className="text-[11px] text-neutral-400 font-mono">
              (Editable repository & deployment placeholders)
            </span>
          </div>
        </header>

        {/* 2. Problem Statement & Objectives */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/60 p-6 space-y-3">
            <h2 className="text-base font-bold text-neutral-900 dark:text-white flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 text-amber-500" />
              <span>Problem Statement</span>
            </h2>
            <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
              {project.problemStatement}
            </p>
          </div>

          <div className="rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/60 p-6 space-y-3">
            <h2 className="text-base font-bold text-neutral-900 dark:text-white flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              <span>Core Objectives</span>
            </h2>
            <ul className="space-y-2 text-xs sm:text-sm text-neutral-600 dark:text-neutral-400">
              {project.objectives.map((obj, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-cyan-500 font-bold">·</span>
                  <span>{obj}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* 3. Roles Section (for Employee Management System) */}
        {project.roles && project.roles.length > 0 && (
          <section className="space-y-4">
            <h2 className="text-xl font-bold text-neutral-900 dark:text-white flex items-center gap-2">
              <Users className="w-5 h-5 text-cyan-500" />
              <span>System User Roles & Permissions</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.roles.map((r, i) => (
                <div key={i} className="p-6 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/60 space-y-3">
                  <h3 className="text-base font-bold text-neutral-900 dark:text-white flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-cyan-500" />
                    <span>{r.role} Role</span>
                  </h3>
                  <ul className="space-y-2">
                    {r.details.map((d, dIdx) => (
                      <li key={dIdx} className="flex items-start gap-2 text-xs sm:text-sm text-neutral-600 dark:text-neutral-400">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-500 mt-0.5 shrink-0" />
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* 4. Hardware Components (for Obstacle Avoiding Car) */}
        {project.roboticsComponents && (
          <section className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold text-neutral-900 dark:text-white flex items-center gap-2">
                <Cpu className="w-5 h-5 text-cyan-500" />
                <span>Hardware Components Specification</span>
              </h2>
              <span className="text-xs font-mono text-neutral-400">Embedded Platform</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {project.roboticsComponents.map((comp, idx) => (
                <div key={idx} className="p-4 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/60 space-y-1.5">
                  <h3 className="text-sm font-bold text-neutral-900 dark:text-white">
                    {comp.name}
                  </h3>
                  <p className="text-xs font-mono text-cyan-600 dark:text-cyan-400">
                    {comp.spec}
                  </p>
                  <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed pt-1">
                    {comp.description}
                  </p>
                </div>
              ))}
            </div>

            {project.circuitDiagramNote && (
              <div className="p-4 rounded-xl border border-dashed border-neutral-300 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-950/60 text-xs text-neutral-600 dark:text-neutral-400 flex items-start gap-3">
                <Cpu className="w-4 h-4 text-cyan-500 mt-0.5 shrink-0" />
                <div>
                  <strong className="text-neutral-800 dark:text-neutral-200">Hardware Schematic Circuit Placeholder:</strong>{' '}
                  {project.circuitDiagramNote}
                </div>
              </div>
            )}
          </section>
        )}

        {/* 5. Key Features */}
        <section className="space-y-6">
          <h2 className="text-xl font-bold text-neutral-900 dark:text-white flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-cyan-500" />
            <span>Key Features & Implementations</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {project.keyFeatures.map((feat, idx) => (
              <div
                key={idx}
                className="p-6 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/60 space-y-2 shadow-sm"
              >
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono text-cyan-500 font-semibold">0{idx + 1}.</span>
                  <h3 className="text-sm font-bold text-neutral-900 dark:text-white">
                    {feat.title}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  {feat.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 6. How It Works & Workflow */}
        <section className="space-y-6">
          <h2 className="text-xl font-bold text-neutral-900 dark:text-white flex items-center gap-2">
            <Workflow className="w-5 h-5 text-cyan-500" />
            <span>How It Works & Project Workflow</span>
          </h2>

          <div className="p-6 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/60 space-y-6">
            <p className="text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
              {project.howItWorks}
            </p>

            <div>
              <p className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-3">
                Execution Workflow Sequence:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                {project.workflow.map((step, sIdx) => (
                  <div
                    key={sIdx}
                    className="relative p-3 rounded-lg bg-neutral-50 dark:bg-neutral-800/40 border border-neutral-200/80 dark:border-neutral-700/60 flex flex-col justify-between"
                  >
                    <div className="flex items-center justify-between text-[11px] font-mono text-cyan-600 dark:text-cyan-400 pb-1">
                      <span>Step {sIdx + 1}</span>
                      {sIdx < project.workflow.length - 1 && <span className="text-neutral-400">→</span>}
                    </div>
                    <span className="text-xs font-medium text-neutral-800 dark:text-neutral-200">
                      {step}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 7. Architecture */}
        <section className="space-y-4">
          <h2 className="text-xl font-bold text-neutral-900 dark:text-white flex items-center gap-2">
            <Layers className="w-5 h-5 text-cyan-500" />
            <span>System Architecture</span>
          </h2>
          <div className="p-6 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-900 text-white space-y-4 shadow-sm">
            <div>
              <h3 className="text-base font-semibold text-white">
                {project.architecture.title}
              </h3>
              <p className="text-xs text-neutral-400 mt-1">
                {project.architecture.description}
              </p>
            </div>
            <div className="space-y-2 pt-2">
              {project.architecture.flow.map((stage, stIdx) => (
                <div
                  key={stIdx}
                  className="flex items-center gap-3 p-2.5 rounded-lg bg-neutral-950/70 border border-neutral-800 text-xs font-mono"
                >
                  <span className="w-6 h-6 rounded bg-neutral-800 flex items-center justify-center text-cyan-400 text-[11px] font-bold shrink-0">
                    {stIdx + 1}
                  </span>
                  <span className="text-neutral-300">{stage}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Arduino Code Viewer (if provided for Robotics) */}
        {project.arduinoCode && (
          <section className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold text-neutral-900 dark:text-white flex items-center gap-2">
                <FileCode className="w-5 h-5 text-cyan-500" />
                <span>Embedded Source Code (Arduino)</span>
              </h2>
              <button
                onClick={() => setShowCodeSnippet(!showCodeSnippet)}
                className="px-3 py-1.5 rounded-lg bg-neutral-100 hover:bg-neutral-200 dark:bg-neutral-800 dark:hover:bg-neutral-700 text-xs font-medium transition-colors"
              >
                {showCodeSnippet ? 'Hide Code' : 'View Arduino Code'}
              </button>
            </div>

            {showCodeSnippet && (
              <div className="rounded-xl border border-neutral-800 bg-neutral-950 overflow-hidden shadow-xl animate-fade-in">
                <div className="px-4 py-2.5 bg-neutral-900 border-b border-neutral-800 flex items-center justify-between text-xs font-mono text-neutral-400">
                  <span>ObstacleAvoidingCar.ino</span>
                  <span className="text-cyan-400">C++ / Embedded</span>
                </div>
                <pre className="p-4 text-xs font-mono text-neutral-300 overflow-x-auto leading-relaxed">
                  <code>{project.arduinoCode}</code>
                </pre>
              </div>
            )}
          </section>
        )}

        {/* 8. Screenshots & Visual Gallery (with Lightbox) */}
        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-neutral-900 dark:text-white flex items-center gap-2">
              <Maximize2 className="w-5 h-5 text-cyan-500" />
              <span>Project Interface & Screenshots</span>
            </h2>
            <span className="text-xs font-mono text-neutral-400">Click card for Lightbox</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {project.screenshots.map((shot, idx) => (
              <div
                key={idx}
                onClick={() => setSelectedScreenshot(shot)}
                className="group cursor-pointer rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/60 p-4 space-y-3 hover:border-cyan-500/50 transition-all shadow-sm flex flex-col justify-between"
              >
                <div className="aspect-[4/3] rounded-lg bg-neutral-100 dark:bg-neutral-950 flex flex-col items-center justify-center p-4 text-center border border-neutral-200/60 dark:border-neutral-800 group-hover:bg-neutral-50 dark:group-hover:bg-neutral-900 transition-colors">
                  <Maximize2 className="w-6 h-6 text-neutral-400 group-hover:text-cyan-400 transition-colors mb-2" />
                  <span className="text-xs font-semibold text-neutral-700 dark:text-neutral-300">
                    {shot.title}
                  </span>
                  <span className="text-[11px] font-mono text-cyan-600 dark:text-cyan-400 mt-1">
                    {shot.placeholderNote}
                  </span>
                </div>
                <div>
                  <h4 className="text-xs font-bold text-neutral-900 dark:text-white">
                    {shot.title}
                  </h4>
                  <p className="text-[11px] text-neutral-500 dark:text-neutral-400 mt-0.5 line-clamp-2">
                    {shot.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 9. Development Process */}
        <section className="space-y-4">
          <h2 className="text-xl font-bold text-neutral-900 dark:text-white">
            Development Process
          </h2>
          <div className="p-6 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/60 space-y-3">
            <ol className="space-y-2.5 text-xs sm:text-sm text-neutral-700 dark:text-neutral-300">
              {project.developmentProcess.map((step, pIdx) => (
                <li key={pIdx} className="flex items-start gap-3">
                  <span className="font-mono text-cyan-500 font-semibold">{pIdx + 1}.</span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* 10. Challenges & Solutions */}
        <section className="space-y-4">
          <h2 className="text-xl font-bold text-neutral-900 dark:text-white">
            Challenges & Engineering Solutions
          </h2>
          <div className="space-y-4">
            {project.challengesAndSolutions.map((cs, cIdx) => (
              <div
                key={cIdx}
                className="p-6 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/60 space-y-2"
              >
                <div className="flex items-start gap-2">
                  <span className="text-xs font-mono font-bold text-red-500">Challenge:</span>
                  <p className="text-xs sm:text-sm font-semibold text-neutral-900 dark:text-white">
                    {cs.challenge}
                  </p>
                </div>
                <div className="flex items-start gap-2 pt-1 border-t border-neutral-100 dark:border-neutral-800">
                  <span className="text-xs font-mono font-bold text-emerald-500">Solution:</span>
                  <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400">
                    {cs.solution}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 11. What I Learned & Project Result */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/60 space-y-3">
            <h2 className="text-base font-bold text-neutral-900 dark:text-white flex items-center gap-2">
              <Lightbulb className="w-4 h-4 text-cyan-500" />
              <span>What I Learned</span>
            </h2>
            <ul className="space-y-2 text-xs sm:text-sm text-neutral-600 dark:text-neutral-400">
              {project.whatILearned.map((item, lIdx) => (
                <li key={lIdx} className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-500 mt-0.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-6 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/60 space-y-3 flex flex-col justify-between">
            <div>
              <h2 className="text-base font-bold text-neutral-900 dark:text-white flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-emerald-500" />
                <span>Project Outcome</span>
              </h2>
              <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed mt-3">
                {project.projectResult}
              </p>
            </div>
            <div className="pt-4 border-t border-neutral-100 dark:border-neutral-800 text-[11px] font-mono text-neutral-500">
              Status: Validated Case Study
            </div>
          </div>
        </section>

        {/* 12. Future Improvements */}
        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-neutral-900 dark:text-white">
              Planned Future Improvements
            </h2>
            <span className="text-xs font-mono text-neutral-400 bg-neutral-100 dark:bg-neutral-800 px-2.5 py-1 rounded">
              Roadmap Items
            </span>
          </div>

          <div className="p-6 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900/40">
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-neutral-700 dark:text-neutral-300">
              {project.futureImprovements.map((imp, iIdx) => (
                <li key={iIdx} className="flex items-start gap-2">
                  <span className="text-cyan-500 font-bold">→</span>
                  <span>{imp}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* 13. Previous / Next Project Navigation Bar */}
        <nav aria-label="Project Navigation" className="pt-8 border-t border-neutral-200 dark:border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          {prevProject ? (
            <Link
              to={`/projects/${prevProject.id}`}
              className="w-full sm:w-auto inline-flex items-center gap-3 p-4 rounded-xl border border-neutral-200 dark:border-neutral-800 hover:border-cyan-500/50 bg-white dark:bg-neutral-900/60 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 text-cyan-500" />
              <div className="text-left">
                <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-400 block">
                  Previous Project
                </span>
                <span className="text-xs sm:text-sm font-semibold text-neutral-900 dark:text-white">
                  {prevProject.title}
                </span>
              </div>
            </Link>
          ) : (
            <div className="hidden sm:block" />
          )}

          <Link
            to="/projects"
            className="px-4 py-2 text-xs font-medium rounded-lg text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white bg-neutral-100 dark:bg-neutral-800/80"
          >
            All Projects Grid
          </Link>

          {nextProject ? (
            <Link
              to={`/projects/${nextProject.id}`}
              className="w-full sm:w-auto inline-flex items-center justify-end gap-3 p-4 rounded-xl border border-neutral-200 dark:border-neutral-800 hover:border-cyan-500/50 bg-white dark:bg-neutral-900/60 transition-colors text-right"
            >
              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-400 block">
                  Next Project
                </span>
                <span className="text-xs sm:text-sm font-semibold text-neutral-900 dark:text-white">
                  {nextProject.title}
                </span>
              </div>
              <ArrowRight className="w-4 h-4 text-cyan-500" />
            </Link>
          ) : (
            <div className="hidden sm:block" />
          )}
        </nav>

        {/* Screenshot Lightbox Modal */}
        <LightboxModal
          isOpen={!!selectedScreenshot}
          onClose={() => setSelectedScreenshot(null)}
          title={selectedScreenshot?.title || ''}
          description={selectedScreenshot?.description}
          placeholderText={selectedScreenshot?.placeholderNote}
        />

      </div>
    </article>
  );
};
