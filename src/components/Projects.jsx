import React, { useState } from 'react';
import { 
  FolderGit2, 
  Sparkles,
  Workflow,
  Server,
  ArrowRight,
  ShieldCheck,
  CheckCircle,
  ExternalLink
} from 'lucide-react';
import { projects, architectureBlueprints } from '../data/portfolioData';
import Card3D from './Card3D';

export default function Projects() {
  const [activeTab, setActiveTab] = useState('projects'); // 'projects' or 'blueprints'

  return (
    <section id="projects" className="py-24 relative bg-slate-950/80 border-t border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-xs font-mono text-purple-300">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>PRODUCTION SYSTEMS & BLUEPRINTS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Key Systems & <span className="text-gradient-dotnet">Architectures</span>
          </h2>
          <p className="text-slate-300 text-base">
            Real-world enterprise backend solutions engineered for high-concurrency message dispatch, marketplace data synchronization, and Linux production performance.
          </p>

          {/* View Mode Toggle */}
          <div className="pt-2 flex items-center justify-center gap-2">
            <button
              onClick={() => setActiveTab('projects')}
              className={`px-4 py-2 rounded-xl text-xs font-mono transition-all ${
                activeTab === 'projects'
                  ? 'btn-3d-dotnet text-white font-bold shadow-lg'
                  : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              Featured Systems
            </button>
            <button
              onClick={() => setActiveTab('blueprints')}
              className={`px-4 py-2 rounded-xl text-xs font-mono transition-all ${
                activeTab === 'blueprints'
                  ? 'btn-3d-dotnet text-white font-bold shadow-lg'
                  : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              Architecture Blueprints
            </button>
          </div>
        </div>

        {/* Tab 1: Featured Projects */}
        {activeTab === 'projects' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-in fade-in duration-300">
            {projects.map((proj) => (
              <Card3D key={proj.id} maxRotation={12} scale={1.03}>
                <div className="p-7 rounded-2xl glass-3d-card relative overflow-hidden flex flex-col justify-between h-full border border-slate-800/80 hover:border-purple-500/50 transition-all">
                  <div>
                    {/* Category & Badge */}
                    <div className="flex items-center justify-between gap-2 mb-4 translate-z-20">
                      <span className="text-[11px] font-mono px-2.5 py-1 rounded bg-slate-950 text-purple-300 border border-slate-800 font-bold">
                        {proj.category}
                      </span>
                      <span className="text-[10px] font-mono text-slate-400 flex items-center gap-1">
                        <Sparkles className="w-3 h-3 text-purple-400" /> C# / .NET 9
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-extrabold text-white mb-1 translate-z-30">
                      {proj.title}
                    </h3>
                    <div className="text-xs font-mono text-purple-300/80 mb-4 translate-z-10">
                      {proj.subtitle}
                    </div>

                    {/* Description */}
                    <p className="text-sm text-slate-300 leading-relaxed mb-5 translate-z-20">
                      {proj.description}
                    </p>

                    {/* Highlights */}
                    <div className="space-y-2 mb-6 translate-z-20">
                      {proj.highlights.map((h, hIdx) => (
                        <div key={hIdx} className="flex items-start gap-2.5 text-xs text-slate-300">
                          <CheckCircle className="w-3.5 h-3.5 text-purple-400 mt-0.5 shrink-0" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="translate-z-30">
                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-800">
                      {proj.tech.map((t, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2.5 py-1 rounded text-[11px] font-mono bg-slate-950 text-slate-300 border border-slate-800"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>
              </Card3D>
            ))}
          </div>
        )}

        {/* Tab 2: Architecture Blueprints */}
        {activeTab === 'blueprints' && (
          <div className="space-y-8 animate-in fade-in duration-300">
            {architectureBlueprints.map((blueprint) => (
              <Card3D key={blueprint.id} maxRotation={6} scale={1.01}>
                <div className="p-8 sm:p-10 rounded-2xl glass-3d-card relative overflow-hidden border border-purple-500/30">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-800">
                    <div>
                      <div className="flex items-center gap-3">
                        <h3 className="text-2xl font-extrabold text-white">{blueprint.title}</h3>
                        <span className="text-xs font-mono px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/40 font-bold">
                          {blueprint.badge}
                        </span>
                      </div>
                      <p className="text-xs font-mono text-purple-400 mt-1">{blueprint.role}</p>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-300 max-w-md">
                      {blueprint.description}
                    </p>
                  </div>

                  {/* 4 Step Visual Pipeline */}
                  <div className="pt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {blueprint.steps.map((st, sIdx) => (
                      <div 
                        key={sIdx}
                        className="p-5 rounded-xl bg-slate-950/80 border border-slate-800 hover:border-purple-500/50 transition-all flex flex-col justify-between"
                      >
                        <div>
                          <div className="text-xs font-mono font-bold text-purple-400 mb-2">STAGE {st.step}</div>
                          <div className="text-base font-bold text-white mb-2">{st.name}</div>
                          <div className="text-xs text-slate-300 leading-relaxed">{st.detail}</div>
                        </div>
                        <div className="pt-4 mt-4 border-t border-slate-900 flex items-center text-[10px] font-mono text-slate-400">
                          <span>Live System Component</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Card3D>
            ))}
          </div>
        )}

      </div>
    </section>
  );
}
