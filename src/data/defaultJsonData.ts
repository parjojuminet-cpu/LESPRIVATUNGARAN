import {
  User, Student, Tutor, Parent, Subject, WorkingArea, Schedule,
  Attendance, Invoice, Finance, TutorSalary, Module, Approval,
  Setting, AuditLog
} from '../types';

export const DEFAULT_JSON_USERS: User[] = [
  {
    id: 'usr-admin',
    username: 'admin',
    passwordHash: 'admin123',
    name: 'Administrator',
    role: 'SUPER_ADMIN',
    status: 'Aktif',
    createdAt: new Date().toISOString().substring(0, 10)
  }
];

export const DEFAULT_JSON_STUDENTS: Student[] = [];
export const DEFAULT_JSON_TUTORS: Tutor[] = [];
export const DEFAULT_JSON_PARENTS: Parent[] = [];
export const DEFAULT_JSON_SUBJECTS: Subject[] = [];
export const DEFAULT_JSON_WORKING_AREAS: WorkingArea[] = [];
export const DEFAULT_JSON_SCHEDULES: Schedule[] = [];
export const DEFAULT_JSON_ATTENDANCES: Attendance[] = [];
export const DEFAULT_JSON_INVOICES: Invoice[] = [];
export const DEFAULT_JSON_FINANCE: Finance[] = [];
export const DEFAULT_JSON_SALARIES: TutorSalary[] = [];
export const DEFAULT_JSON_APPROVALS: Approval[] = [];
export const DEFAULT_JSON_MODULES: Module[] = [
  {
    id: 'mod-1',
    title: 'Modul Ringkasan Rumus Matematika SD',
    subject: 'Matematika',
    grade: 'SD',
    driveFileUrl: 'https://drive.google.com/file/d/sample-matematika-sd',
    uploadedBy: 'Management',
    uploadedAt: new Date().toISOString().substring(0, 10),
    description: 'Panduan dan kumpulan rumus praktis matematika SD untuk latihan mandiri.',
    fileType: 'PDF Document'
  },
  {
    id: 'mod-2',
    title: 'Bank Soal Bahasa Inggris SMP Kurikulum Merdeka',
    subject: 'Bahasa Inggris',
    grade: 'SMP',
    driveFileUrl: 'https://drive.google.com/file/d/sample-binggris-smp',
    uploadedBy: 'Management',
    uploadedAt: new Date().toISOString().substring(0, 10),
    description: 'Kumpulan soal reading, grammar, & vocabulary beserta pembahasan singkat.',
    fileType: 'PDF Document'
  },
  {
    id: 'mod-3',
    title: 'Panduan Silabus & Latihan Fisika SMA Class XI',
    subject: 'Fisika',
    grade: 'SMA',
    driveFileUrl: 'https://drive.google.com/file/d/sample-fisika-sma',
    uploadedBy: 'Management',
    uploadedAt: new Date().toISOString().substring(0, 10),
    description: 'Materi Kinematika & Dinamika Gerak Lurus beserta latihan soal latihan tentor.',
    fileType: 'PDF Document'
  }
];
export const DEFAULT_JSON_SETTINGS: Setting[] = [
  { key: 'MARGIN_MANAGEMENT_NOMINAL', value: 10000, description: 'Nominal Standar Fee/Potongan Manajemen (Rp per Sesi Pertemuan)', category: 'Keuangan' },
  { key: 'MAX_RESCHEDULE_PER_MONTH', value: 2, description: 'Batas Maksimal Reschedule Gratis Per Bulan', category: 'Operasional' }
];
export const DEFAULT_JSON_AUDIT_LOGS: AuditLog[] = [];
