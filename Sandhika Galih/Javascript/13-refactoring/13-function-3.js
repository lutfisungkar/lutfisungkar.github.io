// BENTUK FUNCTION

// function jumlahVolumeDuaKubus(a, b) {
//     var volumeA;
//     var volumeB;
//     var total;

//     volumeA = a * a * a;
//     volumeB = b * b * b;
    
//     total = volumeA + volumeB;

//     return total;
// }

// console.log(jumlahVolumeDuaKubus(8, 3));


// bentuk REFACTORING

function jumlahVolumeDuaKubus(a, b) {
    
    return  a * a * a + b * b * b;  // variabel volumeA, volumeB & total dihapus
}

alert(jumlahVolumeDuaKubus(8, 3));
