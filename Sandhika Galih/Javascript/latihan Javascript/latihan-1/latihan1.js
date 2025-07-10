// var nama = prompt('Isi Nama Kamu!');

// alert('Selamat Datang ' + nama + '!');

// var akses = confirm('Apakah kamu ingin masuk ke website?');

// if(akses === true) {
//     alert ('Selamat datang di website kami :)');
// } else{
//     alert ('Maaf, akses ditolak!');
// }

var yakin = confirm('Kamu yakin mau lanjut belajar?');

if(yakin) {
    alert('Yup, gitu dong! selamat meraih mimpi!');
} else {
    var ganti = prompt('kalau gitu kapan mau belajar?');
    alert('Ok aku tunggu yah di ' + ganti + ' nanti!');
}