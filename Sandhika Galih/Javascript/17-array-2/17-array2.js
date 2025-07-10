// 6. foreach
// - pemakaiannya mirip for

// var angka = [1,2,3,4,5,6,7,8];
// var nama = ['Lutfi', 'Sungkar', 'Nofa'];
// // for( var i = 0; i < angka.length; i++) {
// //     console.log(angka[i]);
// // }

// nama.forEach(function(e, i) {
//     console.log('Mahasiswa ke-' + (i+1) + ' adalah : ' + e);
// });

// 7. map 
// lebih baik dari foreach karena dia mengembalikan array.

// var angka = [1,2,5,3,6,8,4];
// var angka2 =  angka.map(function(e) {
//     return e * 2;
// });
// console.log(angka2.join(' - '));

// 8. sort
// untuk mengurutkan array

// var angka = [1,2,5,3,6,8,4];
// angka.sort();
// console.log(angka.join(' - '));

// var angka = [1,2,10,5,20,3,6,8,4];
// angka.sort(function(a,b) { // supaya tidak mengurutkan berdasarkan karakter pertama pd angka yang lebih dari 1 digit.
//     return a-b; // a-b adalah urut dari terkecil ke terbesar, kl b-a sebaliknya.
// });
// console.log(angka.join(' - '));

//  9. filter
// mencari banyak nilai nilai pada array dan mengembalikannya dalam bentuk array

// var angka = [1,2,10,5,20,3,6,8,4];
// var angka2 = angka.filter(function(x) {
//     return x > 5;
// });

// console.log(angka2.join(' - '));

// 10 find = untuk menemukan 1 nilai.

var angka = [1,2,10,5,20,3,6,8,4];
var angka2 = angka.find(function(x) {
    return x > 5;
});

console.log(angka2);

// link kumpulan method
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global
