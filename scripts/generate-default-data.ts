import * as fs from 'fs';
import * as path from 'path';

const rawInput = [
 {
  "No": "1",
  "Nama Murid": "Amara Queen",
  "Nama Ortu Murid": "Anisa Ismawati",
  "Nomor WA": "0811-2994-444",
  "Kelas": "3 SD",
  "Sekolah": "SD Islam Al Azhar 14 Semarang ",
  "KUOTA BELAJAR": 10,
  "Jam": 17.3,
  "Alamat": "Griya Ungaran Residence, Jl. Mentawai 1 No. 45 Ungaran",
  "MATA PELAJARAN": "All Mapel (Kecuali english)",
  "SPP MURID": 25000,
  "fee menejemen": 5000,
  "GAJI TENTOR": 20000,
  "Nama Tentor": "Desti Ayu R."
 },
 {
  "No": "2",
  "Nama Murid": "Arshaka Reynand Zio P.",
  "Nama Ortu Murid": "Anisa Ismawati",
  "Nomor WA": "0811-2994-444",
  "Kelas": "1 SD",
  "Sekolah": "SD Islam Al Azhar 14 Semarang ",
  "KUOTA BELAJAR": 10,
  "Jam": 17,
  "Alamat": "Griya Ungaran Residence, Jl. Mentawai 1 No. 45 Ungaran",
  "MATA PELAJARAN": "Calistung (Persiapan SD)",
  "SPP MURID": 30000,
  "fee menejemen": 5000,
  "GAJI TENTOR": 25000,
  "Nama Tentor": "Desti Ayu R."
 },
 {
  "No": "3",
  "Nama Murid": "Amara Queen",
  "Nama Ortu Murid": "Anisa Ismawati",
  "Nomor WA": "0811-2994-444",
  "Kelas": "3 SD",
  "Sekolah": "SD Islam Al Azhar 14 Semarang ",
  "KUOTA BELAJAR": 10,
  "Jam": 15.3,
  "Alamat": "Griya Ungaran Residence, Jl. Mentawai 1 No. 45 Ungaran",
  "MATA PELAJARAN": "Hafalan & Ngaji Iqro",
  "SPP MURID": 35000,
  "fee menejemen": 5000,
  "GAJI TENTOR": 30000,
  "Nama Tentor": "Zeni Mei Sari"
 },
 {
  "No": "4",
  "Nama Murid": "Arshaka Reynand Zio P.",
  "Nama Ortu Murid": "Anisa Ismawati",
  "Nomor WA": "0811-2994-444",
  "Kelas": "1 SD",
  "Sekolah": "SD Islam Al Azhar 14 Semarang ",
  "KUOTA BELAJAR": 10,
  "Jam": 16,
  "Alamat": "Griya Ungaran Residence, Jl. Mentawai 1 No. 45 Ungaran",
  "MATA PELAJARAN": "English, Hafalan & Ngaji Iqro",
  "SPP MURID": 25000,
  "fee menejemen": 5000,
  "GAJI TENTOR": 20000,
  "Nama Tentor": "Zeni Mei Sari"
 },
 {
  "No": "5",
  "Nama Murid": "Radeva Alfian Sanjaya",
  "Nama Ortu Murid": "Novita",
  "Nomor WA": " 0877-6067-1085",
  "Kelas": "2 SD",
  "Sekolah": "SD Negeri 3 Gedanganak Ungaran",
  "KUOTA BELAJAR": 10,
  "Jam": 17,
  "Alamat": "Perum Citra Asri 3 Blok K.14 Rt: 02 Rw: 03, Beji leyangan, Ungaran Timur",
  "MATA PELAJARAN": "All Mapel ",
  "SPP MURID": 30000,
  "fee menejemen": 5000,
  "GAJI TENTOR": 25000,
  "Nama Tentor": "Desti Ayu R."
 },
 {
  "No": "6",
  "Nama Murid": "Naufal Myzaz",
  "Nama Ortu Murid": "Mala",
  "Nomor WA": "0821-3806-0115",
  "Kelas": "3 SD",
  "Sekolah": "SD Negeri Leyangan Ungaran",
  "KUOTA BELAJAR": 10,
  "Jam": 18,
  "Alamat": "Perum Citra Asri Blok J No.4 Ungaran",
  "MATA PELAJARAN": "All Mapel ",
  "SPP MURID": 40000,
  "fee menejemen": 5000,
  "GAJI TENTOR": 35000,
  "Nama Tentor": "Desti Ayu R."
 },
 {
  "No": "7",
  "Nama Murid": "Almeera Qirani A.",
  "Nama Ortu Murid": "Indri Hapsari",
  "Nomor WA": "0857-2704-9903",
  "Kelas": "3 SD",
  "Sekolah": "SD Istiqomah Ungaran",
  "KUOTA BELAJAR": 10,
  "Jam": 19,
  "Alamat": "Perum Ungaran Indah, Jl. Handayani V No. 21 Ungaran",
  "MATA PELAJARAN": "All Mapel ",
  "SPP MURID": 30000,
  "fee menejemen": 5000,
  "GAJI TENTOR": 25000,
  "Nama Tentor": "Desti Ayu R."
 },
 {
  "No": "8",
  "Nama Murid": "Almeera Qirani A.",
  "Nama Ortu Murid": "Indri Hapsari",
  "Nomor WA": "0857-2704-9903",
  "Kelas": "3 SD",
  "Sekolah": "SD Istiqomah Ungaran",
  "KUOTA BELAJAR": 10,
  "Jam": 15,
  "Alamat": "Perum Ungaran Indah, Jl. Handayani V No. 21 Ungaran",
  "MATA PELAJARAN": "Hafalan & Ngaji Iqro",
  "SPP MURID": 25000,
  "fee menejemen": 2000,
  "GAJI TENTOR": 23000,
  "Nama Tentor": "Emie Zulianingsih R."
 },
 {
  "No": "9",
  "Nama Murid": "Razqa Shandy Pradita",
  "Nama Ortu Murid": "Luh Putu Shanti K.",
  "Nomor WA": "0817-9564-216",
  "Kelas": "2 SD",
  "Sekolah": "SD Istiqomah Ungaran",
  "KUOTA BELAJAR": 10,
  "Jam": 16,
  "Alamat": "Puri Delta Asri 5 Tahap 2 Blok B3 No.6, Kalongan Ungaran Timur",
  "MATA PELAJARAN": "All Mapel ",
  "SPP MURID": 40000,
  "fee menejemen": 7000,
  "GAJI TENTOR": 33000,
  "Nama Tentor": "Yuni Nurtiyas"
 },
 {
  "No": "10",
  "Nama Murid": "Sandriavolo Estevania",
  "Nama Ortu Murid": "Yosefine Christin",
  "Nomor WA": "0856-4019-9327",
  "Kelas": "1 SD",
  "Sekolah": "SD Mardi Rahayu Ungaran",
  "KUOTA BELAJAR": 10,
  "Jam": 17,
  "Alamat": "Leyangan Mansion Blok Athena No. 7 Ungaran",
  "MATA PELAJARAN": "Calistung (Persiapan SD)",
  "SPP MURID": 30000,
  "fee menejemen": 5000,
  "GAJI TENTOR": 25000,
  "Nama Tentor": "Yuni Nurtiyas"
 },
 {
  "No": "11",
  "Nama Murid": "Philips ",
  "Nama Ortu Murid": "Yosefine Christin",
  "Nomor WA": "0856-4019-9327",
  "Kelas": "1 SD",
  "Sekolah": "SD Mardi Rahayu Ungaran",
  "KUOTA BELAJAR": 10,
  "Jam": 17,
  "Alamat": "Leyangan Mansion Blok Athena No. 7 Ungaran",
  "MATA PELAJARAN": "Calistung (Persiapan SD)",
  "SPP MURID": 30000,
  "fee menejemen": 5000,
  "GAJI TENTOR": 25000,
  "Nama Tentor": "Yuni Nurtiyas"
 },
 {
  "No": "12",
  "Nama Murid": "Wimala Hafiz",
  "Nama Ortu Murid": "Eka",
  "Nomor WA": "0813-2733-7882",
  "Kelas": "4 SD",
  "Sekolah": "SD Istiqomah Ungaran",
  "KUOTA BELAJAR": 10,
  "Jam": 15,
  "Alamat": "Perum Gedang Asri, Jl. Sumbawa V, TPA Nastiti Siwi Ungaran",
  "MATA PELAJARAN": "All Mapel ",
  "SPP MURID": 40000,
  "fee menejemen": 7000,
  "GAJI TENTOR": 33000,
  "Nama Tentor": "Azizah Naufal Adila (Dila)"
 },
 {
  "No": "13",
  "Nama Murid": "Syarinta Kara Mahardhika",
  "Nama Ortu Murid": "Mayang",
  "Nomor WA": "0813-2565-4678",
  "Kelas": "5 SD",
  "Sekolah": "SD Hj. Istriati Moenadi Ungaran",
  "KUOTA BELAJAR": 10,
  "Jam": 18,
  "Alamat": "Jl. Parasamya 7 No. H18A Pundung Putih Ungaran",
  "MATA PELAJARAN": "Matematika",
  "SPP MURID": 35000,
  "fee menejemen": 5000,
  "GAJI TENTOR": 30000,
  "Nama Tentor": "Dwi Nur Lestari"
 },
 {
  "No": "14",
  "Nama Murid": "Raphaela Renata",
  "Nama Ortu Murid": "Ibu Katrin",
  "Nomor WA": "0857-4204-6029",
  "Kelas": "2 SD",
  "Sekolah": "SD Mardi Rahayu Ungaran",
  "KUOTA BELAJAR": 10,
  "Jam": 16,
  "Alamat": "Karangsari Rt:3 Rw:6 Gunungpati Kota Semarang",
  "MATA PELAJARAN": "Calistung (Belum lancar)",
  "SPP MURID": 38000,
  "fee menejemen": 6000,
  "GAJI TENTOR": 32000,
  "Nama Tentor": "Ulfah Rohmawati"
 },
 {
  "No": "15",
  "Nama Murid": "M.Raja Arshaka",
  "Nama Ortu Murid": "Ibu Citra",
  "Nomor WA": "0813-2517-9615",
  "Kelas": "5 SD",
  "Sekolah": "Bukit Aksara Creative School",
  "KUOTA BELAJAR": 10,
  "Jam": 16,
  "Alamat": "Jl.KS.Tubun No.25, Bandarjo Ungaran",
  "MATA PELAJARAN": "Matematika",
  "SPP MURID": 38000,
  "fee menejemen": 6000,
  "GAJI TENTOR": 32000,
  "Nama Tentor": "Ulfah Rohmawati"
 },
 {
  "No": "16",
  "Nama Murid": "Mirza Alby Kavindra",
  "Nama Ortu Murid": "Marlina",
  "Nomor WA": "0895-4115-41195",
  "Kelas": "TK-B",
  "Sekolah": "TK An-Nahl Ungaran",
  "KUOTA BELAJAR": 10,
  "Jam": 17,
  "Alamat": "Susukan Sipenggung 3/8 Ungaran Timur",
  "MATA PELAJARAN": "Calistung",
  "SPP MURID": 42000,
  "fee menejemen": 9000,
  "GAJI TENTOR": 33000,
  "Nama Tentor": "Ulfah Rohmawati"
 },
 {
  "No": "17",
  "Nama Murid": "Hilarion Gavyn Fernanda I.",
  "Nama Ortu Murid": "Ferry Irawan",
  "Nomor WA": "0857-4030-1804",
  "Kelas": "2 SD",
  "Sekolah": "SD Mardi Rahayu Ungaran",
  "KUOTA BELAJAR": 10,
  "Jam": 16,
  "Alamat": "Jl. Urip Sumoharjo No.13 RT: 003/ 002, Bandarjo Ungaran Barat",
  "MATA PELAJARAN": "All Mapel",
  "SPP MURID": 40000,
  "fee menejemen": 8000,
  "GAJI TENTOR": 32000,
  "Nama Tentor": "Ulfah Rohmawati"
 },
 {
  "No": "18",
  "Nama Murid": "Nurazeta Ibrahim Azzaky",
  "Nama Ortu Murid": "Okfita Dian",
  "Nomor WA": "0857-2371-1935",
  "Kelas": "4 SD",
  "Sekolah": "MI Kalirejo Ungaran Timur",
  "KUOTA BELAJAR": 10,
  "Jam": 15.3,
  "Alamat": "Griya Jannatin Leyangan Blok G4 Ungaran",
  "MATA PELAJARAN": "All Mapel & Ngaji Iqro",
  "SPP MURID": 45000,
  "fee menejemen": 6500,
  "GAJI TENTOR": 38500,
  "Nama Tentor": "Muspiroh"
 },
 {
  "No": "19",
  "Nama Murid": "Akira Emran Mandhala",
  "Nama Ortu Murid": "Sarah Basbeth",
  "Nomor WA": "0822-2627-2812",
  "Kelas": "TK-B",
  "Sekolah": "TK IT Assalamah Ungaran",
  "KUOTA BELAJAR": 10,
  "Jam": 16,
  "Alamat": "Jl. Graha Yasa I No A9 Bandarjo Ungaran",
  "MATA PELAJARAN": "Calistung & Ngaji Iqro",
  "SPP MURID": 38000,
  "fee menejemen": 7000,
  "GAJI TENTOR": 31000,
  "Nama Tentor": "Emie Zulianingsih R."
 },
 {
  "No": "20",
  "Nama Murid": "Muhammad Al Fatih",
  "Nama Ortu Murid": "Yaninda Ratnasari",
  "Nomor WA": "0882-0084-12704",
  "Kelas": "1 SD",
  "Sekolah": "SD Istiqomah Ungaran",
  "KUOTA BELAJAR": 10,
  "Alamat": "Jl. Kutilang Raya Kuncen Rt:4/Rw:1 ",
  "MATA PELAJARAN": "Calistung & Ngaji Iqro",
  "SPP MURID": 40000,
  "fee menejemen": 8000,
  "GAJI TENTOR": 32000,
  "Nama Tentor": "Emie Zulianingsih R."
 },
 {
  "No": "21",
  "Nama Murid": "Nazifa Nur Fatima Zahara",
  "Nama Ortu Murid": "Yaninda Ratnasari",
  "Nomor WA": "0882-0084-12704",
  "Kelas": "4 SD",
  "Sekolah": "SD Istiqomah Ungaran",
  "KUOTA BELAJAR": 10,
  "Jam": 16,
  "Alamat": "Jl. Kutilang Raya Kuncen Rt:4/Rw:1 ",
  "MATA PELAJARAN": "All Mapel ",
  "SPP MURID": 48000,
  "fee menejemen": 10000,
  "GAJI TENTOR": 38000,
  "Nama Tentor": "Emie Zulianingsih R."
 },
 {
  "No": "22",
  "Nama Murid": "Afiqa Rheva Safitri",
  "Nama Ortu Murid": "Sulistyo Budi",
  "Nomor WA": "0858-9167-2272",
  "Kelas": "2 SD",
  "Sekolah": "SD Negeri 02 Ungaran",
  "KUOTA BELAJAR": 10,
  "Jam": 16,
  "Alamat": "Perum Griya Sinar Mutiara Blok E No.5 RT:06 RW:02, Bandarjo",
  "MATA PELAJARAN": "Calistung (Belum lancar)",
  "SPP MURID": 42000,
  "fee menejemen": 7000,
  "GAJI TENTOR": 35000,
  "Nama Tentor": "Emie Zulianingsih R."
 },
 {
  "No": "23",
  "Nama Murid": "Fatimah Yumna Qirani",
  "Nama Ortu Murid": "Farida",
  "Nomor WA": "0877-2234-4898",
  "Kelas": "TK-B",
  "Sekolah": "TK IT Assalamah Ungaran",
  "KUOTA BELAJAR": 10,
  "Jam": 16,
  "Alamat": "Branggah RT: 02 RW: 08, Nyatnyono Ungaran Barat",
  "MATA PELAJARAN": "Calistung",
  "SPP MURID": 37500,
  "fee menejemen": 7500,
  "GAJI TENTOR": 30000,
  "Nama Tentor": "Emie Zulianingsih R."
 },
 {
  "No": "24",
  "Nama Murid": "Saquena Shakira Rachman",
  "Nama Ortu Murid": "Galeh Itamaji ",
  "Nomor WA": "0822-6406-0529",
  "Kelas": "1 SD",
  "Sekolah": "SD Negeri 05 Ungaran",
  "KUOTA BELAJAR": 10,
  "Jam": 18,
  "Alamat": "Jl. Muria II Bandaran Barat Rt: 2 / Rw: 05 Ungaran",
  "MATA PELAJARAN": "Calistung (Persiapan SD)",
  "SPP MURID": 38000,
  "fee menejemen": 7000,
  "GAJI TENTOR": 31000,
  "Nama Tentor": "Emie Zulianingsih R."
 },
 {
  "No": "25",
  "Nama Murid": "Rizqiano",
  "Nama Ortu Murid": "Irwan Cahyono",
  "Nomor WA": "0818-0242-6237",
  "Kelas": "1 SD",
  "Sekolah": "SD Istiqomah Ungaran",
  "KUOTA BELAJAR": 10,
  "Jam": 18.3,
  "Alamat": "Jl. Kenanga baru 2,RT.11,RW.02 Rejosari - Genuk Ungaran",
  "MATA PELAJARAN": "Calistung, Hafalan, Ngaji Iqro",
  "SPP MURID": 37500,
  "fee menejemen": 7500,
  "GAJI TENTOR": 30000,
  "Nama Tentor": "Eka Rahmasari"
 },
 {
  "No": "26",
  "Nama Murid": "Keyna Faradina",
  "Nama Ortu Murid": "Rochani Abdullah",
  "Nomor WA": "0856-0163-8688",
  "Kelas": "1 SD",
  "Sekolah": "SD Istiqomah Ungaran",
  "KUOTA BELAJAR": 10,
  "Alamat": "Jl. Merapi Dalam No. 1 Rt: 02 Rw: 07, Suwakul Ungaran Barat",
  "MATA PELAJARAN": "Calistung",
  "SPP MURID": 37000,
  "fee menejemen": 5000,
  "GAJI TENTOR": 32000,
  "Nama Tentor": "Santika Lestari"
 },
 {
  "No": "27",
  "Nama Murid": "Aushaf Sakha A.",
  "Nama Ortu Murid": "Hapsari. E. P.",
  "Nomor WA": "0812-2600-7080",
  "Kelas": "5 SD",
  "Sekolah": "SD Hj. Istriati Moenadi Ungaran",
  "KUOTA BELAJAR": 10,
  "Jam": 17.15,
  "Alamat": "Gg. Melati 1/78 A Pudung Putih Ungaran",
  "MATA PELAJARAN": "Ngaji Qiroati",
  "SPP MURID": 38000,
  "fee menejemen": 10000,
  "GAJI TENTOR": 28000,
  "Nama Tentor": "Tri Widarti (Wiwid)"
 },
 {
  "No": "28",
  "Nama Murid": "Alesha Safa A.",
  "Nama Ortu Murid": "Hapsari. E. P.",
  "Nomor WA": "0812-2600-7080",
  "Kelas": "3 SD",
  "Sekolah": "SD Hj. Istriati Moenadi Ungaran",
  "KUOTA BELAJAR": 10,
  "Jam": 17.45,
  "Alamat": "Gg. Melati 1/78 A Pudung Putih Ungaran",
  "MATA PELAJARAN": "Ngaji Qiroati",
  "SPP MURID": 38000,
  "fee menejemen": 10000,
  "GAJI TENTOR": 28000,
  "Nama Tentor": "Tri Widarti (Wiwid)"
 },
 {
  "No": "29",
  "Nama Murid": "M.Adam Al Fath",
  "Nama Ortu Murid": "Lyony",
  "Nomor WA": "0811-2804-010",
  "Kelas": "3 SD",
  "Sekolah": "SD Semesta Semarang",
  "KUOTA BELAJAR": 10,
  "Jam": 15.3,
  "Alamat": "Jl Patimura, Perum Bukit Permata Regency A6 Lerep ",
  "MATA PELAJARAN": "English & Math",
  "SPP MURID": 42000,
  "fee menejemen": 9000,
  "GAJI TENTOR": 33000,
  "Nama Tentor": "Siti Safinatun N. (Fina)"
 },
 {
  "No": "30",
  "Nama Murid": "Ryuga Abhinaya Zafar",
  "Nama Ortu Murid": "Arga Rasita",
  "Nomor WA": "0822-2037-0080",
  "Kelas": "5  SD",
  "Sekolah": "SD Hj. Istriati Moenadi Ungaran",
  "KUOTA BELAJAR": 10,
  "Jam": 15,
  "Alamat": "Perumahan Grand My Home No. C2, Leyangan Ungaran Timur",
  "MATA PELAJARAN": "All Mapel & Ngaji Iqro",
  "SPP MURID": 45000,
  "fee menejemen": 7000,
  "GAJI TENTOR": 38000,
  "Nama Tentor": "Salsabila Malika P."
 }
];

function generateUsername(fullName: string): string {
  const parts = fullName.toLowerCase()
    .replace(/[^\w\s]/g, '') // remove parens, punctuation
    .trim()
    .split(/\s+/);
  
  if (parts.length === 0) return 'user';
  
  if (fullName.includes('(')) {
    const nick = fullName.match(/\(([^)]+)\)/);
    if (nick && nick[1]) {
      return nick[1].toLowerCase().trim().replace(/[^\w]/g, '');
    }
  }

  return parts[0];
}

function processData() {
  const tutorsMap = new Map<string, any>();
  let tutorCounter = 1;
  
  const parentsMap = new Map<string, any>();
  let parentCounter = 1;

  const studentsMap = new Map<string, any>();
  let studentCounter = 1;

  const schedulesList: any[] = [];
  const usersList: any[] = [];

  // Super Admin
  usersList.push({
    id: 'usr-admin',
    username: 'admin',
    passwordHash: 'admin123',
    name: 'Administrator',
    role: 'SUPER_ADMIN',
    status: 'Aktif',
    desc: 'Akses penuh ke seluruh modul ERP.',
    createdAt: '2026-07-08'
  });

  const usernamePool = new Set<string>(['admin']);

  for (const item of rawInput) {
    const tutorName = item['Nama Tentor'].trim();
    const parentName = item['Nama Ortu Murid'].trim();
    const studentName = item['Nama Murid'].trim();
    const waRaw = item['Nomor WA'] ? String(item['Nomor WA']).trim() : '0811-2994-444';
    const cleanWA = waRaw.replace(/\s+/g, '');
    const address = item['Alamat'].trim();

    // Map Tutor
    if (!tutorsMap.has(tutorName)) {
      const tutorId = `ttr_${String(tutorCounter++).padStart(3, '0')}`;
      let baseUsername = generateUsername(tutorName);
      let uniqueUsername = baseUsername;
      let suffix = 1;
      while (usernamePool.has(uniqueUsername)) {
        uniqueUsername = `${baseUsername}${suffix++}`;
      }
      usernamePool.add(uniqueUsername);

      const password = '123';

      tutorsMap.set(tutorName, {
        id: tutorId,
        name: tutorName,
        gender: 'Perempuan',
        address: address || 'Ungaran',
        wa: '0812-3456-7890',
        subjects: [item['MATA PELAJARAN']],
        gradesMastered: [item['Kelas'].includes('TK') || item['Kelas'].includes('Calistung') ? 'TK Besar' : 'SD'],
        ratePerSession: Number(item['GAJI TENTOR']),
        workingArea: ['Ungaran'],
        workingHours: ['15:00 - 19:30'],
        salarySystem: 'Per Pertemuan',
        status: 'Aktif',
        averageRating: 5,
        totalRatings: 1,
        maxHoursPerDay: 8,
        maxHoursPerWeek: 40,
        maxStudents: 10,
        createdAt: '2026-07-08'
      });

      // Create login user account
      usersList.push({
        id: `usr_${tutorId}`,
        username: uniqueUsername,
        passwordHash: password,
        name: tutorName,
        role: 'TENTOR',
        tutorId: tutorId,
        status: 'Aktif',
        desc: `Akun tentor resmi untuk mengajar ${item['MATA PELAJARAN']}`,
        createdAt: '2026-07-08'
      });
    } else {
      const currentTutor = tutorsMap.get(tutorName);
      if (!currentTutor.subjects.includes(item['MATA PELAJARAN'])) {
        currentTutor.subjects.push(item['MATA PELAJARAN']);
      }
      const newGrade = item['Kelas'].includes('TK') || item['Kelas'].includes('Calistung') ? 'TK Besar' : 'SD';
      if (!currentTutor.gradesMastered.includes(newGrade)) {
        currentTutor.gradesMastered.push(newGrade);
      }
    }

    // Map Parent
    const parentKey = `${parentName}_${cleanWA}`;
    if (!parentsMap.has(parentKey)) {
      const parentId = `prt_${String(parentCounter++).padStart(3, '0')}`;
      parentsMap.set(parentKey, {
        id: parentId,
        name: parentName,
        wa: cleanWA,
        studentIds: [],
        address: address
      });
    }

    // Map Student
    const studentKey = `${studentName}_${parentName}`;
    if (!studentsMap.has(studentKey)) {
      const studentId = `std_${String(studentCounter++).padStart(3, '0')}`;
      const gradeRaw = item['Kelas'].trim();
      let gradeLevel = 'SD';
      if (gradeRaw.toUpperCase().includes('TK-A')) gradeLevel = 'TK Kecil';
      else if (gradeRaw.toUpperCase().includes('TK-B') || gradeRaw.toUpperCase().includes('CALISTUNG')) gradeLevel = 'TK Besar';
      else if (gradeRaw.toUpperCase().includes('PAUD')) gradeLevel = 'PAUD';
      else if (gradeRaw.toUpperCase().includes('SMP')) gradeLevel = 'SMP';
      else if (gradeRaw.toUpperCase().includes('SMA')) gradeLevel = 'SMA';

      studentsMap.set(studentKey, {
        id: studentId,
        name: studentName,
        gender: 'Laki-laki',
        grade: gradeLevel,
        className: gradeRaw,
        school: item['Sekolah'].trim(),
        address: address,
        parentName: parentName,
        parentWA: cleanWA,
        subjects: [item['MATA PELAJARAN']],
        totalPackageSessions: Number(item['KUOTA BELAJAR'] || 10),
        remainingSessions: Number(item['KUOTA BELAJAR'] || 10),
        packageStartDate: '2026-07-08',
        packageEndDate: '2027-07-08',
        packageStatus: 'Aktif',
        ratePerSession: Number(item['SPP MURID']),
        managementMarginNominal: Number(item['fee menejemen']),
        status: 'Aktif',
        createdAt: '2026-07-08'
      });

      const parentObj = parentsMap.get(parentKey);
      if (parentObj && !parentObj.studentIds.includes(studentId)) {
        parentObj.studentIds.push(studentId);
      }
    } else {
      const currentStudent = studentsMap.get(studentKey);
      if (!currentStudent.subjects.includes(item['MATA PELAJARAN'])) {
        currentStudent.subjects.push(item['MATA PELAJARAN']);
      }
    }

    // Generate Schedule
    const studentObj = studentsMap.get(studentKey);
    const tutorObj = tutorsMap.get(tutorName);
    const jamVal = item['Jam'] !== undefined ? Number(item['Jam']) : 16;
    const hourInt = Math.floor(jamVal);
    const minVal = jamVal % 1 === 0 ? '00' : '30';
    const startHourStr = `${String(hourInt).padStart(2, '0')}:${minVal}`;
    const endHourInt = Math.floor(jamVal + 1.5);
    const endMinVal = (jamVal + 1.5) % 1 === 0 ? '00' : '30';
    const endHourStr = `${String(endHourInt).padStart(2, '0')}:${endMinVal}`;
    
    schedulesList.push({
      id: `sch_${Math.random().toString(36).substring(2, 8)}`,
      studentId: studentObj.id,
      tutorId: tutorObj.id,
      subject: item['MATA PELAJARAN'],
      dayOfWeek: 'Senin',
      timeSlot: `${startHourStr} - ${endHourStr}`,
      type: 'Jadwal Tetap',
      sessionRate: Number(item['GAJI TENTOR']),
      adminFee: Number(item['fee menejemen']),
      status: 'Aktif',
      rescheduleCountThisMonth: 0,
      createdAt: '2026-07-08'
    });
  }

  const students = Array.from(studentsMap.values());
  const tutors = Array.from(tutorsMap.values());
  const parents = Array.from(parentsMap.values());

  const subjects = [
    { id: 'sub_001', name: 'Calistung', grade: 'TK Besar' },
    { id: 'sub_002', name: 'Matematika', grade: 'SD' },
    { id: 'sub_003', name: 'English', grade: 'SD' },
    { id: 'sub_004', name: 'Ngaji Iqro', grade: 'SD' },
    { id: 'sub_005', name: 'Hafalan', grade: 'SD' },
    { id: 'sub_006', name: 'Ngaji Qiroati', grade: 'SD' }
  ];

  const workingAreas = [
    { id: 'area_001', name: 'Ungaran Timur', postcode: '50514' },
    { id: 'area_002', name: 'Ungaran Barat', postcode: '50511' }
  ];

  const settings = [
    { key: 'MARGIN_MANAGEMENT_NOMINAL', value: 10000, description: 'Nominal Standar Fee/Potongan Manajemen (Rp per Sesi Pertemuan)', category: 'Keuangan' },
    { key: 'MAX_RESCHEDULE_PER_MONTH', value: 2, description: 'Batas Maksimal Reschedule Gratis Per Bulan', category: 'Operasional' },
    { key: 'MIN_NOTICE_RESCHEDULE_DAYS', value: 1, description: 'Minimal Pemberitahuan Reschedule Sebelum Hari Mengajar (Hari, misal 1 atau 2 hari)', category: 'Operasional' },
    { key: 'MAX_DEADLINE_RESCHEDULE_BEFORE_TEACHING_DAYS', value: 1, description: 'Batas Maksimal Pengajuan Reschedule Sebelum Hari Mengajar (Hari, Standar: H-1)', category: 'Operasional' },
    { key: 'AUTO_SYNC_GOOGLE_SHEETS', value: true, description: 'Sinkronisasi Realtime Otomatis ke Google Sheets', category: 'Integrasi' }
  ];

  // Write file out
  const targetPath = path.join(process.cwd(), 'src', 'data', 'defaultJsonData.ts');
  const code = `import {
  User, Student, Tutor, Parent, Subject, WorkingArea, Schedule,
  Attendance, Invoice, Finance, TutorSalary, Module, Approval,
  Setting, AuditLog
} from '../types';

export const DEFAULT_JSON_USERS: User[] = ${JSON.stringify(usersList, null, 2)};

export const DEFAULT_JSON_TUTORS: Tutor[] = ${JSON.stringify(tutors, null, 2)};

export const DEFAULT_JSON_STUDENTS: Student[] = ${JSON.stringify(students, null, 2)};

export const DEFAULT_JSON_SCHEDULES: Schedule[] = ${JSON.stringify(schedulesList, null, 2)};

export const DEFAULT_JSON_PARENTS: Parent[] = ${JSON.stringify(parents, null, 2)};

export const DEFAULT_JSON_SUBJECTS: Subject[] = ${JSON.stringify(subjects, null, 2)};

export const DEFAULT_JSON_WORKING_AREAS: WorkingArea[] = ${JSON.stringify(workingAreas, null, 2)};

export const DEFAULT_JSON_ATTENDANCES: Attendance[] = [];

export const DEFAULT_JSON_INVOICES: Invoice[] = [];

export const DEFAULT_JSON_FINANCE: Finance[] = [];

export const DEFAULT_JSON_SALARIES: TutorSalary[] = [];

export const DEFAULT_JSON_APPROVALS: Approval[] = [];

export const DEFAULT_JSON_MODULES: Module[] = [];

export const DEFAULT_JSON_SETTINGS: Setting[] = ${JSON.stringify(settings, null, 2)};

export const DEFAULT_JSON_AUDIT_LOGS: AuditLog[] = [];
`;

  fs.writeFileSync(targetPath, code);
  console.log('✅ src/data/defaultJsonData.ts has been successfully generated & synced!');
}

processData();
process.exit(0);
