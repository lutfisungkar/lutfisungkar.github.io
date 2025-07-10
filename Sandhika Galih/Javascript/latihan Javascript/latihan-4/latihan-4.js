// 🟡 Soal 1: Validasi & Pengkategorian Usia
// Minta pengguna memasukkan nama dan umur.
// Tampilkan:
// Kalau umur < 13: anak-anak
// 13–19: remaja
// 20 ke atas: dewasa
// Tapi kalau input umur bukan angka, ulangi terus sampai valid.
// ➡️ Gunakan prompt, isNaN, while, dan if-else.

// var ulangi = true;
// var nama = prompt('masukan nama anda!');

// while (ulangi) {
//     var usia;

//     while ( true ) {
//         usia  = (Number(prompt('masukan usia anda')));
//         if ( !isNaN (usia)) { // membalik logika isNaN sehingga hasilnya jadi positif
//             break;
//         } 
//         alert('data tidak valid, silahkan masukan angka!');
//     }

//     if (usia <= 13){
//         alert('anda masih ANAK-ANAK.');
//     } else if ( usia >= 20 ){
//         alert( ' anda sudah DEWASA');
//     } else {
//         alert(' anda adalah remaja!');
//     }
// ulangi = confirm('mau coba lagi?')
// }


// 🔵 Soal 2: Game Tebak Angka (1–10)
// Simpan angka rahasia (misal: 7).
// Lalu minta user menebak angka itu:
// Kalau benar → tampilkan alert "Benar!"
// Kalau terlalu kecil → "Tebakan kamu kurang besar"
// Kalau erlalu besar → "Tebakan kamu kebesaran"
// Setelah itu tawarkan: mau coba lagi? (confirm)
// ➡️ Pakai while, if-else, dan Number(prompt).


// var answer = 7;
// var ulangi = true;

// while(ulangi){
//     var user = (Number(prompt('coba tebak angka 1-10')));
    
//     if(user === answer) {
//         alert('yup, kamu benar');
//     } else if (user < answer) {
//         alert('yah, Kedikitan');
//     } else {
//         alert('yah, kebanyakan!')
//     }
// ulangi = confirm('mau coba lagi?');
// }

