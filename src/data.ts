/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Announcement, Teacher, Program, StudentProfile, ClassStudentCount, BahtsulMasailSession } from './types';
import asatidzPhoto from './assets/images/asatidz.jpg';
import musyawarahMalam from './assets/images/musyawarahmalam.jpeg';

export const SCHOOL_PROFILE = {
  name: "MDT Riyadlul Jannah",
  fullName: "Madrasah Diniyah Taklimiyah Riyadlul Jannah",
  arabicSub: "المدرسة الدّينيّة التعليميّة",
  arabicMain: "رياض الجنّة",
  arabicFullName: "المدرسة الدّينيّة التعليميّة رياض الجنّة",
  statisticNumber: "322232160308",
  address: "Jl. Industri No. 114 Kp. Sempu Gardu Ds. Pasir Gombong Kec. Cikarang Utara Kab. Bekasi Prov. Jawa Barat",
  phone: "",
  email: "mdtriyadluljannahcikut@gmail.com",
  instagram: "ppriyadluljannahpusat",
  tiktok: "ppriyadluljannahpusat",
  facebook: "MDT Riyadlul Jannah Pasir Gombong",
  youtube: "@mirajmedia127",
  youtubeUrl: "https://www.youtube.com/@mirajmedia127",
  mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.736009849206!2d107.1517449!3d-6.2984027!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69856376aa60db%3A0xbfa5176193686755!2sSDIT%20Riyadlul%20Jannah!5e0!3m2!1sid!2sid!4v1719999999999!5m2!1sid!2sid",
  mapDirectUrl: "https://maps.app.goo.gl/7dMgHj19RTKaBU1r7",
  headmaster: "Ust. Mahrus Ali",
  establishedYear: "1999",
  tagline: "Membentuk Generasi Islami yang Berakhlakul Karimah, Cerdas, dan Hafal Al-Qur'an",
  history: "Perjalanan MDT Riyadlul Jannah berakar dari ketulusan dan amanah masyarakat Kampung Pasir Gombong saat mempercayakan putra-putrinya mengaji Kitabullah Al-Qur'anul Karim kepada Kiai Haji Abdul Hakam Makky. Berawal dari 6 santri di serambi rumah yang amat sederhana hingga berkembang pesat berkat keikhlasan, doa para Asatidz, Habaib, serta restu KH. Abdul Muiz. Pada tahun 1999, Pondok Pesantren & MDT Riyadlul Jannah resmi didirikan dan kini telah mendidik ratusan santri.",
  detailedHistory: [
    "Perjalanan MDT Riyadlul Jannah berakar dari ketulusan dan amanah besar masyarakat Kampung Pasir Gombong. Perjuangan ini bermula ketika masyarakat sekitar mulai mempercayakan putra-putrinya untuk belajar dan mengaji Kitabullah Al-Qur'anul Karim kepada Kiai Haji Abdul Hakam Makky. Sungguh sebuah awal yang amat mengharukan. Pengajaran tersebut berawal dari hanya enam orang anak yang rutin mengaji setiap selesai salat Maghrib. Dalam kondisi yang sangat memprihatinkan, anak-anak harus mengaji di serambi rumah. Ketika musim hujan tiba, tak jarang mereka kehujanan. Bahkan saat berpindah ke dalam rumah pun, tetesan air dari atap yang bocor di sana-sini tak terelakkan, ditambah lagi ruang rumah yang terbatas tak mampu menampung anak-anak yang kian hari kian bertambah.",
    "Keikhlasan dan ketekunan tersebut membuahkan hasil. Seiring berjalannya waktu, murid yang mengaji berkembang pesat dari belasan hingga bertambah puluhan anak setiap harinya. Perkembangan ini juga tak lepas dari keberkahan doa orang-orang tercinta, para Asatidz, serta doa para Habaib dan Ulama Jawa Barat yang diundang oleh KH. Abdul Muiz—yang sekaligus menitipkan pesan dan restu agar putra-putri beliau bertekad mandiri dalam syiar Islam. Melihat pesatnya perkembangan industri di kawasan Cikarang, timbul kesadaran bersama akan pentingnya wadah pendidikan agama yang lebih terstruktur bagi anak-anak usia sekolah dasar. Berlandaskan hal tersebut, pada tahun 1999, Pondok Pesantren Riyadlul Jannah & MDT Riyadlul Jannah resmi didirikan atas inisiasi para tokoh agama dan tokoh masyarakat Desa Pasir Gombong, Cikarang Utara.",
    "Hadir sebagai pilar pembinaan moral dan spiritual di tengah modernisasi kawasan, MDT Riyadlul Jannah terus bertransformasi. Dari yang awalnya hanya berawal dari 6 santri di serambi rumah yang sederhana, kini MDT Riyadlul Jannah telah mendidik ratusan santri dan terus mendapat kepercayaan penuh dari masyarakat Pasir Gombong untuk membentuk generasi berkarakter Islami, berakhlakul karimah, dan cinta Al-Qur'an sejak dini."
  ],
  vision: "Terwujud nya generasi Insan Robbani yang berilmu, beriman, berdisiplin, dan berakhlak mulia, serta keseimbangan prestasi Duniawi dan Ukhrawi",
  mission: [
    "Menyelenggarakan pembelajaran Al-Qur'an secara tartil dengan penguasaan hukum-hukum tajwid yang benar dan fasih.",
    "Mendidik Murid agar mampu membaca, mengartikan, dan memahami Kitab salaf (Kitab Kuning) melalui pemahaman dasar kaidah Nahwu dan Shorof.",
    "Membiasakan dan membimbing Murid dalam prakter Ubudiyah harian sesuai kaidah fiqih yang shahih.",
    "Menanamkan nilai-nilai moral, adab, dan budi pekerti luhur berlandaskan Al-Qur'an, Sunnah dan Salafunassholeh dalam kehidupan sehari-hari.",
    "Membentuk karakter Murid yang tangguh, tepat waktu, serta taat pada aturan agama dan madrasah."
  ],
  goals: [
    "Menghasilkan lulusan yang mampu membaca Al-Qur'an secara tartil, fasih, dan menguasai hukum-hukum tajwid dengan benar.",
    "Mewujudkan santri/murid yang mampu membaca, mengartikan, dan memahami Kitab Salaf (Kitab Kuning) dasar melalui penguasaan kaidah Nahwu dan Shorof.",
    "Membentuk kebiasaan dan kemandirian murid dalam menjalankan ibadah/ubudiyah harian (syariat) terutama Hafal bacaan & gerakan Rukun Qolbi,Qouli dan Fi'li didalam sholat",
    "Menanamkan adab, moral, dan budi pekerti luhur dalam kepribadian murid sehari-hari berlandaskan ajaran Al-Qur'an, Sunnah, dan keteladanan Salafussholeh.",
    "Membentuk pribadi murid yang tangguh, taat aturan, tepat waktu, serta mampu meraih keseimbangan antara prestasi akademik/duniawi dan kesiapan ukhrawi."
  ],
  coreValues: [
    {
      title: "Adab & Akhlakul Karimah",
      subtitle: "الأَخْلَاقُ الْكَرِيمَةُ",
      description: "Menempatkan adab di atas ilmu. Kami membimbing santri untuk senantiasa menghormati orang tua, asatidzah, menyayangi sesama, dan berprilaku sopan baik di madrasah maupun di rumah.",
      icon: "Heart"
    },
    {
      title: "Interaksi & Cinta Al-Qur'an",
      subtitle: "حُبُّ الْقُرْآنِ",
      description: "Membiasakan santri akrab dengan Al-Qur'an sejak dini melalui tahsin (perbaikan makhraj), hafalan Juz Amma secara tartil, serta menumbuhkan rasa cinta pada firman-firman Allah SWT.",
      icon: "Sparkles"
    },
    {
      title: "Tafaqquh Fiddin",
      subtitle: "التَّفَقُّهُ فِي الدِّينِ",
      description: "Memberikan pemahaman mendasar yang kokoh terhadap syariat Islam Ahlussunnah wal Jama'ah, mencakup akidah yang lurus, tata cara ibadah yang sah (fiqih), dan keteladanan akhlak Rasulullah.",
      icon: "BookOpen"
    },
    {
      title: "Disiplin & Istiqomah",
      subtitle: "الْاِسْتِقَامَةُ",
      description: "Melatih kebiasaan shalat berjamaah, berdzikir, tertib waktu belajar, serta konsisten dalam mengulang-ulang hafalan (muraja'ah) secara berkesinambungan.",
      icon: "Clock"
    },
    {
      title: "Ukhuwah & Kebersamaan",
      subtitle: "الْعَمَلُ الْجَمَاعِيُّ",
      description: "Memupuk rasa kepedulian sosial, tolong-menolong, dan semangat persaudaraan islam (Ukhuwah Islamiyah) dalam interaksi antar santri guna membangun karakter mandiri yang harmonis.",
      icon: "Users"
    }
  ]
};

export const PROGRAMS: Program[] = [
  {
    id: "mdt-ula",
    name: "MDT Awaliyah / Ula",
    description: "Program dasar pendidikan diniyah. Fokus pada pengenalan dasar-dasar akidah, fikih ibadah praktis, membaca Al-Qur'an dengan tajwid, dan hafalan surah-surah pendek.",
    duration: "3 Tahun",
    targetAge: "7 - 12 Tahun (Setingkat SD)",
    schedule: "Senin - Jumat (07.00 - 09.00 & 16.00 - 17.00 WIB)",
    icon: "BookOpen",
    subjects: [
      "Al-Qur'an & Tajwid",
      "Akidah Akhlak",
      "Fikih Ibadah",
      "Tarikh",
      "Nahwu Shorrof Dasar",
      "Hadits Pilihan & Doa Harian"
    ]
  },
  {
    id: "mdt-wustha",
    name: "MDT Wustha",
    description: "Program lanjutan diniyah. Pendalaman kajian kitab fiqih dasar, bahasa arab menengah, sejarah peradaban Islam, dan penguatan akhlak remaja.",
    duration: "3 Tahun",
    targetAge: "12 - 15 Tahun",
    schedule: "Senin - Jumat (07.00 - 09.00 & 16.00 - 17.00 WIB)",
    icon: "GraduationCap",
    subjects: [
      "Fikih Muamalah & Nikah (Kitab Fathul Qarib)",
      "Mustholah Hadits",
      "Akhlak Mulia (Kitab Ta'lim Muta'allim)",
      "Nahwu & Sharaf (Imrithi & Alfiyah Ibnu Malik)",
      "Ushul Fiqih",
      "Qoidah Fiqih"
    ]
  },
  {
    id: "tahfidz-junior",
    name: "Tahfidzul Qur'an & Juz Amma",
    description: "Program khusus bimbingan menghafal Al-Qur'an yang diintegrasikan dengan kurikulum diniyah. Dirancang dengan metode setoran (ziyadah) dan pengulangan (muraja'ah) yang ramah anak.",
    duration: "Berkelanjutan",
    targetAge: "7 - 15 Tahun",
    schedule: "Setiap Hari (05.00 - 06.00 WIB & 18.00 - 19.30 WIB / Ba'da Shubuh & Ba'da Maghrib dan Senin Sore 16.00 - 17.00)",
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
    id: "takhossus-nahwu",
    name: "Takhossus Nahwiyyah wa Shorrfiyyah",
    description: "Program intensif pendalaman ilmu alat (Shorof dan Nahwu) untuk membekali santri agar mampu membaca, memahami, dan meng-i'rab kitab-kitab kuning secara mandiri dan presisi.",
    duration: "2 Tahun",
    targetAge: "Remaja / Lanjutan",
    schedule: "Setiap Rabu & Jumat (16.00 - 17.00 WIB)",
    icon: "BookOpen",
    subjects: [
      "Nahwu (Kitab Al-Jurumiyyah & Imrithi)",
      "Sharaf (Kitab Al-Amsilah At-Tasrifiyyah)",
      "I'rabul Qur'an",
      "Qawaidul Fiqhiyyah Dasar",
      "Praktek Membaca Kitab Gundul"
    ]
  },
  {
    id: "bahtsul-masail",
    name: "Bathul Masa'il Usbu'iyah",
    description: "Forum diskusi ilmiah mingguan santri tingkat lanjutan untuk membahas dan memecahkan berbagai persoalan keagamaan (Fikih kontemporer) berdasarkan literatur kitab muktabarah.",
    duration: "Rutin Mingguan",
    targetAge: "Lanjutan / Umum",
    schedule: "Setiap Selasa (16.00 - 17.00 WIB)",
    icon: "Users",
    subjects: [
      "Kajian Fikih Kontemporer",
      "Metodologi Pengambilan Hukum (Istinbath)",
      "Perbandingan Madzhab Dasar",
      "Telaah Kitab Fathul Qorib / Fathul Mu'in",
      "Teknik Diskusi & Presentasi Ilmiah"
    ]
  }
];

export const TEACHERS: Teacher[] = [
  {
    id: "u-iin-sholihin",
    name: "Ust. Iin Sholihin",
    role: "",
    avatar: asatidzPhoto
  },
  {
    id: "u-m-nurul-alim",
    name: "Ust. M. Nurul Alim",
    role: "",
    avatar: asatidzPhoto
  },
  {
    id: "u-mahrus-ali",
    name: "Ust. Mahrus 'Ali",
    role: "",
    avatar: asatidzPhoto
  },
  {
    id: "u-misbahul-fatih",
    name: "Ust. Misbahul Fatih",
    role: "",
    avatar: asatidzPhoto
  },
  {
    id: "u-m-anas-abdul-muhith",
    name: "Ust. M. Anas Abdul Muhith",
    role: "",
    avatar: asatidzPhoto
  },
  {
    id: "u-ihya-ulumuddin",
    name: "Ust. Ihya 'Ulumuddin",
    role: "",
    avatar: asatidzPhoto
  },
  {
    id: "u-agus-maulana",
    name: "Ust. Agus Maulana",
    role: "",
    avatar: asatidzPhoto
  },
  {
    id: "u-sofyan",
    name: "Ust. Sofyan",
    role: "",
    avatar: asatidzPhoto
  },
  {
    id: "u-imam-syafii",
    name: "Ust. Imam Syafi'i",
    role: "",
    avatar: asatidzPhoto
  },
  {
    id: "u-afifuddin",
    name: "Ust. Afifuddin",
    role: "",
    avatar: asatidzPhoto
  },
  {
    id: "u-ahmad-syarif",
    name: "Ust. Ahmad Syarif",
    role: "",
    avatar: asatidzPhoto
  }
];

export const LBM_PROFILE = {
  name: "Lajnah Bahtsul Masail (LBM)",
  fullName: "Lajnah Bahtsul Masail MDT Riyadlul Jannah",
  arabicName: "لَجْنَةُ بَحْثِ الْمَسَائِلِ - رِيَاضُ الْجَنَّةِ",
  tagline: "Forum Musyawarah Ilmiah Fiqhiyyah & Pengkajian Kitab Turats Salafiyyah Mazhab Syafi'i",
  description: "Lajnah Bahtsul Masail (LBM) MDT Riyadlul Jannah adalah wahana intelektual dan wadah bahtsul masail bagi para santri dan asatidz untuk menelaah, mengkaji, serta merumuskan kepastian hukum Islam terhadap berbagai persoalan ibadah, muamalah, maupun problematika kontemporer berlandaskan maraji' kutubut turats (kitab kuning mu'tabarah).",
  vision: "Menjadi pusat kajian fiqih salaf yang melahirkan kader mutafaqqih fiddin, tangguh dalam literasi kitab kuning, dan bijak dalam merespon dinamika hukum Islam di masyarakat.",
  mission: [
    "Menumbuhkan tradisi kajian ilmiah dan budaya musyawarah kutubus salaf di kalangan santri dan asatidz.",
    "Melatih santri dalam ketajaman membaca, membedah, dan mengontekstualisasikan ibarat kitab kuning (tahqiqul kutub).",
    "Memberikan bimbingan dan jawaban hukum fiqih yang akurat, berlandaskan dalil yang kokoh dan sanad keilmuan yang bersambung.",
    "Membudayakan adab ikhtilaf (toleransi perbedaan pendapat) di kalangan ulama fiqih Ahlussunnah wal Jama'ah an-Nahdliyyah."
  ],
  schedule: {
    routine: "Setiap Selasa Sore (Musyawarah Usbu'iyah)",
    time: "Pukul 16:00 - 17:30 WIB",
    location: "Musholla Putra MDT Riyadlul Jannah Pasir Gombong"
  },
  structure: {
    advisor: "Kiai Haji Abdul Hakam Makky",
    supervisor: "Ust. Mahrus Ali (Kepala MDT)",
    chairman: "Ust. Ihya 'Ulumuddin",
    moderator: "Ust. Ihya 'Ulumuddin",
    mushohhih: ["Ust. Agus Maulana", "Ust. Mahrus Ali"],
    muhararrir: ["Ust. Anas", "Ust. Fatih", "Ust. Sofyan"],
    qoriMaqro: ["M. Rafif Chandra", "Try Anggita Dewi", "Santri Kelas Wustho & Awaliyah"]
  },
  referenceBooks: [
    { title: "Matan Al-Ghayah wat Taqrib", author: "Al-Qadhi Abu Syuja' Al-Ashfahani", category: "Matan Dasar Fiqih" },
    { title: "Fathul Qorib Al-Mujib", author: "Al-Allamah Ibnu Qasim Al-Ghazzi", category: "Syarah Dasar Fiqih" },
    { title: "Hasyiyah Al-Bajuri 'ala Ibni Qasim", author: "Syaikh Ibrahim Al-Bajuri", category: "Hasyiyah Analitis Fiqih" },
    { title: "Mughni Al-Muhtaj ila Ma'rifati Ma'ani Alfadzil Minhaj", author: "Al-Khathib Asy-Syirbini", category: "Syarah Mu'tamad" },
    { title: "Fathul Mu'in bi Syarhi Qurratil 'Ain", author: "Syaikh Zainuddin Al-Malibari", category: "Fiqih Madzhab Syafi'i" },
    { title: "I'anatuth Thalibin", author: "Sayyid Abu Bakar Syatha Ad-Dimyathi", category: "Hasyiyah Fathul Mu'in" },
    { title: "Kifayatul Akhyar fi Halli Ghayatil Ikhtishar", author: "Imam Taqiyuddin Abu Bakar Al-Hishni", category: "Fiqih & Dalil Hadits" }
  ]
};

export const BAHTSUL_MASAIL_SESSION_AUGUST_2026: BahtsulMasailSession = {
  id: "bm-2026-08-04",
  institution: "Lajnah Bahtsul Masail MDT Riyadlul Jannah",
  forum: "Musyawarah Usbu'iyah [ Mingguan ]",
  dateMasehi: "Selasa, 4 Agustus 2026 M",
  dateHijriah: "20 Safar 1448 H",
  time: "16:00 WIB (Selasa Sore)",
  location: "Musholla Putra MDT Riyadlul Jannah",
  moderator: "Ust. Ihya 'Ulumuddin",
  mushohhih: ["Ust. Agus Maulana", "Ust. Mahrus Ali"],
  muhararrir: ["Ust. Anas", "Ust. Fatih"],
  qori: ["M. Rafif Chandra", "Try Anggita Dewi"],
  maqro: "Kitab Thaharoh Awal Kitab Taqrib & Fathul Qorib",
  description: "Sekilas pembahasan air di dalam kitab Taqrib terlihat sederhana namun kalau dicermati lebih lanjut sepertinya perlu kajian yang lebih mendalam untuk mengetahui esensi pembagian air itu sendiri baik dari segi pengertian, contohnya, dan hal apa saja yang tidak masuk pada pembahasan tersebut. Di dalam kitab Taqrib air dibagi menjadi empat bagian salah satunya air suci, menyucikan serta tidak makruh dalam penggunaannya, yakni air mutlak (الماء المطلق). Di dalam kitab Taqrib, pengertian dan contoh-contohnya tidak disebutkan, bahkan Fathul Qorib pun tidak menyebutkan, justru di sana hanya menyebutkan contoh qayyid munfak (القيد المنفك) yang sejatinya secara hukum masuk kategori hukum air mutlak. Demikian ini memberikan ruang bagi kita para Santri untuk menelaah lebih dalam hakikat air mutlak itu sendiri.",
  questions: [
    {
      number: 1,
      question: "Sebenarnya apa hakikat air mutlak ?",
      answer: "Air mutlak adalah Air yang terbebas dari qayid (batasan) yang mengikat menurut orang yang memiliki kapasitas untuk mengetahui kondisi air tersebut.",
      reference: {
        book: "حاشية الباجوري على ابن قاسم الغزي ۲۸/۱",
        arabicText: "(قَوْلُهُ الْمَاءُ الْمُطْلَقِ ) هُوَ مَا يُسَمَّى مَاءً بِلَا قَيْدٍ لازِم عِنْدَ الْعَالِمِ بِحَالِهِ مِنْ أَهْلِ الْعُرْفِ وَاللِّسَانِ"
      }
    },
    {
      number: 2,
      question: "Kenapa air sumur secara hukum masuk kategori air mutlak?",
      answer: "Hukum air sumur berdasarkan beberapa definisi bahwa air mutlak memiliki beberapa kriteria; Pertama, suci dan menyucikan; kedua, sebutan namanya tidak perlu dikaitkan dengan nama lain; ketiga, sebutan kata air secara mutlak tanpa perlu dikaitkan hanya pada tujuh macam air, yaitu: air hujan, air laut, air sungai, air sumur, air mata air, air salju, air beku (hujan es) dan air yang keluar dari celah-celah jemari Rasulullah Saw. Penyandaran kata-kata hujan, laut, sungai, sumur, mata air, salju, dan beku (al-bard), tidak berarti menafikan ke-mutlak-an air tersebut, karena penyandaran kata-kata ini sesuai dengan sumbernya masing-masing. Ketujuh macam air ini dapat difahami bahwa benda itu air tanpa harus dikaitkan dengan nama-nama sumbernya.\n\nArtinya, penyandaran seperti ini disebut dengan qayd al-munfak. Berbeda dengan kata-kata, misalnya; air bunga, air kelapa, air kopi, air gula, dan lain-lain, karena keempat jenis air ini tidak akan difahami tanpa dikaitkan dengan bunga, kelapa, kopi, dan gula. Penyandaran kata pada contoh-contoh ini disebut dengan qayd al-lazim.",
      reference: {
        book: "مغني المحتاج إلى معرفة معاني ألفاظ المنهاج ٤٦/١ دار الكتب العلمية ۲۰۰۹",
        arabicText: "(وَهُوَ مَا يَقَعُ عَلَيْهِ اسْمُ مَاءٍ بِلَا قَيْدٍ بِإِضَافَةٍ كَمَاءِ وَرْدِ أَوْ بِصِفَةٍ كَمَاءٍ دَافِقٍ أَوْ فَاللَّامُ عَهْدٍ كَقَوْلِهِ : نَعَمْ إِذَا رَأَتْ الْمَاءَ} يَعْنِي الْمَنِي. قَالَ الْوَلِيُّ الْعِرَاقِيُّ: وَلَا يُحْتَاجُ لِتَقْبِيدِ الْقَيْدِ بِكَوْنِهِ لَا زِمًا لِأَنَّ الْقَيْدَ الَّذِي لَيْسَ بِلَازِمٍ كَمَاءِ الْبِثْرِ مَثَلًا يُطْلَقُ اسْمُ الْمَاءِ عَلَيْهِ بِدُونِهِ فَلَا حَاجَةَ لِلِاحْتِرَازِ عَنْهُ."
      }
    },
    {
      number: 3,
      question: "Apakah air Aqua & air AC masuk hukum air mutlak sehingga bisa dibuat berwudu’?",
      answer: "Hukum air mineral (Aqua) & air AC: Termasuk air mutlak.\nSebab Jika bahan campurannya tidak menghalangi kemutlakan nama air, seperti sedikit terjadi perubahan air karena bercampur dengan benda suci lain atau suatu zat yang sifatnya menyerupai air dan antara zat ataupun air bisa dibedakan namun tidak merubah sifat air, maka bahan campuran tersebut tidak merusak kesucian air, air tersebut tetap bisa mensucikan lainnya.",
      reference: {
        book: "kitab Fathul Qorib Al-Mujib juz 1",
        arabicText: "فَإِنْ لَمْ يَمْنَعْ اِطْلاَقَ اسْمِ الْمَاءِ عَلَيْهِ بِأَنْ كَانَ تَغَيُّرُهُ بِالطَّاهِرِ يَسِيْرًا أَوْ بِمَا يُوَافِق الْمَاءَ فِيْ صِفَاتِهِ وَقُدِّرَ مُخَالِفًا وَلَمْ يُغَيِّرْهُ فَلاَ يَسْلُبُ طُهُوْرِيَّتُهُ فَهُوَ مُطَهِّرٌ لِغَيْرِهِ."
      }
    }
  ]
};

export const ANNOUNCEMENTS: Announcement[] = [
  {
    id: "bahtsul-masail-usbuyah-4-agustus-2026",
    title: "Hasil Musyawarah Usbu'iyah Lajnah Bahtsul Masail MDT Riyadlul Jannah: Hakikat Air Mutlak, Hukum Air Sumur, Air Mineral & Air AC",
    content: `LAJNAH BAHTSUL MASAIL
MADRASAH DINIYAH TAKLIMIYAH RIYADLUL JANNAH
 
✦ MUSYAWARAH USBU'IYAH [ MINGGUAN ] ✦
Tanggal : 4 Agustus 2026 M / 20 Safar 1448 H
Jam : 16:00 Selasa Sore
Tempat : Musholla Putra
MODERATOR : Ust. Ihya Ulumuddin
MUSHOHHIH I : Ust. Agus Maulana
MUSHOHHIH II : Ust. Mahrus Ali
MUHARARRIR : Ust. Anas & Ust. Fatih
QORI’ : M. Rafif Chandra & Try Anggita Dewi
MAQRO’ : Kitab Thaharoh Awal Kitab Taqrib & Fathul Qorib

A. DESKRIPSI MASALAH
Sekilas pembahasan air di dalam kitab Taqrib terlihat sederhana namun kalau dicermati lebih lanjut sepertinya perlu kajian yang lebih mendalam untuk mengetahui esensi pembagian air itu sendiri baik dari segi pengertian, contohnya, dan hal apa saja yang tidak masuk pada pembahasan tersebut. Di dalam kitab Taqrib air dibagi menjadi empat bagian salah satunya air suci, menyucikan serta tidak makruh dalam penggunaannya, yakni air mutlak (الماء المطلق). Di dalam kitab Taqrib, pengertian dan contoh-contohnya tidak disebutkan, bahkan Fathul Qorib pun tidak menyebutkan, justru di sana hanya menyebutkan contoh qayyid munfak (القيد المنفك) yang sejatinya secara hukum masuk kategori hukum air mutlak. Demikian ini memberikan ruang bagi kita para Santri untuk menelaah lebih dalam hakikat air mutlak itu sendiri.

B. PERTANYAAN
1. Sebenarnya apa hakikat air mutlak ?
2. Kenapa air sumur secara hukum masuk kategori air mutlak?
3. Apakah air Aqua & air AC masuk hukum air mutlak sehingga bisa dibuat berwudu’?

C. JAWABAN & REFERENSI IBARAT
1. Air mutlak adalah Air yang terbebas dari qayid (batasan) yang mengikat menurut orang yang memiliki kapasitas untuk mengetahui kondisi air tersebut.
Referensi: Hasyiyah Al-Bajuri 'ala Ibni Qosim Al-Ghozzi 1/28:
(قَوْلُهُ الْمَاءُ الْمُطْلَقِ ) هُوَ مَا يُسَمَّى مَاءً بِلَا قَيْدٍ لازِم عِنْدَ الْعَالِمِ بِحَالِهِ مِنْ أَهْلِ الْعُرْفِ وَاللِّسَانِ

2. Hukum air sumur berdasarkan kriteria air mutlak (Qayyid Munfak): Air sumur tetap berstatus air mutlak karena penyandaran kata sumur adalah qayd al-munfak yang tidak menafikan kemutlakan air.
Referensi: Mughni Al-Muhtaj 1/46:
(وَهُوَ مَا يَقَعُ عَلَيْهِ اسْمُ مَاءٍ بِلَا قَيْدٍ بِإِضَافَةٍ كَمَاءِ وَرْدِ أَوْ بِصِفَةٍ كَمَاءٍ دَافِقٍ أَوْ فَاللَّامُ عَهْدٍ...)

3. Hukum air mineral (Aqua) & air AC: Termasuk air mutlak dan sah digunakan untuk berwudhu'.
Referensi: Fathul Qorib Al-Mujib Juz 1:
فَإِنْ لَمْ يَمْنَعْ اِطْلاَقَ اسْمِ الْمَاءِ عَلَيْهِ بِأَنْ كَانَ تَغَيُّرُهُ بِالطَّاهِرِ يَسِيْرًا... فَلاَ يَسْلُبُ طُهُوْرِيَّتُهُ فَهُوَ مُطَهِّرٌ لِغَيْرِهِ.`,
    date: "2026-08-04",
    category: "kegiatan",
    important: true
  },
  {
    id: "rapat-internal-dewan-asatidz-18-agustus-2026",
    title: "Rapat Internal Staff Pengajar MDT & Dewan Asatidz: Penataan Kelembagaan, Visi Misi, Kurikulum & Evaluasi KBM",
    content: `BEKASI, MDT RIYADLUL JANNAH — MDT (Madrasah Diniyah Takmiliyah) Riyadlul Jannah menyelenggarakan rapat internal Staff Pengajar MDT dan Dewan Asatidz pada Selasa, 18 Agustus 2026 (bertepatan dengan 6 Rabiul Awwal 1448 H).

Rapat yang berlangsung mulai pukul 20.20 hingga 22.20 WIB di Tennis Madin ini membahas agenda strategis terkait penataan kelembagaan, Visi, Misi dan Tujuan, kurikulum, serta evaluasi Kegiatan Belajar Mengajar (KBM).

Poin-poin pembahasan utama dalam rapat musyawarah meliputi:
• Penataan Struktur Kelembagaan & Manajemen Madrasah.
• Pemantapan dan Sosialisasi Rumusan Visi, Misi, serta Tujuan Pendidikan Santri.
• Penyelarasan Kurikulum Pengajaran Kitab Salaf (Kitab Kuning) & Tajwid Al-Qur'an.
• Evaluasi Berkala Pelaksanaan Kegiatan Belajar Mengajar (KBM) MDT Pagi dan Sore.
• Penguatan Kedisiplinan, Adab, dan Pembiasaan Ubudiyah Harian Santri.

Semoga terselenggaranya rapat internal ini semakin memperkokoh soliditas dewan asatidz dan membawa keberkahan bagi kemajuan pendidikan santri MDT Riyadlul Jannah.`,
    date: "2026-08-18",
    category: "kegiatan",
    important: true,
    image: musyawarahMalam
  },
  {
    id: "sesi-foto-bersama-murid-mdt-2026",
    title: "Kegiatan Sesi Foto Bersama Murid MDT Riyadlul Jannah Untuk Kelengkapan Administrasi (Raport, KTM, & Ijazah)",
    content: "Para Murid Madrasah Diniyah Takmiliyah (MDT) antusias mengikuti kegiatan sesi foto bersama yang diselenggarakan oleh pihak pengelola madrasah pada hari ini, Jum'at 7 Agustus 2026 M/ 23 Shofar 1448. Kegiatan ini bertujuan untuk melengkapi kelengkapan administrasi para murid, mulai dari kebutuhan foto untuk Raport, Kartu Tanda Murid (KTM), hingga pengurusan Ijazah mendatang.",
    date: "2026-08-07",
    category: "kegiatan",
    important: true
  },
  {
    id: "rapat-tahun-ajaran-baru-2026-2027",
    title: "Berita Acara Rapat Tahun Ajaran Baru 2026-2027 M / 1448 H MDT Riyadlul Jannah",
    content: `Assalamu'alaikum Wr. Wb.

Telah terlaksana Rapat Tahun Ajaran Baru 2026-2027 M / 1448 H pada Hari Rabu, 8 Juli 2026 M / 23 Muharrom 1448 H bertempat di MDT Riyadlul Jannah Pasir Gombong.

Agenda rapat musyawarah tersebut membahas beberapa poin keputusan penting:
• Penentuan Wali Kelas yang baru untuk jenjang MDT Awaliyah dan Wustha.
• Penentuan Kitab-kitab Kajian & Guru / Ustadz Pengampu untuk setiap mata pelajaran.
• Penetapan Program Pelaksanaan Kegiatan Belajar Mengajar (KBM) MDT Riyadlul Jannah.

Semoga hasil keputusan rapat ini membawa keberkahan, kelancaran, serta keistiqomahan dalam proses pendidikan dan pembinaan akhlak santri MDT Riyadlul Jannah di Tahun Ajaran Baru ini.`,
    date: "2026-07-08",
    category: "kegiatan",
    important: true
  },
  {
    id: "kalender-akademik-mdt-2025-2026",
    title: "Rilis Resmi Kalender Akademik MDT Riyadlul Jannah TA 2025/2026 & 2026/2027",
    content: "Assalamu'alaikum Wr. Wb. Diumumkan kepada seluruh orang tua / wali santri dan para santri MDT Riyadlul Jannah bahwa Jadwal Kalender Akademik Resmi Madrasah Diniyah Taklimiyah (MDT) Riyadlul Jannah untuk Daur I (Semester Ganjil) & Daur II (Semester Genap) telah diterbitkan. Kalender ini memuat seluruh tanggal penting pelaksanaan Kegiatan Belajar Mengajar (KBM), Imtihan Nisfu Daur, Imtihan Akhir Daur, Pengajian Pasaran Ramadhan, Peringatan Hari Besar Islam (PHBI), Pendaftaran Santri Baru (PSB), dan Haflatul Imtihan Wisuda Akhirussanah. Bapak/Ibu wali santri dapat mengakses menu 'Kalender Akademik' di portal website ini untuk melihat rincian tanggal secara lengkap.",
    date: "2026-07-15",
    category: "akademik",
    important: true
  },
  {
    id: "pengumuman-ranking-daur-2-2026",
    title: "Pengumuman Nama-Nama Juarawan & Juarawati Ranking MDT Riyadlul Jannah Daur II / Semester II (TA 2025-2026)",
    content: `Segala puji bagi Allah SWT. Berikut adalah Daftar Nama Juarawan & Juarawati Ranking Madrasah Diniyah Taklimiyah (MDT) Riyadlul Jannah Daur II / Semester II Tahun Ajaran 2025-2026 M (1447 H):

1 AWALIYAH:
• Ranking 1 : Layla Maulida (Nilai Rata-Rata: 89)
• Ranking 2 : Nur Hasanah (Nilai Rata-Rata: 83)
• Ranking 3 : Zahra Tazkiya Nafisah (Nilai Rata-Rata: 82)
• Muhafazhoh Terbanyak : Musfiyah Zasty Maulida

2 AWALIYAH:
• Ranking 1 : Try Anggita Dewi (Nilai Rata-Rata: 82)
• Ranking 2 : Siti Lutfiah (Nilai Rata-Rata: 76)
• Ranking 3 : Zidanir Rizqi (Nilai Rata-Rata: 72)
• Muhafazhoh Terbanyak : Nur Hasanah

3 AWALIYAH:
• Ranking 1 : Nurul Aulia (Nilai Rata-Rata: 87)
• Ranking 2 : Shakiya Khoirul Bariya (Nilai Rata-Rata: 78)
• Ranking 3 : Muhammad Rafif Chandra (Nilai Rata-Rata: 77)
• Muhafazhoh Terbanyak : Sabastian Abdillah

1 WUSTHO:
• Ranking 1 : Arfi Hamada (Nilai Rata-Rata: 82)
• Ranking 2 : Lailatus Sakiah (Nilai Rata-Rata: 77)
• Ranking 3 : Dhita Khoirunnisa (Nilai Rata-Rata: 76)

Ditetapkan pada: Ahad, 28 Juni 2026 M / 12 Muharram 1448 H.
Selamat kepada seluruh juarawan dan juarawati atas prestasi gemilang yang diraih!`,
    date: "2026-06-28",
    category: "akademik",
    important: true
  },
  {
    id: "penerimaan-santri-baru-2026",
    title: "Informasi Pendaftaran Santri Baru Tahun Ajaran 2026/2027",
    content: "MDT Riyadlul Jannah menginformasikan pendaftaran santri baru untuk jenjang Awaliyah (Ula) dan program Tahfidz Junior. Calon orang tua wali dapat langsung mengunjungi sekretariat madrasah setiap hari kerja ba'da Ashar untuk berkonsultasi, melihat fasilitas kelas, serta mendaftarkan putra-putrinya secara langsung. Persyaratan administrasi meliputi fotokopi Akta Kelahiran, fotokopi Kartu Keluarga, dan pasfoto ukuran 3x4 sebanyak 2 lembar.",
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

export const RANKING_DATA_DAUR_2 = {
  title: "NAMA-NAMA JUARAWAN/JUARAWATI RANKING",
  institution: "MADRASAH DINIYAH TAKLIMIYAH RIYADLUL JANNAH",
  term: "DAUR II / SEMESTER II",
  academicYear: "TAHUN AJARAN : 2025-2026 M (1447 H)",
  date: "Ahad, 28 Juni 2026 M / 12 Muharram 1448 H",
  classes: [
    {
      className: "1 AWALIYAH",
      rankings: [
        { rank: 1, name: "Layla Maulida", score: 89 },
        { rank: 2, name: "Nur Hasanah", score: 83 },
        { rank: 3, name: "Zahra Tazkiya Nafisah", score: 82 }
      ],
      specialAward: {
        title: "Muhafazhoh Terbanyak",
        recipient: "Musfiyah Zasty Maulida"
      }
    },
    {
      className: "2 AWALIYAH",
      rankings: [
        { rank: 1, name: "Try Anggita Dewi", score: 82 },
        { rank: 2, name: "Siti Lutfiah", score: 76 },
        { rank: 3, name: "Zidanir Rizqi", score: 72 }
      ],
      specialAward: {
        title: "Muhafazhoh Terbanyak",
        recipient: "Nur Hasanah"
      }
    },
    {
      className: "3 AWALIYAH",
      rankings: [
        { rank: 1, name: "Nurul Aulia", score: 87 },
        { rank: 2, name: "Shakiya Khoirul Bariya", score: 78 },
        { rank: 3, name: "Muhammad Rafif Chandra", score: 77 }
      ],
      specialAward: {
        title: "Muhafazhoh Terbanyak",
        recipient: "Sabastian Abdillah"
      }
    },
    {
      className: "1 WUSTHO",
      rankings: [
        { rank: 1, name: "Arfi Hamada", score: 82 },
        { rank: 2, name: "Lailatus Sakiah", score: 77 },
        { rank: 3, name: "Dhita Khoirunnisa", score: 76 }
      ]
    }
  ]
};

// Fee Simulator configuration
export const TUITION_FEES = {
  registration: 150000, // One-time registration fee
  monthly: 75000,       // Monthly SPP
  books: {
    "mdt-ula": 120000,  // Package of books for Awaliyah
    "mdt-wustha": 140000,
    "tahfidz-junior": 60000,
    "takhossus-nahwu": 100000,
    "bahtsul-masail": 0
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

export const ACADEMIC_CALENDAR = {
  academicYear: "2026/2027 (Semester 1 / Daur I Ganjil Juli - Desember 2026)",
  institution: "Madrasah Diniyah Taklimiyah Riyadlul Jannah Pasir Gombong",
  daurList: ["Semua Daur", "Semester 1 (Juli - Des 2026)", "Daur II (Genap 2026)", "Daur I (Ganjil 2025)"],
  events: [
    // --- SEMESTER 1 / DAUR I (GANJIL) TA 2026/2027 (JULI - DESEMBER 2026) ---
    {
      id: "cal-2026-1",
      month: "Juli 2026",
      semester: "Semester 1 (Juli - Des 2026)" as const,
      date: "1 - 12 Juli 2026",
      title: "Pendaftaran & Registrasi Ulang Santri",
      description: "Pendaftaran santri baru jenjang Awaliyah (1-3) & Wustho serta registrasi ulang seluruh santri MDT Riyadlul Jannah TA 2026/2027.",
      category: "pendaftaran" as const,
      important: true
    },
    {
      id: "cal-2026-0",
      month: "Juli 2026",
      semester: "Semester 1 (Juli - Des 2026)" as const,
      date: "8 Juli 2026 (23 Muharrom 1448 H)",
      title: "Rapat Pleno Asatidz: Tahun Ajaran Baru 2026-2027",
      description: "Penentuan Wali Kelas, Penentuan Kitab Kajian Salaf & Guru Pengampu, serta Penetapan Program KBM TA 2026-2027.",
      category: "rapat" as const,
      important: true
    },
    {
      id: "cal-2026-kembali-santri",
      month: "Juli 2026",
      semester: "Semester 1 (Juli - Des 2026)" as const,
      date: "12 Juli 2026",
      title: "Santri Riyadlul Jannah Kembali ke Pondok Pesantren",
      description: "Kepulangan dan kedatangan kembali seluruh santri mukim & santri MDT ke lingkungan Pondok Pesantren Riyadlul Jannah setelah libur ajaran baru.",
      category: "kegiatan" as const,
      important: true
    },
    {
      id: "cal-2026-awal-kbm",
      month: "Juli 2026",
      semester: "Semester 1 (Juli - Des 2026)" as const,
      date: "13 Juli 2026",
      title: "Awal Masuk KBM Daur I",
      description: "Pembukaan dan permulaan resmi Kegiatan Belajar Mengajar (KBM) Daur I (Semester Ganjil) MDT Riyadlul Jannah.",
      category: "kbm" as const,
      important: true
    },
    {
      id: "cal-2026-matamuda",
      month: "Juli 2026",
      semester: "Semester 1 (Juli - Des 2026)" as const,
      date: "13 - 16 Juli 2026",
      title: "Masa Ta'arruf Santri / Matamuda",
      description: "Masa Ta'aruf Murid Diniyah (Matamuda) / Orientasi pengenalan lingkungan madrasah, adab tholabul 'ilmi, dan pembiasaan ubudiyah harian santri.",
      category: "kegiatan" as const,
      important: true
    },
    {
      id: "cal-2026-raker-yayasan",
      month: "Juli 2026",
      semester: "Semester 1 (Juli - Des 2026)" as const,
      date: "27 Juli 2026",
      title: "Rapat Kerja (Raker) Yayasan Pendidikan Islam Riyadlul Jannah : MTs, SMAT & MDT",
      description: "Musyawarah koordinasi dan sinkronisasi program kerja kelembagaan Yayasan Pendidikan Islam Riyadlul Jannah bersama seluruh unit pendidikan: MTs, SMAT, dan MDT.",
      category: "rapat" as const,
      important: true
    },
    {
      id: "cal-2026-bahtsul-masail",
      month: "Agustus 2026",
      semester: "Semester 1 (Juli - Des 2026)" as const,
      date: "4 Agustus 2026 (20 Safar 1448 H)",
      title: "Lajnah Bahtsul Masail: Musyawarah Usbu'iyah (Kajian Hukum Air Mutlak & Fiqih Thoharoh)",
      description: "Musyawarah ilmiah mingguan santri membahas hakikat air mutlak, status hukum air sumur, air mineral Aqua dan air AC bertempat di Musholla Putra MDT.",
      category: "kegiatan" as const,
      important: true
    },
    {
      id: "cal-2026-foto",
      month: "Agustus 2026",
      semester: "Semester 1 (Juli - Des 2026)" as const,
      date: "7 Agustus 2026 (23 Shofar 1448 H)",
      title: "Sesi Foto Bersama Murid MDT Untuk Administrasi (Raport, KTM & Ijazah)",
      description: "Pengambilan foto resmi seluruh santri Awaliyah & Wustha untuk kelengkapan administrasi Raport, Kartu Tanda Murid, dan berkas Ijazah.",
      category: "kegiatan" as const,
      important: true
    },
    {
      id: "cal-2026-hut-lomba",
      month: "Agustus 2026",
      semester: "Semester 1 (Juli - Des 2026)" as const,
      date: "17 - 18 Agustus 2026",
      title: "Peringatan HUT RI ke-81 & Lomba 17 Agustusan",
      description: "Rangkaian semarak peringatan Hari Ulang Tahun Kemerdekaan Republik Indonesia ke-81 serta aneka perlombaan santri MDT Riyadlul Jannah.",
      category: "phbi" as const,
      important: true
    },
    {
      id: "cal-2026-upacara-hut",
      month: "Agustus 2026",
      semester: "Semester 1 (Juli - Des 2026)" as const,
      date: "18 Agustus 2026",
      title: "Upacara Peringatan HUT RI ke-81",
      description: "Pelaksanaan upacara bendera memperingati HUT Kemerdekaan RI ke-81 secara khidmat bersama seluruh santri, dewan asatidz, dan pengurus yayasan.",
      category: "phbi" as const,
      important: true
    },
    {
      id: "cal-2026-rapat-18",
      month: "Agustus 2026",
      semester: "Semester 1 (Juli - Des 2026)" as const,
      date: "18 Agustus 2026 (6 Rabiul Awwal 1448 H)",
      title: "Rapat Internal Staff Pengajar MDT & Dewan Asatidz",
      description: "Musyawarah internal membahas penataan kelembagaan, pemantapan Visi, Misi & Tujuan, kurikulum pengajaran kitab salaf, serta evaluasi berkala KBM.",
      category: "rapat" as const,
      important: true
    },
    {
      id: "cal-2026-manaqib-maulid",
      month: "Agustus 2026",
      semester: "Semester 1 (Juli - Des 2026)" as const,
      date: "23 Agustus 2026",
      title: "Manaqib Syech Abdul Qodir Al-Jaelani Al-Khidmah & Memperingati Maulid Nabi Muhammad SAW",
      description: "Majelis dzikir dan pembacaan Manaqib Syech Abdul Qodir Al-Jaelani bersama Jama'ah Al-Khidmah sekaligus peringatan Maulid Nabi Muhammad SAW.",
      category: "phbi" as const,
      important: true
    },
    {
      id: "cal-2026-maulid-12-robiulawwal",
      month: "Agustus 2026",
      semester: "Semester 1 (Juli - Des 2026)" as const,
      date: "25 Agustus 2026",
      title: "Maulid Nabi Muhammad SAW 12 Robi'ul Awwal 1448 H",
      description: "Peringatan hari kelahiran Baginda Nabi Muhammad SAW 12 Robi'ul Awwal 1448 H, pembacaan Maulid Simthudduror / Diba'iyyah, tausiyah keagamaan, dan penanaman mahabbah Rasulullah SAW.",
      category: "phbi" as const,
      important: true
    },
    {
      id: "cal-2026-5",
      month: "September 2026",
      semester: "Semester 1 (Juli - Des 2026)" as const,
      date: "21 - 26 September 2026",
      title: "Ujian Tengah Semester 1 / Imtihan Nisfu Daur I TA 2026/2027",
      description: "Evaluasi capaian hafalan juz, nadhom kitab kuning, dan pemahaman materi pertengahan Semester 1.",
      category: "ujian" as const,
      important: true
    },
    {
      id: "cal-2026-6",
      month: "Oktober 2026",
      semester: "Semester 1 (Juli - Des 2026)" as const,
      date: "22 Oktober 2026",
      title: "Peringatan Hari Santri Nasional (HSN 2026)",
      description: "Pawai obor santri, istighotsah kubro mendoakan kebaikan bangsa, dan perlombaan lalaran nadhom.",
      category: "acara" as const
    },
    {
      id: "cal-2026-7",
      month: "November 2026",
      semester: "Semester 1 (Juli - Des 2026)" as const,
      date: "23 - 28 November 2026",
      title: "Pelaksanaan Ujian Akhir Semester 1 / Imtihan Daur I TA 2026/2027",
      description: "Ujian tulis dan syafahi (lisan/demonstrasi kitab salaf) seluruh mata pelajaran Semester 1 (Daur I).",
      category: "ujian" as const,
      important: true
    },
    {
      id: "cal-2026-8",
      month: "Desember 2026",
      semester: "Semester 1 (Juli - Des 2026)" as const,
      date: "13 Desember 2026",
      title: "Pembagian Raport Semester 1 / Daur I & Silaturahmi Wali Santri",
      description: "Penyerahan laporan hasil belajar santri Semester 1 (Daur I) serta musyawarah evaluasi bersama orang tua/wali santri.",
      category: "acara" as const,
      important: true
    },
    {
      id: "cal-2026-9",
      month: "Desember 2026",
      semester: "Semester 1 (Juli - Des 2026)" as const,
      date: "14 - 31 Desember 2026",
      title: "Libur Semester 1 / Daur I TA 2026/2027",
      description: "Masa libur kegiatan belajar mengajar madrasah akhir Semester 1 / Daur I.",
      category: "libur" as const
    },

    // --- DAUR II (GENAP 2026) & ARCHIVED HISTORICAL EVENTS ---
    {
      id: "cal-10",
      month: "Januari 2026",
      semester: "Daur II (Genap 2026)" as const,
      date: "5 Januari 2026",
      title: "Awal Masuk KBM Daur II (Semester Genap)",
      description: "Dimulainya kembali kegiatan belajar mengajar semester genap Daur II.",
      category: "kbm" as const
    },
    {
      id: "cal-11",
      month: "Januari 2026",
      semester: "Daur II (Genap 2026)" as const,
      date: "27 Januari 2026 (27 Rajab 1447 H)",
      title: "Peringatan Isra Mi'raj Nabi Muhammad SAW",
      description: "Kajian keagamaan tema ibadah shalat dan pemantapan adab akhlakul karimah.",
      category: "phbi" as const
    },
    {
      id: "cal-12",
      month: "Februari 2026",
      semester: "Daur II (Genap 2026)" as const,
      date: "16 - 21 Februari 2026",
      title: "Imtihan Nisfu Daur II (UTS Semester Genap)",
      description: "Ujian tengah semester genap dan evaluasi hafalan juz & nadhom.",
      category: "ujian" as const
    },
    {
      id: "cal-13",
      month: "Maret - April 2026",
      semester: "Daur II (Genap 2026)" as const,
      date: "2 - 22 Maret 2026",
      title: "Pengajian Pasaran Ramadhan Kitab Kuning",
      description: "Program intensif khataman kitab-kitab salafiyah selama bulan suci Ramadhan.",
      category: "kbm" as const
    },
    {
      id: "cal-14",
      month: "Maret - April 2026",
      semester: "Daur II (Genap 2026)" as const,
      date: "23 Maret - 12 April 2026",
      title: "Libur Idul Fitri 1447 H",
      description: "Libur merayakan Hari Raya Idul Fitri 1447 H bersama keluarga.",
      category: "libur" as const
    },
    {
      id: "cal-15",
      month: "Juni 2026",
      semester: "Daur II (Genap 2026)" as const,
      date: "2 - 5 Juni 2026",
      title: "Pelaksanaan Ujian Imtihan MDT Daur II / Semester 2",
      description: "Pelaksanaan Ujian Imtihan MDT Daur II / Semester 2 sebagai bagian dari evaluasi kompetensi keilmuan santri.",
      category: "ujian" as const,
      important: true
    },
    {
      id: "cal-16",
      month: "Juni 2026",
      semester: "Daur II (Genap 2026)" as const,
      date: "28 Juni 2026 (13 Muharram 1448 H)",
      title: "HAFLATUL IMTIHAN WISUDA AKHIRUSSANAH - PURNASISWA",
      description: "Acara Wisuda MDT & Formal, Lalaran Hidayatus Shibyan (Kelas 1 Awaliyah), Lalaran Amtsilatut Tasrif (Kelas 2 Awaliyah), Demonstrasi Kitab Kuning Wisudawan (Kelas 3 Awaliyah & Takhossus), dan Pembagian Hadiah Ranking MDT.",
      category: "acara" as const,
      important: true
    },

    // --- DAUR I (GANJIL 2025) ARCHIVED ---
    {
      id: "cal-1",
      month: "Juli 2025",
      semester: "Daur I (Ganjil 2025)" as const,
      date: "14 - 20 Juli 2025",
      title: "Pendaftaran & Registrasi Ulang Santri 2025",
      description: "Pendaftaran santri baru jenjang Awaliyah & Wustho serta pendaftaran ulang santri tingkat lanjut.",
      category: "pendaftaran" as const
    },
    {
      id: "cal-2",
      month: "Juli 2025",
      semester: "Daur I (Ganjil 2025)" as const,
      date: "21 Juli 2025",
      title: "Awal Masuk KBM Daur I (Semester Ganjil 2025)",
      description: "Halaqah pengajian perdana dan dimulainya Kegiatan Belajar Mengajar (KBM) MDT Pagi & Sore.",
      category: "kbm" as const
    },
    {
      id: "cal-5",
      month: "September 2025",
      semester: "Daur I (Ganjil 2025)" as const,
      date: "22 - 27 September 2025",
      title: "Ujian Tengah Semester (UTS) / Imtihan Nisfu Daur I 2025",
      description: "Evaluasi capaian hafalan dan pemahaman materi kitab salaf pertengahan Daur I.",
      category: "ujian" as const
    },
    {
      id: "cal-7",
      month: "November 2025",
      semester: "Daur I (Ganjil 2025)" as const,
      date: "24 - 29 November 2025",
      title: "Pelaksanaan Ujian Akhir Daur I (Imtihan Daur I 2025)",
      description: "Ujian tulis dan syafahi (lisan/demonstrasi kitab) seluruh mata pelajaran Daur I.",
      category: "ujian" as const
    },
    {
      id: "cal-8",
      month: "Desember 2025",
      semester: "Daur I (Ganjil 2025)" as const,
      date: "14 Desember 2025",
      title: "Pembagian Raport Daur I 2025",
      description: "Penyerahan laporan hasil belajar santri Daur I serta musyawarah bersama orang tua wali.",
      category: "acara" as const
    }
  ]
};

export const STUDENT_STATS: ClassStudentCount[] = [
  {
    level: "1 Awaliyah",
    total: 33,
    putra: 18,
    putri: 15,
    category: "Awaliyah"
  },
  {
    level: "2 Awaliyah",
    total: 19,
    putra: 3,
    putri: 16,
    category: "Awaliyah"
  },
  {
    level: "3 Awaliyah",
    total: 20,
    putra: 9,
    putri: 11,
    category: "Awaliyah"
  },
  {
    level: "1 Wustho",
    total: 11,
    putra: 9,
    putri: 3,
    category: "Wustho"
  },
  {
    level: "2 Wustho",
    total: 7,
    putra: 3,
    putri: 4,
    category: "Wustho"
  }
];
