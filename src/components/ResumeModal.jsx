import React, { useEffect, useState } from 'react';
import { 
  X, 
  Download, 
  FileText, 
  ExternalLink, 
  CheckCircle2, 
  Briefcase, 
  GraduationCap, 
  Code2, 
  Award, 
  Mail, 
  Phone, 
  MapPin, 
  Copy, 
  Check,
  Target
} from 'lucide-react';
import { Linkedin } from './Icons';
import { personalDetails, experiences, skillsCategories, education, jobPreferences } from '../data/portfolioData';

export default function ResumeModal({ isOpen, onClose }) {
  const [copied, setCopied] = useState(false);

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

  const handleCopyText = () => {
    const text = `
DURAI PANDI
.NET Developer
Chennai, India | +91 8754179662 | erduraipandii@gmail.com | linkedin.com/in/duraipandi

PROFESSIONAL SUMMARY
${personalDetails.summary}

CORE TECHNICAL SKILLS
Core: C#, .NET 9, .NET Core, ASP.NET Core Web API, ASP.NET Web API, REST APIs, OOP
Data: Microsoft SQL Server, MySQL, Redis, Entity Framework / EF Core, Dapper, LINQ, SQL, Query Optimization, Database Design
Integrations: KEEPA API, Amazon SP-API, Google Sheets API, SMTP, MailKit, Third-Party API Integration
Cloud, Servers & DevOps: AWS (EC2, Lambda), Linux Server, IIS, Windows Server, CI/CD (exposure), Production Deployment
Engineering: Production Support, Root-Cause Analysis, Debugging

PROFESSIONAL EXPERIENCE
Software Engineer | Resulticks (Nov 2024 – Present)
Product: RESUL – Customer Engagement & Communication Platform
• Migrated the mail-sending library from EASendMail to MailKit, improving email delivery success rate and sending speed on Linux-hosted production servers.
• Designed and built SMTP domain automation that streamlines domain configuration and reduces manual setup effort for outbound mail delivery.
• Develop and maintain C#/.NET workflows, REST APIs and database integrations that deliver transactional and marketing email and SMS for client campaigns.
• Diagnose and resolve client-reported issues and production bugs through root-cause analysis, minimizing disruption to message delivery and system uptime.
• Deploy code changes and application updates to Linux production servers, coordinating releases to keep downtime minimal.
Tech: C#, .NET, REST APIs, MailKit, SMTP, Linux

Software Engineer | Agilensmart Technology Solutions Pvt Ltd (Oct 2022 – Oct 2024)
Products: Amazon Seller Tools – KEEPA Integration, Competitor Intelligence, Analyzer Tools
• Built C#/.NET tools for Amazon FBA and merchant-fulfilled sellers, integrating KEEPA API, Amazon SP-API and Google Sheets API to automate product research, pricing and inventory workflows.
• Developed a product history tracker that accepts JSON queries and ASINs, retrieves data through KEEPA API and stores results in Google Sheets for analysis and reporting.
• Implemented stock and price management with Amazon SP-API, refreshing inventory, pricing and stock status from live product data and monitoring competitor listings.
• Automated the generation of feed files for Amazon Seller Central uploads.
• Created wholesale bulk analysis software that helps sellers identify profitable products.
Tech: C#, .NET, KEEPA API, Amazon SP-API, Google Sheets API, JSON

EDUCATION
B.E. in Computer Science and Engineering | Anna University (April 2022)
CGPA: 7.98/10
    `.trim();

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200">
      
      {/* Modal Box */}
      <div className="relative w-full max-w-4xl max-h-[92vh] bg-[#0c101c] border border-slate-800 rounded-2xl shadow-2xl flex flex-col overflow-hidden text-slate-200 font-sans">
        
        {/* Header Bar */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 bg-slate-900/95 border-b border-slate-800 shrink-0 gap-3">
          <div className="flex items-center gap-2.5 min-w-0">
            <div className="p-2 rounded-lg bg-purple-500/15 border border-purple-500/30 text-purple-300 shrink-0">
              <FileText className="w-4 sm:w-5 h-4 sm:h-5" />
            </div>
            <div className="truncate">
              <h3 className="text-sm sm:text-base font-bold text-white leading-tight truncate">
                {personalDetails.name} — Latest Resume
              </h3>
              <p className="text-[11px] sm:text-xs font-mono text-purple-300 truncate">
                {personalDetails.title} • 4 Years Experience • Seeking .NET Developer &amp; Software Engineer Roles
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={handleCopyText}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono text-slate-300 bg-slate-800 hover:bg-slate-700 rounded-lg transition-all"
              title="Copy Resume Plain Text"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-purple-400" />}
              <span className="hidden sm:inline">{copied ? 'Copied' : 'Copy Text'}</span>
            </button>

            <a
              href={`${import.meta.env.BASE_URL}DuraiPandi_Resume.pdf`}
              download="DuraiPandi_Resume.pdf"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 sm:px-4 sm:py-2 text-xs font-mono font-bold text-white bg-purple-600 hover:bg-purple-500 rounded-lg shadow-md transition-all whitespace-nowrap"
            >
              <Download className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              <span>Download PDF</span>
            </a>

            <button
              onClick={onClose}
              className="p-1.5 sm:p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Formatted Resume Body */}
        <div className="p-5 sm:p-8 overflow-y-auto space-y-6 sm:space-y-8 text-xs sm:text-sm leading-relaxed">
          
          {/* Resume Title Header */}
          <div className="text-center pb-5 sm:pb-6 border-b border-slate-800 space-y-2">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight uppercase">{personalDetails.name}</h1>
            <div className="text-sm sm:text-base font-semibold text-purple-400 font-mono">{personalDetails.title}</div>
            
            {/* Target roles badge */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-xs font-mono text-purple-300 mt-1">
              <Target className="w-3.5 h-3.5 text-purple-400" />
              <span>Seeking .NET Developer / Software Engineer roles</span>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 text-xs font-mono text-slate-400 pt-2">
              <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5 text-purple-400" /> {personalDetails.location}</span>
              <span className="text-slate-600">•</span>
              <span className="flex items-center gap-1"><Phone className="w-3.5 h-3.5 text-purple-400" /> {personalDetails.phone}</span>
              <span className="text-slate-600">•</span>
              <span className="flex items-center gap-1"><Mail className="w-3.5 h-3.5 text-sky-400" /> {personalDetails.email}</span>
              <span className="text-slate-600">•</span>
              <span className="flex items-center gap-1"><Linkedin className="w-3.5 h-3.5 text-sky-400" /> linkedin.com/in/duraipandi</span>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="space-y-2">
            <h2 className="text-xs font-mono font-bold text-purple-400 uppercase tracking-wider flex items-center gap-2">
              <Code2 className="w-4 h-4" /> Professional Summary
            </h2>
            <p className="text-slate-200 bg-slate-900/80 p-4 rounded-xl border border-slate-800 leading-relaxed">
              {personalDetails.summary}
            </p>
          </div>

          {/* Core Technical Skills Breakdown */}
          <div className="space-y-3">
            <h2 className="text-xs font-mono font-bold text-purple-400 uppercase tracking-wider flex items-center gap-2">
              <Code2 className="w-4 h-4" /> Core Technical Skills
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {skillsCategories.map((cat, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800">
                  <div className="text-xs font-bold text-white font-mono mb-1 text-purple-300">{cat.category}:</div>
                  <div className="text-xs text-slate-300 leading-normal">{cat.skills.join(', ')}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Work Experience */}
          <div className="space-y-6">
            <h2 className="text-xs font-mono font-bold text-purple-400 uppercase tracking-wider flex items-center gap-2">
              <Briefcase className="w-4 h-4" /> Professional Experience
            </h2>
            
            {experiences.map((exp, idx) => (
              <div key={idx} className="space-y-2 border-l-2 border-purple-500/30 pl-4 py-1">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="font-bold text-white text-base">
                    {exp.role} <span className="text-slate-500">|</span> <span className="text-purple-300">{exp.company}</span>
                  </div>
                  <div className="text-xs font-mono text-purple-300 bg-slate-900 px-3 py-1 rounded-md border border-slate-800">
                    {exp.period}
                  </div>
                </div>
                
                <div className="text-xs font-mono text-slate-400">
                  <span className="font-semibold text-slate-300">Product:</span> {exp.product}
                </div>

                <ul className="space-y-2 pt-2">
                  {exp.highlights.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-2.5 text-slate-300 text-xs sm:text-sm">
                      <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 mt-1 shrink-0" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-2 text-xs font-mono text-slate-400 flex flex-wrap gap-1.5">
                  <span className="text-slate-500 font-bold">Tech:</span>
                  <span className="text-slate-300">{exp.tech.join(', ')}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Education */}
          <div className="space-y-2">
            <h2 className="text-xs font-mono font-bold text-purple-400 uppercase tracking-wider flex items-center gap-2">
              <GraduationCap className="w-4 h-4" /> Education
            </h2>
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 flex flex-wrap items-center justify-between gap-4">
              <div>
                <div className="font-bold text-white">{education.degree}</div>
                <div className="text-xs text-slate-400 font-mono">{education.institution} ({education.completionDate})</div>
              </div>
              <div className="px-3.5 py-1.5 rounded-lg bg-purple-500/15 text-purple-300 font-mono text-xs font-bold border border-purple-500/30">
                CGPA: {education.cgpa}
              </div>
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-slate-900/95 border-t border-slate-800 flex items-center justify-between shrink-0 text-xs font-mono text-slate-400">
          <span>Press ESC or click close to dismiss</span>
          <a
            href={`${import.meta.env.BASE_URL}DuraiPandi_Resume.pdf`}
            download="DuraiPandi_Resume.pdf"
            className="text-purple-400 hover:text-purple-300 hover:underline flex items-center gap-1 font-bold"
          >
            <Download className="w-3.5 h-3.5" /> Download PDF copy
          </a>
        </div>

      </div>
    </div>
  );
}
