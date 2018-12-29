// Elementi Id ye Göre Seçme
let element = document.getElementById("todo-form");
element = document.getElementById("tasks-title");

// Element Class'a Göre Seçme
element = document.getElementsByClassName("list-group-item")[0];
element = document.getElementsByClassName("card-header");
element = document.getElementsByClassName("card-header");

// Element Tag'e Göre Seçme
element = document.getElementsByTagName("li");
element = document.getElementsByTagName("div");

// Query Selector - Css Selector 
// Tek bir element döndürür. ilk bulduğu elementi döndürür
element = document.querySelector("#todo-form");
element = document.querySelector("#tasks-title");
element = document.querySelector(".list-group-item");
element = document.querySelector("li");
element = document.querySelector("div");

// querySelectorAll - Tüm elementleri Seç
element = document.querySelectorAll(".list-group-item");
element.forEach(function (el) {
    console.log(el);
});



console.log(element);