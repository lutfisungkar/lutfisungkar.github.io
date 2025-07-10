// while(kondisi) {
//     aksi
//


// while(true) { // infinite loop
//     console.log('hello world');
// }

// while(false) {
//     console.log('hello world');
// }

// 1) loop diberhentikan oleh user.

//var ulang = true;

//while (ulang) {
    //console.log('hello world'); // akan terus dijalankan selama nilai ulang = true

    // confirm akan menampilkan kotak dialog "OK" (true) dan "Cancel" (false)
    // jika user klik OK → ulang = true → loop lanjut
    // jika user klik Cancel → ulang = false → loop berhenti
    //ulang = confirm('Lagi?'); // jadi berhenti atau lanjutnya loop tergantung aksi dr user (jawaban confirm)
// }

// 2) loop diberhentikan oleh program.
// 3 komponen penting :

// nilai awal
// while(kondisi terminasi){
// aksi
// increment / decrement (penambahan / pengurangan trhd nilai awal)
// } 

// contoh :
// var nilaiAwal = 1;
// while (nilaiAwal <= 5) { // loop akan berhenti jika nilai awal lebih besar dari 5
//     console.log('hello world');
//     nilaiAwal++; // artinya -> nilaiAwal = nilaiAwal + 1;
// }

// contoh-2 :
var nilaiAwal = 1;
while(nilaiAwal <= 10) {
    console.log('hello world ' + nilaiAwal + 'x');
    nilaiAwal++;
}