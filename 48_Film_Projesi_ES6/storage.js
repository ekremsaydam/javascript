// function Storage() {

// }

// Storage.prototype.addFilmToStorage = function(newFilm) {
//     // console.log(newFilm);
//     let films = this.getFilmsFromStorage();

//     films.push(newFilm);

//     localStorage.setItem("films", JSON.stringify(films));

// };

// Storage.prototype.getFilmsFromStorage = function() {
//     let films;

//     if (localStorage.getItem("films") === null) {
//         films = [];
//     } else {
//         films = JSON.parse(localStorage.getItem("films"));
//     }

//     return films;
// };

// Storage.prototype.deleteFilmFromStorage = function(deleteFilm) {
//     let films = this.getFilmsFromStorage();
//     films.forEach((film, index) => {
//         if (film.title == deleteFilm.title) {
//             films.splice(index, 1);
//         }
//     });

//     localStorage.setItem("films", JSON.stringify(films));
// };

// Storage.prototype.clearAllFilmsFromStorage = function() {
//     localStorage.removeItem("films");
// };

class Storage {
    static addFilmToStorage(newFilm) {
        // console.log(newFilm);
        let films = this.getFilmsFromStorage();

        films.push(newFilm);

        localStorage.setItem("films", JSON.stringify(films));

    }

    static getFilmsFromStorage() {
        let films;

        if (localStorage.getItem("films") === null) {
            films = [];
        } else {
            films = JSON.parse(localStorage.getItem("films"));
        }

        return films;
    }

    static deleteFilmFromStorage(deleteFilm) {
        let films = this.getFilmsFromStorage();
        films.forEach((film, index) => {
            if (film.title == deleteFilm.title) {
                films.splice(index, 1);
            }
        });

        localStorage.setItem("films", JSON.stringify(films));
    }

    static clearAllFilmsFromStorage() {
        localStorage.removeItem("films");
    }
}