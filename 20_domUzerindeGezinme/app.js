let value;
const todoList = document.querySelector(".list-group");
const todo = document.querySelector(".list-group-item:nth-child(2)");

const cardrow = document.querySelector(".card.row");

value = cardrow;

// Child Nodes

value = todoList.childNodes;    // boşluklarda alınır..
value = todoList.childNodes[0];

// Children

value = todoList.children; // sadece alt elementler
value = todoList.children[todoList.children.length - 1];

value = todoList.children[2].textContent = "Değişti";

value = cardrow;
value = cardrow.children;
value = cardrow.children[2].children;
value = cardrow.children[2].children[1].textContent = "Burasıda değişti";

value = todoList;
value = todoList.children[0];
value = todoList.firstElementChild;
value = todoList.lastElementChild;
value = todoList.children.length;
value = todoList.childElementCount;


value = cardrow;
value = cardrow.parentElement;
value = cardrow.parentElement.parentElement;


value = todo;
value = todo.previousElementSibling;
value = todo.nextElementSibling.nextElementSibling;

value = todo.previousElementSibling.previousElementSibling; // onceki kardeş yoksa null gelir.

console.log(value);