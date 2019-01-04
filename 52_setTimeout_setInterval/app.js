// Set Tİmeout 
// console.log(this); // Window.setTimeout & Window.setInterval

// setTimeout(function() {
//     console.log("Merhaba");
// }, 5000);

// Set setInterval
// let i = 0;
// setInterval(function () {
//     i++;
//     console.log(i);
// }, 1000);

// clearInterval
let i = 0;
let value = setInterval(function() {
    i++;
    console.log(i);
}, 1000);

document.getElementById("btn").addEventListener("click", function () {
    clearInterval(value);
    console.log("Durduruldu");
});