const todoInput = document.getElementById("todo");

let element;
element = todoInput;
element = todoInput.classList;
// todoInput.className = "form-control newClass";
// todoInput.classList.add("newClass");
// todoInput.classList.add("newClass2");
// todoInput.classList.remove("form-control");

element = todoInput.placeholder;
element = todoInput.getAttribute("placeholder");
todoInput.setAttribute("placeholder", "Naber");
todoInput.setAttribute("title", "Input");

element = todoInput;
element = todoInput.hasAttribute("name");
element = todoInput.hasAttribute("required");
todoInput.removeAttribute("name");

element = todoInput;

console.log(element);