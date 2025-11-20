# My-Profiles

Portfolio single-page untuk Embun Tiara yang dibangun dengan React + Vite. Halaman ini menonjolkan profil profesional sebagai Project Manager & System Analyst lengkap dengan ringkasan layanan, pengalaman proyek, dan kanal kontak interaktif.

## Fitur Utama
- **Navigasi dinamis** – highlight menu aktif mengikuti posisi scroll dan sticky header yang berubah saat halaman digulir.
- **Tema terang/gelap** – tombol `change-theme-button` menyimpan preferensi user di `localStorage`.
- **Animasi ScrollReveal** – elemen kunci (hero, skill cards, services, footer) diberi transisi lembut menggunakan `scrollreveal`.
- **Modals layanan** – tiap kartu pada bagian Services membuka modal berisi detail deskripsi serta daftar deliverables.
- **Filter portofolio** – tombol kategori (`All/Web/Mobile/Design`) memfilter daftar `works` secara real-time menggunakan state `activeFilter`.
- **Kontak cepat** – kartu email, WhatsApp, dan Instagram beserta CTA menuju kanal masing-masing; form dummy tersedia untuk input manual.

## Struktur Bagian Halaman
| Section | ID | Konten |
| --- | --- | --- |
| Home | `#home` | Hero, CTA download CV, social links (LinkedIn/GitHub/Instagram). |
| About | `#about` | Foto, statistik singkat pengalaman, deskripsi singkat. |
| Skills | `#skills` | Dua kolom kompetensi (Project Management & System Analysis). |
| Services | `#services` | Tiga kartu layanan dengan modal detail. |
| Work | `#work` | Grid portofolio yang bisa difilter kategori. |
| Contact | `#contact` | Kartu kontak langsung + form pesan sederhana. |
| Footer | — | Navigasi cepat + ikon sosial placeholder. |

Semua data sumber tersimpan dalam konstanta di `src/App.jsx` (`services`, `works`, `projectSkills`, `analysisSkills`, `contactOptions`, dll.) sehingga mudah dipersonalisasi.

## Teknologi
- React 19 + React DOM 19
- Vite 7 (dev server & build)
- ScrollReveal 4
- Swiper 12 (tersedia untuk future carousel)
- ESLint 9 dengan konfigurasi berbasis `@eslint/js`

## Menjalankan Secara Lokal
```bash
pnpm install # atau npm install / yarn install
pnpm run dev # start Vite pada http://localhost:5173
pnpm run build # bundel produksi ke folder dist/
pnpm run preview # pratinjau hasil build
pnpm run lint # linting dengan ESLint
```
> Script identik jika menggunakan `npm` atau `yarn`.

## Struktur Direktori
```
├── public/
│   ├── favicons/
│   ├── img/           # aset hero, about, portfolio
│   └── pdf/hailee-Cv.pdf
├── src/
│   ├── App.jsx        # komponen utama (semua section)
│   ├── App.css        # styling utama
│   ├── index.css & styles.css
│   ├── swiper-bundle.min.css
│   └── main.jsx       # entry ReactDOM + ScrollReveal init
├── vite.config.js
└── eslint.config.js
```

## Kustomisasi Konten
- **Services / Works / Skills**: edit array terkait di `src/App.jsx`.
- **Link sosial & kontak**: perbarui `home__social` serta `contactOptions`.
- **Media & file CV**: ganti aset di `public/img`, `public/pdf`.
- **Palet warna & tipografi**: ubah di `src/App.css` dan `src/styles.css`.

## Deployment
1. Jalankan `pnpm run build`.
2. Deploy folder `dist/` ke platform statis seperti Vercel, Netlify, atau GitHub Pages.

## Lisensi
Proyek ini bersifat pribadi untuk kebutuhan portofolio Embun Tiara. Silakan fork dan modifikasi sesuai kebutuhan pribadi, dengan menyertakan atribusi seperlunya.
