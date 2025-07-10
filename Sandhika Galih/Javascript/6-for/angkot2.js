var noAngkot = 1;
var jmlAngkot = 10;
var angkotBeroperasi = 6;

while(noAngkot <= angkotBeroperasi) {
    console.log( 'Angkot no. ' + noAngkot + ' berfungsi dengan baik.');
noAngkot++;
}
// for(noAngkot = 7; noAngkot <= jmlAngkot; noAngkot++) {
//     console.log('Angkot no. ' + noAngkot + ' tidak berfungsi.');
// }

// bentuk lebih bagusnya
for(noAngkot = angkotBeroperasi + 1; noAngkot <= jmlAngkot; noAngkot++) {
    console.log('Angkot no. ' + noAngkot + ' tidak berfungsi.');
}