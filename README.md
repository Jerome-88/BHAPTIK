# BHAPTIK

Website presentasi untuk BHAPTIK, sebuah konsep kain serbaguna yang memadukan seni lipat Furoshiki Jepang dengan motif batik Nusantara.

## Fitur

- Hero interaktif dengan identitas visual BHAPTIK.
- Penjelasan material dan anatomi kain.
- Katalog tutorial lipatan berdasarkan kategori.
- Gambar tutorial yang dapat diarahkan ke video YouTube.
- Panduan langkah demi langkah dalam modal interaktif.
- Eksplorasi filosofi motif Kawung, Parang Rusak, Truntum, dan Mega Mendung.
- Animasi masuk saat bagian halaman terlihat.
- Tampilan responsif untuk desktop dan perangkat seluler.

## Teknologi

- React 19
- Vite 8
- Tailwind CSS 3
- Framer Motion
- Iconify
- Oxlint

## Menjalankan Proyek

Pastikan Node.js dan npm sudah tersedia, kemudian jalankan:

```bash
npm install
npm run dev
```

Vite akan menampilkan alamat lokal proyek pada terminal, biasanya `http://localhost:5173`.

## Perintah yang Tersedia

```bash
npm run dev      # Menjalankan development server
npm run build    # Membuat production build ke folder dist
npm run preview  # Melihat hasil production build secara lokal
npm run lint     # Memeriksa kualitas kode dengan Oxlint
```

## Struktur Utama

```text
public/
  images/              Aset gambar dan motif batik
src/
  components/          Komponen antarmuka halaman
  data/
    motifs.js          Konten filosofi dan gambar setiap motif
    tutorials.js       Konten tutorial dan tautan YouTube
  App.jsx              Susunan halaman dan feature flag
  index.css            Styling global dan penyesuaian responsif
```

## Mengganti Tautan Video Tutorial

Buka `src/data/tutorials.js`, kemudian ganti nilai `youtubeUrl` pada tutorial yang sesuai:

```js
youtubeUrl: 'https://www.youtube.com/watch?v=VIDEO_ID_KAMU'
```

Klik pada gambar tutorial akan membuka tautan tersebut di tab baru. Judul dan tombol **Buka Panduan** tetap membuka panduan langkah demi langkah di website.

## Mengganti Gambar Motif

Simpan gambar baru di `public/images`, lalu ubah properti `image` pada motif terkait di `src/data/motifs.js`:

```js
image: '/images/nama-gambar.jpg'
```

## Mengganti Informasi Kontak

Email dan Instagram pada footer masih berupa placeholder. Ubah `mailto`, tautan Instagram, dan teks tampilannya di `src/components/Footer.jsx`.

## Mengaktifkan Fitur QR

Fitur QR sedang dinonaktifkan sementara. Untuk mengaktifkannya kembali, buka `src/App.jsx` dan ubah:

```js
const QR_FEATURE_ENABLED = false;
```

menjadi:

```js
const QR_FEATURE_ENABLED = true;
```

## Pemeriksaan Sebelum Deploy

```bash
npm run lint
npm run build
```

Hasil build siap deploy berada di folder `dist`.

## Hak Cipta

© 2026 BHAPTIK. Seluruh hak cipta dilindungi.
