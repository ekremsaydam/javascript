// Call Back Function

// const langs = ["Python", "Java", "c++"];

// langs.forEach(function (lang) {
//     console.log(lang);
// });

// document.getElementById("btn").addEventListener("click", function () {
//     console.log("Tıklandı");
// });

// function process1(callback) {
//     setTimeout(function() {
//         console.log("process1");
//         callback();
//     }, 3000);

    
// }

// function process2() {
//     setTimeout(function() {
//         console.log("process2");
//     }, 2000);
// }

// process1(process2);
// // process2();

// console.log("Burası önce çalışır.");

const langs = ["Python", "Java", "c++"];

function addLang(lang,callback) {
    setTimeout(function () {
        langs.push(lang);
        console.log("Eklendi");
        callback();
    }, 2000);
}

function getAllLangs() {
    setTimeout(function () {
        langs.forEach(function (lang) {
            console.log(lang);
        });
    }, 1000);
}

addLang("Javascript", getAllLangs);
// getAllLangs(); // Asenkron