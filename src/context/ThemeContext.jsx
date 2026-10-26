import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const themes = [
  {
    id: 'dotnet',
    name: '.NET Enterprise (Purple & Azure)',
    bg: '#060911',
    accent: '#8b5cf6',
    secondary: '#38bdf8',
    threeColor: 0x8b5cf6,
    threeMesh: 0x38bdf8,
    badgeBg: 'bg-violet-500/15 text-violet-300 border-violet-500/30',
    iconColor: 'text-violet-400',
    btnClass: 'btn-3d-dotnet'
  },
  {
    id: 'azure',
    name: 'Azure Backend (Sky & Blue)',
    bg: '#060d1a',
    accent: '#38bdf8',
    secondary: '#0ea5e9',
    threeColor: 0x38bdf8,
    threeMesh: 0x0ea5e9,
    badgeBg: 'bg-cyan-500/15 text-cyan-300 border-cyan-500/30',
    iconColor: 'text-cyan-400',
    btnClass: 'btn-3d-cyan'
  },
  {
    id: 'linux',
    name: 'Linux Production Uptime (Emerald)',
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
    id: 'obsidian',
    name: 'Obsidian Minimalist',
    bg: '#090d16',
    accent: '#f8fafc',
    secondary: '#94a3b8',
    threeColor: 0xe2e8f0,
    threeMesh: 0x64748b,
    badgeBg: 'bg-slate-800 text-slate-200 border-slate-700',
    iconColor: 'text-slate-300',
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
    document.documentElement.classList.add('dark');
    document.body.style.color = '#f1f5f9';
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
