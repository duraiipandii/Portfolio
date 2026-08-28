import React, { useState } from 'react';
import { 
  Code2, 
  Server, 
  Database, 
  Cloud, 
  HardDrive, 
  Mail, 
  Workflow, 
  CheckCircle2,
  Terminal,
  Search,
  Box
} from 'lucide-react';
import { skillsCategories } from '../data/portfolioData';
import Card3D from './Card3D';

const categoryIconMap = {
  Languages: Code2,
  Backend: Server,
  "Data Access": Database,
  Databases: Database,
  "Cloud & DevOps": Cloud,
  Servers: HardDrive,
  "Messaging / Email": Mail,
  Integrations: Workflow,
  "Engineering Practices": CheckCircle2
};

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categoryNames = ['All', ...skillsCategories.map(c => c.category)];

  const filteredCategories = skillsCategories.filter(cat => {
    if (selectedCategory !== 'All' && cat.category !== selectedCategory) {
      return false;
    }
    if (searchQuery.trim() !== '') {
      const q = searchQuery.toLowerCase();
      const hasMatchInCat = cat.category.toLowerCase().includes(q);
      const hasMatchInSkills = cat.skills.some(s => s.toLowerCase().includes(q));
      return hasMatchInCat || hasMatchInSkills;
    }
    return true;
  });

  return (
    <section id="skills" className="py-24 relative bg-slate-950/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-xs font-mono text-cyan-400">
            <Box className="w-3.5 h-3.5" />
            <span>3D TECHNICAL MATRIX</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Skills & <span className="text-gradient-3d">Competencies</span>
          </h2>
          <p className="text-slate-400 text-base">
            Categorized technical stack across C#/.NET backend systems, databases, cloud, messaging platforms, and integrations.
          </p>
        </div>

        {/* Filter Controls & Search */}
        <div className="mb-10 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Category Tabs */}
          <div className="flex items-center justify-start md:justify-start gap-2 w-full md:w-auto overflow-x-auto pb-2 md:pb-0 scrollbar-none">
            {categoryNames.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-2 rounded-xl text-xs font-mono transition-all duration-200 cursor-pointer whitespace-nowrap shrink-0 ${
                  selectedCategory === cat
                    ? 'btn-3d-cyan text-slate-950 font-bold shadow-lg'
                    : 'bg-slate-900/90 text-slate-400 hover:text-slate-200 hover:bg-slate-800 border border-slate-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search (e.g. C#, SQL)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-slate-900/90 border border-slate-800 rounded-xl text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-500/60 transition-all font-mono shadow-inner"
            />
          </div>
        </div>

        {/* 3D Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((catItem, idx) => {
            const IconComp = categoryIconMap[catItem.category] || Code2;
            return (
              <Card3D key={idx} maxRotation={10} scale={1.03}>
                <div className="p-6 rounded-2xl glass-3d-card relative overflow-hidden flex flex-col justify-between h-full">
                  <div>
                    <div className="flex items-center gap-3 mb-4 pb-3 border-b border-slate-800 translate-z-20">
                      <div className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 shadow-md">
                        <IconComp className="w-5 h-5" />
                      </div>
                      <h3 className="text-lg font-bold text-white">
                        {catItem.category}
                      </h3>
                    </div>

                    {/* Skills Tags */}
                    <div className="flex flex-wrap gap-2 pt-1 translate-z-30">
                      {catItem.skills.map((skill, sIdx) => {
                        const isHighlighted = searchQuery.trim() !== '' && skill.toLowerCase().includes(searchQuery.toLowerCase());
                        return (
                          <span
                            key={sIdx}
                            className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-all ${
                              isHighlighted
                                ? 'bg-cyan-400 text-slate-950 font-bold ring-2 ring-cyan-300 shadow-lg'
                                : 'bg-slate-950/90 text-slate-300 border border-slate-800 hover:border-cyan-500/50 hover:text-cyan-300 hover:bg-cyan-500/10'
                            }`}
                          >
                            {skill}
                          </span>
                        );
                      })}
                    </div>
                  </div>

                  <div className="mt-5 pt-3 border-t border-slate-800/60 text-[10px] font-mono text-slate-400 flex justify-between translate-z-10">
                    <span>{catItem.skills.length} core skills</span>
                    <span className="text-cyan-400 font-bold">3D Perspective</span>
                  </div>
                </div>
              </Card3D>
            );
          })}
        </div>

        {filteredCategories.length === 0 && (
          <div className="text-center py-12 text-slate-500 font-mono text-sm">
            No skills matching "{searchQuery}". Try searching for C# or SQL.
          </div>
        )}

      </div>
    </section>
  );
}
