let songIndex = 0;
let audioElement = new Audio("songs/0.mp3");
let masterElement = document.getElementById("master-btn");
let progressBar = document.getElementById("myprogressBar");
let playlistItem = Array.from(document.getElementsByClassName("playlist-item"));



let song = [
    { songName: "gana no 1", songLocation: "songs/0.mp3", songCover: "covers/1.jpg" },
    { songName: "gana no 2", songLocation: "songs/0.mp3", songCover: "covers/2.jpg" },
    { songName: "gana 3", songLocation: "songs/0.mp3", songCover: "covers/3.jpg" },
    { songName: "gana 4", songLocation: "songs/0.mp3", songCover: "covers/4.jpg" },
    { songName: "gana 35e", songLocation: "songs/0.mp3", songCover: "covers/5.jpg" },
    { songName: "mgana 325", songLocation: "songs/0.mp3", songCover: "covers/6.jpg" },
    { songName: "gana 314", songLocation: "songs/0.mp3", songCover: "covers/7.jpg" },
    { songName: "gana 30258", songLocation: "songs/0.mp3", songCover: "covers/8.webp" },
    { songName: "gana 31478", songLocation: "songs/0.mp3", songCover: "covers/9.jpg" }
]

playlistItem.forEach((element, i) => {
    element.getElementsByClassName("item-img")[0].src = song[i].songCover;
    element.getElementsByClassName("song-name")[0].innerText = song[i].songName;

})


masterElement.addEventListener("click", () => {
    if (audioElement.paused || audioElement.duration <= 0) {
        audioElement.play();
        masterElement.setAttribute('src', "circle-pause-regular.svg");
    } else {
        audioElement.pause();
        masterElement.setAttribute('src', "circle-play-regular.svg");
    }
})

audioElement.addEventListener('timeupdate', () => {
    console.log("timeupdate");
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    progressBar.value = progress;
});
progressBar.addEventListener('change', () => {
    audioElement.currentTime = progressBar.value * audioElement.duration / 100;
});

const makeAllPlay = () => {
    Array.from(document.getElementsByClassName("item-play")).forEach((element) => {
        element.setAttribute('src', "circle-play-regular.svg");
    })
}

Array.from(document.getElementsByClassName("item-play")).forEach((element) => {
    element.addEventListener("click", (e) => {
        makeAllPlay();
        if (e.target.src == "circle-pause-regular.svg") {
            e.target.setAttribute('src', "circle-play-regular.svg");
        } else {
            e.target.setAttribute('src', "circle-pause-regular.svg");
        }

    })
})
