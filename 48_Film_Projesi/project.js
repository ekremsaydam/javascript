const form = document.getElementById("film-form");
const titleElement = document.querySelector("#title");
const directorElement = document.querySelector("#director");
const urlElement = document.querySelector("#url");
const secondCardBody = document.querySelectorAll(".card-body")[1];
const clear = document.getElementById("clear-films");


// UI Objecsini Başlat
const ui = new UI();

// Storage Objesi üret
const storage = new Storage();

// Tüm evenleri yükle

eventListeners();

function eventListeners() {
    form.addEventListener("submit", addFilm);
    document.addEventListener("DOMContentLoaded", function() {
        let films = storage.getFilmsFromStorage();
        ui.loadAllFilms(films);
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
        ui.displayMessage("Tüm alanları doldurmalısınız.", "danger")
    } else {
        // Hatasız ise
        // Yeni film
        const newFilm = new Film(title, director, url);
        ui.addFilmToUI(newFilm); // Arayüze film eklemek
        storage.addFilmToStorage(newFilm); // Storage ye film ekleme
        ui.displayMessage("Film Başarı ile eklendi", "success");
        ui.clearInputs(titleElement, urlElement, directorElement);
    }

    e.preventDefault();
}

function deleteFilm(e) {
    if (e.target.id == "delete-film") {
        ui.deleteFilmFromUI(e.target);
        ui.displayMessage("Silme İşlemi Başarılı", "success");
    }

    e.preventDefault();
}

function clearAllFilms() {
    if (confirm("Emin misiniz?")) {
        ui.clearAllFilmsFromUI();
        storage.clearAllFilmsFromStorage();
        ui.displayMessage("Bütün filmler başarı ile silindi", "success");
    }
}