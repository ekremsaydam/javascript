// Event Bubbling
// elementin içindeki farklı bir elemente de tıklandığında tetiklenme olayına kabarcıklama (bubbling) denir.
// document.querySelector(".container").addEventListener("click", (e) => {
//     console.log("Div container");
// });

// document.querySelector(".card.row").addEventListener("click", (e) => {
//     console.log("Card Row");
// });

// document.querySelector(".card-body").addEventListener("click", (e) => {
//     console.log("Card Body");
// });


// Event capturing veya Delegation

const cardBody = document.querySelectorAll(".card-body")[1];

cardBody.addEventListener("click", run);

function run(e) {
    // console.log("Tıklandı");
    // console.log(e.target);
    if (e.target.className === "fa fa-remove") {
        console.log("Silme İşlemi");
    }
    if (e.target.id === "filter") {
        console.log("Filtreleme işlemi");
    }
    if (e.target.id === "clear-todos") {
        console.log("Tüm taskları silme işlemi");
    }

    // console.log(e.target);
}

