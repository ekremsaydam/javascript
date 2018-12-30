const filterInput = document.getElementById("filter");


// filterInput.onfocus = function () {
//     console.log("Filter inputa adaklandık");
// }


// Kullanılması gereken
// filterInput.addEventListener("focus", function (e) {
//     // console.log("Filter Inputa odaklandık");
//     console.log(e);
//     console.log(e.type);
//     console.log(e.target);
//     console.log(e.target.placeholder);
//     console.log(e.target.className);
// });

const todoForm = document.getElementById("todo-form");

todoForm.addEventListener("submit", submitForm);

function submitForm(e) {
    console.log("Submit eventi");
    e.preventDefault(); // submit eventinin preventDefault özelliklerini iptal eder.
}

// console.log(filterInput);