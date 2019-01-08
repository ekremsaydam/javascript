// module.exports.test1 = function test1() {
//     console.log('Test1');
// };


// module.exports.test2 = function test2() {
//     console.log('Test2');
// };

// module.exports = {
//     name: 'Zeki',
//     test1: function () {
//         console.log('Test1');
//     },
//     person: {
//         name: 'Zeki',
//         mail: 'kosarzeki@mail.com'
//     }
// };

export const name = 'Zeki';
export function test() {
    console.log('Test Fonksiyonu');
}

export class Person {
    static test() {
        console.log('Static Person Test');
    }
}

export const employee = {
    name: 'Zeki',
    salary: 4000
};

// export default class Deneme {
//     static deneme() {
//         console.log('Default export');
//     }
// }
export class Deneme {
    static deneme() {
        console.log('Default export');
    }
}

const denemeVal = 'Deneme Değeri';

export default denemeVal;