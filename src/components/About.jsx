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
  Layers
} from 'lucide-react';
import { personalDetails } from '../data/portfolioData';
import Card3D from './Card3D';

const coreHighlights = [
  {
    icon: Server,
    title: "Core .NET & Web API Development",
    description: "Architecting high-throughput REST APIs, microservices, and client communication workflows using C# and .NET 8."
  },
  {
    icon: Database,
    title: "Data Access & Query Optimization",
    description: "Designing efficient database schemas with MS SQL Server & MySQL using Entity Framework Core, Dapper, and LINQ."
  },
  {
    icon: Workflow,
    title: "Third-Party API Integrations",
    description: "Integrating complex external APIs such as KEEPA API, Amazon SP-API, and Google Sheets API for automated seller intelligence."
  },
  {
    icon: ShieldCheck,
    title: "Production Support & RCA",
    description: "Conducting thorough root-cause analysis (RCA) on client-reported production issues to maintain high uptime and SLA."
  },
  {
    icon: Cloud,
    title: "Linux & AWS Infrastructure",
    description: "Deploying backend code directly onto Linux production servers (Ubuntu/Nginx/IIS) and leveraging AWS EC2/Lambda."
  },
  {
    icon: Zap,
    title: "Email & Domain Automation",
    description: "Migrating legacy mail libraries from EASendMail to MailKit and designing automated SMTP domain configuration tools."
  }
];

export default function About() {
  return (
    <section id="about" className="py-24 relative bg-slate-950/40 border-t border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-xs font-mono text-cyan-400">
            <Layers className="w-3.5 h-3.5" />
            <span>3D ARCHITECTURAL SUMMARY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Engineering High-Performance <span className="text-gradient-3d">Backend Systems</span>
          </h2>
          <p className="text-slate-400 text-base leading-relaxed">
            With ~4 years of hands-on software development experience, I specialize in building resilient C#/.NET applications, optimizing database queries, and automating enterprise communication workflows.
          </p>
        </div>

        {/* Main Summary 3D Card */}
        <Card3D maxRotation={6} scale={1.01} className="mb-16">
          <div className="p-8 sm:p-10 rounded-2xl glass-3d-card relative overflow-hidden">
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-8 space-y-5 text-slate-300">
                <h3 className="text-2xl font-extrabold text-white flex items-center gap-3 translate-z-20">
                  <Terminal className="w-6 h-6 text-cyan-400" />
                  Software Engineering Profile
                </h3>
                <p className="leading-relaxed text-base translate-z-10">
                  {personalDetails.summary}
                </p>
                
                <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-slate-200 font-mono translate-z-20">
                  <div className="flex items-center gap-2.5">
                    <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>C# & .NET 8 Web APIs</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>MailKit & EASendMail Migration</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>Amazon SP-API & KEEPA Integration</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>Linux Production Deployments</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-4 bg-slate-950/90 p-6 rounded-xl border border-slate-800 space-y-4 translate-z-30 shadow-xl">
                <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">Quick Details</div>
                <div className="space-y-3 text-sm font-mono">
                  <div className="flex justify-between border-b border-slate-800 pb-2">
                    <span className="text-slate-400">Experience</span>
                    <span className="font-bold text-white">~4 Years</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-800 pb-2">
                    <span className="text-slate-400">Designation</span>
                    <span className="font-bold text-cyan-400">Software Engineer</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-800 pb-2">
                    <span className="text-slate-400">Location</span>
                    <span className="font-bold text-white">Chennai, India</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Status</span>
                    <span className="font-bold text-emerald-400">Open to Opportunities</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </Card3D>

        {/* 3D Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {coreHighlights.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <Card3D key={idx} maxRotation={10} scale={1.03}>
                <div className="p-7 rounded-xl glass-3d-card space-y-4 h-full flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 translate-z-20 shadow-md">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <h4 className="text-lg font-bold text-white translate-z-20">
                      {item.title}
                    </h4>
                    <p className="text-sm text-slate-400 leading-relaxed translate-z-10">
                      {item.description}
                    </p>
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
