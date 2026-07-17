/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, BookOpen, Award, Users, CheckCircle, GraduationCap, Calendar, Clock, MapPin } from 'lucide-react';
import { SCHOOL_PROFILE } from '../data';
import schoolLogo from '../assets/images/school_logo_1784044808340.jpg';

interface HeroProps {
  setCurrentTab: (tab: string) => void;
}

export default function Hero({ setCurrentTab }: HeroProps) {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-emerald-950 via-emerald-900 to-slate-950 text-white min-h-[85vh] flex flex-col justify-between">
      {/* Decorative patterns */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(16,185,129,0.08),transparent_50%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:32px_32px]" />
      
      {/* Arabesque geometric motif background decoration (simulated with CSS circles & borders) */}
      <div className="absolute -top-32 -right-32 w-96 h-96 border-4 border-emerald-500/10 rounded-full flex items-center justify-center opacity-60">
        <div className="w-80 h-80 border border-emerald-500/10 rounded-full flex items-center justify-center">
          <div className="w-64 h-64 border-2 border-dashed border-emerald-500/10 rounded-full" />
        </div>
      </div>
      
      {/* Hero Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-16 md:pt-20 md:pb-24 flex-grow flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full">
          
          {/* Text Content */}
          <div className="lg:col-span-7 space-y-6 md:space-y-8 text-left">
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center space-x-2 bg-emerald-800/40 backdrop-blur-md border border-emerald-500/20 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider text-emerald-300 uppercase"
            >
              <Award className="w-4 h-4 text-emerald-400" />
              <span>Pendaftaran Santri Baru TA 2026/2027 Dibuka</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-4"
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-none text-emerald-50">
                Membentuk Generasi <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">
                  Qur'ani & Berakhlak Mulia
                </span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-emerald-100/80 max-w-2xl font-light leading-relaxed">
                Selamat Datang di <strong className="font-semibold text-white">{SCHOOL_PROFILE.fullName}</strong> Pasir Gombong, Cikarang Utara. Wahana pendidikan diniyah keislaman terbaik untuk putra-putri Anda.
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 pt-2"
            >
              <button 
                onClick={() => setCurrentTab('registration')}
                className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 active:scale-98 transition-all text-white font-bold rounded-xl shadow-lg shadow-emerald-950/40 hover:shadow-emerald-500/20 flex items-center justify-center space-x-2 cursor-pointer group"
              >
                <span>Daftar Santri Baru</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button 
                onClick={() => setCurrentTab('programs')}
                className="px-8 py-4 bg-white/5 hover:bg-white/10 active:scale-98 border border-white/10 hover:border-white/20 transition-all text-emerald-100 hover:text-white font-semibold rounded-xl flex items-center justify-center space-x-2 cursor-pointer"
              >
                <span>Lihat Program Ajar</span>
              </button>
            </motion.div>

            {/* Quick Benefits Tagline */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="grid grid-cols-2 md:grid-cols-3 gap-y-3 gap-x-6 pt-4 border-t border-emerald-800/30 max-w-xl text-emerald-200/75 text-sm"
            >
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Kurikulum Kemenag</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Asatidz Kompeten</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Metode BTA Tartil</span>
              </div>
            </motion.div>
          </div>

          {/* Graphical Representation Card */}
          <div className="lg:col-span-5 relative mt-6 lg:mt-0 flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
              className="relative bg-emerald-950/70 border border-emerald-500/20 p-6 rounded-2xl shadow-2xl backdrop-blur-md w-full max-w-md overflow-hidden"
            >
              {/* Islamic Pattern Visual Box */}
              <div className="bg-gradient-to-b from-emerald-800 to-emerald-950 h-52 rounded-xl flex flex-col justify-center items-center text-center p-4 relative overflow-hidden">
                <div className="absolute inset-0 bg-cover bg-center opacity-10" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=600')` }} />
                <img 
                  src={schoolLogo} 
                  alt="Logo MDT" 
                  className="w-24 h-24 md:w-26 md:h-26 object-contain rounded-full border-2 border-emerald-500/30 bg-white p-0.5 z-10 shadow-lg animate-pulse-subtle"
                  referrerPolicy="no-referrer"
                />
                <h3 className="text-base font-bold tracking-tight text-white z-10 mt-2">MDT Riyadlul Jannah</h3>
                <p className="text-emerald-300 text-[10px] z-10 tracking-widest uppercase">Pasir Gombong - Cikarang Utara</p>
                <div className="mt-2.5 px-3 py-1 bg-emerald-900/60 border border-emerald-500/20 text-[9px] text-emerald-200 uppercase tracking-widest rounded-full z-10 flex items-center space-x-1.5">
                  <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
                  <span>Karakter · Al-Qur'an · Akhlak</span>
                </div>
              </div>

              {/* Informative Highlights Box */}
              <div className="mt-6 space-y-4">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-emerald-400">Pilar Utama Pendidikan</h4>
                
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 rounded-lg bg-emerald-900/50 border border-emerald-700/30 flex items-center justify-center shrink-0">
                      <BookOpen className="w-4 h-4 text-emerald-300" />
                    </div>
                    <div>
                      <h5 className="text-sm font-semibold text-emerald-100">Dirasah Islamiyah (Kitab Kuning)</h5>
                      <p className="text-xs text-emerald-200/60">Pembelajaran fikih praktis, akidah, akhlak, tajwid, dan tarikh islam dasar.</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 rounded-lg bg-emerald-900/50 border border-emerald-700/30 flex items-center justify-center shrink-0">
                      <GraduationCap className="w-4 h-4 text-emerald-300" />
                    </div>
                    <div>
                      <h5 className="text-sm font-semibold text-emerald-100">Tahfidz & Tahsin Al-Qur'an</h5>
                      <p className="text-xs text-emerald-200/60">Bimbingan hafalan Juz Amma dengan metode tabaqqul, muraja'ah & setoran rutin.</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 rounded-lg bg-emerald-900/50 border border-emerald-700/30 flex items-center justify-center shrink-0">
                      <Clock className="w-4 h-4 text-emerald-300" />
                    </div>
                    <div>
                      <h5 className="text-sm font-semibold text-emerald-100">Bimbingan Pembiasaan Ibadah</h5>
                      <p className="text-xs text-emerald-200/60">Sholat berjamaah, pembacaan zikir, doa harian, dan latihan dakwah santri.</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Stats Counter Section (Bottom of Hero) */}
      <div className="bg-slate-900/80 backdrop-blur-md border-t border-emerald-900/40 py-6 md:py-8 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-6 gap-x-4 text-center divide-x-0 md:divide-x divide-emerald-800/30">
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-emerald-400">150+</div>
              <div className="text-xs sm:text-sm text-slate-400 uppercase tracking-wider font-medium mt-1">Santri Aktif</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-emerald-400">12+</div>
              <div className="text-xs sm:text-sm text-slate-400 uppercase tracking-wider font-medium mt-1">Tahun Pengabdian</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-emerald-400">16+</div>
              <div className="text-xs sm:text-sm text-slate-400 uppercase tracking-wider font-medium mt-1">Asatidz Kompeten</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-emerald-400">A (Sangat Baik)</div>
              <div className="text-xs sm:text-sm text-slate-400 uppercase tracking-wider font-medium mt-1">Rekomendasi Mutu</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
