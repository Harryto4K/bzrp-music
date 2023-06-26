const body = document.querySelector("body");
const audio = document.getElementById("audio");
const input = document.getElementById("music-sessions");
const title = document.getElementById("title");
const video = document.getElementById("video");

const musicSessions = ["resources/Bizarap ft Peso Pluma – Bzrp Music Sessions, Vol. 55.mp3", "resources/Bizarap ft Rauw Alejandro – Bzrp Music Sessions, Vol. 56.mp3"];
const musicSessions2 = ["url('/resources/portadas-bzrp/pesopluma.jpg')", "url('/resources/portadas-bzrp/rauw2.jpg')"];
const musicSessions3 = ["PesoPluma", "Rauw"];
const musicSessions4 = ["PESO PLUMA || BZRP Music Sessions #55", "RAUW ALEJANDRO || BZRP Music Sessions #56"];
const videoSessions = ["/resources/videos-bzrp/pesopluma.mp4", "/resources/videos-bzrp/rauw.mp4"];

audio.onplay = function() {
    console.log(input.value)
}

input.onchange = function() {
    if (input.value === "PesoPluma") {
        body.style.backgroundImage = "url('/resources/portadas-bzrp/pesopluma.jpg')";
        audio.src = "resources/Bizarap ft Peso Pluma – Bzrp Music Sessions, Vol. 55.mp3";
        title.innerHTML = "PESO PLUMA || BZRP Music Sessions #55";
        video.src = "/resources/videos-bzrp/pesopluma.mp4";
        audio.play(); 
    } else if (input.value === "Rauw") {
        body.style.backgroundImage = "url('/resources/portadas-bzrp/rauw2.jpg')";
        audio.src = "resources/Bizarap ft Rauw Alejandro – Bzrp Music Sessions, Vol. 56.mp3"; 
        title.innerHTML = "RAUW ALEJANDRO || BZRP Music Sessions #56";
        video.src = "/resources/videos-bzrp/rauw.mp4";
        audio.play();
    }
}

audio.onended = function() {
    let randomSession = Math.floor(Math.random() * (musicSessions.length)); 
    console.log(randomSession);
    audio.src = musicSessions[randomSession]; 
    body.style.backgroundImage = musicSessions2[randomSession];
    input.value = musicSessions3[randomSession];
    title.innerHTML = musicSessions4[randomSession]; 
    video.src = videoSessions[randomSession];
    console.log(audio.src);
    audio.play();
}
