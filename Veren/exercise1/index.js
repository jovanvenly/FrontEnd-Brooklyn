//concat javascript string
let jovan = "Nama cewe ku acha"
let nope = " okayy siap"

let asu = jovan.concat(nope);

console.log(asu)

//includes 
let tex = "Hello world, welcome to the universe.";
let result = tex.includes("Hello");

console.log (result)

//length javascript string

let oyeahbaby = "hello beybehhh" ;
let length = oyeahbaby.length;

console.log(length)


//split = memisahkan kata
let text = "apakabar dirimu beybehhh";
const  myArray = text.split (" ");
console.log(myArray) 

// split = memisahkan kata dan mengambil 1 kata

// let text = "aku padamu selalu amin uhuyyy";
// const myArray = text.split(" ");
// let word = myArray[4];

// console.log(word)

//slice javascript string
const fruits = ["gak", "sayang", "kamu", "karna", "jelek"];
const loveyou = fruits.slice(1, 3);

console.log(loveyou)

//substring javascript string
//mengekstrak karakter antara 2 indeks(posisi), dari string dan mengembalikan substring
//tidak mengubah string asli

//contoh ekstrak substring dari teks
let katakan = "hai guyss!!";
let hasil = katakan.substring(1, 6);
console.log (hasil)

//toLowerCase javascript string
let katakehidupan = "KAMU ANAK PINTAR";
let siyap = katakehidupan.toLowerCase();

console.log(siyap)

//toUpperCase javascript string
let katakebaikan = "kamu anak baik sekali bro";
let naise = katakebaikan.toUpperCase()
;
console.log(naise)

//trim javascript string
//1. hapus spasi menggunakan trim():
let hiyap = "       Wdew Kelass bruhh       ";
let rslt = hiyap.trim();
console.log(rslt)

//ValueOF javascript string
//mengembalikan nilai primitif dari sebuah string
//tidak mengubah string asli, digunakan mengubah objek string menjadi string

let yoss = "uraaa uraaa";
let kesimpulan = yoss.valueOf();
console.log(kesimpulan)