// Ajax, callback, http request

class Request {
    constructor() {
        this.xhr = new XMLHttpRequest();
    }

    //Get Request
    get(url, callback) {
        this.xhr.open("GET", url);
        // const temp = this; // ilkel yöntem

        // this.xhr.onload = function () {
        //     console.log(this);
        //     // if (this.status === 200) {
        //     //     console.log(this.responseText);
        //     // }
        //      if (this.xhr.status === 200) {
        //         console.log(this.xhr.responseText);
        //     }
        // }.bind(this);

        this.xhr.onload = () => {
            // console.log(this);
            // if (this.status === 200) {
            //     console.log(this.responseText);
            // }
            if (this.xhr.status === 200) {
                // console.log(this.xhr.responseText);
                callback(null, this.xhr.responseText);
            } else {
                // hata durumuna girmemiz gerekiyor.
                callback("GET Request : Hata oluştu.", null);
            }
        };

        this.xhr.send();
    }
    post(url, data, callback) {
        this.xhr.open("POST", url);
        this.xhr.setRequestHeader("Content-type", "application/json"); // JSON verisi

        this.xhr.onload = function() {
            if (this.status == 201) {
                // Başarılı
                callback(null, this.responseText);
            } else {
                callback("POST Request : Hata oluştu.", null);
            }
        };

        this.xhr.send(JSON.stringify(data));
    }

    put(url, data, callback) {
        this.xhr.open("PUT", url);
        this.xhr.setRequestHeader("Content-type", "application/json"); // JSON verisi

        this.xhr.onload = function() {
            if (this.status == 200) {
                // Başarılı
                callback(null, this.responseText);
            } else {
                callback("PUT Request : Hata oluştu.", null);
            }
        };

        this.xhr.send(JSON.stringify(data));
    }
}

// const request = new Request();
// const albums = request.get("https://jsonplaceholder.typicode.com/albums/51", function (err,response) {
//     if (err === null) {
//         console.log(response);
//     } else {
//         console.log(err);
//     }
// });
// console.log(albums);

// const request = new Request();
// const data = {
//     "userId": 2,
//     "title": "Bilinmeyen",
//     "body": "Bilinmeyen"
// };
// request.post("https://jsonplaceholder.typicode.com/albumsasd", data, function(err, album) {
//     if (err == null) {
//         console.log(album);
//     } else {
//         console.log(err);
//     }
// });

const request = new Request();
request.put("https://jsonplaceholder.typicode.com/albums/10", {
        userId: 143,
        title: "Tarkan - Karma",
    },
    function(err, album) {
        if (err == null) {
            console.log(album);
        } else {
            console.log(err);
        }
    }
);