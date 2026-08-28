import React from 'react';
import { GraduationCap, Calendar, MapPin, Award, CheckCircle2 } from 'lucide-react';
import { education } from '../data/portfolioData';
import Card3D from './Card3D';

export default function Education() {
  return (
    <section id="education" className="py-20 relative bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-xs font-mono text-cyan-400">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>ACADEMIC BACKGROUND</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Education & <span className="text-gradient-3d">Qualifications</span>
          </h2>
        </div>

        {/* 3D Education Card */}
        <div className="max-w-4xl mx-auto">
          <Card3D maxRotation={10} scale={1.02}>
            <div className="p-8 sm:p-10 rounded-2xl glass-3d-card relative overflow-hidden">
              
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-slate-800 translate-z-20">
                <div className="space-y-2">
                  <div className="flex items-center gap-4">
                    <div className="p-3.5 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 shadow-md">
                      <GraduationCap className="w-7 h-7" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-extrabold text-white">
                        {education.degree}
                      </h3>
                      <div className="text-base text-slate-300 font-semibold font-mono">
                        {education.institution}
                      </div>
                    </div>
                  </div>
                </div>

                {/* CGPA Badge & Meta */}
                <div className="flex flex-wrap items-center gap-3 font-mono text-xs translate-z-30">
                  <div className="px-4 py-2.5 rounded-xl bg-cyan-500/20 border border-cyan-500/40 text-cyan-300 font-bold flex items-center gap-2 shadow-lg">
                    <Award className="w-4 h-4 text-cyan-400" />
                    <span>CGPA: {education.cgpa}</span>
                  </div>
                  <div className="flex items-center gap-1.5 bg-slate-950/80 px-3.5 py-2.5 rounded-xl border border-slate-800 text-slate-400">
                    <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Graduated {education.completionDate}</span>
                  </div>
                </div>
              </div>

              {/* Content Highlights */}
              <div className="pt-6 space-y-3 translate-z-20">
                <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">Key Academic Highlights</div>
                {education.highlights.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-slate-300 text-sm sm:text-base">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-1 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

            </div>
          </Card3D>
        </div>

      </div>
    </section>
  );
}
