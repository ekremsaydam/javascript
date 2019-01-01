// console.log(this); // Global Scope

// const emp1 = { // Object Literal
//     name: "Zeki",
//     age: 25,
//     showInfors: function() { console.log("Bilgiler gösteriliyor."); }
// };

// const emp2 = {
//     name: "Mehmet",
//     age: 35
// }

// emp1.salary = 4000;
// emp1.showInfors();
// console.log(emp1);

// function Employee() { // Yapıcı Fonksiyon Constructor
//     this.name = "Zeki";
// }
// const date = new Date();
// const date2 = new Date();

// const emp1 = new Employee();
// const emp2 = new Employee();
// console.log(emp1);
// console.log(emp2);

function Employee(name, age, salary) { // Yapıcı Fonksiyon Constructor
    this.name = name;
    this.age = age;
    this.salary = salary;

    // console.log(this);

    this.showInfos = function() {
        console.log(this.name, this.age, this.salary);
    }
}

const emp1 = new Employee("Zeki", 25, 4000);
const emp2 = new Employee("Mehmet", 35, 5000);

emp1.showInfos();
emp2.showInfos();

// console.log(emp1);
// console.log(emp2);
