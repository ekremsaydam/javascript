// Dinamik element silme

const todoList = document.querySelector("ul.list-group");
const todos = document.querySelectorAll("li.list-group-item");

// Remove Metodu

todos[1].remove();

// todoList.removeChild(todoList.lastElementChild);
// todoList.removeChild(todos[todos.length - 1]);

console.log(todoList);