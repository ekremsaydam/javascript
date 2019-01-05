// async function test(data) {
//     // Promise return new Promise
//     // return data;
//     // return new Promise((resolve, reject) => {
//     //     resolve(data);
//     // });

//     let promise = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("Bu bir değerdir.");
//         }, 5000);
//     });

//     let response = await promise;// 5 saniye bekleyecek
//     // console.log(response);
//     // console.log("Devamı");

//     return response;

// }

// test("Merhaba").then(response => console.log(response)); 
// test("Merhaba").then(response => console.log(response));


async function testData(data) {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof data == "string") {
                resolve(data);
            } else {
                reject(new Error("Lütfen string bir değer giriniz"));
            }
        }, 2000);
    });

    const response = await promise;

    return response;
}


testData(1)
    .then(data => console.log(data))
    .catch(err => console.error(err));