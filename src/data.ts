/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Announcement, Teacher, Program, StudentProfile } from './types';

export const SCHOOL_PROFILE = {
  name: "MDT Riyadlul Jannah",
  fullName: "Madrasah Diniyah Taklimiyah Riyadlul Jannah",
  address: "Jl. Industri No. 114 Kp. Sempu Gardu Ds. Pasir Gombong Kec. Cikarang Utara Kab. Bekasi Prov. Jawa Barat",
  phone: "+62 812-3456-7890", // Mock WA Number
  email: "info@mdtriyadluljannah.sch.id",
  instagram: "@mdt.riyadluljannah",
  facebook: "MDT Riyadlul Jannah Pasir Gombong",
  youtube: "MDT Riyadlul Jannah Official",
  mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15862.909015941916!2d107.1512836!3d-6.2995572!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6984bf41d99999%3A0x6b776f4e138a3795!2sPasirgombong%2C%20Cikarang%20Utara%2C%20Bekasi%20Regency%2C%20West%20Java!5e0!3m2!1sen!2sid!4v1700000000000!5m2!1sen!2sid",
  headmaster: "Ust. Mahrus Ali",
  establishedYear: "2012",
  tagline: "Membentuk Generasi Islami yang Berakhlakul Karimah, Cerdas, dan Hafal Al-Qur'an",
  history: "Madrasah Diniyah Taklimiyah (MDT) Riyadlul Jannah didirikan pada tahun 2012 atas inisiasi para tokoh agama dan masyarakat di Kampung Pasir Gombong, Cikarang Utara. Didorong oleh kesadaran akan pentingnya pendidikan agama yang terstruktur bagi anak-anak usia sekolah dasar di tengah pesatnya perkembangan industri di kawasan Cikarang, MDT Riyadlul Jannah hadir sebagai pilar pembinaan moral dan spiritual. Dari awal pendirian dengan hanya belasan santri, kini lembaga ini telah mendidik lebih dari ratusan santri dan dipercaya oleh masyarakat Pasir Gombong untuk membentuk karakter Islami sejak dini.",
  vision: "Terwujudnya Generasi Qur'ani yang Beriman Kokoh, Berakhlakul Karimah, Unggul dalam Ilmu Agama, dan Mandiri.",
  mission: [
    "Menyelenggarakan pendidikan keagamaan Islam (Diniyah) yang berkualitas bagi anak-anak usia sekolah.",
    "Membiasakan pengamalan ibadah praktis harian dan akhlakul karimah dalam kehidupan sehari-hari.",
    "Membina kemampuan membaca, menulis, memahami, dan menghafal Al-Qur'an secara tartil sesuai kaidah tajwid.",
    "Membangun sinergi yang harmonis antara madrasah, orang tua, dan lingkungan masyarakat sekitar untuk perlindungan moral anak.",
    "Mengenalkan nilai-nilai kepemimpinan dan kemandirian berlandaskan ukhuwah Islamiyah."
  ]
};

export const PROGRAMS: Program[] = [
  {
    id: "mdt-ula",
    name: "MDT Awaliyah / Ula",
    description: "Program dasar pendidikan diniyah untuk santri usia Sekolah Dasar (SD/MI). Fokus pada pengenalan dasar-dasar akidah, fikih ibadah praktis, membaca Al-Qur'an dengan tajwid, dan hafalan surah-surah pendek.",
    duration: "4 Tahun",
    targetAge: "7 - 12 Tahun (Setingkat SD)",
    schedule: "Senin s.d. Jumat (14.00 - 16.30 WIB)",
    icon: "BookOpen",
    subjects: [
      "Al-Qur'an & Tajwid",
      "Akidah Akhlak",
      "Fikih Ibadah",
      "Tarikh / Sejarah Kebudayaan Islam (SKI)",
      "Bahasa Arab Dasar",
      "Hadits Pilihan & Doa Harian"
    ]
  },
  {
    id: "mdt-wustha",
    name: "MDT Wustha",
    description: "Program lanjutan diniyah untuk santri usia Sekolah Menengah Pertama (SMP/MTs). Pendalaman kajian kitab fiqih dasar, bahasa arab menengah, sejarah peradaban Islam, dan penguatan akhlak remaja.",
    duration: "3 Tahun",
    targetAge: "12 - 15 Tahun (Setingkat SMP)",
    schedule: "Senin s.d. Jumat (16.30 - 18.00 WIB)",
    icon: "GraduationCap",
    subjects: [
      "Fikih Muamalah & Ibadah (Kitab Safinatun Najah/Fathul Qarib)",
      "Akidah (Kitab Aqidatul Awam)",
      "Akhlak Mulia (Kitab Akhlaqul Banin/Banat)",
      "Nahwu & Sharaf (Bahasa Arab)",
      "Al-Qur'an & Tafsir Ringkas",
      "Tarikh Islam Lanjutan"
    ]
  },
  {
    id: "tahfidz-junior",
    name: "Tahfidzul Qur'an & Juz Amma",
    description: "Program khusus bimbingan menghafal Al-Qur'an yang diintegrasikan dengan kurikulum diniyah. Dirancang dengan metode setoran (ziyadah) dan pengulangan (muraja'ah) yang ramah anak.",
    duration: "Berkelanjutan",
    targetAge: "7 - 15 Tahun",
    schedule: "Senin s.d. Kamis (13.00 - 14.00 WIB & Ba'da Maghrib)",
    icon: "HeartHandshake",
    subjects: [
      "Tahsin Al-Qur'an (Perbaikan Makhorijul Huruf)",
      "Ziyadah (Menambah Hafalan Baru)",
      "Muraja'ah Mandiri & Berpasangan",
      "Kaidah Tajwid Praktis",
      "Kandungan Makna Ayat (Tadabbur)"
    ]
  },
  {
    id: "majelis-taklim",
    name: "Kajian Mingguan Orang Tua / Umum",
    description: "Majelis ilmu khusus wali santri dan masyarakat sekitar Pasir Gombong. Membina pemahaman keagamaan keluarga, parenting Islami, dan mempererat tali silaturahim antarwarga.",
    duration: "Rutin Mingguan",
    targetAge: "Dewasa / Orang Tua Wali",
    schedule: "Setiap Ahad Pagi (07.30 - 09.00 WIB)",
    icon: "Users",
    subjects: [
      "Tafsir Yasin & Surah Pilihan",
      "Fikih Rumah Tangga (Munakahat)",
      "Parenting Islami (Mendidik Anak Zaman Now)",
      "Kajian Kitab Riyadhus Shalihin",
      "Tanya Jawab Keislaman Kontemporer"
    ]
  }
];

export const TEACHERS: Teacher[] = [
  {
    id: "u-mahrus-ali",
    name: "Ust. Mahrus Ali",
    role: "Kepala Madrasah & Pengajar Fikih Wustha",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300",
    education: "Alumni Pondok Pesantren Salafiyah & Praktisi Pendidikan Islam",
    subject: "Fikih, Nahwu Sharaf"
  },
  {
    id: "u-solehudin",
    name: "Ust. Sholehudin, S.Sy.",
    role: "Wakil Kepala Madrasah & Pengajar Akidah Akhlak",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=300",
    education: "S1 Hukum Syariah - UIN Sunan Gunung Djati",
    subject: "Akidah Akhlak, SKI"
  },
  {
    id: "ustdz-halimah",
    name: "Ustazah Halimah Sa'diyyah, S.Ag.",
    role: "Koordinator Kurikulum & Pengajar Quran Tajwid Ula",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=300",
    education: "S1 Tafsir Hadits - UIN Syarif Hidayatullah",
    subject: "Al-Qur'an Tajwid, Bahasa Arab Dasar"
  },
  {
    id: "ustdz-fatimah",
    name: "Ustazah Fatimah Az-Zahra",
    role: "Pembina Tahfidz Putri & Pengajar Doa Harian",
    avatar: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&q=80&w=300",
    education: "Alumni Pondok Pesantren Daarul Qur'an (Hafizhah 30 Juz)",
    subject: "Tahfidzul Qur'an, Khat (Kaligrafi)"
  },
  {
    id: "u-luqman",
    name: "Ust. Luqman Hakim",
    role: "Pembina Tahfidz Putra & Ekstrakurikuler Rebana",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=300",
    education: "Alumni Institut Ilmu Al-Qur'an (IIQ) Jakarta",
    subject: "Tahfidz, Seni Hadroh/Rebana"
  }
];

export const ANNOUNCEMENTS: Announcement[] = [
  {
    id: "penerimaan-santri-baru-2026",
    title: "Pendaftaran Santri Baru (PPDB) Tahun Ajaran 2026/2027 Telah Dibuka",
    content: "MDT Riyadlul Jannah membuka pendaftaran santri baru untuk jenjang Awaliyah (Ula) dan program Tahfidz Junior. Pendaftaran gelombang I dibuka mulai tanggal 1 Mei hingga 30 Juli 2026. Persyaratan administrasi meliputi fotokopi Akta Kelahiran, fotokopi Kartu Keluarga, dan pasfoto ukuran 3x4 sebanyak 2 lembar. Calon orang tua wali dapat mendaftar secara online melalui website ini pada menu 'Pendaftaran' atau datang langsung ke sekretariat madrasah setiap sore hari kerja.",
    date: "2026-05-01",
    category: "pengumuman",
    important: true
  },
  {
    id: "ujian-akhir-semester-genap",
    title: "Jadwal Imtihan (Ujian Akhir Semester) Genap TP 2025/2026",
    content: "Diberitahukan kepada seluruh wali santri bahwa pelaksanaan Imtihan Syafahi (Ujian Lisan) dan Kitabi (Ujian Tulis) Semester Genap akan dilaksanakan mulai hari Senin, 15 Juni 2026 sampai dengan Jumat, 26 Juni 2026. Mohon para orang tua membimbing putra-putrinya di rumah untuk mengulang hafalan surah dan materi pelajaran kitab di rumah. Kartu ujian dapat diambil di bendahara madrasah mulai tanggal 8 Juni dengan menyelesaikan iuran syahriyah (SPP) bulanan terlebih dahulu.",
    date: "2026-06-03",
    category: "akademik",
    important: false
  },
  {
    id: "phbi-tahun-baru-hijriyah",
    title: "Peringatan Tahun Baru Islam 1 Muharram 1448 H & Santunan Anak Yatim",
    content: "Alhamdulillah, dalam rangka menyambut Tahun Baru Islam 1 Muharram 1448 H, MDT Riyadlul Jannah akan mengadakan pawai obor damai di lingkungan Kampung Pasir Gombong diikuti oleh seluruh santri dan asatidzah. Acara dilanjutkan dengan Tabligh Akbar dan pemberian santunan kepada anak-anak yatim di lingkungan RW 03. Kami membuka kesempatan bagi para muhsinin/donatur yang ingin menitipkan infak terbaiknya. Acara akan dilaksanakan pada malam 1 Muharram (perkiraan pertengahan Juli 2026) ba'da Sholat Isya.",
    date: "2026-07-02",
    category: "kegiatan",
    important: true
  },
  {
    id: "libur-akhir-tahun-ajaran",
    title: "Pengumuman Libur Akhir Tahun Ajaran dan Pembagian Rapor",
    content: "Sehubungan dengan telah selesainya proses penilaian akhir tahun, pembagian buku rapor santri (syahadah) akan dilaksanakan secara tatap muka bersama orang tua wali pada hari Minggu, 28 Juni 2026 pukul 08.00 WIB. Setelah pembagian rapor, aktivitas belajar mengajar akan diliburkan mulai tanggal 29 Juni hingga 13 Juli 2026. Santri masuk kembali untuk tahun ajaran baru pada hari Senin, 14 Juli 2026.",
    date: "2026-06-25",
    category: "akademik",
    important: false
  }
];

// Fee Simulator configuration
export const TUITION_FEES = {
  registration: 150000, // One-time registration fee
  monthly: 75000,       // Monthly SPP
  books: {
    "mdt-ula": 120000,  // Package of books for Awaliyah
    "mdt-wustha": 140000,
    "tahfidz-junior": 60000,
    "majelis-taklim": 0
  },
  uniforms: {
    boy: 180000, // Green and white Moslem uniform with peci
    girl: 210000, // Green and white Moslem uniform with hijab
    none: 0
  }
};

// Mock student profiles database for lookup/student portal
export const MOCK_STUDENTS: Record<string, StudentProfile> = {
  "RJ26001": {
    nis: "RJ26001",
    fullName: "Ahmad Fauzi Mubarak",
    gender: "Laki-laki",
    className: "Kelas II - Awaliyah (Ula)",
    academicYear: "2025/2026",
    parentName: "Hendra Mubarak",
    address: "Pasir Gombong RT 02 / RW 03, Cikarang Utara",
    behaviorScore: "Sangat Baik",
    teacherNote: "Ananda Fauzi sangat tekun dalam belajar dan aktif di kelas. Hafalan Al-Qur'annya berkembang pesat. Harap bimbingan muraja'ah di rumah terus ditingkatkan, terutama pada makhraj huruf hijaiyah yang tebal (Kha, Shod, Dhad).",
    hafalanStatus: [
      "QS. An-Naba' (Ayat 1-20)",
      "QS. Al-Inshiqaq",
      "QS. Al-Buruj",
      "QS. At-Thariq"
    ],
    grades: [
      { subjectName: "Al-Qur'an (Tahsin & Tajwid)", score: 92, grade: "A", notes: "Lancar dengan makhraj yang baik." },
      { subjectName: "Akidah Akhlak", score: 88, grade: "A", notes: "Memahami sifat-sifat wajib bagi Allah." },
      { subjectName: "Fikih Ibadah", score: 85, grade: "B", notes: "Hafal rukun wudhu dan gerak sholat." },
      { subjectName: "Tarikh Islam (SKI)", score: 80, grade: "B", notes: "Memahami kisah dakwah Nabi Muhammad." },
      { subjectName: "Bahasa Arab", score: 78, grade: "B", notes: "Bagus dalam hafalan mufrodat (kosakata)." },
      { subjectName: "Hadits & Doa Harian", score: 90, grade: "A", notes: "Lancar melafalkan hadits keutamaan belajar." }
    ],
    attendanceSummary: {
      totalSessions: 120,
      attended: 116,
      attendanceRate: 96.6
    },
    attendanceDetails: [
      { month: "Januari", present: 22, absent: 0, sick: 1, permission: 0 },
      { month: "Februari", present: 20, absent: 0, sick: 0, permission: 0 },
      { month: "Maret", present: 24, absent: 0, sick: 0, permission: 0 },
      { month: "April", present: 18, absent: 1, sick: 1, permission: 0 },
      { month: "Mei", present: 22, absent: 0, sick: 0, permission: 1 },
      { month: "Juni", present: 10, absent: 0, sick: 0, permission: 0 }
    ]
  },
  "RJ26002": {
    nis: "RJ26002",
    fullName: "Siti Aisyah Humaira",
    gender: "Perempuan",
    className: "Kelas III - Awaliyah (Ula)",
    academicYear: "2025/2026",
    parentName: "M. Thoyib",
    address: "Perumahan Pasir Raya, Pasir Gombong",
    behaviorScore: "Sangat Baik",
    teacherNote: "Siti Aisyah adalah santriwati teladan dengan akhlak yang sangat mulia. Selalu membantu guru merapikan kelas dan aktif memimpin doa belajar. Kemampuan menulis Arabnya (khat) sangat indah dan rapi.",
    hafalanStatus: [
      "QS. An-Naziat",
      "QS. Abasa",
      "QS. At-Takwir",
      "QS. Al-Infitar"
    ],
    grades: [
      { subjectName: "Al-Qur'an (Tahsin & Tajwid)", score: 95, grade: "A", notes: "Sangat tartil dan menguasai hukum mad." },
      { subjectName: "Akidah Akhlak", score: 94, grade: "A", notes: "Sangat berbakti dan sopan santun." },
      { subjectName: "Fikih Ibadah", score: 90, grade: "A", notes: "Menguasai tata cara shalat sunnah." },
      { subjectName: "Tarikh Islam (SKI)", score: 86, grade: "A", notes: "Sangat memahami kisah khulafaur rasyidin." },
      { subjectName: "Bahasa Arab", score: 85, grade: "A", notes: "Lancar membaca teks percakapan pendek." },
      { subjectName: "Hadits & Doa Harian", score: 96, grade: "A", notes: "Hafal doa-doa setelah shalat fardhu." }
    ],
    attendanceSummary: {
      totalSessions: 120,
      attended: 120,
      attendanceRate: 100.0
    },
    attendanceDetails: [
      { month: "Januari", present: 23, absent: 0, sick: 0, permission: 0 },
      { month: "Februari", present: 20, absent: 0, sick: 0, permission: 0 },
      { month: "Maret", present: 24, absent: 0, sick: 0, permission: 0 },
      { month: "April", present: 20, absent: 0, sick: 0, permission: 0 },
      { month: "Mei", present: 23, absent: 0, sick: 0, permission: 0 },
      { month: "Juni", present: 10, absent: 0, sick: 0, permission: 0 }
    ]
  },
  "RJ26003": {
    nis: "RJ26003",
    fullName: "Muhammad Rizky Pratama",
    gender: "Laki-laki",
    className: "Kelas I - Wustha",
    academicYear: "2025/2026",
    parentName: "Agus Pratama",
    address: "Gg. Musholla Al-Jihad, Pasir Gombong",
    behaviorScore: "Baik",
    teacherNote: "Ananda Rizky memiliki semangat belajar yang bagus. Pada mata pelajaran Nahwu dan Sharaf, perkembangannya sangat baik. Namun, harap lebih disiplin waktu, hindari datang terlambat ke kelas agar tidak tertinggal materi pembuka.",
    hafalanStatus: [
      "QS. Al-Mulk (Ayat 1-15)",
      "QS. Al-Qalam (Ayat 1-10)",
      "Doa Istighotsah Lengkap"
    ],
    grades: [
      { subjectName: "Fikih Wustha (Safinatun Najah)", score: 82, grade: "B", notes: "Mengerti hukum bersuci dan najis mukhaffafah." },
      { subjectName: "Akidah (Aqidatul Awam)", score: 84, grade: "B", notes: "Lancar melantunkan nadhom sifat wajib." },
      { subjectName: "Akhlak (Akhlaqul Banin)", score: 80, grade: "B", notes: "Menerapkan etika menuntut ilmu ke guru." },
      { subjectName: "Bahasa Arab (Nahwu Sharaf)", score: 88, grade: "A", notes: "Sangat baik dalam meng-i'rab kata dasar." },
      { subjectName: "Al-Qur'an & Tafsir Ringkas", score: 81, grade: "B", notes: "Memahami tafsir maknawi Juz Amma." },
      { subjectName: "Tarikh Peradaban Islam", score: 79, grade: "B", notes: "Memahami silsilah Daulah Umayyah." }
    ],
    attendanceSummary: {
      totalSessions: 120,
      attended: 112,
      attendanceRate: 93.3
    },
    attendanceDetails: [
      { month: "Januari", present: 21, absent: 1, sick: 1, permission: 0 },
      { month: "Februari", present: 18, absent: 2, sick: 0, permission: 0 },
      { month: "Maret", present: 23, absent: 0, sick: 1, permission: 0 },
      { month: "April", present: 19, absent: 1, sick: 0, permission: 0 },
      { month: "Mei", present: 22, absent: 0, sick: 0, permission: 1 },
      { month: "Juni", present: 9, absent: 1, sick: 0, permission: 0 }
    ]
  }
};
