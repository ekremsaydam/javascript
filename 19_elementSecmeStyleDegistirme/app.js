// const element = document.querySelector('#clear-todos');

// ELement Özellikleri

// console.log(element);
// console.log(element.id);
// console.log(element.className);
// console.log(element.classList);
// console.log(element.classList[1]);
// console.log(element.textContent);
// console.log(element.innerHTML);
// console.log(element.href);
// console.log(element.style);


// style ve element özelliklerini değiştirme

// element.className = "btn btn-primary";
// element.className = "btn btn-danger";
// element.className = "btn btn-warning";
// element.className = "btn btn-success";
// element.style.color = "red";
// element.style.color = "#000";
// element.style.margin = "55px";
// element.href = "https://www.google.com";
// element.target = "_blank";

// element.textContent = "Silin";
// element.textContent = "<span>Silin</span>";
// element.innerHTML = "<span style='color:green'>Silin</span>";

// console.log(element.textContent);

// const elements = document.querySelectorAll('.list-group-item');

// elements.forEach(function (el) {
//     el.style.color = "red";
//     el.style.background = "#eee";
// });

let element2 = document.querySelector("li:first-child");
element2 = document.querySelector("li:last-child");
element2 = document.querySelector("li:nth-child(2)");
element2 = document.querySelectorAll("li:nth-child(odd)"); // teklerin seçilmesi
element2 = document.querySelectorAll("li:nth-child(even)"); // çiftlerin seçilmesi
element2.forEach(function (el) {
    el.style.background = "#ccc";
    el.style.color = "red";
})


console.log(element2);