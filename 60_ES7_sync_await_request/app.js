class Request {
    async get(url) { // GET Request
        // return new Promise((resolve, reject) => {
        //     fetch(url)
        //         .then(response => response.json())
        //         .then(data => resolve(data))
        //         .catch(err => reject(err));
        // });
        const response = await fetch(url); // Response Object
        const data = await response.json();
        return data;
    }

    async post(url, data) {

        // return new Promise((resolve, reject) => {
        //     fetch(url, {
        //             method: 'POST',
        //             body: JSON.stringify(data),
        //             headers: {
        //                 "Content-type": "application/json; charset=UTF-8"
        //             }
        //         })
        //         .then(response => response.json())
        //         .then(json => resolve(json))
        //         .catch(err => reject(err));
        // });

        const response = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        }); // Response Object
        const res = await response.json();

        return res;

    }

    async put(url, data) {
        // return new Promise((resolve, reject) => {
        //     fetch(url, {
        //             method: 'PUT',
        //             body: JSON.stringify(data),
        //             headers: {
        //                 "Content-type": "application/json; charset=UTF-8"
        //             }
        //         })
        //         .then(response => response.json())
        //         .then(json => resolve(json))
        //         .catch(err => reject(err));
        // });

        const response = await fetch(url, {
            method: 'PUT',
            body: JSON.stringify(data),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        }); // Response Object

        const res = await response.json();

        return res;

    }

    async delete(url) {
        // return new Promise((resolve, reject) => {
        //     fetch(url, {
        //             method: 'DELETE'
        //         })
        //         .then((data) => resolve("Veri Silme işlemi başarılı"))
        //         .catch(err => reject(err));
        // });

        const response = await fetch(url, {
            method: 'DELETE'
        }); // Response Object

        return "Veri Silme İşlemi Başarılı";

        // const res = await response.json();

        // return res;

    }
}

const r = new Request();
// let albums;

// r.get("https://jsonplaceholder.typicode.com/albums")
//     .then(albums => console.log(albums))
//     .catch(err => console.log(err));

// console.log(albums);

// r.post("https://jsonplaceholder.typicode.com/albums", { userId: 1, title: "Tarkan - 10" })
//     .then(newAlbum => console.log(newAlbum))
//     .catch(err => console.log(err));

// r.put("https://jsonplaceholder.typicode.com/albums/1", {
//         userId: 10,
//         title: "Tarkan - Karma"
//     })
//     .then((data) => console.log(data))
//     .catch(err => console.log(err));

r.delete("https://jsonplaceholder.typicode.com/albums/1")
    .then(data => console.log(data))
    .catch(err => console.log(err));