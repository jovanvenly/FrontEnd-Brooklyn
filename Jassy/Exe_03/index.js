let person=[
    {
        name: "Bill",
        age : 23,
    },    {
        name : "John",
        age : 35,
    },

    {
        name : "Bob",
        age : 17,
    },
    {
        name : "Jack",
        age : 20,
    },
];
for(let i=0; i<person.length; i++)
{
    console.log(person[i]);
}

// //Menggunakan Maximum dan Minimum

// console.log("Menggunakan Maximum dan Minium")
// let max = Math.max(...person.map(person => person.age));
// let tertua = person.filter(person => person.age == max);

// let min = Math.min(...person.map(person => person.age));
// let termuda = person.filter(person => person.age == min);

// console.log(tertua);
// console.log(termuda);

// //Menggunakan Sort dan Filter

// console.log("Menggunakan Sort dan Filter")
// person = person.sort(function(a, b) {
//     return a.age - b.age;
// })

// let youngest  = person.filter(function(item){ 
//   return item.age == person[0].age ;
// })  

// let oldest = person.filter(function(item){ 
//   return item.age == person[person.length - 1].age ;
// })  
// // console.log("Oldest");
// console.log("OLDEST", oldest);
// // console.log("Youngest");
// console.log("YOUNGEST", youngest);
// ;

let max= person[0]
let min= person[0]

for(let i=0; i<person.length; i++){
    if(person[i].age>max.age){
        max=person[i];
    }
    if(person[i].age<min.age){
        min=person[i];
    }
}
console.log("paling tua : ", max.name);
console.log("paling muda : ", min.name);
