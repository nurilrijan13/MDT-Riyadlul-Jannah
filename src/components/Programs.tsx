/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { BookOpen, GraduationCap, HeartHandshake, Users, Check, Clock, Calendar, ShieldCheck, HelpCircle } from 'lucide-react';
import { PROGRAMS, SCHOOL_PROFILE } from '../data';
import { Program } from '../types';
import jadwalMdtPagi from '../assets/images/JADWAL MDT PAGI.jpg';
import jadwalMdtSore from '../assets/images/JADWAL MDT SORE.jpg';

export default function Programs() {
  const [selectedProgram, setSelectedProgram] = useState<Program>(PROGRAMS[0]);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'BookOpen':
        return <BookOpen className="w-6 h-6" />;
      case 'GraduationCap':
        return <GraduationCap className="w-6 h-6" />;
      case 'HeartHandshake':
        return <HeartHandshake className="w-6 h-6" />;
      case 'Users':
        return <Users className="w-6 h-6" />;
      default:
        return <BookOpen className="w-6 h-6" />;
    }
  };

  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 bg-emerald-50 text-emerald-700 text-xs font-semibold rounded-full uppercase tracking-wider">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Program Pendidikan</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            Kurikulum dan Jenjang Pendidikan
          </h2>
          <p className="text-slate-600 text-sm md:text-base font-light">
            Kami mengintegrasikan pendidikan ilmu syari'ah formal dengan program pembiasaan akhlak dan hafalan Al-Qur'an secara intensif.
          </p>
        </div>

        {/* Dynamic Interactive Program Tabs & Details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Program Select Rails */}
          <div className="lg:col-span-4 space-y-3">
            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest px-3 mb-2">Pilih Program</p>
            {PROGRAMS.map((program) => {
              const isSelected = selectedProgram.id === program.id;
              return (
                <button
                  key={program.id}
                  onClick={() => setSelectedProgram(program)}
                  id={`program-tab-${program.id}`}
                  className={`w-full text-left p-4 rounded-xl border transition-all duration-200 cursor-pointer flex items-center space-x-4 ${
                    isSelected
                      ? 'bg-emerald-600 text-white border-emerald-600 shadow-lg shadow-emerald-200'
                      : 'bg-slate-50 border-slate-100 text-slate-700 hover:bg-slate-100/70 hover:border-slate-200'
                  }`}
                >
                  <div className={`p-2.5 rounded-lg shrink-0 ${
                    isSelected ? 'bg-emerald-500/30 text-white' : 'bg-emerald-50 text-emerald-600'
                  }`}>
                    {getIcon(program.icon)}
                  </div>
                  <div>
                    <h3 className="font-bold text-sm md:text-base leading-tight">{program.name}</h3>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Program Details Display */}
          <div className="lg:col-span-8 bg-slate-50/70 border border-slate-100 rounded-2xl p-6 md:p-8 shadow-xs">
            <motion.div
              key={selectedProgram.id}
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between border-b border-slate-200/60 pb-5 gap-4">
                <div>
                  <h3 className="text-2xl font-bold text-emerald-950">{selectedProgram.name}</h3>
                  <p className="text-xs text-emerald-600 font-semibold uppercase tracking-wider mt-1">Jenjang Durasi: {selectedProgram.duration}</p>
                </div>
                
                <div className="inline-flex flex-wrap gap-2 text-xs">
                  <span className="flex items-center space-x-1.5 px-3 py-1.5 bg-white border border-slate-200 text-slate-700 rounded-lg">
                    <Clock className="w-3.5 h-3.5 text-emerald-600" />
                    <span>{selectedProgram.schedule}</span>
                  </span>
                </div>
              </div>

              {/* Description */}
              <div className="space-y-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Deskripsi Program</h4>
                <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                  {selectedProgram.description}
                </p>
              </div>

              {/* Subjects / Curriculum */}
              <div className="space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Materi Ajar / Kurikulum Inti</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {selectedProgram.subjects.map((subject, index) => (
                    <div key={index} className="flex items-center space-x-3 bg-white p-3 rounded-xl border border-slate-100">
                      <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                        <Check className="w-3 h-3" />
                      </div>
                      <span className="text-slate-700 text-sm font-medium">{subject}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Target & Outcomes */}
              <div className="bg-emerald-50 border border-emerald-100/50 p-4 rounded-xl flex items-start space-x-3">
                <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <h5 className="text-sm font-bold text-emerald-950">Target Kompetensi Lulusan</h5>
                  <p className="text-xs text-emerald-800/80 mt-1 leading-relaxed">
                    Setiap santri di jenjang ini ditargetkan menguasai tata cara beribadah harian dengan sempurna secara fikih, memiliki kemantapan tauhid, mampu membaca Al-Qur'an secara tartil, serta berakhlak mulia di lingkungan rumah dan sekolah formalnya.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Mata Pelajaran / Kitab Madrasah Section */}
        <div className="bg-slate-50 border border-slate-150 rounded-2xl p-6 md:p-8 shadow-xs space-y-8">
          <div className="flex items-center space-x-3 border-b border-slate-200/60 pb-4">
            <BookOpen className="w-6 h-6 text-emerald-600" />
            <div>
              <h3 className="font-bold text-lg md:text-xl text-slate-900 font-serif">Mata Pelajaran MDT Riyadlul Jannah</h3>
              <p className="text-xs text-slate-500">Daftar Fan Ilmu dan Kitab Salaf yang dipelajari oleh para santri</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {[
              {
                category: "1. Fan Nahwu (Sintaksis)",
                kitabs: ["Jurmiyyah", "Imrithi", "Alfiyah Ibnu Malik", "Iktisyaf"],
                color: "border-emerald-100 bg-emerald-50/20 text-emerald-900",
                badge: "bg-emerald-100 text-emerald-800"
              },
              {
                category: "2. Fan Fiqh (Hukum Islam)",
                kitabs: ["Safinatun Najah", "Safinatus Sholat", "Mabadil Fiqh", "Taqrib", "Fathul Qorib"],
                color: "border-sky-100 bg-sky-50/20 text-sky-900",
                badge: "bg-sky-100 text-sky-800"
              },
              {
                category: "3. Fan Tajwid (Tartil)",
                kitabs: ["Hidayatus Shibyan", "Tuhfatul Athfal"],
                color: "border-amber-100 bg-amber-50/20 text-amber-900",
                badge: "bg-amber-100 text-amber-800"
              },
              {
                category: "4. Fan Akhlaq (Adab)",
                kitabs: ["Washiyatul Aba Lil Abna'", "Ta'lim Mutaallim", "Adabut Ta'lim Mutaallim"],
                color: "border-rose-100 bg-rose-50/20 text-rose-900",
                badge: "bg-rose-100 text-rose-800"
              },
              {
                category: "5. Fan Tauhid (Teologi)",
                kitabs: ["Aqidatul 'Awwam", "Jawahirul Kalamiyah", "Aqidatud Diniyyah"],
                color: "border-indigo-100 bg-indigo-50/20 text-indigo-900",
                badge: "bg-indigo-100 text-indigo-800"
              },
              {
                category: "6. Fan Hadist",
                kitabs: ["Arbain Nawawi", "Bulughul Maram"],
                color: "border-purple-100 bg-purple-50/20 text-purple-900",
                badge: "bg-purple-100 text-purple-800"
              },
              {
                category: "7. Fan Ushul Fiqh",
                kitabs: ["Taysirul Ushul Ila Ilmu Ushul"],
                color: "border-teal-100 bg-teal-50/20 text-teal-900",
                badge: "bg-teal-100 text-teal-800"
              },
              {
                category: "8. Fan Ilmu Hadist / Mustholah",
                kitabs: ["Minhatul Mugits"],
                color: "border-cyan-100 bg-cyan-50/20 text-cyan-900",
                badge: "bg-cyan-100 text-cyan-800"
              },
              {
                category: "9. Fan Shorrof (Morfologi)",
                kitabs: ["Amtsilatut Tasrifiyah", "Nadhom Maqsud"],
                color: "border-orange-100 bg-orange-50/20 text-orange-900",
                badge: "bg-orange-100 text-orange-800"
              },
              {
                category: "10. Fan Tarekh (Sejarah)",
                kitabs: ["Tarikhul Islam", "Kholasoh Nurul Yaqin I, II & III"],
                color: "border-lime-100 bg-lime-50/20 text-lime-900",
                badge: "bg-lime-100 text-lime-800"
              },
              {
                category: "11. Fan Qoidah Fiqih",
                kitabs: ["Mabadil Awaliyah"],
                color: "border-slate-150 bg-slate-100/30 text-slate-900",
                badge: "bg-slate-200 text-slate-800"
              },
              {
                category: "12. Pegon Wa Imla",
                kitabs: ["Pegon Wa Imla"],
                color: "border-yellow-100 bg-yellow-50/20 text-yellow-900",
                badge: "bg-yellow-100 text-yellow-800"
              }
            ].map((fan, index) => (
              <div 
                key={index}
                className={`p-5 rounded-2xl border ${fan.color} shadow-2xs hover:shadow-xs transition-all duration-300 flex flex-col space-y-3.5 bg-white`}
              >
                <div className="flex items-center justify-between">
                  <h4 className="font-bold text-sm text-slate-900 leading-tight">
                    {fan.category}
                  </h4>
                </div>
                <div className="h-px bg-slate-200/60" />
                <ul className="space-y-2 flex-grow">
                  {fan.kitabs.map((kitab, kIdx) => (
                    <li key={kIdx} className="flex items-center space-x-2 text-xs text-slate-700 font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 shrink-0" />
                      <span>{kitab}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Academic Calendar or Study Schedule Visualization */}
        <div className="bg-slate-50 border border-slate-150 rounded-2xl p-6 md:p-8 shadow-xs">
          <div className="flex items-center space-x-3 mb-8 border-b border-slate-200/60 pb-4">
            <Calendar className="w-6 h-6 text-emerald-600" />
            <div>
              <h3 className="font-bold text-lg md:text-xl text-slate-900 font-serif">Jadwal Kegiatan Harian MDT</h3>
              <p className="text-xs text-slate-500">Rangkaian aktivitas rutin harian santri MDT Riyadlul Jannah</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { time: "03.30", activity: "Bangun Tidur, Sholat Tahajjud dan Witir" },
              { time: "05.00", activity: "Sholat Shubuh Berjemaah" },
              { time: "05.20", activity: "Mengaji Al-Qur'an & Tahfidz" },
              { time: "06.20", activity: "Sholat Dhuha Berjemaah" },
              { time: "06.30", activity: "Sarapan, Persiapan sekolah MDT & Formal" },
              { time: "07.00", activity: "Upacara Senin / Lalaran Nazhom" },
              { time: "07.30", activity: "Masuk KBM MDT Jam Ke-1" },
              { time: "08.15", activity: "KBM MDT Jam Ke-2" },
              { time: "09.00", activity: "KBM Formal MTs & SMAT" },
              { time: "13.00", activity: "Sholat Dhuhur Berjemaah" },
              { time: "15.15", activity: "Sholat Ashar Berjemaah" },
              { time: "16.00", activity: "Kegiatan MDT Sesuai Jadwal" },
              { time: "17.00", activity: "Istirahat, Makan & Mandi" },
              { time: "18.00", activity: "Sholat Maghrib Berjemaah" },
              { time: "18.20", activity: "Mengaji Al-Qur'an & Tahfidz" },
              { time: "19.30", activity: "Sholat Isya' Berjemaah" },
              { time: "20.00", activity: "Jam Belajar Malam" },
              { time: "21.00", activity: "Jam Belajar Tambahan" },
              { time: "22.00", activity: "Istirahat Tidur" }
            ].map((item, index) => (
              <div 
                key={index} 
                className="flex items-center space-x-3.5 bg-white p-3.5 rounded-xl border border-slate-100 shadow-2xs hover:border-emerald-100 transition-colors"
              >
                <div className="px-2.5 py-1 bg-emerald-50 text-emerald-800 text-[11px] font-bold rounded-lg tracking-wider shrink-0 font-mono border border-emerald-100">
                  {item.time}
                </div>
                <div className="text-slate-700 text-xs sm:text-sm font-medium">
                  {item.activity}
                </div>
              </div>
            ))}
          </div>

          {/* Flyer Jadwal Pagi & Sore */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10 pt-8 border-t border-slate-200/60">
            <div className="bg-white border border-slate-150 rounded-2xl p-5 md:p-6 shadow-2xs hover:shadow-xs transition-shadow flex flex-col justify-between group/card">
              <div className="space-y-1 mb-5">
                <div className="flex items-center space-x-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
                  <h4 className="font-extrabold text-base md:text-lg text-slate-900 font-serif">
                    Jadwal MDT Pagi
                  </h4>
                </div>
                <p className="text-xs text-slate-500 font-light">
                  Poster infografis resmi untuk rincian kegiatan &amp; jadwal madrasah pagi hari.
                </p>
              </div>
              <div className="relative rounded-xl overflow-hidden border border-slate-100 bg-slate-50 group cursor-zoom-in">
                <img 
                  src={jadwalMdtPagi} 
                  alt="Jadwal MDT Pagi" 
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-slate-950/0 group-hover:bg-slate-950/5 transition-colors duration-350" />
              </div>
            </div>

            <div className="bg-white border border-slate-150 rounded-2xl p-5 md:p-6 shadow-2xs hover:shadow-xs transition-shadow flex flex-col justify-between group/card">
              <div className="space-y-1 mb-5">
                <div className="flex items-center space-x-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-orange-500 animate-pulse"></span>
                  <h4 className="font-extrabold text-base md:text-lg text-slate-900 font-serif">
                    Jadwal MDT Sore
                  </h4>
                </div>
                <p className="text-xs text-slate-500 font-light">
                  Poster infografis resmi untuk rincian kegiatan &amp; jadwal madrasah sore hari.
                </p>
              </div>
              <div className="relative rounded-xl overflow-hidden border border-slate-100 bg-slate-50 group cursor-zoom-in">
                <img 
                  src={jadwalMdtSore} 
                  alt="Jadwal MDT Sore" 
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-slate-950/0 group-hover:bg-slate-950/5 transition-colors duration-350" />
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
