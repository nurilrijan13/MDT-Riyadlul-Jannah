/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Menu, X, School, BookOpen, Sun, Moon } from 'lucide-react';
import { SCHOOL_PROFILE } from '../data';
import schoolLogo from '../assets/images/lambang_mdt_rj_logo.png';

interface NavbarProps {
  currentTab: string;
  setCurrentTab: (tab: string) => void;
  isDarkMode?: boolean;
  toggleDarkMode?: () => void;
}

export default function Navbar({ currentTab, setCurrentTab, isDarkMode = false, toggleDarkMode }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { id: 'home', label: 'Beranda' },
    { id: 'profile', label: 'Profil & Sejarah' },
    { id: 'programs', label: 'Program' },
    { id: 'rules', label: 'Tata Tertib' },
    { id: 'gallery', label: 'Galeri Foto' },
    { id: 'calendar', label: 'Kalender Akademik' },
    { id: 'announcements', label: 'Informasi & Agenda' },
    { id: 'about', label: 'Tentang Kami' },
    { id: 'contact', label: 'Hubungi' }
  ];

  const handleNavClick = (tabId: string) => {
    setCurrentTab(tabId);
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className="sticky top-0 z-50 bg-brand-cream border-b border-brand-divider text-brand-dark transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-22 items-center">
          {/* Logo & Brand */}
          <div className="flex items-center gap-3 cursor-pointer select-none" onClick={() => handleNavClick('home')}>
            <img 
              src={schoolLogo} 
              alt="Logo MDT Riyadlul Jannah" 
              className="w-16 h-16 md:w-18 md:h-18 object-contain rounded-full border border-brand-divider/50 bg-white p-0.5"
              referrerPolicy="no-referrer"
            />
            <div className="flex flex-col">
              <div className="flex items-center justify-between gap-2">
                <span className="text-[10px] md:text-xs uppercase tracking-widest font-sans font-extrabold text-brand-green">
                  Madrasah Diniyah Taklimiyah
                </span>
                <span className="text-[10px] md:text-xs font-serif text-brand-green font-bold" dir="rtl">
                  المدرسة الدّينيّة التعليميّة
                </span>
              </div>
              <div className="flex items-baseline space-x-2">
                <h1 className="text-xl md:text-2xl xl:text-3xl font-serif font-black tracking-tight text-brand-dark leading-none">
                  RIYADLUL JANNAH
                </h1>
                <span className="text-sm md:text-lg font-serif text-brand-gold font-bold" dir="rtl">
                  رياض الجنّة
                </span>
              </div>
              <span className="text-[9px] md:text-[10px] font-sans text-brand-dark/60 tracking-wider leading-none mt-1">
                Pasir Gombong, Cikarang Utara, Bekasi
              </span>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-2">
            <div className="flex gap-3 xl:gap-5 font-sans text-[11px] uppercase tracking-widest font-bold">
              {menuItems.map((item) => {
                const isActive = currentTab === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    id={`nav-item-${item.id}`}
                    className={`py-2 transition-all duration-150 cursor-pointer ${
                      isActive
                        ? 'border-b-2 border-brand-green text-brand-green font-extrabold'
                        : 'text-brand-dark/70 hover:text-brand-green border-b-2 border-transparent'
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}
            </div>

            {/* Dark/Light Mode Switcher Desktop */}
            {toggleDarkMode && (
              <button
                type="button"
                onClick={toggleDarkMode}
                title={isDarkMode ? 'Beralih ke Tema Terang' : 'Beralih ke Tema Gelap'}
                className="ml-2 p-2.5 rounded-xl border border-brand-divider bg-white/60 dark:bg-emerald-950/40 hover:bg-white text-brand-dark transition-all cursor-pointer flex items-center justify-center gap-1.5 text-xs font-bold shadow-2xs"
              >
                {isDarkMode ? (
                  <>
                    <Sun className="w-4 h-4 text-amber-400 shrink-0" />
                    <span className="text-[10px] uppercase tracking-wider font-extrabold text-amber-300">Terang</span>
                  </>
                ) : (
                  <>
                    <Moon className="w-4 h-4 text-emerald-800 shrink-0" />
                    <span className="text-[10px] uppercase tracking-wider font-extrabold text-emerald-900">Gelap</span>
                  </>
                )}
              </button>
            )}
            
            <button
              onClick={() => handleNavClick('contact')}
              className="ml-3 px-4 py-2.5 bg-brand-green hover:bg-brand-green/90 text-brand-cream font-sans text-xs uppercase tracking-widest font-bold transition-all duration-150 cursor-pointer rounded-lg"
            >
              Hubungi Kami
            </button>
          </div>

          {/* Mobile Actions (Theme toggle + Hamburger) */}
          <div className="flex items-center gap-2 lg:hidden">
            {toggleDarkMode && (
              <button
                type="button"
                onClick={toggleDarkMode}
                title={isDarkMode ? 'Beralih ke Tema Terang' : 'Beralih ke Tema Gelap'}
                className="p-2 rounded-lg border border-brand-divider bg-white/60 dark:bg-emerald-950/40 text-brand-dark transition-colors cursor-pointer"
              >
                {isDarkMode ? (
                  <Sun className="w-5 h-5 text-amber-400" />
                ) : (
                  <Moon className="w-5 h-5 text-emerald-800" />
                )}
              </button>
            )}

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-sm text-brand-green hover:bg-brand-dark/5 focus:outline-hidden"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-brand-cream border-b border-brand-divider animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="px-4 pt-2 pb-6 space-y-2 border-t border-brand-divider">
            {menuItems.map((item) => {
              const isActive = currentTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`block w-full text-left py-3 px-2 font-sans text-xs uppercase tracking-widest font-bold transition-colors ${
                    isActive
                      ? 'border-l-4 border-brand-green bg-brand-green/5 text-brand-green'
                      : 'text-brand-dark/80 hover:bg-brand-dark/5 hover:text-brand-green'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}

            {/* Mobile Theme Switch Button inside drawer */}
            {toggleDarkMode && (
              <div className="pt-2 border-t border-brand-divider mt-2">
                <button
                  onClick={toggleDarkMode}
                  className="w-full py-3 px-3 rounded-xl border border-brand-divider bg-white/80 dark:bg-emerald-950/60 flex items-center justify-between text-xs uppercase tracking-wider font-extrabold text-brand-dark cursor-pointer"
                >
                  <span className="flex items-center gap-2">
                    {isDarkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-emerald-800" />}
                    <span>{isDarkMode ? 'Ganti ke Tema Terang' : 'Ganti ke Tema Gelap'}</span>
                  </span>
                  <span className="text-[10px] px-2 py-0.5 rounded-md bg-emerald-100 text-emerald-800 dark:bg-emerald-800 dark:text-emerald-100 font-mono">
                    {isDarkMode ? 'Gelap Active' : 'Terang Active'}
                  </span>
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
