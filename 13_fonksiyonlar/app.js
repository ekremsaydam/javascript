// fonksiyon tanımlama

// function merhaba(name='Bilgi yok', age='bilgi yok') {
//     // if (typeof name === "undefined") name = 'Bilgi yok';
//     // if (typeof age === "undefined") age = 'Bilgi yok';
//     console.log(`İsim: ${name} Yaş: ${age}`);
// }

// merhaba("Murat",25);
// merhaba("Ayşe", 30);
// merhaba();
// merhaba('Kadir');


// function square(x) {
//     return x * x;

//     console.log('Naber');
// }

// function cube(x) {
//     return x * x * x;
// }

// // let a = square(12);
// // a = cube(a);

// // console.log(a);

// let a = cube(square(12));
// console.log(a);

// function merhaba() {
//     return 'Merhaba';
// }

// console.log(merhaba());

// function expression

// const merhaba = function (name) {
//     console.log('Merhaba '+ name);
// }

// merhaba('Ali');

// console.log(typeof merhaba());

// immediaately Invoke function expression (IIFE)

// (function (name) {
//     console.log('Merhaba ' + name);
// })('Ali');

const database = {
    host: 'localhost',
    add: function () {
        console.log('eklendi');
    },
    get: function () {
        console.log('elde edildi');
    },
    update: function (id) {
        console.log(`Id: ${id} güncellendi`);
    },
    delete: function (id) {
        console.log(`Id: ${id} silindi`);
    }
}

console.log(database.host);
database.add();
database.delete(10);
database.update(11);


