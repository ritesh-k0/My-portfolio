import React, { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Code, Terminal, Layout, Server, Database, Wrench, Search, X, Sparkles, RotateCcw, CheckCircle2 } from 'lucide-react';
import { skillsData } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const urlQuery = searchParams.get('q') || '';
  
  const [searchQuery, setSearchQuery] = useState<string>(urlQuery);
  const [onlyShowMatchingCategories, setOnlyShowMatchingCategories] = useState<boolean>(false);

  // Sync if URL query changes
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

  const handleClear = () => {
    setSearchQuery('');
    searchParams.delete('q');
    setSearchParams(searchParams, { replace: true });
  };

  const quickSkillChips = ['Java', 'Python', 'C / C++', 'React', 'Node.js', 'SQL', 'DSA', 'Git', 'DBMS'];

  const categoryIcons: Record<string, React.ReactNode> = {
    'Programming Languages': <Code className="w-4 h-4 text-cyan-500" />,
    'Core Computer Science': <Terminal className="w-4 h-4 text-emerald-500" />,
    'Frontend Development': <Layout className="w-4 h-4 text-blue-500" />,
    'Backend Development': <Server className="w-4 h-4 text-purple-500" />,
    'Database Management': <Database className="w-4 h-4 text-amber-500" />,
    'Tools & Libraries': <Wrench className="w-4 h-4 text-teal-500" />
  };

  // Filter and tally matches
  const { filteredCategories, totalMatchingSkills, totalSkillsCount } = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    let matchCount = 0;
    let allSkillsCount = 0;

    const processed = skillsData.map((category) => {
      const isCatMatch = category.title.toLowerCase().includes(q) || category.description.toLowerCase().includes(q);
      
      const matchingSkillsInCat: string[] = [];
      category.skills.forEach((s) => {
        allSkillsCount++;
        const isSkillMatch = s.name.toLowerCase().includes(q) || (s.note && s.note.toLowerCase().includes(q));
        if (q && (isSkillMatch || isCatMatch)) {
          matchingSkillsInCat.push(s.name);
          matchCount++;
        }
      });

      const hasMatch = q ? (isCatMatch || matchingSkillsInCat.length > 0) : true;

      return {
        ...category,
        hasMatch,
        matchingSkillsInCat,
        matchCountInCat: matchingSkillsInCat.length
      };
    });

    const finalCategories = onlyShowMatchingCategories && q
      ? processed.filter((c) => c.hasMatch)
      : processed;

    return {
      filteredCategories: finalCategories,
      totalMatchingSkills: matchCount,
      totalSkillsCount: allSkillsCount
    };
  }, [searchQuery, onlyShowMatchingCategories]);

  return (
    <section className="py-16 md:py-20 border-b border-neutral-200 dark:border-neutral-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-10">
          <p className="text-xs font-mono uppercase tracking-wider text-cyan-600 dark:text-cyan-400 mb-2">
            Technical Proficiency
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white">
            Skills & Technical Stack
          </h2>
          <p className="mt-3 text-base text-neutral-600 dark:text-neutral-400 leading-relaxed">
            Core programming languages, computer science fundamentals, full-stack frameworks, and development tools practiced through coursework and practical projects.
          </p>
        </div>

        {/* Global Search Bar Container for Skills */}
        <div className="mb-10 p-4 rounded-2xl bg-white dark:bg-neutral-900/90 border border-neutral-200 dark:border-neutral-800/90 shadow-sm space-y-3">
          <div className="relative flex items-center">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-cyan-500 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => handleSearchChange(e.target.value)}
              placeholder="Search skills, languages, frameworks, concepts (e.g., Java, React, SQL, Git, DSA, Docker)..."
              className="w-full pl-10 pr-10 py-2.5 rounded-xl bg-neutral-50 dark:bg-neutral-950/70 border border-neutral-200 dark:border-neutral-800 text-sm text-neutral-900 dark:text-white placeholder-neutral-400 dark:placeholder-neutral-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all"
            />
            {searchQuery && (
              <button
                onClick={handleClear}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-200 rounded-md transition-colors"
                aria-label="Clear search"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Quick Filter Keyword Pills */}
          <div className="flex flex-wrap items-center justify-between gap-2 pt-1 text-xs">
            <div className="flex flex-wrap items-center gap-1.5">
              <span className="text-[11px] font-mono text-neutral-400 mr-1 flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-cyan-500" />
                Quick filters:
              </span>
              {quickSkillChips.map((chip) => {
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

            {/* Match Counter & Reset */}
            {searchQuery && (
              <div className="flex items-center gap-3 text-xs text-neutral-500">
                <span>
                  Found <strong className="text-cyan-600 dark:text-cyan-400">{totalMatchingSkills}</strong> matching {totalMatchingSkills === 1 ? 'skill' : 'skills'}
                </span>
                <button
                  onClick={handleClear}
                  className="inline-flex items-center gap-1 text-cyan-600 dark:text-cyan-400 hover:underline"
                >
                  <RotateCcw className="w-3 h-3" />
                  Clear
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Skills Grid */}
        {filteredCategories.length === 0 || (searchQuery && totalMatchingSkills === 0 && onlyShowMatchingCategories) ? (
          <div className="text-center py-16 p-8 rounded-2xl border border-dashed border-neutral-300 dark:border-neutral-800 bg-white/50 dark:bg-neutral-900/30">
            <Code className="w-10 h-10 text-neutral-400 mx-auto mb-3" />
            <h3 className="text-base font-semibold text-neutral-800 dark:text-neutral-200">
              No skills found matching &ldquo;{searchQuery}&rdquo;
            </h3>
            <p className="mt-1 text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 max-w-md mx-auto">
              Try searching for a core language like Java, C, Python, or a domain like Frontend, Backend, or SQL.
            </p>
            <button
              onClick={handleClear}
              className="mt-4 px-4 py-2 text-xs font-medium rounded-lg bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900 hover:opacity-90 transition-opacity"
            >
              Reset Search Filter
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCategories.map((category) => {
              const q = searchQuery.trim().toLowerCase();
              const isCatHighlighted = q && category.hasMatch;
              const isDimmed = q && !category.hasMatch;

              return (
                <div
                  key={category.title}
                  className={`rounded-2xl border bg-white dark:bg-neutral-900/60 p-6 shadow-sm transition-all duration-200 flex flex-col justify-between ${
                    isCatHighlighted
                      ? 'border-cyan-500/50 dark:border-cyan-500/40 ring-1 ring-cyan-500/20 shadow-md'
                      : isDimmed
                      ? 'border-neutral-200/50 dark:border-neutral-800/50 opacity-40'
                      : 'border-neutral-200 dark:border-neutral-800/90 hover:border-neutral-300 dark:hover:border-neutral-700'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between gap-2.5 mb-2">
                      <div className="flex items-center gap-2.5">
                        <div className="p-2 rounded-lg bg-neutral-100 dark:bg-neutral-800/60">
                          {categoryIcons[category.title] || <Code className="w-4 h-4 text-cyan-500" />}
                        </div>
                        <h3 className="text-base font-semibold text-neutral-900 dark:text-white">
                          {category.title}
                        </h3>
                      </div>
                      {isCatHighlighted && (
                        <span className="px-2 py-0.5 text-[10px] font-mono font-medium rounded-full bg-cyan-100 dark:bg-cyan-950/70 text-cyan-700 dark:text-cyan-300 border border-cyan-200 dark:border-cyan-800/60">
                          {category.matchCountInCat} matched
                        </span>
                      )}
                    </div>

                    <p className="text-xs text-neutral-500 dark:text-neutral-400 mb-5">
                      {category.description}
                    </p>

                    {/* Skill Badges with match highlights */}
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill) => {
                        const isMatch = q && (
                          skill.name.toLowerCase().includes(q) ||
                          (skill.note && skill.note.toLowerCase().includes(q)) ||
                          category.title.toLowerCase().includes(q)
                        );

                        return (
                          <span
                            key={skill.name}
                            className={`px-2.5 py-1 text-xs font-medium rounded-md transition-all ${
                              isMatch
                                ? 'bg-cyan-500/15 text-cyan-800 dark:text-cyan-300 border border-cyan-400 dark:border-cyan-500/70 font-semibold ring-1 ring-cyan-500/30'
                                : 'bg-neutral-100 dark:bg-neutral-800/70 text-neutral-800 dark:text-neutral-200 border border-neutral-200/70 dark:border-neutral-700/50'
                            }`}
                          >
                            {skill.name}
                          </span>
                        );
                      })}
                    </div>
                  </div>

                  <div className="mt-6 pt-3 border-t border-neutral-100 dark:border-neutral-800/60 flex items-center justify-between text-[11px] font-mono text-neutral-400">
                    <span>Domain Focus</span>
                    <span className="text-cyan-600 dark:text-cyan-400">Practical & Theoretical</span>
                  </div>
                </div>
              );
            })}
          </div>
        )}

      </div>
    </section>
  );
};
