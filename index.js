const body = document.querySelector("body");
const audio = document.getElementById("audio");
const input = document.getElementById("music-sessions");
const title = document.getElementById("title");
const video = document.getElementById("video");
const icon = document.querySelector("link[rel~='icon']"); 

const musicSessions = ["resources/Bizarap ft Peso Pluma – Bzrp Music Sessions, Vol. 55.mp3", "resources/Bizarap ft Rauw Alejandro – Bzrp Music Sessions, Vol. 56.mp3", "resources/audios-bzrp/Bizarap ft Arcangel – Bzrp Music Sessions (Vol. 54).mp3", "resources/audios-bzrp/Bizarap ft Shakira – Bzrp Music Sessions, Vol. 53.mp3", "resources/audios-bzrp/duki.mp3", "resources/audios-bzrp/quevedo.mp3", "resources/audios-bzrp/villanoantillano.mp3",
"resources/audios-bzrp/paulolondra.mp3", "resources/audios-bzrp/residente.mp3"];
const musicSessions2 = ["url('resources/portadas-bzrp/pesopluma.jpg')", "url('resources/portadas-bzrp/rauw2.jpg')", "url('resources/portadas-bzrp/arcangel.jpg')", "url('resources/portadas-bzrp/shakira.jpg')", "url('resources/portadas-bzrp/duki.jpg')", "url('resources/portadas-bzrp/quevedo.jpg')", "url('resources/portadas-bzrp/villanoantillano.jpg')", 
"url('resources/portadas-bzrp/paulolondra.jpg')", "url('resources/portadas-bzrp/residente.jpg')"];
const musicSessions3 = ["PesoPluma", "Rauw", "Arcangel", "Shakira", "Duki", "Quevedo", "VillanoAntillano", "PauloLondra", "Residente"];
const musicSessions4 = ["PESO PLUMA || BZRP Music Sessions #55", "RAUW ALEJANDRO || BZRP Music Sessions #56", "ARCANGEL || BZRP Music Sessions #54", "SHAKIRA || BZRP Music Sessions #53", "DUKI || BZRP Music Sessions #50", "QUEVEDO || BZRP Music Sessions #52", "VILLANO ANTILLANO || BZRP Music Sessions #51", 
"PAULO LONDRA || BZRP Music Sessions #23", "RESIDENTE || BZRP Music Sessions #49"];
const videoSessions = ["resources/videos-bzrp/pesopluma.mp4", "resources/videos-bzrp/rauw.mp4", "resources/videos-bzrp/arcangel.mp4", "resources/videos-bzrp/shakira.mp4", "resources/videos-bzrp/duki.mp4", "resources/videos-bzrp/quevedo.mp4", "resources/videos-bzrp/villanoantillano.mp4", "resources/videos-bzrp/paulolondra.mp4", "resources/videos-bzrp/residente.mp4"];
const iconosSessions = ["resources/iconos-bzrp/pesopluma.jpg", "resources/portadas-bzrp/rauw.jpg", "resources/iconos-bzrp/arcangel.jpg", "resources/iconos-bzrp/shakira.jpg", "resources/iconos-bzrp/duki.jpg", "resources/iconos-bzrp/quevedo.jpg", "resources/iconos-bzrp/villanoantillano.jpg", "resources/iconos-bzrp/paulolondra.jpg", "resources/iconos-bzrp/residente2.jpg"];

audio.onplay = function() {
    console.log(input.value);
}

input.onchange = function() {
    switch (input.value) {
        case "PesoPluma":
            body.style.backgroundImage = "url('resources/portadas-bzrp/pesopluma.jpg')";
            audio.src = "resources/Bizarap ft Peso Pluma – Bzrp Music Sessions, Vol. 55.mp3";
            title.innerHTML = "PESO PLUMA || BZRP Music Sessions #55";
            video.src = "resources/videos-bzrp/pesopluma.mp4";
            icon.href = "resources/iconos-bzrp/pesopluma.jpg";
            audio.play(); 
            break;
        case "Rauw":
            body.style.backgroundImage = "url('resources/portadas-bzrp/rauw2.jpg')";
            audio.src = "resources/Bizarap ft Rauw Alejandro – Bzrp Music Sessions, Vol. 56.mp3"; 
            title.innerHTML = "RAUW ALEJANDRO || BZRP Music Sessions #56";
            video.src = "resources/videos-bzrp/rauw.mp4";
            icon.href = "resources/portadas-bzrp/rauw.jpg";
            audio.play();
            break;
        case "Arcangel":
            body.style.backgroundImage = "url('resources/portadas-bzrp/arcangel.jpg')";
            audio.src = "resources/audios-bzrp/Bizarap ft Arcangel – Bzrp Music Sessions (Vol. 54).mp3";
            title.innerHTML = "ARCANGEL || BZRP Music Sessions #54";
            video.src = "resources/videos-bzrp/arcangel.mp4";
            icon.href = "resources/iconos-bzrp/arcangel.jpg";
            audio.play();
            break;
        case "Shakira":
            body.style.backgroundImage = "url('resources/portadas-bzrp/shakira.jpg')";
            audio.src = "resources/audios-bzrp/Bizarap ft Shakira – Bzrp Music Sessions, Vol. 53.mp3";
            title.innerHTML = "SHAKIRA || BZRP Music Sessions #53";
            video.src = "resources/videos-bzrp/shakira.mp4";
            icon.href = "resources/iconos-bzrp/shakira.jpg";
            audio.play();
            break;
        case "Duki":
            body.style.backgroundImage = "url('resources/portadas-bzrp/duki.jpg')";
            audio.src = "resources/audios-bzrp/duki.mp3";
            title.innerHTML = "DUKI || BZRP Music Sessions #50";
            video.src = "resources/videos-bzrp/duki.mp4";
            icon.href = "resources/iconos-bzrp/duki.jpg";
            audio.play();
            break;
        case "Quevedo":
            body.style.backgroundImage = "url('resources/portadas-bzrp/quevedo.jpg')";
            audio.src = "resources/audios-bzrp/quevedo.mp3";
            title.innerHTML = "QUEVEDO || BZRP Music Sessions #52";
            video.src = "resources/videos-bzrp/quevedo.mp4";
            icon.href = "resources/iconos-bzrp/quevedo.jpg";
            audio.play();
            break;
        case "VillanoAntillano":
            body.style.backgroundImage = "url('resources/portadas-bzrp/villanoantillano.jpg')";
            audio.src = "resources/audios-bzrp/villanoantillano.mp3";
            title.innerHTML = "VILLANO ANTILLANO || BZRP Music Sessions #51";
            video.src = "resources/videos-bzrp/villanoantillano.mp4";
            icon.href = "resources/iconos-bzrp/villanoantillano.jpg";
            audio.play();
            break;
        case "PauloLondra":
            body.style.backgroundImage = "url('resources/portadas-bzrp/paulolondra.jpg')";
            audio.src = "resources/audios-bzrp/paulolondra.mp3";
            title.innerHTML = "PAULO LONDRA || BZRP Music Sessions #23";
            video.src = "resources/videos-bzrp/paulolondra.mp4";
            icon.href = "resources/iconos-bzrp/paulolondra.jpg";
            audio.play();
            break;
        case "Residente":
            body.style.backgroundImage = "url('resources/portadas-bzrp/residente.jpg')";
            audio.src = "resources/audios-bzrp/residente.mp3";
            title.innerHTML = "RESIDENTE || BZRP Music Sessions #49";
            video.src = "resources/videos-bzrp/residente.mp4";
            icon.href = "resources/iconos-bzrp/residente2.jpg";
            audio.play();
            break;
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
    icon.href = iconosSessions[randomSession]; 
    audio.play();
}
