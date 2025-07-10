// 🔧 Instruksi:
// Buat function dengan nama haloDunia
// Di dalam function, tampilkan console.log("Halo dunia!")
// Panggil function tersebut.


// function haloDunia() {
//     console.log('Halo Dunia');
// }

// haloDunia();


// 🔧 Latihan Function Dasar #2:
// Buatlah sebuah function bernama ucapanSalam yang menerima satu parameter bernama nama.
// Function tersebut akan mencetak ke console:

// Halo, [nama]! Selamat datang.


// function ucapanSalam(nama) {
//     console.log('Halo, ' + nama + '! Selamat Datang.');
// }

//
// 🔢 Latihan Function #2
// Buatlah sebuah function bernama tambahDuaAngka yang menerima dua parameter angka, lalu mengembalikan hasil penjumlahan keduanya.

// function tambahDuaAngka(a, b) {
//     var a;
//     var b;
//     var hasil;

//     hasil = a + b;

//     return hasil;
// }

// console.log(tambahDuaAngka(4, 5));

// // ringkas 

// function tambahDuaAngka(a, b) {
//     return a + b;
// }

// console.log(tambahDuaAngka (5, 6));


// function kaliDua(a) {
//     return a * 2;
// }

// console.log(kaliDua(6));
// console.log(kaliDua(10));


// // 🧪 Latihan 3: Menjumlahkan Dua Angka
// // Petunjuk:
// // Buat function jumlah yang menerima dua parameter dan mengembalikan hasil penjumlahan keduanya.

// function jumlahDuaAngka(a, b) {
//     return a + b;
// }

// console.log(jumlahDuaAngka(2, 5));

// 🧪 Latihan 4: Menentukan Bilangan Genap atau Ganjil
// Buat function bernama cekGenapGanjil yang menerima satu angka, lalu:
// Jika angkanya genap, tampilkan di console: "X adalah bilangan genap"
// Jika angkanya ganjil, tampilkan: "X adalah bilangan ganjil"


// function cekGenapGanjil(angka) {
//     if (angka % 2 === 0) {
//         console.log('Angka ' + angka + ' adalah bilangan GENAP');
//     } else {
//         console.log('Angka ' + angka + ' adalah bilangan GANJIL');
//     }
// }

// cekGenapGanjil(8);

// 🧪 Latihan 5: Menghitung Luas Persegi Panjang
// Buat function bernama hitungLuasPersegiPanjang yang menerima dua parameter: panjang dan lebar. Function ini harus mengembalikan nilai luas dari persegi panjang.
// 💡 Rumus luas = panjang × lebar

// function luasPersegiPanjang(p, l) {
//     return p * l;
// }

// console.log(luasPersegiPanjang(4, 6));

// 🧪 Latihan 6: Menentukan Bilangan Positif, Negatif, atau Nol
// Buat fungsi bernama cekBilangan yang menerima satu parameter angka, lalu cetak ke console:
// "Bilangan POSITIF" jika lebih dari 0
// "Bilangan NEGATIF" jika kurang dari 0
// "Nol" jika nilainya 0


// function cekBilangan(a) {
//     if( a > 0) {
//         console.log(a + ' adalah bilangan POSITIF');
//     } else if( a < 0) {
//         console.log(a + ' adalah bilangan NEGATIF');
//     } else {
//         console.log(a + ' adalah Nol');
//     }
// }

// cekBilangan(-4);


// 🧪 Latihan 7: Menghitung Luas Lingkaran
// Buat fungsi luasLingkaran yang menerima satu parameter r (jari-jari), dan mengembalikan hasil luas lingkaran

// function luasLingkaran(r) {
//     return Math.PI * r * r; 
// }

// console.log(luasLingkaran(7));


// 🧪 Soal 1: Cek Apakah Angka Termasuk Kelipatan Dua Bilangan
// Buat sebuah function cekKelipatan(a, b) yang akan memeriksa apakah a merupakan kelipatan dari b.

// function cekKelipatan(a, b) {
//     if( a % b === 0) {
//         console.log(a + ' ADALAH kelipatan dari ' + b);
//     } else {
//         console.log(a + ' BUKAN kelipatan dari ' + b);
//     }
// }

// cekKelipatan(20, 10);

// 🧪 Latihan Function Lanjutan: Validasi Password
// Petunjuk:
// Buat sebuah function bernama validasiPassword(password) yang:
// Menerima satu parameter: password (string)
// Mengecek apakah panjang password minimal 8 karakter
// Jika panjang password kurang dari 8, cetak:
// "Password terlalu pendek"
// Jika panjangnya cukup, cetak:
// "Password valid"


// function validasiPassword(password) {
//     var jumlahKarakter = password.length;

//     if ( jumlahKarakter < 8) {
//         console.log('Password terlalu pendek');
//     } else {
//         console.log('Password valid');
//     }
// }

// validasiPassword('tolongbaca');




// 🧪 Latihan Lanjutan: Validasi Usia dan Status
// Petunjuk:
// Buat sebuah fungsi cekStatusUsia yang menerima parameter usia.
// Fungsi akan mengeluarkan output:
// Jika usia kurang dari 0 → Usia tidak valid!
// Jika usia 0–12 → Anak-anak
// Jika usia 13–19 → Remaja
// Jika usia 20–59 → Dewasa
// Jika usia 60 ke atas → Lansia

// function cekStatusUsia(usia) {
//     if(usia < 0 ) {
//         console.log('Usia tidak valid');
//     } else if( usia <= 12) {
//         console.log('Anak-anak');
//     } else if( usia < 20 ) {
//         console.log('Remaja');
//     } else if( usia < 60 ) {
//         console.log('Dewasa');
//     } else {
//         console.log('Lansia');
//     }
// }

// cekStatusUsia(80);

// 🧪 Latihan: Cek Status Usia + Nama
// Petunjuk:
// Buat sebuah fungsi bernama cekIdentitas yang menerima dua parameter: nama dan usia.
// Fungsi ini akan:
// Mengecek apakah usia valid (tidak negatif dan berupa angka).
// Menampilkan ucapan sesuai rentang usia seperti berikut:
// 0–12 → "Halo [nama], kamu masih anak-anak."
// 13–19 → "Hai [nama], kamu remaja nih!"
// 20–59 → "Halo [nama], kamu sudah dewasa."
// 60 ke atas → "Salam hormat, [nama]. Kamu termasuk lansia."
// Jika usia tidak valid (angka negatif atau bukan angka), tampilkan:
// "Usia tidak valid untuk [nama]!"


