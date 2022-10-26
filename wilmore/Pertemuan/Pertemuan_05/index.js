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
