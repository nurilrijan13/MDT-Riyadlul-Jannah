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
  Heart,
  Copy,
  Check,
  Medal,
  Star
} from 'lucide-react';
import { HSN_2026_DATA, SCHOOL_PROFILE } from '../data';
import logoHSN from '../assets/images/logo hsn 26.jpg';
import ShareButton from './ShareButton';

interface HariSantriProps {
  setCurrentTab?: (tab: string) => void;
}

export default function HariSantri({ setCurrentTab }: HariSantriProps) {
  const [activeTab, setActiveTab] = useState<'agenda' | 'juara' | 'lomba' | 'panitia' | 'resolusi' | 'mars'>('agenda');
  const [isLogoModalOpen, setIsLogoModalOpen] = useState(false);
  const [copiedText, setCopiedText] = useState(false);
  const [copiedWinnersText, setCopiedWinnersText] = useState(false);
  const [winnerCategoryFilter, setWinnerCategoryFilter] = useState<'all' | 'keagamaan' | 'olahraga'>('all');

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

  const shareText = `*RUNDOWN TIMELINE HARI SANTRI NASIONAL 2026*\n*MDT RIYADLUL JANNAH PASIR GOMBONG*\n\n1️⃣ Ahad Malam Senin, 19 Okt (20:00 - 22:00 WIB)\n🎯 Pembukaan HSN & Musyabaqoh Kaligrafi\n\n2️⃣ Senin Malam Selasa, 20 Okt (20:00 - 22:00 WIB)\n🎯 MTQ Awaliyah & MHQ Wustho\n\n3️⃣ Selasa Malam Rabu, 20 Okt (20:00 - 22:00 WIB)\n🎯 MQK Awaliyah & MQK Wustho\n\n4️⃣ Rabu, 21 Okt (14:00 - 17:00 WIB)\n🎯 Lomba Futsal Putra & Badminton Putri\n\n5️⃣ Rabu Malam Kamis, 21 Okt (20:00 - 21:00 WIB)\n🎯 Kirab Santri “Pawai Obor”\n\n6️⃣ Kamis, 22 Okt (07:00 - 09:00 WIB)\n🎯 Apel Upacara Hari Santri & Nobar Film “Sang Kiai”\n\n7️⃣ Kamis, 22 Okt (16:00 - 17:00 WIB)\n🎯 Pembagian Hadiah, Souvenir & Penutupan\n\nInfo lengkap: ${window.location.origin}`;

  const shareWinnersText = `*SANG JUARAWAN LOMBA*\n*MUSYABAQOH HARI SANTRI NASIONAL 22 OKTOBER 2026*\n*MDT RIYADLUL JANNAH CIKARANG UTARA BEKASI*\n\n1. KALIGRAFI 🥇 MOZA YANA ULFA ADABYA\n2. MTQ AWALIYAH 🥇 SITI LUTFIAH\n3. MHQ WUSTHO 🥇 SITI MUTHMAINNAH\n4. MQK AWALIYAH 🥇 SITI MAIMUNAH\n5. MQK WUSTHO 🥇 NURUL AULIA\n6. BADMINTON PUTRA 🥇 M. SYAHRI RAMADHAN\n7. BADMINTON PUTRI 🥇 SABILA TUL JANNAH\n8. FUTSAL SANTRI RJ CUP 2026 🏆 GREEN MATCHA\n   1. EDY AMRULLAH (C)\n   2. SHOFI YULLOH (GOALKEEPER)\n   3. SYAFI UDDIN\n   4. SYAHRUL FAHMI\n   5. M.ALI MURTADHO\n\nSelamat & berkah kepada para santri juarawan!\nInfo lengkap: ${window.location.origin}`;

  const handleShareWA = () => {
    const waUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(shareText)}`;
    window.open(waUrl, '_blank', 'noopener,noreferrer');
  };

  const handleShareWinnersWA = () => {
    const waUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(shareWinnersText)}`;
    window.open(waUrl, '_blank', 'noopener,noreferrer');
  };

  const handleCopyWinners = () => {
    navigator.clipboard.writeText(shareWinnersText);
    setCopiedWinnersText(true);
    setTimeout(() => setCopiedWinnersText(false), 3000);
  };

  const tabs = [
    { id: 'agenda', label: 'Rangkaian Agenda & Jadwal', icon: Calendar },
    { id: 'juara', label: 'Sang Juarawan Lomba', icon: Trophy, badge: 'Resmi' },
    { id: 'lomba', label: 'Musabaqah & Perlombaan', icon: Award },
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
              <div className="p-4 sm:p-5 rounded-2xl bg-white/10 border border-white/15 backdrop-blur-xs space-y-2.5">
                <div className="flex items-center gap-2">
                  <Flame className="w-5 h-5 text-amber-400 shrink-0" />
                  <span className="text-[10px] sm:text-[11px] uppercase font-mono tracking-widest text-emerald-200 block font-bold">
                    Tema Resmi Hari Santri 2026:
                  </span>
                </div>
                <div className="space-y-2 pt-0.5">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-1.5 sm:gap-2">
                    <span className="px-2 py-0.5 rounded-md bg-amber-400 text-emerald-950 text-[10px] font-mono font-extrabold uppercase shrink-0 w-fit">
                      Kemenag
                    </span>
                    <p className="text-sm sm:text-base font-serif font-extrabold text-amber-200 italic">
                      "{HSN_2026_DATA.themeKemenag}"
                    </p>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-1.5 sm:gap-2">
                    <span className="px-2 py-0.5 rounded-md bg-emerald-700 text-emerald-100 border border-emerald-500/40 text-[10px] font-mono font-extrabold uppercase shrink-0 w-fit">
                      PBNU
                    </span>
                    <p className="text-sm sm:text-base font-serif font-extrabold text-emerald-100 italic">
                      "{HSN_2026_DATA.themePBNU}"
                    </p>
                  </div>
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

        {/* BANNER PENGUMUMAN RESMI SANG JUARAWAN LOMBA */}
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-500 text-amber-950 p-5 sm:p-6 shadow-md border-2 border-amber-300">
          <div className="absolute -right-8 -bottom-8 text-amber-600/20 text-9xl font-serif select-none pointer-events-none">
            🏆
          </div>
          <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="flex items-start sm:items-center gap-3.5">
              <div className="w-12 h-12 rounded-2xl bg-amber-950/15 border border-amber-950/20 flex items-center justify-center text-2xl shrink-0 shadow-2xs">
                🏆
              </div>
              <div className="space-y-1">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-2 py-0.5 bg-amber-950 text-amber-300 rounded-md text-[10px] font-mono font-extrabold uppercase tracking-wider">
                    Pengumuman Resmi Juara
                  </span>
                  <span className="text-xs font-bold text-amber-900 flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>22 Oktober 2026</span>
                  </span>
                </div>
                <h3 className="text-base sm:text-lg md:text-xl font-extrabold font-serif text-amber-950 tracking-tight leading-snug">
                  SANG JUARAWAN LOMBA MUSYABAQOH HARI SANTRI NASIONAL 2026
                </h3>
                <p className="text-xs text-amber-900/90 font-medium">
                  Selamat kepada 8 Juarawan Musabaqah Kitab Salaf, Kaligrafi, Al-Qur'an &amp; Kampiun Futsal RJ Cup 2026!
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 w-full md:w-auto shrink-0">
              <button
                onClick={() => {
                  setActiveTab('juara');
                  const el = document.getElementById('hsn-content-tabs');
                  el?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-full md:w-auto px-5 py-2.5 bg-emerald-900 hover:bg-emerald-950 text-white rounded-xl text-xs font-bold uppercase tracking-wider shadow-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Lihat Juarawan</span>
                <Trophy className="w-4 h-4 text-amber-300" />
              </button>
            </div>
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
                  {(tab as any).badge && (
                    <span className="px-1.5 py-0.5 text-[9px] font-mono font-extrabold bg-amber-400 text-amber-950 rounded uppercase tracking-wider animate-pulse">
                      {(tab as any).badge}
                    </span>
                  )}
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
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-100 text-emerald-800 text-[11px] font-mono font-bold rounded-lg uppercase tracking-wider mb-2">
                    <Calendar className="w-3.5 h-3.5 text-emerald-700" />
                    <span>RUNDOWN TIMELINE HARI SANTRI NASIONAL 2026</span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-extrabold font-serif text-slate-900">
                    Rundown Timeline Acara HSN 2026 MDT Riyadlul Jannah
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 font-light">
                    19 - 22 Oktober 2026 • Madrasah Diniyah Taklimiyah Riyadlul Jannah Pasir Gombong
                  </p>
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-100 text-amber-900 text-xs font-bold rounded-lg font-mono">
                  <Clock className="w-3.5 h-3.5" />
                  <span>7 Tahapan Agenda</span>
                </div>
              </div>

              {/* Timeline Cards with 1️⃣ - 7️⃣ Steps */}
              <div className="space-y-4">
                {HSN_2026_DATA.events.map((event: any, idx: number) => {
                  const stepNumber = event.step || idx + 1;
                  return (
                    <div 
                      key={idx}
                      className="p-5 sm:p-6 rounded-2xl border-2 border-slate-200/90 bg-slate-50/50 hover:bg-white hover:border-emerald-500 transition-all shadow-2xs space-y-3"
                    >
                      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200/60 pb-2.5">
                        <div className="flex items-center gap-2">
                          <span className="w-7 h-7 rounded-lg bg-emerald-800 text-amber-300 font-extrabold flex items-center justify-center text-xs font-mono">
                            {stepNumber}
                          </span>
                          <span className="font-extrabold text-sm sm:text-base text-slate-900 font-serif">
                            {event.day}
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="px-2.5 py-1 bg-amber-100 text-amber-900 rounded-md text-xs font-mono font-bold flex items-center gap-1">
                            <Clock className="w-3.5 h-3.5 text-amber-700" />
                            <span>{event.time}</span>
                          </span>
                          <span className="hidden sm:flex items-center gap-1 text-xs text-slate-500 font-medium">
                            <MapPin className="w-3.5 h-3.5 text-emerald-600" />
                            <span>{event.location}</span>
                          </span>
                        </div>
                      </div>

                      <div className="space-y-1">
                        <h4 className="text-base sm:text-lg font-bold font-serif text-emerald-950 flex items-center gap-1.5">
                          <span className="text-emerald-700 font-bold">🎯</span>
                          <span>{event.title}</span>
                        </h4>

                        <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed pl-6">
                          {event.description}
                        </p>
                      </div>

                      <div className="sm:hidden flex items-center gap-1 text-[11px] text-slate-500 font-medium pt-1 border-t border-slate-100">
                        <MapPin className="w-3 h-3 text-emerald-600" />
                        <span>{event.location}</span>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Ketentuan Busana */}
              <div className="p-6 rounded-2xl bg-amber-50/70 border border-amber-200 space-y-4">
                <div className="flex items-center gap-2 text-amber-900 font-serif font-bold text-sm sm:text-base">
                  <ShieldCheck className="w-5 h-5 text-amber-700" />
                  <span>Ketentuan Busana</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-slate-700">
                  {/* Kirab Santri Pawai Obor */}
                  <div className="p-4 bg-white rounded-xl border border-amber-200/80 space-y-3 shadow-2xs">
                    <div className="flex items-center gap-2 border-b border-slate-100 pb-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-500 shrink-0"></span>
                      <h4 className="font-extrabold text-sm text-slate-900 font-serif">
                        Kirab Santri Pawai Obor
                      </h4>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 bg-emerald-50/70 p-2.5 rounded-lg border border-emerald-100">
                        <span className="font-extrabold text-emerald-800 shrink-0 min-w-[42px]">Putra:</span>
                        <span className="font-bold text-slate-800">{HSN_2026_DATA.dressCode.kirab.putra}</span>
                      </div>
                      <div className="flex items-center gap-2 bg-slate-50 p-2.5 rounded-lg border border-slate-200/80">
                        <span className="font-extrabold text-slate-700 shrink-0 min-w-[42px]">Putri:</span>
                        <span className="font-bold text-slate-800">{HSN_2026_DATA.dressCode.kirab.putri}</span>
                      </div>
                    </div>
                  </div>

                  {/* Apel Upacara */}
                  <div className="p-4 bg-white rounded-xl border border-amber-200/80 space-y-3 shadow-2xs">
                    <div className="flex items-center gap-2 border-b border-slate-100 pb-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-600 shrink-0"></span>
                      <h4 className="font-extrabold text-sm text-slate-900 font-serif">
                        Apel Upacara
                      </h4>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 bg-emerald-50/70 p-2.5 rounded-lg border border-emerald-100">
                        <span className="font-extrabold text-emerald-800 shrink-0 min-w-[42px]">Putra:</span>
                        <span className="font-bold text-slate-800">{HSN_2026_DATA.dressCode.upacara.putra}</span>
                      </div>
                      <div className="flex items-center gap-2 bg-emerald-50/70 p-2.5 rounded-lg border border-emerald-100">
                        <span className="font-extrabold text-emerald-800 shrink-0 min-w-[42px]">Putri:</span>
                        <span className="font-bold text-slate-800">{HSN_2026_DATA.dressCode.upacara.putri}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB: SANG JUARAWAN LOMBA */}
          {activeTab === 'juara' && (
            <div className="space-y-8 animate-in fade-in duration-200">
              
              {/* Official Header Banner */}
              <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#123124] via-[#1B4332] to-[#0A1B14] text-white p-6 sm:p-8 md:p-10 border border-emerald-900/60 shadow-lg">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(245,158,11,0.2),transparent_55%)] pointer-events-none" />
                <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
                  <div className="space-y-3">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400/20 border border-amber-300/40 text-amber-300 text-xs font-mono font-extrabold uppercase tracking-wider">
                      <Trophy className="w-4 h-4 text-amber-400" />
                      <span>Hasil Resmi Dewan Juri &amp; Panitia</span>
                    </div>

                    <div className="space-y-1">
                      <p className="text-xs uppercase tracking-widest text-emerald-200 font-mono font-bold">
                        MDT RIYADLUL JANNAH CIKARANG UTARA BEKASI
                      </p>
                      <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-serif text-white tracking-tight">
                        SANG JUARAWAN LOMBA
                      </h3>
                      <p className="text-sm sm:text-base font-serif text-amber-300 font-bold">
                        MUSYABAQOH HARI SANTRI NASIONAL • 22 OKTOBER 2026
                      </p>
                    </div>

                    <p className="text-xs sm:text-sm text-emerald-100/85 font-light max-w-2xl leading-relaxed">
                      Segenap Keluarga Besar MDT &amp; Pondok Pesantren Riyadlul Jannah Pasir Gombong mengucapkan selamat dan berkah atas capaian gemilang para santri juarawan pada 8 cabang perlombaan Hari Santri Nasional 2026.
                    </p>
                  </div>

                  {/* Share & Copy Action Buttons */}
                  <div className="flex flex-col sm:flex-row md:flex-col gap-2.5 shrink-0">
                    <button
                      onClick={handleShareWinnersWA}
                      className="inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-xs font-bold transition-all shadow-sm cursor-pointer"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Bagikan ke WhatsApp</span>
                    </button>
                    <button
                      onClick={handleCopyWinners}
                      className="inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-white/10 hover:bg-white/20 text-white rounded-xl text-xs font-bold border border-white/20 transition-all cursor-pointer"
                    >
                      {copiedWinnersText ? (
                        <>
                          <Check className="w-4 h-4 text-emerald-300" />
                          <span className="text-emerald-300">Tersalin ke Clipboard!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-4 h-4" />
                          <span>Salin Teks Pengumuman</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>

              {/* Filter Pills */}
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-3">
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setWinnerCategoryFilter('all')}
                    className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                      winnerCategoryFilter === 'all'
                        ? 'bg-emerald-800 text-white shadow-2xs'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    Semua Juarawan (8)
                  </button>
                  <button
                    onClick={() => setWinnerCategoryFilter('keagamaan')}
                    className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                      winnerCategoryFilter === 'keagamaan'
                        ? 'bg-emerald-800 text-white shadow-2xs'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    Musabaqah Kitab &amp; Al-Qur'an (5)
                  </button>
                  <button
                    onClick={() => setWinnerCategoryFilter('olahraga')}
                    className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                      winnerCategoryFilter === 'olahraga'
                        ? 'bg-emerald-800 text-white shadow-2xs'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    Olahraga Santri &amp; RJ Cup (3)
                  </button>
                </div>

                <div className="text-xs font-mono text-slate-500 font-semibold">
                  MDT Riyadlul Jannah Pasir Gombong
                </div>
              </div>

              {/* WINNERS CARDS (1 - 8) */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {HSN_2026_DATA.winners
                  .filter((w: any) => {
                    if (winnerCategoryFilter === 'keagamaan') return w.no <= 5;
                    if (winnerCategoryFilter === 'olahraga') return w.no >= 6;
                    return true;
                  })
                  .map((item: any) => {
                    const isFutsal = !!item.isTeam;
                    return (
                      <div
                        key={item.no}
                        className={`relative overflow-hidden rounded-2xl transition-all ${
                          isFutsal
                            ? 'md:col-span-2 border-2 border-amber-400 bg-gradient-to-br from-amber-50/90 via-white to-emerald-50/50 p-6 sm:p-7 shadow-md'
                            : 'border-2 border-emerald-100/90 hover:border-amber-400 bg-white p-5 sm:p-6 shadow-2xs hover:shadow-sm'
                        }`}
                      >
                        {/* Top bar with category & badge */}
                        <div className="flex items-center justify-between gap-2 border-b border-slate-100 pb-3 mb-4">
                          <div className="flex items-center gap-2">
                            <span className="w-7 h-7 rounded-lg bg-emerald-900 text-amber-300 font-mono font-extrabold flex items-center justify-center text-xs">
                              0{item.no}
                            </span>
                            <span className="text-xs sm:text-sm font-black font-mono tracking-wider uppercase text-emerald-950">
                              {item.category}
                            </span>
                          </div>

                          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-100 text-amber-900 rounded-full text-xs font-bold font-mono border border-amber-300/80 shadow-2xs">
                            <span className="text-sm">{item.medal}</span>
                            <span>{item.badge}</span>
                          </div>
                        </div>

                        {/* Winner Name & Stage */}
                        <div className="space-y-2">
                          <p className="text-[11px] font-mono uppercase tracking-wider text-slate-400 font-semibold">
                            Sang Juarawan / Pemenang:
                          </p>
                          <div className="flex items-center gap-3">
                            <span className="text-2xl sm:text-3xl select-none">
                              {item.medal}
                            </span>
                            <div>
                              <h4 className="text-xl sm:text-2xl font-black font-serif text-emerald-950 tracking-tight">
                                {item.winner}
                              </h4>
                              <p className="text-xs text-slate-500 font-light mt-0.5">
                                {item.stage}
                              </p>
                            </div>
                          </div>
                        </div>

                        {/* If Futsal Team: Show full squad roster */}
                        {isFutsal && item.teamMembers && (
                          <div className="mt-6 pt-5 border-t border-amber-200/80 space-y-3">
                            <div className="flex items-center justify-between">
                              <span className="text-xs font-mono font-extrabold uppercase tracking-wider text-amber-950 flex items-center gap-1.5">
                                <span>⚽</span>
                                <span>Daftar Skuad Juara Green Matcha:</span>
                              </span>
                              <span className="text-[10px] font-mono bg-emerald-800 text-white px-2.5 py-0.5 rounded-md font-bold">
                                5 Personil Tim
                              </span>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
                              {item.teamMembers.map((member: any) => (
                                <div
                                  key={member.no}
                                  className="p-3 bg-white rounded-xl border border-amber-200/90 shadow-2xs flex flex-col justify-between"
                                >
                                  <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 font-bold mb-1">
                                    <span>#{member.no}</span>
                                    <span className="px-1.5 py-0.5 bg-emerald-100 text-emerald-900 rounded font-bold">
                                      {member.role}
                                    </span>
                                  </div>
                                  <div className="font-extrabold text-xs sm:text-sm text-slate-900 font-serif leading-snug">
                                    {member.name}
                                  </div>
                                  <div className="text-[10px] text-slate-500 font-medium mt-1">
                                    {member.roleDesc}
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}
              </div>

              {/* Congratulatory Footer */}
              <div className="p-6 rounded-2xl bg-gradient-to-r from-emerald-50 via-emerald-100/50 to-amber-50 border border-emerald-200 flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">🌿</span>
                  <div>
                    <h5 className="font-serif font-bold text-sm sm:text-base text-emerald-950">
                      Barakallahu Fiikum Lil Juarawan Wal Juarawat!
                    </h5>
                    <p className="text-xs text-emerald-900/80 font-light">
                      Penyerahan piala penghargaan, medali, dan souvenir resmi dilaksanakan pada agenda penutupan HSN 2026, Kamis 22 Oktober 2026 pukul 16:00 - 17:00 WIB di Panggung Utama MDT Riyadlul Jannah.
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <button
                    onClick={() => {
                      setActiveTab('lomba');
                      const el = document.getElementById('hsn-content-tabs');
                      el?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="px-4 py-2 bg-white hover:bg-slate-50 text-emerald-900 border border-emerald-300 rounded-xl text-xs font-bold transition-all cursor-pointer shadow-2xs"
                  >
                    Juknis Lomba
                  </button>
                  <button
                    onClick={handleShareWinnersWA}
                    className="px-4 py-2 bg-emerald-800 hover:bg-emerald-900 text-white rounded-xl text-xs font-bold transition-all cursor-pointer shadow-2xs flex items-center gap-1.5"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>Sebar ke WA</span>
                  </button>
                </div>
              </div>

            </div>
          )}

          {/* TAB 2: MUSABAQAH & LOMBA */}
          {activeTab === 'lomba' && (
            <div className="space-y-6 animate-in fade-in duration-200">
              
              {/* Alert Link to Sang Juarawan */}
              <div className="p-4 rounded-xl bg-gradient-to-r from-amber-50 to-amber-100/70 border border-amber-300 flex flex-col sm:flex-row items-center justify-between gap-3 shadow-2xs">
                <div className="flex items-center gap-2.5">
                  <span className="text-2xl">🏆</span>
                  <div>
                    <p className="text-xs font-extrabold font-serif text-amber-950">
                      Musabaqah &amp; Turnamen Futsal HSN 2026 telah selesai &amp; Sang Juarawan telah ditetapkan!
                    </p>
                    <p className="text-[11px] text-amber-900/80 font-light">
                      Daftar 8 santri juarawan resmi telah diumumkan pada 22 Oktober 2026.
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setActiveTab('juara')}
                  className="shrink-0 px-3.5 py-1.5 bg-amber-500 hover:bg-amber-600 text-amber-950 rounded-lg text-xs font-bold uppercase tracking-wider transition-all cursor-pointer shadow-2xs flex items-center gap-1.5"
                >
                  <Trophy className="w-3.5 h-3.5" />
                  <span>Lihat Sang Juarawan</span>
                </button>
              </div>

              <div className="border-b border-slate-100 pb-4">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-100 text-emerald-800 text-[11px] font-mono font-bold rounded-lg uppercase tracking-wider mb-2">
                  <Trophy className="w-3.5 h-3.5 text-emerald-700" />
                  <span>MUSABAQAH &amp; PERLOMBAAN HARI SANTRI 2026</span>
                </div>
                <h3 className="text-xl md:text-2xl font-extrabold font-serif text-slate-900">
                  Musabaqah Keagamaan Salaf &amp; Olahraga Santri
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 font-light">
                  Ajang unjuk kompetensi pembacaan kitab salaf, seni kaligrafi Al-Qur'an, tilawah, tahfidz, serta ketangkasan olahraga santri putra &amp; putri.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {HSN_2026_DATA.competitions.map((comp: any, idx: number) => (
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
                        {comp.schedule && (
                          <p className="text-amber-900 font-semibold flex items-center gap-1 bg-amber-50 p-1.5 rounded-md border border-amber-100">
                            <Clock className="w-3.5 h-3.5 text-amber-700 shrink-0" />
                            <span><strong>Jadwal:</strong> {comp.schedule}</span>
                          </p>
                        )}
                        <p>
                          <strong className="font-semibold text-slate-800">Sasaran:</strong> {comp.target}
                        </p>
                        <p>
                          <strong className="font-semibold text-slate-800">Materi Uji:</strong> {comp.materials}
                        </p>
                        {comp.pj && (
                          <p className="text-emerald-800 font-bold bg-emerald-50/70 p-2 rounded-lg border border-emerald-100 flex items-center justify-between">
                            <span>Penanggung Jawab (PJ):</span>
                            <span className="font-mono text-emerald-950 font-extrabold">{comp.pj}</span>
                          </p>
                        )}
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

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 flex flex-col sm:flex-row items-center justify-between gap-2">
                <span>Pendaftaran peserta lomba dikoordinasikan langsung melalui PJ Lomba &amp; masing-masing Wali Kelas.</span>
                <span className="font-bold text-emerald-800">Koordinator PJ: {HSN_2026_DATA.committee.koordinatorPJ}</span>
              </div>
            </div>
          )}

          {/* TAB 3: SUSUNAN PANITIA */}
          {activeTab === 'panitia' && (
            <div className="space-y-8 animate-in fade-in duration-200">
              <div className="border-b border-slate-100 pb-4">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-100 text-emerald-800 text-[11px] font-mono font-bold rounded-lg uppercase tracking-wider mb-2">
                  <Users className="w-3.5 h-3.5 text-emerald-700" />
                  <span>ORGANIZING COMMITTEE HARI SANTRI NASIONAL 2026</span>
                </div>
                <h3 className="text-xl md:text-2xl font-extrabold font-serif text-slate-900">
                  Susunan Panitia Pelaksana Hari Santri Nasional 2026
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 font-light">
                  Madrasah Diniyah Taklimiyah Riyadlul Jannah Pasir Gombong, Cikarang Utara
                </p>
              </div>

              {/* Leadership & Koordinator PJ */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-200 text-center space-y-1">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-800 font-bold block">
                    Pelindung
                  </span>
                  <h4 className="text-base font-bold font-serif text-slate-900">
                    {HSN_2026_DATA.committee.pelindung}
                  </h4>
                  <p className="text-xs text-slate-600 font-light">Pengasuh Pondok Pesantren</p>
                </div>

                <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-200 text-center space-y-1">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-800 font-bold block">
                    Penasehat
                  </span>
                  <h4 className="text-base font-bold font-serif text-slate-900">
                    {HSN_2026_DATA.committee.penasehat}
                  </h4>
                  <p className="text-xs text-slate-600 font-light">Kepala MDT Riyadlul Jannah</p>
                </div>

                <div className="p-4 rounded-2xl bg-gradient-to-br from-amber-50 to-amber-100/70 border-2 border-amber-300 text-center space-y-1 sm:col-span-1 shadow-2xs">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-amber-900 font-extrabold block flex items-center justify-center gap-1">
                    <span>👤</span>
                    <span>KOORDINATOR / PJ HSN 2026</span>
                  </span>
                  <h4 className="text-lg font-bold font-serif text-amber-950">
                    {HSN_2026_DATA.committee.koordinatorPJ}
                  </h4>
                  <p className="text-xs text-amber-800/90 font-medium">Penanggung Jawab Utama Kegiatan</p>
                </div>
              </div>

              {/* Core Officers: Ketua & Wakil Ketua */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-5 rounded-2xl bg-white border-2 border-emerald-600/40 shadow-xs flex items-center justify-between">
                  <div className="space-y-1">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-700 font-extrabold block">
                      Ketua Pelaksana
                    </span>
                    <h4 className="text-lg sm:text-xl font-bold font-serif text-slate-900">
                      {HSN_2026_DATA.committee.ketua}
                    </h4>
                    <p className="text-xs text-slate-500 font-light">Ketua Panitia HSN 2026</p>
                  </div>
                  <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-lg font-serif">
                    01
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs flex items-center justify-between">
                  <div className="space-y-1">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-slate-500 font-bold block">
                      Wakil Ketua
                    </span>
                    <h4 className="text-lg sm:text-xl font-bold font-serif text-slate-900">
                      {HSN_2026_DATA.committee.wakilKetua}
                    </h4>
                    <p className="text-xs text-slate-500 font-light">Wakil Ketua Pelaksana</p>
                  </div>
                  <div className="w-12 h-12 rounded-xl bg-slate-100 text-slate-700 flex items-center justify-center font-bold text-lg font-serif">
                    02
                  </div>
                </div>
              </div>

              {/* Sekretaris & Bendahara */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4.5 rounded-xl border border-slate-200 bg-white flex items-center justify-between shadow-2xs">
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 font-bold block">
                      Sekretaris
                    </span>
                    <h5 className="font-bold text-base text-slate-800 font-serif">
                      {HSN_2026_DATA.committee.sekretaris}
                    </h5>
                    <p className="text-[11px] text-slate-500 font-light">Administrasi, surat-menyurat &amp; kesekretariatan</p>
                  </div>
                  <FileText className="w-5 h-5 text-emerald-600" />
                </div>

                <div className="p-4.5 rounded-xl border border-slate-200 bg-white flex items-center justify-between shadow-2xs">
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 font-bold block">
                      Bendahara
                    </span>
                    <h5 className="font-bold text-base text-slate-800 font-serif">
                      {HSN_2026_DATA.committee.bendahara}
                    </h5>
                    <p className="text-[11px] text-slate-500 font-light">Keuangan &amp; anggaran perayaan HSN 2026</p>
                  </div>
                  <Award className="w-5 h-5 text-amber-600" />
                </div>
              </div>

              {/* Bidang, Seksi & Penanggung Jawab Lomba / Olahraga */}
              <div className="space-y-4">
                <span className="text-xs uppercase font-extrabold tracking-widest text-slate-500 block px-1">
                  📋 Susunan Panitia &amp; Penanggung Jawab Bidang:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
                  <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs space-y-1">
                    <span className="text-[11px] font-bold text-emerald-800 uppercase tracking-wider block">
                      Sesi Acara
                    </span>
                    <p className="text-sm font-bold font-serif text-slate-900">
                      {HSN_2026_DATA.committee.sesiAcara}
                    </p>
                    <p className="text-[10px] text-slate-500">Rundown upacara &amp; susunan kegiatan</p>
                  </div>

                  <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs space-y-1">
                    <span className="text-[11px] font-bold text-emerald-800 uppercase tracking-wider block">
                      PJ Lomba
                    </span>
                    <p className="text-sm font-bold font-serif text-slate-900">
                      {HSN_2026_DATA.committee.pjLomba}
                    </p>
                    <p className="text-[10px] text-slate-500">Musabaqah kitab salaf, MHQ, sholat, da'i cilik</p>
                  </div>

                  <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs space-y-1">
                    <span className="text-[11px] font-bold text-emerald-800 uppercase tracking-wider block">
                      PJ Badminton
                    </span>
                    <p className="text-sm font-bold font-serif text-slate-900">
                      {HSN_2026_DATA.committee.pjBadminton}
                    </p>
                    <p className="text-[10px] text-slate-500">Turnamen bulutangkis santri</p>
                  </div>

                  <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs space-y-1">
                    <span className="text-[11px] font-bold text-emerald-800 uppercase tracking-wider block">
                      PJ Futsal
                    </span>
                    <p className="text-sm font-bold font-serif text-slate-900">
                      {HSN_2026_DATA.committee.pjFutsal}
                    </p>
                    <p className="text-[10px] text-slate-500">Turnamen futsal antar-kelas santri</p>
                  </div>

                  <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs space-y-1">
                    <span className="text-[11px] font-bold text-emerald-800 uppercase tracking-wider block">
                      Keamanan &amp; Kebersihan
                    </span>
                    <p className="text-sm font-bold font-serif text-slate-900">
                      {HSN_2026_DATA.committee.keamananKebersihan}
                    </p>
                    <p className="text-[10px] text-slate-500">Ketertiban kawasan &amp; kebersihan madrasah</p>
                  </div>

                  <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs space-y-1">
                    <span className="text-[11px] font-bold text-emerald-800 uppercase tracking-wider block">
                      Sound System
                    </span>
                    <p className="text-sm font-bold font-serif text-slate-900">
                      {HSN_2026_DATA.committee.soundSystem}
                    </p>
                    <p className="text-[10px] text-slate-500">Tata suara upacara, pawai &amp; panggung</p>
                  </div>

                  <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs space-y-1">
                    <span className="text-[11px] font-bold text-emerald-800 uppercase tracking-wider block">
                      Dokumentasi
                    </span>
                    <p className="text-sm font-bold font-serif text-slate-900">
                      {HSN_2026_DATA.committee.dokumentasi}
                    </p>
                    <p className="text-[10px] text-slate-500">Foto, rekaman video &amp; arsip media</p>
                  </div>

                  <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs space-y-1">
                    <span className="text-[11px] font-bold text-emerald-800 uppercase tracking-wider block">
                      Konsumsi
                    </span>
                    <p className="text-sm font-bold font-serif text-slate-900">
                      {HSN_2026_DATA.committee.konsumsi}
                    </p>
                    <p className="text-[10px] text-slate-500">Logistik konsumsi asatidz &amp; santri</p>
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

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-slate-500 pt-1">
                <span>Tema: "{HSN_2026_DATA.themeKemenag}" (Kemenag) &amp; "{HSN_2026_DATA.themePBNU}" (PBNU)</span>
                <button
                  onClick={handleShareWA}
                  className="text-emerald-700 font-bold hover:underline flex items-center gap-1 cursor-pointer shrink-0"
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
