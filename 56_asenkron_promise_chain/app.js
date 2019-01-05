// function getData(data) { //promise Objesi döndüren fonksion
//     return new Promise(function(resolve, reject) {
//         setTimeout(function() {
//             // resolve("Olumlu sonuç");
//             // reject("Olumsuz sonuç");
//             if (typeof data == "string") {
//                 resolve("Gelen Değer : " + data);
//             } else {
//                 reject(new Error("Lütfen string bir değer giriniz."));
//             }
//         }, 2000);
//     });
// }

// // console.log(getData("Merhaba"));
// // getData(1).then(function(response) {
// //     console.log(response);
// // }).catch(function(err) {
// //     console.error(err);
// // });

// getData(1)
//     .then((res) => console.log(res))
//     .catch((err) => console.error(err));

function addTwo(number) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof number == "number") {
                resolve(number + 2);
            } else {
                reject(new Error("Lütfen bir sayı giriniz."));
            }
        }, 3000);
    });
}

addTwo("10")
    .then(response => {
        console.log(response);
        return response + 2;
    }).then((response2) => console.log(response2))
    .catch((err) => console.error(err)); // Yanlızca bir tane catch birden çok then kullanılabilir.
// Birden çok then - Promise Chain

addTwo(10);