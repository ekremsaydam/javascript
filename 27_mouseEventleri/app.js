const cardBody = document.querySelectorAll(".card-body")[1];
const title = document.querySelector("#tasks-title");

// title.addEventListener("click", run);
// title.addEventListener("dblclick", run);
// title.addEventListener("mousedown", run);
// title.addEventListener("mouseup", run);
// title.addEventListener("mouseover", run);
// title.addEventListener("mouseout", run);

// cardBody.addEventListener("mouseover", run); // elementin içinde farklı elemenrler varsa tekrar tekrar oluşur.

// cardBody.addEventListener("mouseout", run); // elementin içinde farklı elementler var ise tekrar tekrar event tetiklenir.

// Mouse enter ve Mouse Leave
cardBody.addEventListener("mouseenter", run); // elementin altında farklı elementler olsa dahi tek bir defa tetiklenir.
cardBody.addEventListener("mouseleave", run); // elementin altında farklı elementler olsa dahi tek bir defa tetiklenir.

function run(e) {
    console.log(e.type); // click event
}

console.log(cardBody);
console.log(title);