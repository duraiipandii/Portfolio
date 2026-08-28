import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2, Server, Building2, Box } from 'lucide-react';
import { experiences } from '../data/portfolioData';
import Card3D from './Card3D';

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative bg-slate-950/80 border-t border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-xs font-mono text-cyan-400">
            <Briefcase className="w-3.5 h-3.5" />
            <span>3D CAREER TIMELINE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Professional <span className="text-gradient-3d">Experience</span>
          </h2>
          <p className="text-slate-400 text-base">
            ~4 years of building production-grade C#/.NET applications, enterprise integrations, and communication platforms.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative border-l-2 border-cyan-500/30 ml-4 sm:ml-8 lg:ml-12 space-y-12">
          {experiences.map((exp, idx) => (
            <div key={idx} className="relative pl-6 sm:pl-10 group">
              
              {/* 3D Timeline Sphere Node */}
              <div className="absolute -left-[19px] top-3 w-9 h-9 rounded-full bg-slate-950 border-2 border-cyan-400 flex items-center justify-center text-cyan-300 shadow-lg shadow-cyan-500/40 group-hover:scale-115 group-hover:bg-cyan-400 group-hover:text-slate-950 transition-all duration-300 z-20">
                <Building2 className="w-4 h-4" />
              </div>

              {/* 3D Card Container */}
              <Card3D maxRotation={8} scale={1.02}>
                <div className="p-6 sm:p-8 rounded-2xl glass-3d-card relative overflow-hidden">
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-slate-800 translate-z-20">
                    <div className="space-y-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="text-xl sm:text-2xl font-extrabold text-white">
                          {exp.role}
                        </h3>
                        <span className="text-xs font-mono px-3 py-1 rounded-lg bg-cyan-500/15 text-cyan-300 border border-cyan-500/30 font-bold">
                          {exp.company}
                        </span>
                      </div>
                      
                      {/* Product Name */}
                      <div className="text-sm font-semibold text-slate-300 flex items-center gap-2 pt-1 font-mono">
                        <Server className="w-4 h-4 text-cyan-400" />
                        <span>Product: <span className="text-cyan-300">{exp.product}</span></span>
                      </div>
                    </div>

                    {/* Date & Location */}
                    <div className="flex flex-wrap lg:flex-col items-start lg:items-end gap-2 text-xs font-mono text-slate-400">
                      <div className="flex items-center gap-1.5 bg-slate-950/80 px-3 py-1.5 rounded-lg border border-slate-800">
                        <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-1.5 bg-slate-950/80 px-3 py-1.5 rounded-lg border border-slate-800">
                        <MapPin className="w-3.5 h-3.5 text-slate-400" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Bullets List */}
                  <div className="py-6 space-y-3 translate-z-30">
                    {exp.highlights.map((bullet, bIdx) => (
                      <div key={bIdx} className="flex items-start gap-3 text-slate-300 text-sm sm:text-base leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-1 shrink-0" />
                        <span>{bullet}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack Tags */}
                  <div className="pt-4 border-t border-slate-800 translate-z-20">
                    <div className="text-xs font-mono text-slate-400 mb-2.5">Technologies & Infrastructure:</div>
                    <div className="flex flex-wrap gap-2">
                      {exp.tech.map((t, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-3 py-1 rounded-lg text-xs font-mono bg-slate-950 text-slate-300 border border-slate-800 hover:border-cyan-500/40 hover:text-cyan-300 transition-colors"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>
              </Card3D>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
