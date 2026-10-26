import React from 'react';
import { 
  FileText, 
  Download,
  Mail, 
  MapPin, 
  ArrowRight, 
  Terminal, 
  ShieldCheck, 
  Code2,
  Phone,
  Zap,
  Target,
  Server
} from 'lucide-react';
import { Linkedin, Github } from './Icons';
import { personalDetails, jobPreferences } from '../data/portfolioData';
import Card3D from './Card3D';

export default function Hero({ onOpenResume }) {
  return (
    <section className="relative min-h-screen pt-32 pb-20 flex items-center justify-center overflow-hidden bg-grid-3d">
      
      {/* Background Radial Glow (.NET Purple & Azure Blue) */}
      <div className="absolute top-1/4 left-1/3 -translate-x-1/2 w-[750px] h-[750px] bg-purple-600/15 rounded-full blur-[160px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[550px] h-[550px] bg-sky-500/15 rounded-full blur-[150px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Info (Left Col - 7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Status Pill Badge targeting job preferences */}
            <div className="inline-flex flex-wrap items-center gap-2.5 px-4 py-2 rounded-full bg-slate-900/95 border border-purple-500/40 text-xs font-mono text-purple-300 backdrop-blur-md shadow-lg shadow-purple-950/40">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400"></span>
              </span>
              <Target className="w-3.5 h-3.5 text-purple-400" />
              <span className="text-white font-semibold">Target Roles:</span>
              <span className="text-purple-300 font-bold">.NET Developer / Software Engineer</span>
              <span className="text-slate-500 hidden sm:inline">|</span>
              <span className="text-emerald-400 font-bold hidden sm:inline">{personalDetails.preferredLocations}</span>
            </div>

            {/* Title & Name */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-tight">
                Hi, I'm <span className="text-gradient-dotnet">{personalDetails.name}</span>
              </h1>
              <h2 className="text-2xl sm:text-3xl font-semibold text-slate-200 flex items-center gap-3 font-mono">
                <span className="text-purple-400 text-3xl">&gt;</span> {personalDetails.title} / <span className="text-sky-400">Software Engineer</span>
              </h2>
            </div>

            {/* Tagline / Summary */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed font-normal">
              {personalDetails.tagline}
            </p>

            {/* Meta Tags: Location, Email & Phone */}
            <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm text-slate-300 font-mono">
              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-slate-900/90 border border-slate-800 shadow-sm">
                <MapPin className="w-4 h-4 text-purple-400" />
                <span>{personalDetails.location}</span>
              </div>
              <a 
                href={`mailto:${personalDetails.email}`}
                className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-slate-900/90 border border-slate-800 text-slate-300 hover:text-purple-300 hover:border-purple-500/40 transition-all"
              >
                <Mail className="w-4 h-4 text-sky-400" />
                <span>{personalDetails.email}</span>
              </a>
              <a 
                href={`tel:${personalDetails.phone}`}
                className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-slate-900/90 border border-slate-800 text-slate-300 hover:text-purple-300 hover:border-purple-500/40 transition-all"
              >
                <Phone className="w-4 h-4 text-purple-400" />
                <span>{personalDetails.phone}</span>
              </a>
            </div>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3 sm:gap-4">
              <button
                onClick={onOpenResume}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl btn-3d-dotnet text-white font-extrabold text-sm shadow-xl cursor-pointer w-full sm:w-auto"
              >
                <FileText className="w-4 h-4" />
                <span>View Resume</span>
              </button>

              <a
                href={`${import.meta.env.BASE_URL}DuraiPandi_Resume.pdf`}
                download="DuraiPandi_Resume.pdf"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-200 hover:text-white font-semibold text-sm border border-slate-700/80 hover:border-purple-500/50 shadow-lg transition-all group w-full sm:w-auto"
              >
                <Download className="w-4 h-4 text-purple-400 group-hover:scale-110 transition-transform" />
                <span>Download Resume PDF</span>
              </a>

              {/* Social Icon Pills */}
              <div className="flex items-center justify-center gap-2.5 pt-2 sm:pt-0 sm:ml-auto">
                <a
                  href={personalDetails.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-slate-800 text-slate-400 hover:text-purple-400 transition-all shadow-md hover:scale-105"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href={personalDetails.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-slate-800 text-slate-400 hover:text-sky-400 transition-all shadow-md hover:scale-105"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Quick Metrics Bar in 3D Cards */}
            <div className="pt-6 grid grid-cols-2 sm:grid-cols-4 gap-4 border-t border-slate-800/80">
              {personalDetails.stats.map((stat, idx) => (
                <Card3D key={idx} maxRotation={8} scale={1.03}>
                  <div className="p-4 rounded-xl glass-3d-card border border-slate-800/80 text-center">
                    <div className="text-xl sm:text-2xl font-extrabold text-purple-300 font-mono translate-z-20 drop-shadow-md">
                      {stat.value}
                    </div>
                    <div className="text-xs text-slate-400 font-medium translate-z-10 mt-0.5">
                      {stat.label}
                    </div>
                  </div>
                </Card3D>
              ))}
            </div>

          </div>

          {/* C# .NET 9 Code Terminal Mockup in Interactive 3D Card (Right Col - 5 cols) */}
          <div className="lg:col-span-5">
            <Card3D maxRotation={15} scale={1.04} glowColor="rgba(139, 92, 246, 0.4)">
              <div className="relative rounded-2xl glass-3d-card border border-purple-500/40 shadow-2xl overflow-hidden font-mono text-sm group">
                
                {/* Terminal Window Header */}
                <div className="flex items-center justify-between px-4 py-3 bg-slate-950/95 border-b border-slate-800 translate-z-20">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                    <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  </div>
                  <span className="text-xs text-slate-300 font-semibold flex items-center gap-1.5 translate-z-30">
                    <Code2 className="w-4 h-4 text-purple-400" />
                    DotNetDeveloper.cs
                  </span>
                  <span className="text-[11px] text-purple-300 font-bold px-2.5 py-0.5 rounded bg-purple-500/20 border border-purple-500/40">
                    .NET 9 / C#
                  </span>
                </div>

                {/* Code Content with 3D Depth */}
                <div className="p-5 space-y-2.5 text-slate-300 leading-relaxed overflow-x-auto translate-z-30 text-xs sm:text-sm">
                  <p>
                    <span className="text-purple-400">namespace</span>{' '}
                    <span className="text-sky-300">DuraiPandi.Backend</span>;
                  </p>
                  
                  <p className="text-slate-500">// .NET Developer &amp; Software Engineer</p>
                  <p>
                    <span className="text-purple-400">public sealed class</span>{' '}
                    <span className="text-amber-300">DotNetDeveloper</span>
                  </p>
                  <p className="pl-2">&#123;</p>
                  <p className="pl-6">
                    <span className="text-purple-400">public string</span> Name =&gt; <span className="text-emerald-400">"Durai Pandi"</span>;
                  </p>
                  <p className="pl-6">
                    <span className="text-purple-400">public string</span> Experience =&gt; <span className="text-emerald-400">"4 Years"</span>;
                  </p>
                  <p className="pl-6">
                    <span className="text-purple-400">public string[]</span> TargetRoles =&gt; [
                  </p>
                  <p className="pl-10 text-purple-300 font-bold">
                    <span className="text-emerald-400">".NET Developer"</span>, <span className="text-emerald-400">"Software Engineer"</span>
                  </p>
                  <p className="pl-6">];</p>
                  <p className="pl-6">
                    <span className="text-purple-400">public string[]</span> CoreStack =&gt; [
                  </p>
                  <p className="pl-10 text-sky-300 font-bold">
                    <span className="text-emerald-400">"C#"</span>, <span className="text-emerald-400">".NET 9"</span>, <span className="text-emerald-400">"ASP.NET Core"</span>, <span className="text-emerald-400">"EF Core"</span>, <span className="text-emerald-400">"SQL Server"</span>, <span className="text-emerald-400">"MailKit"</span>, <span className="text-emerald-400">"Linux"</span>
                  </p>
                  <p className="pl-6">];</p>
                  <p className="pl-6">
                    <span className="text-purple-400">public async Task</span> ExecuteAsync()
                  </p>
                  <p className="pl-6">&#123;</p>
                  <p className="pl-10 text-slate-400">
                    <span className="text-purple-400">await</span> MailKitEngine.<span className="text-sky-300">DispatchAsync</span>();
                  </p>
                  <p className="pl-10 text-slate-400">
                    <span className="text-purple-400">await</span> AmazonSpApi.<span className="text-sky-300">SyncInventoryAsync</span>();
                  </p>
                  <p className="pl-10 text-slate-400">
                    <span className="text-purple-400">await</span> LinuxCluster.<span className="text-sky-300">DeployZeroDowntimeAsync</span>();
                  </p>
                  <p className="pl-6">&#125;</p>
                  <p className="pl-2">&#125;</p>
                </div>

                {/* Status footer inside card */}
                <div className="px-4 py-3 bg-slate-950/95 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400 font-mono translate-z-20">
                  <span className="flex items-center gap-1.5 text-emerald-400 font-bold">
                    <ShieldCheck className="w-4 h-4" /> Production Ready &amp; Available
                  </span>
                  <span className="text-purple-400">3D Interactive</span>
                </div>

              </div>
            </Card3D>
          </div>

        </div>
      </div>
    </section>
  );
}
