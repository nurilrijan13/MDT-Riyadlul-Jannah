/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Calendar, 
  Search, 
  Filter, 
  Clock, 
  GraduationCap, 
  Award, 
  AlertCircle, 
  Bookmark, 
  CheckCircle2, 
  Star, 
  Tag, 
  ChevronRight,
  FileText,
  Users,
  Sparkles,
  ChevronDown,
  ChevronUp,
  Layers,
  ExternalLink,
  BookOpen
} from 'lucide-react';
import { ACADEMIC_CALENDAR, ANNOUNCEMENTS } from '../data';
import { AcademicCalendarEvent, Announcement } from '../types';
import ShareButton from './ShareButton';

export default function AcademicCalendar() {
  const [activeView, setActiveView] = useState<'kalender' | 'arsip' | 'gabungan'>('kalender');
  const [selectedSemester, setSelectedSemester] = useState<string>('Semua Daur');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('semua');
  const [expandedArchiveId, setExpandedArchiveId] = useState<string | null>(ANNOUNCEMENTS[0]?.id || null);
  const [selectedArchiveImage, setSelectedArchiveImage] = useState<{ src: string; title: string } | null>(null);

  const calendarCategories = [
    { id: 'semua', label: 'Semua Agenda' },
    { id: 'rapat', label: 'Rapat & Kelembagaan' },
    { id: 'kegiatan', label: 'Kegiatan Santri' },
    { id: 'ujian', label: 'Ujian / Imtihan' },
    { id: 'kbm', label: 'Kegiatan Belajar (KBM)' },
    { id: 'pendaftaran', label: 'Pendaftaran (PSB)' },
    { id: 'phbi', label: 'Hari Besar Islam (PHBI)' },
    { id: 'acara', label: 'Acara & Wisuda' },
    { id: 'libur', label: 'Libur Madrasah' },
  ];

  const archiveCategories = [
    { id: 'semua', label: 'Semua Arsip' },
    { id: 'kegiatan', label: 'Kegiatan & Rapat' },
    { id: 'akademik', label: 'Akademik & Kalender' },
    { id: 'pengumuman', label: 'Pengumuman Resmi' },
  ];

  // Filtered Calendar Events
  const filteredEvents = ACADEMIC_CALENDAR.events.filter((event) => {
    const matchesSemester =
      selectedSemester === 'Semua Daur' || event.semester === selectedSemester;
    const matchesCategory =
      selectedCategory === 'semua' || event.category === selectedCategory;
    const matchesSearch =
      event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.date.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.month.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesSemester && matchesCategory && matchesSearch;
  });

  // Filtered Announcements / Archives
  const filteredArchives = ANNOUNCEMENTS.filter((item) => {
    const matchesCategory =
      selectedCategory === 'semua' || item.category === selectedCategory;
    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.date.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  const getCategoryBadge = (category: string) => {
    switch (category) {
      case 'rapat':
        return {
          label: 'Rapat Asatidz',
          bg: 'bg-cyan-100 text-cyan-900 border-cyan-200',
          dot: 'bg-cyan-600',
        };
      case 'kegiatan':
        return {
          label: 'Kegiatan Santri',
          bg: 'bg-teal-100 text-teal-900 border-teal-200',
          dot: 'bg-teal-600',
        };
      case 'ujian':
        return {
          label: 'Ujian / Imtihan',
          bg: 'bg-rose-100 text-rose-800 border-rose-200',
          dot: 'bg-rose-500',
        };
      case 'pendaftaran':
        return {
          label: 'Pendaftaran (PSB)',
          bg: 'bg-indigo-100 text-indigo-800 border-indigo-200',
          dot: 'bg-indigo-500',
        };
      case 'phbi':
        return {
          label: 'Peringatan PHBI',
          bg: 'bg-amber-100 text-amber-900 border-amber-200',
          dot: 'bg-amber-500',
        };
      case 'acara':
        return {
          label: 'Acara / Wisuda',
          bg: 'bg-purple-100 text-purple-800 border-purple-200',
          dot: 'bg-purple-500',
        };
      case 'libur':
        return {
          label: 'Libur Madrasah',
          bg: 'bg-slate-100 text-slate-700 border-slate-200',
          dot: 'bg-slate-400',
        };
      case 'informasi':
      case 'pengumuman':
        return {
          label: 'Pengumuman Resmi',
          bg: 'bg-blue-100 text-blue-800 border-blue-200',
          dot: 'bg-blue-500',
        };
      case 'kbm':
      default:
        return {
          label: 'KBM Diniyah',
          bg: 'bg-emerald-100 text-emerald-800 border-emerald-200',
          dot: 'bg-emerald-500',
        };
    }
  };

  return (
    <div className="py-12 bg-white font-sans space-y-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Header Title Section */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 bg-emerald-50 text-emerald-800 text-xs font-bold rounded-full uppercase tracking-wider border border-emerald-100">
            <Calendar className="w-3.5 h-3.5 text-emerald-600" />
            <span>Kalender Akademik &amp; Arsip Informasi</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight font-serif">
            Kalender Akademik &amp; Arsip Agenda Madrasah
          </h2>
          <p className="text-slate-600 text-sm md:text-base font-light">
            Panduan lengkap jadwal kegiatan belajar mengajar, agenda ujian, peringatan hari besar Islam, serta arsip berita acara dan informasi resmi MDT Riyadlul Jannah.
          </p>
        </div>

        {/* View Switcher: Kalender vs Arsip Informasi */}
        <div className="flex justify-center">
          <div className="inline-flex p-1.5 bg-slate-100/90 rounded-2xl border border-slate-200 shadow-2xs gap-1">
            <button
              onClick={() => {
                setActiveView('kalender');
                setSelectedCategory('semua');
              }}
              className={`flex items-center space-x-2 px-4 md:px-6 py-2.5 rounded-xl text-xs md:text-sm font-bold transition-all cursor-pointer ${
                activeView === 'kalender'
                  ? 'bg-emerald-800 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
              }`}
            >
              <Calendar className="w-4 h-4" />
              <span>Jadwal Kalender Akademik</span>
            </button>

            <button
              onClick={() => {
                setActiveView('arsip');
                setSelectedCategory('semua');
              }}
              className={`flex items-center space-x-2 px-4 md:px-6 py-2.5 rounded-xl text-xs md:text-sm font-bold transition-all cursor-pointer ${
                activeView === 'arsip'
                  ? 'bg-emerald-800 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
              }`}
            >
              <FileText className="w-4 h-4" />
              <span>Arsip Informasi &amp; Berita Acara</span>
              <span className={`px-1.5 py-0.2 rounded-full text-[10px] font-mono font-extrabold ${
                activeView === 'arsip' ? 'bg-amber-400 text-slate-900' : 'bg-slate-300 text-slate-700'
              }`}>
                {ANNOUNCEMENTS.length}
              </span>
            </button>

            <button
              onClick={() => {
                setActiveView('gabungan');
                setSelectedCategory('semua');
              }}
              className={`hidden sm:flex items-center space-x-2 px-4 md:px-5 py-2.5 rounded-xl text-xs md:text-sm font-bold transition-all cursor-pointer ${
                activeView === 'gabungan'
                  ? 'bg-emerald-800 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
              }`}
            >
              <Layers className="w-4 h-4" />
              <span>Semua Terpadu</span>
            </button>
          </div>
        </div>

        {/* Highlight Important Highlights Banner - Semester 1 (Juli - Desember 2026) */}
        {activeView !== 'arsip' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-gradient-to-br from-emerald-800 to-emerald-900 text-white rounded-2xl p-5 border border-emerald-700 shadow-xs flex items-start space-x-3.5">
              <div className="p-2.5 bg-white/10 rounded-xl shrink-0">
                <GraduationCap className="w-5 h-5 text-amber-300" />
              </div>
              <div className="space-y-1">
                <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-200 block font-bold">Awal Semester 1 (Daur I)</span>
                <h4 className="font-serif font-extrabold text-sm leading-snug text-white">Awal Masuk KBM &amp; Orientasi Santri</h4>
                <p className="text-xs text-emerald-100/80 font-light">20 Juli 2026 (PSB: 13-19 Juli 2026)</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-amber-700 to-amber-900 text-white rounded-2xl p-5 border border-amber-600 shadow-xs flex items-start space-x-3.5">
              <div className="p-2.5 bg-white/10 rounded-xl shrink-0">
                <Award className="w-5 h-5 text-amber-200" />
              </div>
              <div className="space-y-1">
                <span className="text-[10px] font-mono uppercase tracking-widest text-amber-200 block font-bold">Evaluasi Tengah Semester</span>
                <h4 className="font-serif font-extrabold text-sm leading-snug text-white">Imtihan Nisfu Daur I (UTS 1)</h4>
                <p className="text-xs text-amber-100/80 font-light">21 - 26 September 2026</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-indigo-800 to-indigo-950 text-white rounded-2xl p-5 border border-indigo-700 shadow-xs flex items-start space-x-3.5">
              <div className="p-2.5 bg-white/10 rounded-xl shrink-0">
                <Star className="w-5 h-5 text-indigo-300" />
              </div>
              <div className="space-y-1">
                <span className="text-[10px] font-mono uppercase tracking-widest text-indigo-200 block font-bold">Ujian Akhir &amp; Raport</span>
                <h4 className="font-serif font-extrabold text-sm leading-snug text-white">Imtihan Daur I &amp; Pembagian Raport</h4>
                <p className="text-xs text-indigo-100/80 font-light">Ujian: 23-28 Nov • Raport: 13 Des 2026</p>
              </div>
            </div>
          </div>
        )}

        {/* Ringkasan Kalender Bulanan Semester 1 (Juli - Desember 2026) */}
        {activeView === 'kalender' && (
          <div className="bg-gradient-to-br from-emerald-50/60 via-white to-amber-50/40 border border-emerald-200/80 rounded-3xl p-6 md:p-8 space-y-6 shadow-xs">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-emerald-100 pb-4">
              <div>
                <div className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100 px-2.5 py-0.5 rounded-md font-mono mb-1">
                  <Bookmark className="w-3 h-3 text-emerald-700" />
                  <span>Semester 1 / Daur I TA 2026/2027</span>
                </div>
                <h3 className="text-xl md:text-2xl font-extrabold text-slate-900 font-serif">
                  Matriks Agenda Semester 1 (Juli – Desember 2026)
                </h3>
              </div>
              <span className="text-xs text-slate-500 font-mono">
                6 Bulan Pelaksanaan KBM Diniyah
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                {
                  month: 'Juli 2026',
                  events: [
                    '8 Juli: Rapat Pleno Penetapan Wali Kelas & Kitab Salaf',
                    '13 - 19 Juli: Pendaftaran & Registrasi Ulang Santri',
                    '20 Juli: Awal Masuk KBM Daur I & Orientasi Santri',
                  ],
                },
                {
                  month: 'Agustus 2026',
                  events: [
                    '7 Agustus: Sesi Foto Bersama Murid MDT untuk Raport & Ijazah',
                    '17 Agustus: Peringatan HUT RI ke-81 & Lomba Santri',
                    '18 Agustus: Rapat Internal Dewan Asatidz (Kelembagaan & KBM)',
                    '25 Agustus: Peringatan Maulid Nabi SAW (12 Rabiul Awal)',
                  ],
                },
                {
                  month: 'September 2026',
                  events: [
                    '21 - 26 September: Imtihan Nisfu Daur I (UTS Semester 1)',
                    'Penguatan hafalan juz & nadhom kitab kuning',
                  ],
                },
                {
                  month: 'Oktober 2026',
                  events: [
                    '22 Oktober: Hari Santri Nasional (HSN 2026)',
                    'Pawai obor, Istighotsah & Perlombaan Lalaran',
                  ],
                },
                {
                  month: 'November 2026',
                  events: [
                    '23 - 28 November: Ujian Akhir Semester 1 (Imtihan Daur I)',
                    'Ujian Tulis & Ujian Syafahi (Lisan Kitab Salaf)',
                  ],
                },
                {
                  month: 'Desember 2026',
                  events: [
                    '13 Desember: Pembagian Raport Semester 1 & Wali Santri',
                    '14 - 31 Desember: Libur Semester 1 / Daur I',
                  ],
                },
              ].map((m, idx) => (
                <div
                  key={idx}
                  className="bg-white border border-slate-200/90 rounded-2xl p-4 space-y-2.5 shadow-2xs hover:border-emerald-300 transition-colors"
                >
                  <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                    <span className="font-extrabold text-sm text-slate-900 font-serif flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-emerald-600" />
                      {m.month}
                    </span>
                    <span className="text-[10px] font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded-md font-mono">
                      Semester 1
                    </span>
                  </div>
                  <ul className="space-y-1.5 text-xs text-slate-600 font-light">
                    {m.events.map((e, eIdx) => (
                      <li key={eIdx} className="flex items-start gap-1.5">
                        <span className="text-emerald-600 font-bold shrink-0 mt-0.5">•</span>
                        <span>{e}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Filter Controls Bar */}
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 md:p-6 space-y-4">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            
            {/* Daur / Semester Selector Tabs (If viewing calendar/gabungan) */}
            {activeView !== 'arsip' ? (
              <div className="flex flex-wrap gap-2">
                {ACADEMIC_CALENDAR.daurList.map((daur) => {
                  const isActive = selectedSemester === daur;
                  return (
                    <button
                      key={daur}
                      onClick={() => setSelectedSemester(daur)}
                      className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                        isActive
                          ? 'bg-emerald-700 text-white shadow-xs'
                          : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
                      }`}
                    >
                      {daur}
                    </button>
                  );
                })}
              </div>
            ) : (
              <div className="flex items-center space-x-2">
                <FileText className="w-4 h-4 text-emerald-700" />
                <span className="text-xs font-bold text-slate-700">
                  Koleksi Dokumen &amp; Berita Acara MDT Riyadlul Jannah
                </span>
              </div>
            )}

            {/* Search Input */}
            <div className="relative w-full lg:w-80">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder={activeView === 'arsip' ? "Cari berita acara, rapat, atau pengumuman..." : "Cari agenda, bulan, atau ujian..."}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2 bg-white border border-slate-200 rounded-xl text-xs font-medium text-slate-800 focus:outline-hidden focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600"
              />
            </div>
          </div>

          {/* Category Chips Bar */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 pt-1 border-t border-slate-200/60 no-scrollbar">
            <span className="text-[11px] font-bold text-slate-400 shrink-0 mr-1 flex items-center gap-1">
              <Filter className="w-3 h-3" /> Kategori:
            </span>
            {(activeView === 'arsip' ? archiveCategories : calendarCategories).map((cat) => {
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3 py-1 rounded-lg text-[11px] font-semibold whitespace-nowrap transition-all cursor-pointer shrink-0 ${
                    isActive
                      ? 'bg-slate-800 text-white'
                      : 'bg-white text-slate-600 border border-slate-200/80 hover:bg-slate-100'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* SECTION 1: CALENDAR VIEW */}
        {activeView === 'kalender' && (
          <div className="space-y-4">
            {filteredEvents.length === 0 ? (
              <div className="text-center py-16 bg-slate-50 border border-dashed border-slate-200 rounded-2xl space-y-3">
                <Calendar className="w-10 h-10 text-slate-300 mx-auto" />
                <h4 className="font-bold text-slate-700 text-base">Tidak Ada Agenda Ditemukan</h4>
                <p className="text-xs text-slate-500 max-w-sm mx-auto">
                  Silakan sesuaikan kata kunci pencarian atau ganti kategori filter untuk melihat agenda akademik lainnya.
                </p>
                <button
                  onClick={() => {
                    setSelectedSemester('Semua Daur');
                    setSelectedCategory('semua');
                    setSearchQuery('');
                  }}
                  className="px-4 py-2 bg-emerald-700 text-white rounded-xl text-xs font-bold hover:bg-emerald-800 transition-colors cursor-pointer"
                >
                  Reset Semua Filter
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 gap-4">
                {filteredEvents.map((event) => {
                  const badge = getCategoryBadge(event.category);
                  return (
                    <motion.div
                      key={event.id}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.2 }}
                      className={`bg-white border rounded-2xl p-5 md:p-6 transition-all duration-200 shadow-2xs hover:shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4 ${
                        event.important
                          ? 'border-emerald-300 ring-2 ring-emerald-500/10 bg-gradient-to-r from-emerald-50/40 via-white to-white'
                          : 'border-slate-200 hover:border-emerald-200'
                      }`}
                    >
                      <div className="flex items-start gap-4">
                        {/* Date Badge Box */}
                        <div className="bg-slate-50 border border-slate-200/90 rounded-2xl p-3 text-center min-w-[120px] shrink-0 space-y-1">
                          <span className="text-[10px] font-mono font-extrabold uppercase text-emerald-800 tracking-wider block bg-emerald-100/70 py-0.5 rounded-md">
                            {event.month}
                          </span>
                          <span className="text-xs md:text-sm font-extrabold text-slate-900 font-sans block leading-tight pt-0.5">
                            {event.date}
                          </span>
                        </div>

                        {/* Main Info */}
                        <div className="space-y-1.5">
                          <div className="flex flex-wrap items-center gap-2">
                            <span
                              className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md text-[10px] font-extrabold border ${badge.bg}`}
                            >
                              <span className={`w-1.5 h-1.5 rounded-full ${badge.dot}`} />
                              <span>{badge.label}</span>
                            </span>

                            <span className="px-2 py-0.5 bg-slate-100 text-slate-600 rounded-md text-[10px] font-mono font-bold">
                              {event.semester}
                            </span>

                            {event.important && (
                              <span className="px-2 py-0.5 bg-amber-100 text-amber-900 rounded-md text-[10px] font-bold border border-amber-200 flex items-center gap-1">
                                <Star className="w-3 h-3 text-amber-600 fill-amber-500" />
                                <span>Agenda Penting</span>
                              </span>
                            )}
                          </div>

                          <h3 className="text-base md:text-lg font-extrabold text-slate-900 font-serif leading-snug">
                            {event.title}
                          </h3>

                          <p className="text-xs md:text-sm text-slate-600 font-light leading-relaxed">
                            {event.description}
                          </p>
                        </div>
                      </div>

                      <div className="shrink-0 self-end md:self-center">
                        <ShareButton
                          variant="pill"
                          label="Bagikan Jadwal"
                          shareData={{
                            title: `${event.title} (${event.date})`,
                            text: `${event.description}\n\nJadwal Resmi MDT Riyadlul Jannah (${event.semester}).`,
                            category: event.category
                          }}
                        />
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            )}
          </div>
        )}

        {/* SECTION 2: ARSIP INFORMASI & BERITA ACARA VIEW */}
        {activeView === 'arsip' && (
          <div className="space-y-6">
            <div className="bg-emerald-50/60 border border-emerald-200/80 rounded-2xl p-4 md:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="space-y-1">
                <h3 className="text-base font-bold text-emerald-950 font-serif flex items-center gap-2">
                  <FileText className="w-4 h-4 text-emerald-700" />
                  <span>Daftar Arsip Berita Acara, Hasil Rapat &amp; Pengumuman Resmi</span>
                </h3>
                <p className="text-xs text-slate-600 font-light">
                  Dokumentasi riwayat kegiatan, musyawarah asatidz, edaran resmi, dan laporan perkembangan santri yang telah dilaksanakan.
                </p>
              </div>
              <span className="text-xs font-mono font-bold text-emerald-800 bg-white px-3 py-1.5 rounded-xl border border-emerald-200 self-start sm:self-auto">
                {filteredArchives.length} Arsip Tersimpan
              </span>
            </div>

            {filteredArchives.length === 0 ? (
              <div className="text-center py-16 bg-slate-50 border border-dashed border-slate-200 rounded-2xl space-y-3">
                <FileText className="w-10 h-10 text-slate-300 mx-auto" />
                <h4 className="font-bold text-slate-700 text-base">Tidak Ada Arsip Ditemukan</h4>
                <p className="text-xs text-slate-500 max-w-sm mx-auto">
                  Silakan sesuaikan kata kunci pencarian atau pilih kategori lain.
                </p>
                <button
                  onClick={() => {
                    setSelectedCategory('semua');
                    setSearchQuery('');
                  }}
                  className="px-4 py-2 bg-emerald-700 text-white rounded-xl text-xs font-bold hover:bg-emerald-800 transition-colors cursor-pointer"
                >
                  Lihat Semua Arsip
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                {filteredArchives.map((item) => {
                  const isExpanded = expandedArchiveId === item.id;
                  const badge = getCategoryBadge(item.category);

                  return (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="bg-white border border-slate-200 rounded-2xl shadow-2xs hover:border-emerald-300 transition-all overflow-hidden"
                    >
                      {/* Archive Card Header */}
                      <div className="p-5 md:p-6 space-y-3">
                        <div className="flex flex-wrap items-center justify-between gap-3">
                          <div className="flex flex-wrap items-center gap-2">
                            <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md text-[10px] font-extrabold border ${badge.bg}`}>
                              <span className={`w-1.5 h-1.5 rounded-full ${badge.dot}`} />
                              <span>{badge.label}</span>
                            </span>
                            <span className="text-xs font-mono font-bold text-slate-500">
                              {item.date}
                            </span>
                            {item.important && (
                              <span className="px-2 py-0.5 bg-red-100 text-red-800 text-[10px] font-bold rounded-md flex items-center gap-1">
                                <AlertCircle className="w-3 h-3 text-red-600" />
                                <span>Penting</span>
                              </span>
                            )}
                          </div>

                          <div className="flex items-center space-x-2">
                            <ShareButton
                              variant="pill"
                              label="Bagikan"
                              shareData={{
                                title: item.title,
                                text: item.content,
                                category: item.category,
                                imageUrl: item.image
                              }}
                            />
                            <button
                              onClick={() => setExpandedArchiveId(isExpanded ? null : item.id)}
                              className="p-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors cursor-pointer"
                              title={isExpanded ? "Tutup Rincian" : "Buka Rincian"}
                            >
                              {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                            </button>
                          </div>
                        </div>

                        <h3 
                          onClick={() => setExpandedArchiveId(isExpanded ? null : item.id)}
                          className="text-base md:text-xl font-bold text-slate-900 font-serif leading-snug cursor-pointer hover:text-emerald-800 transition-colors"
                        >
                          {item.title}
                        </h3>

                        {/* Thumbnail / Image Preview */}
                        {item.image && (
                          <div className="pt-2">
                            <div 
                              onClick={() => setSelectedArchiveImage({ src: item.image!, title: item.title })}
                              className="relative rounded-xl overflow-hidden border border-slate-200 max-h-48 cursor-pointer group bg-slate-900"
                            >
                              <img 
                                src={item.image} 
                                alt={item.title}
                                className="w-full h-48 object-cover group-hover:scale-102 transition-transform duration-300 opacity-95 group-hover:opacity-100"
                              />
                              <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                <span className="px-3 py-1 bg-white/90 text-slate-900 text-xs font-bold rounded-lg shadow-sm">
                                  Klik untuk Memperbesar Foto
                                </span>
                              </div>
                            </div>
                          </div>
                        )}

                        {/* Content text */}
                        <div className="text-xs md:text-sm text-slate-600 font-light leading-relaxed pt-1">
                          {isExpanded ? (
                            <div className="space-y-3 pt-2 border-t border-slate-100">
                              {item.content.split('\n\n').map((para, pIdx) => (
                                <p key={pIdx} className="leading-relaxed whitespace-pre-line">{para}</p>
                              ))}
                            </div>
                          ) : (
                            <p className="line-clamp-2">
                              {item.content}
                            </p>
                          )}
                        </div>

                        {/* Toggle Read More */}
                        <button
                          onClick={() => setExpandedArchiveId(isExpanded ? null : item.id)}
                          className="text-xs font-bold text-emerald-700 hover:text-emerald-900 hover:underline pt-1 inline-flex items-center gap-1 cursor-pointer"
                        >
                          <span>{isExpanded ? "Tampilkan Lebih Sedikit" : "Baca Berita Acara Selengkapnya"}</span>
                          {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronRight className="w-3.5 h-3.5" />}
                        </button>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            )}
          </div>
        )}

        {/* SECTION 3: GABUNGAN / UNIFIED VIEW */}
        {activeView === 'gabungan' && (
          <div className="space-y-8">
            {/* 1. Academic Calendar Section */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2 border-b border-slate-200 pb-3">
                <Calendar className="w-5 h-5 text-emerald-700" />
                <h3 className="text-lg font-bold text-slate-900 font-serif">
                  1. Agenda Kalender Akademik (TA 2026/2027)
                </h3>
              </div>
              <div className="grid grid-cols-1 gap-3">
                {filteredEvents.map((event) => {
                  const badge = getCategoryBadge(event.category);
                  return (
                    <div key={event.id} className="p-4 bg-white border border-slate-200 rounded-xl flex flex-col sm:flex-row justify-between sm:items-center gap-3">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className={`px-2 py-0.5 text-[9px] font-bold rounded ${badge.bg}`}>{badge.label}</span>
                          <span className="text-[11px] font-mono text-slate-500">{event.date}</span>
                        </div>
                        <h4 className="font-bold text-sm text-slate-900">{event.title}</h4>
                        <p className="text-xs text-slate-600 font-light mt-0.5">{event.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* 2. Archived Information & Minutes */}
            <div className="space-y-4 pt-4">
              <div className="flex items-center space-x-2 border-b border-slate-200 pb-3">
                <FileText className="w-5 h-5 text-emerald-700" />
                <h3 className="text-lg font-bold text-slate-900 font-serif">
                  2. Arsip Berita Acara &amp; Catatan Agenda Terlaksana
                </h3>
              </div>
              <div className="grid grid-cols-1 gap-4">
                {filteredArchives.map((item) => (
                  <div key={item.id} className="p-5 bg-white border border-slate-200 rounded-2xl space-y-2 shadow-2xs">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded">
                        {item.date}
                      </span>
                      <ShareButton
                        variant="pill"
                        label="Bagikan Arsip"
                        shareData={{
                          title: item.title,
                          text: item.content,
                          category: item.category,
                          imageUrl: item.image
                        }}
                      />
                    </div>
                    <h4 className="font-bold text-base text-slate-900 font-serif">{item.title}</h4>
                    <p className="text-xs text-slate-600 font-light leading-relaxed line-clamp-3">{item.content}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Image Modal for Photo Zoom */}
        <AnimatePresence>
          {selectedArchiveImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedArchiveImage(null)}
              className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xs flex items-center justify-center p-4"
            >
              <div 
                onClick={(e) => e.stopPropagation()}
                className="bg-white rounded-3xl overflow-hidden max-w-3xl w-full shadow-2xl border border-slate-200 space-y-4 p-4"
              >
                <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                  <h4 className="font-bold text-sm text-slate-900 line-clamp-1">{selectedArchiveImage.title}</h4>
                  <button
                    onClick={() => setSelectedArchiveImage(null)}
                    className="p-1 rounded-full hover:bg-slate-100 text-slate-500 font-bold text-xs px-2.5 py-1 cursor-pointer"
                  >
                    ✕ Tutup
                  </button>
                </div>
                <div className="rounded-2xl overflow-hidden bg-slate-950 flex items-center justify-center max-h-[70vh]">
                  <img 
                    src={selectedArchiveImage.src} 
                    alt={selectedArchiveImage.title}
                    className="max-h-[70vh] w-auto object-contain"
                  />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Footer Guidance Note */}
        <div className="bg-emerald-950 text-emerald-100 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 border border-emerald-800 shadow-md">
          <div className="space-y-1.5 text-center md:text-left">
            <h4 className="font-serif font-extrabold text-lg text-amber-300">
              Catatan Penting Bagi Orang Tua Wali Santri
            </h4>
            <p className="text-xs md:text-sm text-emerald-200/90 font-light max-w-2xl leading-relaxed">
              Jadwal pelaksanaan ujian dan kegiatan khusus bersifat tentatif sesuai petunjuk Pengurus Pondok Pesantren &amp; Kementerian Agama. Apabila terdapat penyesuaian tanggal, pemberitahuan resmi akan dikirim melalui grup WhatsApp Wali Santri.
            </p>
          </div>

          <div className="shrink-0">
            <a
              href="https://wa.me/6285966461178"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 bg-amber-400 hover:bg-amber-300 text-emerald-950 font-bold text-xs uppercase tracking-widest rounded-xl transition-all shadow-md inline-flex items-center gap-2 cursor-pointer"
            >
              <span>Konfirmasi Ke Sekretariat</span>
              <ChevronRight className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
