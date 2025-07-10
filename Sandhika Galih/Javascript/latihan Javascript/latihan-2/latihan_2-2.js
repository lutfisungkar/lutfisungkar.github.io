// 🧪 Latihan 1: Salam Nama dan Usia
// Instruksi:
// Minta nama user pakai prompt()
// Minta usia user pakai prompt() dan konversi ke Number()
// Tampilkan pesan:
// Jika usia < 13 → "Hai [nama], kamu masih anak-anak ya!"
// Jika usia antara 13–19 → "Halo [nama], kamu remaja nih!"
// Jika usia ≥ 20 → "Halo [nama], kamu sudah dewasa!"


// var nama = prompt("Masukan nama anda!");
// var user = prompt("Masukan usia anda!");
// var umur = Number(user);

// if(umur < 13) {
//     alert("Hai " + nama + ", usia kamu masih anak-anak, ya!");
// } else if(umur >= 13 && umur <= 19) {
//     alert("Halo " + nama + ", kamu udah remaja nih!");
// } else{
//     alert("Halo " + nama + ", kamu udah dewasa!");
// }

//  jawaban di atas udah bener, ada koreksi tapi ⬇️

var nama = prompt("Masukan nama anda!");
var umur = Number((prompt("Masukan usia anda!"))); // konversi yg ringkes

if(isNaN(umur)){ // baris 28-30 buat validasi. semisal yg dimasukin buka angka
    alert("Kamu belum memasukan angka yang valid!");
} else{ // logika diisi didalem else-nya validasi isNaN
    if(umur < 13) {
        alert("Hai " + nama + ", usia kamu masih anak-anak, ya!");
    } else if(umur >= 13 && umur <= 19) {
        alert("Halo " + nama + ", kamu udah remaja nih!");
    } else{
        alert("Halo " + nama + ", kamu udah dewasa!");
    }
}