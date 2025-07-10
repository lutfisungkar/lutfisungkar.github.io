// KONSEP

// if ( kondisi 1) (
//     aksi 1
// ) else if ( kondisi 2) {
//     aksi 2
// } else if ( kondisi 3) {
//     aksi 3
// } ...
// else if ( kondisi n) {
//     aksi n
// } else {
//     aksi default
// }

// SYNTAX

// switch(ekspresi) {
//     case 'nilai 1':
//         aksi 1
//     [break;]
//     case 'nilai 2':
//         aksi 2
//     [break;]
//     case 'nilai n':
//         aksi n
//     [break;]
//     default:
//         aksi default
//     [break;]
// }


// CONTOH
// var angka = parseInt(prompt('masukan angka:')); // parseInt untuk konversi output prompt menjadi intejer. mirip Number

// if ( angka == 1) {
//     alert ( 'anda memasukkan angka 1');
// } else if ( angka == 2) {
//     alert( 'anda memasukkkan angka 2');
// } else {
//     alert( 'angka yang anda masukkan salah!');
// }

// sekarang gunakan SWITCH

// var angka = parseInt(prompt('masukan angka:'));

// switch ( angka ) {
//     case 1 :
//         alert( 'anda memasukan angka 1');
//         break;
//     case 2 :
//         alert( 'anda memasukan angka 2');
//         break;
//     case 3 :
//         alert( 'anda memasukan angka 3');
//         break;
    
//     default :
//         alert( 'angka yang anda masukan salah!');
//         break;    
// }

// CONTOH-2 
var item = prompt('masukan nama makanan atau minuman : \n (cth: nasi, daging, susu, hamberger, softdrink)');

switch ( item ) {
    case 'nasi' :
        alert('makanan / minuman SEHAT');
        break; // kl gak pake break, maka akan lanjut ke case berikutnya
    case 'daging' :
        alert('makanan / minuman SEHAT');
        break;
    case 'susu' :
        alert('makanan / minuman SEHAT');
        break;
    case 'hamberger' :
        alert('makanan / minuman TIDAK SEHAT');
        break;
    default :
        alert('anda memasukan nama makanan / minuman yang salah!')
}