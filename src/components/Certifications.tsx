import React, { useState } from 'react';
import { Award, CheckCircle, ExternalLink, Image as ImageIcon } from 'lucide-react';
import { certificationsData, CertificationItem } from '../data/portfolioData';
import { LightboxModal } from './LightboxModal';

export const Certifications: React.FC = () => {
  const [activeCert, setActiveCert] = useState<CertificationItem | null>(null);

  return (
    <section className="py-20 border-b border-neutral-200 dark:border-neutral-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <p className="text-xs font-mono uppercase tracking-wider text-cyan-600 dark:text-cyan-400 mb-2">
            Skill Validation
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white">
            Certifications & Training
          </h2>
          <p className="mt-3 text-base text-neutral-600 dark:text-neutral-400 leading-relaxed">
            Verified academic value-added coursework, robotics training, AI programs, and continuous learning achievements.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificationsData.map((cert) => (
            <div
              key={cert.id}
              className="rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/60 p-6 flex flex-col justify-between shadow-sm hover:border-neutral-300 dark:hover:border-neutral-700 transition-colors"
            >
              <div>
                {/* Header */}
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-cyan-50 dark:bg-cyan-950/40 text-cyan-600 dark:text-cyan-400">
                    <Award className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-mono text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                    <CheckCircle className="w-3.5 h-3.5" />
                    <span>{cert.status}</span>
                  </span>
                </div>

                <h3 className="text-base font-bold text-neutral-900 dark:text-white mb-1">
                  {cert.title}
                </h3>
                
                <p className="text-xs font-mono text-cyan-600 dark:text-cyan-400 mb-3">
                  {cert.issuerOrProgram}
                </p>

                <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  {cert.description}
                </p>
              </div>

              {/* Certificate Image Placeholder / Lightbox Action */}
              <div className="mt-6 pt-4 border-t border-neutral-100 dark:border-neutral-800">
                <button
                  onClick={() => setActiveCert(cert)}
                  className="w-full flex items-center justify-between p-2.5 rounded-lg border border-dashed border-neutral-300 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-950 hover:border-cyan-500/50 hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors text-xs text-neutral-600 dark:text-neutral-400"
                >
                  <span className="flex items-center gap-2">
                    <ImageIcon className="w-3.5 h-3.5 text-cyan-500" />
                    <span>{cert.certificateImagePlaceholder}</span>
                  </span>
                  <span className="text-[10px] font-mono text-cyan-600 dark:text-cyan-400">
                    View
                  </span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Certificate Lightbox Modal */}
        <LightboxModal
          isOpen={!!activeCert}
          onClose={() => setActiveCert(null)}
          title={activeCert?.title || ''}
          description={`Program: ${activeCert?.issuerOrProgram} · ${activeCert?.status}`}
          placeholderText="Add Certificate Image (Place in /src/assets/certificates/)"
        />

      </div>
    </section>
  );
};
