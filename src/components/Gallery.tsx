/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Image as ImageIcon, Calendar, Tag, ChevronLeft, ChevronRight, X, ZoomIn, Search, Layers } from 'lucide-react';

import fotoGedungRJ from '../assets/images/fotogedungrj.jpeg';
import bagianDepanRJ from '../assets/images/bagian depan rj.jpeg';
import ujianDaur2 from '../assets/images/ujiandaur2.jpeg';

interface GalleryItem {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  category: 'belajar' | 'fasilitas' | 'kegiatan' | 'ekstrakurikuler';
  categoryLabel: string;
  date: string;
}

const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-ujian-daur2',
    title: 'Pelaksanaan Ujian Imtihan MDT Daur II',
    description: 'Pelaksanaan Ujian Imtihan MDT Daur II / Semester 2 yang diadakan pada tanggal 2-5 Juni 2026 sebagai bagian dari evaluasi kompetensi keilmuan santri.',
    imageUrl: ujianDaur2,
    category: 'kegiatan',
    categoryLabel: 'Kegiatan Santri',
    date: '2026-06-02'
  },
  {
    id: 'gal-gedung-1',
    title: 'Gedung Utama Pondok Pesantren Riyadlul Jannah',
    description: 'Arsitektur megah gedung utama Pondok Pesantren Riyadlul Jannah di Pasir Gombong, Cikarang Utara. Gedung ini berfungsi sebagai pusat kegiatan belajar-mengajar santri (MDT) dan asrama tempat bermukim.',
    imageUrl: fotoGedungRJ,
    category: 'fasilitas',
    categoryLabel: 'Fasilitas & Gedung',
    date: '2026-07-18'
  },
  {
    id: 'gal-gedung-2',
    title: 'Bagian Depan Kompleks Riyadlul Jannah',
    description: 'Pemandangan gerbang depan dan halaman utama kompleks pesantren dan Madrasah Diniyah Takmiliyah (MDT) Riyadlul Jannah yang asri, rapi, dan kondusif untuk menuntut ilmu.',
    imageUrl: bagianDepanRJ,
    category: 'fasilitas',
    categoryLabel: 'Fasilitas & Gedung',
    date: '2026-07-18'
  },
  {
    id: 'gal-1',
    title: 'Kajian Kitab Kuning Safinatun Najah',
    description: 'Santri tingkat Wustha khusyuk menyimak dan memaknai penjelasan fiqih ibadah menggunakan kitab kuning panduan dasar di bawah bimbingan Ust. Mahrus Ali.',
    imageUrl: 'https://images.unsplash.com/photo-1609599006353-e629f1d40968?auto=format&fit=crop&q=80&w=1000',
    category: 'belajar',
    categoryLabel: 'Kegiatan Belajar',
    date: '2026-05-12'
  },
  {
    id: 'gal-2',
    title: 'Setoran Hafalan Juz Amma Mandiri',
    description: 'Suasana hangat saat santriwati menyetorkan hafalan surah-surah pendek secara tartil kepada Ustazah Halimah Sa\'diyyah di serambi utama madrasah.',
    imageUrl: 'https://images.unsplash.com/photo-1540959733332-eab4deceeaf7?auto=format&fit=crop&q=80&w=1000',
    category: 'belajar',
    categoryLabel: 'Kegiatan Belajar',
    date: '2026-05-20'
  },
  {
    id: 'gal-3',
    title: 'Praktik Tata Cara Shalat Berjamaah',
    description: 'Bimbingan ibadah praktis mengenai kesempurnaan rukun shalat, penataan shaf makmum yang rapat, serta wirid sesudah shalat bagi santri usia dini (Ula).',
    imageUrl: 'https://images.unsplash.com/photo-1590076215667-873d96c8ab2a?auto=format&fit=crop&q=80&w=1000',
    category: 'belajar',
    categoryLabel: 'Kegiatan Belajar',
    date: '2026-06-02'
  },
  {
    id: 'gal-4',
    title: 'Grup Hadroh Rebana Riyadlul Jannah',
    description: 'Tim seni hadroh madrasah yang dilatih oleh Ust. Luqman Hakim sedang memainkan irama shalawat dalam rangka persiapan pentas peringatan hari besar Islam.',
    imageUrl: 'https://images.unsplash.com/photo-1511193311914-0346f16efe90?auto=format&fit=crop&q=80&w=1000',
    category: 'ekstrakurikuler',
    categoryLabel: 'Ekstrakurikuler',
    date: '2026-06-10'
  },
  {
    id: 'gal-5',
    title: 'Fasilitas Ruang Kelas yang Bersih',
    description: 'Tata ruang kelas MDT Riyadlul Jannah yang rapi menggunakan meja kayu lesehan guna mendukung kenyamanan fokus belajar dan kedekatan antar santri.',
    imageUrl: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80&w=1000',
    category: 'fasilitas',
    categoryLabel: 'Fasilitas & Madrasah',
    date: '2026-04-18'
  },
  {
    id: 'gal-6',
    title: 'Belajar Seni Kaligrafi Islam (Khat)',
    description: 'Santri diajarkan dasar-dasar memegang pena bambu dan merangkai huruf hijaiyah berkaidah khat naskhi untuk menumbuhkan rasa cinta estetika Qur\'ani.',
    imageUrl: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&q=80&w=1000',
    category: 'ekstrakurikuler',
    categoryLabel: 'Ekstrakurikuler',
    date: '2026-05-25'
  },
  {
    id: 'gal-7',
    title: 'Semarak Pawai Obor Tahun Baru Hijriyah',
    description: 'Kegiatan tahunan memperingati 1 Muharram di mana para santri didampingi ustadz berkeliling Kampung Pasir Gombong secara tertib melantunkan shalawat.',
    imageUrl: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&q=80&w=1000',
    category: 'kegiatan',
    categoryLabel: 'Kegiatan / PHBI',
    date: '2026-07-02'
  },
  {
    id: 'gal-8',
    title: 'Pertemuan & Konsultasi Wali Santri Berkelanjutan',
    description: 'Kegiatan silaturahim bulanan antara komite madrasah, kepala madrasah, dan wali murid untuk bersinergi menjaga akhlak santri di rumah.',
    imageUrl: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=1000',
    category: 'kegiatan',
    categoryLabel: 'Kegiatan / PHBI',
    date: '2026-06-28'
  },
  {
    id: 'gal-9',
    title: 'Gedung Utama MDT Riyadlul Jannah',
    description: 'Fisik bangunan luar madrasah yang terletak strategis di Kampung Sempu Gardu, Pasir Gombong, menjadi oase bimbingan akhlak anak-anak di tengah lingkungan industri.',
    imageUrl: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&q=80&w=1000',
    category: 'fasilitas',
    categoryLabel: 'Fasilitas & Madrasah',
    date: '2026-04-01'
  }
];

const CATEGORIES = [
  { id: 'all', label: 'Semua Foto' },
  { id: 'belajar', label: 'Kegiatan Belajar' },
  { id: 'fasilitas', label: 'Fasilitas & Gedung' },
  { id: 'kegiatan', label: 'Kegiatan & Acara' },
  { id: 'ekstrakurikuler', label: 'Ekstrakurikuler' }
];

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Filter items based on category and search query
  const filteredItems = GALLERY_ITEMS.filter(item => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.categoryLabel.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handlePrevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null && filteredItems.length > 0) {
      setLightboxIndex((lightboxIndex - 1 + filteredItems.length) % filteredItems.length);
    }
  };

  const handleNextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null && filteredItems.length > 0) {
      setLightboxIndex((lightboxIndex + 1) % filteredItems.length);
    }
  };

  // Format date to Indonesian style
  const formatDateIndo = (dateStr: string) => {
    const months = [
      'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
      'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'
    ];
    const date = new Date(dateStr);
    return `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`;
  };

  return (
    <div className="bg-brand-cream/10 py-12 px-4 md:px-8 max-w-7xl mx-auto font-sans">
      
      {/* Header section with Editorial details */}
      <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
        <div className="flex items-center justify-center gap-2">
          <ImageIcon className="w-5 h-5 text-brand-green" />
          <span className="text-[10px] md:text-xs uppercase tracking-widest font-extrabold text-brand-green px-2.5 py-1 bg-brand-green/10 rounded-sm">
            Dokumentasi Madrasah
          </span>
        </div>
        <h2 className="text-3xl md:text-4xl font-black text-brand-dark font-serif tracking-tight leading-tight">
          Galeri Kegiatan &amp; Fasilitas
        </h2>
        <div className="w-16 h-0.5 bg-brand-gold mx-auto" />
        <p className="text-xs md:text-sm text-slate-600 leading-relaxed font-light max-w-xl mx-auto">
          Arsip visual momen kegembiraan belajar, bimbingan akhlak, perayaan syiar Islam, serta sarana penunjang kegiatan santri di MDT Riyadlul Jannah.
        </p>
      </div>

      {/* Control Panel: Category Filter and Search Box */}
      <div className="bg-white border border-brand-divider p-4 md:p-6 rounded-2xl shadow-xs space-y-4 md:space-y-0 md:flex md:items-center md:justify-between mb-8">
        
        {/* Horizontal scrollable category selectors */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-2 md:pb-0 scrollbar-none shrink-0 -mx-4 px-4 md:mx-0 md:px-0">
          <div className="flex items-center gap-2 pr-2 border-r border-slate-100 hidden md:flex text-slate-400">
            <Layers className="w-4 h-4" />
          </div>
          {CATEGORIES.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2.5 rounded-full text-xs font-bold whitespace-nowrap transition-all duration-150 cursor-pointer ${
                  isSelected 
                    ? 'bg-brand-green text-brand-cream shadow-md shadow-brand-green/20 scale-102' 
                    : 'bg-slate-50 text-slate-600 hover:bg-slate-100 hover:text-brand-green'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Search input bar */}
        <div className="relative w-full md:max-w-xs">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Cari momen foto..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 text-xs bg-slate-50 border border-slate-200 focus:border-brand-green focus:bg-white focus:outline-hidden rounded-xl text-brand-dark transition-all"
          />
          {searchQuery && (
            <button 
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 cursor-pointer"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </div>

      {/* Gallery Items Grid */}
      <AnimatePresence mode="popLayout">
        {filteredItems.length > 0 ? (
          <motion.div 
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="group bg-white border border-brand-divider overflow-hidden rounded-2xl flex flex-col hover:shadow-xl hover:shadow-slate-200/50 hover:border-brand-green/30 transition-all duration-300"
              >
                {/* Photo container */}
                <div className="relative aspect-4/3 overflow-hidden bg-slate-100 shrink-0 cursor-pointer" onClick={() => setLightboxIndex(index)}>
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-500"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Subtle category badge on photo */}
                  <span className="absolute top-4 left-4 text-[9px] uppercase tracking-widest font-extrabold bg-brand-green text-brand-cream px-2.5 py-1 rounded-md shadow-md">
                    {item.categoryLabel}
                  </span>

                  {/* Dark hover overlay with zoom-in icon */}
                  <div className="absolute inset-0 bg-brand-green/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="bg-white/95 p-3.5 rounded-full shadow-lg scale-90 group-hover:scale-100 transition-transform duration-300">
                      <ZoomIn className="w-5 h-5 text-brand-green" />
                    </div>
                  </div>
                </div>

                {/* Photo details */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-3.5">
                  <div className="space-y-2">
                    {/* Date and Category bar */}
                    <div className="flex items-center gap-4 text-[10px] font-semibold text-slate-400 uppercase tracking-wider">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-slate-300" />
                        {formatDateIndo(item.date)}
                      </span>
                    </div>

                    <h3 className="font-serif font-black text-brand-dark text-base leading-tight group-hover:text-brand-green transition-colors">
                      {item.title}
                    </h3>

                    <p className="text-xs text-slate-600 font-light leading-relaxed line-clamp-3">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-50 flex items-center justify-between">
                    <button
                      onClick={() => setLightboxIndex(index)}
                      className="text-[11px] font-bold text-brand-green hover:text-brand-gold flex items-center gap-1 cursor-pointer"
                    >
                      Perbesar Foto &rarr;
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-24 bg-white border border-brand-divider rounded-2xl max-w-lg mx-auto p-8 space-y-4"
          >
            <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mx-auto text-slate-400">
              <ImageIcon className="w-8 h-8" />
            </div>
            <h3 className="font-serif font-bold text-lg text-brand-dark">Foto tidak ditemukan</h3>
            <p className="text-xs text-slate-500 font-light max-w-sm mx-auto leading-relaxed">
              Kami tidak dapat menemukan foto yang cocok dengan pencarian "{searchQuery}" atau di bawah kategori ini. Coba kata kunci atau kategori lain.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSearchQuery('');
              }}
              className="px-5 py-2.5 bg-brand-green text-brand-cream text-xs font-bold rounded-xl hover:bg-brand-green/90 transition-all cursor-pointer"
            >
              Reset Filter
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Lightbox / Full-screen slideshow */}
      <AnimatePresence>
        {lightboxIndex !== null && filteredItems[lightboxIndex] && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxIndex(null)}
            className="fixed inset-0 z-150 bg-black/95 flex flex-col justify-between p-4 md:p-8"
          >
            {/* Top Toolbar */}
            <div className="flex items-center justify-between text-white shrink-0 z-10">
              <div className="font-mono text-xs opacity-75 font-semibold">
                DOKUMENTASI FOTO — {lightboxIndex + 1} / {filteredItems.length}
              </div>
              <button 
                onClick={() => setLightboxIndex(null)}
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all cursor-pointer text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Middle Main Content */}
            <div className="flex-1 flex items-center justify-between gap-4 py-4 min-h-0 relative">
              {/* Prev Button */}
              <button
                onClick={handlePrevImage}
                className="absolute left-0 md:left-4 z-10 w-12 h-12 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 flex items-center justify-center transition-all cursor-pointer text-white hover:scale-105 active:scale-95"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              {/* Main Image View */}
              <div className="w-full h-full max-w-4xl mx-auto flex items-center justify-center p-2">
                <motion.img
                  key={filteredItems[lightboxIndex].id}
                  initial={{ scale: 0.95, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.95, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  src={filteredItems[lightboxIndex].imageUrl}
                  alt={filteredItems[lightboxIndex].title}
                  className="max-w-full max-h-full object-contain rounded-lg shadow-2xl select-none"
                  onClick={(e) => e.stopPropagation()}
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Next Button */}
              <button
                onClick={handleNextImage}
                className="absolute right-0 md:right-4 z-10 w-12 h-12 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 flex items-center justify-center transition-all cursor-pointer text-white hover:scale-105 active:scale-95"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Bottom Caption Info Card */}
            <div 
              className="w-full max-w-3xl mx-auto bg-[#111111]/80 backdrop-blur-md border border-white/15 p-5 md:p-6 rounded-2xl text-white space-y-3 shrink-0 z-10"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-3">
                <span className="px-2.5 py-1 bg-emerald-500/20 border border-emerald-500/30 rounded-md text-[10px] font-extrabold uppercase tracking-widest text-emerald-400">
                  {filteredItems[lightboxIndex].categoryLabel}
                </span>
                <span className="flex items-center gap-1.5 text-xs text-slate-400 font-mono">
                  <Calendar className="w-4 h-4 text-slate-500" />
                  {formatDateIndo(filteredItems[lightboxIndex].date)}
                </span>
              </div>

              <div className="space-y-1.5">
                <h3 className="font-serif font-black text-lg md:text-xl text-white leading-tight">
                  {filteredItems[lightboxIndex].title}
                </h3>
                <p className="text-xs md:text-sm text-slate-300 font-light leading-relaxed">
                  {filteredItems[lightboxIndex].description}
                </p>
              </div>
            </div>

          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
