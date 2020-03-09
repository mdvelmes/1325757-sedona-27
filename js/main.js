// var button = document.querySelector(".search-button");
// var popup = document.querySelector(".modal");

// button.addEventListener("click", function(evt) {
//     evt.preventDefault();

//     if (popup.classList.contains('modal-visible')) {
//         popup.classList.remove("modal-visible")
//     } else {
//         popup.classList.add("modal-visible")
//     }
// });

var button = document.querySelector(".search-button");
var popup = document.querySelector(".modal");

var form = popup.querySelector("form");
var arrivalDate = popup.querySelector("[name=arrival-date]");
var departureDate = popup.querySelector("[name=departure-date]");
var adults = popup.querySelector("[name=adults]");
var kids = popup.querySelector("[name=kids]");

button.addEventListener("click", function(evt) {
    evt.preventDefault();

    popup.classList.toggle("modal-invisible");
    popup.classList.remove("modal-error");
});

form.addEventListener("submit", function(evt) {
    if (!arrivalDate.value || !departureDate.value) {
        evt.preventDefault();

        popup.classList.remove("modal-error");
        popup.offsetWidth = popup.offsetWidth;
        popup.classList.add("modal-error");
    } else {
        console.log("fuckOFF");
    }
});