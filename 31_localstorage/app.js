// localstorage
// Browser kapatılsa dahi depolama alanından silinmez.

// SetItem
// localStorage.setItem("hareket", "burpee");
// localStorage.setItem("tekrar", 50); // number bir değer yazsak bile string değer olarak yazılır.

// var value = localStorage.getItem("tekrar");
// console.log(value);
// console.log(typeof value);

// localStorage.clear();

// console.log(localStorage.getItem("sport")); // anahtar yoksa null döndürür.

// if (localStorage.getItem("hareket") === null) {
//     console.log("sorgulanan key localstorage de bulunmamaktadır.")
// } else {
//     console.log("Bulunuyor.");
// }

// Localstorage - Array Yazmak
// const todos = ["Todo 1", "Todo 2", "Todo 3"];

// localStorage.setItem("todos", todos);

// console.log(typeof localStorage.getItem("todos"));

// localStorage.setItem("todos", JSON.stringify(todos));

// const value = localStorage.getItem("todos");
// console.log(typeof JSON.parse(value));

const form = document.getElementById("todo-form");
const todoInput = document.getElementById("todo");

form.addEventListener("submit", addTodo);

function addTodo(e) {
    const value = todoInput.value;
    console.log(value);
    let todos;
    if (localStorage.getItem("todos") === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }

    todos.push(value);

    localStorage.setItem("todos", JSON.stringify(todos));

    e.preventDefault();
}