// Http Status
// 200 : OK
// 403 : Forbidden
// 404 : Not Found
// 505 : Internal Server console.error();

// readyState	Holds the status of the XMLHttpRequest.
// 0: request not initialized 
// 1: server connection established
// 2: request received 
// 3: processing request 
// 4: request finished and response is ready

document.getElementById("btn").addEventListener("click", function() {
    // XMLHttpRequest

    const xhr = new XMLHttpRequest();
    // console.log(xhr);
    // xhr.onreadystatechange = function () {
    //     // console.log(this.readyState);
    //     // console.log(this.status);
    //     if (this.status == 200 && this.readyState == 4) {
    //         // Response Hazır
    //         console.log(this.responseText);
    //     }
    // };
    xhr.onprogress = function () {
        // readystate 3 olduğunda çalışır.
        // console.log("Progress işleniyor.");
    };

    xhr.onload = function () {
        // readystate 4 olduğunda çalışır.
        // console.log(this.readyState);
        // console.log(this.status);
        if (this.status == 200) {
            // herhangi bir sorun olmadan veri alınmıştır.
            // console.log(this.responseText);
            document.getElementById("ajax").textContent = this.responseText;
        }
    };

    xhr.open("GET", "example.txt", true);

    xhr.send();




});