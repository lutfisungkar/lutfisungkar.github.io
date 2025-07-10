 // variabel untuk nampung sebuah data di JS bisa 2 hal: const atau let
const nama = "Lutfi Sungkar"; // CONST : NILAI TIDAK BISA BERUBAH
let usia = 80 ; // LET : NILAINYA BISA DIUBAH

let biodata = document.getElementById('biodata'); // declare

function generateBiodata() {
    let generasi;

    if (usia > 10 && usia <= 20) {
        generasi = 'generasi remaja';

    } else if (usia > 20 &&  usia < 60) {
        generasi = 'generasi dewasa';  
    } else if (usia > 60 ) {
        generasi = 'generasi lanjut usia';
    } else {
        // INI ADALAH JIKA KONDISI TIDAK TERPENUHI atau FALSE   
        generasi = 'generasi anak-anak';    
    }

    return biodata.innerHTML = generasi; // mengisi innerHTML yg kosong dengan ...
}

console.log(nama);
console.log(usia);

generateBiodata();
