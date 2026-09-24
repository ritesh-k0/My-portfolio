import React, { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ProjectCard } from './ProjectCard';
import { projectsData } from '../data/projects';
import { Layers, Search, X, Sparkles, Filter, RotateCcw } from 'lucide-react';

interface ProjectsSectionProps {
  showTitle?: boolean;
  limit?: number;
}

export const Projects: React.FC<ProjectsSectionProps> = ({ showTitle = true, limit }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const urlQuery = searchParams.get('q') || '';
  
  const [searchQuery, setSearchQuery] = useState<string>(urlQuery);
  const [activeCategory, setActiveCategory] = useState<string>('All');

  // Sync state if URL search query changes
  useEffect(() => {
    if (urlQuery !== searchQuery) {
      setSearchQuery(urlQuery);
    }
  }, [urlQuery]);

  const handleSearchChange = (val: string) => {
    setSearchQuery(val);
    if (val) {
      searchParams.set('q', val);
      setSearchParams(searchParams, { replace: true });
    } else {
      searchParams.delete('q');
      setSearchParams(searchParams, { replace: true });
    }
  };

  const handleClearSearch = () => {
    setSearchQuery('');
    searchParams.delete('q');
    setSearchParams(searchParams, { replace: true });
  };

  const handleResetAll = () => {
    setSearchQuery('');
    setActiveCategory('All');
    searchParams.delete('q');
    setSearchParams(searchParams, { replace: true });
  };

  const categories = ['All', 'Web Development', 'Full Stack', 'Java / DSA', 'Robotics'];

  const popularTechChips = ['React', 'Java', 'Node.js', 'Socket.io', 'Tailwind', 'MongoDB', 'Arduino', 'REST API'];

  const filteredProjects = useMemo(() => {
    let list = projectsData;
    const q = searchQuery.trim().toLowerCase();

    // 1. Filter by category
    if (activeCategory !== 'All') {
      if (activeCategory === 'Java / DSA') {
        list = list.filter(
          (p) => p.category === 'Java / DSA' || p.technologies.some((t) => t.toLowerCase().includes('java'))
        );
      } else {
        list = list.filter((p) => p.category === activeCategory);
      }
    }

    // 2. Filter by search query
    if (q) {
      list = list.filter((p) => {
        const inTitle = p.title.toLowerCase().includes(q);
        const inCat = p.category.toLowerCase().includes(q);
        const inType = p.type.toLowerCase().includes(q);
        const inCompany = p.company?.toLowerCase().includes(q) || false;
        const inShortDesc = p.shortDescription.toLowerCase().includes(q);
        const inDesc = p.description.toLowerCase().includes(q);
        const inProblem = p.problemStatement.toLowerCase().includes(q);
        const inTech = p.technologies.some((t) => t.toLowerCase().includes(q));
        const inFeatures = p.keyFeatures?.some(
          (f) => f.title.toLowerCase().includes(q) || f.description.toLowerCase().includes(q)
        );
        const inLearned = p.whatILearned?.some((w) => w.toLowerCase().includes(q));
        const inTakeaways = p.futureImprovements?.some((f) => f.toLowerCase().includes(q));

        return inTitle || inCat || inType || inCompany || inShortDesc || inDesc || inProblem || inTech || inFeatures || inLearned || inTakeaways;
      });
    }

    return limit ? list.slice(0, limit) : list;
  }, [activeCategory, searchQuery, limit]);

  return (
    <section className="py-16 md:py-20 border-b border-neutral-200 dark:border-neutral-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        {showTitle && (
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
            <div className="max-w-2xl">
              <p className="text-xs font-mono uppercase tracking-wider text-cyan-600 dark:text-cyan-400 mb-2">
                Portfolio Showcase
              </p>
              <h2 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white">
                Featured Projects
              </h2>
              <p className="mt-3 text-base text-neutral-600 dark:text-neutral-400 leading-relaxed">
                Practical web applications, full-stack systems, educational clones, and embedded robotics projects built to explore modern software engineering.
              </p>
            </div>

            {/* Project count indicator */}
            <div className="text-xs font-mono text-neutral-500 self-start md:self-end">
              Showing <span className="font-semibold text-neutral-900 dark:text-white">{filteredProjects.length}</span> of {projectsData.length} projects
            </div>
          </div>
        )}

        {/* Global Search Bar Container */}
        <div className="mb-8 p-4 rounded-2xl bg-white dark:bg-neutral-900/90 border border-neutral-200 dark:border-neutral-800/90 shadow-sm space-y-3">
          <div className="relative flex items-center">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-cyan-500 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => handleSearchChange(e.target.value)}
              placeholder="Search projects by technology (React, Java, Socket.io, Node.js...), keywords, or concepts..."
              className="w-full pl-10 pr-10 py-2.5 rounded-xl bg-neutral-50 dark:bg-neutral-950/70 border border-neutral-200 dark:border-neutral-800 text-sm text-neutral-900 dark:text-white placeholder-neutral-400 dark:placeholder-neutral-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all"
            />
            {searchQuery && (
              <button
                onClick={handleClearSearch}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-200 rounded-md transition-colors"
                aria-label="Clear search text"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Quick Filter Keyword Pills */}
          <div className="flex flex-wrap items-center gap-1.5 pt-1 text-xs">
            <span className="text-[11px] font-mono text-neutral-400 mr-1 flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-cyan-500" />
              Quick tech filters:
            </span>
            {popularTechChips.map((chip) => {
              const isSelected = searchQuery.toLowerCase() === chip.toLowerCase();
              return (
                <button
                  key={chip}
                  onClick={() => handleSearchChange(isSelected ? '' : chip)}
                  className={`px-2.5 py-1 text-xs rounded-lg transition-all ${
                    isSelected
                      ? 'bg-cyan-500 text-white font-medium shadow-sm'
                      : 'bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-200 dark:hover:bg-neutral-700/60'
                  }`}
                >
                  {chip}
                </button>
              );
            })}
          </div>
        </div>

        {/* Filter Bar (Segmented Category Controls) & Active Status */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div className="flex items-center gap-1.5 p-1.5 bg-neutral-100 dark:bg-neutral-900/90 border border-neutral-200 dark:border-neutral-800 rounded-xl overflow-x-auto">
            {categories.map((cat) => {
              const isSelected = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
                    isSelected
                      ? 'bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white shadow-sm border border-neutral-200/60 dark:border-neutral-700/60'
                      : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Active status & reset if filtered */}
          {(searchQuery || activeCategory !== 'All') && (
            <div className="flex items-center gap-2 self-start sm:self-auto text-xs text-neutral-500">
              <span>
                Found <strong className="text-neutral-900 dark:text-white">{filteredProjects.length}</strong> {filteredProjects.length === 1 ? 'project' : 'projects'}
              </span>
              <button
                onClick={handleResetAll}
                className="inline-flex items-center gap-1 text-xs text-cyan-600 dark:text-cyan-400 hover:underline ml-2"
              >
                <RotateCcw className="w-3 h-3" />
                Reset filters
              </button>
            </div>
          )}
        </div>

        {/* Projects Grid */}
        {filteredProjects.length === 0 ? (
          <div className="text-center py-16 p-8 rounded-2xl border border-dashed border-neutral-300 dark:border-neutral-800 bg-white/50 dark:bg-neutral-900/30">
            <Layers className="w-10 h-10 text-neutral-400 mx-auto mb-3" />
            <h3 className="text-base font-semibold text-neutral-800 dark:text-neutral-200">
              No projects found
            </h3>
            <p className="mt-1 text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 max-w-md mx-auto">
              No projects matched your search criteria {searchQuery ? `for "${searchQuery}"` : ''} in {activeCategory} category.
            </p>
            <button
              onClick={handleResetAll}
              className="mt-4 px-4 py-2 text-xs font-medium rounded-lg bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900 hover:opacity-90 transition-opacity"
            >
              Reset search and view all projects
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                highlightQuery={searchQuery}
              />
            ))}
          </div>
        )}

      </div>
    </section>
  );
};
