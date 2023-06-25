const body = document.querySelector("body");
const audio = document.getElementById("audio");
const input = document.getElementById("music-sessions");

audio.onplay = function() {
    console.log(input.value)
}

input.onchange = function() {
    if (input.value === "PesoPluma") {
        body.style.backgroundImage = "url('/resources/portadas-bzrp/pesopluma.jpg')";
        audio.src = "resources/Bizarap ft Peso Pluma – Bzrp Music Sessions, Vol. 55.mp3";
        audio.play(); 
    } else if (input.value === "Rauw") {
        body.style.backgroundImage = "url('/resources/portadas-bzrp/rauw2.jpg')";
        audio.src = "resources/Bizarap ft Rauw Alejandro – Bzrp Music Sessions, Vol. 56.mp3"; 
        audio.play();
    }
}

