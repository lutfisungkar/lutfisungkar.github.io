// // 🧪 Latihan 1: Membuat dan Menampilkan Array
// // Soal:
// // Buat sebuah array berisi nama-nama buah (misalnya: apel, jeruk, mangga), lalu tampilkan seluruh isi array tersebut di konsol menggunakan console.log.

// var buah = ['apel', 'jeruk', 'mangga'];

// console.log(buah);

// 🧪 Latihan 2:
// Buat array bernama hewan yang berisi:
// 'gajah', 'kucing', 'singa'


// for( var i = 0; i < 3; i++) {
//     console.log(buah[i]);
// }

// koreksi

// for( var i = 0; i < buah.length; i++) {
//     console.log(buah[i]);
// }

// bentuk lain

var buah = ['apel', 'jeruk', 'mangga'];
console.log(buah.join(', '));


// 🔧 Latihan push dan pop
// Instruksi:
// Buat array bernama hewan dengan isi: 'kucing', 'kelinci', 'panda'.
// Tambahkan 'koala' ke akhir array menggunakan push.
// Hapus satu elemen terakhir dari array menggunakan pop.
// Cetak isi array setelah tiap langkah (gunakan console.log(hewan)).

// var hewan = ['Kucing', 'Kelinci', 'Panda'];

// hewan.push('Koala');
// hewan.pop();

// console.log(hewan);

// 💻 Soal Latihan:
// var warna = ['Merah', 'Hijau', 'Biru'];
// // Tambahkan 'Kuning' ke awal array
// // Lalu hapus elemen pertama dari array
// // Tampilkan isi array setelah masing-masing operasi

// var warna = ['Merah', 'Hijau', 'Biru'];

// warna.unshift('Kuning');
// warna.shift();

// console.log(warna);


// 🧪 Latihan: Tambahkan dan hapus elemen dengan splice()
// Diketahui array berikut:
// var teman = ['Adit', 'Budi', 'Citra', 'Dina'];
// 🎯 Tugas:
// Tambahkan 'Eka' dan 'Fahri' setelah 'Budi'.
// Hapus 'Citra' dari array.
// Cetak hasil akhirnya.

var teman = ['Adit', 'Budi', 'Citra', 'Dina'];

teman.splice(2, 1, 'Eka', 'Fakhri');

console.log(teman.join(' - '));

// Penjelasan:
// 'Citra' ada di index ke-2
// Jadi cukup splice(2, 1, 'Eka', 'Fahri')
// 2 → mulai dari index 2
// 1 → hapus 1 item ('Citra')
// 'Eka', 'Fahri' → ditambahkan menggantikan 'Citra'

// 🔥 Latihan: Modifikasi Daftar Buku
// Kamu punya array awal seperti ini:
// var buku = ['Biologi', 'Kimia', 'Fisika', 'Matematika'];
// 🎯 Tugas:
// Hapus 'Kimia'
// Tambahkan 'Ekonomi' dan 'Sosiologi' setelah 'Fisika'
// Cetak hasil akhirnya dengan join(' | ')

var buku = ['Biologi', 'Kimia', 'Fisika', 'Matematika'];

buku.splice(1,1);

buku.splice(2, 0, 'Ekonomi', 'Sosiologi');
console.log(buku.join(' | '));