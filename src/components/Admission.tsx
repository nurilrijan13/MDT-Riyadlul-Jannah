/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { BookOpen, Calculator, Calendar, CheckCircle, ClipboardList, Download, Phone, Search, Sparkles, User, UserCheck } from 'lucide-react';
import { PROGRAMS, TUITION_FEES } from '../data';
import { Registration } from '../types';

export default function Admission() {
  const [formData, setFormData] = useState({
    fullName: '',
    birthPlace: '',
    birthDate: '',
    gender: 'Laki-laki' as 'Laki-laki' | 'Perempuan',
    parentName: '',
    parentPhone: '',
    address: '',
    programId: PROGRAMS[0].id,
    uniformType: 'boy' as 'boy' | 'girl' | 'none',
    includeBooks: true
  });

  const [registrations, setRegistrations] = useState<Registration[]>([]);
  const [searchPhone, setSearchPhone] = useState('');
  const [searchResults, setSearchResults] = useState<Registration[]>([]);
  const [successReg, setSuccessReg] = useState<Registration | null>(null);

  // Fee calculation states
  const [calculatedFees, setCalculatedFees] = useState({
    registration: TUITION_FEES.registration,
    monthly: TUITION_FEES.monthly,
    books: 0,
    uniform: 0,
    totalInitial: 0
  });

  // Load existing registrations from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('mdt_registrations');
    if (saved) {
      try {
        setRegistrations(JSON.parse(saved));
      } catch (e) {
        console.error("Error loading registrations", e);
      }
    } else {
      // Seed initial mock registration for demo purposes
      const seed: Registration[] = [
        {
          id: "PPDB-2026-0421",
          fullName: "Fatih Al-Fatih",
          birthPlace: "Bekasi",
          birthDate: "2018-05-12",
          gender: "Laki-laki",
          parentName: "Sutisna",
          parentPhone: "08123456789",
          address: "Kampung Pasir Gombong RT 03/RW 03, Cikarang Utara",
          programId: "mdt-ula",
          programName: "MDT Awaliyah / Ula",
          status: "Diterima",
          registeredAt: "2026-06-20T10:30:00Z",
          notes: "Selamat! Berkas pendaftaran telah terverifikasi lengkap. Silakan datang ke madrasah untuk fitting seragam."
        },
        {
          id: "PPDB-2026-0498",
          fullName: "Najwa Shihabun",
          birthPlace: "Indramayu",
          birthDate: "2014-09-22",
          gender: "Perempuan",
          parentName: "Kamiludin",
          parentPhone: "08771234567",
          address: "Perumahan Pasir Raya, Blok C5 No. 12, Pasir Gombong",
          programId: "mdt-wustha",
          programName: "MDT Wustha",
          status: "Menunggu Verifikasi",
          registeredAt: "2026-07-02T15:45:00Z",
          notes: "Pendaftaran online berhasil diterima. Berkas sedang direview oleh Panitia PPDB."
        }
      ];
      setRegistrations(seed);
      localStorage.setItem('mdt_registrations', JSON.stringify(seed));
    }
  }, []);

  // Update dynamic fees calculation
  useEffect(() => {
    const selectedProg = PROGRAMS.find(p => p.id === formData.programId);
    const bookFee = formData.includeBooks 
      ? (TUITION_FEES.books[formData.programId as keyof typeof TUITION_FEES.books] || 0)
      : 0;
    const uniformFee = TUITION_FEES.uniforms[formData.uniformType as keyof typeof TUITION_FEES.uniforms] || 0;
    const initialTotal = TUITION_FEES.registration + bookFee + uniformFee;

    setCalculatedFees({
      registration: TUITION_FEES.registration,
      monthly: TUITION_FEES.monthly,
      books: bookFee,
      uniform: uniformFee,
      totalInitial: initialTotal
    });
  }, [formData.programId, formData.uniformType, formData.includeBooks]);

  // Adjust uniform option based on gender changes
  const handleGenderChange = (val: 'Laki-laki' | 'Perempuan') => {
    setFormData(prev => ({
      ...prev,
      gender: val,
      uniformType: val === 'Laki-laki' ? 'boy' : 'girl'
    }));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData(prev => ({ ...prev, [name]: checked }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const selectedProg = PROGRAMS.find(p => p.id === formData.programId);
    const code = Math.floor(1000 + Math.random() * 9000);
    const regId = `PPDB-2026-${code}`;

    const newRegistration: Registration = {
      id: regId,
      fullName: formData.fullName,
      birthPlace: formData.birthPlace,
      birthDate: formData.birthDate,
      gender: formData.gender,
      parentName: formData.parentName,
      parentPhone: formData.parentPhone,
      address: formData.address,
      programId: formData.programId,
      programName: selectedProg ? selectedProg.name : 'Program Khusus',
      status: 'Menunggu Verifikasi',
      registeredAt: new Date().toISOString(),
      notes: 'Terima kasih pendaftaran Anda telah terekam di sistem kami. Harap simpan nomor pendaftaran ini dan kirimkan bukti pendaftaran via WhatsApp ke panitia PPDB.'
    };

    const updated = [newRegistration, ...registrations];
    setRegistrations(updated);
    localStorage.setItem('mdt_registrations', JSON.stringify(updated));

    setSuccessReg(newRegistration);
    // Reset form
    setFormData({
      fullName: '',
      birthPlace: '',
      birthDate: '',
      gender: 'Laki-laki',
      parentName: '',
      parentPhone: '',
      address: '',
      programId: PROGRAMS[0].id,
      uniformType: 'boy',
      includeBooks: true
    });
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchPhone.trim()) {
      setSearchResults([]);
      return;
    }
    const cleanSearch = searchPhone.trim().toLowerCase();
    const results = registrations.filter(
      r => r.parentPhone.includes(cleanSearch) || 
           r.fullName.toLowerCase().includes(cleanSearch) || 
           r.id.toLowerCase().includes(cleanSearch)
    );
    setSearchResults(results);
  };

  return (
    <div className="py-12 bg-[#F9F7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 bg-emerald-50 text-emerald-800 text-xs font-semibold rounded-full uppercase tracking-wider">
            <UserCheck className="w-3.5 h-3.5" />
            <span>Penerimaan Santri Baru</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#2D2D2D] tracking-tight font-serif">
            Portal PPDB Online TA 2026/2027
          </h2>
          <p className="text-slate-600 text-sm md:text-base font-light font-sans">
            Proses pendaftaran santri baru yang transparan, mudah, dan dapat dilakukan langsung dari rumah.
          </p>
        </div>

        {/* Success Modal/Card after registration */}
        {successReg && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white border-2 border-emerald-600 rounded-2xl p-6 md:p-8 shadow-xl max-w-3xl mx-auto text-center space-y-6 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 bg-emerald-600 text-white text-xs font-bold px-4 py-1.5 rounded-bl-xl uppercase tracking-widest font-sans">
              Terdaftar
            </div>
            
            <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 mx-auto shadow-sm">
              <CheckCircle className="w-10 h-10" />
            </div>

            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-[#1B4332] font-serif">Pendaftaran Santri Online Berhasil!</h3>
              <p className="text-slate-600 text-sm max-w-lg mx-auto font-sans">
                Terima kasih telah mempercayakan pendidikan agama putra-putri Anda kepada kami. Data telah terekam secara aman.
              </p>
            </div>

            {/* Registration Summary Card */}
            <div className="bg-slate-50 border border-slate-200/60 rounded-xl p-5 text-left grid grid-cols-1 md:grid-cols-2 gap-4 text-sm font-sans">
              <div>
                <span className="block text-xs font-bold text-slate-400 uppercase">KODE REGISTER PPDB</span>
                <span className="text-lg font-extrabold text-emerald-800">{successReg.id}</span>
              </div>
              <div>
                <span className="block text-xs font-bold text-slate-400 uppercase">NAMA CALON SANTRI</span>
                <span className="font-semibold text-slate-800">{successReg.fullName}</span>
              </div>
              <div>
                <span className="block text-xs font-bold text-slate-400 uppercase">PROGRAM PILIHAN</span>
                <span className="font-semibold text-slate-800">{successReg.programName}</span>
              </div>
              <div>
                <span className="block text-xs font-bold text-slate-400 uppercase">NAMA WALI & KONTAK</span>
                <span className="font-semibold text-slate-800">{successReg.parentName} ({successReg.parentPhone})</span>
              </div>
            </div>

            {/* Action Buttons for Success */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2 font-sans">
              <a 
                href={`https://wa.me/6281234567890?text=Assalamu%27alaikum%20Panitia%20PPDB%20MDT%20Riyadlul%20Jannah.%20Saya%20ingin%20melaporkan%20pendaftaran%20online%20dengan%20Kode%20Register%20${successReg.id}%20atas%20nama%20${encodeURIComponent(successReg.fullName)}.%20Mohon%20petunjuk%20pembayaran%20daftar%20ulang.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3 bg-[#1B4332] text-white rounded-lg font-bold shadow-md hover:bg-[#153427] flex items-center justify-center space-x-2 transition-colors cursor-pointer"
              >
                <Phone className="w-4 h-4" />
                <span>Konfirmasi via WhatsApp</span>
              </a>

              <button 
                onClick={() => setSuccessReg(null)}
                className="w-full sm:w-auto px-6 py-3 bg-white border border-slate-300 text-slate-700 hover:bg-slate-50 rounded-lg font-semibold transition-colors cursor-pointer"
              >
                Pendaftaran Baru
              </button>
            </div>
          </motion.div>
        )}

        {/* Primary Forms Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Form Column */}
          <div className="lg:col-span-8 bg-white border border-[#D4CFC4] rounded-2xl shadow-sm p-6 md:p-8">
            <div className="flex items-center space-x-3 border-b border-slate-100 pb-4 mb-6">
              <ClipboardList className="w-6 h-6 text-emerald-700" />
              <h3 className="text-xl font-bold text-[#1B4332] font-serif">Formulir Pendaftaran Online</h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6 font-sans">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {/* Full Name */}
                <div className="space-y-1.5">
                  <label htmlFor="fullName" className="text-xs font-bold text-slate-600 uppercase">Nama Lengkap Santri <span className="text-red-500">*</span></label>
                  <div className="relative">
                    <input 
                      type="text" 
                      id="fullName" 
                      name="fullName" 
                      required
                      value={formData.fullName}
                      onChange={handleInputChange}
                      placeholder="Contoh: Ahmad Fauzi Mubarak"
                      className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 focus:border-emerald-500 focus:bg-white rounded-lg text-sm text-slate-800 transition-colors focus:outline-hidden"
                    />
                  </div>
                </div>

                {/* Program Choice */}
                <div className="space-y-1.5">
                  <label htmlFor="programId" className="text-xs font-bold text-slate-600 uppercase">Program Pendidikan <span className="text-red-500">*</span></label>
                  <select 
                    id="programId" 
                    name="programId"
                    value={formData.programId}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 focus:border-emerald-500 focus:bg-white rounded-lg text-sm text-slate-800 focus:outline-hidden transition-colors"
                  >
                    {PROGRAMS.map(prog => (
                      <option key={prog.id} value={prog.id}>{prog.name}</option>
                    ))}
                  </select>
                </div>

                {/* Birth Place */}
                <div className="space-y-1.5">
                  <label htmlFor="birthPlace" className="text-xs font-bold text-slate-600 uppercase">Tempat Lahir <span className="text-red-500">*</span></label>
                  <input 
                    type="text" 
                    id="birthPlace" 
                    name="birthPlace" 
                    required
                    value={formData.birthPlace}
                    onChange={handleInputChange}
                    placeholder="Contoh: Bekasi"
                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 focus:border-emerald-500 focus:bg-white rounded-lg text-sm text-slate-800 transition-colors focus:outline-hidden"
                  />
                </div>

                {/* Birth Date */}
                <div className="space-y-1.5">
                  <label htmlFor="birthDate" className="text-xs font-bold text-slate-600 uppercase">Tanggal Lahir <span className="text-red-500">*</span></label>
                  <input 
                    type="date" 
                    id="birthDate" 
                    name="birthDate" 
                    required
                    value={formData.birthDate}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 focus:border-emerald-500 focus:bg-white rounded-lg text-sm text-slate-800 transition-colors focus:outline-hidden"
                  />
                </div>

                {/* Gender */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-600 uppercase block">Jenis Kelamin <span className="text-red-500">*</span></label>
                  <div className="flex space-x-4 pt-1">
                    <label className="flex items-center space-x-2 text-sm text-slate-700 cursor-pointer">
                      <input 
                        type="radio" 
                        name="gender" 
                        checked={formData.gender === 'Laki-laki'}
                        onChange={() => handleGenderChange('Laki-laki')}
                        className="w-4 h-4 text-emerald-600 focus:ring-emerald-500 border-slate-300"
                      />
                      <span>Laki-laki</span>
                    </label>
                    <label className="flex items-center space-x-2 text-sm text-slate-700 cursor-pointer">
                      <input 
                        type="radio" 
                        name="gender" 
                        checked={formData.gender === 'Perempuan'}
                        onChange={() => handleGenderChange('Perempuan')}
                        className="w-4 h-4 text-emerald-600 focus:ring-emerald-500 border-slate-300"
                      />
                      <span>Perempuan</span>
                    </label>
                  </div>
                </div>

                {/* Parent's / Wali's Name */}
                <div className="space-y-1.5">
                  <label htmlFor="parentName" className="text-xs font-bold text-slate-600 uppercase">Nama Orang Tua / Wali <span className="text-red-500">*</span></label>
                  <input 
                    type="text" 
                    id="parentName" 
                    name="parentName" 
                    required
                    value={formData.parentName}
                    onChange={handleInputChange}
                    placeholder="Nama bapak atau ibu"
                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 focus:border-emerald-500 focus:bg-white rounded-lg text-sm text-slate-800 transition-colors focus:outline-hidden"
                  />
                </div>

                {/* WhatsApp Phone */}
                <div className="space-y-1.5 md:col-span-2">
                  <label htmlFor="parentPhone" className="text-xs font-bold text-slate-600 uppercase">No. WhatsApp Orang Tua <span className="text-red-500">*</span></label>
                  <input 
                    type="tel" 
                    id="parentPhone" 
                    name="parentPhone" 
                    required
                    value={formData.parentPhone}
                    onChange={handleInputChange}
                    placeholder="Contoh: 08123456789 (Disarankan No. WA aktif)"
                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 focus:border-emerald-500 focus:bg-white rounded-lg text-sm text-slate-800 transition-colors focus:outline-hidden"
                  />
                </div>

                {/* Complete Address */}
                <div className="space-y-1.5 md:col-span-2">
                  <label htmlFor="address" className="text-xs font-bold text-slate-600 uppercase">Alamat Lengkap <span className="text-red-500">*</span></label>
                  <textarea 
                    id="address" 
                    name="address" 
                    required
                    rows={3}
                    value={formData.address}
                    onChange={handleInputChange}
                    placeholder="Nama kampung, gang, RT/RW, nomor rumah, kelurahan Pasir Gombong"
                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 focus:border-emerald-500 focus:bg-white rounded-lg text-sm text-slate-800 transition-colors focus:outline-hidden resize-none"
                  />
                </div>
              </div>

              {/* Package Add-ons */}
              <div className="border-t border-slate-100 pt-5 space-y-4">
                <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-800">Paket Kelengkapan (Opsional)</h4>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Uniform Option */}
                  <div className="space-y-1.5">
                    <label htmlFor="uniformType" className="text-xs font-semibold text-slate-500">Seragam Madrasah Resmi</label>
                    <select
                      id="uniformType"
                      name="uniformType"
                      value={formData.uniformType}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 bg-slate-50 border border-slate-200 focus:border-emerald-500 focus:bg-white rounded-lg text-sm text-slate-700"
                    >
                      <option value="none">Tanpa Seragam (Beli Sendiri)</option>
                      <option value="boy">Paket Seragam Putih-Hijau Putra (+Peci)</option>
                      <option value="girl">Paket Seragam Putih-Hijau Putri (+Jilbab)</option>
                    </select>
                  </div>

                  {/* Books package checkbox */}
                  <div className="flex items-center space-x-3 pt-6">
                    <label className="flex items-center space-x-2.5 text-sm text-slate-700 cursor-pointer">
                      <input
                        type="checkbox"
                        name="includeBooks"
                        checked={formData.includeBooks}
                        onChange={handleCheckboxChange}
                        className="w-4 h-4 text-emerald-600 focus:ring-emerald-500 border-slate-300 rounded-xs"
                      />
                      <div>
                        <span className="font-semibold block text-slate-800">Ambil Paket Buku Pelajaran (Kitab)</span>
                        <span className="text-xs text-slate-400">Kitab materi dasar penunjang pembelajaran satu tahun ajaran</span>
                      </div>
                    </label>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full py-3 px-6 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm tracking-widest uppercase rounded-lg shadow-md cursor-pointer transition-colors"
                >
                  Kirim Pendaftaran Online
                </button>
              </div>
            </form>
          </div>

          {/* Fee Simulator Column */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Live Fee Calculator */}
            <div className="bg-gradient-to-br from-emerald-900 to-[#1B4332] text-white rounded-2xl shadow-lg p-6 space-y-5">
              <div className="flex items-center space-x-2 border-b border-white/15 pb-3">
                <Calculator className="w-5 h-5 text-emerald-300" />
                <h3 className="font-bold text-base md:text-lg font-serif">Simulasi Biaya Santri</h3>
              </div>

              <div className="space-y-3 text-sm font-sans text-emerald-100">
                <div className="flex justify-between">
                  <span>Infaq Pendaftaran (Awal)</span>
                  <span className="font-semibold text-white">Rp {calculatedFees.registration.toLocaleString('id-ID')}</span>
                </div>
                
                <div className="flex justify-between">
                  <span>Paket Kitab/Buku Paket</span>
                  <span className="font-semibold text-white">
                    {calculatedFees.books > 0 ? `Rp ${calculatedFees.books.toLocaleString('id-ID')}` : 'Tidak Ambil'}
                  </span>
                </div>

                <div className="flex justify-between">
                  <span>Seragam Resmi Madrasah</span>
                  <span className="font-semibold text-white">
                    {calculatedFees.uniform > 0 ? `Rp ${calculatedFees.uniform.toLocaleString('id-ID')}` : 'Tidak Ambil'}
                  </span>
                </div>

                <div className="border-t border-white/10 pt-3 flex justify-between text-base font-bold text-white">
                  <span>Total Daftar Ulang</span>
                  <span className="text-emerald-300">Rp {calculatedFees.totalInitial.toLocaleString('id-ID')}</span>
                </div>
              </div>

              <div className="pt-2 border-t border-white/10 text-xs font-sans text-emerald-200/80 leading-relaxed">
                <div className="flex justify-between font-bold text-white text-sm mb-1">
                  <span>SPP Syahriyah (Bulanan)</span>
                  <span className="text-teal-300">Rp {calculatedFees.monthly.toLocaleString('id-ID')} / Bulan</span>
                </div>
                * Biaya daftar ulang awal dibayarkan setelah lolos verifikasi berkas lisan & administratif.
              </div>
            </div>

            {/* Application Check Lookup */}
            <div className="bg-white border border-[#D4CFC4] rounded-2xl p-6 space-y-4 shadow-xs font-sans">
              <div className="flex items-center space-x-2">
                <Search className="w-5 h-5 text-slate-700" />
                <h4 className="font-bold text-slate-800 text-sm uppercase">Cek Status Pendaftaran</h4>
              </div>
              <p className="text-xs text-slate-500">
                Masukkan nama santri, nomor pendaftaran (PPDB-xxxx), atau nomor HP wali untuk mengecek kelulusan berkas.
              </p>

              <form onSubmit={handleSearch} className="flex space-x-2">
                <input
                  type="text"
                  placeholder="Nama / No. HP / No. PPDB"
                  value={searchPhone}
                  onChange={(e) => setSearchPhone(e.target.value)}
                  className="flex-grow px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-emerald-700 text-white font-bold rounded-lg text-xs cursor-pointer hover:bg-emerald-800"
                >
                  Cari
                </button>
              </form>

              {/* Lookup results */}
              {searchResults.length > 0 && (
                <div className="space-y-3 pt-2 max-h-48 overflow-y-auto">
                  {searchResults.map(res => (
                    <div key={res.id} className="bg-slate-50 border border-slate-100 p-3 rounded-lg text-xs space-y-1">
                      <div className="flex justify-between font-bold">
                        <span className="text-emerald-800">{res.id}</span>
                        <span className={`px-1.5 py-0.5 rounded-sm text-[9px] uppercase tracking-wider ${
                          res.status === 'Diterima' ? 'bg-emerald-100 text-emerald-800' :
                          res.status === 'Ditolak' ? 'bg-red-100 text-red-800' :
                          'bg-amber-100 text-amber-800'
                        }`}>
                          {res.status}
                        </span>
                      </div>
                      <div className="text-slate-700 font-semibold">{res.fullName}</div>
                      <div className="text-slate-400">Wali: {res.parentName}</div>
                      {res.notes && (
                        <div className="text-slate-500 italic border-t border-slate-100 pt-1 mt-1 text-[10px]">
                          Note: {res.notes}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}

              {searchResults.length === 0 && searchPhone.trim() !== '' && (
                <p className="text-center text-xs text-red-500 italic pt-1">
                  Data pendaftaran tidak ditemukan.
                </p>
              )}
            </div>

            {/* Registration FAQ Quick list */}
            <div className="bg-[#1B4332]/5 border border-emerald-900/10 rounded-2xl p-6 space-y-3 font-sans">
              <h4 className="font-bold text-[#1B4332] text-sm uppercase">Syarat Berkas Fisik</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Saat verifikasi tatap muka (lisan/tes membaca Quran), orang tua wajib mengumpulkan:
              </p>
              <ul className="space-y-1.5 text-xs text-slate-700">
                <li className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 bg-emerald-600 rounded-full" />
                  <span>Fotokopi Kartu Keluarga (KK) 2 Lembar</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 bg-emerald-600 rounded-full" />
                  <span>Fotokopi Akta Kelahiran Santri 2 Lembar</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 bg-emerald-600 rounded-full" />
                  <span>Pasfoto Hitam Putih/Berwarna 3x4 (2 Lembar)</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 bg-emerald-600 rounded-full" />
                  <span>Mengisi lembar komitmen belajar bersama orang tua</span>
                </li>
              </ul>
            </div>
          </div>

        </div>

        {/* Informative Step of Admission Process */}
        <div className="bg-white border border-[#D4CFC4] rounded-2xl p-6 md:p-8 shadow-xs font-sans">
          <h3 className="font-bold text-[#1B4332] text-lg font-serif mb-6 text-center">4 Langkah Mudah Alur Pendaftaran Santri Baru</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
            <div className="space-y-2">
              <div className="w-12 h-12 rounded-full bg-emerald-50 text-emerald-800 font-bold border-2 border-emerald-600 flex items-center justify-center mx-auto text-lg">1</div>
              <h4 className="font-bold text-slate-800 text-sm">Daftar Online</h4>
              <p className="text-xs text-slate-500">Mengisi formulir pendaftaran santri baru melalui situs web MDT Riyadlul Jannah.</p>
            </div>
            
            <div className="space-y-2">
              <div className="w-12 h-12 rounded-full bg-emerald-50 text-emerald-800 font-bold border-2 border-emerald-600 flex items-center justify-center mx-auto text-lg">2</div>
              <h4 className="font-bold text-slate-800 text-sm">Konfirmasi WA</h4>
              <p className="text-xs text-slate-500">Kirim kode register ke WhatsApp Panitia PPDB untuk jadwal tes lisan membaca Al-Qur'an.</p>
            </div>

            <div className="space-y-2">
              <div className="w-12 h-12 rounded-full bg-emerald-50 text-emerald-800 font-bold border-2 border-emerald-600 flex items-center justify-center mx-auto text-lg">3</div>
              <h4 className="font-bold text-slate-800 text-sm">Tes Penjajakan Lisan</h4>
              <p className="text-xs text-slate-500">Calon santri melakukan uji kelancaran lisan, serta penempatan kelas madrasah sesuai umur.</p>
            </div>

            <div className="space-y-2">
              <div className="w-12 h-12 rounded-full bg-emerald-50 text-emerald-800 font-bold border-2 border-emerald-600 flex items-center justify-center mx-auto text-lg">4</div>
              <h4 className="font-bold text-slate-800 text-sm">Daftar Ulang</h4>
              <p className="text-xs text-slate-500">Pemberian buku pelajaran, seragam madrasah, dan penyerahan syarat kelengkapan fisik.</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
