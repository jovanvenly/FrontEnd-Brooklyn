// console.log("Syncronous")

// console.log("baris 1")
// console.log("baris 2")
// console.log("baris 3")


// console.log("Asyncronous")

// console.log("baris 1")
// setTimeout(()=>{
//     console.log("Get data dari API")
//     setTimeout(()=>{
//         console.log("menggunkanan data yang didapatkan dari API")
//     },5000)

// },5000)
// console.log("baris 3")

console.log("Promise")
let condition =true
let newPromise= new Promise ((resolve, reject)=>{
    if (condition){
        resolve("Berhasil")
    }
    else{
        reject("Gagal")
    }
})
 
newPromise.then(result )=>{
    consol
}
