// Klavye Eventleri

// Keypress
// document.addEventListener("keypress", (e) => {
//     // keypress harfler ve diper tuşlar kabul edilir. Yön tuşları etkilemez. Ins,Del,Tab etkilenmez.
//     console.log("Bir uşa basıldı");
//     console.log(e.which); // ASCII karakter karşılığını verir.
//     console.log(e.key);
// });

// keydown
// document.addEventListener("keydown", (e) => {
//     // bütün tuşlar bu event tarafından tuşa basıldığında tetiklenir.
//     // home end gel yön tuşlarıda dahildir.
//     console.log("Bir Tuşa Basıldı.");
//     console.log(e.which);
//     console.log(e.key);
// });

// keyup
// document.addEventListener("keyup", (e) => {
//     // tuş bırakıldığında tetiklenir. del,int,home, del ve yön tuşlarıda tetiklenir.
//     console.log("Bir tuş bırakıldı");
//     console.log(e.which);
//     console.log(e.key);
// });

const cardHeader = document.querySelector(".card-header");
const todoInput = document.querySelector("#todo");

todoInput.addEventListener("keyup", (e) => {
    cardHeader.textContent = e.target.value;
    // console.log(e.target.value);
});


