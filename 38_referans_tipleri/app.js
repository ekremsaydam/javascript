// primitive types
// let a = "Zeki";
// let b = "Ali";

// if (a === b) {
//     console.log("Eşit");
// } 

// let array1 = [1, 2, 3, 4, 5];
// let array2 = [1, 2, 3, 4, 5];
// if (array1 === array2) { // referans tiplerinde bellekte aynı adresi gösterip göstermediği karşılaştırır.
//     console.log("Eşittir");
// }

// const person1 = {
//     name: "zeki",
//     ager: 25
// };

// const person2 = {
//     name: "zeki",
//     ager: 25
// };

// if(person1 === person2) {
//     console.log("Eşittir.");
// }

const cities = new Map();
cities.set("Ankara", 5);
cities.set("İstanbul", 15);
cities.set([1, 2, 3], "Array");


console.log(cities.get("Ankara"));
console.log(cities.get([1, 2, 3])); // undefined değeri alınır. o zaman key bir değişken üzerinden hareket edilir. Referans tip olduğu için sorgulandığında farklı bir bellek adresinde oluşacağından dolayı maplerde undefined olarak dönüş değeri alır.
const key = [5, 6, 7]; 
cities.set(key, "Array");

console.log(cities.get(key));