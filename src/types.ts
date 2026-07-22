/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Announcement {
  id: string;
  title: string;
  content: string;
  date: string;
  category: 'informasi' | 'pengumuman' | 'kegiatan' | 'akademik';
  image?: string;
  important?: boolean;
}

export interface Teacher {
  id: string;
  name: string;
  role: string;
  avatar: string;
  education?: string;
  subject?: string;
}

export interface Program {
  id: string;
  name: string;
  description: string;
  duration: string;
  targetAge: string;
  schedule: string;
  subjects: string[];
  icon: string;
}

export interface Registration {
  id: string; // Registration ID like PPDB-2026-XXXX
  fullName: string;
  birthDate: string;
  birthPlace: string;
  gender: 'Laki-laki' | 'Perempuan';
  parentName: string;
  parentPhone: string;
  address: string;
  programId: string;
  programName: string;
  status: 'Menunggu Verifikasi' | 'Diterima' | 'Cadangan' | 'Ditolak';
  registeredAt: string;
  notes?: string;
}

export interface SubjectGrade {
  subjectName: string;
  score: number;
  grade: 'A' | 'B' | 'C' | 'D' | 'E';
  notes?: string;
}

export interface AttendanceRecord {
  month: string;
  present: number;
  absent: number;
  sick: number;
  permission: number;
}

export interface AcademicCalendarEvent {
  id: string;
  month: string;
  semester: 'Daur I (Ganjil)' | 'Daur II (Genap)' | 'Tahun Ajaran Baru';
  date: string;
  title: string;
  description: string;
  category: 'kbm' | 'ujian' | 'libur' | 'pendaftaran' | 'acara' | 'phbi';
  important?: boolean;
}

export interface StudentProfile {
  nis: string;
  fullName: string;
  gender: 'Laki-laki' | 'Perempuan';
  className: string;
  academicYear: string;
  parentName: string;
  address: string;
  grades: SubjectGrade[];
  attendanceSummary: {
    totalSessions: number;
    attended: number;
    attendanceRate: number; // e.g. 96 (%)
  };
  attendanceDetails: AttendanceRecord[];
  teacherNote: string;
  behaviorScore: 'Sangat Baik' | 'Baik' | 'Cukup' | 'Kurang';
  hafalanStatus: string[]; // List of surahs memorized recently
}
