// Kalıtım - Inheritance

function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.showInfo = function () {
    console.log("isim " + this.name + " yaş : " + this.age);
}

// const person = new Person("Zeki", 35);

// console.log(person);

function Employee(name, age, salary) {
    // this.name = name;
    // this.age = age;
    Person.call(this, name, age); // inheritance - üst objenin constructor
    this.salary = salary;
    
}

Employee.prototype = Object.create(Person.prototype);
Employee.prototype.toString = function () {
    console.log("Employee");
};

// Overriding 
Employee.prototype.showInfo = function () {
    console.log("İsim : " + this.name + " yaş : " + this.age + " maaş : " + this.salary);
}

const emp = new Employee("Zeki", 35, 4000);
// emp.showInfo();
// console.log(emp.toString());
// emp.toString();

console.log(emp);


