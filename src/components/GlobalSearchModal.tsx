import React, { useState, useEffect, useRef, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, X, Layers, Code, ArrowRight, CornerDownLeft, Sparkles, Terminal } from 'lucide-react';
import { projectsData } from '../data/projects';
import { skillsData, javaDsaData } from '../data/portfolioData';

interface GlobalSearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialQuery?: string;
}

export const GlobalSearchModal: React.FC<GlobalSearchModalProps> = ({
  isOpen,
  onClose,
  initialQuery = ''
}) => {
  const [query, setQuery] = useState(initialQuery);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  // Reset or focus on open
  useEffect(() => {
    if (isOpen) {
      setQuery(initialQuery);
      setSelectedIndex(0);
      setTimeout(() => {
        inputRef.current?.focus();
        inputRef.current?.select();
      }, 50);
    }
  }, [isOpen, initialQuery]);

  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // ESC to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Search Results Compilation
  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) {
      return {
        projects: projectsData.slice(0, 3).map((p) => ({
          type: 'project' as const,
          id: p.id,
          title: p.title,
          category: p.category,
          subtitle: p.technologies.slice(0, 3).join(', '),
          url: `/projects/${p.id}`,
          matchedTech: p.technologies
        })),
        skills: [
          { type: 'skill' as const, title: 'Java', category: 'Programming Languages', url: '/skills?q=Java' },
          { type: 'skill' as const, title: 'React.js', category: 'Frontend Development', url: '/skills?q=React' },
          { type: 'skill' as const, title: 'Data Structures & Algorithms', category: 'Core CS', url: '/skills?q=DSA' },
          { type: 'skill' as const, title: 'Node.js & Express', category: 'Backend Development', url: '/skills?q=Node' }
        ]
      };
    }

    // Filter projects
    const matchedProjects = projectsData
      .filter((p) => {
        const inTitle = p.title.toLowerCase().includes(q);
        const inCat = p.category.toLowerCase().includes(q);
        const inDesc = p.shortDescription.toLowerCase().includes(q) || p.description.toLowerCase().includes(q);
        const inTech = p.technologies.some((t) => t.toLowerCase().includes(q));
        const inFeatures = p.keyFeatures?.some(
          (f) => f.title.toLowerCase().includes(q) || f.description.toLowerCase().includes(q)
        );
        return inTitle || inCat || inDesc || inTech || inFeatures;
      })
      .map((p) => {
        const matchedTech = p.technologies.filter((t) => t.toLowerCase().includes(q));
        return {
          type: 'project' as const,
          id: p.id,
          title: p.title,
          category: p.category,
          subtitle: p.shortDescription,
          url: `/projects/${p.id}`,
          matchedTech: matchedTech.length > 0 ? matchedTech : p.technologies.slice(0, 3)
        };
      });

    // Filter skills
    const matchedSkills: { type: 'skill'; title: string; category: string; url: string }[] = [];
    skillsData.forEach((cat) => {
      cat.skills.forEach((s) => {
        if (s.name.toLowerCase().includes(q) || cat.title.toLowerCase().includes(q) || (s.note && s.note.toLowerCase().includes(q))) {
          matchedSkills.push({
            type: 'skill',
            title: s.name,
            category: cat.title,
            url: `/skills?q=${encodeURIComponent(s.name)}`
          });
        }
      });
    });

    // Also check Java / DSA topics
    javaDsaData.forEach((section) => {
      section.topics.forEach((topic) => {
        if (topic.toLowerCase().includes(q)) {
          matchedSkills.push({
            type: 'skill',
            title: topic,
            category: section.title,
            url: `/skills?q=${encodeURIComponent(topic)}`
          });
        }
      });
    });

    return {
      projects: matchedProjects,
      skills: matchedSkills
    };
  }, [query]);

  // Combined flat list for keyboard navigation
  const flatItems = useMemo(() => {
    return [...results.projects, ...results.skills];
  }, [results]);

  const handleSelect = (url: string) => {
    onClose();
    navigate(url);
  };

  // Keyboard navigation inside list
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (flatItems.length === 0) return;
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % flatItems.length);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev - 1 + flatItems.length) % flatItems.length);
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (flatItems[selectedIndex]) {
        handleSelect(flatItems[selectedIndex].url);
      }
    }
  };

  const popularKeywords = ['React', 'Java', 'Node.js', 'Socket.io', 'DSA', 'SQL', 'MongoDB', 'Robotics'];

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center p-4 sm:p-6 md:p-20 overflow-y-auto bg-neutral-950/70 dark:bg-neutral-950/80 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <div
        className="w-full max-w-2xl bg-white dark:bg-neutral-900 rounded-2xl border border-neutral-200 dark:border-neutral-800 shadow-2xl overflow-hidden flex flex-col my-auto transition-all"
        onClick={(e) => e.stopPropagation()}
        onKeyDown={handleKeyDown}
      >
        {/* Search Input Bar */}
        <div className="relative flex items-center px-4 py-3.5 border-b border-neutral-200 dark:border-neutral-800">
          <Search className="w-5 h-5 text-cyan-500 mr-3 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
            placeholder="Search projects, technologies (React, Java, Socket.io...), or skills..."
            className="w-full bg-transparent text-sm sm:text-base text-neutral-900 dark:text-white placeholder-neutral-400 dark:placeholder-neutral-500 focus:outline-none"
          />
          {query && (
            <button
              onClick={() => {
                setQuery('');
                inputRef.current?.focus();
              }}
              className="p-1 rounded-md text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-200 transition-colors mr-2"
              aria-label="Clear search"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="px-2 py-1 text-xs font-mono rounded bg-neutral-100 dark:bg-neutral-800 text-neutral-500 hover:text-neutral-900 dark:hover:text-white transition-colors"
          >
            ESC
          </button>
        </div>

        {/* Quick Keyword Suggestions */}
        <div className="px-4 py-2.5 bg-neutral-50/70 dark:bg-neutral-950/40 border-b border-neutral-100 dark:border-neutral-800/80 flex items-center gap-1.5 overflow-x-auto text-xs text-neutral-500">
          <span className="shrink-0 font-medium text-[11px] text-neutral-400">Quick Filters:</span>
          {popularKeywords.map((kw) => (
            <button
              key={kw}
              onClick={() => setQuery(kw)}
              className={`px-2 py-0.5 rounded text-xs transition-colors shrink-0 ${
                query.toLowerCase() === kw.toLowerCase()
                  ? 'bg-cyan-500 text-white'
                  : 'bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700/60 text-neutral-700 dark:text-neutral-300 hover:border-cyan-500'
              }`}
            >
              {kw}
            </button>
          ))}
        </div>

        {/* Results Container */}
        <div className="max-h-[60vh] overflow-y-auto p-3 space-y-4">
          {flatItems.length === 0 ? (
            <div className="py-12 text-center text-neutral-500 dark:text-neutral-400 space-y-2">
              <Search className="w-8 h-8 text-neutral-300 dark:text-neutral-700 mx-auto" />
              <p className="text-sm font-medium">No results found for &ldquo;{query}&rdquo;</p>
              <p className="text-xs text-neutral-400">
                Try searching for a technology (e.g. React, Java, Node.js, Express) or a category.
              </p>
            </div>
          ) : (
            <>
              {/* Projects Section */}
              {results.projects.length > 0 && (
                <div>
                  <div className="flex items-center justify-between px-2 pb-1.5 text-xs font-mono font-medium text-neutral-400 uppercase tracking-wider">
                    <span className="flex items-center gap-1.5">
                      <Layers className="w-3.5 h-3.5 text-cyan-500" />
                      Projects ({results.projects.length})
                    </span>
                    <button
                      onClick={() => handleSelect(`/projects?q=${encodeURIComponent(query)}`)}
                      className="text-[11px] text-cyan-600 dark:text-cyan-400 hover:underline capitalize font-sans font-normal"
                    >
                      View in Projects grid &rarr;
                    </button>
                  </div>
                  <div className="space-y-1">
                    {results.projects.map((item, idx) => {
                      const isHighlighted = selectedIndex === idx;
                      return (
                        <div
                          key={item.id}
                          onClick={() => handleSelect(item.url)}
                          onMouseEnter={() => setSelectedIndex(idx)}
                          className={`group flex items-start justify-between p-3 rounded-xl cursor-pointer transition-all ${
                            isHighlighted
                              ? 'bg-neutral-100 dark:bg-neutral-800/90 border border-neutral-200 dark:border-neutral-700'
                              : 'hover:bg-neutral-50 dark:hover:bg-neutral-800/50 border border-transparent'
                          }`}
                        >
                          <div className="space-y-1 pr-4 min-w-0">
                            <div className="flex items-center gap-2">
                              <span className="font-semibold text-sm text-neutral-900 dark:text-white truncate">
                                {item.title}
                              </span>
                              <span className="px-1.5 py-0.5 text-[10px] font-mono rounded bg-neutral-200/70 dark:bg-neutral-700/60 text-neutral-700 dark:text-neutral-300 shrink-0">
                                {item.category}
                              </span>
                            </div>
                            <p className="text-xs text-neutral-500 dark:text-neutral-400 line-clamp-1">
                              {item.subtitle}
                            </p>
                            <div className="flex flex-wrap gap-1 pt-1">
                              {item.matchedTech.map((tech, i) => (
                                <span
                                  key={i}
                                  className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-cyan-50 dark:bg-cyan-950/40 text-cyan-700 dark:text-cyan-300 border border-cyan-200 dark:border-cyan-800/50"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                          <div className="shrink-0 pt-1 text-neutral-400 group-hover:text-cyan-500 transition-colors">
                            <ArrowRight className="w-4 h-4" />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Skills Section */}
              {results.skills.length > 0 && (
                <div>
                  <div className="flex items-center justify-between px-2 pb-1.5 text-xs font-mono font-medium text-neutral-400 uppercase tracking-wider">
                    <span className="flex items-center gap-1.5">
                      <Code className="w-3.5 h-3.5 text-emerald-500" />
                      Skills & Fundamentals ({results.skills.length})
                    </span>
                    <button
                      onClick={() => handleSelect(`/skills?q=${encodeURIComponent(query)}`)}
                      className="text-[11px] text-cyan-600 dark:text-cyan-400 hover:underline capitalize font-sans font-normal"
                    >
                      View on Skills page &rarr;
                    </button>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                    {results.skills.map((item, idx) => {
                      const itemIdx = results.projects.length + idx;
                      const isHighlighted = selectedIndex === itemIdx;
                      return (
                        <div
                          key={item.title + idx}
                          onClick={() => handleSelect(item.url)}
                          onMouseEnter={() => setSelectedIndex(itemIdx)}
                          className={`flex items-center justify-between p-2.5 rounded-lg cursor-pointer transition-all ${
                            isHighlighted
                              ? 'bg-neutral-100 dark:bg-neutral-800/90 border border-neutral-200 dark:border-neutral-700'
                              : 'hover:bg-neutral-50 dark:hover:bg-neutral-800/50 border border-transparent'
                          }`}
                        >
                          <div className="min-w-0 pr-2">
                            <div className="text-xs font-semibold text-neutral-900 dark:text-white truncate">
                              {item.title}
                            </div>
                            <div className="text-[10px] text-neutral-500 dark:text-neutral-400 truncate">
                              {item.category}
                            </div>
                          </div>
                          <ArrowRight className="w-3.5 h-3.5 text-neutral-400 shrink-0" />
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </>
          )}
        </div>

        {/* Footer Shortcut Helper */}
        <div className="px-4 py-2.5 bg-neutral-100 dark:bg-neutral-950/80 border-t border-neutral-200 dark:border-neutral-800 flex items-center justify-between text-[11px] text-neutral-500">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1">
              <kbd className="px-1.5 py-0.5 rounded bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 font-mono text-[10px]">
                &uarr; &darr;
              </kbd>
              Navigate
            </span>
            <span className="flex items-center gap-1">
              <kbd className="px-1.5 py-0.5 rounded bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 font-mono text-[10px]">
                <CornerDownLeft className="w-2.5 h-2.5 inline" />
              </kbd>
              Select
            </span>
            <span className="flex items-center gap-1">
              <kbd className="px-1.5 py-0.5 rounded bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 font-mono text-[10px]">
                ESC
              </kbd>
              Close
            </span>
          </div>
          <span className="text-neutral-400">Ritesh Kumar Portfolio</span>
        </div>
      </div>
    </div>
  );
};
