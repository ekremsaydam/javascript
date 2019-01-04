document.getElementById("change").addEventListener("click", change);

function change() {
    const xhr = new XMLHttpRequest();

    // xhr.open("GET", "https://api.exchangeratesapi.io/latest", true);
    xhr.open("GET", "https://api.exchangeratesapi.io/latest"); // default true

    xhr.onload = function () {
        if (this.status == 200) {
            // console.log(this.responseText);
            const response = JSON.parse(this.responseText);
            const rate = response.rates.TRY;
            const amount = Number(document.getElementById("amount").value);

            console.log(typeof response.rates.TRY);
            // console.log(amount * rate);
            document.getElementById("tl").value = amount * rate;
        }
    };
    xhr.send();
}