var buttonVerliefd = document.getElementById('button_verliefd');
var buttonHinkel = document.getElementById('button_hinkel');
var buttonDansje = document.getElementById('button_dansje');
var video = document.getElementById('video');


buttonVerliefd.addEventListener('click', speelVerliefd);
buttonHinkel.addEventListener('click', speelHinkel);
buttonDansje.addEventListener('click', speelDansje);

function speelVerliefd() {
    video.src = "img/videos/verliefd.mp4";
    console.log('run verliefd');
}

function speelHinkel() {
    video.src = "img/videos/hinkel.mp4";
    console.log('run hinkel');
}

function speelDansje() {
    video.src = "img/videos/dansje.mp4";
    console.log('run dansje');
}