// prototypeni başka bir objeden almak istiyorsak Object.create kullanılır.
// const obj = {
//     test1: function () {
//         console.log("Test 1");
//     },
//     test2: function () {
//         console.log("Test 2");
//     }
// }

// console.log(obj);

// const emp = Object.create(obj);
// emp.name = "Zeki";
// emp.age = 30;
// console.log(emp);

function Person() {

}

Person.prototype.test1 = function() {
    console.log("Test1");
}
Person.prototype.test2 = function() {
    console.log("Test2");
}

// const person = new Person();
// console.log(person);

function Employee(name, age) {
    this.name = name;
    this.age = age;
}

// console.log(Employee);
Employee.prototype = Object.create(Person.prototype);
Employee.prototype.mytest = function () {
    console.log("MyTest");
}

const emp = new Employee("Zeki", 25);

console.log(emp);
// emp.test1();

