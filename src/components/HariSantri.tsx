/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Calendar, 
  Clock, 
  MapPin, 
  Flag, 
  Sparkles, 
  Trophy, 
  Users, 
  BookOpen, 
  Scroll, 
  CheckCircle2, 
  Flame, 
  ShieldCheck, 
  Award, 
  Share2, 
  ChevronRight, 
  Volume2, 
  Maximize2, 
  X, 
  FileText, 
  ExternalLink,
  MessageCircle,
  HelpCircle,
  Heart
} from 'lucide-react';
import { HSN_2026_DATA, SCHOOL_PROFILE } from '../data';
import logoHSN from '../assets/images/logo hsn 26.jpg';
import ShareButton from './ShareButton';

interface HariSantriProps {
  setCurrentTab?: (tab: string) => void;
}

export default function HariSantri({ setCurrentTab }: HariSantriProps) {
  const [activeTab, setActiveTab] = useState<'agenda' | 'lomba' | 'panitia' | 'resolusi' | 'mars'>('agenda');
  const [isLogoModalOpen, setIsLogoModalOpen] = useState(false);
  const [copiedText, setCopiedText] = useState(false);

  // Countdown timer to 22 October 2026
  const targetDate = new Date('2026-10-22T07:00:00+07:00').getTime();
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isPassed: false
  });

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0, isPassed: true });
      } else {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);
        setTimeLeft({ days, hours, minutes, seconds, isPassed: false });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  const shareText = `*SEMARAK HARI SANTRI NASIONAL (HSN) 2026*\n*MDT RIYADLUL JANNAH PASIR GOMBONG*\n\nTema: "${HSN_2026_DATA.theme}"\n🗓 Hari/Tgl: ${HSN_2026_DATA.dateMasehi} (${HSN_2026_DATA.dateHijriah})\n📍 Tempat: ${HSN_2026_DATA.location}\n\n✨ Rangkaian Acara:\n• Upacara Bendera Resmi Santri\n• Musabaqah Lalaran Nadhom Kitab Salaf & MHQ\n• Pawai Obor & Ta'aruf Semarak Santri\n• Istighotsah Kubro & Doa Bersama untuk Bangsa\n\nInfo lengkap: ${window.location.origin}`;

  const handleShareWA = () => {
    const waUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(shareText)}`;
    window.open(waUrl, '_blank', 'noopener,noreferrer');
  };

  const tabs = [
    { id: 'agenda', label: 'Rangkaian Agenda & Jadwal', icon: Calendar },
    { id: 'lomba', label: 'Musabaqah & Perlombaan', icon: Trophy },
    { id: 'panitia', label: 'Susunan Panitia Pelaksana', icon: Users },
    { id: 'resolusi', label: 'Sejarah Resolusi Jihad', icon: Scroll },
    { id: 'mars', label: 'Mars & Ikrar Santri', icon: Volume2 }
  ];

  return (
    <div className="py-8 md:py-12 bg-[#F9F7F2] font-sans min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">

        {/* Breadcrumb / Top Indicator */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-brand-divider pb-4">
          <div className="flex items-center space-x-2 text-xs text-brand-dark/70">
            <button 
              onClick={() => setCurrentTab && setCurrentTab('home')}
              className="hover:text-brand-green font-semibold cursor-pointer"
            >
              Beranda
            </button>
            <span>/</span>
            <span className="font-extrabold text-brand-green uppercase tracking-wider">Hari Santri Nasional 2026</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleShareWA}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-xs font-bold transition-all shadow-2xs cursor-pointer"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>Ajak Wali Santri via WA</span>
            </button>
            <ShareButton
              shareData={{
                title: HSN_2026_DATA.title,
                text: `${HSN_2026_DATA.title} MDT Riyadlul Jannah Pasir Gombong - Tema: "${HSN_2026_DATA.theme}"`,
                url: window.location.href
              }}
              variant="outline"
              label="Bagikan"
            />
          </div>
        </div>

        {/* HERO SECTION WITH OFFICIAL LOGO HSN 26 */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#123124] via-[#1B4332] to-[#0A1B14] text-white border border-emerald-900/60 shadow-xl p-6 sm:p-10 md:p-14">
          {/* Subtle Islamic Motif Background */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(52,211,153,0.15),transparent_60%)] pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full border border-emerald-500/10 pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left: Text & Badges */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center space-x-2 bg-emerald-800/60 backdrop-blur-xs border border-emerald-400/30 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wider text-emerald-300 uppercase">
                <Flag className="w-3.5 h-3.5 text-amber-300 animate-pulse" />
                <span>22 Oktober 2026 • 11 Jumadil Ula 1448 H</span>
              </div>

              <div className="space-y-3">
                <p className="font-serif text-amber-300 text-lg md:text-xl font-bold italic tracking-wide" dir="rtl">
                  {HSN_2026_DATA.arabicTitle}
                </p>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-serif tracking-tight leading-tight text-white">
                  Peringatan Hari Santri Nasional 2026
                </h1>
                <p className="text-sm md:text-base text-emerald-100/90 font-light leading-relaxed">
                  Semarak perayaan dan pengabdian santri di <strong className="font-semibold text-white">MDT &amp; Pondok Pesantren Riyadlul Jannah</strong> Pasir Gombong, Cikarang Utara.
                </p>
              </div>

              {/* Theme Badge */}
              <div className="p-4 rounded-2xl bg-white/10 border border-white/15 backdrop-blur-xs flex items-start gap-3">
                <Flame className="w-6 h-6 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-[10px] uppercase font-mono tracking-widest text-emerald-200 block font-bold">
                    Tema Resmi Hari Santri 2026:
                  </span>
                  <p className="text-base sm:text-lg font-serif font-extrabold text-amber-200 italic">
                    "{HSN_2026_DATA.theme}"
                  </p>
                </div>
              </div>

              {/* Countdown Strip */}
              <div className="pt-2">
                <span className="text-[11px] uppercase tracking-widest font-mono text-emerald-300/80 block mb-2 font-bold">
                  {timeLeft.isPassed ? 'Acara Telah Berlangsung' : 'Hitung Mundur Menuju Hari Puncak:'}
                </span>
                <div className="grid grid-cols-4 gap-2 sm:gap-3 max-w-md">
                  <div className="bg-emerald-950/80 border border-emerald-700/50 rounded-xl p-2.5 sm:p-3 text-center">
                    <span className="block text-xl sm:text-2xl font-black font-mono text-amber-300">
                      {timeLeft.days}
                    </span>
                    <span className="text-[9px] uppercase tracking-wider text-emerald-200">Hari</span>
                  </div>
                  <div className="bg-emerald-950/80 border border-emerald-700/50 rounded-xl p-2.5 sm:p-3 text-center">
                    <span className="block text-xl sm:text-2xl font-black font-mono text-white">
                      {timeLeft.hours}
                    </span>
                    <span className="text-[9px] uppercase tracking-wider text-emerald-200">Jam</span>
                  </div>
                  <div className="bg-emerald-950/80 border border-emerald-700/50 rounded-xl p-2.5 sm:p-3 text-center">
                    <span className="block text-xl sm:text-2xl font-black font-mono text-white">
                      {timeLeft.minutes}
                    </span>
                    <span className="text-[9px] uppercase tracking-wider text-emerald-200">Menit</span>
                  </div>
                  <div className="bg-emerald-950/80 border border-emerald-700/50 rounded-xl p-2.5 sm:p-3 text-center">
                    <span className="block text-xl sm:text-2xl font-black font-mono text-amber-300">
                      {timeLeft.seconds}
                    </span>
                    <span className="text-[9px] uppercase tracking-wider text-emerald-200">Detik</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-3 pt-3">
                <button
                  onClick={() => {
                    setActiveTab('agenda');
                    const el = document.getElementById('hsn-content-tabs');
                    el?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="px-5 py-2.5 bg-amber-400 hover:bg-amber-300 text-emerald-950 font-bold text-xs uppercase tracking-wider rounded-xl shadow-md transition-all cursor-pointer"
                >
                  Lihat Rangkaian Acara
                </button>
                <button
                  onClick={() => {
                    setActiveTab('lomba');
                    const el = document.getElementById('hsn-content-tabs');
                    el?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="px-5 py-2.5 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all cursor-pointer"
                >
                  Musabaqah &amp; Lomba
                </button>
              </div>
            </div>

            {/* Right: OFFICIAL LOGO DISPLAY */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <div className="relative group w-full max-w-md bg-white rounded-2xl p-3 border-4 border-amber-400/40 shadow-2xl transition-transform hover:scale-[1.01]">
                <div className="overflow-hidden rounded-xl bg-slate-50 flex items-center justify-center relative">
                  <img
                    src={logoHSN}
                    alt="Logo Resmi Hari Santri Nasional 2026 MDT Riyadlul Jannah"
                    className="w-full h-auto object-contain max-h-[280px] sm:max-h-[320px] transition-transform duration-300 group-hover:scale-105"
                  />
                  {/* Zoom Overlay Button */}
                  <button
                    onClick={() => setIsLogoModalOpen(true)}
                    className="absolute bottom-3 right-3 bg-black/70 hover:bg-black/90 text-white p-2 rounded-lg text-xs font-bold flex items-center gap-1.5 backdrop-blur-xs transition-colors cursor-pointer"
                    title="Perbesar Logo"
                  >
                    <Maximize2 className="w-3.5 h-3.5" />
                    <span>Lihat Penuh</span>
                  </button>
                </div>
                
                <div className="pt-3 pb-1 text-center">
                  <span className="text-[10px] uppercase font-mono tracking-widest text-slate-500 font-bold block">
                    Logo Resmi Peringatan
                  </span>
                  <p className="text-xs font-extrabold text-slate-800 font-serif">
                    Hari Santri Nasional 2026 MDT Riyadlul Jannah
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* NOTICE CARD: TELAH TERLAKSANA RAPAT PEMBENTUKAN PANITIA HSN 2026 */}
        <div className="bg-white border-2 border-emerald-600/30 rounded-2xl p-6 md:p-8 shadow-xs flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-emerald-100 text-emerald-800 rounded-xl shrink-0 mt-0.5">
              <CheckCircle2 className="w-6 h-6 text-emerald-700" />
            </div>
            <div className="space-y-1.5">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-emerald-700 text-white font-mono">
                  {HSN_2026_DATA.preparationMeeting.status}
                </span>
                <span className="text-xs text-slate-500 font-medium">
                  {HSN_2026_DATA.preparationMeeting.date}
                </span>
              </div>
              <h3 className="text-base sm:text-lg font-bold font-serif text-slate-900 leading-snug">
                {HSN_2026_DATA.preparationMeeting.title}
              </h3>
              <p className="text-xs text-slate-600 font-light max-w-2xl leading-relaxed">
                Rapat musyawarah Dewan Asatidz telah terlaksana pada <strong>{HSN_2026_DATA.preparationMeeting.date}</strong> pukul <strong>{HSN_2026_DATA.preparationMeeting.time}</strong> di Gedung MDT Riyadlul Jannah Pasir Gombong guna menetapkan kepanitiaan, juknis perlombaan, dan rangkaian semarak peringatan Hari Santri Nasional 2026.
              </p>
            </div>
          </div>

          <div className="shrink-0 flex items-center gap-2 w-full md:w-auto">
            <button
              onClick={() => {
                setActiveTab('panitia');
                const el = document.getElementById('hsn-content-tabs');
                el?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="w-full md:w-auto px-4 py-2.5 bg-emerald-800 hover:bg-emerald-900 text-white rounded-xl text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <Users className="w-4 h-4" />
              <span>Susunan Panitia</span>
            </button>
          </div>
        </div>

        {/* TAB CONTROLS NAVIGATION */}
        <div id="hsn-content-tabs" className="scroll-mt-24">
          <div className="flex border-b border-brand-divider overflow-x-auto no-scrollbar gap-2 pb-1">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`flex items-center space-x-2 px-4 py-3 text-xs md:text-sm font-bold whitespace-nowrap border-b-2 transition-all cursor-pointer ${
                    isActive
                      ? 'border-brand-green text-brand-green font-extrabold bg-white/60 rounded-t-xl'
                      : 'border-transparent text-slate-600 hover:text-slate-900 hover:bg-slate-100/50'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-brand-green' : 'text-slate-400'}`} />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* TAB CONTENT AREA */}
        <div className="bg-white border border-brand-divider rounded-2xl p-6 sm:p-8 shadow-xs">
          
          {/* TAB 1: AGENDA & JADWAL */}
          {activeTab === 'agenda' && (
            <div className="space-y-8 animate-in fade-in duration-200">
              <div className="border-b border-slate-100 pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <h3 className="text-xl md:text-2xl font-extrabold font-serif text-slate-900">
                    Jadwal Rangkaian Acara Hari Santri 2026
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 font-light">
                    Kamis, 22 Oktober 2026 M (11 Jumadil Ula 1448 H) • Kompleks MDT &amp; PP Riyadlul Jannah
                  </p>
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-100 text-amber-900 text-xs font-bold rounded-lg font-mono">
                  <Clock className="w-3.5 h-3.5" />
                  <span>Pagi s/d Malam Hari</span>
                </div>
              </div>

              {/* Timeline Cards */}
              <div className="space-y-4">
                {HSN_2026_DATA.events.map((event, idx) => (
                  <div 
                    key={idx}
                    className="p-5 rounded-2xl border border-slate-200/90 bg-slate-50/50 hover:bg-white hover:border-emerald-300 transition-all shadow-2xs space-y-2"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="px-2.5 py-0.5 bg-emerald-800 text-white rounded-md text-[11px] font-mono font-bold">
                        {event.time}
                      </span>
                      <span className="flex items-center gap-1 text-xs text-slate-500 font-medium">
                        <MapPin className="w-3.5 h-3.5 text-emerald-600" />
                        <span>{event.location}</span>
                      </span>
                    </div>

                    <h4 className="text-base sm:text-lg font-bold font-serif text-slate-900">
                      {event.title}
                    </h4>

                    <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed">
                      {event.description}
                    </p>
                  </div>
                ))}
              </div>

              {/* Ketentuan Busana / Dresscode */}
              <div className="p-6 rounded-2xl bg-amber-50/70 border border-amber-200 space-y-4">
                <div className="flex items-center gap-2 text-amber-900 font-serif font-bold text-sm sm:text-base">
                  <ShieldCheck className="w-5 h-5 text-amber-700" />
                  <span>Ketentuan Busana &amp; Perlengkapan Seluruh Santri</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-slate-700">
                  <div className="p-4 bg-white rounded-xl border border-amber-100 space-y-1.5">
                    <span className="font-extrabold text-emerald-800 uppercase tracking-wider block">
                      Santri Putra:
                    </span>
                    <p className="leading-relaxed font-light">
                      {HSN_2026_DATA.dressCode.putra}
                    </p>
                  </div>
                  <div className="p-4 bg-white rounded-xl border border-amber-100 space-y-1.5">
                    <span className="font-extrabold text-emerald-800 uppercase tracking-wider block">
                      Santri Putri:
                    </span>
                    <p className="leading-relaxed font-light">
                      {HSN_2026_DATA.dressCode.putri}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: MUSABAQAH & LOMBA */}
          {activeTab === 'lomba' && (
            <div className="space-y-6 animate-in fade-in duration-200">
              <div className="border-b border-slate-100 pb-4">
                <h3 className="text-xl md:text-2xl font-extrabold font-serif text-slate-900">
                  Musabaqah &amp; Perlombaan Santri Antar-Kelas
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 font-light">
                  Ajang unjuk kompetensi pembacaan kitab salaf, tahfidz Al-Qur'an, fiqih ibadah, dan syiar dakwah.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {HSN_2026_DATA.competitions.map((comp, idx) => (
                  <div 
                    key={idx}
                    className="p-5 rounded-2xl border border-slate-200 bg-white hover:border-emerald-400 hover:shadow-xs transition-all flex flex-col justify-between space-y-4"
                  >
                    <div className="space-y-2.5">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded-md font-bold">
                          {comp.category}
                        </span>
                        <span className="text-xs font-mono font-bold text-amber-700">
                          Lomba 0{idx + 1}
                        </span>
                      </div>
                      
                      <h4 className="text-base sm:text-lg font-bold font-serif text-slate-900 leading-snug">
                        {comp.title}
                      </h4>

                      <div className="space-y-1.5 text-xs text-slate-600 font-light">
                        <p>
                          <strong className="font-semibold text-slate-800">Sasaran:</strong> {comp.target}
                        </p>
                        <p>
                          <strong className="font-semibold text-slate-800">Materi Uji:</strong> {comp.materials}
                        </p>
                      </div>
                    </div>

                    <div className="pt-3 border-t border-slate-100">
                      <span className="text-[10px] uppercase font-bold text-slate-400 block mb-1">
                        Kriteria Penilaian:
                      </span>
                      <p className="text-xs text-slate-600 font-light italic">
                        {comp.criteria}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 flex items-center justify-between">
                <span>Pendaftaran peserta lomba dikoordinasikan langsung melalui masing-masing Wali Kelas Awaliyah dan Wustha.</span>
                <span className="font-bold text-emerald-800">Dewan Juri Asatidz MDT</span>
              </div>
            </div>
          )}

          {/* TAB 3: SUSUNAN PANITIA */}
          {activeTab === 'panitia' && (
            <div className="space-y-8 animate-in fade-in duration-200">
              <div className="border-b border-slate-100 pb-4">
                <h3 className="text-xl md:text-2xl font-extrabold font-serif text-slate-900">
                  Susunan Panitia Pelaksana Hari Santri Nasional 2026
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 font-light">
                  Ditetapkan pada Rapat Evaluasi Bulanan &amp; Pembentukan Panitia HSN, Jum'at malam Sabtu, 18 September 2026 (7 Rabius Tsani 1448 H).
                </p>
              </div>

              {/* Leadership Hierarchy */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-1">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-800 font-bold block">
                    Pelindung
                  </span>
                  <h4 className="text-base font-bold font-serif text-slate-900">
                    {HSN_2026_DATA.committee.pelindung}
                  </h4>
                  <p className="text-xs text-slate-600 font-light">Pengasuh Pondok Pesantren</p>
                </div>

                <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-1">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-800 font-bold block">
                    Penasehat
                  </span>
                  <h4 className="text-base font-bold font-serif text-slate-900">
                    {HSN_2026_DATA.committee.penasehat}
                  </h4>
                  <p className="text-xs text-slate-600 font-light">Kepala MDT Riyadlul Jannah</p>
                </div>

                <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-center space-y-1 sm:col-span-2 lg:col-span-1">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-amber-900 font-bold block">
                    Ketua Panitia Pelaksana
                  </span>
                  <h4 className="text-base font-bold font-serif text-slate-900">
                    {HSN_2026_DATA.committee.ketua}
                  </h4>
                  <p className="text-xs text-slate-600 font-light">Wakil: {HSN_2026_DATA.committee.wakilKetua}</p>
                </div>
              </div>

              {/* Core Officers */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl border border-slate-200 bg-white flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 font-bold block">
                      Sekretaris
                    </span>
                    <h5 className="font-bold text-sm text-slate-800 font-serif">
                      {HSN_2026_DATA.committee.sekretaris}
                    </h5>
                  </div>
                  <FileText className="w-5 h-5 text-slate-400" />
                </div>

                <div className="p-4 rounded-xl border border-slate-200 bg-white flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 font-bold block">
                      Bendahara
                    </span>
                    <h5 className="font-bold text-sm text-slate-800 font-serif">
                      {HSN_2026_DATA.committee.bendahara}
                    </h5>
                  </div>
                  <Award className="w-5 h-5 text-slate-400" />
                </div>
              </div>

              {/* Sections / Seksi */}
              <div className="space-y-3">
                <span className="text-xs uppercase font-extrabold tracking-widest text-slate-400 block px-1">
                  Seksi-Seksi Teknis Pelaksana:
                </span>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 space-y-1">
                    <span className="text-[11px] font-bold text-emerald-800 uppercase tracking-wider block">
                      Seksi Acara &amp; Upacara
                    </span>
                    <ul className="text-xs text-slate-700 space-y-0.5">
                      {HSN_2026_DATA.committee.seksiAcara.map((s, i) => (
                        <li key={i}>• {s}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 space-y-1">
                    <span className="text-[11px] font-bold text-emerald-800 uppercase tracking-wider block">
                      Seksi Perlombaan / Musabaqah
                    </span>
                    <ul className="text-xs text-slate-700 space-y-0.5">
                      {HSN_2026_DATA.committee.seksiLomba.map((s, i) => (
                        <li key={i}>• {s}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 space-y-1">
                    <span className="text-[11px] font-bold text-emerald-800 uppercase tracking-wider block">
                      Seksi Perlengkapan &amp; Logistik
                    </span>
                    <ul className="text-xs text-slate-700 space-y-0.5">
                      {HSN_2026_DATA.committee.seksiPerlengkapan.map((s, i) => (
                        <li key={i}>• {s}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 space-y-1">
                    <span className="text-[11px] font-bold text-emerald-800 uppercase tracking-wider block">
                      Seksi Keamanan &amp; Ketertiban
                    </span>
                    <ul className="text-xs text-slate-700 space-y-0.5">
                      {HSN_2026_DATA.committee.seksiKeamanan.map((s, i) => (
                        <li key={i}>• {s}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 space-y-1 md:col-span-2">
                    <span className="text-[11px] font-bold text-emerald-800 uppercase tracking-wider block">
                      Seksi Publikasi &amp; Dokumentasi
                    </span>
                    <ul className="text-xs text-slate-700 space-y-0.5">
                      {HSN_2026_DATA.committee.seksiDokumentasi.map((s, i) => (
                        <li key={i}>• {s}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: RESOLUSI JIHAD & SEJARAH */}
          {activeTab === 'resolusi' && (
            <div className="space-y-6 animate-in fade-in duration-200">
              <div className="border-b border-slate-100 pb-4">
                <span className="text-[10px] uppercase tracking-widest font-mono text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded font-bold">
                  22 Oktober 1945
                </span>
                <h3 className="text-xl md:text-2xl font-extrabold font-serif text-slate-900 mt-1">
                  Sejarah Hari Santri &amp; Naskah Resolusi Jihad
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 font-light">
                  Fatwa perjuangan Hadratussyaikh KH. Muhammad Hasyim Asy'ari yang mengobarkan perlawanan rakyat mempertahankan kemerdekaan RI.
                </p>
              </div>

              {/* Historical Context Callout */}
              <div className="p-6 rounded-2xl bg-amber-50/60 border border-amber-200 space-y-4 font-serif text-slate-800">
                <div className="flex items-center gap-2 text-amber-900 font-bold text-sm">
                  <Scroll className="w-5 h-5 text-amber-700" />
                  <span>Maklumat Resolusi Jihad Fii Sabilillah</span>
                </div>
                <blockquote className="text-sm md:text-base leading-relaxed italic border-l-4 border-amber-600 pl-4 bg-white/70 p-3 rounded-r-xl">
                  "{HSN_2026_DATA.resolusiJihad.essence}"
                </blockquote>
                <p className="text-xs text-slate-600 font-sans font-light leading-relaxed">
                  Fatwa Resolusi Jihad yang dicetuskan pada tanggal 22 Oktober 1945 di Surabaya ini menjadi pemantik utama meletusnya pertempuran heroik 10 November 1945 di Surabaya (Hari Pahlawan). Melalui Keputusan Presiden No. 22 Tahun 2015, negara secara resmi menetapkan tanggal 22 Oktober sebagai <strong>Hari Santri Nasional</strong>.
                </p>
              </div>

              {/* Three Pillars of Santri Role */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 font-sans">
                <div className="p-4 rounded-xl border border-slate-200 space-y-2">
                  <span className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-xs">
                    01
                  </span>
                  <h5 className="font-bold text-sm text-slate-900 font-serif">Penjaga Aqidah &amp; Adab</h5>
                  <p className="text-xs text-slate-600 font-light leading-relaxed">
                    Mempelajari dan mengamalkan ajaran Islam Ahlussunnah wal Jama'ah dengan menempatkan adab di atas ilmu.
                  </p>
                </div>

                <div className="p-4 rounded-xl border border-slate-200 space-y-2">
                  <span className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-xs">
                    02
                  </span>
                  <h5 className="font-bold text-sm text-slate-900 font-serif">Pilar Persatuan Bangsa</h5>
                  <p className="text-xs text-slate-600 font-light leading-relaxed">
                    Menjunjung tinggi toleransi, ukhuwah wathaniyah (persaudaraan kebangsaan), serta kesetiaan pada NKRI.
                  </p>
                </div>

                <div className="p-4 rounded-xl border border-slate-200 space-y-2">
                  <span className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-xs">
                    03
                  </span>
                  <h5 className="font-bold text-sm text-slate-900 font-serif">Penggerak Kemajuan Ummat</h5>
                  <p className="text-xs text-slate-600 font-light leading-relaxed">
                    Menguasai khazanah kitab kuning salaf sekaligus tanggap terhadap perkembangan zaman dan teknologi modern.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* TAB 5: MARS & IKRAR SANTRI */}
          {activeTab === 'mars' && (
            <div className="space-y-8 animate-in fade-in duration-200">
              <div className="border-b border-slate-100 pb-4">
                <h3 className="text-xl md:text-2xl font-extrabold font-serif text-slate-900">
                  Mars Hari Santri &amp; Ikrar Santri Indonesia
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 font-light">
                  Lagu penyemangat dan janji setia santri dalam menjaga agama, ilmu, dan keutuhan NKRI.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Mars Hari Santri */}
                <div className="lg:col-span-6 bg-slate-50 border border-slate-200 rounded-2xl p-6 space-y-4">
                  <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                    <div className="flex items-center gap-2">
                      <Volume2 className="w-4 h-4 text-emerald-700" />
                      <h4 className="font-bold text-base font-serif text-slate-900">
                        {HSN_2026_DATA.marsHariSantri.title}
                      </h4>
                    </div>
                  </div>

                  <div className="space-y-1 font-serif text-slate-700 text-sm leading-relaxed whitespace-pre-line bg-white p-4 rounded-xl border border-slate-100">
                    {HSN_2026_DATA.marsHariSantri.lyrics.join('\n')}
                  </div>
                </div>

                {/* Ikrar Santri */}
                <div className="lg:col-span-6 bg-emerald-50/50 border border-emerald-200 rounded-2xl p-6 space-y-4">
                  <div className="flex items-center justify-between border-b border-emerald-200 pb-3">
                    <div className="flex items-center gap-2">
                      <Flag className="w-4 h-4 text-emerald-700" />
                      <h4 className="font-bold text-base font-serif text-emerald-950">
                        Naskah Ikrar Santri
                      </h4>
                    </div>
                  </div>

                  <div className="space-y-3 text-xs sm:text-sm text-slate-800 leading-relaxed font-light">
                    {HSN_2026_DATA.ikrarSantri.map((point, i) => (
                      <p 
                        key={i} 
                        className={i === 0 ? "font-bold text-emerald-900 font-serif" : "pl-3 border-l-2 border-emerald-400 py-0.5"}
                      >
                        {point}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

        </div>

        {/* BOTTOM INVITATION BANNER & WA ACTION */}
        <div className="rounded-3xl bg-brand-green text-brand-cream p-6 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-md border border-brand-divider">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-[10px] uppercase font-mono tracking-widest text-amber-300 font-bold block">
              Mari Bergabung &amp; Berpartisipasi
            </span>
            <h3 className="text-xl sm:text-2xl font-extrabold font-serif">
              Sukseskan Semarak Hari Santri Nasional 2026 MDT Riyadlul Jannah
            </h3>
            <p className="text-xs sm:text-sm text-emerald-100/80 font-light max-w-xl">
              Kami mengundang segenap orang tua/wali santri, alumni, dan masyarakat Pasir Gombong untuk menghadiri upacara bendera, pawai obor santri, serta doa bersama.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full sm:w-auto">
            <button
              onClick={handleShareWA}
              className="w-full sm:w-auto px-5 py-3 bg-amber-400 hover:bg-amber-300 text-emerald-950 font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Bagikan Informasi ke WA</span>
            </button>
            <button
              onClick={() => setCurrentTab && setCurrentTab('contact')}
              className="w-full sm:w-auto px-5 py-3 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Hubungi Panitia</span>
            </button>
          </div>
        </div>

      </div>

      {/* FULL LOGO MODAL ZOOM */}
      <AnimatePresence>
        {isLogoModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-xs">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative max-w-3xl w-full bg-white rounded-3xl p-4 sm:p-6 shadow-2xl space-y-4"
            >
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <div className="space-y-0.5">
                  <h4 className="font-bold text-sm sm:text-base text-slate-900 font-serif">
                    Logo Resmi Hari Santri Nasional 2026
                  </h4>
                  <p className="text-[11px] text-slate-500 font-mono">
                    MDT &amp; Pondok Pesantren Riyadlul Jannah Pasir Gombong
                  </p>
                </div>
                <button
                  onClick={() => setIsLogoModalOpen(false)}
                  className="p-2 rounded-full hover:bg-slate-100 text-slate-500 hover:text-slate-800 transition-colors cursor-pointer"
                  title="Tutup"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="overflow-hidden rounded-2xl bg-slate-50 flex items-center justify-center p-2 border border-slate-100">
                <img
                  src={logoHSN}
                  alt="Logo Hari Santri Nasional 2026"
                  className="w-full h-auto max-h-[70vh] object-contain rounded-xl"
                />
              </div>

              <div className="flex items-center justify-between text-xs text-slate-500 pt-1">
                <span>Tema: "{HSN_2026_DATA.theme}"</span>
                <button
                  onClick={handleShareWA}
                  className="text-emerald-700 font-bold hover:underline flex items-center gap-1 cursor-pointer"
                >
                  <Share2 className="w-3.5 h-3.5" />
                  <span>Kirim ke WhatsApp</span>
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
