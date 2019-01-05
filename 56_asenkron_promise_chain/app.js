function getData(data) { //promise Objesi döndüren fonksion
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            // resolve("Olumlu sonuç");
            // reject("Olumsuz sonuç");
            if (typeof data == "string") {
                resolve("Gelen Değer : " + data);
            } else {
                reject(new Error("Lütfen string bir değer giriniz."));
            }
        }, 2000);
    });
}

// console.log(getData("Merhaba"));
getData(1).then(function(response) {
    console.log(response);
}).catch(function(err) {
    console.error(err);
});