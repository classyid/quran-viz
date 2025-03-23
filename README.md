# Quran-Viz: Visualisasi Struktur Al-Quran

Aplikasi web yang menyajikan visualisasi interaktif tentang struktur dan statistik Al-Quran untuk memudahkan pemahaman terhadap kitab suci umat Islam.

![Quran-Viz Screenshot](screenshot_url)

## Fitur

- 📊 Dashboard statistik dengan informasi jumlah surah dan ayat
- 📈 Visualisasi grafik perbandingan surah Makkiyah dan Madaniyah
- 📋 Daftar lengkap surah dengan fitur pencarian
- 📝 Fakta-fakta menarik tentang Al-Quran
- 🌙 Dukungan tema gelap/terang
- 📱 Responsif untuk berbagai ukuran layar

## Demo

Kunjungi [https://s.id/quran-viz](https://s.id/quran-viz) untuk melihat aplikasi dalam aksi.

## Teknologi yang Digunakan

- HTML, CSS, JavaScript
- [Chart.js](https://www.chartjs.org/) - Untuk visualisasi grafik
- [Tailwind CSS](https://tailwindcss.com/) - Framework CSS
- [Font Awesome](https://fontawesome.com/) - Icon
- [Google Apps Script](https://developers.google.com/apps-script) - Backend untuk mengakses API Al-Quran

## Cara Deploy

### Menggunakan Google Apps Script

1. Buat project baru di [Google Apps Script](https://script.google.com/)
2. Buat file `Code.gs` dan salin kode berikut:

```javascript
function doGet() {
  return HtmlService.createHtmlOutputFromFile('index')
    .setTitle('Al-Quran App')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}
```

3. Buat file HTML baru dengan nama `index.html` dan salin kode HTML dari repository ini
4. Klik "Deploy" > "New deployment"
5. Pilih "Web app" sebagai tipe deployment
6. Atur akses ke "Anyone" dan klik "Deploy"
7. Salin URL yang dihasilkan untuk mengakses aplikasi

## Berkontribusi

Silakan berkontribusi untuk meningkatkan aplikasi ini! Buat fork repository, lakukan perubahan, dan ajukan pull request.

## Lisensi

MIT License

## Sumber Data

Data Al-Quran disediakan oleh [Sumber API Al-Quran Anda](https://api-alquran.com).

## Kontak

Jika Anda memiliki pertanyaan atau saran, jangan ragu untuk [membuat issue](https://github.com/classyid/quran-viz/issues) atau hubungi saya di [kontak@classy.id](mailto:kontak@classy.id).
