// Prototype, ajax, callback
eventListeners();

function eventListeners() {
    document.getElementById("translate-form").addEventListener("submit", translateWord);
    document.getElementById("language").onchange = function () {
        // console.log("event");
        // Arayüz işlemleri
        ui.changeUI();
    }
}
const translate = new Translate(document.getElementById("word").value, document.getElementById("language").value);
const ui = new UI();

function translateWord(e) {
    translate.changeParameters(document.getElementById("word").value, document.getElementById("language").value);

    translate.translateWord(function(err, res) {
        // if (err != null) {
        if (err) {
            console.log(err);
        } else {
            ui.displayTranslate(res);
        }
    });

    e.preventDefault();
}

Translate.prototype.changeParameters = function(newWord, newLanguage) {
    this.word = newWord;
    this.language = newLanguage;
}