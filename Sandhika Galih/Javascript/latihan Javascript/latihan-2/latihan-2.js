// 📋 Deskripsi Soal:
// Buat program tebak angka seperti ini:
// Komputer menentukan angka rahasia (boleh kamu set sendiri dulu, misal 7)
// User diminta menebak angka lewat prompt()
// Cek:
// Jika benar → tampilkan "Selamat! Tebakan kamu benar!"
// Jika terlalu kecil → tampilkan "Terlalu kecil!"
// Jika terlalu besar → tampilkan "Terlalu besar!"
// Setelah setiap tebakannya, tanya pakai confirm():
// "Mau coba lagi?"
// Kalau OK, ulangi
// Kalau Cancel, tampilkan "Terima kasih sudah bermain!"

// var set = 7;
// var ulangi = true;

// while(ulangi) {
//     var user = prompt("Coba tebak angka 1-10!");
//     var tebak = Number(user);

//     if(tebak === set) {
//         alert("yup, kamu bener");
//     } else if(tebak > set) {
//         alert("Kebanyakan, coba kurangin");
//     } else {
//         alert("wah, kedikitan.. coba tambahin!");
//     }
//     ulangi = confirm("Mau Coba Lagi?");
// }

// alert("Terimakasih sudah mencoba");


// var set = 7;
// var ulangi = true;

// while(ulangi){
//     var user = prompt('Tebak angka 1-10');
//     var angka = Number(user);

//     if(angka === set) {
//         alert('kamu benar!');
//     } else if(angka > set ) {
//         alert('wah kebanyakan, kurangin dikit');
//     } else {
//         alert('kedikitan, tambahin lagi!');
//     }
//         ulangi = confirm('Mau coba lagi');           
// }

// alert('terimakasih sudah mencoba!');

var set = 7;
var ulangi = true;

while(ulangi){
    var user = prompt("masukan tebak angka 1-10!");
    var angka = Number(user);

    if( angka === set){
        alert("Yap, kamu benar!");
    } else if( angka > set) {
        alert('wah, kebanyakan!');
    } else {
        alert('yah, kedikitan!');
    }

    ulangi = confirm('mau coba lagi?');
}

alert('terimakasih sudah mencoba!');






















