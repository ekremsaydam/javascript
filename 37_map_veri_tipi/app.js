// Mapler - Key(Anahtar) - Value(Değer)

// let myMap = new Map(); // Oluşturma

// console.log(typeof myMap);
// console.log(myMap);

// const key1 = "Zeki";
// const key2 = {
//     a: 10,
//     b: 20
// };

// const key3 = () => 2;
// // SET
// myMap.set(key1, "String değer");
// myMap.set(key2, "Object Literal Değer");
// myMap.set(key3, "Function Değer");

// // GET

// console.log(myMap.get(key1));
// console.log(myMap.get(key2));
// console.log(myMap.get(key3));

// console.log(myMap);

// // Map Boyutu

// console.log(myMap.size); // Map buyu

// const cities = new Map();

// cities.set("Ankara", 5);
// cities.set("İstanbul", 15);
// cities.set("İzmir", 4);

// For Each

// cities.forEach(function (value, key) {
//     console.log(key, value);
// });

// For of

// for (let [key, value] of cities) { // destructing
//     console.log(key, value);
// }

// map keys
// for (let key of cities.keys()) {
//     console.log(key);
// }

// Map values

// for (let value of cities.values()) {
//     console.log(value);
// }

// Arraylerden Map oluşturulur.
// const array = [["key1", "value1"], ["key2", "value2"]];

// const lastMap = new Map(array);

// console.log(lastMap);

//Maplerden array Oluşturma
const cities = new Map();

cities.set("Ankara", 5);
cities.set("İstanbul", 15);
cities.set("İzmir", 4);

const array = Array.from(cities);
// [["Ankara",5],["İstanbul",15],["İzmir",4]]
console.log(array);