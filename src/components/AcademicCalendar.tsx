/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Calendar, Search, Filter, Clock, GraduationCap, Award, AlertCircle, Bookmark, CheckCircle2, Star, Tag, ChevronRight } from 'lucide-react';
import { ACADEMIC_CALENDAR } from '../data';
import { AcademicCalendarEvent } from '../types';

export default function AcademicCalendar() {
  const [selectedSemester, setSelectedSemester] = useState<string>('Semua Daur');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('semua');

  const categories = [
    { id: 'semua', label: 'Semua Agenda' },
    { id: 'ujian', label: 'Ujian / Imtihan' },
    { id: 'kbm', label: 'Kegiatan Belajar (KBM)' },
    { id: 'pendaftaran', label: 'Pendaftaran (PSB)' },
    { id: 'phbi', label: 'Hari Besar Islam (PHBI)' },
    { id: 'acara', label: 'Acara & Wisuda' },
    { id: 'libur', label: 'Libur Madrasah' },
  ];

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

  const getCategoryBadge = (category: AcademicCalendarEvent['category']) => {
    switch (category) {
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
            <span>Kalender Akademik Official</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight font-serif">
            Kalender Akademik MDT Riyadlul Jannah
          </h2>
          <p className="text-slate-600 text-sm md:text-base font-light">
            Panduan agenda kegiatan belajar mengajar, pelaksanaan Imtihan, peringatan hari besar Islam, dan jadwal libur santri untuk Tahun Ajaran {ACADEMIC_CALENDAR.academicYear}.
          </p>
        </div>

        {/* Highlight Important Highlights Banner - Semester 1 (Juli - Desember 2026) */}
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

        {/* Ringkasan Kalender Bulanan Semester 1 (Juli - Desember 2026) */}
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
                  '13 - 19 Juli: Pendaftaran & Registrasi Ulang Santri',
                  '20 Juli: Awal Masuk KBM Daur I & Orientasi Santri',
                ],
                color: 'emerald',
              },
              {
                month: 'Agustus 2026',
                events: [
                  '17 Agustus: Peringatan HUT RI ke-81 & Lomba Santri',
                  '25 Agustus: Peringatan Maulid Nabi SAW (12 Rabiul Awal)',
                ],
                color: 'amber',
              },
              {
                month: 'September 2026',
                events: [
                  '21 - 26 September: Imtihan Nisfu Daur I (UTS Semester 1)',
                  'Penguatan hafalan juz & nadhom kitab kuning',
                ],
                color: 'blue',
              },
              {
                month: 'Oktober 2026',
                events: [
                  '22 Oktober: Hari Santri Nasional (HSN 2026)',
                  'Pawai obor, Istighotsah & Perlombaan Lalaran',
                ],
                color: 'purple',
              },
              {
                month: 'November 2026',
                events: [
                  '23 - 28 November: Ujian Akhir Semester 1 (Imtihan Daur I)',
                  'Ujian Tulis & Ujian Syafahi (Lisan Kitab Salaf)',
                ],
                color: 'rose',
              },
              {
                month: 'Desember 2026',
                events: [
                  '13 Desember: Pembagian Raport Semester 1 & Wali Santri',
                  '14 - 31 Desember: Libur Semester 1 / Daur I',
                ],
                color: 'slate',
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

        {/* Filter Controls Bar */}
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 md:p-6 space-y-4">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            
            {/* Daur / Semester Selector Tabs */}
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

            {/* Search Input */}
            <div className="relative w-full lg:w-72">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Cari agenda, bulan, atau ujian..."
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
            {categories.map((cat) => {
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

        {/* Timeline Events List */}
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
                      <div className="bg-slate-50 border border-slate-200/90 rounded-2xl p-3 text-center min-w-[110px] shrink-0 space-y-1">
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
                      <div className="inline-flex items-center gap-1 text-xs font-bold text-emerald-800 bg-emerald-50 px-3 py-1.5 rounded-xl border border-emerald-100/80">
                        <Clock className="w-3.5 h-3.5 text-emerald-600" />
                        <span>MDT Riyadlul Jannah</span>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          )}
        </div>

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
