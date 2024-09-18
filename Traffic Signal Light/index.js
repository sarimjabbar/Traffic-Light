let red = document.querySelector("#signalred")
let yellow = document.querySelector("#signalyellow")
let green = document.querySelector("#signalgreen")

setTimeout(() => {
    red.style.backgroundColor = "red"
}, 1000);

setTimeout(() => {
    red.style.backgroundColor = "red"
    yellow.style.backgroundColor = "yellow"

}, 3000);

setTimeout(() => {
    green.style.backgroundColor = "green"
}, 4000);