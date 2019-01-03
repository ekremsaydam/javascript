// function UI() {

// }

// UI.prototype.addFilmToUI = function (newFilm) {
//     // console.log(newFilm);
//     /*
//         <!-- <tr>
//                 <td><img src="" class="img-fluid img-thumbnail"></td>
//                 <td></td>
//                 <td></td>
//                 <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
//             </tr> -->
//     */


//     const filmList = document.getElementById("films");
//     filmList.innerHTML += `
//     <tr>
//         <td><img src="${newFilm.url}" class="img-fluid img-thumbnail"></td>
//         <td>${newFilm.title}</td>
//         <td>${newFilm.director}</td>
//         <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
//     </tr>
//     `;
//     // console.log(filmList);
// };

// UI.prototype.clearInputs = function (element1, element2, element3) {
//     element1.value = "";
//     element2.value = "";
//     element3.value = "";
// };

// UI.prototype.displayMessage = function (message, type) {
//     /*
//         <div class="alert alert-danger" role="alert">
//             This is a danger alert—check it out!
//         </div>
//     */
//     const cardBody = document.querySelectorAll(".card-body")[0];
//     const alert = document.createElement("div");
//     alert.className = `alert alert-${type}`;
//     alert.setAttribute("role", "alert");
//     alert.textContent = message;

//     // console.log(alert);

//     cardBody.appendChild(alert);

//     setTimeout(function () {
//         alert.remove();
//     }, 1500);
// };

// UI.prototype.loadAllFilms = function (films) {
//     films.forEach((value) => {
//         this.addFilmToUI(value);
//     });
// };

// UI.prototype.deleteFilmFromUI = function (element) {
//     // console.log(element);
//     let filmTr = element.parentElement.parentElement.querySelectorAll("td");
//     let deleteFilm = new Film(filmTr[1].textContent, filmTr[2].textContent, filmTr[0].querySelector("img").src);
//     storage.deleteFilmFromStorage(deleteFilm);
//     element.parentElement.parentElement.remove();
//     console.log(deleteFilm);
// };

// UI.prototype.clearAllFilmsFromUI = function () {
//     const filmList = document.getElementById("films");
//     //filmlist.innerHTML = "";
//     while (filmList.firstElementChild !== null) {
//         filmList.firstElementChild.remove();
//     }
// }


class UI {
    static addFilmToUI(newFilm) {
        const filmList = document.getElementById("films");
        filmList.innerHTML += `
            <tr>
                <td><img src="${newFilm.url}" class="img-fluid img-thumbnail"></td>
                <td>${newFilm.title}</td>
                <td>${newFilm.director}</td>
                <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
            </tr>
            `;
    }

    static clearInputs(element1, element2, element3) {
        element1.value = "";
        element2.value = "";
        element3.value = "";
    }

    static displayMessage(message, type) {
        /*
            <div class="alert alert-danger" role="alert">
                This is a danger alert—check it out!
            </div>
        */
        const cardBody = document.querySelectorAll(".card-body")[0];
        const alert = document.createElement("div");
        alert.className = `alert alert-${type}`;
        alert.setAttribute("role", "alert");
        alert.textContent = message;

        // console.log(alert);

        cardBody.appendChild(alert);

        setTimeout(function() {
            alert.remove();
        }, 1500);
    }

    static loadAllFilms(films) {
        films.forEach((value) => {
            this.addFilmToUI(value);
        });
    }

    static deleteFilmFromUI(element) {
        // console.log(element);
        let filmTr = element.parentElement.parentElement.querySelectorAll("td");
        let deleteFilm = new Film(filmTr[1].textContent, filmTr[2].textContent, filmTr[0].querySelector("img").src);
        Storage.deleteFilmFromStorage(deleteFilm);
        element.parentElement.parentElement.remove();
        console.log(deleteFilm);
    }

    static clearAllFilmsFromUI() {
        const filmList = document.getElementById("films");
        //filmlist.innerHTML = "";
        while (filmList.firstElementChild !== null) {
            filmList.firstElementChild.remove();
        }
    }
}