// const object = new Object();// Object literal
// const object2 = new Object();
// object.name = "Mustafa"; 

// console.log(object);

function Employee(name, age) {
    this.name = name;
    this.age = age;
    // showInfos bu metot birden fazla oluşturulduğunda her obje için ayrı ayrı oluşturulur.
    // bunu engellemek için tek prototype yazılarak tek metot oluşturulur. bellekte yer kaplamaz.
    // this.showInfos = function () {
    //     console.log("İsim : " + this.name + " Yaş: " + this.age);
    // } 

    this.toString = function() {
        return "Bu bir employee";
    }
}

Employee.prototype.showInfos = function() {
    console.log("İsim : " + this.name + " Yaş: " + this.age);
}

// Prototype chain -> Prototype zinciri
const emp1 = new Employee("Mustafa", 25);
const emp2 = new Employee("Zeki", 35);

emp2.showInfos();
console.log(emp1);
console.log(emp2);
// console.log(emp1.toString());

// console.log(emp1);