/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ArrowUpRight, ShieldCheck, Mail, MapPin, Phone } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Profile from './components/Profile';
import Programs from './components/Programs';
import Admission from './components/Admission';
import Portal from './components/Portal';
import Announcements from './components/Announcements';
import Contact from './components/Contact';
import { SCHOOL_PROFILE } from './data';

export default function App() {
  const [currentTab, setCurrentTab] = useState<string>('home');

  return (
    <div className="min-h-screen bg-brand-cream text-brand-dark flex flex-col font-sans select-text selection:bg-emerald-100 selection:text-emerald-900">
      
      {/* Top Banner with Editorial aesthetic */}
      <div className="bg-brand-green text-brand-cream py-2.5 px-4 text-center border-b border-brand-divider text-[10px] md:text-xs tracking-widest uppercase font-sans font-extrabold flex items-center justify-center gap-2">
        <span className="w-2 h-2 rounded-full bg-[#C4A484] animate-pulse shrink-0" />
        <span>Penerimaan Santri Baru TA 2026/2027 Telah Dibuka Secara Online &amp; Offline</span>
      </div>

      {/* Cohesive Navbar */}
      <Navbar currentTab={currentTab} setCurrentTab={setCurrentTab} />

      {/* Main Page Layout Container */}
      <main className="flex-1 w-full max-w-7xl mx-auto border-x border-brand-divider bg-white">
        
        {/* TAB Routing with smooth state transition */}
        {currentTab === 'home' && (
          <div>
            <Hero setCurrentTab={setCurrentTab} />
            
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
          </div>
        )}

        {currentTab === 'profile' && <Profile />}
        {currentTab === 'programs' && <Programs />}
        {currentTab === 'admission' && <Admission />}
        {currentTab === 'portal' && <Portal />}
        {currentTab === 'announcements' && <Announcements />}
        {currentTab === 'contact' && <Contact />}

      </main>

      {/* Footer Grid designed matching Editorial style */}
      <footer className="w-full bg-white border-t border-brand-divider grid grid-cols-1 md:grid-cols-12 gap-0 z-10">
        
        {/* Col 1: Brand Info */}
        <div className="md:col-span-4 p-8 border-b md:border-b-0 md:border-r border-brand-divider flex flex-col justify-between bg-brand-cream/20">
          <div className="space-y-4">
            <div className="flex flex-col">
              <span className="text-[9px] uppercase tracking-widest font-sans font-extrabold text-brand-green">Madrasah Diniyah Taklimiyah</span>
              <h4 className="text-xl md:text-2xl font-serif font-black tracking-tight text-brand-dark">RIYADLUL JANNAH</h4>
              <span className="text-xs italic font-serif text-brand-gold font-bold mt-0.5">Pasir Gombong, Cikarang Utara</span>
            </div>
            <p className="text-xs font-sans text-brand-dark/65 leading-relaxed font-light">
              Membentuk generasi Qur’ani yang cerdas secara spritual, luhur secara akhlak, dan teguh mengamalkan syari’at Islam Ahlussunnah Wal Jama’ah.
            </p>
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
              <button onClick={() => setCurrentTab('home')} className="text-left hover:text-brand-green cursor-pointer">Beranda</button>
              <button onClick={() => setCurrentTab('profile')} className="text-left hover:text-brand-green cursor-pointer">Profil &amp; Guru</button>
              <button onClick={() => setCurrentTab('programs')} className="text-left hover:text-brand-green cursor-pointer">Program Ajar</button>
              <button onClick={() => setCurrentTab('admission')} className="text-left hover:text-brand-green cursor-pointer">Pendaftaran</button>
              <button onClick={() => setCurrentTab('portal')} className="text-left hover:text-brand-green cursor-pointer">Rapor Santri</button>
              <button onClick={() => setCurrentTab('announcements')} className="text-left hover:text-brand-green cursor-pointer">Berita &amp; Agenda</button>
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
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-brand-green shrink-0" />
                <span>{SCHOOL_PROFILE.phone}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-brand-green shrink-0" />
                <span>{SCHOOL_PROFILE.email}</span>
              </div>
            </div>
          </div>

          <div className="flex justify-between items-center pt-8 border-t border-brand-divider/40 font-sans">
            <span className="text-[10px] uppercase font-extrabold text-brand-green">Peta Google Maps</span>
            <a 
              href="https://maps.google.com" 
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
