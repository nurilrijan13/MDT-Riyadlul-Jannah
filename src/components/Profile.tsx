/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { 
  Award, 
  BookOpen, 
  Quote, 
  Users, 
  Shield, 
  GraduationCap, 
  Heart, 
  Sparkles, 
  Clock, 
  Calendar, 
  ArrowRight,
  Bookmark,
  CheckCircle2
} from 'lucide-react';
import { SCHOOL_PROFILE, TEACHERS } from '../data';

// Helper function to resolve core values icons dynamically
const getIcon = (iconName: string) => {
  switch (iconName) {
    case 'Heart':
      return <Heart className="w-5 h-5 md:w-6 h-6 text-emerald-600" />;
    case 'Sparkles':
      return <Sparkles className="w-5 h-5 md:w-6 h-6 text-emerald-600" />;
    case 'BookOpen':
      return <BookOpen className="w-5 h-5 md:w-6 h-6 text-emerald-600" />;
    case 'Clock':
      return <Clock className="w-5 h-5 md:w-6 h-6 text-emerald-600" />;
    case 'Users':
      return <Users className="w-5 h-5 md:w-6 h-6 text-emerald-600" />;
    default:
      return <Award className="w-5 h-5 md:w-6 h-6 text-emerald-600" />;
  }
};

export default function Profile() {
  const historyParagraphs = SCHOOL_PROFILE.detailedHistory || [SCHOOL_PROFILE.history];
  const coreValues = SCHOOL_PROFILE.coreValues || [];

  return (
    <div className="py-16 bg-[#FAF9F6] selection:bg-emerald-100 selection:text-emerald-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        
        {/* Title Section with Elegant Typography */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-1.5 px-3.5 py-1 bg-emerald-50 text-emerald-800 text-xs font-bold rounded-full uppercase tracking-widest border border-emerald-150">
            <Award className="w-3.5 h-3.5" />
            <span>Profil Madrasah</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight font-serif">
            Mengenal Lebih Dekat <br />
            <span className="text-emerald-700 italic font-medium">MDT Riyadlul Jannah</span>
          </h2>
          <div className="w-20 h-1.5 bg-brand-green mx-auto rounded-full" />
          <p className="text-slate-600 text-sm md:text-base leading-relaxed font-light font-sans max-w-2xl mx-auto">
            Lembaga pendidikan keagamaan formal di Pasir Gombong, Cikarang Utara yang memadukan keutamaan adab, kebenaran tajwid Al-Qur'an, dan pondasi kokoh ilmu syariat.
          </p>
        </div>

        {/* Vision & Mission Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Vision Box */}
          <div className="lg:col-span-5 bg-gradient-to-br from-emerald-800 to-emerald-950 text-white rounded-3xl p-8 md:p-10 shadow-xl flex flex-col justify-between relative overflow-hidden border border-emerald-800/20">
            <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-white/5 rounded-full blur-2xl" />
            
            <div className="space-y-6 relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center border border-white/15">
                <Quote className="w-6 h-6 text-emerald-300 animate-pulse-subtle" />
              </div>
              <div className="space-y-3">
                <span className="text-xs font-extrabold uppercase tracking-widest text-[#C4A484] block">Visi Kami</span>
                <p className="font-serif text-right text-emerald-200/50 text-2xl my-2 tracking-wide font-arabic">وَفَوْقَ كُلِّ ذِي عِلْمٍ عَلِيمٌ</p>
                <p className="text-xl md:text-2xl font-bold leading-relaxed tracking-tight font-serif text-emerald-50">
                  "{SCHOOL_PROFILE.vision}"
                </p>
              </div>
            </div>

            <div className="pt-8 border-t border-emerald-700/40 mt-8 relative z-10">
              <p className="text-[10px] text-emerald-300 uppercase tracking-widest font-extrabold">
                Kepala Madrasah
              </p>
              <p className="font-bold text-white text-base mt-1 font-serif">
                {SCHOOL_PROFILE.headmaster}
              </p>
            </div>
          </div>

          {/* Mission Box */}
          <div className="lg:col-span-7 bg-white border border-brand-divider rounded-3xl p-8 md:p-10 shadow-sm flex flex-col justify-between">
            <div className="space-y-6">
              <div className="flex items-center space-x-2.5">
                <div className="w-9 h-9 rounded-xl bg-emerald-50 flex items-center justify-center border border-emerald-100">
                  <BookOpen className="w-4 h-4 text-emerald-700" />
                </div>
                <h3 className="text-lg font-extrabold text-slate-800 uppercase tracking-widest font-sans">Misi Utama Kami</h3>
              </div>

              <div className="space-y-4">
                {SCHOOL_PROFILE.mission.map((item, index) => (
                  <div key={index} className="flex items-start space-x-4 group">
                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-100 font-extrabold text-xs shrink-0 mt-0.5 group-hover:bg-emerald-700 group-hover:text-white group-hover:border-emerald-700 transition-all duration-300">
                      {index + 1}
                    </span>
                    <p className="text-slate-600 text-sm md:text-base leading-relaxed font-sans font-light group-hover:text-slate-900 transition-colors">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-slate-100 mt-6 text-xs text-slate-400 italic">
              "Menyertai tumbuh kembang anak-anak dengan fondasi syariat yang kokoh."
            </div>
          </div>
        </div>

        {/* Section: Core Values / Nilai Utama (NEW) */}
        {coreValues.length > 0 && (
          <div className="space-y-10">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <div className="inline-flex items-center space-x-1 px-2.5 py-0.5 bg-emerald-50 text-emerald-800 text-[10px] uppercase font-bold tracking-widest rounded-md border border-emerald-100/50">
                <Bookmark className="w-3 h-3" />
                <span>Lima Pilar Karakter</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900 font-serif">Nilai-Nilai Utama Santri</h3>
              <p className="text-slate-600 text-xs md:text-sm font-light max-w-lg mx-auto">
                Karakteristik unggulan yang ditanamkan dalam sanubari setiap santri MDT Riyadlul Jannah selama menempuh masa tarbiyah.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
              {coreValues.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white border border-slate-150 rounded-2xl p-6 shadow-xs hover:shadow-md hover:border-emerald-500/30 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
                >
                  <div className="space-y-4">
                    {/* Icon Header */}
                    <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center border border-emerald-100/60 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300 shrink-0">
                      {getIcon(value.icon)}
                    </div>

                    <div className="space-y-1.5">
                      <p className="font-serif text-emerald-800 text-lg tracking-wide font-medium font-arabic text-left opacity-90">
                        {value.subtitle}
                      </p>
                      <h4 className="font-extrabold text-slate-800 text-sm md:text-base leading-tight group-hover:text-emerald-700 transition-colors">
                        {value.title}
                      </h4>
                    </div>

                    <p className="text-slate-500 text-xs leading-relaxed font-light">
                      {value.description}
                    </p>
                  </div>

                  {/* Decorative corner element */}
                  <div className="absolute right-0 bottom-0 w-8 h-8 bg-emerald-500/5 rounded-tl-2xl group-hover:bg-emerald-500/10 transition-colors" />
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* School History with timeline layout */}
        <div className="space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900 font-serif">Sejarah Perjalanan Kami</h3>
            <p className="text-slate-600 text-xs md:text-sm font-light">
              MDT Riyadlul Jannah tumbuh dan mengabdi dari masa ke masa mendidik tunas bangsa di wilayah Bekasi.
            </p>
          </div>

          <div className="bg-white border border-brand-divider rounded-3xl p-8 md:p-12 shadow-sm relative overflow-hidden">
            <div className="absolute -left-12 -bottom-12 w-48 h-48 bg-emerald-500/5 rounded-full" />
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start relative z-10">
              
              {/* Vertical Timeline column */}
              <div className="lg:col-span-7 space-y-8">
                <div className="relative border-l-2 border-emerald-100 pl-6 space-y-8 ml-2">
                  
                  {historyParagraphs.map((para, idx) => {
                    // Let's create beautiful markers for the timeline
                    const markers = [
                      { label: "1999", title: "Inisiasi & Latar Belakang Pendirian" },
                      { label: "Awal", title: "Masa-Masa Perjuangan & Kesederhanaan" },
                      { label: "Fasilitas", title: "Pembenahan Kelas & Legalitas Formal" },
                      { label: "Masa Kini", title: "Melangkah Pasti Menuju Masa Depan" }
                    ];
                    
                    const marker = markers[idx] || { label: `Fase ${idx+1}`, title: "Langkah Pengabdian" };
                    
                    return (
                      <div key={idx} className="relative space-y-1">
                        {/* Timeline Bullet */}
                        <span className="absolute -left-[31px] top-1.5 flex items-center justify-center w-4.5 h-4.5 rounded-full bg-emerald-100 border-2 border-emerald-600 text-emerald-600 font-bold shrink-0">
                          <span className="w-1.5 h-1.5 bg-emerald-600 rounded-full" />
                        </span>
                        
                        <div className="inline-block px-2 py-0.5 bg-emerald-50 border border-emerald-100 text-emerald-800 text-[10px] font-bold uppercase rounded">
                          {marker.label}
                        </div>
                        
                        <h4 className="text-sm md:text-base font-bold text-slate-800">
                          {marker.title}
                        </h4>
                        
                        <p className="text-slate-600 text-xs md:text-sm leading-relaxed font-light pt-1">
                          {para}
                        </p>
                      </div>
                    );
                  })}

                </div>
              </div>

              {/* Dynamic sidebar statistics / registration reminder */}
              <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-6">
                
                {/* Visual Card 1 */}
                <div className="bg-emerald-50 border border-emerald-100 p-8 rounded-2xl text-center space-y-4 relative">
                  <div className="w-16 h-16 bg-emerald-700 rounded-2xl flex items-center justify-center text-white mx-auto shadow-md">
                    <Shield className="w-8 h-8 text-emerald-100" />
                  </div>
                  <h4 className="text-lg font-bold text-emerald-900 font-serif">Kurikulum Kemenag RI Resmi</h4>
                  <p className="text-xs text-emerald-800/80 leading-relaxed font-light">
                    MDT Riyadlul Jannah beroperasi penuh di bawah pembinaan Direktorat Pendidikan Diniyah dan Pondok Pesantren Kementerian Agama Republik Indonesia, menjamin ijazah resmi santri diakui kelayakannya.
                  </p>
                  <div className="px-3.5 py-1 bg-emerald-100 text-emerald-800 text-[10px] uppercase font-bold tracking-widest rounded-full inline-block border border-emerald-200">
                    Kementerian Agama Terdaftar
                  </div>
                </div>

                {/* Stat Box Row */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-slate-50 p-5 rounded-2xl border border-slate-150 text-center">
                    <div className="font-extrabold text-emerald-850 text-2xl font-serif">TA {SCHOOL_PROFILE.establishedYear}</div>
                    <div className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold mt-1">Tahun Berdiri</div>
                  </div>
                  <div className="bg-slate-50 p-5 rounded-2xl border border-slate-150 text-center">
                    <div className="font-extrabold text-emerald-850 text-2xl font-serif">Ratusan</div>
                    <div className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold mt-1">Alumni Tersebar</div>
                  </div>
                </div>

                {/* Prospective Parent Call to Action */}
                <div className="bg-gradient-to-r from-[#FAF9F6] to-[#FAF9F6]/50 border border-brand-divider/80 p-6 rounded-2xl space-y-3">
                  <h5 className="font-extrabold text-slate-850 text-xs uppercase tracking-widest">Informasi untuk Orang Tua</h5>
                  <p className="text-[11px] text-slate-600 leading-relaxed font-light">
                    Ingin menyekolahkan putra-putri Anda? Untuk informasi lebih lengkap mengenai ketersediaan kelas, rincian kurikulum, atau administrasi, silakan hubungi kami atau kunjungi langsung sekretariat madrasah.
                  </p>
                  <div className="flex items-center space-x-2 text-emerald-700 text-xs font-bold pt-1">
                    <span>Hubungi Kontak Kami</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>

              </div>

            </div>
          </div>
        </div>

        {/* Teachers Section */}
        <div className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900 font-serif">Dewan Asatidz &amp; Tenaga Pendidikan</h3>
            <p className="text-slate-600 text-xs md:text-sm font-light">
              Dibersamai oleh guru-guru yang berdedikasi tinggi, amanah, berpengalaman santri, dan mumpuni dalam mendidik moral serta keagamaan putra-putri kita.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {TEACHERS.map((teacher, index) => (
              <motion.div
                key={teacher.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white border border-slate-150 rounded-2xl p-5 shadow-xs hover:shadow-md transition-all duration-300 text-center flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  {/* Avatar wrapper with zoom effect */}
                  <div className="w-24 h-24 mx-auto rounded-full overflow-hidden border-2 border-emerald-100 shadow-sm relative bg-slate-50">
                    <img 
                      src={teacher.avatar} 
                      alt={teacher.name} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-slate-800 text-sm leading-tight group-hover:text-emerald-700 transition-colors font-serif">
                      {teacher.name}
                    </h4>
                    {teacher.role && (
                      <p className="text-emerald-700 text-[11px] font-bold mt-1 uppercase tracking-wider">
                        {teacher.role}
                      </p>
                    )}
                  </div>
                </div>

                {(teacher.education || teacher.subject) && (
                  <div className="mt-5 pt-3 border-t border-slate-100 text-[11px] text-slate-500 space-y-1">
                    {teacher.education && (
                      <div className="flex items-center justify-center space-x-1">
                        <GraduationCap className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                        <span className="truncate max-w-xs">{teacher.education}</span>
                      </div>
                    )}
                    {teacher.subject && (
                      <div className="font-bold text-emerald-800 bg-emerald-50 rounded-md py-0.5 px-2 mt-2 inline-block text-[10px]">
                        Spesialisasi: {teacher.subject}
                      </div>
                    )}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}

