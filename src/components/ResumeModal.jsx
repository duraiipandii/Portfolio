import React, { useEffect } from 'react';
import { X, Download, FileText, ExternalLink, CheckCircle2, Briefcase, GraduationCap, Code2, Award, Mail, Phone, MapPin } from 'lucide-react';
import { Linkedin } from './Icons';
import { personalDetails, experiences, skillsCategories, education } from '../data/portfolioData';

export default function ResumeModal({ isOpen, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      
      {/* Modal Box */}
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-[#0c101c] border border-slate-800 rounded-2xl shadow-2xl flex flex-col overflow-hidden text-slate-200 font-sans">
        
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 bg-slate-900/90 border-b border-slate-800 shrink-0">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white leading-tight">{personalDetails.name} — Resume</h3>
              <p className="text-xs font-mono text-cyan-400">{personalDetails.title}</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={`${import.meta.env.BASE_URL}Durai_Pandi_Resume.pdf`}
              download="Durai_Pandi_Resume.pdf"
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-mono font-bold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-lg shadow-sm transition-all"
            >
              <Download className="w-4 h-4" />
              <span>Download PDF</span>
            </a>
            <button
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Formatted Resume Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-8 text-sm leading-relaxed">
          
          {/* Resume Title Header */}
          <div className="text-center pb-6 border-b border-slate-800 space-y-2">
            <h1 className="text-3xl font-extrabold text-white tracking-tight">{personalDetails.name}</h1>
            <div className="text-sm font-semibold text-cyan-400 font-mono">{personalDetails.title}</div>
            <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-mono text-slate-400 pt-1">
              <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5 text-cyan-400" /> {personalDetails.location}</span>
              <span className="flex items-center gap-1"><Mail className="w-3.5 h-3.5 text-cyan-400" /> {personalDetails.email}</span>
              <span className="flex items-center gap-1"><Phone className="w-3.5 h-3.5 text-cyan-400" /> {personalDetails.phone}</span>
              <span className="flex items-center gap-1"><Linkedin className="w-3.5 h-3.5 text-cyan-400" /> linkedin.com/in/duraipandi</span>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="space-y-2">
            <h2 className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider flex items-center gap-2">
              <Code2 className="w-4 h-4" /> Professional Summary
            </h2>
            <p className="text-slate-300 bg-slate-900/60 p-4 rounded-xl border border-slate-800/80">
              {personalDetails.summary}
            </p>
          </div>

          {/* Technical Skills Breakdown */}
          <div className="space-y-3">
            <h2 className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider flex items-center gap-2">
              <Code2 className="w-4 h-4" /> Technical Skills
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {skillsCategories.map((cat, idx) => (
                <div key={idx} className="p-3 rounded-lg bg-slate-900/40 border border-slate-800">
                  <div className="text-xs font-bold text-slate-200 font-mono mb-1">{cat.category}:</div>
                  <div className="text-xs text-slate-400">{cat.skills.join(', ')}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Work Experience */}
          <div className="space-y-6">
            <h2 className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider flex items-center gap-2">
              <Briefcase className="w-4 h-4" /> Work Experience
            </h2>
            
            {experiences.map((exp, idx) => (
              <div key={idx} className="space-y-2 border-l-2 border-slate-800 pl-4">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="font-bold text-white text-base">
                    {exp.role} — <span className="text-cyan-400">{exp.company}</span>
                  </div>
                  <div className="text-xs font-mono text-slate-400 bg-slate-900 px-2.5 py-1 rounded border border-slate-800">
                    {exp.period} | {exp.location}
                  </div>
                </div>
                <div className="text-xs font-mono text-slate-400">Product: {exp.product}</div>
                <ul className="space-y-1.5 pt-2">
                  {exp.highlights.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-2 text-slate-300 text-xs sm:text-sm">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 mt-1 shrink-0" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Education */}
          <div className="space-y-2">
            <h2 className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider flex items-center gap-2">
              <GraduationCap className="w-4 h-4" /> Education
            </h2>
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 flex flex-wrap items-center justify-between gap-4">
              <div>
                <div className="font-bold text-white">{education.degree}</div>
                <div className="text-xs text-slate-400 font-mono">{education.institution} ({education.completionDate})</div>
              </div>
              <div className="px-3 py-1 rounded bg-cyan-500/10 text-cyan-300 font-mono text-xs font-bold border border-cyan-500/30">
                CGPA: {education.cgpa}
              </div>
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-slate-900/90 border-t border-slate-800 flex items-center justify-between shrink-0 text-xs font-mono text-slate-400">
          <span>Press ESC or click close to dismiss</span>
          <a
            href={`${import.meta.env.BASE_URL}Durai_Pandi_Resume.pdf`}
            download="Durai_Pandi_Resume.pdf"
            className="text-cyan-400 hover:underline flex items-center gap-1"
          >
            <Download className="w-3.5 h-3.5" /> Download PDF copy
          </a>
        </div>

      </div>
    </div>
  );
}
