// no 1
function helloWorld(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=> {
            resolve("Hello World");
        }, 2000)
    })
}
const messages = async() => {
    const msg = await helloWorld();
    console.log(msg);
}
messages();
//2.Fetch

function getUserData(){
    fetch("https://reqres.in/api/users").then((response) => {return response.json();}).then((users) => console.log(users.data));
}
    getUserData();

// 3.async await

const dataFetch = async () => {
    const dF = await fetch("https://reqres.in/api/users").then((response) => {return response.json();});
    console.log(dF.data)
}
dataFetch();

// no 4

class orang {
    constructor(nama,umur) {
        this.nama = nama;
        this.umur = umur;
    }

    bekerja(){
        console.log(`${this.nama} sedang bekerja seperti biasa.`)
    }
}