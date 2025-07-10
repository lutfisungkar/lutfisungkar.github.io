// algoritma atau sudo code
var tanya = true;
while ( tanya ) {
// menangkap pilihan player
var p = prompt('silahkan pilih : gajah, semut atau manusia!');

// menangkap pilihan computer
// membangkitkan bilangan random

var comp = Math.random(); // sistem memilih angka dari 0-1 secara random.

if( comp < 0.34) {
    comp = 'gajah';
} else if( comp >= 0.34 && comp < 0.67 ) {
    comp = 'manusia';
} else {
    comp = 'semut';
}

var hasil = '';
// menentukan rules
if( p == comp) {
    hasil = 'SERI';
} else if( p == 'gajah') {
    // if( comp == orang) {
    //     hasil = 'MENANG';
    // } else {
    //     hasil = 'KALAH';
    // }
    hasil = ( comp == 'manusia' ) ? 'MENANG' : 'KALAH'; // susunan ternary ini mewakili konsep if else di atas.
} else if ( p == 'manusia') {
    hasil = ( comp == 'gajah') ? 'KALAH' : 'MENANG';
} else if( p == 'semut') {
    hasil = ( comp == 'manusia') ? 'KALAH' : 'MENANG';
} else {
    hasil = 'Memasukan pilihan yang salah';
}


// tampilkan hasilnya

alert('kamu memilih : ' + p + ' dan Komputer memilih : ' + comp + '\nMaka hasilnya : Kamu ' + hasil );

tanya = confirm('mau coba lagi?');
}

alert('terimakasih sudah bermain!')

// PR GAME TEBAK ANGKA! (lihat video 26 menit 18.00)