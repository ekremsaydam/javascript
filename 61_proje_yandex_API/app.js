// Prototype, ajax, callback
eventListeners();

function eventListeners() {
    document.getElementById("translate-form").addEventListener("submit", translateWord);
    document.getElementById("language").onchange = function() {
        // Arayüz işlemleri
    }
}
const translate = new Translate(document.getElementById("word").value, document.getElementById("language").value);

function translateWord(e) {
    translate.changeParameters(document.getElementById("word").value, document.getElementById("language").value);

    translate.translateWord(function(err, res) {
        // if (err != null) {
        if (err) {
            console.log(err);
        } else {
            console.log(res);
        }
    });

    e.preventDefault();
}

Translate.prototype.changeParameters = function(newWord, newLanguage) {
    this.word = newWord;
    this.language = newLanguage;
}