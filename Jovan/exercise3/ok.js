let person = [
    {
      name: "John",
      age: 35,
    },
    {
      name: "Bill",
      age: 23,
    },
    {
      name: "Bob",
      age: 17,
    },
    {
      name: "Jack",
      age: 20,
    },
  ];
  
    const nilai = (array = person.map(obj => obj.age));
    console.log("Program yang menampilkan umur termuda dan tertua");
    console.log("Umur: " + nilai);
    console.log("Muda: " + Math.min.apply(Math, nilai));
    console.log("Tua: " + Math.max.apply(Math, nilai));
