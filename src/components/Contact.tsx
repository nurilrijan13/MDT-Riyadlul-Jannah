/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Instagram, Clock, Youtube } from 'lucide-react';
import { SCHOOL_PROFILE } from '../data';

export default function Contact() {
  const [formData, setFormData] = useState({
    parentName: '',
    phone: '',
    email: '',
    subject: 'Pertanyaan',
    message: ''
  });

  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitSuccess(true);
    // Reset
    setFormData({
      parentName: '',
      phone: '',
      email: '',
      subject: 'Pertanyaan',
      message: ''
    });
    setTimeout(() => {
      setSubmitSuccess(false);
    }, 6000);
  };

  return (
    <div className="py-12 bg-[#F9F7F2] font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 bg-emerald-50 text-emerald-800 text-xs font-semibold rounded-full uppercase tracking-wider">
            <Mail className="w-3.5 h-3.5" />
            <span>Kontak Kami</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#2D2D2D] tracking-tight font-serif">
            Hubungi & Kunjungi Sekretariat
          </h2>
          <p className="text-slate-600 text-sm md:text-base font-light">
            Butuh informasi lebih detail tentang pendaftaran, kerja sama, donasi, atau jadwal belajar? Silakan hubungi kami atau datang langsung ke madrasah.
          </p>
        </div>

        {/* Info Cards Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white border border-[#D4CFC4] p-6 rounded-2xl flex items-start space-x-4 shadow-xs">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-slate-800 text-sm uppercase">Alamat Lengkap</h4>
              <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                {SCHOOL_PROFILE.address}
              </p>
            </div>
          </div>

          <div className="bg-white border border-[#D4CFC4] p-6 rounded-2xl flex items-start space-x-4 shadow-xs">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0">
              <Phone className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-slate-800 text-sm uppercase">Hubungi WhatsApp</h4>
              <p className="text-xs text-slate-500 mt-1">Layanan Informasi & Humas:</p>
              <a 
                href={`https://wa.me/${SCHOOL_PROFILE.phone.replace(/[^0-9]/g, '')}?text=Assalamu%27alaikum%20Humas%20MDT%20Riyadlul%20Jannah%2C%20saya%20ingin%20bertanya%20mengenai...`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-700 hover:text-emerald-800 font-bold text-sm block mt-1"
              >
                {SCHOOL_PROFILE.phone} (WhatsApp)
              </a>
            </div>
          </div>

          <div className="bg-white border border-[#D4CFC4] p-6 rounded-2xl flex items-start space-x-4 shadow-xs">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-slate-800 text-sm uppercase">Jam Pelayanan Kantor</h4>
              <p className="text-xs text-slate-500 mt-1">Setiap Senin s.d. Jumat</p>
              <span className="text-slate-800 font-semibold text-xs block mt-1">07.00 - 17.00 WIB</span>
            </div>
          </div>

          <div className="bg-white border border-[#D4CFC4] p-6 rounded-2xl flex items-start space-x-4 shadow-xs">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0">
              <Instagram className="w-5 h-5" />
            </div>
            <div className="flex-grow">
              <h4 className="font-bold text-slate-800 text-sm uppercase">Media Sosial Resmi</h4>
              <p className="text-xs text-slate-500 mt-1">Ikuti kabar pesantren kami:</p>
              <div className="space-y-1.5 mt-2 font-sans">
                <a 
                  href="https://www.instagram.com/ppriyadluljannahpusat" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs text-pink-700 hover:text-pink-800 font-bold"
                >
                  <Instagram className="w-3.5 h-3.5 text-pink-600 shrink-0" />
                  <span className="underline">ppriyadluljannahpusat</span>
                </a>
                <a 
                  href="https://www.tiktok.com/@ppriyadluljannahpusat" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs text-slate-800 hover:text-black font-bold"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5 text-slate-800 shrink-0">
                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.02 1.73 4.1 1.13 1.08 2.65 1.66 4.22 1.75v3.86c-1.39-.03-2.76-.41-3.95-1.14-.65-.41-1.22-.95-1.65-1.59v7.8c-.04 2.1-.85 4.14-2.32 5.64-1.62 1.62-3.9 2.49-6.19 2.39-2.3-.04-4.52-.98-6.05-2.72-1.57-1.8-2.31-4.22-2.03-6.59.26-2.22 1.51-4.24 3.39-5.4 1.83-1.12 4.1-1.39 6.16-.72v4.06c-1.1-.53-2.43-.45-3.46.22-1.01.65-1.61 1.78-1.58 2.98.02 1.25.7 2.4 1.77 3.03 1.08.64 2.45.64 3.53 0 1.05-.63 1.71-1.78 1.71-3v-13.8z"/>
                  </svg>
                  <span className="underline">ppriyadluljannahpusat</span>
                </a>
                <a 
                  href={SCHOOL_PROFILE.youtubeUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs text-red-600 hover:text-red-700 font-bold"
                >
                  <Youtube className="w-3.5 h-3.5 text-red-600 shrink-0" />
                  <span className="underline">{SCHOOL_PROFILE.youtube}</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Map & Form Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Form Box */}
          <div className="lg:col-span-6 bg-white border border-[#D4CFC4] p-6 md:p-8 rounded-3xl shadow-sm flex flex-col justify-between">
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-[#1B4332] font-serif border-b border-slate-100 pb-3">Kotak Saran, Pertanyaan, Pesan &amp; Kritikan</h3>
              
              {submitSuccess && (
                <div className="p-4 bg-emerald-50 border border-emerald-100 text-emerald-800 rounded-xl text-xs font-semibold leading-relaxed">
                  Pesan Anda berhasil terkirim! Tim Sekretariat MDT Riyadlul Jannah akan segera menghubungi Anda kembali melalui nomor WhatsApp atau Email yang Anda cantumkan. Jazakumullah khair.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4 text-xs font-sans">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="font-bold text-slate-600 uppercase">Nama Anda</label>
                    <input 
                      type="text" 
                      name="parentName"
                      required
                      value={formData.parentName}
                      onChange={handleInputChange}
                      placeholder="Contoh: Sutisna"
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 focus:border-emerald-500 rounded-lg"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="font-bold text-slate-600 uppercase">No. WhatsApp</label>
                    <input 
                      type="tel" 
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Contoh: 08123456789"
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 focus:border-emerald-500 rounded-lg"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="font-bold text-slate-600 uppercase">Alamat Email (Opsional)</label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Contoh: bapak@email.com"
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 focus:border-emerald-500 rounded-lg"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="font-bold text-slate-600 uppercase">Kategori Pertanyaan</label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 focus:border-emerald-500 rounded-lg"
                  >
                    <option value="Pertanyaan">Pertanyaan Umum / Konsultasi</option>
                    <option value="Kegiatan">Kegiatan & Pembelajaran</option>
                    <option value="Donasi">Donasi & Infaq pembangunan</option>
                    <option value="KritikSaran">Kritik & Saran</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="font-bold text-slate-600 uppercase">Isi Pesan / Pertanyaan</label>
                  <textarea 
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tuliskan pesan, pertanyaan, atau tanggapan Anda di sini..."
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 focus:border-emerald-500 rounded-lg resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-[#1B4332] hover:bg-[#153427] text-white font-bold text-xs uppercase tracking-wider rounded-lg shadow-xs cursor-pointer"
                >
                  Kirim Pesan
                </button>
              </form>
            </div>
          </div>

          {/* Map Embed Box */}
          <div className="lg:col-span-6 bg-white border border-[#D4CFC4] rounded-3xl overflow-hidden p-6 md:p-8 flex flex-col justify-between shadow-xs">
            <div className="space-y-4 flex-grow">
              <h3 className="text-xl font-bold text-[#1B4332] font-serif border-b border-slate-100 pb-3">Lokasi Peta Google</h3>
              
              <div className="w-full h-64 md:h-80 rounded-2xl overflow-hidden border border-slate-250 relative">
                <iframe 
                  src={SCHOOL_PROFILE.mapUrl}
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={true} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Lokasi MDT Riyadlul Jannah Cikarang Utara"
                />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 border-t border-slate-100 mt-2">
                <p className="text-xs text-slate-500 leading-relaxed font-sans max-w-md">
                  <strong>Lokasi:</strong> Sekretariat kami berada di lingkungan padat Kampung Pasir Gombong, Cikarang Utara. Sangat mudah dijangkau menggunakan kendaraan beroda dua maupun roda empat dari Jalan Raya Cikarang-Cibarusah atau perumahan sekitar.
                </p>
                <a
                  href={(SCHOOL_PROFILE as any).mapDirectUrl || "https://maps.app.goo.gl/7dMgHj19RTKaBU1r7"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center space-x-2 px-4 py-2 bg-[#1B4332] hover:bg-[#153427] text-white text-xs font-bold uppercase tracking-wider rounded-lg shadow-xs transition-colors cursor-pointer shrink-0"
                >
                  <MapPin className="w-3.5 h-3.5" />
                  <span>Buka Peta</span>
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
