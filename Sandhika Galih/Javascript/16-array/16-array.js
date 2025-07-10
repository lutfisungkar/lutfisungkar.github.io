// // // // array -> variabel yang bisa menampung lebih dari satu nilai.
// // // // selalu dimulai dari 0.

// // // // contoh:

// // // // var hari = ['Senin','Selasa','Rabu'];
// // // // var mhs = ['Lutfi','Sungkar','Iqbal'];

// // // // Key and value pair
// // // // key = index, value = element

// // // var binatang = ['kucing','kelinci','Monyet','Panda','Koala','Sapi'];

// // // atau   

// // // var binatang = [];
// // // binatang = ['kucing','kelinci','Monyet','Panda','Koala','Sapi'];

// // // console.log(binatang[4]); // menampilkan isi dari indeks binatang nomor 4. maka yg tampil adalah koala.

// // // console.log(binatang.length); // buat ngitung jumlah elemen yg di dalem array
// //            //  array    method       


// // // MANIPULASI ARRAY

// // // 1. Menambah isi array
// // // var arr = ['a', 1, true];
// // // console.log(arr); // menampilkan semua
// // // console.log(arr[2]); // menampilan tertentu

// // // array kosong baru diisi.
// // // var arr = [];
// // // arr[0] = 'Lutfi Sungkar';
// // // arr[1] = 'Galih';
// // // arr[2] = 'Nofa';

// // // console.log(arr);

// // // 2. menghapus isi Array
// // // var arr = ['Lutfi', 'Sungkar', 'Galih','Nofa'];
// // // arr[1] = undefined;
// // // console.log(arr);


// // // 3. menampilkan isi array
// // var arr = ['Lutfi', 'Sungkar', 'Galih'];

// // // for( var i = 0; i < 3; i++ ) {
// // //     // console.log(arr[i]);

// // //     console.log('Mahasiswa ke-' + (i+1) + ' : ' + arr[i]);
// // // }

// // for( var i = 0; i < arr.length; i++ ) {
// //     // console.log(arr[i]);
// //     console.log('Mahasiswa ke-' + (i+1) + ' : ' + arr[i]);
// // }


// // METHOD PADA ARRAY
// // 1.  join
// // var arr = ['Lutfi', 'Sungkar', 'Galih'];
// // console.log(arr.join(' - '));

// // 2. push & pop = ubah elemen akhir
// // var arr = ['Lutfi', 'Sungkar', 'Galih'];

// // arr.push('Doddy'); // nambah 1 elemen di akhir
// // arr.pop();; // hapus 1 elemen di akhir
// // console.log(arr.join(' - '));

// // 3. unshift & shift = ubah elemen di awal
// var arr = ['Lutfi', 'Sungkar', 'Galih'];

// // arr.unshift('Doddy'); // nambah
// // arr.shift('Doddy'); // hapus
// // console.log(arr.join(' - '));

// // 4. splice =  menghapus atau menambal di tengah.
// // spilce(indexAwal, mauDihapusBerapa, elemenBaru1, elemen2, ....)
// // var arr = ['Lutfi', 'Sungkar', 'Galih'];

// // arr.splice(2, 0, 'Doddy', 'Fitri');
// // console.log(arr.join(' - '));

// // arr.splice(1, 2,);
// // console.log(arr.join(' - '));

// // 5. slice = mengiris sebuah array jadi array yang baru.
// slice(awal,akhir);

// var arr = ['Lutfi', 'Sungkar', 'Galih','Nofa'];

// var arr2 = arr.slice(1,3);
// console.log(arr2.join(' - '))


