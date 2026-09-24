import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Layers, ExternalLink, Calendar, Cpu } from 'lucide-react';
import { ProjectItem } from '../data/projects';

interface ProjectCardProps {
  project: ProjectItem;
  highlightQuery?: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, highlightQuery = '' }) => {
  const queryLower = highlightQuery.trim().toLowerCase();

  return (
    <article className="group rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/60 overflow-hidden hover:border-neutral-300 dark:hover:border-neutral-700 transition-all duration-200 flex flex-col justify-between shadow-sm">
      <div>
        {/* Project Visual Header / Thumbnail Box */}
        <div className="relative aspect-[16/9] w-full bg-neutral-100 dark:bg-neutral-950/80 border-b border-neutral-200 dark:border-neutral-800 flex flex-col items-center justify-center p-6 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
          
          {/* Aesthetic Domain Blueprint / Device Frame */}
          <div className="w-full max-w-[280px] rounded-lg border border-neutral-300 dark:border-neutral-800 bg-white/90 dark:bg-neutral-900/90 p-3 shadow-sm transform group-hover:-translate-y-1 transition-transform duration-200">
            <div className="flex items-center justify-between pb-2 border-b border-neutral-200 dark:border-neutral-800/80 text-[10px] font-mono text-neutral-400">
              <span className="truncate max-w-[150px]">{project.id}.app</span>
              <span className="text-cyan-500 dark:text-cyan-400">{project.type}</span>
            </div>
            <div className="pt-2 flex items-center justify-between">
              <span className="text-xs font-semibold text-neutral-800 dark:text-neutral-200 truncate">
                {project.title}
              </span>
              <Layers className="w-3.5 h-3.5 text-neutral-400" />
            </div>
          </div>

          {/* Quiet Category Indicator */}
          <div className="absolute bottom-2 left-3 text-[11px] font-mono text-neutral-400 dark:text-neutral-500 flex items-center gap-1.5">
            <span>{project.category}</span>
            <span aria-hidden="true">·</span>
            <span>{project.technologies[0]}</span>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 space-y-3">
          {/* Unboxed Metadata Header */}
          <div className="flex items-center gap-2 text-xs text-neutral-500 dark:text-neutral-400 font-mono">
            <span>{project.type}</span>
            {project.company && (
              <>
                <span aria-hidden="true">·</span>
                <span className="text-cyan-600 dark:text-cyan-400">{project.company}</span>
              </>
            )}
          </div>

          <h3 className="text-xl font-bold tracking-tight text-neutral-900 dark:text-white group-hover:text-cyan-500 dark:group-hover:text-cyan-400 transition-colors">
            {project.title}
          </h3>

          <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed line-clamp-3">
            {project.shortDescription}
          </p>

          {/* Technology Badges */}
          <div className="pt-2 flex flex-wrap gap-1.5">
            {project.technologies.slice(0, 6).map((tech, i) => {
              const isMatch = queryLower && tech.toLowerCase().includes(queryLower);
              return (
                <span
                  key={i}
                  className={`px-2 py-0.5 text-[11px] font-medium rounded transition-colors ${
                    isMatch
                      ? 'bg-cyan-500/15 text-cyan-800 dark:text-cyan-300 border border-cyan-400/80 dark:border-cyan-500/70 font-semibold ring-1 ring-cyan-500/20'
                      : 'bg-neutral-100 dark:bg-neutral-800/70 text-neutral-700 dark:text-neutral-300 border border-neutral-200/60 dark:border-neutral-700/40'
                  }`}
                >
                  {tech}
                </span>
              );
            })}
            {project.technologies.length > 6 && (
              <span className="px-2 py-0.5 text-[11px] font-medium text-neutral-500">
                +{project.technologies.length - 6} more
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Card Action Footer */}
      <div className="p-6 pt-0 mt-2">
        <Link
          to={`/projects/${project.id}`}
          className="w-full inline-flex items-center justify-between px-4 py-2.5 rounded-lg bg-neutral-100 hover:bg-neutral-200 dark:bg-neutral-800/70 dark:hover:bg-neutral-800 text-neutral-900 dark:text-white font-medium text-xs sm:text-sm transition-colors border border-neutral-200/80 dark:border-neutral-700/50"
        >
          <span>View Project Case Study</span>
          <ArrowRight className="w-4 h-4 text-cyan-500 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </article>
  );
};
