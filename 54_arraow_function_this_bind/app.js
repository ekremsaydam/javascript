// const person = {
//     age: 25,
//     telAge: function() {
//         // this - Person
//         // console.log(this);
//         console.log(this);
//         console.log(this.age);

//     }.bind(this)
// }


// person.telAge();

const person = {
    age: 25,
    tellAge: () => {
        console.log(this);
        console.log(this.age);
    }
} // arrow function kullanıyorsa this farklı objeleri gösterir.

person.tellAge();