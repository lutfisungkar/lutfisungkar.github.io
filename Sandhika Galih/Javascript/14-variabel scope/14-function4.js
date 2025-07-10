// global scope / window scope
// var a = 1;


// function tes() {
//     var b = 2;
//     console.log(a); // di dalam function bisa akses varibel global

// }

// tes();
// console.log(b); // tidak akan muncul. krn di luar function kita gk bisa akses varibel yg di dalem atau local

// CONTOH-2


var a = 1;

function tes() {
    // name conflict : varibel yg namnya sama pada 2 scope yang berbeda
    var a = 2;
    console.log(a);
    // console.log(window.a); // untuk akses yg variabel window (luar scope)
}

tes();