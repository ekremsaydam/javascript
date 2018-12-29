// Yeni Element Oluşturma
//<a id="clear-todos" class="btn btn-dark" href="#">Tüm Taskları Temizleyin</a>

const newLink = document.createElement("a");
const cardBody = document.getElementsByClassName("card-body")[1];

newLink.id = "clear-todos";
newLink.className = "btn btn-danger";
newLink.href = "https://www.google.com";
newLink.target = "_blank";
// newLink.textContent = "Farklı sayfaya git";

// Text textContent
// cardBody.textContent = "sfsdf";

// Text node

// const text = document.createTextNode("Naber");

// cardBody.appendChild(text);

newLink.appendChild(document.createTextNode("Farklı Sayfaya Git"));
cardBody.appendChild(newLink);




console.log(cardBody);
console.log(newLink);
