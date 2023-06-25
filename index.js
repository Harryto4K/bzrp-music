const body = document.querySelector("body");
const audio = document.getElementById("audio");
const input = document.getElementById("music-sessions");

audio.onplay = function() {
    console.log(input.value)
}

input.onchange = function() {
    if (input.value === "PesoPluma") {
        body.style.backgroundImage = "url('/resources/portadas-bzrp/pesopluma.jpg')";
    } else if (input.value === "Rauw") {
        body.style.backgroundImage = "url('/resources/portadas-bzrp/rauw2.jpg')";
    }
}

