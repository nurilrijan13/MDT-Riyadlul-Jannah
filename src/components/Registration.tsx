/**
 * @license
 * SPDX-License-Identifier: Apache-2.5
 */

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  User, 
  Calendar, 
  MapPin, 
  Phone, 
  BookOpen, 
  Users, 
  Send, 
  CheckCircle, 
  ShieldCheck, 
  Briefcase,
  Heart,
  HelpCircle,
  Clock
} from 'lucide-react';
import { SCHOOL_PROFILE, PROGRAMS } from '../data';

export default function Registration() {
  const [formData, setFormData] = useState({
    studentName: '',
    birthPlace: '',
    birthDate: '',
    gender: 'Laki-laki',
    address: '',
    religion: 'Islam',
    selectedProgram: 'mdt-ula',
    fatherName: '',
    motherName: '',
    parentJob: '',
    phone: '',
    specialNotes: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const getProgramName = (id: string) => {
    const prog = PROGRAMS.find(p => p.id === id);
    return prog ? prog.name : id;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Format registration message for WhatsApp
    const programName = getProgramName(formData.selectedProgram);
    const formattedDate = new Date(formData.birthDate).toLocaleDateString('id-ID', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });

    const message = 
`*FORMULIR PENDAFTARAN SANTRI BARU*
*MDT RIYADLUL JANNAH PASIR GOMBONG*

*I. DATA CALON SANTRI*
---------------------------------------
• Nama Lengkap: ${formData.studentName.toUpperCase()}
• Tempat Lahir: ${formData.birthPlace}
• Tanggal Lahir: ${formattedDate}
• Jenis Kelamin: ${formData.gender}
• Agama: ${formData.religion}
• Alamat: ${formData.address}
• Program Pilihan: *${programName}*

*II. DATA ORANG TUA / WALI*
---------------------------------------
• Nama Lengkap Ayah: ${formData.fatherName}
• Nama Lengkap Ibu: ${formData.motherName}
• Pekerjaan Orang Tua: ${formData.parentJob || '-'}
• No. HP / WhatsApp: ${formData.phone}

*III. CATATAN KHUSUS / MEDIS (BILA ADA)*
---------------------------------------
${formData.specialNotes || 'Tidak ada catatan khusus.'}

_Pendaftaran online dikirim melalui Portal Web MDT Riyadlul Jannah pada ${new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric', hour: '2-digit', minute: '2-digit' })} WIB_`;

    // Encode text for URL
    const encodedText = encodeURIComponent(message);
    
    // Clean target WhatsApp number if available
    const targetPhone = SCHOOL_PROFILE.phone ? SCHOOL_PROFILE.phone.replace(/[^0-9]/g, '') : '';
    const waUrl = targetPhone ? `https://wa.me/${targetPhone}?text=${encodedText}` : null;

    // Small delay to simulate action, then set submitted
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      if (waUrl) {
        window.open(waUrl, '_blank');
      }
    }, 1200);
  };

  return (
    <div className="py-12 bg-[#F9F7F2] font-sans">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Title Section */}
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 bg-emerald-50 text-emerald-800 text-xs font-semibold rounded-full uppercase tracking-wider">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Penerimaan Santri Baru</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-brand-dark tracking-tight font-serif">
            Formulir Pendaftaran Online
          </h2>
          <p className="text-slate-600 text-xs md:text-sm font-light">
            Silakan lengkapi formulir pendaftaran santri baru di bawah ini. Setelah selesai, data akan dikirim langsung ke WhatsApp Humas MDT Riyadlul Jannah (*0859-6646-1178*) untuk verifikasi administrasi lanjutan.
          </p>
        </div>

        {/* Benefits Alert Card */}
        <div className="bg-white border border-[#D4CFC4] rounded-2xl p-6 grid grid-cols-1 md:grid-cols-3 gap-6 shadow-xs">
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
              <Clock className="w-4 h-4" />
            </div>
            <div>
              <h4 className="font-bold text-slate-800 text-xs uppercase">Proses Cepat</h4>
              <p className="text-[11px] text-slate-500 mt-0.5 leading-relaxed">
                Isi formulir 5 menit, langsung terkirim ke panitia pendaftaran via WhatsApp.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div>
              <h4 className="font-bold text-slate-800 text-xs uppercase">100% Aman &amp; Gratis</h4>
              <p className="text-[11px] text-slate-500 mt-0.5 leading-relaxed">
                Data pendaftaran langsung dikirim dari perangkat Anda tanpa disimpan di database luar.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
              <CheckCircle className="w-4 h-4" />
            </div>
            <div>
              <h4 className="font-bold text-slate-800 text-xs uppercase">Siapkan Berkas</h4>
              <p className="text-[11px] text-slate-500 mt-0.5 leading-relaxed">
                Harap siapkan fotokopi KK, Akta Lahir, dan pasfoto 3x4 untuk dibawa saat daftar ulang fisik.
              </p>
            </div>
          </div>
        </div>

        {/* Interactive Form */}
        <form onSubmit={handleSubmit} className="bg-white border border-[#D4CFC4] rounded-3xl shadow-sm overflow-hidden">
          
          {/* Header */}
          <div className="bg-brand-green p-6 md:p-8 text-brand-cream border-b border-[#D4CFC4]">
            <h3 className="text-xl md:text-2xl font-bold font-serif">Formulir Santri Baru</h3>
            <p className="text-xs text-brand-cream/80 font-light mt-1">
              Harap isi data dengan lengkap dan benar sesuai dokumen kependudukan resmi (KK/Akta Kelahiran)
            </p>
          </div>

          <div className="p-6 md:p-8 space-y-8">
            
            {/* Section 1: Data Calon Santri */}
            <div className="space-y-5">
              <div className="flex items-center gap-2 border-b border-slate-100 pb-2">
                <span className="w-6 h-6 rounded-full bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold text-xs">I</span>
                <h4 className="font-bold text-[#1B4332] font-serif text-sm md:text-base">DATA CALON SANTRI</h4>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                {/* Nama Murid */}
                <div className="space-y-1.5 md:col-span-2">
                  <label className="font-bold text-slate-600 uppercase flex items-center gap-1">
                    Nama Lengkap Murid <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <User className="absolute left-3.5 top-3 w-4 h-4 text-slate-400" />
                    <input 
                      type="text"
                      name="studentName"
                      required
                      value={formData.studentName}
                      onChange={handleInputChange}
                      placeholder="Contoh: Muhammad Ali Al-Fatih"
                      className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 focus:border-emerald-500 rounded-lg outline-none transition-colors"
                    />
                  </div>
                </div>

                {/* Tempat Lahir */}
                <div className="space-y-1.5">
                  <label className="font-bold text-slate-600 uppercase">
                    Tempat Lahir <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <MapPin className="absolute left-3.5 top-3 w-4 h-4 text-slate-400" />
                    <input 
                      type="text"
                      name="birthPlace"
                      required
                      value={formData.birthPlace}
                      onChange={handleInputChange}
                      placeholder="Contoh: Bekasi"
                      className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 focus:border-emerald-500 rounded-lg outline-none transition-colors"
                    />
                  </div>
                </div>

                {/* Tanggal Lahir */}
                <div className="space-y-1.5">
                  <label className="font-bold text-slate-600 uppercase">
                    Tanggal Lahir <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Calendar className="absolute left-3.5 top-3 w-4 h-4 text-slate-400" />
                    <input 
                      type="date"
                      name="birthDate"
                      required
                      value={formData.birthDate}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 focus:border-emerald-500 rounded-lg outline-none transition-colors"
                    />
                  </div>
                </div>

                {/* Jenis Kelamin */}
                <div className="space-y-1.5">
                  <label className="font-bold text-slate-600 uppercase">
                    Jenis Kelamin <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="gender"
                    required
                    value={formData.gender}
                    onChange={handleInputChange}
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 focus:border-emerald-500 rounded-lg outline-none transition-colors"
                  >
                    <option value="Laki-laki">Laki-laki (Putra)</option>
                    <option value="Perempuan">Perempuan (Putri)</option>
                  </select>
                </div>

                {/* Agama */}
                <div className="space-y-1.5">
                  <label className="font-bold text-slate-600 uppercase">Agama</label>
                  <input 
                    type="text"
                    name="religion"
                    readOnly
                    value={formData.religion}
                    className="w-full px-3.5 py-2.5 bg-slate-100 border border-slate-200 text-slate-500 rounded-lg font-semibold cursor-not-allowed"
                  />
                </div>

                {/* Program Pilihan */}
                <div className="space-y-1.5 md:col-span-2">
                  <label className="font-bold text-slate-600 uppercase">
                    Program Pendidikan Pilihan <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <BookOpen className="absolute left-3.5 top-3 w-4 h-4 text-slate-400" />
                    <select
                      name="selectedProgram"
                      required
                      value={formData.selectedProgram}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 focus:border-emerald-500 rounded-lg outline-none transition-colors appearance-none"
                    >
                      {PROGRAMS.map(prog => (
                        <option key={prog.id} value={prog.id}>
                          {prog.name} (Target: {prog.targetAge})
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Alamat Lengkap */}
                <div className="space-y-1.5 md:col-span-2">
                  <label className="font-bold text-slate-600 uppercase">
                    Alamat Lengkap Rumah <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <MapPin className="absolute left-3.5 top-3.5 w-4 h-4 text-slate-400" />
                    <textarea 
                      name="address"
                      required
                      rows={3}
                      value={formData.address}
                      onChange={handleInputChange}
                      placeholder="Tuliskan alamat tinggal lengkap sekarang (RT/RW, Kampung/Perumahan, Desa, Kecamatan, Bekasi)"
                      className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 focus:border-emerald-500 rounded-lg outline-none transition-colors resize-none"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Section 2: Data Orang Tua / Wali */}
            <div className="space-y-5">
              <div className="flex items-center gap-2 border-b border-slate-100 pb-2">
                <span className="w-6 h-6 rounded-full bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold text-xs">II</span>
                <h4 className="font-bold text-[#1B4332] font-serif text-sm md:text-base">DATA ORANG TUA / WALI</h4>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                {/* Nama Ayah */}
                <div className="space-y-1.5">
                  <label className="font-bold text-slate-600 uppercase">
                    Nama Lengkap Ayah <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <User className="absolute left-3.5 top-3 w-4 h-4 text-slate-400" />
                    <input 
                      type="text"
                      name="fatherName"
                      required
                      value={formData.fatherName}
                      onChange={handleInputChange}
                      placeholder="Contoh: Slamet"
                      className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 focus:border-emerald-500 rounded-lg outline-none transition-colors"
                    />
                  </div>
                </div>

                {/* Nama Ibu */}
                <div className="space-y-1.5">
                  <label className="font-bold text-slate-600 uppercase">
                    Nama Lengkap Ibu <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <User className="absolute left-3.5 top-3 w-4 h-4 text-slate-400" />
                    <input 
                      type="text"
                      name="motherName"
                      required
                      value={formData.motherName}
                      onChange={handleInputChange}
                      placeholder="Contoh: Fatimah"
                      className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 focus:border-emerald-500 rounded-lg outline-none transition-colors"
                    />
                  </div>
                </div>

                {/* Pekerjaan Orang Tua */}
                <div className="space-y-1.5">
                  <label className="font-bold text-slate-600 uppercase">Pekerjaan Orang Tua / Wali</label>
                  <div className="relative">
                    <Briefcase className="absolute left-3.5 top-3 w-4 h-4 text-slate-400" />
                    <input 
                      type="text"
                      name="parentJob"
                      value={formData.parentJob}
                      onChange={handleInputChange}
                      placeholder="Contoh: Karyawan Swasta / Ibu Rumah Tangga"
                      className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 focus:border-emerald-500 rounded-lg outline-none transition-colors"
                    />
                  </div>
                </div>

                {/* No HP / WhatsApp Wali */}
                <div className="space-y-1.5">
                  <label className="font-bold text-slate-600 uppercase">
                    No. HP / WhatsApp Aktif <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3.5 top-3 w-4 h-4 text-slate-400" />
                    <input 
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Contoh: 08123456789"
                      className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 focus:border-emerald-500 rounded-lg outline-none transition-colors"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Section 3: Catatan Khusus */}
            <div className="space-y-5">
              <div className="flex items-center gap-2 border-b border-slate-100 pb-2">
                <span className="w-6 h-6 rounded-full bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold text-xs">III</span>
                <h4 className="font-bold text-[#1B4332] font-serif text-sm md:text-base">CATATAN KHUSUS / MEDIS (BILA ADA)</h4>
              </div>

              <div className="text-xs space-y-1.5">
                <label className="font-bold text-slate-600 uppercase">Catatan Tambahan (Opsional)</label>
                <textarea 
                  name="specialNotes"
                  rows={2}
                  value={formData.specialNotes}
                  onChange={handleInputChange}
                  placeholder="Contoh: Riwayat alergi obat, penyakit asma, atau kebutuhan pendampingan belajar hafalan khusus..."
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 focus:border-emerald-500 rounded-lg outline-none transition-colors resize-none"
                />
              </div>
            </div>

            {/* Action Buttons & Notice */}
            <div className="pt-6 border-t border-slate-100 space-y-4">
              
              <div className="p-4 bg-amber-50 border border-amber-200/60 rounded-xl text-slate-700 text-xs leading-relaxed font-sans">
                <strong>💡 Catatan Penting:</strong> Setelah Anda menekan tombol di bawah ini, peramban Anda akan secara otomatis membuka aplikasi <strong>WhatsApp Web / WhatsApp Mobile</strong> yang langsung mengarahkan pesan teks pendaftaran kepada admin pendaftaran madrasah <strong>(0859-6646-1178)</strong>. Anda cukup menekan tombol <strong>"Kirim / Send"</strong> di obrolan WhatsApp tanpa perlu mengetik ulang lagi.
              </div>

              {submitted && (
                <div className="p-4 bg-emerald-50 border border-emerald-100 text-emerald-800 rounded-xl text-xs font-semibold leading-relaxed">
                  Pendaftaran berhasil diproses! WhatsApp telah terbuka di tab baru. Jika WhatsApp tidak otomatis terbuka, silakan klik tombol pendaftaran kembali. Terima kasih atas kepercayaan Anda mendaftarkan putra-putri di MDT Riyadlul Jannah.
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-3 px-6 bg-brand-green hover:bg-[#153427] text-white font-extrabold text-sm uppercase tracking-widest transition-all duration-150 cursor-pointer flex items-center justify-center gap-2 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
              >
                {isSubmitting ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    <span>Memproses Formulir...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Kirim Pendaftaran via WhatsApp</span>
                  </>
                )}
              </button>
            </div>

          </div>
        </form>

        {/* Footer Support Info */}
        <div className="text-center text-xs text-slate-500 space-y-1 py-4">
          <p>Butuh bantuan pengisian formulir? Silakan hubungi Humas kami di nomor WhatsApp <strong>{SCHOOL_PROFILE.phone}</strong></p>
          <p>© {new Date().getFullYear()} MDT Riyadlul Jannah Pasir Gombong. Semua data dijamin kerahasiaannya.</p>
        </div>

      </div>
    </div>
  );
}
