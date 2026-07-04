/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Award, BookOpen, CheckCircle, Quote, Users, Shield, AwardIcon, GraduationCap } from 'lucide-react';
import { SCHOOL_PROFILE, TEACHERS } from '../data';

export default function Profile() {
  return (
    <div className="py-16 bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        
        {/* Title Section */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 bg-emerald-50 text-emerald-700 text-xs font-semibold rounded-full uppercase tracking-wider">
            <Award className="w-3.5 h-3.5" />
            <span>Profil Madrasah</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            Mengenal Lebih Dekat <br />
            <span className="text-emerald-600 font-semibold">MDT Riyadlul Jannah</span>
          </h2>
          <p className="text-slate-600 text-sm md:text-base font-light">
            Lembaga pendidikan keagamaan yang mengutamakan keluhuran akhlak, kepasihan membaca Al-Qur'an, dan penguasaan dasar-dasar syariat Islam.
          </p>
        </div>

        {/* Vision & Mission Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Vision Box */}
          <div className="lg:col-span-5 bg-gradient-to-br from-emerald-800 to-emerald-950 text-white rounded-3xl p-8 shadow-xl flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-white/5 rounded-full blur-2xl" />
            
            <div className="space-y-6">
              <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center">
                <Quote className="w-6 h-6 text-emerald-300" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xs font-bold uppercase tracking-widest text-emerald-300">Visi Kami</h3>
                <p className="font-arabic text-right text-emerald-200/40 text-2xl my-2">رَأْسُ الْحِكْمَةِ مَخَافَةُ اللّٰهِ</p>
                <p className="text-xl md:text-2xl font-bold leading-snug tracking-tight">
                  "{SCHOOL_PROFILE.vision}"
                </p>
              </div>
            </div>

            <div className="pt-8 border-t border-emerald-700/40 mt-6">
              <p className="text-xs text-emerald-200/80 uppercase tracking-widest font-semibold">
                Kepala Madrasah
              </p>
              <p className="font-semibold text-white text-sm mt-1">
                {SCHOOL_PROFILE.headmaster}
              </p>
            </div>
          </div>

          {/* Mission Box */}
          <div className="lg:col-span-7 bg-white border border-slate-100 rounded-3xl p-8 shadow-md flex flex-col justify-between">
            <div className="space-y-6">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-lg bg-emerald-100 flex items-center justify-center">
                  <BookOpen className="w-4 h-4 text-emerald-700" />
                </div>
                <h3 className="text-lg font-bold text-slate-800 uppercase tracking-wider">Misi Utama Kami</h3>
              </div>

              <div className="space-y-4">
                {SCHOOL_PROFILE.mission.map((item, index) => (
                  <div key={index} className="flex items-start space-x-3 group">
                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-emerald-50 text-emerald-600 font-bold text-xs shrink-0 mt-0.5 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                      {index + 1}
                    </span>
                    <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* School History */}
        <div className="bg-white border border-slate-100 rounded-3xl p-8 md:p-12 shadow-sm relative overflow-hidden">
          <div className="absolute -left-12 -bottom-12 w-48 h-48 bg-emerald-500/5 rounded-full" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-7 space-y-4">
              <h3 className="text-2xl font-bold text-slate-800">Sejarah Ringkas Pendirian</h3>
              <div className="w-16 h-1 bg-emerald-600 rounded-full" />
              <p className="text-slate-600 text-sm md:text-base leading-relaxed font-light">
                {SCHOOL_PROFILE.history}
              </p>
              
              <div className="grid grid-cols-2 gap-4 pt-4 text-slate-700">
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-100/60">
                  <div className="font-bold text-emerald-700 text-lg">Tahun {SCHOOL_PROFILE.establishedYear}</div>
                  <div className="text-xs text-slate-500 mt-1">Mulai berkiprah di Pasir Gombong</div>
                </div>
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-100/60">
                  <div className="font-bold text-emerald-700 text-lg">Izin Operasional</div>
                  <div className="text-xs text-slate-500 mt-1">Terdaftar resmi di Kementerian Agama RI</div>
                </div>
              </div>
            </div>

            {/* Illustration block */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="bg-emerald-50 border border-emerald-100 p-8 rounded-2xl max-w-sm text-center space-y-4 relative">
                <div className="w-16 h-16 bg-emerald-600 rounded-2xl flex items-center justify-center text-white mx-auto shadow-md">
                  <Shield className="w-8 h-8" />
                </div>
                <h4 className="text-lg font-bold text-emerald-900">Pendidikan Berizin & Terstruktur</h4>
                <p className="text-xs text-emerald-800/80 leading-relaxed">
                  Seluruh materi ajar di MDT Riyadlul Jannah disinkronisasikan dengan standar kurikulum Direktorat Pendidikan Diniyah dan Pondok Pesantren Kementerian Agama RI.
                </p>
                <div className="px-3 py-1 bg-emerald-100 text-emerald-800 text-[10px] uppercase font-bold tracking-widest rounded-full inline-block">
                  Kemenag Terakreditasi
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Teachers Section */}
        <div className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900">Asatidzah & Tenaga Pendidik</h3>
            <p className="text-slate-600 text-xs md:text-sm font-light">
              Dibersamai oleh guru-guru yang berdedikasi tinggi, amanah, dan kompeten dalam bidang keilmuan kepesantrenan maupun akademis.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {TEACHERS.map((teacher, index) => (
              <motion.div
                key={teacher.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white border border-slate-100 rounded-2xl p-5 shadow-xs hover:shadow-md transition-all duration-300 text-center flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  {/* Avatar wrapper with zoom effect */}
                  <div className="w-24 h-24 mx-auto rounded-full overflow-hidden border-2 border-emerald-100 shadow-sm relative">
                    <img 
                      src={teacher.avatar} 
                      alt={teacher.name} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800 text-sm leading-tight group-hover:text-emerald-700 transition-colors">
                      {teacher.name}
                    </h4>
                    <p className="text-emerald-600 text-xs font-semibold mt-1">
                      {teacher.role}
                    </p>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-50 text-[11px] text-slate-500 space-y-1">
                  {teacher.education && (
                    <div className="flex items-center justify-center space-x-1">
                      <GraduationCap className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                      <span className="truncate max-w-xs">{teacher.education}</span>
                    </div>
                  )}
                  {teacher.subject && (
                    <div className="font-medium text-emerald-850 bg-emerald-50 rounded-md py-0.5 px-2 mt-2 inline-block">
                      Mata Pelajaran: {teacher.subject}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
