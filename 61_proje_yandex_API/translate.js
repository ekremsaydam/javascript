function Translate(word, language) {
    this.apikey = "trnsl.1.1.20190106T103410Z.35af45efb23e0d0a.4b4a496dfe79f64e3bc069ccd78ce3db2ffa6795";
    this.word = word;
    this.language = language;

    // XHR objesi
    this.xhr = new XMLHttpRequest();
}

Translate.prototype.translateWord = function(callback) {
    // Arrow Functionlarla yapılamaz. Arraw function bind(this) eklediği için kullanılamamaktadır.
    // AJAX işlemleri
    //https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20190106T103410Z.35af45efb23e0d0a.4b4a496dfe79f64e3bc069ccd78ce3db2ffa6795&text=nas%C4%B1ls%C4%B1n%C4%B1z&lang=az
    const endPoint = `https://translate.yandex.net/api/v1.5/tr.json/translate?key=${this.apikey}&text=${this.word}&lang=${this.language}`;

    this.xhr.open("GET", endPoint, true);

    this.xhr.onload = () => {
        if (this.xhr.status == 200) {
            // console.log(JSON.parse(this.xhr.responseText).text[0]);
            const json = JSON.parse(this.xhr.responseText);
            const text = json.text[0];
            // console.log(text);
            callback(null,text);
        } else {
            callback("Hata oluştu.",null);
        }
    };

    this.xhr.send();

}