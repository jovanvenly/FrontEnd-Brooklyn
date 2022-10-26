//pertemuan_6
let numbers = [9,5,4,8,12];

console.log("ForEach");
numbers.forEach(function(value,index,array){
    console.log("value :", value,"index : ",index,"array : ",array);
})

console.log("");
console.log("Map");
numbers.map(function(value,index,array){
    console.log("value :", value,"index : ",index,"array : ",array);
})

let output = numbers.map(function(value){
    return value +5;    
});
console.log("array numbers : ",numbers);
console.log("array output: ",output);
console.log("");

console.log("filter");
let filterArr = numbers.filter(function (item){
    return item > 5;
  });
  console.log("numbers",numbers);
  console.log("filter",filterArr);
  