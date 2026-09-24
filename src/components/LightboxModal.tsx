import React, { useEffect } from 'react';
import { X, ZoomIn, Image as ImageIcon } from 'lucide-react';

interface LightboxModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description?: string;
  imageSrc?: string;
  placeholderText?: string;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  isOpen,
  onClose,
  title,
  description,
  imageSrc,
  placeholderText
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={title}
    >
      <div
        className="relative max-w-4xl w-full rounded-2xl bg-neutral-900 border border-neutral-800 p-6 text-white shadow-2xl space-y-4"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between border-b border-neutral-800 pb-3">
          <div>
            <h3 className="text-base font-semibold tracking-tight text-white">
              {title}
            </h3>
            {description && (
              <p className="text-xs text-neutral-400 mt-0.5">{description}</p>
            )}
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors"
            aria-label="Close lightbox"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="relative min-h-[300px] sm:min-h-[420px] rounded-xl bg-neutral-950/90 border border-neutral-800 flex flex-col items-center justify-center p-8 text-center overflow-hidden">
          {imageSrc ? (
            <img
              src={imageSrc}
              alt={title}
              className="max-h-[65vh] w-auto object-contain rounded-lg shadow-md"
              referrerPolicy="no-referrer"
            />
          ) : (
            <div className="space-y-4 max-w-md">
              <div className="w-16 h-16 mx-auto rounded-2xl bg-neutral-800/80 border border-neutral-700/60 flex items-center justify-center text-cyan-400">
                <ImageIcon className="w-8 h-8" />
              </div>
              <div>
                <p className="text-sm font-semibold text-neutral-200">
                  {placeholderText || 'Add Project Screenshot'}
                </p>
                <p className="text-xs text-neutral-500 mt-2 leading-relaxed">
                  Project screenshots can be placed in <code className="text-cyan-400 font-mono text-[11px]">/src/assets/images/</code> and referenced directly in <code className="text-cyan-400 font-mono text-[11px]">/src/data/projects.ts</code>.
                </p>
              </div>
              <div className="pt-2 text-[11px] font-mono text-neutral-600 bg-neutral-900/80 py-2 px-3 rounded-lg border border-neutral-800">
                Placeholder format: screenshots: [{`{ title: '...', image: '/assets/images/...' }`}]
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="flex items-center justify-between text-xs text-neutral-400 pt-1">
          <span>Press <kbd className="px-1.5 py-0.5 rounded bg-neutral-800 font-mono text-[10px]">ESC</kbd> to exit</span>
          <button
            onClick={onClose}
            className="px-3 py-1.5 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-white font-medium text-xs transition-colors"
          >
            Close Viewer
          </button>
        </div>
      </div>
    </div>
  );
};
