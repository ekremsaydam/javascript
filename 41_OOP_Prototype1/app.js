// const object = new Object();// Object literal
// const object2 = new Object();
// object.name = "Mustafa"; 

// console.log(object);

function Employee(name, age) {
    this.name = name;
    this.age = age;

    this.showInfos = function () {
        console.log("İsim : " + this.name + " Yaş: " + this.age);
    }

    this.toString = function () {
        return "Bu bir employee";
    }
}
// Prototype chain -> Prototype zinciri
const emp1 = new Employee("Mustafa", 25);

console.log(emp1.toString());

console.log(emp1);