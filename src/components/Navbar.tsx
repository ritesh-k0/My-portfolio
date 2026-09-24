import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Moon, Sun, Github, Linkedin, Mail, Menu, X, Search } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { personalInfo } from '../data/portfolioData';
import { GlobalSearchModal } from './GlobalSearchModal';

export const Navbar: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Keyboard shortcut: Cmd+K or Ctrl+K opens search
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setSearchModalOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Skills', path: '/skills' },
    { name: 'Education', path: '/education' },
    { name: 'Experience', path: '/experience' },
    { name: 'Projects', path: '/projects' },
    { name: 'Certifications', path: '/certifications' },
    { name: 'Contact', path: '/contact' }
  ];

  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-200 border-b ${
          scrolled
            ? 'bg-neutral-950/90 dark:bg-neutral-950/90 bg-white/90 backdrop-blur-md border-neutral-800/80 dark:border-neutral-800/80 border-neutral-200'
            : 'bg-neutral-950/60 dark:bg-neutral-950/60 bg-white/80 backdrop-blur-sm border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Zone 1: Logo Wordmark */}
            <Link
              to="/"
              className="flex items-center gap-2.5 group text-neutral-900 dark:text-white shrink-0"
              aria-label="Ritesh Kumar Portfolio Home"
            >
              <span className="w-9 h-9 rounded-lg bg-cyan-500/10 dark:bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center font-mono font-bold text-sm text-cyan-600 dark:text-cyan-400 group-hover:bg-cyan-500 group-hover:text-white transition-all shadow-xs shrink-0">
                RK
              </span>
              <span className="font-semibold tracking-tight text-base hidden sm:inline-block">
                Ritesh Kumar
              </span>
            </Link>

            {/* Zone 2: Navigation Links (Desktop) */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2" aria-label="Main Navigation">
              {navLinks.map((item) => {
                const active = isActive(item.path);
                return (
                  <Link
                    key={item.name}
                    to={item.path}
                    className={`px-3 py-1.5 text-xs xl:text-sm font-medium transition-colors relative whitespace-nowrap ${
                      active
                        ? 'text-cyan-500 dark:text-cyan-400'
                        : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white'
                    }`}
                  >
                    {item.name}
                    {active && (
                      <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-cyan-500 dark:bg-cyan-400 rounded-full" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Zone 3: Global Search Button & Social Icons & Theme Toggle */}
            <div className="flex items-center gap-1.5 sm:gap-2">
              {/* Global Quick Search Button */}
              <button
                onClick={() => setSearchModalOpen(true)}
                aria-label="Search projects and skills (Cmd+K / Ctrl+K)"
                className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-xs bg-neutral-100 hover:bg-neutral-200/80 dark:bg-neutral-900 dark:hover:bg-neutral-800 border border-neutral-200/80 dark:border-neutral-800 text-neutral-600 dark:text-neutral-300 transition-colors"
                title="Search projects & skills (Cmd+K / Ctrl+K)"
              >
                <Search className="w-3.5 h-3.5 text-cyan-500" />
                <span className="hidden md:inline text-neutral-500 dark:text-neutral-400">
                  Search...
                </span>
                <kbd className="hidden md:inline-flex items-center text-[10px] font-mono px-1.5 py-0.2 rounded bg-neutral-200 dark:bg-neutral-800 text-neutral-500 border border-neutral-300 dark:border-neutral-700">
                  ⌘K
                </kbd>
              </button>

              <a
                href={personalInfo.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="p-2 rounded-md text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors hidden sm:inline-flex"
              >
                <Github className="w-4 h-4" />
              </a>

              <a
                href={personalInfo.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="p-2 rounded-md text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors hidden sm:inline-flex"
              >
                <Linkedin className="w-4 h-4" />
              </a>

              <a
                href={`mailto:${personalInfo.email}`}
                aria-label="Email Ritesh Kumar"
                className="p-2 rounded-md text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors hidden sm:inline-flex"
              >
                <Mail className="w-4 h-4" />
              </a>

              <button
                onClick={toggleTheme}
                aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
                className="p-2 rounded-md text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors border border-neutral-200 dark:border-neutral-800"
              >
                {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-neutral-700" />}
              </button>

              {/* Mobile Hamburger Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
                className="lg:hidden p-2 rounded-md text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Drawer Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-b border-neutral-200 dark:border-neutral-800 bg-white/98 dark:bg-neutral-950/98 backdrop-blur-xl px-4 pt-2 pb-6 space-y-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                setSearchModalOpen(true);
              }}
              className="w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm bg-neutral-100 dark:bg-neutral-900 text-neutral-700 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-800"
            >
              <span className="flex items-center gap-2">
                <Search className="w-4 h-4 text-cyan-500" />
                Search projects & skills...
              </span>
              <kbd className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-neutral-200 dark:bg-neutral-800 text-neutral-500">
                ⌘K
              </kbd>
            </button>

            <nav className="flex flex-col space-y-1">
              {navLinks.map((item) => {
                const active = isActive(item.path);
                return (
                  <Link
                    key={item.name}
                    to={item.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`px-3 py-2.5 rounded-md text-sm font-medium transition-colors ${
                      active
                        ? 'bg-cyan-50 dark:bg-cyan-950/40 text-cyan-600 dark:text-cyan-400 font-semibold'
                        : 'text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-900'
                    }`}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </nav>

            <div className="pt-3 border-t border-neutral-200 dark:border-neutral-800 flex items-center justify-between text-xs text-neutral-500">
              <span>{personalInfo.email}</span>
              <div className="flex items-center gap-3">
                <a href={personalInfo.githubUrl} target="_blank" rel="noreferrer" className="text-neutral-600 dark:text-neutral-400 hover:text-white">
                  GitHub
                </a>
                <a href={personalInfo.linkedinUrl} target="_blank" rel="noreferrer" className="text-neutral-600 dark:text-neutral-400 hover:text-white">
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Global Command Palette Spotlight Search */}
      <GlobalSearchModal
        isOpen={searchModalOpen}
        onClose={() => setSearchModalOpen(false)}
      />
    </>
  );
};
