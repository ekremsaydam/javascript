let value;
const numbers = [43, 56, 33, 23, 44, 35, 5];
// const numbers2 = new Array(1, 2, 3, 4, 5, 6, 7);
const langs = ['Python', 'Java', 'C++', 'Javascript'];

const a = ['Merhaba', 22, null, undefined, 3.14];

value = numbers.length;

value = numbers[0];
value = numbers[2];
value = numbers[numbers.length - 1];

//herhangi bir indexteki değeri değiştirme

numbers[2] = 1000;
value = numbers;

// indexOf

value = numbers.indexOf(1000);

// arrayın sonuna değer eklemek

numbers.push(2000);

numbers.unshift(3000);
value = numbers;
// sondan değer atmak

value = numbers.pop();

// value = numbers;

value = numbers.shift();
value = numbers;

// belli bir kısmını atmak
value.splice(0, 3);

// reverse
numbers.reverse();

value = numbers.sort();

value = numbers.sort(function (x, y) {
    return y - x;
});



console.log(value);