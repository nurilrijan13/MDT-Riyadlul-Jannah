/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { BookOpen, GraduationCap, HeartHandshake, Users, Check, Clock, Calendar, ShieldCheck, HelpCircle } from 'lucide-react';
import { PROGRAMS, SCHOOL_PROFILE } from '../data';
import { Program } from '../types';

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

        {/* Academic Calendar or Study Schedule Visualization */}
        <div className="bg-slate-50 border border-slate-150 rounded-2xl p-6 md:p-8 shadow-xs">
          <div className="flex items-center space-x-3 mb-6">
            <Calendar className="w-6 h-6 text-emerald-600" />
            <div>
              <h3 className="font-bold text-lg md:text-xl text-slate-900">Jadwal Belajar Harian Madrasah</h3>
              <p className="text-xs text-slate-500">Aktivitas rutin santri MDT Riyadlul Jannah setiap Senin s.d. Jumat</p>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full text-sm divide-y divide-slate-200">
              <thead className="bg-emerald-900 text-white rounded-t-lg">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold">Waktu (WIB)</th>
                  <th className="px-4 py-3 text-left font-semibold">Kegiatan</th>
                  <th className="px-4 py-3 text-left font-semibold">Tujuan / Fokus Pembiasaan</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-slate-100">
                <tr>
                  <td className="px-4 py-3 font-semibold text-emerald-800">13.45 - 14.00</td>
                  <td className="px-4 py-3 font-medium text-slate-700">Penyambutan & Persiapan Masuk</td>
                  <td className="px-4 py-3 text-slate-500">Pembiasaan 5S (Senyum, Sapa, Salam, Sopan, Santun)</td>
                </tr>
                <tr className="bg-slate-50/50">
                  <td className="px-4 py-3 font-semibold text-emerald-800">14.00 - 14.30</td>
                  <td className="px-4 py-3 font-medium text-slate-700">Apersepasi, Pembacaan Asmaul Husna & Juz Amma</td>
                  <td className="px-4 py-3 text-slate-500">Membentuk kebiasaan membaca Quran sebelum belajar</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-semibold text-emerald-800">14.30 - 15.15</td>
                  <td className="px-4 py-3 font-medium text-slate-700">Pelajaran Jam Ke-1 (Kitab Dirasah)</td>
                  <td className="px-4 py-3 text-slate-500">Sesuai kurikulum (Fikih, Aqidah, Hadits, SKI, dsb.)</td>
                </tr>
                <tr className="bg-slate-50/50">
                  <td className="px-4 py-3 font-semibold text-emerald-800">15.15 - 15.45</td>
                  <td className="px-4 py-3 font-medium text-slate-700">Istirahat & Sholat Ashar Berjamaah</td>
                  <td className="px-4 py-3 text-slate-500">Bimbingan tata cara adzan, wudhu, dan sholat fardhu berjamaah</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-semibold text-emerald-800">15.45 - 16.30</td>
                  <td className="px-4 py-3 font-medium text-slate-700">Pelajaran Jam Ke-2 & Setoran Hafalan</td>
                  <td className="px-4 py-3 text-slate-500">Setoran ziladah (hafalan baru) atau muraja'ah bersama ustadz/ah</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
}
