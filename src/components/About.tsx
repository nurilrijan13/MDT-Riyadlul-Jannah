/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Building2, 
  BookOpen, 
  Award, 
  ShieldCheck, 
  HeartHandshake, 
  Users, 
  CheckCircle2, 
  Sparkles, 
  GraduationCap, 
  Compass, 
  MapPin, 
  Phone,
  FileCheck,
  ZoomIn,
  X
} from 'lucide-react';
import fotoGedungRJ from '../assets/images/fotogedungrj.jpeg';
import bagianDepanRJ from '../assets/images/bagian depan rj.jpeg';
import asatidzPhoto from '../assets/images/asatidz.jpg';
import piagamIzin from '../assets/images/piagamizin.jpg.jpeg';
import { SCHOOL_PROFILE } from '../data';
import WisdomBanner from './WisdomBanner';

export default function About() {
  const [showDocModal, setShowDocModal] = useState(false);
  return (
    <div className="py-16 bg-[#FAF9F6] selection:bg-emerald-100 selection:text-emerald-900 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-1.5 px-3.5 py-1 bg-emerald-50 text-emerald-800 text-xs font-bold rounded-full uppercase tracking-widest border border-emerald-150">
            <Building2 className="w-3.5 h-3.5" />
            <span>Profil Resmi Lembaga</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight font-serif">
            Tentang MDT Riyadlul Jannah
          </h2>
          <div className="w-20 h-1.5 bg-brand-green mx-auto rounded-full" />
          <p className="text-slate-600 text-sm md:text-base leading-relaxed font-light max-w-2xl mx-auto">
            Madrasah Diniyah Taklimiyah (MDT) Riyadlul Jannah merupakan wadah pendidikan keagamaan Islam yang berkomitmen membina generasi generasi muda berakhlakul karimah, mahir membaca Al-Qur'an, dan menguasai dasar-dasar ilmu syariat.
          </p>
        </div>

        {/* Main Banner / Visual Presentation */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-6xl mx-auto">
          
          {/* Images Grid */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-brand-divider shadow-md group"
            >
              <img 
                src={fotoGedungRJ} 
                alt="Gedung MDT Riyadlul Jannah" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 right-3 text-white">
                <span className="text-[10px] uppercase font-bold text-amber-300 tracking-wider block font-mono">Gedung Utama</span>
                <p className="text-xs font-bold font-serif">MDT Riyadlul Jannah</p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-brand-divider shadow-md group mt-6"
            >
              <img 
                src={bagianDepanRJ} 
                alt="Halaman Madrasah" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 right-3 text-white">
                <span className="text-[10px] uppercase font-bold text-amber-300 tracking-wider block font-mono">Lingkungan Belajar</span>
                <p className="text-xs font-bold font-serif">Aman &amp; Nyaman</p>
              </div>
            </motion.div>
          </div>

          {/* Description & Mission Overview */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-3">
              <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-800 font-mono">
                Pendidikan Keagamaan Formal
              </span>
              <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900 font-serif leading-snug">
                Mencetak Generasi Rabbani Berakhlak Mulia &amp; Berilmu Syar'i
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed font-light">
                Berlokasi di Pasir Gombong, Cikarang Utara, Kabupaten Bekasi, MDT Riyadlul Jannah menyelenggarakan pendidikan keagamaan terstruktur jenjang Awaliyah (Ula) hingga Wustho. Kami memadukan metode tahsin Al-Qur'an tartil, pengajaran kitab kuning salafiyah, dan pembiasaan adab harian.
              </p>
            </div>

            <div className="space-y-3 pt-2 border-t border-slate-200/80">
              <div className="flex items-start space-x-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-extrabold text-slate-800 text-sm">Legalitas Terdaftar Kemenag</h4>
                  <p className="text-xs text-slate-500 font-light">
                    Memiliki Nomor Statistik Madrasah (NSM) resmi dan terdaftar pada Kementerian Agama Republik Indonesia.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-extrabold text-slate-800 text-sm">Kurikulum Terintegrasi Kitab Salaf &amp; Tajwid</h4>
                  <p className="text-xs text-slate-500 font-light">
                    Materi pembelajaran mencakup Fiqih (Safinatun Najah/Sullam Taufiq), Aqidah (Aqidatul Awam), Tajwid (Hidayatus Shibyan), Akhlak, dan Bahasa Arab/Nahwu Sorof.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-extrabold text-slate-800 text-sm">Pilihan Kelas MDT Pagi &amp; Sore</h4>
                  <p className="text-xs text-slate-500 font-light">
                    Fleksibilitas waktu belajar bagi santri yang menempuh sekolah formal di sekolah dasar maupun menengah.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Legal Document Feature Card / Piagam Izin Operasional */}
        <div className="bg-emerald-900/5 border border-emerald-800/15 rounded-3xl p-6 md:p-8 max-w-6xl mx-auto shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center space-x-1.5 px-3 py-1 bg-emerald-100 text-emerald-900 text-xs font-bold rounded-full uppercase tracking-widest border border-emerald-200">
                <FileCheck className="w-3.5 h-3.5 text-emerald-700" />
                <span>Dokumen Resmi &amp; Legalitas</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900 font-serif leading-tight">
                Piagam Izin Operasional Kementerian Agama RI
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed font-light">
                Madrasah Diniyah Takmiliyah (MDT) Riyadlul Jannah telah memiliki Izin Operasional Resmi tertanggal <strong className="font-semibold text-slate-800">23 April 2024</strong> dari Kementerian Agama Republik Indonesia Kantor Kabupaten Bekasi dengan Nomor Statistik Madrasah (NSM): <span className="font-bold text-emerald-800 font-mono">{SCHOOL_PROFILE.statisticNumber}</span>.
              </p>
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <button
                  onClick={() => setShowDocModal(true)}
                  className="inline-flex items-center space-x-2 px-5 py-2.5 bg-emerald-700 hover:bg-emerald-800 text-white rounded-xl text-xs font-bold transition-all shadow-xs cursor-pointer group"
                >
                  <ZoomIn className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  <span>Lihat Piagam Izin Operasional</span>
                </button>
                <span className="text-xs text-slate-500 font-medium italic">Klik untuk memperbesar dokumen</span>
              </div>
            </div>

            <div className="lg:col-span-5 flex justify-center">
              <div 
                onClick={() => setShowDocModal(true)}
                className="relative cursor-pointer group max-w-xs rounded-2xl overflow-hidden border-2 border-emerald-600/30 shadow-md bg-white p-2 hover:shadow-xl transition-all duration-300"
              >
                <div className="relative aspect-[3/4] rounded-xl overflow-hidden bg-slate-100">
                  <img 
                    src={piagamIzin} 
                    alt="Piagam Izin Operasional MDT Riyadlul Jannah" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-slate-900/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white font-bold text-xs gap-2">
                    <ZoomIn className="w-5 h-5" />
                    <span>Perbesar</span>
                  </div>
                </div>
                <div className="p-2 text-center">
                  <span className="text-[11px] font-bold text-slate-800 block font-serif">Piagam Izin Operasional MDT</span>
                  <span className="text-[10px] text-emerald-700 font-mono font-semibold">Kemenag Kab. Bekasi</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Core Pillars of Education */}
        <div className="bg-white border border-brand-divider rounded-3xl p-8 md:p-12 shadow-xs space-y-8 max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-[10px] uppercase tracking-widest font-extrabold text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100 font-mono">
              Pilar Pendidikan
            </span>
            <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900 font-serif">
              4 Pilar Utama Tarbiyah MDT Riyadlul Jannah
            </h3>
            <p className="text-slate-500 text-xs md:text-sm font-light">
              Prinsip dasar yang menopang seluruh proses kegiatan belajar mengajar dan pembentukan karakter santri.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-emerald-50/50 border border-emerald-100/80 p-5 rounded-2xl space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-700 text-white flex items-center justify-center font-bold">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h4 className="font-serif font-extrabold text-base text-slate-900">1. Penanaman Adab</h4>
              <p className="text-xs text-slate-600 leading-relaxed font-light">
                Mendahulukan adab sebelum ilmu. Santri dibina untuk berbakti kepada orang tua, takdzim kepada guru, dan santun dalam bermasyarakat.
              </p>
            </div>

            <div className="bg-emerald-50/50 border border-emerald-100/80 p-5 rounded-2xl space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-700 text-white flex items-center justify-center font-bold">
                <BookOpen className="w-5 h-5" />
              </div>
              <h4 className="font-serif font-extrabold text-base text-slate-900">2. Fasahah Al-Qur'an</h4>
              <p className="text-xs text-slate-600 leading-relaxed font-light">
                Bimbingan membaca Al-Qur'an secara tartil, benar makhraj dan hukum tajwidnya, serta pembiasaan hafalan surat-surat pendek.
              </p>
            </div>

            <div className="bg-emerald-50/50 border border-emerald-100/80 p-5 rounded-2xl space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-700 text-white flex items-center justify-center font-bold">
                <GraduationCap className="w-5 h-5" />
              </div>
              <h4 className="font-serif font-extrabold text-base text-slate-900">3. Pemahaman Kitab Salaf</h4>
              <p className="text-xs text-slate-600 leading-relaxed font-light">
                Mengkaji kitab-kitab turats dasar agama Islam sebagai benteng pemahaman aqidah Ahli Sunnah Wal Jama'ah.
              </p>
            </div>

            <div className="bg-emerald-50/50 border border-emerald-100/80 p-5 rounded-2xl space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-700 text-white flex items-center justify-center font-bold">
                <HeartHandshake className="w-5 h-5" />
              </div>
              <h4 className="font-serif font-extrabold text-base text-slate-900">4. Pembiasaan Amaliah</h4>
              <p className="text-xs text-slate-600 leading-relaxed font-light">
                Praktek ibadah harian seperti wudhu, shalat fardhu, doa harian, serta hafalan bacaan shalat dengan bimbingan langsung.
              </p>
            </div>
          </div>
        </div>

        {/* Asatidz & Dewan Guru Section */}
        <div className="bg-gradient-to-br from-emerald-900 to-emerald-950 text-white rounded-3xl p-8 md:p-12 max-w-6xl mx-auto space-y-8 shadow-xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center md:text-left">
              <span className="text-[10px] font-mono uppercase tracking-widest font-extrabold text-amber-300">
                Pengasuh &amp; Tenaga Pendidik
              </span>
              <h3 className="text-2xl md:text-3xl font-extrabold font-serif text-white">
                Dewan Asatidz &amp; Ustadzah MDT
              </h3>
              <p className="text-xs md:text-sm text-emerald-200/90 font-light max-w-xl">
                Diusung oleh ustadz dan ustadzah yang berdedikasi tinggi, berpengalaman dalam pendidikan keagamaan Islam, dan istiqamah mendampingi para santri.
              </p>
            </div>

            <div className="shrink-0">
              <div className="px-4 py-2 bg-white/10 border border-white/20 rounded-xl text-center">
                <span className="text-xs font-bold text-amber-300 block font-serif">Pimpinan MDT</span>
                <span className="text-sm font-extrabold text-white block mt-0.5">{SCHOOL_PROFILE.headmaster}</span>
              </div>
            </div>
          </div>

          <div className="relative rounded-2xl overflow-hidden border border-emerald-700/60 shadow-md">
            <img 
              src={asatidzPhoto} 
              alt="Dewan Asatidz MDT Riyadlul Jannah" 
              className="w-full h-64 md:h-80 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-emerald-950 via-emerald-950/40 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 text-center md:text-left">
              <p className="text-xs text-emerald-200 font-medium">
                Keluarga Besar Asatidz &amp; Pengurus Madrasah Diniyah Taklimiyah Riyadlul Jannah Pasir Gombong
              </p>
            </div>
          </div>
        </div>

        {/* Location & Information Footer */}
        <div className="max-w-6xl mx-auto bg-slate-50 border border-slate-200 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-start space-x-3.5">
            <div className="p-3 bg-emerald-100 text-emerald-800 rounded-xl shrink-0 mt-1">
              <MapPin className="w-6 h-6" />
            </div>
            <div className="space-y-1">
              <h4 className="font-serif font-extrabold text-base text-slate-900">Alamat Madrasah</h4>
              <p className="text-xs text-slate-600 font-light leading-relaxed">
                {SCHOOL_PROFILE.address}
              </p>
              <p className="text-[11px] text-emerald-800 font-bold font-mono">
                Nomor Statistik Madrasah (NSM): {SCHOOL_PROFILE.statisticNumber}
              </p>
            </div>
          </div>

          <div className="shrink-0 text-center md:text-right space-y-1">
            <span className="text-[11px] text-slate-500 block uppercase tracking-wider font-bold">Layanan Sekretariat</span>
            <a 
              href="https://wa.me/6285966461178" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-4 py-2 bg-emerald-700 hover:bg-emerald-800 text-white rounded-xl font-bold text-xs transition-colors shadow-xs cursor-pointer"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Hubungi Sekretariat WhatsApp</span>
            </a>
          </div>
        </div>

        {/* Wisdom Banner / Maqolah Masyhur */}
        <WisdomBanner className="rounded-3xl shadow-xl border border-emerald-800/40" />

      </div>

      {/* Lightbox Modal for Piagam Izin Operasional */}
      <AnimatePresence>
        {showDocModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white rounded-3xl overflow-hidden max-w-3xl w-full max-h-[90vh] flex flex-col shadow-2xl border border-slate-700"
            >
              <div className="p-4 bg-emerald-900 text-white flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <FileCheck className="w-5 h-5 text-emerald-300" />
                  <h4 className="font-serif font-bold text-sm md:text-base">
                    Piagam Izin Operasional - MDT Riyadlul Jannah
                  </h4>
                </div>
                <button
                  onClick={() => setShowDocModal(false)}
                  className="p-1.5 hover:bg-white/10 rounded-full text-emerald-100 transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-4 overflow-y-auto bg-slate-100 flex items-center justify-center min-h-[300px]">
                <img
                  src={piagamIzin}
                  alt="Piagam Izin Operasional Kementerian Agama"
                  className="max-h-[75vh] w-auto object-contain rounded-lg shadow-md border border-slate-200"
                />
              </div>

              <div className="p-4 bg-white border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-600">
                <span>
                  Terbit: <strong>23 April 2024</strong> | NSM: <strong className="text-emerald-800 font-mono">{SCHOOL_PROFILE.statisticNumber}</strong>
                </span>
                <button
                  onClick={() => setShowDocModal(false)}
                  className="px-4 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold rounded-lg transition-colors cursor-pointer"
                >
                  Tutup
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
