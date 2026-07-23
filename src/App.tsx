/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { ArrowUpRight, ShieldCheck, Mail, MapPin, Phone, Instagram, Youtube } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Profile from './components/Profile';
import Programs from './components/Programs';
import Announcements from './components/Announcements';
import Contact from './components/Contact';
import Gallery from './components/Gallery';
import About from './components/About';
import Rules from './components/Rules';
import AcademicCalendar from './components/AcademicCalendar';
import WisdomBanner from './components/WisdomBanner';
import { SCHOOL_PROFILE } from './data';
import schoolLogo from './assets/images/lambang_mdt_rj_logo.png';

export default function App() {
  const [currentTab, setCurrentTab] = useState<string>('home');
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme) {
        return savedTheme === 'dark';
      }
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <div className="min-h-screen bg-brand-cream text-brand-dark flex flex-col font-sans select-text selection:bg-emerald-100 selection:text-emerald-900 transition-colors duration-300">
      
      {/* Top Banner with Editorial aesthetic */}
      <div className="bg-brand-green text-brand-cream py-2.5 px-4 text-center border-b border-brand-divider text-[10px] md:text-xs tracking-widest uppercase font-sans font-extrabold flex items-center justify-center gap-2">
        <span className="w-2 h-2 rounded-full bg-[#C4A484] animate-pulse shrink-0" />
        <span>Portal Informasi Resmi Madrasah Diniyah Taklimiyah Riyadlul Jannah Pasir Gombong</span>
      </div>

      {/* Cohesive Navbar with Theme Switcher */}
      <Navbar currentTab={currentTab} setCurrentTab={setCurrentTab} isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />

      {/* Main Page Layout Container */}
      <main className="flex-1 w-full max-w-7xl mx-auto border-x border-brand-divider bg-white">
        
        {/* TAB Routing with smooth state transition */}
        {currentTab === 'home' && (
          <div>
            <Hero setCurrentTab={setCurrentTab} />
            
            {/* Wisdom / Maqolah Banner */}
            <WisdomBanner />
            
            {/* Quick Home Page Intro Featurettes */}
            <div className="grid grid-cols-1 md:grid-cols-3 border-b border-brand-divider bg-brand-cream/10 font-sans">
              
              <div className="p-8 border-b md:border-b-0 md:border-r border-brand-divider flex items-start gap-4 hover:bg-white transition-colors">
                <span className="text-4xl font-extrabold text-brand-green font-serif leading-none">I.</span>
                <div>
                  <h4 className="text-xs uppercase font-extrabold tracking-widest text-brand-dark mb-1">Kurikulum Terakreditasi</h4>
                  <p className="text-[11px] leading-relaxed text-brand-dark/70">
                    Sinkronisasi penuh dengan standar Kemenag RI dan dipadukan dengan khazanah kitab kuning salafiyah.
                  </p>
                </div>
              </div>

              <div className="p-8 border-b md:border-b-0 md:border-r border-brand-divider flex items-start gap-4 hover:bg-white transition-colors">
                <span className="text-4xl font-extrabold text-brand-green font-serif leading-none">II.</span>
                <div>
                  <h4 className="text-xs uppercase font-extrabold tracking-widest text-brand-dark mb-1">Pendidik Berkompeten</h4>
                  <p className="text-[11px] leading-relaxed text-brand-dark/70">
                    Dibersamai oleh asatidzah alumni pondok pesantren terkemuka yang bersertifikat dan amanah.
                  </p>
                </div>
              </div>

              <div className="p-8 flex items-start gap-4 hover:bg-white transition-colors">
                <span className="text-4xl font-extrabold text-brand-green font-serif leading-none">III.</span>
                <div>
                  <h4 className="text-xs uppercase font-extrabold tracking-widest text-brand-dark mb-1">Sinergi Wali &amp; Santri</h4>
                  <p className="text-[11px] leading-relaxed text-brand-dark/70">
                    Program monitoring perkembangan akhlak dan setoran hafalan Quran terintegrasi secara mingguan.
                  </p>
                </div>
              </div>

            </div>

            {/* Quick Welcome & History Highlights */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 border-b border-brand-divider items-stretch">
              
              {/* Sambutan Kepala Madrasah */}
              <div className="lg:col-span-5 p-8 md:p-12 border-b lg:border-b-0 lg:border-r border-brand-divider bg-brand-cream/35 flex flex-col justify-between">
                <div className="space-y-6">
                  <span className="text-[10px] uppercase tracking-widest font-sans font-extrabold text-brand-green px-2.5 py-1 bg-brand-green/10 inline-block">
                    Sambutan Kepala Madrasah
                  </span>
                  <div className="relative">
                    <span className="absolute -top-6 -left-4 text-7xl text-brand-gold/20 font-serif leading-none">“</span>
                    <p className="italic text-brand-dark/90 leading-relaxed text-base font-serif relative z-10 pl-2">
                      "Pendidikan agama merupakan perisai utama moral anak-anak kita. Di MDT Riyadlul Jannah, kami berkomitmen mengajarkan cara mengeja Al-Qur'an secara tartil, serta menanamkan adab agar mereka tumbuh menjadi generasi bertaqwa."
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 pt-8 mt-8 border-t border-brand-divider/40">
                  <div className="w-12 h-12 rounded-full overflow-hidden bg-brand-gold/10 border border-brand-divider shrink-0">
                    <div className="w-full h-full bg-emerald-800 text-white font-serif font-extrabold flex items-center justify-center text-lg">
                      {SCHOOL_PROFILE.headmaster.charAt(0)}
                    </div>
                  </div>
                  <div>
                    <h5 className="font-extrabold text-sm text-brand-dark font-serif leading-none">{SCHOOL_PROFILE.headmaster}</h5>
                    <p className="text-[10px] uppercase font-sans tracking-widest text-brand-dark/50 mt-1 font-bold">Kepala MDT Riyadlul Jannah</p>
                  </div>
                </div>
              </div>

              {/* Visi Misi Summary card */}
              <div className="lg:col-span-7 p-8 md:p-12 space-y-8 flex flex-col justify-center">
                <div className="space-y-3">
                  <span className="text-xs uppercase tracking-widest font-sans font-extrabold text-[#C4A484] block">Kiprah Pengabdian</span>
                  <h3 className="text-2xl md:text-3xl font-bold text-brand-dark font-serif tracking-tight leading-tight">
                    Mencetak Generasi Sholih, Mandiri, dan Berpengetahuan Agama Luas
                  </h3>
                </div>
                
                <p className="text-sm md:text-base leading-relaxed text-slate-600 font-sans font-light">
                  {SCHOOL_PROFILE.history}
                </p>

                <div className="pt-4">
                  <button 
                    onClick={() => setCurrentTab('profile')}
                    className="inline-flex items-center gap-1.5 font-sans text-xs uppercase tracking-widest font-extrabold text-brand-green border-b-2 border-brand-green hover:text-brand-gold hover:border-brand-gold transition-colors pb-1 cursor-pointer"
                  >
                    <span>Pelajari Sejarah Lengkap Kami</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

            </div>

            {/* Prominent Visi & Misi Section on Home Page */}
            <div className="border-b border-brand-divider bg-[#FAF9F6] p-8 md:p-12 space-y-10">
              <div className="text-center max-w-3xl mx-auto space-y-2">
                <span className="text-[10px] uppercase tracking-widest font-sans font-extrabold text-brand-green px-2.5 py-1 bg-brand-green/10 inline-block">
                  Arah &amp; Komitmen Kami
                </span>
                <h3 className="text-2xl md:text-3xl font-bold text-brand-dark font-serif tracking-tight">
                  Visi &amp; Misi Madrasah
                </h3>
                <p className="text-xs md:text-sm text-slate-500 font-light max-w-xl mx-auto">
                  Prinsip utama yang memandu seluruh proses pembelajaran, pembinaan karakter, dan pengelolaan pendidikan di MDT Riyadlul Jannah.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
                {/* Visi Card */}
                <div className="lg:col-span-5 bg-brand-green text-brand-cream p-8 rounded-2xl flex flex-col justify-between border border-brand-divider/25">
                  <div className="space-y-4">
                    <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#C4A484]">Visi</span>
                    <blockquote className="text-lg md:text-xl font-serif font-semibold italic leading-relaxed">
                      "{SCHOOL_PROFILE.vision}"
                    </blockquote>
                  </div>
                  <div className="pt-6 border-t border-brand-cream/10 mt-6 flex items-center justify-between text-[11px] uppercase tracking-wider font-mono opacity-80">
                    <span>MDT Riyadlul Jannah</span>
                    <span>Sejak {SCHOOL_PROFILE.establishedYear}</span>
                  </div>
                </div>

                {/* Misi Card */}
                <div className="lg:col-span-7 bg-white p-8 rounded-2xl border border-brand-divider flex flex-col justify-between">
                  <div className="space-y-4">
                    <span className="text-[10px] font-extrabold uppercase tracking-widest text-brand-green">Misi</span>
                    <div className="space-y-3.5">
                      {SCHOOL_PROFILE.mission.map((item, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <span className="w-5 h-5 rounded-full bg-brand-green/10 text-brand-green flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">
                            {index + 1}
                          </span>
                          <p className="text-xs text-brand-dark/85 leading-relaxed">
                            {item}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="pt-4 border-t border-brand-divider/50 mt-4 text-right">
                    <button 
                      onClick={() => setCurrentTab('profile')}
                      className="text-[11px] font-bold text-brand-green hover:text-brand-gold hover:underline"
                    >
                      Lihat Detail Struktur Madrasah &rarr;
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {currentTab === 'profile' && <Profile />}
        {currentTab === 'programs' && <Programs />}
        {currentTab === 'rules' && <Rules />}
        {currentTab === 'gallery' && <Gallery />}
        {currentTab === 'calendar' && <AcademicCalendar />}
        {currentTab === 'announcements' && <Announcements />}
        {currentTab === 'about' && <About />}
        {currentTab === 'contact' && <Contact />}

      </main>

      {/* Footer Grid designed matching Editorial style */}
      <footer className="w-full bg-white border-t border-brand-divider grid grid-cols-1 md:grid-cols-12 gap-0 z-10">
        
        {/* Col 1: Brand Info */}
        <div className="md:col-span-4 p-8 border-b md:border-b-0 md:border-r border-brand-divider flex flex-col justify-between bg-brand-cream/20">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img 
                src={schoolLogo} 
                alt="Logo MDT" 
                className="w-14 h-14 md:w-16 md:h-16 object-contain rounded-full border border-brand-divider/50 bg-white p-0.5"
                referrerPolicy="no-referrer"
              />
              <div className="flex flex-col">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[9px] uppercase tracking-widest font-sans font-extrabold text-brand-green">Madrasah Diniyah Taklimiyah</span>
                  <span className="text-[10px] font-serif text-brand-green font-bold" dir="rtl">المدرسة الدّينيّة التعليميّة</span>
                </div>
                <div className="flex items-baseline space-x-2">
                  <h4 className="text-xl font-serif font-black tracking-tight text-brand-dark leading-tight">RIYADLUL JANNAH</h4>
                  <span className="text-sm font-serif text-brand-gold font-bold" dir="rtl">رياض الجنّة</span>
                </div>
                <span className="text-xs font-sans text-brand-dark/60 mt-0.5">Pasir Gombong, Cikarang Utara</span>
              </div>
            </div>
            <p className="text-xs font-sans text-brand-dark/65 leading-relaxed font-light">
              Membentuk generasi Qur’ani yang cerdas secara spritual, luhur secara akhlak, dan teguh mengamalkan syari’at Islam Ahlussunnah Wal Jama’ah.
            </p>
            {/* Social Media Links (Logo Only) */}
            <div className="flex items-center gap-3 pt-3 border-t border-brand-divider/20 font-sans">
              <span className="text-[10px] uppercase tracking-wider font-extrabold text-brand-dark/50">Media Sosial:</span>
              <div className="flex items-center gap-2">
                <a 
                  href="https://www.instagram.com/ppriyadluljannahpusat" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  title="Instagram"
                  className="w-9 h-9 rounded-full bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 text-white flex items-center justify-center hover:scale-110 transition-transform shadow-2xs cursor-pointer"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a 
                  href="https://www.tiktok.com/@ppriyadluljannahpusat" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  title="TikTok"
                  className="w-9 h-9 rounded-full bg-black text-white flex items-center justify-center hover:scale-110 transition-transform shadow-2xs cursor-pointer"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.02 1.73 4.1 1.13 1.08 2.65 1.66 4.22 1.75v3.86c-1.39-.03-2.76-.41-3.95-1.14-.65-.41-1.22-.95-1.65-1.59v7.8c-.04 2.1-.85 4.14-2.32 5.64-1.62 1.62-3.9 2.49-6.19 2.39-2.3-.04-4.52-.98-6.05-2.72-1.57-1.8-2.31-4.22-2.03-6.59.26-2.22 1.51-4.24 3.39-5.4 1.83-1.12 4.1-1.39 6.16-.72v4.06c-1.1-.53-2.43-.45-3.46.22-1.01.65-1.61 1.78-1.58 2.98.02 1.25.7 2.4 1.77 3.03 1.08.64 2.45.64 3.53 0 1.05-.63 1.71-1.78 1.71-3v-13.8z"/>
                  </svg>
                </a>
                <a 
                  href={SCHOOL_PROFILE.youtubeUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  title="YouTube"
                  className="w-9 h-9 rounded-full bg-red-600 text-white flex items-center justify-center hover:scale-110 transition-transform shadow-2xs cursor-pointer"
                >
                  <Youtube className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
          <span className="text-[10px] uppercase font-mono tracking-widest text-brand-dark/40 mt-8 block">
            © 2026 MDT Riyadlul Jannah. All Rights Reserved.
          </span>
        </div>

        {/* Col 2: Navigation Links */}
        <div className="md:col-span-4 p-8 border-b md:border-b-0 md:border-r border-brand-divider flex flex-col justify-between">
          <div className="space-y-4">
            <h5 className="text-[10px] uppercase tracking-widest font-sans font-extrabold text-brand-green">Peta Navigasi</h5>
            <div className="grid grid-cols-2 gap-x-4 gap-y-3 font-sans text-xs font-bold text-brand-dark/80">
              <button onClick={() => { setCurrentTab('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="text-left hover:text-brand-green cursor-pointer">Beranda</button>
              <button onClick={() => { setCurrentTab('profile'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="text-left hover:text-brand-green cursor-pointer">Profil &amp; Guru</button>
              <button onClick={() => { setCurrentTab('programs'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="text-left hover:text-brand-green cursor-pointer">Program Ajar</button>
              <button onClick={() => { setCurrentTab('rules'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="text-left hover:text-brand-green cursor-pointer text-emerald-800">Tata Tertib</button>
              <button onClick={() => { setCurrentTab('gallery'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="text-left hover:text-brand-green cursor-pointer">Galeri Foto</button>
              <button onClick={() => { setCurrentTab('calendar'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="text-left hover:text-brand-green cursor-pointer">Kalender Akademik</button>
              <button onClick={() => { setCurrentTab('announcements'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="text-left hover:text-brand-green cursor-pointer">Berita &amp; Agenda</button>
              <button onClick={() => { setCurrentTab('about'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="text-left hover:text-brand-green cursor-pointer">Tentang Kami</button>
              <button onClick={() => { setCurrentTab('contact'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="text-left hover:text-brand-green cursor-pointer">Hubungi Kami</button>
            </div>
          </div>
          
          <div className="pt-6 border-t border-brand-divider/40 text-[10px] font-sans text-brand-dark/50 leading-normal">
            <div>Terdaftar di Kementerian Agama RI</div>
            <div className="mt-0.5 font-semibold text-brand-green">Izin Operasional No: Kd.10.04/3/PP.00.7/4342/2012</div>
          </div>
        </div>

        {/* Col 3: Address & Info */}
        <div className="md:col-span-4 p-8 flex flex-col justify-between bg-brand-cream/10">
          <div className="space-y-4 font-sans">
            <h5 className="text-[10px] uppercase tracking-widest font-sans font-extrabold text-brand-green">Sekretariat Madrasah</h5>
            <div className="space-y-2.5 text-xs text-brand-dark/75">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-brand-green shrink-0 mt-0.5" />
                <span className="leading-relaxed">{SCHOOL_PROFILE.address}</span>
              </div>
              {SCHOOL_PROFILE.phone && (
                <div className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-brand-green shrink-0" />
                  <span>{SCHOOL_PROFILE.phone}</span>
                </div>
              )}
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-brand-green shrink-0" />
                <span>{SCHOOL_PROFILE.email}</span>
              </div>
            </div>
          </div>

          <div className="flex justify-between items-center pt-8 border-t border-brand-divider/40 font-sans">
            <span className="text-[10px] uppercase font-extrabold text-brand-green">Peta Google Maps</span>
            <a 
              href={SCHOOL_PROFILE.mapDirectUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-9 h-9 border border-brand-dark rounded-full flex items-center justify-center text-brand-dark hover:bg-brand-dark hover:text-brand-cream transition-colors shrink-0 cursor-pointer"
            >
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>

      </footer>
    </div>
  );
}
