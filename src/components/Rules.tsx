/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { 
  ShieldAlert, 
  MessageSquareOff, 
  HeartHandshake, 
  Smartphone, 
  BookOpenCheck, 
  AlertTriangle,
  FileSpreadsheet,
  Clock,
  UserX,
  Sparkles,
  BookOpen
} from 'lucide-react';

export default function Rules() {
  const rulesData = [
    {
      number: 1,
      title: "Etika Lisan, Larangan Berbicara Kasar/Toxic & Menjaga Nama Orang Tua",
      icon: MessageSquareOff,
      iconBg: "bg-red-50 text-red-700 border-red-100",
      description: "Menjaga kehormatan lisan sebagai cerminan akhlak seorang santri sejati.",
      points: [
        "Seluruh santri/murid wajib menjaga lisan dan dilarang keras mengucapkan kata-kata kotor, jorok, umpatan, atau istilah toxic (seperti menyebut nama hewan, atau kata kasar seperti kotoran hewan/manusia, dll), baik dalam kondisi bercanda maupun saat emosi/bertengkar.",
        "Dilarang keras menjadikan nama orang tua (ayah/ibu) teman sebagai bahan ejekan, candaan, atau panggil-panggilan. Hal ini merupakan bentuk Su'ul Adab (akhlak buruk) yang sangat dilarang di lingkungan Madrasah dan pesantren.",
        "Santri/Murid wajib menggunakan bahasa yang santun, lembut, dan penuh penghormatan saat berbicara kepada sesama santri, pengurus, maupun kepada para asatidz/asatidzah."
      ]
    },
    {
      number: 2,
      title: "Etika Hubungan Antar Lawan Jenis (Bukan Mahram) & Larangan \"Crush-Crushan\"",
      icon: HeartHandshake,
      iconBg: "bg-emerald-50 text-emerald-700 border-emerald-100",
      description: "Menjaga kehormatan diri dan memelihara kesucian hati dari fitnah pergaulan.",
      points: [
        "Seluruh santri/murid wajib menjaga pandangan (ghaddul bashar). Dilarang keras menyebut-nyebut, membicarakan, atau menggosipkan nama lawan jenis yang disukai—baik karena alasan fisik (tampan/cantik) maupun karena sekadar kagum. Hal ini dilarang karena menjadi pintu masuk (wasilah) yang menjerumuskan hati ke dalam arus zina pikiran/hati serta hubungan pacaran.",
        "Dilarang keras terlibat dalam budaya cinta monyet, surat-menyurat, titip salam, mengagumi secara berlebihan hingga mengganggu fokus belajar, atau membuat kelompok/geng penanti lawan jenis tertentu. Sekolah dan pondok adalah tempat menuntut ilmu, bukan tempat menyemai asmara yang belum halal.",
        "Dilarang keras berduaan, mengobrol berdua tanpa urusan syar'i, atau membuat janji temu antara santri putra dan santri putri.",
        "Interaksi/komunikasi terkait tugas madrasah atau kepengurusan hanya diperbolehkan melalui forum resmi atau koordinasi yang diketahui oleh Ustaz/ustazah (pembina).",
        "Santri/Murid wajib mematuhi batas wilayah (separasi) putra dan putri yang telah ditentukan di lingkungan pondok maupun MDT."
      ]
    },
    {
      number: 3,
      title: "Etika Bijak Bermedia Sosial & Penggunaan Gadget",
      icon: Smartphone,
      iconBg: "bg-blue-50 text-blue-700 border-blue-100",
      description: "Pemanfaatan teknologi secara sehat dan bermartabat sesuai syariat.",
      points: [
        "Gadget/laptop hanya boleh digunakan untuk keperluan edukasi, hafalan, atau komunikasi penting dengan orang tua pada waktu yang telah ditentukan oleh pengurus / Asatidz dan sudah dapat izin. Di luar waktu tersebut, gadget wajib dititipkan.",
        "Dilarang keras menampilkan foto pasangan, menandai (tagging), atau mencantumkan nama/akun lawan jenis (bukan Mahram) di bio, highlight, maupun foto profil Instagram/media sosial lainnya (seperti tren 'couple goals', inisial nama, atau kode-kode asmara lainnya).",
        "Santri/Murid dilarang saling berkomentar tidak syar'i (seperti menggoda, memuji fisik, atau bercanda berlebihan) atau menggunakan kata-kata kasar/toxic di unggahan media sosial (DM IG, WA dll).",
        "Santri/Murid dilarang mengunggah konten yang tidak mencerminkan akhlakul karimah (seperti konten joget-joget, kata-kata kasar, atau pamer aurat) saat menggunakan atribut maupun selama menjadi santri pondok/MDT."
      ]
    },
    {
      number: 4,
      title: "Etika Selama Kegiatan Belajar Mengajar (KBM) MDT",
      icon: BookOpenCheck,
      iconBg: "bg-amber-50 text-amber-700 border-amber-100",
      description: "Menjaga adab menuntut ilmu demi meraih keberkahan ilmu yang dipelajari.",
      points: [
        "Wajib menghormati, mendengarkan dengan takzim, dan dilarang memotong penjelasan ustadz/ustadzah saat mengajar.",
        "Santri/Murid harus sudah berada di kelas 5 menit sebelum KBM dimulai dengan membawa kitab dan alat tulis lengkap.",
        "Dilarang membuat kegaduhan, makan/minum saat pelajaran berlangsung (kecuali izin), atau tidur di kelas."
      ],
      customSection: (
        <div className="mt-4 bg-slate-50 border border-slate-150 rounded-xl p-4.5 space-y-4">
          <div className="flex items-center space-x-2 text-emerald-800">
            <Clock className="w-4 h-4 shrink-0" />
            <span className="font-bold text-xs uppercase tracking-wider">Aturan Kerapian Berbusana (Dresscode)</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div className="bg-white p-3 rounded-lg border border-slate-100 space-y-1.5">
              <span className="font-bold text-slate-800 block text-[11px] uppercase tracking-wide text-emerald-700">Putra</span>
              <p className="text-slate-600 leading-relaxed font-medium">
                Wajib memakai baju koko putih rapi, sarung dan peci hitam di <strong className="text-emerald-800">Pagi hari</strong> serta peci putih di <strong className="text-emerald-800">Sore hari</strong>.
              </p>
            </div>
            <div className="bg-white p-3 rounded-lg border border-slate-100 space-y-1.5">
              <span className="font-bold text-slate-800 block text-[11px] uppercase tracking-wide text-orange-700">Putri</span>
              <p className="text-slate-600 leading-relaxed font-medium">
                Wajib memakai busana muslimah yang longgar, tidak ketat, tidak transparan, dan jilbab yang menjuntai menutup dada, sesuai jadwal:
              </p>
              <ul className="mt-1.5 space-y-1 pl-1 text-[11px] text-slate-700 font-bold">
                <li className="flex items-center justify-between">
                  <span>• Sen & Sel Sore:</span>
                  <span className="bg-slate-100 px-1.5 py-0.5 rounded text-slate-800">Gamis Putih & Kerudung Berundy</span>
                </li>
                <li className="flex items-center justify-between">
                  <span>• Rab & Kam Sore:</span>
                  <span className="bg-slate-100 px-1.5 py-0.5 rounded text-slate-800">Gamis Hitam & Kerudung Biru</span>
                </li>
                <li className="flex items-center justify-between">
                  <span>• Jum'at Sore:</span>
                  <span className="bg-slate-100 px-1.5 py-0.5 rounded text-slate-800">Gamis Hitam & Kerudung Coksu</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )
    }
  ];

  const penalties = [
    {
      level: "Pelanggaran Ringan",
      color: "border-amber-200 bg-amber-50/50 text-amber-900",
      iconColor: "text-amber-600",
      details: "Teguran lisan dari asatidz/pengurus, menulis kalimat istighfar sebanyak 1.000 kali, serta setoran hafalan Hadits Arbain Nawawi atau Hadits Bulughul Maram (ditentukan oleh pengurus/asatidz)."
    },
    {
      level: "Pelanggaran Sedang",
      color: "border-orange-200 bg-orange-50/50 text-orange-900",
      iconColor: "text-orange-600",
      details: "Tugas khidmah (membersihkan lingkungan pondok/fasilitas kelas MDT), pembuatan surat pernyataan tertulis, dan penyitaan gadget/alat elektronik dalam jangka waktu yang ditentukan (minimal 1 bulan/hingga akhir semester)."
    },
    {
      level: "Pelanggaran Berat / Akumulatif",
      color: "border-red-200 bg-red-50/50 text-red-900",
      iconColor: "text-red-600",
      details: (
        <ol className="list-decimal pl-4 space-y-1.5 text-xs font-semibold">
          <li>Pemanggilan orang tua/wali santri ke madrasah/pondok.</li>
          <li>Sanksi Akademik Tegas: Pernyataan tidak naik kelas pada akhir tahun ajaran, atau diturunkan tingkat (kelas) ke jenjang di bawahnya secara langsung jika pelanggaran dilakukan di tengah semester.</li>
          <li>Tindakan terakhir berupa pemberhentian hak santri dan dikembalikan sepenuhnya kepada orang tua/wali.</li>
        </ol>
      )
    }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.35 }}
      className="py-12 px-4 sm:px-6 lg:px-8 space-y-12"
    >
      {/* Header Banner */}
      <div className="text-center max-w-3xl mx-auto space-y-3.5">
        <span className="text-[10px] uppercase tracking-widest font-sans font-extrabold text-emerald-800 px-3 py-1 bg-emerald-50 border border-emerald-100 rounded-full inline-flex items-center gap-1.5">
          <ShieldAlert className="w-3.5 h-3.5" />
          Karakter &amp; Keberkahan Ilmu
        </span>
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 font-serif tracking-tight leading-none">
          Tata Tertib Beretika Santri / Murid
        </h2>
        <p className="text-slate-600 text-sm md:text-base font-light max-w-2xl mx-auto leading-relaxed">
          Segenap aturan moral dan etika yang wajib diindahkan oleh seluruh santri dan murid <span className="font-semibold text-emerald-800">Madrasah Diniyah Takmiliyah Riyadlul Jannah</span> demi menciptakan iklim belajar yang berkah dan diridhoi Allah SWT.
        </p>
      </div>

      {/* Main Content Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left column: 4 Ethics cards */}
        <div className="lg:col-span-8 space-y-6">
          {rulesData.map((rule) => {
            const IconComponent = rule.icon;
            return (
              <div 
                key={rule.number}
                className="bg-white border border-slate-150 rounded-2xl p-6 md:p-8 shadow-2xs hover:shadow-xs transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className={`p-3 rounded-xl border shrink-0 ${rule.iconBg}`}>
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <div className="space-y-1.5">
                    <span className="text-[10px] uppercase tracking-widest font-mono text-emerald-800 font-bold block">Etika Bagian {rule.number}</span>
                    <h3 className="font-extrabold text-lg md:text-xl text-slate-900 font-serif leading-tight">
                      {rule.title}
                    </h3>
                    <p className="text-xs text-slate-500 italic font-light font-sans">
                      {rule.description}
                    </p>
                  </div>
                </div>

                <div className="mt-6 border-t border-slate-100 pt-5 space-y-4">
                  <ul className="space-y-3">
                    {rule.points.map((point, idx) => (
                      <li key={idx} className="flex items-start gap-3.5 text-xs sm:text-sm text-slate-700 leading-relaxed font-sans">
                        <span className="w-5 h-5 rounded-full bg-emerald-50 text-emerald-800 font-bold text-[10px] flex items-center justify-center shrink-0 mt-0.5">
                          {idx + 1}
                        </span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  {rule.customSection}
                </div>
              </div>
            );
          })}
        </div>

        {/* Right column: Penalties & Legal Information */}
        <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-26">
          
          {/* Ta'zir Sanksi Card */}
          <div className="bg-slate-900 text-white rounded-2xl p-6 border border-slate-800 shadow-sm space-y-5">
            <div className="flex items-center space-x-2.5 border-b border-slate-800 pb-3">
              <AlertTriangle className="w-5 h-5 text-amber-500 animate-pulse shrink-0" />
              <div>
                <h4 className="font-extrabold text-sm uppercase tracking-wider font-serif">Sanksi Pelanggaran (Ta'zir)</h4>
                <p className="text-[10px] text-slate-400 font-light">Bersifat mendidik, mendisiplinkan &amp; menjaga marwah</p>
              </div>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed font-light">
              Setiap pelanggaran terhadap tata tertib etika akan dikenakan sanksi bertahap yang ditentukan secara bijak oleh asatidzah:
            </p>

            <div className="space-y-4">
              {penalties.map((penalty, idx) => (
                <div key={idx} className={`p-3.5 rounded-xl border text-xs space-y-1.5 ${penalty.color}`}>
                  <div className="flex items-center gap-1.5 font-extrabold">
                    <span className="w-2 h-2 rounded-full bg-current shrink-0"></span>
                    <span>{penalty.level}</span>
                  </div>
                  <div className="leading-relaxed font-medium">
                    {penalty.details}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Verification & Signature Card */}
          <div className="bg-brand-cream/40 border border-brand-divider rounded-2xl p-6 text-center space-y-4">
            <div className="w-12 h-12 bg-emerald-800 text-brand-cream rounded-full flex items-center justify-center mx-auto shadow-xs">
              <FileSpreadsheet className="w-5 h-5" />
            </div>
            
            <div className="space-y-1">
              <h5 className="font-serif font-black text-slate-900 text-sm">Lembar Ketetapan Resmi</h5>
              <p className="text-[10px] font-sans text-slate-500 uppercase tracking-wider font-bold">Kepatuhan Akhlakul Karimah</p>
            </div>

            <div className="pt-3 border-t border-brand-divider/40 text-xs text-slate-600 leading-relaxed font-sans text-left space-y-2">
              <div className="flex justify-between">
                <span className="font-semibold text-[10px] uppercase text-slate-400">Ditetapkan di</span>
                <span className="font-bold text-slate-800 text-right">Pasirgombong, Cikarang Utara</span>
              </div>
              <div className="flex justify-between">
                <span className="font-semibold text-[10px] uppercase text-slate-400">Pada Tanggal</span>
                <span className="font-bold text-slate-800 text-right">10 Juli 2026</span>
              </div>
              <div className="pt-4 text-center border-t border-brand-divider/20">
                <p className="text-[10px] text-slate-400 italic">Tertanda,</p>
                <p className="font-bold text-slate-800 font-serif mt-1">Kepala MDT Riyadlul Jannah</p>
                <div className="w-20 h-0.5 bg-emerald-800/20 mx-auto my-2"></div>
                <p className="text-[11px] font-bold text-emerald-800">Dewan Asatidz &amp; Pengurus</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </motion.div>
  );
}
