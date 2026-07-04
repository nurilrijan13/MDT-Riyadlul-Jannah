/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Search, User, BookOpen, CalendarCheck, FileSpreadsheet, Award, Heart, MessageSquare, ShieldCheck } from 'lucide-react';
import { MOCK_STUDENTS } from '../data';
import { StudentProfile } from '../types';

export default function Portal() {
  const [nisQuery, setNisQuery] = useState('');
  const [selectedStudent, setSelectedStudent] = useState<StudentProfile | null>(MOCK_STUDENTS["RJ26001"]); // Preload first student as a gorgeous example
  const [hasSearched, setHasSearched] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const query = nisQuery.trim().toUpperCase();
    
    if (!query) {
      setErrorMsg('Harap masukkan nomor NIS santri.');
      return;
    }

    if (MOCK_STUDENTS[query]) {
      setSelectedStudent(MOCK_STUDENTS[query]);
      setErrorMsg('');
      setHasSearched(true);
    } else {
      setSelectedStudent(null);
      setErrorMsg('Nomor NIS tidak terdaftar. Coba gunakan nomor percontohan: RJ26001, RJ26002, atau RJ26003.');
      setHasSearched(true);
    }
  };

  const getScoreColor = (score: number) => {
    if (score >= 90) return { bg: 'bg-emerald-50 text-emerald-800 border-emerald-100', bar: 'bg-emerald-600' };
    if (score >= 80) return { bg: 'bg-teal-50 text-teal-800 border-teal-100', bar: 'bg-teal-600' };
    if (score >= 70) return { bg: 'bg-amber-50 text-amber-800 border-amber-100', bar: 'bg-amber-600' };
    return { bg: 'bg-red-50 text-red-800 border-red-100', bar: 'bg-red-600' };
  };

  return (
    <div className="py-12 bg-[#F9F7F2] font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header Title */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 bg-emerald-50 text-emerald-800 text-xs font-semibold rounded-full uppercase tracking-wider">
            <User className="w-3.5 h-3.5" />
            <span>Portal Monitoring Akademik</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#2D2D2D] tracking-tight font-serif">
            Portal Wali Santri Riyadlul Jannah
          </h2>
          <p className="text-slate-600 text-sm md:text-base font-light font-sans">
            Sistem informasi nilai (Raport), kehadiran, serta status hafalan Al-Qur'an santri secara real-time.
          </p>
        </div>

        {/* Portal Search Box */}
        <div className="bg-white border border-[#D4CFC4] rounded-2xl p-6 md:p-8 shadow-xs max-w-3xl mx-auto space-y-6">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-base font-bold text-slate-800">Pencarian Raport Santri</h3>
            <p className="text-xs text-slate-500">
              Silakan masukkan Nomor Induk Santri (NIS) resmi untuk melihat nilai. Gunakan nomor percontohan di bawah untuk simulasi raport:
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-2 pt-1">
              <button 
                onClick={() => { setNisQuery('RJ26001'); setSelectedStudent(MOCK_STUDENTS['RJ26001']); setErrorMsg(''); }}
                className="px-3 py-1 bg-emerald-50 border border-emerald-100 text-emerald-800 hover:bg-emerald-100 transition-colors text-xs font-semibold rounded-md"
              >
                RJ26001 (Fauzi Mubarak)
              </button>
              <button 
                onClick={() => { setNisQuery('RJ26002'); setSelectedStudent(MOCK_STUDENTS['RJ26002']); setErrorMsg(''); }}
                className="px-3 py-1 bg-emerald-50 border border-emerald-100 text-emerald-800 hover:bg-emerald-100 transition-colors text-xs font-semibold rounded-md"
              >
                RJ26002 (Siti Aisyah)
              </button>
              <button 
                onClick={() => { setNisQuery('RJ26003'); setSelectedStudent(MOCK_STUDENTS['RJ26003']); setErrorMsg(''); }}
                className="px-3 py-1 bg-emerald-50 border border-emerald-100 text-emerald-800 hover:bg-emerald-100 transition-colors text-xs font-semibold rounded-md"
              >
                RJ26003 (Rizky Pratama)
              </button>
            </div>
          </div>

          <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-grow">
              <input
                type="text"
                placeholder="Masukkan Nomor NIS (Contoh: RJ26001)"
                value={nisQuery}
                onChange={(e) => setNisQuery(e.target.value)}
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 focus:border-emerald-500 focus:bg-white rounded-xl text-sm focus:outline-hidden text-slate-800 font-semibold"
              />
            </div>
            <button
              type="submit"
              className="px-6 py-3 bg-emerald-700 hover:bg-emerald-800 active:bg-emerald-900 text-white font-bold rounded-xl text-sm flex items-center justify-center space-x-2 cursor-pointer transition-colors"
            >
              <Search className="w-4 h-4" />
              <span>Buka Raport Digital</span>
            </button>
          </form>

          {errorMsg && (
            <p className="text-xs text-red-600 font-semibold italic text-center md:text-left">
              {errorMsg}
            </p>
          )}
        </div>

        {/* Selected Student Dashboard (Raport Page) */}
        {selectedStudent && (
          <motion.div
            key={selectedStudent.nis}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            {/* Student Profile Overview */}
            <div className="bg-white border border-[#D4CFC4] rounded-3xl p-6 md:p-8 shadow-xs grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              
              {/* Profile Card Left */}
              <div className="lg:col-span-4 flex items-center space-x-4 border-b lg:border-b-0 lg:border-r border-slate-100 pb-5 lg:pb-0 lg:pr-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-600 to-teal-600 text-white flex items-center justify-center shadow-md font-bold text-2xl shrink-0 font-serif">
                  {selectedStudent.fullName.charAt(0)}
                </div>
                <div>
                  <h3 className="font-extrabold text-lg text-slate-800 font-serif leading-tight">{selectedStudent.fullName}</h3>
                  <div className="text-xs text-slate-500 font-semibold mt-1">NIS: {selectedStudent.nis} · Laki-laki</div>
                  <div className="mt-2 inline-block px-2.5 py-1 bg-emerald-50 border border-emerald-100 text-[10px] text-emerald-800 font-bold uppercase tracking-wider rounded-md">
                    {selectedStudent.className}
                  </div>
                </div>
              </div>

              {/* Stats Center */}
              <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div className="bg-slate-50/70 p-4 rounded-2xl border border-slate-100">
                  <span className="block text-xs text-slate-400 uppercase font-bold">Tahun Ajaran</span>
                  <span className="block font-bold text-slate-700 text-sm mt-1">{selectedStudent.academicYear}</span>
                </div>

                <div className="bg-slate-50/70 p-4 rounded-2xl border border-slate-100">
                  <span className="block text-xs text-slate-400 uppercase font-bold">Kehadiran</span>
                  <span className="block font-extrabold text-emerald-700 text-sm mt-1">
                    {selectedStudent.attendanceSummary.attendanceRate}% ({selectedStudent.attendanceSummary.attended}/{selectedStudent.attendanceSummary.totalSessions})
                  </span>
                </div>

                <div className="bg-slate-50/70 p-4 rounded-2xl border border-slate-100">
                  <span className="block text-xs text-slate-400 uppercase font-bold">Nilai Sikap</span>
                  <span className="block font-bold text-slate-700 text-sm mt-1 flex items-center justify-center space-x-1">
                    <Heart className="w-4 h-4 text-red-500 fill-red-500 shrink-0" />
                    <span>{selectedStudent.behaviorScore}</span>
                  </span>
                </div>

                <div className="bg-slate-50/70 p-4 rounded-2xl border border-slate-100">
                  <span className="block text-xs text-slate-400 uppercase font-bold">Nama Wali</span>
                  <span className="block font-bold text-slate-700 text-sm mt-1 truncate">{selectedStudent.parentName}</span>
                </div>
              </div>
            </div>

            {/* Academic Content Sections Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Report Grades List */}
              <div className="lg:col-span-8 bg-white border border-[#D4CFC4] rounded-3xl p-6 md:p-8 shadow-xs space-y-6">
                <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                  <div className="flex items-center space-x-2">
                    <FileSpreadsheet className="w-5 h-5 text-emerald-700" />
                    <h4 className="font-extrabold text-[#1B4332] font-serif">Nilai Raport Hasil Imtihan</h4>
                  </div>
                  <span className="text-xs text-slate-400">Semester Genap 2025/2026</span>
                </div>

                <div className="space-y-4">
                  {selectedStudent.grades.map((grade) => {
                    const styles = getScoreColor(grade.score);
                    return (
                      <div key={grade.subjectName} className="space-y-1.5 border-b border-slate-50 pb-3 last:border-0 last:pb-0">
                        <div className="flex justify-between text-sm">
                          <span className="font-semibold text-slate-700">{grade.subjectName}</span>
                          <div className="flex items-center space-x-2">
                            <span className={`px-2 py-0.5 text-xs font-bold rounded-md border ${styles.bg}`}>
                              Nilai: {grade.score} ({grade.grade})
                            </span>
                          </div>
                        </div>
                        {/* Grade progress bar */}
                        <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                          <div className={`h-full rounded-full ${styles.bar}`} style={{ width: `${grade.score}%` }} />
                        </div>
                        {grade.notes && (
                          <p className="text-xs text-slate-500 italic mt-1 font-light">Catatan: {grade.notes}</p>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Sidebar: Memorization (Tahfidz) + Attendance Log */}
              <div className="lg:col-span-4 space-y-6">
                
                {/* Quran Tahfidz Log */}
                <div className="bg-[#1B4332] text-white rounded-3xl p-6 shadow-md space-y-4">
                  <div className="flex items-center space-x-2 border-b border-white/10 pb-3">
                    <Award className="w-5 h-5 text-emerald-300" />
                    <h4 className="font-bold text-base font-serif">Pencapaian Hafalan (Tahfidz)</h4>
                  </div>
                  <p className="text-xs text-emerald-100/80">Surah-surah yang disetorkan dan lulus uji ujian komprehensif dalam semester ini:</p>
                  
                  <div className="space-y-2 pt-2">
                    {selectedStudent.hafalanStatus.map((surah, index) => (
                      <div key={index} className="flex items-center space-x-2 bg-white/5 border border-white/10 p-2.5 rounded-xl text-xs">
                        <ShieldCheck className="w-4 h-4 text-emerald-300 shrink-0" />
                        <span className="font-semibold text-emerald-50">{surah}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Teacher Notes Block */}
                <div className="bg-white border border-[#D4CFC4] rounded-3xl p-6 shadow-xs space-y-3 font-sans">
                  <div className="flex items-center space-x-2 text-[#1B4332] font-semibold border-b border-slate-100 pb-2">
                    <MessageSquare className="w-4 h-4 text-emerald-700" />
                    <span className="font-serif font-bold text-sm">Catatan Wali Kelas</span>
                  </div>
                  <blockquote className="text-xs text-slate-600 leading-relaxed italic bg-slate-50 p-3 rounded-xl border border-slate-100">
                    "{selectedStudent.teacherNote}"
                  </blockquote>
                </div>

                {/* Monthly Attendance breakdown */}
                <div className="bg-white border border-[#D4CFC4] rounded-3xl p-6 shadow-xs space-y-4">
                  <div className="flex items-center space-x-2 text-slate-800 border-b border-slate-100 pb-2">
                    <CalendarCheck className="w-4.5 h-4.5 text-emerald-700" />
                    <span className="font-serif font-bold text-sm">Rincian Kehadiran Bulanan</span>
                  </div>

                  <div className="space-y-2 max-h-48 overflow-y-auto">
                    {selectedStudent.attendanceDetails.map((item, index) => (
                      <div key={index} className="flex justify-between text-xs border-b border-slate-50 pb-2 last:border-0 last:pb-0">
                        <span className="font-semibold text-slate-600">{item.month}</span>
                        <div className="flex space-x-2 text-[10px]">
                          <span className="px-1.5 py-0.5 bg-emerald-50 text-emerald-700 rounded-sm">Hadir: {item.present}</span>
                          {item.sick > 0 && <span className="px-1.5 py-0.5 bg-amber-50 text-amber-700 rounded-sm">Sakit: {item.sick}</span>}
                          {item.permission > 0 && <span className="px-1.5 py-0.5 bg-blue-50 text-blue-700 rounded-sm">Izin: {item.permission}</span>}
                          {item.absent > 0 && <span className="px-1.5 py-0.5 bg-red-50 text-red-700 rounded-sm">Alpha: {item.absent}</span>}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>

            {/* Print / Download Button Sim */}
            <div className="flex justify-end pt-2">
              <button 
                onClick={() => window.print()}
                className="px-5 py-2.5 bg-white border border-[#D4CFC4] hover:bg-slate-50 text-slate-700 font-bold rounded-xl text-xs flex items-center space-x-2 cursor-pointer transition-all"
              >
                <span>Cetak Syahadah (Raport)</span>
              </button>
            </div>
          </motion.div>
        )}

      </div>
    </div>
  );
}
