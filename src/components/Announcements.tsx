/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Calendar, Tag, Search, MessageSquare, AlertCircle, ChevronRight, Award } from 'lucide-react';
import { ANNOUNCEMENTS } from '../data';
import { Announcement } from '../types';

export default function Announcements() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeAnnouncement, setActiveAnnouncement] = useState<Announcement | null>(ANNOUNCEMENTS[0]);

  const categories = [
    { id: 'all', label: 'Semua Berita' },
    { id: 'pengumuman', label: 'Pengumuman' },
    { id: 'kegiatan', label: 'Kegiatan / Acara' },
    { id: 'akademik', label: 'Akademik' }
  ];

  const filteredAnnouncements = ANNOUNCEMENTS.filter(item => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          item.content.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getCategoryStyle = (cat: string) => {
    switch (cat) {
      case 'pengumuman':
        return 'bg-red-50 text-red-800 border-red-100';
      case 'kegiatan':
        return 'bg-blue-50 text-blue-800 border-blue-100';
      case 'akademik':
        return 'bg-emerald-50 text-emerald-800 border-emerald-100';
      default:
        return 'bg-slate-50 text-slate-800 border-slate-100';
    }
  };

  return (
    <div className="py-12 bg-[#F9F7F2] font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 bg-emerald-50 text-emerald-800 text-xs font-semibold rounded-full uppercase tracking-wider">
            <Calendar className="w-3.5 h-3.5" />
            <span>Papan Informasi Madrasah</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#2D2D2D] tracking-tight font-serif">
            Berita, Kegiatan & Agenda Terkini
          </h2>
          <p className="text-slate-600 text-sm md:text-base font-light">
            Ikuti kabar terbaru seputar proses belajar, pengumuman libur, imtihan, dan agenda hari besar Islam di MDT Riyadlul Jannah.
          </p>
        </div>

        {/* Filter and Search Bar */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 bg-white border border-[#D4CFC4] p-4 rounded-2xl shadow-xs">
          {/* Categories */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-lg transition-colors cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-emerald-600 text-white shadow-sm'
                    : 'bg-slate-50 hover:bg-slate-150 text-slate-600'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-64">
            <input
              type="text"
              placeholder="Cari berita atau pengumuman..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 focus:border-emerald-500 rounded-lg text-xs"
            />
            <Search className="absolute left-3 top-2.5 w-4 h-4 text-slate-400" />
          </div>
        </div>

        {/* Announcements Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Announcements list column */}
          <div className="lg:col-span-5 space-y-3">
            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest px-1">Daftar Pengumuman ({filteredAnnouncements.length})</p>
            
            <div className="space-y-3 max-h-[60vh] overflow-y-auto pr-2">
              {filteredAnnouncements.map((item) => {
                const isActive = activeAnnouncement?.id === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveAnnouncement(item)}
                    className={`w-full text-left p-4 rounded-xl border transition-all duration-200 cursor-pointer flex items-start space-x-3.5 relative ${
                      isActive
                        ? 'bg-emerald-600 text-white border-emerald-600 shadow-md shadow-emerald-150'
                        : 'bg-white border-[#D4CFC4] text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    {item.important && (
                      <span className="absolute top-3 right-3 flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                      </span>
                    )}

                    <div className="space-y-1">
                      <div className="flex items-center space-x-2 text-[10px] font-semibold">
                        <span className={`px-2 py-0.5 rounded-sm border uppercase tracking-wider ${
                          isActive ? 'bg-emerald-500/20 text-emerald-100 border-emerald-500/20' : getCategoryStyle(item.category)
                        }`}>
                          {item.category}
                        </span>
                        <span className={isActive ? 'text-emerald-200' : 'text-slate-400'}>{item.date}</span>
                      </div>
                      <h3 className="font-bold text-sm leading-tight line-clamp-2 mt-1">{item.title}</h3>
                    </div>
                  </button>
                );
              })}

              {filteredAnnouncements.length === 0 && (
                <div className="text-center py-8 bg-white border border-slate-100 rounded-xl text-slate-400 italic text-sm">
                  Tidak ada berita dalam kategori atau kriteria pencarian ini.
                </div>
              )}
            </div>
          </div>

          {/* Announcement details display column */}
          <div className="lg:col-span-7 bg-white border border-[#D4CFC4] rounded-3xl p-6 md:p-8 shadow-xs">
            {activeAnnouncement ? (
              <motion.div
                key={activeAnnouncement.id}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                <div className="border-b border-slate-100 pb-5 space-y-3">
                  <div className="flex items-center space-x-3 text-xs">
                    <span className={`px-2.5 py-1 text-[10px] font-bold rounded-md border uppercase tracking-widest ${getCategoryStyle(activeAnnouncement.category)}`}>
                      {activeAnnouncement.category}
                    </span>
                    <span className="text-slate-400 font-semibold">{activeAnnouncement.date}</span>
                    {activeAnnouncement.important && (
                      <span className="px-2 py-0.5 bg-red-100 text-red-800 text-[9px] font-bold rounded-sm uppercase tracking-wider flex items-center space-x-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>Sangat Penting</span>
                      </span>
                    )}
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-[#1B4332] font-serif leading-tight">
                    {activeAnnouncement.title}
                  </h3>
                </div>

                {/* Content text */}
                <div className="space-y-4 text-slate-600 text-sm md:text-base leading-relaxed font-light font-sans">
                  {activeAnnouncement.content.split('\n\n').map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>

                {/* Additional Call to Actions in announcements */}
                {activeAnnouncement.category === 'pengumuman' && (
                  <div className="bg-emerald-50 border border-emerald-100 p-4 rounded-xl flex items-start space-x-3 mt-4">
                    <AlertCircle className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
                    <div className="text-xs">
                      <h4 className="font-bold text-emerald-950">Informasi Sekretariat</h4>
                      <p className="text-emerald-800/80 mt-1 leading-relaxed">
                        Seluruh berkas fisik atau pertanyaan terkait administrasi madrasah dapat dikonsultasikan langsung di kantor sekretariat MDT Riyadlul Jannah setiap hari kerja ba'da Ashar.
                      </p>
                    </div>
                  </div>
                )}
              </motion.div>
            ) : (
              <div className="text-center py-16 text-slate-400 italic font-sans text-sm">
                Pilih pengumuman di sebelah kiri untuk melihat rincian detail.
              </div>
            )}
          </div>

        </div>

        {/* Dynamic Islamic Quotes Calendar Banner */}
        <div className="bg-[#1B4332] text-emerald-100 rounded-3xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <span className="text-xs font-bold text-emerald-300 uppercase tracking-widest block font-sans">Mutiara Hikmah</span>
            <p className="text-lg md:text-xl font-medium font-arabic mt-1 leading-snug">
              "طَلَبُ الْعِلْمِ فَرِيْضَةٌ عَلَى كُلِّ مُسْلِمٍ"
            </p>
            <p className="text-xs text-emerald-200/80 italic mt-1 font-sans">
              "Menuntut ilmu agama adalah kewajiban bagi setiap muslim." (HR. Ibnu Majah)
            </p>
          </div>
          <div className="shrink-0">
            <div className="px-5 py-2.5 bg-white/10 border border-white/10 rounded-xl text-center font-sans text-xs">
              <span className="block font-bold text-emerald-300 uppercase">Sekretariat MDT</span>
              <span className="block text-[10px] text-white mt-0.5">Buka: Senin-Jumat 07.00 - 17.00 WIB</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
