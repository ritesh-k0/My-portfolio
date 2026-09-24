import React, { useState } from 'react';
import { Mail, Github, Linkedin, Send, CheckCircle2, AlertCircle, MapPin } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submittedMessage, setSubmittedMessage] = useState<string | null>(null);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Please enter your name.';
    if (!formData.email.trim()) {
      errs.email = 'Please enter your email.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please enter a valid email address.';
    }
    if (!formData.subject.trim()) errs.subject = 'Please enter a subject.';
    if (!formData.message.trim()) {
      errs.message = 'Please write a message.';
    } else if (formData.message.trim().length < 10) {
      errs.message = 'Message must be at least 10 characters long.';
    }
    return errs;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSubmittedMessage(null);
      return;
    }

    setErrors({});
    // Honest submission handling: As no remote mail backend is configured,
    // inform user and offer direct email dispatch.
    setSubmittedMessage(
      'Thank you! Form validated successfully. Please connect directly through the email or social links below to send your note directly.'
    );
  };

  const handleMailtoDirect = () => {
    const subject = encodeURIComponent(formData.subject || 'Portfolio Inquiry');
    const body = encodeURIComponent(
      `From: ${formData.name} (${formData.email})\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section className="py-20 border-b border-neutral-200 dark:border-neutral-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <p className="text-xs font-mono uppercase tracking-wider text-cyan-600 dark:text-cyan-400 mb-2">
            Get In Touch
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-white">
            Contact & Connect
          </h2>
          <p className="mt-3 text-base text-neutral-600 dark:text-neutral-400 leading-relaxed">
            I am always open to discussing software engineering opportunities, campus placements, project collaborations, or technical questions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Contact Details & Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/60 p-6 space-y-6 shadow-sm">
              <h3 className="text-base font-semibold text-neutral-900 dark:text-white">
                Contact Information
              </h3>

              <div className="space-y-4">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-neutral-50 dark:hover:bg-neutral-800/60 transition-colors group"
                >
                  <div className="p-2 rounded-lg bg-cyan-50 dark:bg-cyan-950/40 text-cyan-600 dark:text-cyan-400 group-hover:scale-105 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-neutral-400 uppercase tracking-wider block">
                      Email
                    </span>
                    <span className="text-sm font-medium text-neutral-800 dark:text-neutral-200 group-hover:text-cyan-500 transition-colors">
                      {personalInfo.email}
                    </span>
                  </div>
                </a>

                <a
                  href={personalInfo.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-neutral-50 dark:hover:bg-neutral-800/60 transition-colors group"
                >
                  <div className="p-2 rounded-lg bg-cyan-50 dark:bg-cyan-950/40 text-cyan-600 dark:text-cyan-400 group-hover:scale-105 transition-transform">
                    <Github className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-neutral-400 uppercase tracking-wider block">
                      GitHub
                    </span>
                    <span className="text-sm font-medium text-neutral-800 dark:text-neutral-200 group-hover:text-cyan-500 transition-colors">
                      {personalInfo.githubUsername}
                    </span>
                  </div>
                </a>

                <a
                  href={personalInfo.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-neutral-50 dark:hover:bg-neutral-800/60 transition-colors group"
                >
                  <div className="p-2 rounded-lg bg-cyan-50 dark:bg-cyan-950/40 text-cyan-600 dark:text-cyan-400 group-hover:scale-105 transition-transform">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-neutral-400 uppercase tracking-wider block">
                      LinkedIn
                    </span>
                    <span className="text-sm font-medium text-neutral-800 dark:text-neutral-200 group-hover:text-cyan-500 transition-colors">
                      {personalInfo.linkedinUsername}
                    </span>
                  </div>
                </a>

                <div className="flex items-center gap-3 p-3 text-neutral-500 text-xs">
                  <MapPin className="w-4 h-4 text-neutral-400" />
                  <span>Location: {personalInfo.location} (Sandip University, Sijoul)</span>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-neutral-50 dark:bg-neutral-900/40 border border-neutral-200 dark:border-neutral-800 text-xs text-neutral-500 space-y-1">
              <p className="font-semibold text-neutral-800 dark:text-neutral-200">
                Placement & Recruiter Notice:
              </p>
              <p className="leading-relaxed">
                I am preparing for upcoming 2027 graduate campus recruitment and tech roles. Please reach out anytime via email for resumes, code discussions, or scheduling interviews.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              noValidate
              className="rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/60 p-6 sm:p-8 space-y-5 shadow-sm"
            >
              <h3 className="text-base font-semibold text-neutral-900 dark:text-white pb-2 border-b border-neutral-100 dark:border-neutral-800">
                Send a Message
              </h3>

              {submittedMessage && (
                <div className="p-4 rounded-lg bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-xs text-emerald-800 dark:text-emerald-300 space-y-2">
                  <div className="flex items-center gap-2 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                    <span>{submittedMessage}</span>
                  </div>
                  <button
                    type="button"
                    onClick={handleMailtoDirect}
                    className="mt-2 px-3 py-1.5 rounded-md bg-emerald-600 text-white font-medium hover:bg-emerald-500 transition-colors text-xs inline-flex items-center gap-1.5"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    <span>Open in Email App to Send</span>
                  </button>
                </div>
              )}

              {/* Name Field */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-xs font-mono uppercase tracking-wider text-neutral-600 dark:text-neutral-400 mb-1.5"
                >
                  Your Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => {
                    setFormData({ ...formData, name: e.target.value });
                    if (errors.name) setErrors({ ...errors, name: '' });
                  }}
                  placeholder="e.g. John Doe"
                  className={`w-full px-3.5 py-2.5 rounded-lg border text-sm transition-colors bg-white dark:bg-neutral-950 text-neutral-900 dark:text-white placeholder:text-neutral-400 focus:outline-none focus:ring-1 ${
                    errors.name
                      ? 'border-red-500 focus:ring-red-500'
                      : 'border-neutral-300 dark:border-neutral-800 focus:border-cyan-500 focus:ring-cyan-500'
                  }`}
                />
                {errors.name && (
                  <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" /> {errors.name}
                  </p>
                )}
              </div>

              {/* Email Field */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-xs font-mono uppercase tracking-wider text-neutral-600 dark:text-neutral-400 mb-1.5"
                >
                  Your Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => {
                    setFormData({ ...formData, email: e.target.value });
                    if (errors.email) setErrors({ ...errors, email: '' });
                  }}
                  placeholder="e.g. name@company.com"
                  className={`w-full px-3.5 py-2.5 rounded-lg border text-sm transition-colors bg-white dark:bg-neutral-950 text-neutral-900 dark:text-white placeholder:text-neutral-400 focus:outline-none focus:ring-1 ${
                    errors.email
                      ? 'border-red-500 focus:ring-red-500'
                      : 'border-neutral-300 dark:border-neutral-800 focus:border-cyan-500 focus:ring-cyan-500'
                  }`}
                />
                {errors.email && (
                  <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" /> {errors.email}
                  </p>
                )}
              </div>

              {/* Subject Field */}
              <div>
                <label
                  htmlFor="subject"
                  className="block text-xs font-mono uppercase tracking-wider text-neutral-600 dark:text-neutral-400 mb-1.5"
                >
                  Subject <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="subject"
                  value={formData.subject}
                  onChange={(e) => {
                    setFormData({ ...formData, subject: e.target.value });
                    if (errors.subject) setErrors({ ...errors, subject: '' });
                  }}
                  placeholder="e.g. Software Engineer Opportunity / Project Inquiry"
                  className={`w-full px-3.5 py-2.5 rounded-lg border text-sm transition-colors bg-white dark:bg-neutral-950 text-neutral-900 dark:text-white placeholder:text-neutral-400 focus:outline-none focus:ring-1 ${
                    errors.subject
                      ? 'border-red-500 focus:ring-red-500'
                      : 'border-neutral-300 dark:border-neutral-800 focus:border-cyan-500 focus:ring-cyan-500'
                  }`}
                />
                {errors.subject && (
                  <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" /> {errors.subject}
                  </p>
                )}
              </div>

              {/* Message Field */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-xs font-mono uppercase tracking-wider text-neutral-600 dark:text-neutral-400 mb-1.5"
                >
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => {
                    setFormData({ ...formData, message: e.target.value });
                    if (errors.message) setErrors({ ...errors, message: '' });
                  }}
                  placeholder="Write your note or question here..."
                  className={`w-full px-3.5 py-2.5 rounded-lg border text-sm transition-colors bg-white dark:bg-neutral-950 text-neutral-900 dark:text-white placeholder:text-neutral-400 focus:outline-none focus:ring-1 resize-y ${
                    errors.message
                      ? 'border-red-500 focus:ring-red-500'
                      : 'border-neutral-300 dark:border-neutral-800 focus:border-cyan-500 focus:ring-cyan-500'
                  }`}
                />
                {errors.message && (
                  <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" /> {errors.message}
                  </p>
                )}
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-neutral-900 hover:bg-neutral-800 dark:bg-white dark:hover:bg-neutral-100 text-white dark:text-neutral-900 font-medium text-sm transition-colors shadow-sm cursor-pointer"
                >
                  <Send className="w-4 h-4 text-cyan-500" />
                  <span>Send Message</span>
                </button>
              </div>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
};
