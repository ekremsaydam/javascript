// Ajax, callback, http request

class Request {
    constructor() {
        this.xhr = new XMLHttpRequest();
    }

    //Get Request
    get(url,callback) {
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
                callback(null,this.xhr.responseText);
            } else {
                // hata durumuna girmemiz gerekiyor.
                callback("Herhangi bir hata oluştu", null);
            }
        };

        this.xhr.send();
    }
}

const request = new Request();
const albums = request.get("https://jsonplaceholder.typicode.com/albums/51", function (err,response) {
    if (err === null) {
        console.log(response);
    } else {
        console.log(err);
    }
});
// console.log(albums);