class Request {
    get(url) { // GET Request
        return new Promise((resolve, reject) => {
            fetch(url)
            .then(response => response.json())
            .then(data => resolve(data))
            .catch(err => reject(err));
        })
        
    }
}

const r = new Request();
let albums;

r.get("https://jsonplaceholder.typicode.com/albums")
    .then(albums => console.log(albums))
    .catch(err => console.log(err));

// console.log(albums);