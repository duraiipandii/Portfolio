import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const themes = [
  {
    id: 'dotnet',
    name: '.NET 8 / 9 Blue',
    bg: '#060911',
    accent: '#38bdf8',
    secondary: '#0ea5e9',
    threeColor: 0x38bdf8,
    threeMesh: 0x0ea5e9,
    badgeBg: 'bg-cyan-500/15 text-cyan-300 border-cyan-500/30',
    iconColor: 'text-cyan-400',
    btnClass: 'btn-3d-cyan'
  },
  {
    id: 'cloud',
    name: 'AWS & Cloud Blue',
    bg: '#080d1a',
    accent: '#6366f1',
    secondary: '#38bdf8',
    threeColor: 0x6366f1,
    threeMesh: 0x38bdf8,
    badgeBg: 'bg-indigo-500/15 text-indigo-300 border-indigo-500/30',
    iconColor: 'text-indigo-400',
    btnClass: 'btn-3d-indigo'
  },
  {
    id: 'ai',
    name: 'AI & Vector Mesh',
    bg: '#050f14',
    accent: '#14b8a6',
    secondary: '#06b6d4',
    threeColor: 0x14b8a6,
    threeMesh: 0x06b6d4,
    badgeBg: 'bg-teal-500/15 text-teal-300 border-teal-500/30',
    iconColor: 'text-teal-400',
    btnClass: 'btn-3d-teal'
  },
  {
    id: 'linux',
    name: 'Linux Production Uptime',
    bg: '#040d08',
    accent: '#10b981',
    secondary: '#34d399',
    threeColor: 0x10b981,
    threeMesh: 0x34d399,
    badgeBg: 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30',
    iconColor: 'text-emerald-400',
    btnClass: 'btn-3d-emerald'
  },
  {
    id: 'light',
    name: 'Clean Developer Mode',
    bg: '#f8fafc',
    accent: '#0284c7',
    secondary: '#2563eb',
    threeColor: 0x0284c7,
    threeMesh: 0x2563eb,
    badgeBg: 'bg-slate-200 text-slate-800 border-slate-300',
    iconColor: 'text-sky-600',
    btnClass: 'btn-3d-light'
  }
];

export function ThemeProvider({ children }) {
  const [currentThemeId, setCurrentThemeId] = useState(() => {
    return localStorage.getItem('durai_portfolio_theme') || 'dotnet';
  });

  const activeTheme = themes.find(t => t.id === currentThemeId) || themes[0];

  useEffect(() => {
    localStorage.setItem('durai_portfolio_theme', currentThemeId);
    document.documentElement.setAttribute('data-theme', currentThemeId);
    
    // Apply background color to body
    document.body.style.backgroundColor = activeTheme.bg;
    if (currentThemeId === 'light') {
      document.documentElement.classList.remove('dark');
      document.body.style.color = '#0f172a';
    } else {
      document.documentElement.classList.add('dark');
      document.body.style.color = '#f1f5f9';
    }
  }, [currentThemeId, activeTheme]);

  return (
    <ThemeContext.Provider value={{ currentTheme: activeTheme, setTheme: setCurrentThemeId, themes }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
