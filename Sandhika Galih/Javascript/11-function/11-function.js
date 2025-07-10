// membuat user-defined function
// 1. function declaration
// 2. function expression

// 1. FUNCTION DECLARATION
// ( keyword   nama function   paramater)
function jumlahDuaBilangan(a, b) {
    var total;
    total = a + b;  // function body

    return total; // return value
}

// 2. FUNCTION EXPRESSION
var jumlahDuaBilangan = function(a, b) {
    var total;
    total = a + b;

    return total;
}

// MEMANGGIL FUNCTION
//      nama function(parameter)
alert(jumlahDuaBilangan(1,2));
alert(jumlahDuaBilangan(25,30));
alert(jumlahDuaBilangan(1500,17.5));