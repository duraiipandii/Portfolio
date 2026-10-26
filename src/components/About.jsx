import React from 'react';
import { 
  Server, 
  Cpu, 
  Workflow, 
  ShieldCheck, 
  Cloud, 
  Terminal, 
  Database, 
  Zap,
  CheckCircle,
  Layers,
  Target,
  Briefcase,
  MapPin,
  Clock
} from 'lucide-react';
import { personalDetails, jobPreferences } from '../data/portfolioData';
import Card3D from './Card3D';

const coreHighlights = [
  {
    icon: Server,
    title: "C# / .NET 9 & ASP.NET Core Web API",
    description: "Developing robust, high-performance REST APIs, background worker services, and dependency injection architectures using modern C#/.NET 9."
  },
  {
    icon: Zap,
    title: "MailKit & SMTP Domain Automation",
    description: "Migrated production email sending from EASendMail to MailKit for superior delivery and throughput on Linux, plus built automated SMTP domain setup."
  },
  {
    icon: Workflow,
    title: "Amazon SP-API & KEEPA Integrations",
    description: "Automated seller product research, pricing, inventory syncing, and bulk analytics by integrating Amazon SP-API, KEEPA API, and Google Sheets."
  },
  {
    icon: Database,
    title: "SQL Server, Redis & Query Optimization",
    description: "Architecting efficient database schemas with Microsoft SQL Server, MySQL, and Redis using EF Core, Dapper, and advanced query indexing."
  },
  {
    icon: Cloud,
    title: "Linux Production Deployments & AWS",
    description: "Deploying code directly to Linux production servers (Ubuntu/Nginx/Kestrel) and AWS (EC2, Lambda) with coordination for minimal downtime."
  },
  {
    icon: ShieldCheck,
    title: "Production Support & RCA Debugging",
    description: "Performing in-depth root-cause analysis (RCA) on client-reported issues and live production bugs, safeguarding high uptime SLAs."
  }
];

export default function About() {
  return (
    <section id="about" className="py-24 relative bg-slate-950/40 border-t border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-xs font-mono text-purple-300">
            <Layers className="w-3.5 h-3.5" />
            <span>BACKEND ENGINEERING ARCHITECTURE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            High-Performance <span className="text-gradient-dotnet">C#/.NET Systems</span>
          </h2>
          <p className="text-slate-300 text-base leading-relaxed">
            4 years of specialized experience engineering C#/.NET backend applications, enterprise communication platforms, and marketplace analytics engines.
          </p>
        </div>

        {/* Main Summary 3D Card */}
        <Card3D maxRotation={6} scale={1.01} className="mb-12">
          <div className="p-8 sm:p-10 rounded-2xl glass-3d-card relative overflow-hidden border border-purple-500/20">
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-8 space-y-5 text-slate-300">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-purple-500/15 border border-purple-500/30 text-purple-300">
                    <Terminal className="w-5 h-5" />
                  </div>
                  <h3 className="text-2xl font-extrabold text-white translate-z-20">
                    Professional Summary &amp; Positioning
                  </h3>
                </div>

                <p className="leading-relaxed text-base translate-z-10 bg-slate-950/70 p-5 rounded-xl border border-slate-800/80 text-slate-200">
                  {personalDetails.summary}
                </p>
                
                <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-slate-200 font-mono translate-z-20">
                  <div className="flex items-center gap-2.5">
                    <CheckCircle className="w-4 h-4 text-purple-400 shrink-0" />
                    <span>C# &amp; .NET 9 Web APIs / REST</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <CheckCircle className="w-4 h-4 text-purple-400 shrink-0" />
                    <span>MailKit Engine &amp; SMTP Automation</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <CheckCircle className="w-4 h-4 text-sky-400 shrink-0" />
                    <span>Amazon SP-API &amp; KEEPA Analytics</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <CheckCircle className="w-4 h-4 text-sky-400 shrink-0" />
                    <span>Linux Server Production Hosting</span>
                  </div>
                </div>
              </div>

              {/* Job Preferences Summary Box */}
              <div className="lg:col-span-4 bg-slate-950/95 p-6 rounded-2xl border border-purple-500/30 space-y-4 translate-z-30 shadow-2xl">
                <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                  <span className="text-xs font-mono text-purple-300 font-bold uppercase tracking-wider flex items-center gap-1.5">
                    <Target className="w-3.5 h-3.5 text-purple-400" /> Job Preferences
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 font-bold">
                    Actively Seeking
                  </span>
                </div>
                
                <div className="space-y-3 text-xs sm:text-sm font-mono">
                  <div className="space-y-1">
                    <span className="text-slate-400 block text-[11px]">Target Roles:</span>
                    <span className="font-bold text-white block bg-slate-900 px-3 py-1.5 rounded-lg border border-slate-800 text-purple-300">
                      .NET Developer / Software Engineer
                    </span>
                  </div>

                  <div className="space-y-1">
                    <span className="text-slate-400 block text-[11px]">Experience:</span>
                    <span className="font-bold text-white block bg-slate-900 px-3 py-1.5 rounded-lg border border-slate-800">
                      4 Years (C#/.NET Backend)
                    </span>
                  </div>

                  <div className="space-y-1">
                    <span className="text-slate-400 block text-[11px]">Preferred Locations:</span>
                    <span className="font-semibold text-slate-200 block bg-slate-900 px-3 py-1.5 rounded-lg border border-slate-800">
                      Chennai, Bengaluru, Remote &amp; Hybrid
                    </span>
                  </div>

                  <div className="space-y-1">
                    <span className="text-slate-400 block text-[11px]">Availability:</span>
                    <span className="font-bold text-emerald-400 block bg-slate-900 px-3 py-1.5 rounded-lg border border-slate-800">
                      Available on Short Notice
                    </span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </Card3D>

        {/* 6 Core Architectural Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {coreHighlights.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <Card3D key={idx} maxRotation={10} scale={1.03}>
                <div className="p-7 rounded-2xl glass-3d-card space-y-4 h-full flex flex-col justify-between border border-slate-800/80 hover:border-purple-500/50 transition-all">
                  <div className="space-y-3">
                    <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-300 translate-z-20 shadow-md">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <h4 className="text-lg font-bold text-white translate-z-20">
                      {item.title}
                    </h4>
                    <p className="text-sm text-slate-300 leading-relaxed translate-z-10">
                      {item.description}
                    </p>
                  </div>
                  <div className="pt-2 text-[11px] font-mono text-purple-400 flex items-center gap-1 translate-z-10">
                    <span>Production Battle-Tested</span>
                  </div>
                </div>
              </Card3D>
            );
          })}
        </div>

      </div>
    </section>
  );
}
