import React, { useState, useEffect } from 'react';
import { Menu, X, FileText, ChevronRight, Palette, Check } from 'lucide-react';
import { personalDetails } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';

const navItems = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Education', href: '#education' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar({ onOpenResume }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [themeMenuOpen, setThemeMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('about');
  
  const { currentTheme, setTheme, themes } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = navItems.map((item) => item.href.substring(1));
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#080c14]/90 backdrop-blur-md border-b border-slate-800/80 py-3 shadow-lg shadow-black/40'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <a
            href="#"
            className="group flex items-center gap-2 text-xl font-bold font-mono text-white transition-colors"
          >
            <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 group-hover:border-cyan-400 group-hover:bg-cyan-500/20 transition-all">
              &lt;/&gt;
            </span>
            <span className="tracking-tight">
              {personalDetails.name.split(' ')[0]}
              <span className="text-cyan-400">.{personalDetails.name.split(' ')[1]}</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 bg-slate-900/70 p-1.5 rounded-full border border-slate-800/80 backdrop-blur-md">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className={`px-4 py-1.5 text-sm font-medium rounded-full transition-all duration-200 ${
                    isActive
                      ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/40'
                  }`}
                >
                  {item.name}
                </a>
              );
            })}
          </nav>

          {/* Action Buttons & Theme Palette Switcher */}
          <div className="hidden md:flex items-center gap-3">
            
            {/* Theme Selector Dropdown */}
            <div className="relative">
              <button
                onClick={() => setThemeMenuOpen(!themeMenuOpen)}
                className="flex items-center gap-2 px-3 py-2 rounded-lg bg-slate-900/80 hover:bg-slate-800 border border-slate-800 text-xs font-mono text-slate-300 transition-all"
                aria-label="Theme Palette"
              >
                <Palette className="w-4 h-4 text-cyan-400" />
                <span className="hidden sm:inline">{currentTheme.name}</span>
              </button>

              {themeMenuOpen && (
                <div className="absolute right-0 mt-2 w-52 bg-[#0a0f1d] border border-slate-800 rounded-xl shadow-2xl p-2 z-50 space-y-1 animate-in fade-in duration-150">
                  <div className="text-[10px] font-mono text-slate-400 px-3 py-1 uppercase tracking-wider">
                    Select Tech Theme
                  </div>
                  {themes.map((t) => (
                    <button
                      key={t.id}
                      onClick={() => {
                        setTheme(t.id);
                        setThemeMenuOpen(false);
                      }}
                      className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-xs font-mono transition-all ${
                        currentTheme.id === t.id
                          ? 'bg-cyan-500/20 text-cyan-300 font-bold border border-cyan-500/30'
                          : 'text-slate-300 hover:bg-slate-800/80'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <span
                          className="w-3 h-3 rounded-full border border-slate-700"
                          style={{ backgroundColor: t.accent }}
                        />
                        <span>{t.name}</span>
                      </div>
                      {currentTheme.id === t.id && <Check className="w-3.5 h-3.5 text-cyan-400" />}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Resume CTA */}
            <button
              onClick={onOpenResume}
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-cyan-400 bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/40 hover:border-cyan-400 rounded-lg transition-all duration-200 shadow-sm shadow-cyan-950/40 group cursor-pointer"
            >
              <FileText className="w-4 h-4 text-cyan-400 group-hover:scale-110 transition-transform" />
              <span>Resume</span>
            </button>

          </div>

          {/* Mobile Menu & Theme Buttons */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setThemeMenuOpen(!themeMenuOpen)}
              className="p-2 text-slate-300 bg-slate-900 border border-slate-800 rounded-lg text-xs"
              aria-label="Theme Palette"
            >
              <Palette className="w-4 h-4 text-cyan-400" />
            </button>

            <button
              onClick={onOpenResume}
              className="p-2 text-cyan-400 bg-cyan-500/10 border border-cyan-500/30 rounded-lg text-xs font-mono flex items-center gap-1"
              aria-label="View Resume"
            >
              <FileText className="w-4 h-4" />
              <span>CV</span>
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 text-slate-400 hover:text-white rounded-lg bg-slate-900/80 border border-slate-800"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Theme Selector Bar */}
      {themeMenuOpen && (
        <div className="md:hidden bg-[#0a0f1d]/95 backdrop-blur-xl border-b border-slate-800 p-3 mt-2 grid grid-cols-2 gap-2 animate-in fade-in duration-200">
          {themes.map((t) => (
            <button
              key={t.id}
              onClick={() => {
                setTheme(t.id);
                setThemeMenuOpen(false);
              }}
              className={`flex items-center gap-2 p-2 rounded-lg text-xs font-mono ${
                currentTheme.id === t.id
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 font-bold'
                  : 'bg-slate-900 text-slate-300 border border-slate-800'
              }`}
            >
              <span className="w-3 h-3 rounded-full" style={{ backgroundColor: t.accent }} />
              <span>{t.name}</span>
            </button>
          ))}
        </div>
      )}

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0a0f1d]/95 backdrop-blur-xl border-b border-slate-800 px-4 pt-3 pb-6 mt-3 space-y-2 animate-in slide-in-from-top-4 duration-200">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between px-4 py-3 text-sm font-medium text-slate-300 hover:text-cyan-400 hover:bg-cyan-500/10 rounded-lg border border-transparent hover:border-cyan-500/20 transition-all"
            >
              <span>{item.name}</span>
              <ChevronRight className="w-4 h-4 text-slate-500" />
            </a>
          ))}
          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 text-sm font-semibold text-cyan-300 bg-cyan-500/20 border border-cyan-500/40 rounded-lg"
            >
              <FileText className="w-4 h-4" />
              <span>View & Download Resume PDF</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
