/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  BookOpen, 
  Scale, 
  Search, 
  Filter, 
  Calendar, 
  MapPin, 
  Clock, 
  UserCheck, 
  FileText, 
  BookMarked, 
  CheckCircle2, 
  HelpCircle, 
  Sparkles, 
  Send, 
  Copy, 
  Check, 
  ChevronDown, 
  ChevronUp, 
  Share2, 
  Info, 
  Users, 
  GraduationCap, 
  Award,
  BookCheck,
  ShieldCheck,
  AlertCircle
} from 'lucide-react';
import { LBM_PROFILE, BAHTSUL_MASAIL_SESSION_AUGUST_2026 } from '../data';
import ShareButton from './ShareButton';

export default function LBM() {
  const [activeSubTab, setActiveSubTab] = useState<'keputusan' | 'profil' | 'jadwal' | 'tanya'>('keputusan');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('semua');
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const [expandedQuestion, setExpandedQuestion] = useState<number | null>(1);

  // Form State for Tanya Fiqih / Ajukan Mas'alah
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    status: 'Santri MDT',
    category: 'Thoharoh (Bersuci)',
    title: '',
    description: ''
  });

  const categories = [
    { id: 'semua', label: 'Semua Bidang' },
    { id: 'thoharoh', label: 'Thoharoh (Bersuci)' },
    { id: 'sholat', label: 'Sholat & Ubudiyah' },
    { id: 'muamalah', label: 'Muamalah & Transaksi' },
    { id: 'kontemporer', label: 'Masail Kontemporer' }
  ];

  const handleCopy = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2500);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.title || !formData.description) return;
    setFormSubmitted(true);
  };

  const filteredQuestions = BAHTSUL_MASAIL_SESSION_AUGUST_2026.questions.filter((q) => {
    const matchesSearch = 
      q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      q.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      q.reference.book.toLowerCase().includes(searchQuery.toLowerCase()) ||
      q.reference.arabicText.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesSearch;
  });

  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      
      {/* Top Hero Banner */}
      <section className="bg-gradient-to-br from-emerald-950 via-slate-900 to-emerald-900 text-white border-b border-brand-divider relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14 relative z-10 space-y-6">
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-3 max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-800/60 border border-emerald-600/40 text-emerald-300 text-xs font-mono">
                <Scale className="w-3.5 h-3.5 text-amber-400" />
                <span>LEMBAGA KAJIAN FIQIH SALAFIYYAH</span>
              </div>
              
              <div className="space-y-1">
                <p className="text-sm md:text-base font-serif text-amber-300 tracking-wide font-medium" dir="rtl">
                  {LBM_PROFILE.arabicName}
                </p>
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-serif font-black tracking-tight text-white leading-tight">
                  LBM (Lajnah Bahtsul Masail)
                </h1>
                <p className="text-xs sm:text-sm text-emerald-200 font-sans font-medium">
                  Madrasah Diniyah Taklimiyah Riyadlul Jannah Pasir Gombong
                </p>
              </div>

              <p className="text-xs md:text-sm text-slate-300 leading-relaxed font-light font-sans max-w-2xl">
                {LBM_PROFILE.tagline}. Wadah musyawarah ilmiah para santri dan dewan asatidz dalam membedah ibarat kitab kuning, mengurai masail waqi'iyyah, dan merumuskan hukum Islam berlandaskan Mazhab Syafi'i.
              </p>
            </div>

            {/* Quick Session Badge */}
            <div className="bg-emerald-900/50 border border-emerald-700/60 rounded-2xl p-5 backdrop-blur-xs space-y-3 shrink-0 md:max-w-xs">
              <div className="flex items-center gap-2 text-amber-400 text-xs font-bold font-mono">
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span>SIDANG USBU'IYAH TERBARU</span>
              </div>
              <div>
                <h4 className="text-sm font-bold text-white font-serif leading-snug">
                  Kajian Hukum Air Mutlak &amp; Thoharoh
                </h4>
                <p className="text-[11px] text-emerald-300 mt-1">
                  Selasa, 4 Agustus 2026 (20 Safar 1448 H)
                </p>
              </div>
              <div className="pt-2 border-t border-emerald-800/80 flex items-center justify-between text-[11px] text-slate-300">
                <span>Maqro': Taqrib &amp; Fathul Qorib</span>
                <span className="font-bold text-amber-300">3 Mas'alah</span>
              </div>
            </div>
          </div>

          {/* Sub Navigation Tabs */}
          <div className="pt-4 border-t border-emerald-800/60 flex flex-wrap gap-2 sm:gap-3">
            {[
              { id: 'keputusan', label: 'Hasil & Keputusan Sidang', icon: BookCheck },
              { id: 'profil', label: 'Profil & Struktur Dewan', icon: Users },
              { id: 'jadwal', label: 'Jadwal & Agenda Usbu\'iyah', icon: Calendar },
              { id: 'tanya', label: 'Ajukan Mas\'alah (Tanya Fiqih)', icon: Send },
            ].map((tab) => {
              const Icon = tab.icon;
              const isActive = activeSubTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveSubTab(tab.id as any)}
                  className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-2 ${
                    isActive
                      ? 'bg-amber-400 text-slate-950 shadow-md font-extrabold'
                      : 'bg-emerald-900/60 text-slate-200 hover:bg-emerald-800/80 border border-emerald-700/40'
                  }`}
                >
                  <Icon className="w-4 h-4 shrink-0" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

        </div>
      </section>

      {/* Main Body Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        
        {/* ================= TAB 1: KEPUTUSAN BAHTSUL MASAIL ================= */}
        {activeSubTab === 'keputusan' && (
          <div className="space-y-8">
            
            {/* Search & Filter Bar */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 md:p-6 space-y-4">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="space-y-1">
                  <h3 className="text-base font-serif font-bold text-slate-900 flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-emerald-700" />
                    <span>Keputusan Musyawarah Lajnah Bahtsul Masail</span>
                  </h3>
                  <p className="text-xs text-slate-500 font-light">
                    Koleksi rumusan hukum hasil musyawarah asatidz dan santri lengkap dengan kutipan ibarat kutubus salaf.
                  </p>
                </div>

                {/* Search Bar */}
                <div className="relative w-full md:w-80">
                  <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input
                    type="text"
                    placeholder="Cari kata kunci masalah, kitab, atau jawaban..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-9 pr-4 py-2 bg-white border border-slate-200 rounded-xl text-xs font-medium text-slate-800 focus:outline-hidden focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600"
                  />
                </div>
              </div>

              {/* Category Filter Chips */}
              <div className="flex items-center gap-2 overflow-x-auto pb-1 pt-1 border-t border-slate-200/60 no-scrollbar">
                <span className="text-[11px] font-bold text-slate-400 shrink-0 mr-1 flex items-center gap-1">
                  <Filter className="w-3 h-3" /> Filter Bidang:
                </span>
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`px-3 py-1 rounded-lg text-[11px] font-semibold whitespace-nowrap transition-all cursor-pointer shrink-0 ${
                      selectedCategory === cat.id
                        ? 'bg-emerald-800 text-white shadow-xs'
                        : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Current Active Session Feature Card */}
            <div className="bg-white border-2 border-emerald-800/30 rounded-3xl p-6 sm:p-8 shadow-sm space-y-6">
              
              {/* Session Meta Header */}
              <div className="bg-gradient-to-br from-emerald-950 via-slate-900 to-emerald-900 text-white rounded-2xl p-6 border border-emerald-700/50 shadow-md space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-emerald-800/80 pb-4">
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-amber-400 font-bold block">
                      {BAHTSUL_MASAIL_SESSION_AUGUST_2026.institution}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-serif font-black text-white mt-1">
                      {BAHTSUL_MASAIL_SESSION_AUGUST_2026.forum}
                    </h3>
                  </div>
                  <ShareButton
                    variant="pill"
                    label="Bagikan Hasil Sidang"
                    shareData={{
                      title: `Hasil Bahtsul Masail MDT Riyadlul Jannah (${BAHTSUL_MASAIL_SESSION_AUGUST_2026.dateMasehi})`,
                      text: `Musyawarah Usbu'iyah Kajian Hukum Air Mutlak & Fiqih Thoharoh Kitab Taqrib & Fathul Qorib.\n\nSimak rincian hukum dan ibarat kitab kuning di portal MDT Riyadlul Jannah.`,
                      category: 'kegiatan'
                    }}
                  />
                </div>

                {/* Meta Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 text-xs">
                  <div className="bg-emerald-950/70 p-3 rounded-xl border border-emerald-800/50 space-y-1">
                    <span className="text-emerald-400 font-bold flex items-center gap-1.5 text-[11px]">
                      <Calendar className="w-3.5 h-3.5 text-amber-400" /> Waktu Pelaksanaan
                    </span>
                    <p className="font-semibold text-slate-100">{BAHTSUL_MASAIL_SESSION_AUGUST_2026.dateMasehi}</p>
                    <p className="text-[11px] text-emerald-300 font-mono">{BAHTSUL_MASAIL_SESSION_AUGUST_2026.dateHijriah} • {BAHTSUL_MASAIL_SESSION_AUGUST_2026.time}</p>
                  </div>

                  <div className="bg-emerald-950/70 p-3 rounded-xl border border-emerald-800/50 space-y-1">
                    <span className="text-emerald-400 font-bold flex items-center gap-1.5 text-[11px]">
                      <MapPin className="w-3.5 h-3.5 text-amber-400" /> Tempat &amp; Maqro'
                    </span>
                    <p className="font-semibold text-slate-100">{BAHTSUL_MASAIL_SESSION_AUGUST_2026.location}</p>
                    <p className="text-[11px] text-emerald-300">{BAHTSUL_MASAIL_SESSION_AUGUST_2026.maqro}</p>
                  </div>

                  <div className="bg-emerald-950/70 p-3 rounded-xl border border-emerald-800/50 space-y-1 sm:col-span-2 lg:col-span-1">
                    <span className="text-emerald-400 font-bold flex items-center gap-1.5 text-[11px]">
                      <UserCheck className="w-3.5 h-3.5 text-amber-400" /> Dewan Sidang
                    </span>
                    <p className="text-[11px] text-slate-200">
                      <strong>Moderator:</strong> {BAHTSUL_MASAIL_SESSION_AUGUST_2026.moderator}
                    </p>
                    <p className="text-[11px] text-slate-200">
                      <strong>Mushohhih:</strong> {BAHTSUL_MASAIL_SESSION_AUGUST_2026.mushohhih.join(', ')}
                    </p>
                    <p className="text-[11px] text-emerald-300">
                      <strong>Muhararrir:</strong> {BAHTSUL_MASAIL_SESSION_AUGUST_2026.muhararrir.join(' & ')} • <strong>Qori':</strong> {BAHTSUL_MASAIL_SESSION_AUGUST_2026.qori.join(' & ')}
                    </p>
                  </div>
                </div>
              </div>

              {/* A. Deskripsi Masalah */}
              <div className="bg-amber-50/80 border border-amber-200/90 rounded-2xl p-5 md:p-6 space-y-3">
                <div className="flex items-center space-x-2 text-amber-950 font-serif font-bold text-sm md:text-base">
                  <FileText className="w-4 h-4 text-amber-700 shrink-0" />
                  <span>A. DESKRIPSI MASALAH (TASHOWWURUL MAS'ALAH)</span>
                </div>
                <p className="text-slate-700 text-xs md:text-sm leading-relaxed font-light font-sans">
                  {BAHTSUL_MASAIL_SESSION_AUGUST_2026.description}
                </p>
              </div>

              {/* B. Pertanyaan & C. Jawaban / Keputusan */}
              <div className="space-y-6">
                <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                  <div>
                    <h4 className="font-serif font-bold text-slate-900 text-base md:text-lg flex items-center gap-2">
                      <Scale className="w-5 h-5 text-emerald-700" />
                      <span>B. PERTANYAAN &amp; C. KEPUTUSAN HUKUM</span>
                    </h4>
                    <span className="text-xs text-slate-500 font-light">
                      Kajian komparatif dan dalil maraji' Kutubus Salafiyyah
                    </span>
                  </div>
                  <span className="text-xs font-mono font-bold text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                    {filteredQuestions.length} Mas'alah
                  </span>
                </div>

                {filteredQuestions.length === 0 ? (
                  <div className="text-center py-12 bg-slate-50 rounded-2xl border border-dashed border-slate-200 text-slate-500 text-xs">
                    Tidak ditemukan mas'alah yang cocok dengan kata kunci "{searchQuery}".
                  </div>
                ) : (
                  <div className="space-y-5">
                    {filteredQuestions.map((q) => {
                      const isExpanded = expandedQuestion === q.number;
                      const copyText = `*Hasil Bahtsul Masail MDT Riyadlul Jannah*\n\n*Pertanyaan ${q.number}:* ${q.question}\n\n*Keputusan/Jawaban:* ${q.answer}\n\n*Maraji'/Referensi:* ${q.reference.book}\n${q.reference.arabicText}`;

                      return (
                        <div
                          key={q.number}
                          className="bg-white border border-slate-200/90 rounded-2xl shadow-2xs hover:border-emerald-400 transition-all overflow-hidden"
                        >
                          {/* Question Bar */}
                          <div 
                            onClick={() => setExpandedQuestion(isExpanded ? null : q.number)}
                            className="p-5 bg-slate-50/80 hover:bg-slate-100/80 transition-colors cursor-pointer flex items-start justify-between gap-4"
                          >
                            <div className="flex items-start gap-3.5">
                              <span className="w-7 h-7 rounded-full bg-emerald-800 text-white font-bold text-xs flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                                {q.number}
                              </span>
                              <div className="space-y-1">
                                <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-800">
                                  Mas'alah Nomor 0{q.number}
                                </span>
                                <h5 className="font-bold text-slate-900 text-sm md:text-base font-serif">
                                  {q.question}
                                </h5>
                              </div>
                            </div>

                            <div className="flex items-center gap-2 shrink-0">
                              <button
                                type="button"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handleCopy(copyText, q.number);
                                }}
                                className="p-1.5 rounded-lg border border-slate-200 bg-white text-slate-600 hover:text-emerald-700 hover:border-emerald-300 text-xs font-medium flex items-center gap-1 transition-colors cursor-pointer"
                                title="Salin Keputusan & Ibarat"
                              >
                                {copiedIndex === q.number ? (
                                  <>
                                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                                    <span className="text-[10px] text-emerald-700 font-bold hidden sm:inline">Tersalin!</span>
                                  </>
                                ) : (
                                  <>
                                    <Copy className="w-3.5 h-3.5" />
                                    <span className="text-[10px] hidden sm:inline">Salin</span>
                                  </>
                                )}
                              </button>

                              <button
                                type="button"
                                className="p-1.5 rounded-lg bg-slate-200/70 text-slate-700 hover:bg-slate-300 transition-colors cursor-pointer"
                              >
                                {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                              </button>
                            </div>
                          </div>

                          {/* Collapsible Answer & Ibarat Content */}
                          {isExpanded && (
                            <div className="p-5 md:p-6 space-y-5 border-t border-slate-100 animate-in fade-in duration-200">
                              
                              {/* Jawaban */}
                              <div className="space-y-2 pl-3 sm:pl-4 border-l-3 border-emerald-600">
                                <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-800 flex items-center gap-1.5 font-mono">
                                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                                  Keputusan &amp; Jawaban Fiqih:
                                </span>
                                <div className="text-slate-700 text-xs md:text-sm leading-relaxed space-y-2 font-sans font-light">
                                  {q.answer.split('\n\n').map((p, pIdx) => (
                                    <p key={pIdx}>{p}</p>
                                  ))}
                                </div>
                              </div>

                              {/* Referensi & Ibarat Kitab Kuning */}
                              <div className="bg-gradient-to-br from-emerald-950 to-slate-900 text-slate-100 rounded-2xl p-5 space-y-3 border border-emerald-800/70 shadow-inner">
                                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-emerald-800/80 pb-2.5">
                                  <span className="text-[11px] font-bold text-amber-400 flex items-center gap-1.5">
                                    <BookMarked className="w-4 h-4 text-amber-400" />
                                    <span>Referensi / Maraji' Mu'tabarah:</span>
                                  </span>
                                  <span className="text-xs font-serif text-emerald-200 font-bold sm:text-right">
                                    {q.reference.book}
                                  </span>
                                </div>

                                <div className="p-4 bg-emerald-900/40 rounded-xl border border-emerald-800/50">
                                  <p 
                                    dir="rtl" 
                                    className="text-right font-serif text-base sm:text-lg leading-loose text-amber-100 font-medium tracking-wide selection:bg-amber-700"
                                  >
                                    {q.reference.arabicText}
                                  </p>
                                </div>

                                <div className="flex items-center justify-between text-[10px] text-emerald-400/80 pt-1 font-mono">
                                  <span>Teks Asli Kitab Salaf (Turats)</span>
                                  <span>MDT Riyadlul Jannah</span>
                                </div>
                              </div>

                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>

            </div>

          </div>
        )}

        {/* ================= TAB 2: PROFIL & STRUKTUR LBM ================= */}
        {activeSubTab === 'profil' && (
          <div className="space-y-8">
            
            {/* Visi Misi LBM */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
              <div className="lg:col-span-5 bg-brand-green text-brand-cream p-8 rounded-3xl flex flex-col justify-between border border-brand-divider/25 shadow-sm space-y-6">
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-800 text-amber-300 text-xs font-mono">
                    <Scale className="w-3.5 h-3.5" />
                    <span>VISI LAJNAH</span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-serif font-black leading-tight text-white">
                    Pusat Literasi &amp; Tradisi Fiqih Kutubus Salaf
                  </h3>
                  <blockquote className="italic text-brand-cream/90 text-sm md:text-base font-serif leading-relaxed pl-3 border-l-2 border-amber-400">
                    "{LBM_PROFILE.vision}"
                  </blockquote>
                </div>

                <div className="pt-4 border-t border-brand-cream/10 text-xs text-brand-cream/70 font-mono">
                  Lajnah Bahtsul Masail MDT Riyadlul Jannah
                </div>
              </div>

              <div className="lg:col-span-7 bg-white p-8 rounded-3xl border border-brand-divider shadow-2xs space-y-6 flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-mono border border-emerald-200">
                    <BookCheck className="w-3.5 h-3.5" />
                    <span>MISI LAJNAH</span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-serif font-bold text-slate-900">
                    Misi &amp; Komitmen Pengkajian
                  </h3>

                  <div className="space-y-3 pt-2">
                    {LBM_PROFILE.mission.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-3 bg-slate-50 p-3 rounded-xl border border-slate-100">
                        <span className="w-5 h-5 rounded-full bg-emerald-700 text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                          {idx + 1}
                        </span>
                        <p className="text-xs md:text-sm text-slate-700 leading-relaxed font-light">
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Struktur Dewan Sidang */}
            <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-2xs space-y-6">
              <div className="flex items-center space-x-3 border-b border-slate-100 pb-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-serif font-bold text-slate-900">
                    Struktur Dewan Sidang &amp; Pengurus LBM
                  </h3>
                  <p className="text-xs text-slate-500 font-light">
                    Asatidz pembimbing, mushohhih, muhararrir dan qori' musyawarah usbu'iyah
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                
                <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200/80 space-y-2">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded font-mono">
                    Pelindung &amp; Pengasuh
                  </span>
                  <h4 className="font-bold text-slate-900 text-sm font-serif">{LBM_PROFILE.structure.advisor}</h4>
                  <p className="text-xs text-slate-500 font-light">Pengasuh Pondok Pesantren &amp; MDT Riyadlul Jannah</p>
                </div>

                <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200/80 space-y-2">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded font-mono">
                    Penasehat / Pengarah
                  </span>
                  <h4 className="font-bold text-slate-900 text-sm font-serif">{LBM_PROFILE.structure.supervisor}</h4>
                  <p className="text-xs text-slate-500 font-light">Kepala Madrasah Diniyah Taklimiyah</p>
                </div>

                <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200/80 space-y-2">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded font-mono">
                    Moderator Sidang
                  </span>
                  <h4 className="font-bold text-slate-900 text-sm font-serif">{LBM_PROFILE.structure.moderator}</h4>
                  <p className="text-xs text-slate-500 font-light">Pemandu Musyawarah &amp; Dinamika Forum Fiqih</p>
                </div>

                <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200/80 space-y-2">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded font-mono">
                    Dewan Mushohhih
                  </span>
                  <ul className="text-xs text-slate-800 space-y-1 font-semibold">
                    {LBM_PROFILE.structure.mushohhih.map((m, i) => (
                      <li key={i} className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                        <span>{m}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200/80 space-y-2">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded font-mono">
                    Dewan Muhararrir (Perumus)
                  </span>
                  <ul className="text-xs text-slate-800 space-y-1 font-semibold">
                    {LBM_PROFILE.structure.muhararrir.map((m, i) => (
                      <li key={i} className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                        <span>{m}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200/80 space-y-2">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded font-mono">
                    Qori' / Pembaca Maqro'
                  </span>
                  <ul className="text-xs text-slate-800 space-y-1 font-semibold">
                    {LBM_PROFILE.structure.qoriMaqro.map((m, i) => (
                      <li key={i} className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                        <span>{m}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            </div>

            {/* Maraji' / Kitab Rujukan Utama */}
            <div className="bg-emerald-950 text-white rounded-3xl p-6 sm:p-8 space-y-6 border border-emerald-800">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-emerald-800/80 pb-4">
                <div>
                  <h3 className="text-lg sm:text-xl font-serif font-bold text-white flex items-center gap-2">
                    <BookMarked className="w-5 h-5 text-amber-400" />
                    <span>Kutubut Turats &amp; Maraji' Fiqhiyyah Syafi'iyyah</span>
                  </h3>
                  <p className="text-xs text-emerald-200 font-light">
                    Koleksi kitab-kitab salaf mu'tabarah yang menjadi pegangan rujukan sidang Bahtsul Masail
                  </p>
                </div>
                <span className="text-xs font-mono text-amber-300 bg-emerald-900 px-3 py-1 rounded-full border border-emerald-700">
                  {LBM_PROFILE.referenceBooks.length} Kitab Utama
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 text-xs">
                {LBM_PROFILE.referenceBooks.map((book, bIdx) => (
                  <div key={bIdx} className="bg-emerald-900/60 border border-emerald-800 p-4 rounded-2xl space-y-1.5 hover:border-amber-400/50 transition-colors">
                    <span className="text-[10px] font-mono text-amber-400 font-bold uppercase tracking-wider block">
                      {book.category}
                    </span>
                    <h4 className="font-bold text-white text-sm font-serif">{book.title}</h4>
                    <p className="text-emerald-300 text-[11px] font-light">Muallif: {book.author}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        )}

        {/* ================= TAB 3: JADWAL & ALUR MUSYAWARAH ================= */}
        {activeSubTab === 'jadwal' && (
          <div className="space-y-8">
            
            {/* Jadwal Rutin Card */}
            <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-2xs space-y-6">
              <div className="flex items-center space-x-3 border-b border-slate-100 pb-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0">
                  <Calendar className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-serif font-bold text-slate-900">
                    Jadwal Musyawarah Usbu'iyah (Pekanan)
                  </h3>
                  <p className="text-xs text-slate-500 font-light">
                    Waktu dan tempat penyelenggaraan kajian rutin Lajnah Bahtsul Masail
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-emerald-50/70 p-5 rounded-2xl border border-emerald-200/80 space-y-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-800 font-mono">Hari &amp; Waktu</span>
                  <h4 className="font-bold text-slate-900 text-base font-serif">{LBM_PROFILE.schedule.routine}</h4>
                  <p className="text-xs text-slate-600 font-mono">{LBM_PROFILE.schedule.time}</p>
                </div>

                <div className="bg-emerald-50/70 p-5 rounded-2xl border border-emerald-200/80 space-y-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-800 font-mono">Tempat Pelaksanaan</span>
                  <h4 className="font-bold text-slate-900 text-base font-serif">{LBM_PROFILE.schedule.location}</h4>
                  <p className="text-xs text-slate-600">Pasir Gombong, Cikarang Utara</p>
                </div>

                <div className="bg-emerald-50/70 p-5 rounded-2xl border border-emerald-200/80 space-y-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-800 font-mono">Peserta Sidang</span>
                  <h4 className="font-bold text-slate-900 text-base font-serif">Santri Awaliyah, Wustho &amp; Asatidz</h4>
                  <p className="text-xs text-slate-600">Terbuka bagi pemerhati fiqih salaf</p>
                </div>
              </div>
            </div>

            {/* 6 Tahapan Alur Musyawarah Bahtsul Masail */}
            <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-2xs space-y-6">
              <div className="border-b border-slate-100 pb-4">
                <h3 className="text-lg font-serif font-bold text-slate-900">
                  Tahapan &amp; Tata Tertib Sidang Musyawarah Fiqih
                </h3>
                <p className="text-xs text-slate-500 font-light">
                  Metodologi ilmiyah dalam membahas dan memutuskan persoalan hukum
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  { step: "01", title: "Iftitah & Tawassul", desc: "Pembukaan musyawarah dengan pembacaan ummul kitab dan hadhoroh doa kepada para mushannif kitab salaf." },
                  { step: "02", title: "Qiro'atul Maqro'", desc: "Pembacaan teks maqro' kitab fiqih oleh qori' santri dengan memperhatikan kaidah nahwu, sharaf, dan maknanya." },
                  { step: "03", title: "Tashowwurul Mas'alah", desc: "Penjelasan gambaran deskripsi masalah waqi'iyyah oleh moderator agar pokok bahasan terarah." },
                  { step: "04", title: "Munadzaroh & Musyawarah", desc: "Penyampaian ibarat, adu argumentasi, dan telaah silang referensi kitab kuning oleh para santri dan asatidz." },
                  { step: "05", title: "Tahrir / Perumusan", desc: "Dewan Muhararrir menyusun draf rumusan jawaban hukum beserta kutipan ibarat maraji' yang relevan." },
                  { step: "06", title: "Tashhih / Pengesahan", desc: "Pengesahan rumusan keputusan akhir oleh Dewan Mushohhih dan doa penutup musyawarah." }
                ].map((item, idx) => (
                  <div key={idx} className="bg-slate-50 p-5 rounded-2xl border border-slate-200/80 space-y-2">
                    <span className="text-2xl font-serif font-black text-emerald-800 leading-none block">{item.step}.</span>
                    <h4 className="font-bold text-slate-900 text-sm font-serif">{item.title}</h4>
                    <p className="text-xs text-slate-600 leading-relaxed font-light">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        )}

        {/* ================= TAB 4: AJUKAN MAS'ALAH / TANYA FIQIH ================= */}
        {activeSubTab === 'tanya' && (
          <div className="max-w-3xl mx-auto space-y-8">
            
            <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-2xs space-y-6">
              <div className="border-b border-slate-100 pb-4 space-y-1">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-mono border border-emerald-200">
                  <Send className="w-3.5 h-3.5" />
                  <span>FORMULIR PENGAJUAN MAS'ALAH</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-slate-900">
                  Ajukan Pertanyaan / Masail Fiqhiyyah
                </h3>
                <p className="text-xs text-slate-500 font-light">
                  Punya pertanyaan seputar hukum sholat, thoharoh, muamalah, atau persoalan ibadah harian? Ajukan untuk dibahas pada musyawarah pekanan LBM.
                </p>
              </div>

              {formSubmitted ? (
                <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 text-center space-y-4 animate-in fade-in duration-300">
                  <div className="w-12 h-12 rounded-full bg-emerald-700 text-white flex items-center justify-center mx-auto shadow-sm">
                    <Check className="w-6 h-6" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-bold text-emerald-950 text-base font-serif">Pertanyaan Berhasil Diajukan!</h4>
                    <p className="text-xs text-emerald-800 max-w-md mx-auto leading-relaxed">
                      Jazakumullah Khairan. Mas'alah Anda dengan judul <strong>"{formData.title}"</strong> telah dicatat dan akan ditelaah oleh Dewan Muhararrir untuk diagendakan pada Musyawarah Usbu'iyah mendatang.
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      setFormSubmitted(false);
                      setFormData({
                        name: '',
                        status: 'Santri MDT',
                        category: 'Thoharoh (Bersuci)',
                        title: '',
                        description: ''
                      });
                    }}
                    className="px-4 py-2 bg-emerald-800 hover:bg-emerald-900 text-white rounded-xl text-xs font-bold transition-colors cursor-pointer"
                  >
                    Ajukan Mas'alah Lainnya
                  </button>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-700">Nama Pengaju / Santri *</label>
                      <input
                        type="text"
                        required
                        placeholder="Contoh: Muhammad Rafif"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:bg-white focus:outline-hidden focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-700">Status / Jenjang</label>
                      <select
                        value={formData.status}
                        onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:bg-white focus:outline-hidden focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600"
                      >
                        <option value="Santri Awaliyah">Santri Kelas Awaliyah</option>
                        <option value="Santri Wustho">Santri Kelas Wustho</option>
                        <option value="Wali Santri">Wali Santri MDT</option>
                        <option value="Alumni MDT">Alumni MDT Riyadlul Jannah</option>
                        <option value="Masyarakat Umum">Masyarakat Umum</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-700">Bidang Masalah</label>
                      <select
                        value={formData.category}
                        onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:bg-white focus:outline-hidden focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600"
                      >
                        <option value="Thoharoh (Bersuci)">Thoharoh (Bersuci)</option>
                        <option value="Sholat & Ubudiyah">Sholat &amp; Ubudiyah</option>
                        <option value="Zakat & Puasa">Zakat &amp; Puasa</option>
                        <option value="Muamalah (Jual Beli)">Muamalah (Jual Beli)</option>
                        <option value="Jenazah & Tajhiz">Jenazah &amp; Tajhiz</option>
                        <option value="Kontemporer & Medsos">Masail Kontemporer</option>
                      </select>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-700">Judul / Pokok Masalah *</label>
                      <input
                        type="text"
                        required
                        placeholder="Contoh: Hukum Wudhu Memakai Air Toren yang Terpapar Sinar Matahari"
                        value={formData.title}
                        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:bg-white focus:outline-hidden focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700">
                      Deskripsi Kasus / Waqi'iyyah Lengkap *
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Jelaskan kronologi kejadian, latar belakang masalah, dan pertanyaan spesifik yang ingin dicari kepastian hukumnya berdasarkan kitab fiqih..."
                      value={formData.description}
                      onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:bg-white focus:outline-hidden focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 leading-relaxed"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full sm:w-auto px-6 py-3 bg-emerald-800 hover:bg-emerald-900 text-white rounded-xl text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xs"
                    >
                      <Send className="w-4 h-4" />
                      <span>Kirim Mas'alah ke Dewan LBM</span>
                    </button>
                  </div>
                </form>
              )}
            </div>

          </div>
        )}

      </div>

    </div>
  );
}
