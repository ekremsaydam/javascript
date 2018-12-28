let value;

const programmer = {
    name: 'Ali veli',
    age: 25,
    email: 'aliveli@mail.com',
    langs: ['Python', 'Java', 'Javascript'],
    address: {
        city: 'Ankara',
        street: 'Bahçelievler'
    },
    work: function() {
        console.log('Programcı çalışıyor.');
    }
}

value = programmer;

value = programmer.email;

value = programmer['email'];

value = programmer.langs;

value = programmer.address.city;

programmer.work();

const programmers = [{
        name: 'Ali Veli',
        age: 25
    },
    { name: 'oğuz', age: 25 }
];

value = programmers[0].name;

console.log(value);