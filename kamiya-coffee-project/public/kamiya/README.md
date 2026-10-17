# Website Kamiya Coffee

Isi folder: `index.html`, `style.css`, `script.js`, `assets/img/` (17 foto + favicon.png).
Buka `index.html` di browser untuk melihat.

## Mengganti nomor WhatsApp
Di `script.js` baris paling atas:
```js
const WA_NUMBER = "62XXXXXXXXXX";   // ganti, mis. "6281234567890" (tanpa + atau spasi)
```
Tombol "Pesan Sekarang", WhatsApp melayang, Kontak, dan footer otomatis ikut. Pesan otomatis diatur di `WA_MESSAGE`.

## Mengganti menu & harga
Di `script.js`, objek `MENU`. Harga ditulis dalam ribuan: `price: [18, 22]` = Regular Rp18.000 / Large Rp22.000.
Tambahkan `signature: true` untuk badge Signature. Happy Hours ada di array `HAPPY_HOURS`.

## Mengganti foto
Timpa file di `assets/img/` dengan nama yang sama (disarankan lebar ±600–1200px, JPG).
Foto galeri diatur di array `GALLERY` di `script.js`.

## Mengganti teks
Semua teks ada di `index.html`, dikelompokkan per section dengan komentar `<!-- ===== NAMA ===== -->`.
Harga Snack Platter: cari `[HARGA MENYUSUL]`. Warna: variabel di awal `style.css`.

## Publikasi gratis
- **Netlify**: buka app.netlify.com/drop, seret seluruh folder ini. Selesai.
- **Vercel**: vercel.com → Add New Project → upload/hubungkan GitHub berisi folder ini (Framework: Other).
- **Hosting biasa (cPanel)**: upload semua isi folder ke `public_html` lewat File Manager.

Catatan Open Graph: setelah punya domain, ubah `og:image` di `index.html` menjadi URL lengkap,
mis. `https://domainanda.com/assets/img/logo-kamiya-persegi.jpg`, agar preview WhatsApp tampil.
