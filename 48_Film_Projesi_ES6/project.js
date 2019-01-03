const form = document.getElementById("film-form");
const titleElement = document.querySelector("#title");
const directorElement = document.querySelector("#director");
const urlElement = document.querySelector("#url");
const secondCardBody = document.querySelectorAll(".card-body")[1];
const clear = document.getElementById("clear-films");


// UI Objecsini Başlat
// const ui = new UI();

// Storage Objesi üret
// const storage = new Storage();

// Tüm evenleri yükle

eventListeners();

function eventListeners() {
    form.addEventListener("submit", addFilm);
    document.addEventListener("DOMContentLoaded", function() {
        let films = Storage.getFilmsFromStorage();
        UI.loadAllFilms(films);
    });
    secondCardBody.addEventListener("click", deleteFilm);
    clear.addEventListener("click", clearAllFilms)
}

function addFilm(e) {
    const title = titleElement.value;
    const director = directorElement.value;
    const url = urlElement.value;

    if (title === "" || director === "" || url === "") {
        // Hata
        UI.displayMessage("Tüm alanları doldurmalısınız.", "danger")
    } else {
        // Hatasız ise
        // Yeni film
        const newFilm = new Film(title, director, url);
        UI.addFilmToUI(newFilm); // Arayüze film eklemek
        Storage.addFilmToStorage(newFilm); // Storage ye film ekleme
        UI.displayMessage("Film Başarı ile eklendi", "success");
        UI.clearInputs(titleElement, urlElement, directorElement);
    }

    e.preventDefault();
}

function deleteFilm(e) {
    if (e.target.id == "delete-film") {
        UI.deleteFilmFromUI(e.target);
        UI.displayMessage("Silme İşlemi Başarılı", "success");
    }

    e.preventDefault();
}

function clearAllFilms() {
    if (confirm("Emin misiniz?")) {
        UI.clearAllFilmsFromUI();
        Storage.clearAllFilmsFromStorage();
        UI.displayMessage("Bütün filmler başarı ile silindi", "success");
    }
}