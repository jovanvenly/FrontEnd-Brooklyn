//Concat
let tconcat1 = "Halo "
let tconcat2 = "Dunia"
let hasil1 = tconcat1.concat(tconcat2);
console.log(hasil1)

let tconcat3 = "Latihan"
let tconcat4 = "Concat"
let hasil2 = tconcat3.concat(" ",tconcat4," Javascript")
console.log(hasil2)

//Includes
let tincludes1 = "Latihan Includes JavaScript"
let hasil3 = tincludes1.includes("Latihan")
let hasil4 = tincludes1.includes("latihan",1)
console.log(hasil3)
console.log(hasil4)

//Length
let tlength1 = "Latihan Length Javascipt"
let hasil5 = tlength1.length
console.log(hasil5)

//Split
let tsplit = "Latihan Split JavaScript Kelas Front-End"
const hasil6 = tsplit.split("JavaScript")
const hasil7 = tsplit.split(" ")
console.log(hasil6)
console.log(hasil7)

//Slice
const tslice = ["Latihan", "Slice", "JavaScript"]
const hasil8 = tslice.slice(1,2)
console.log(hasil8)

//Substring
let tsubstring = "Latihan Substring JavaScript"
let hasil9 = tsubstring.substring(8,17)
console.log(hasil9)

//toLowerCase
let tLowerUp = "Latihan LowerCase dan UpperCase JavaScript"
let hasil10 = tLowerUp.toLowerCase()
console.log(hasil10)
//toUpperCase
let hasil11= tLowerUp.toUpperCase()
console.log(hasil11)

//Trim
let tTrim = "     Latihan Trim JavaScript                       "
let hasil12 = tTrim.trim()
console.log(hasil12)

//ValueOf
let tValueOf = "Latihan ValueOf JavaScript"
let hasil13 = tValueOf.valueOf()
console.log(hasil13)