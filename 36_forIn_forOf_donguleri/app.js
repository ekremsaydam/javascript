const person = {
    name: "Ali Veli",
    age: 25,
    salary: 3000
}

const langs = ["Python", "Java", "C++", "Php"];

const name = "Mustafa";

// For in
// Object
// for (let prop in person) {
//     console.log(person[prop]);
// }

// Array
// for (let index in langs) {
//     console.log(langs[index]);
// }

// String
// for (let index in name) {
//     console.log(name[index]);
// }

// for (let value of person) {
//     console.log(value); //HATA: obje üzerinde for of kullanılmaz.
// }

for (let value of langs) {
    console.log(value); // değerlere direk ulaşılır.
}

for (let karakter of name) {
    console.log(karakter);
}