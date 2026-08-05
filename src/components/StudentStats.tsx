/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Users, GraduationCap, UserCheck, Sparkles, School, PieChart, Info } from 'lucide-react';
import { STUDENT_STATS } from '../data';
import ShareButton from './ShareButton';

interface StudentStatsProps {
  className?: string;
  compact?: boolean;
}

export default function StudentStats({ className = '', compact = false }: StudentStatsProps) {
  const [filter, setFilter] = useState<'All' | 'Awaliyah' | 'Wustho'>('All');

  const filteredStats = STUDENT_STATS.filter(s => {
    if (filter === 'All') return true;
    return s.category === filter;
  });

  const totalOverall = STUDENT_STATS.reduce((acc, curr) => acc + curr.total, 0);
  const totalPutra = STUDENT_STATS.reduce((acc, curr) => acc + curr.putra, 0);
  const totalPutri = STUDENT_STATS.reduce((acc, curr) => acc + curr.putri, 0);

  const awaliyahTotal = STUDENT_STATS.filter(s => s.category === 'Awaliyah').reduce((acc, curr) => acc + curr.total, 0);
  const wusthoTotal = STUDENT_STATS.filter(s => s.category === 'Wustho').reduce((acc, curr) => acc + curr.total, 0);

  const shareText = `Data Jumlah Murid MDT Riyadlul Jannah:\n\n` +
    STUDENT_STATS.map(s => `${s.level} : ${s.total} santri (Putra: ${s.putra}, Putri: ${s.putri})`).join('\n') +
    `\n\nTotal Santri: ${totalOverall} (Putra: ${totalPutra}, Putri: ${totalPutri})`;

  return (
    <div className={`bg-white border border-brand-divider rounded-3xl p-6 sm:p-8 shadow-sm space-y-8 font-sans ${className}`}>
      
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100">
        <div className="space-y-1.5">
          <div className="inline-flex items-center space-x-2 px-3 py-1 bg-emerald-50 text-emerald-800 text-[10px] sm:text-xs font-bold rounded-full uppercase tracking-wider border border-emerald-100">
            <Users className="w-3.5 h-3.5 text-emerald-600" />
            <span>Data Statistik Santri</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-serif tracking-tight">
            Jumlah Murid MDT Riyadlul Jannah
          </h3>
          <p className="text-xs sm:text-sm text-slate-500 font-light">
            Rincian sebaran santri putra dan putri berdasarkan jenjang pendidikan Awaliyah dan Wustho.
          </p>
        </div>

        <div className="flex items-center gap-2 self-start sm:self-center">
          <ShareButton
            variant="outline"
            label="Bagikan Data"
            shareData={{
              title: "Data Murid MDT Riyadlul Jannah",
              text: shareText,
              category: "Statistik Santri"
            }}
          />
        </div>
      </div>

      {/* Summary KPI Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Total Overall */}
        <div className="bg-gradient-to-br from-emerald-900 to-emerald-950 text-white rounded-2xl p-5 shadow-sm border border-emerald-800/40 relative overflow-hidden">
          <div className="absolute top-0 right-0 -mt-4 -mr-4 w-20 h-20 bg-white/5 rounded-full blur-xl pointer-events-none" />
          <div className="flex items-center justify-between">
            <span className="text-[10px] uppercase font-bold text-amber-300 tracking-wider">Total Santri</span>
            <GraduationCap className="w-5 h-5 text-emerald-300 opacity-80" />
          </div>
          <p className="text-3xl sm:text-4xl font-extrabold font-serif mt-2 text-white">{totalOverall}</p>
          <p className="text-[11px] text-emerald-200/80 mt-1 font-light">
            Awaliyah: {awaliyahTotal} | Wustho: {wusthoTotal}
          </p>
        </div>

        {/* Total Putra */}
        <div className="bg-blue-50/70 border border-blue-100/80 rounded-2xl p-5">
          <div className="flex items-center justify-between">
            <span className="text-[10px] uppercase font-bold text-blue-700 tracking-wider">Santri Putra</span>
            <UserCheck className="w-5 h-5 text-blue-600" />
          </div>
          <p className="text-3xl sm:text-4xl font-extrabold font-serif text-blue-900 mt-2">{totalPutra}</p>
          <div className="w-full bg-blue-200/60 h-1.5 rounded-full mt-3 overflow-hidden">
            <div 
              className="bg-blue-600 h-full rounded-full" 
              style={{ width: `${Math.round((totalPutra / totalOverall) * 100)}%` }}
            />
          </div>
          <p className="text-[10px] text-blue-700 font-semibold mt-1.5 text-right">
            {Math.round((totalPutra / totalOverall) * 100)}% dari total santri
          </p>
        </div>

        {/* Total Putri */}
        <div className="bg-rose-50/70 border border-rose-100/80 rounded-2xl p-5">
          <div className="flex items-center justify-between">
            <span className="text-[10px] uppercase font-bold text-rose-700 tracking-wider">Santri Putri</span>
            <UserCheck className="w-5 h-5 text-rose-600" />
          </div>
          <p className="text-3xl sm:text-4xl font-extrabold font-serif text-rose-900 mt-2">{totalPutri}</p>
          <div className="w-full bg-rose-200/60 h-1.5 rounded-full mt-3 overflow-hidden">
            <div 
              className="bg-rose-600 h-full rounded-full" 
              style={{ width: `${Math.round((totalPutri / totalOverall) * 100)}%` }}
            />
          </div>
          <p className="text-[10px] text-rose-700 font-semibold mt-1.5 text-right">
            {Math.round((totalPutri / totalOverall) * 100)}% dari total santri
          </p>
        </div>

        {/* Ratio / Overview */}
        <div className="bg-amber-50/60 border border-amber-100/80 rounded-2xl p-5 flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <span className="text-[10px] uppercase font-bold text-amber-800 tracking-wider">Rasio Gender</span>
            <PieChart className="w-5 h-5 text-amber-600" />
          </div>
          <div className="my-1">
            <p className="text-lg font-bold text-slate-800 font-serif">46% Putra : 54% Putri</p>
            <p className="text-[11px] text-slate-600 font-light mt-0.5 leading-snug">
              Proposi seimbang dalam suasana belajar beradab dan terpisah.
            </p>
          </div>
          <div className="inline-flex items-center gap-1 text-[10px] font-bold text-amber-800">
            <Sparkles className="w-3 h-3 text-amber-600" />
            <span>Tersebar di 5 Rombel Class</span>
          </div>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center justify-between pt-2">
        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Rincian Per Kelas</p>
        <div className="inline-flex bg-slate-100 p-1 rounded-xl border border-slate-200/60 text-xs font-semibold">
          <button
            onClick={() => setFilter('All')}
            className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
              filter === 'All' ? 'bg-white text-emerald-800 shadow-3xs font-extrabold' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Semua Kelas ({STUDENT_STATS.length})
          </button>
          <button
            onClick={() => setFilter('Awaliyah')}
            className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
              filter === 'Awaliyah' ? 'bg-white text-emerald-800 shadow-3xs font-extrabold' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Awaliyah (3)
          </button>
          <button
            onClick={() => setFilter('Wustho')}
            className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
              filter === 'Wustho' ? 'bg-white text-emerald-800 shadow-3xs font-extrabold' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Wustho (2)
          </button>
        </div>
      </div>

      {/* Class Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredStats.map((item, idx) => {
          const putraPercent = Math.round((item.putra / (item.putra + item.putri)) * 100) || 0;
          const putriPercent = 100 - putraPercent;

          return (
            <motion.div
              key={item.level}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: idx * 0.05 }}
              className="bg-slate-50/80 border border-slate-200/70 rounded-2xl p-5 hover:border-emerald-500/40 hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Level Title & Total Badge */}
                <div className="flex items-center justify-between pb-3 border-b border-slate-200/60">
                  <div className="flex items-center space-x-2.5">
                    <div className="w-8 h-8 rounded-xl bg-emerald-100/70 border border-emerald-200/60 text-emerald-800 flex items-center justify-center font-bold text-xs shrink-0 font-mono">
                      {idx + 1}
                    </div>
                    <div>
                      <h4 className="font-extrabold text-slate-900 text-base font-serif group-hover:text-emerald-800 transition-colors">
                        {item.level}
                      </h4>
                      <span className="text-[10px] uppercase font-mono font-bold tracking-wider text-emerald-700 block">
                        Jenjang {item.category}
                      </span>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-2xl font-black font-serif text-slate-900">{item.total}</span>
                    <span className="text-[10px] font-semibold text-slate-400 block uppercase">Santri</span>
                  </div>
                </div>

                {/* Male / Female breakdown */}
                <div className="grid grid-cols-2 gap-3 my-4">
                  <div className="bg-white border border-blue-100 rounded-xl p-3 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] uppercase font-bold text-blue-600 block">Putra</span>
                      <span className="text-lg font-bold font-serif text-blue-950">{item.putra}</span>
                    </div>
                    <div className="w-7 h-7 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center text-xs font-bold">
                      L
                    </div>
                  </div>

                  <div className="bg-white border border-rose-100 rounded-xl p-3 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] uppercase font-bold text-rose-600 block">Putri</span>
                      <span className="text-lg font-bold font-serif text-rose-950">{item.putri}</span>
                    </div>
                    <div className="w-7 h-7 rounded-full bg-rose-50 text-rose-600 flex items-center justify-center text-xs font-bold">
                      P
                    </div>
                  </div>
                </div>

                {/* Progress bar visual ratio */}
                <div className="space-y-1">
                  <div className="flex justify-between text-[10px] font-semibold text-slate-500">
                    <span className="text-blue-700">Putra {putraPercent}%</span>
                    <span className="text-rose-700">Putri {putriPercent}%</span>
                  </div>
                  <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden flex">
                    <div 
                      className="bg-blue-500 h-full transition-all duration-500" 
                      style={{ width: `${putraPercent}%` }} 
                      title={`Putra: ${item.putra} (${putraPercent}%)`}
                    />
                    <div 
                      className="bg-rose-400 h-full transition-all duration-500" 
                      style={{ width: `${putriPercent}%` }} 
                      title={`Putri: ${item.putri} (${putriPercent}%)`}
                    />
                  </div>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-200/50 flex items-center justify-between text-[11px] text-slate-400">
                <span className="font-mono text-[10px]">TA 2025/2026</span>
                <span className="text-emerald-700 font-bold">Aktif Terdaftar</span>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Footnote Info */}
      <div className="bg-slate-50 border border-slate-200/60 rounded-2xl p-4 flex items-start space-x-3 text-xs text-slate-600">
        <Info className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
        <p className="leading-relaxed font-light">
          <strong>Catatan:</strong> Data jumlah murid terverifikasi secara berkala oleh sekretariat MDT Riyadlul Jannah Pasir Gombong. Setiap rombel diselenggarakan dalam ruangan dan jadwal belajar kondusif terpisah untuk santri putra dan putri.
        </p>
      </div>

    </div>
  );
}
