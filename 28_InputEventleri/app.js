const filter = document.getElementById("filter");
// console.log(filter);

// document.addEventListener("DOMContentLoaded", load); // sayfa yüklenmesi bittiğinde tetiklenir.

// function load(e) {
//     console.log("Sayfa yüklendi");
// }

// Focus
// filter.addEventListener("focus", run); // odaklandığımızda tetiklenir.
// filter.addEventListener("blur", run); // odaktan çıktıktan sonra tetiklenir.

// Paste
filter.addEventListener("paste", run); // ctrl+v yada paste(yapıştır) yapıltığında tetiklenir.

// Copy event
filter.addEventListener("copy", run); // ctrl+c yada copy(kopyala) yapıldığında tetiklenir.

// Cut event
filter.addEventListener("cut", run); //ctrl+x yada cut(kes) yapıldığında tetiklenir.

// select
filter.addEventListener("select", run); // select (seçme) işlemi yapıldığında tetiklenir.




function run(e) {
    console.log(e.type);
}