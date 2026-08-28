import React from 'react';
import { Zap, Cpu, Cloud, Mail, Sparkles, Terminal, ArrowUpRight } from 'lucide-react';
import { techInnovations } from '../data/portfolioData';
import Card3D from './Card3D';

const iconMap = {
  Zap: Zap,
  Cpu: Cpu,
  Cloud: Cloud,
  Mail: Mail
};

export default function TechInnovations() {
  return (
    <section className="py-20 relative bg-slate-950/80 border-t border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-xs font-mono text-cyan-400">
            <Sparkles className="w-3.5 h-3.5" />
            <span>MODERN TECH FOCUS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Cutting-Edge <span className="text-gradient-3d">Technical Capabilities</span>
          </h2>
          <p className="text-slate-400 text-base">
            Leveraging modern .NET 8/9 features, cloud-native microservices, AI integrations, and high-concurrency backend patterns.
          </p>
        </div>

        {/* 3D Tech Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {techInnovations.map((tech, idx) => {
            const IconComp = iconMap[tech.icon] || Zap;
            return (
              <Card3D key={idx} maxRotation={12} scale={1.04}>
                <div className="p-6 rounded-2xl glass-3d-card relative overflow-hidden flex flex-col justify-between h-full group">
                  
                  <div className="space-y-4">
                    {/* Header Pill */}
                    <div className="flex items-center justify-between gap-2 translate-z-20">
                      <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 shadow-md">
                        <IconComp className="w-6 h-6" />
                      </div>
                      <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-cyan-500/15 text-cyan-300 border border-cyan-500/30 font-bold">
                        {tech.tag}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-extrabold text-white translate-z-30 group-hover:text-cyan-300 transition-colors">
                      {tech.title}
                    </h3>

                    {/* Description */}
                    <p className="text-xs text-slate-300 leading-relaxed translate-z-20">
                      {tech.description}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-slate-800 flex items-center justify-between text-[11px] font-mono text-cyan-400 translate-z-10">
                    <span>Active Production Stack</span>
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
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
