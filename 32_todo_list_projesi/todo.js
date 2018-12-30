//Tüm elementleri seçme
const form = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo");
const todoList = document.querySelector(".list-group");
const firstCardBody = document.querySelectorAll(".card-body")[0];
const secondCardBody = document.querySelectorAll(".card-body")[1];
const filter = document.querySelector("#filter");
const clearButton = document.querySelector("#clear-todos");

eventListeners();

function eventListeners() { // tüm eventListenerlar
    form.addEventListener("submit", addTodo);
    document.addEventListener("DOMContentLoaded", loadAllTodosToUI);
    secondCardBody.addEventListener("click", deleteTodo);
    filter.addEventListener("keyup", filterTodos);
    clearButton.addEventListener("click", clearAllTodos);

}

function clearAllTodos() {
    if (confirm("Tümünü silmek istediğinize emin misiniz?")) {
        // Todoları arayüzden kaldırma
        // todoList.innerHTML = ""; // Yavaş
        while (todoList.firstElementChild != null) {
            todoList.removeChild(todoList.firstElementChild);
        }

        localStorage.removeItem("todos");

        showAlert("success", "Todo List tamamen silindi.");
    }
}

function filterTodos(e) {
    // console.log(e.target.value);
    const filterValue = e.target.value.toLowerCase();
    const listItems = document.querySelectorAll(".list-group-item");
    listItems.forEach(function(listitem) {
        const text = listitem.textContent.toLocaleLowerCase();
        if (text.indexOf(filterValue) === -1) {
            listitem.setAttribute("style", "display:none !important");
        } else {
            listitem.setAttribute("style", "display:block");
        }
    });
}

function deleteTodo(e) {
    if (e.target.className === "fa fa-remove") { // Silme işlemi
        console.log("Silme işlemi");
        deleteTodoFromStorage(e.target.parentElement.parentElement.textContent);
        e.target.parentElement.parentElement.remove();
        showAlert("success", "Todo Başarı ile silindi.");
    }
    // console.log(e.target);
}

function deleteTodoFromStorage(deleteTodo) {
    let todos = getTodosFromStorage();
    todos.forEach(function(todo, index) {
        if (todo === deleteTodo) {
            todos.splice(index, 1); // arrayden bir element silmek
        }
    });

    localStorage.setItem("todos", JSON.stringify(todos));
}

function loadAllTodosToUI() {
    let todos = getTodosFromStorage();
    todos.forEach(function(todo) {
        addTodoUI(todo);
    });
}

function addTodo(e) {
    const newTodo = todoInput.value.trim(); // baştaki ve sonraki boşluklar silinir.
    if (newTodo === "") {
        // <div class="alert alert-danger" role="alert">
        //     This is a danger alert—check it out!
        // </div>
        showAlert("danger", "Lütfen Bir Todo girin.");
    } else {
        // console.log(newTodo);
        addTodoUI(newTodo);
        addTodoToStorage(newTodo);
        showAlert("success", "Başarıyla eklendi...");
    }

    e.preventDefault();
}

function addTodoUI(newTodo) { // String değerini listItem olarak UI a ekleyecek
    // <li class="list-group-item d-flex justify-content-between">
    //     Todo 1
    //     <a href = "#" class ="delete-item">
    //         <i class = "fa fa-remove"></i>
    //     </a>

    // </li >

    // List oluşturma
    const listItem = document.createElement("li");
    listItem.className = "list-group-item d-flex justify-content-between";

    // Link oluşturma
    const link = document.createElement("a");
    link.href = "#";
    link.className = "delete-item";
    link.innerHTML = '<i class = "fa fa-remove"></i>';

    // Text Node ekleme
    listItem.appendChild(document.createTextNode(newTodo));
    listItem.appendChild(link);

    todoList.appendChild(listItem);

    todoInput.value = "";

    // console.log(listItem);
}

function showAlert(type, message) {
    // <div class="alert alert-danger" role="alert">
    //     This is a danger alert—check it out!
    // </div>
    const alert = document.createElement("div");
    alert.className = `alert alert-${type}`;
    alert.setAttribute("role", "alert");
    alert.textContent = message;

    firstCardBody.appendChild(alert);

    // setTimeOut
    setTimeout(() => {
        alert.remove();
    }, 1000);

    // console.log(alert);

}

function addTodoToStorage(newTodo) {
    let todos = getTodosFromStorage();
    todos.push(newTodo);

    localStorage.setItem("todos", JSON.stringify(todos));

}

function getTodosFromStorage() {
    let todos;

    if (localStorage.getItem("todos") === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }

    return todos;
}