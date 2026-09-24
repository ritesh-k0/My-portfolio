import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';

import { Home } from './pages/Home';
import { AboutPage } from './pages/AboutPage';
import { SkillsPage } from './pages/SkillsPage';
import { EducationPage } from './pages/EducationPage';
import { ExperiencePage } from './pages/ExperiencePage';
import { ProjectsPage } from './pages/ProjectsPage';
import { ProjectDetailsPage } from './pages/ProjectDetailsPage';
import { CertificationsPage } from './pages/CertificationsPage';
import { ContactPage } from './pages/ContactPage';

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <ScrollToTop />
        <div className="min-h-screen flex flex-col bg-neutral-50 dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100 transition-colors duration-200">
          <Navbar />
          <div className="flex-1">
            <Routes>
              {/* Main Routes */}
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/skills" element={<SkillsPage />} />
              <Route path="/education" element={<EducationPage />} />
              <Route path="/experience" element={<ExperiencePage />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/certifications" element={<CertificationsPage />} />
              <Route path="/contact" element={<ContactPage />} />

              {/* Explicit Project Routes */}
              <Route
                path="/projects/employee-management-system"
                element={<ProjectDetailsPage projectIdOverride="employee-management-system" />}
              />
              <Route
                path="/projects/real-chat-app"
                element={<ProjectDetailsPage projectIdOverride="real-chat-app" />}
              />
              <Route
                path="/projects/baking-app"
                element={<ProjectDetailsPage projectIdOverride="baking-app" />}
              />
              <Route
                path="/projects/zerodha-clone"
                element={<ProjectDetailsPage projectIdOverride="zerodha-clone" />}
              />
              <Route
                path="/projects/wanderlust"
                element={<ProjectDetailsPage projectIdOverride="wanderlust" />}
              />
              <Route
                path="/projects/zoom-clone"
                element={<ProjectDetailsPage projectIdOverride="zoom-clone" />}
              />
              <Route
                path="/projects/obstacle-avoiding-car"
                element={<ProjectDetailsPage projectIdOverride="obstacle-avoiding-car" />}
              />

              {/* Dynamic Project Route */}
              <Route path="/projects/:projectId" element={<ProjectDetailsPage />} />

              {/* Fallback */}
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}
