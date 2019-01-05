class Request {
    get(url) { // GET Request
        return new Promise((resolve, reject) => {
            fetch(url)
                .then(response => response.json())
                .then(data => resolve(data))
                .catch(err => reject(err));
        });

    }

    post(url, data) {
        
        return new Promise((resolve, reject) => {
            fetch(url, {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                }
            })
                .then(response => response.json())
                .then(json => resolve(json))
                .catch(err => reject(err));
        });
        
    }
}

const r = new Request();
// let albums;

// r.get("https://jsonplaceholder.typicode.com/albums")
//     .then(albums => console.log(albums))
//     .catch(err => console.log(err));

// console.log(albums);

r.post("https://jsonplaceholder.typicode.com/albums", { userId: 1, title: "Tarkan - 10" })
    .then(newAlbum => console.log(newAlbum))
    .catch(err => console.log(err));