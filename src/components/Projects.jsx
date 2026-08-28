import React from 'react';
import { 
  FolderGit2, 
  Sparkles
} from 'lucide-react';
import { projects } from '../data/portfolioData';
import Card3D from './Card3D';

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative bg-slate-950/80 border-t border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-xs font-mono text-cyan-400">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>3D FEATURED PROJECTS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Key Systems & <span className="text-gradient-3d">Architectures</span>
          </h2>
          <p className="text-slate-400 text-base">
            Software projects modeled on real-world C#/.NET communication workflows and Amazon seller automation tools.
          </p>
        </div>

        {/* 3D Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((proj) => (
            <Card3D key={proj.id} maxRotation={12} scale={1.03}>
              <div className="p-7 rounded-2xl glass-3d-card relative overflow-hidden flex flex-col justify-between h-full">
                <div>
                  {/* Category & Badge */}
                  <div className="flex items-center justify-between gap-2 mb-4 translate-z-20">
                    <span className="text-[11px] font-mono px-2.5 py-1 rounded bg-slate-950 text-cyan-400 border border-slate-800 font-bold">
                      {proj.category}
                    </span>
                    <span className="text-[10px] font-mono text-slate-400 flex items-center gap-1">
                      <Sparkles className="w-3 h-3 text-cyan-400" /> C# / .NET
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-extrabold text-white mb-1 translate-z-30">
                    {proj.title}
                  </h3>
                  <div className="text-xs font-mono text-slate-400 mb-4 translate-z-10">
                    {proj.subtitle}
                  </div>

                  {/* Description */}
                  <p className="text-sm text-slate-300 leading-relaxed mb-4 translate-z-20">
                    {proj.description}
                  </p>

                  {/* Highlights */}
                  <div className="space-y-2 mb-6 translate-z-20">
                    {proj.highlights.map((h, hIdx) => (
                      <div key={hIdx} className="flex items-center gap-2 text-xs text-slate-300">
                        <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0" />
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
                        className="px-2 py-0.5 rounded text-[11px] font-mono bg-slate-950 text-slate-300 border border-slate-800"
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

      </div>
    </section>
  );
}
