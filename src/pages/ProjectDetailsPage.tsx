import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { projectsData } from '../data/projects';
import { ProjectDetail } from '../components/ProjectDetail';
import { ArrowLeft, Layers } from 'lucide-react';

interface ProjectDetailsPageProps {
  projectIdOverride?: string;
}

export const ProjectDetailsPage: React.FC<ProjectDetailsPageProps> = ({ projectIdOverride }) => {
  const params = useParams<{ projectId: string }>();
  const activeId = projectIdOverride || params.projectId;

  const project = projectsData.find(p => p.id === activeId);

  if (!project) {
    return (
      <main className="py-24 text-center max-w-xl mx-auto px-4">
        <div className="p-8 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/60 shadow-sm space-y-4">
          <Layers className="w-12 h-12 text-cyan-500 mx-auto" />
          <h1 className="text-2xl font-bold text-neutral-900 dark:text-white">
            Project Not Found
          </h1>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            The requested project identifier "{activeId}" does not exist in the portfolio records.
          </p>
          <div className="pt-4">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 text-xs font-semibold"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Return to Projects</span>
            </Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main>
      <ProjectDetail project={project} />
    </main>
  );
};
