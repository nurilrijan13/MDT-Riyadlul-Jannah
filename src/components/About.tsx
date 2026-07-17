/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { GraduationCap, User, BookOpen, Quote, ShieldCheck, Heart, Award } from 'lucide-react';
import developerPhoto from '../assets/images/developer_photo_professional_studio_1784270720143.jpg';

export default function About() {
  return (
    <div className="py-16 bg-[#FAF9F6] selection:bg-emerald-100 selection:text-emerald-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-1.5 px-3.5 py-1 bg-emerald-50 text-emerald-800 text-xs font-bold rounded-full uppercase tracking-widest border border-emerald-150">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Ujian Akhir Semester</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight font-serif">
            Tentang Kami <br />
            <span className="text-emerald-700 italic font-medium">Developer &amp; Kreator</span>
          </h2>
          <div className="w-20 h-1.5 bg-brand-green mx-auto rounded-full" />
          <p className="text-slate-600 text-sm md:text-base leading-relaxed font-light font-sans max-w-2xl mx-auto">
            Website ini dikembangkan sebagai wujud nyata penerapan teknologi informasi bisnis dalam pengabdian masyarakat dan pendidikan keagamaan.
          </p>
        </div>

        {/* Developer Bio Card with Multimodal Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch max-w-5xl mx-auto">
          
          {/* Image Column */}
          <div className="lg:col-span-5 flex justify-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative group w-full max-w-[320px] aspect-[3/4] bg-white p-3 border border-brand-divider shadow-md rounded-2xl overflow-hidden flex flex-col"
            >
              <div className="relative w-full h-full rounded-xl overflow-hidden bg-brand-cream border border-brand-divider/40">
                <img 
                  src={developerPhoto} 
                  alt="Ust. M. Nurul Alim (Wile Alim)" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60" />
              </div>
              <div className="pt-3 text-center">
                <h4 className="font-serif font-black text-brand-dark text-base">Ust. M. Nurul Alim (Wile Alim)</h4>
                <p className="text-[10px] font-sans uppercase tracking-widest text-brand-green font-bold mt-0.5">Staf Lembaga, Pendidik &amp; Developer</p>
              </div>
            </motion.div>
          </div>

          {/* Info Details Column */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white border border-brand-divider rounded-3xl p-8 md:p-10 shadow-sm space-y-6"
            >
              <div className="flex items-center space-x-2.5 pb-4 border-b border-slate-100">
                <div className="w-9 h-9 rounded-xl bg-emerald-50 flex items-center justify-center border border-emerald-100">
                  <User className="w-4 h-4 text-emerald-700" />
                </div>
                <div>
                  <h3 className="text-xs font-extrabold text-slate-400 uppercase tracking-widest font-sans">Identitas Akademik</h3>
                  <p className="text-sm font-bold text-slate-800 font-sans">STIE Ekadharma Indonesia</p>
                </div>
              </div>

              {/* Student Metadata Grid */}
              <div className="grid grid-cols-2 gap-4 text-sm font-sans">
                <div className="space-y-1">
                  <span className="text-[11px] uppercase tracking-wider text-slate-400 font-bold">Nama Lengkap &amp; Gelar</span>
                  <p className="font-bold text-slate-800 text-base">Ust. M. Nurul Alim (Wile Alim)</p>
                </div>
                <div className="space-y-1">
                  <span className="text-[11px] uppercase tracking-wider text-slate-400 font-bold">NIM</span>
                  <p className="font-bold text-slate-800 text-base font-mono">12250022</p>
                </div>
                <div className="space-y-1 pt-2">
                  <span className="text-[11px] uppercase tracking-wider text-slate-400 font-bold">Program Studi</span>
                  <p className="font-bold text-slate-800 text-base">Management</p>
                </div>
                <div className="space-y-1 pt-2">
                  <span className="text-[11px] uppercase tracking-wider text-slate-400 font-bold">Semester</span>
                  <p className="font-bold text-slate-800 text-base">2 (Dua)</p>
                </div>
              </div>

              {/* Course context */}
              <div className="bg-brand-cream/40 border border-brand-divider/40 rounded-xl p-4 text-xs text-brand-dark/85 leading-relaxed font-sans">
                <span className="font-extrabold text-brand-green uppercase tracking-widest text-[9px] block mb-1">Konteks Pembuatan</span>
                Website portal informasi ini dibuat sebagai tugas proyek mandiri untuk memenuhi **Ujian Akhir Semester (UAS) Mata Kuliah Aplikasi Komputer Bisnis** di Kampus **STIE Ekadharma Indonesia**.
              </div>
            </motion.div>
          </div>

        </div>

        {/* Message and Testimony Quote */}
        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-brand-green text-brand-cream rounded-3xl p-8 md:p-12 relative overflow-hidden shadow-md border border-brand-green/20"
          >
            <div className="absolute top-0 right-0 -mt-12 -mr-12 w-48 h-48 bg-white/5 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-6 -left-6 text-9xl text-white/5 font-serif select-none pointer-events-none leading-none">“</div>
            
            <div className="space-y-6 relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center border border-white/15">
                <Quote className="w-6 h-6 text-[#C4A484] animate-pulse-soft" />
              </div>
              
              <div className="space-y-4">
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-brand-gold">Pesan &amp; Kesan Mahasiswa</span>
                <p className="font-serif italic leading-relaxed text-base md:text-xl text-emerald-50 text-left pl-2 border-l-2 border-brand-gold/40">
                  "Alhamdulillah dengan mengikuti kelas ini, akhirnya saya bisa dan punya Website untuk Lembaga tempat saya mengabdi, rasanya sangat senang dan bangga, semoga WEB ini bisa terus update, bertahan lama dan bisa memberikan nilai plus di lembaga yang ada saya didalamnya."
                </p>
              </div>

              <div className="pt-6 border-t border-white/10 mt-6 flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-brand-gold/10 border border-white/20 flex items-center justify-center text-[#C4A484]">
                  <Heart className="w-5 h-5 fill-current" />
                </div>
                <div>
                  <h5 className="font-extrabold text-sm text-white font-serif leading-none">Ust. M. Nurul Alim (Wile Alim)</h5>
                  <p className="text-[10px] uppercase font-sans tracking-widest text-brand-gold mt-1 font-bold">Staf Lembaga, Pendidik &amp; Mahasiswa STIE Ekadharma</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Institution Info Block */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto pt-8 border-t border-brand-divider/40 font-sans">
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <ShieldCheck className="w-5 h-5 text-emerald-700" />
              <h4 className="font-extrabold text-slate-800 text-sm uppercase tracking-wider">Aplikasi Komputer Bisnis</h4>
            </div>
            <p className="text-xs text-slate-500 leading-relaxed font-light">
              Mata kuliah yang mengintegrasikan teori manajemen bisnis dengan keahlian praktis teknologi informasi, membekali mahasiswa untuk menghadirkan solusi digital yang relevan dan solutif di era industri modern.
            </p>
          </div>
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <Award className="w-5 h-5 text-emerald-700" />
              <h4 className="font-extrabold text-slate-800 text-sm uppercase tracking-wider">STIE Ekadharma Indonesia</h4>
            </div>
            <p className="text-xs text-slate-500 leading-relaxed font-light">
              Sekolah Tinggi Ilmu Ekonomi yang berkomitmen mencetak sumber daya manusia unggul, berintegritas tinggi, berjiwa wirausaha, serta menguasai kompetensi manajemen yang tangguh di kancah nasional maupun global.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
