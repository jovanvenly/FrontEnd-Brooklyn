//Rest parameter
console.log("Rest parameter")
    const bar = (param1, param2,param3,... params)=>{
        console.log(param1);
        console.log(param2);
        console.log(param3);
        console.log(params);
    }
    bar("A", "B", "C", "D", "E", "F")
    console.log(bar)



//Spread operator
console.log("Spread operator")
   console.log("Spread operator")
   console.log("Spread operator")
   let array1=["a","b","c"]
   let array2=[2,3,4,]
   let array3=["X",...array1,"Y"]
   
   let array4=[...array1,...array2,...array3]
   console.log(array4)

//Destructuring
console.log("Destructuring")
let [namaLengkap,,noRegis,jurusan,tingkat]=["wilmore italilpessy","105011910026",,"Sistem Informasi",4]
console.log(namaLengkap)
console.log(noRegis)
console.log(jurusan)
console.log(tingkat)