// Setler Arraylere benzer ancak farkı bir değeri sadece bir defa taşır.

const myset = new Set();

myset.add(100);
myset.add(100);
myset.add(3.14);
myset.add(true);
myset.add("Zeki");
myset.add([1, 2, 3]);
myset.add({ a: 1, b: 2 });

// console.log(myset);

// const myset2 = new Set([100, 3.14, "Zeki"]);

// console.log(myset2);

// set size
// console.log(myset.size);

// set delete metodu

// myset.delete("Zeki");
// console.log(myset);

// Has metodu

// console.log(myset.has("Zeki"));
// console.log(myset.has(3.14));
// console.log(myset.has(2000));
// console.log(myset.has([1, 2, 3])); // false verirlir. Aynı array olmasına rağmen referansları farklı olduğu için false değeri olarak ekrana çıktı verir.

// For each

// myset.forEach(function (value) {
//     console.log(value);
// });

// for (let value of myset) {
//     console.log(value);
// }

// Setlerden Array oluşturma
const array = Array.from(myset);
console.log(array);