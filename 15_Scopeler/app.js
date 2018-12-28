// // Scope Kavramı

// // Global scope

// function a() {
//     // function scope
// }

// // Blok scope
// if (condition) {
//     // block scope
// }

// var value1 = 10;
// let value2 = 20;
// const value3 = 30;

// function Func() {
//     var value1 = 40;
//     let value2 = 50;
//     const value3 = 60;

//     console.log(value1, value2, value3);
// }

// Func();

// if (true) {
//     var value1 = 40;
//     let value2 = 50;
//     const value3 = 60;
//     console.log(value1, value2, value3);
// }

// console.log(a);
// console.log(b);
// console.log(c);

// console.log(value1, value2, value3);

let database = "123456";

if (true) {
    let database = "789";
    console.log(window.database)
}

// console.log(database);