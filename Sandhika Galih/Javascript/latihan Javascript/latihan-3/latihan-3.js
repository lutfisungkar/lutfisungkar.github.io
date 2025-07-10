// var jmlAngkot = 10;
// var angkotBeroperasi = 6;
// var noAngkot = 1;

// for( var noAngkot = 1; noAngkot <= angkotBeroperasi; noAngkot ++) {
//     console.log( 'Angkot no. ' + noAngkot + ' berfungsi dengan baik.');
// }

// for( noAngkot = angkotBeroperasi + 1; noAngkot <= jmlAngkot; noAngkot++) {
//     console.log( 'Angkot no. ' + noAngkot + ' tidak berfungsi dengan baik.');
// }

// koreksi:
// bisa juga pakai if & else.

// var jmlAngkot = 10;
// var angkotBeroperasi = 1;

// for ( noAngkot = 1; noAngkot <= jmlAngkot; noAngkot++) {
//  if ( noAngkot <= angkotBeroperasi ) {
//     console.log( 'Angkot no. ' + noAngkot + ' berfungsi dengan baik.');
//  } else {
//     console.log( 'Angkot no. ' + noAngkot + ' tidak berfungsi dengan baik.');     
//  }
// }


// 📝  Soal 2 – Tebak Angka Lagi! (pakai while)
// Gunakan while:
// Komputer menyimpan angka rahasia (misalnya: 5)
// Minta user tebak sampai benar
// Jika salah, kasih tahu apakah terlalu kecil atau besar

// jawaban Lutfi:
// var angka = 5;
// var ulangi = true;

// while(ulangi) {
//     var user = prompt('Coba tebak angka 1-10');
//     var tebak = Number(user);
    
//     if (tebak === angka) {
//         alert('yup, jawaban kamu benar!');
//     } else if (tebak < angka) {
//         alert('yah kurang, tambahin dikit lagi!');
//     } else {
//         alert('wah kebanyakan, kurangin deh!');
//     }

// ulangi = confirm('mau coba lagi?');
// }

// tambahan Improvement dr jawaban Lutfi:
// var angka = 5;
// var ulangi = true;

// while(ulangi) {
//     var user = prompt('Coba tebak angka 1-10');
//     var tebak = Number(user);
    
//     if (tebak === angka) {
//         alert('yup, jawaban kamu benar!');
//         ulangi = false; // keluar dari loop
//     } else if (tebak < angka) {
//         alert('yah kurang, tambahin dikit lagi!');
//         ulangi = confirm('Mau coba lagi?'); // confirm disebutakan setiap habis menjawab
//     } else {
//         alert('wah kebanyakan, kurangin deh!');
//         ulangi = confirm('Mau coba lagi?');
//     }
// }

// 📝 Soal 3 – Tampilkan segitiga bintang * (pakai for)
// User isi jumlah baris, contoh: 5
// Hasil:
// *
// **
// ***
// ****
// *****

// jawaban Lutfi SALAH ❌
// var bintang = '*';
// var user = prompt('masukan jumlah bintang yang kamu inginkan!');
// var jumlahBintang = Number(user);

// for ( bintang = 1; bintang <= jumlahBintang; bintang++ ) {
//     console.log ('*' + bintang);
// }

// koreksi 

// var user = prompt('masukan jumlah bintang yang kamu inginkan!');
// var jumlahBintang = Number(user);
// var hasil = '';

// for(var i = 1; i <= jumlahBintang; i++) {
//     hasil += '*';
//     console.log (hasil);
// }



// 📝 Bonus Soal 4 – Hitung total bilangan ganjil 1 sampai 50
// Gunakan for dan if untuk:
// Tambahkan semua bilangan ganjil antara 1–50
// Tampilkan totalnya di console

// var hasil = 0;
// for(var i = 1; i <= 50; i++) {
//     if(i % 2 !== 0) { // mengeluarkan nilai genap. i tidak sama dengan 0.
//         hasil += i;
//     }
// }
// console.log(hasil);


// 🧪 LATIHAN 1: Ganjil & Genap
// Tugas kamu:
// Tampilkan angka dari 1–20
// Jika angka ganjil, tulis "Ganjil"
// Jika angka genap, tulis "Genap"

// jawaban Lutfi benar ✅
// for ( var i = 1; i <= 20; i++) {
//     if ( i % 2 === 0) {
//         console.log( i + ' adalah angka Genap');
//     } else {
//         console.log( i + ' adalah angka Ganjil');
//     }
// }


// 🔢 LATIHAN 2: Kelipatan 3 & Bukan
// Tugas kamu:
// Tampilkan angka dari 1–30
// Jika angka kelipatan 3, tulis "Kelipatan 3!"
// Kalau bukan, tulis angka biasa aja

// yes.. bener✅
// for ( var i = 1; i <= 30; i++) {
//     if ( i % 3 === 0) {
//         console.log( i + ' adalah kelipatan 3');
//     } else {
//         console.log ( i );
//     }
// }


// 💥 BONUS CHALLENGE:
// Gabungkan keduanya:
// Angka dari 1–30
// Kalau kelipatan 3 & ganjil → tulis "Kelipatan 3 & Ganjil"
// Kalau kelipatan 3 & genap → tulis "Kelipatan 3 & Genap"
// Kalau bukan kelipatan 3 → tulis angka biasa
// 🧠 Ini butuh kombinasi if, else if, dan else

// YUHUU.. bener semua ✅🔥
// for ( var i = 1; i <= 30; i++) {
//     if ( i % 3 === 0 && i % 2 === 0) {
//         console.log( i + ' adalah kelipatan 3 dan GENAP');
//     } else if ( i % 3 === 0 && i % 2 !== 0) {
//         console.log( i + ' adalah kelipatan 3 dan GANJIL');
//     } else {
//         console.log(i);
//     }
// }