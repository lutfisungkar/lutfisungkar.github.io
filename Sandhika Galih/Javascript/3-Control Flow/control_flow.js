// control flow : 
// 1) loop / iteration (pengulangan) = for, while, do while.
// 2) pengkondisian. = if, if...else, if...else if...else, switch.


// FOR
// contoh :
// alert('Mulai');
// for(var i = 0; i < 5 ; i++) {
//     alert('Hello World!');
// }
// alert('Selesai');

// IF...ELSE
// contoh : 
// var angka = prompt('masukan angka :');

// if( angka % 2 === 0 ) { // jika angka dibagi 2 hasilnya adalah 0, maka...
//     alert(angka + ' adalah bilangan GENAP');
// } else { // jika tidak, maka...
//     alert(angka + ' adalah bilangan GANJIL');
// }

// LATIHAN IF...ELSE

var angka = prompt('Masukan angka!');

if(angka % 2 === 0) {
    alert('Angka yang anda masukan adalah bilangan GENAP');
} else {
    alert('Angka yang anda masukan adalah bilangan GANJIL!')
}

alert('Terimakasih sudah mencoba^^')