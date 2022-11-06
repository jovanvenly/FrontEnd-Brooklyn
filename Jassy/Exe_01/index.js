//Concat
let matematika = ["perkalian","pengurangan","pembagian"];
let bahasaInggris = ["verb1","verb2","verb3"];
let sejarah = ["penjajahan","perang"];

let tugas = matematika.concat(bahasaInggris, sejarah);

console.log(tugas);

//includes
let includes1 = "Latihan menggunakan Includes"
let latihan1= includes1.includes("Latihan")
let latihan2= includes1.includes("latihan",1)
console.log(latihan1)
console.log(latihan2)

//length
console.log(matematika.length);
console.log(bahasaInggris.length);
console.log(sejarah.length)

//split
let split1 = "latihan menggunakan split"
const lsplit1 = split1.split("menggunakan")
const lsplit2 = split1.split(" ")
console.log(lsplit1)
console.log(lsplit2)


//slice
let materi = ["perkalian","pengurangan", "pembagian", "verb1", "verb2","verb3", "penjajahan","perang"];
let tugasMenghitung = materi.slice (1, 2);
let tugasTeori = materi.slice (3,8);
console.log(tugasMenghitung);

//substring
let substring1 = "Latihan Menggunakan Substring"
let lsubstring1 = substring1.substring(0,7)
console.log(lsubstring1)

//lowerCase
let lowerUper = "Latihan menggunakan Lower dan Uper Case"
let tolower1 =lowerUper.toLocaleLowerCase()
console.log(tolower1)

//uperCase
let toUper1= lowerUper.toUpperCase()
console.log(toUper1)

//trim
let trim1 = "   latihan menggunakan trim        "
let ltrim1 = trim1.trim()
console.log(ltrim1)

//valueOf

let valueOf1 = "Latihan Menggunakan ValueOf"
let lvalueOf1 =valueOf1.valueOf()
console.log(lvalueOf1)