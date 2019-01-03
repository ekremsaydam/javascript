// function Person(name,age) {
//     this.name = name;
//     this.age = age;
// }

// Person.prototype.showInfos = function () {
//     console.log("İsim : " + this.name + " Yaş : " + this.age);
// }

// function Employee(name, age, salary) {
//     Person.call(name, age);
//     this.salary = salary;
// }

// Employee.prototype = Object.create(Person.prototype);
// Employee.prototype.toString = function () {
//     console.log("Employee");
// };

// Employee.prototype.showInfos = function () {
//     console.log("İsim : " + this.name + " Yaş : " + this.age + " Maaş : " + this.salary);
// }

// const emp = new Employee("Zeki", 35, 4000);

class Person { // super class yada base class 
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    showInfos() {
        console.log("İsim : " + this.name + " Yaş : " + this.age);
    }
}

class Employee extends Person { // DrivedClass, SubClass, ChildClass
    constructor(name, age, salary) {
        // this.name = name;
        // this.age = age;
        // super.name = name;
        // super.age = age;
        super(name, age);
        this.salary = salary;
    }

    showInfos() { // Overriding
        console.log("İsim : " + this.name + " Yaş : " + this.age + " Maaş : " + this.salary);
    }

    toString() { // Overriding
        console.log("Employee");
    }

    raiseSalary(amount) { // Ekstra
        // this.salary = this.salary + amount;
        this.salary += amount;
    }
}

const emp = new Employee("Veli", 25, 4000);
// console.log(emp);
emp.showInfos();
emp.toString();