const musicContainer = document.getElementById("music-container");
const playBtn = document.getElementById("play")
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");


const audio = document.getElementById("audio");
const progress = document.getElementById("progress");
const progressContainer = document.getElementById("progress-container");

const title = document.getElementById("title");
const cover = document.getElementById("cover");

const songs = ["hey", "summer","ukulele"];
const n = songs.length;
let songIndex = 2;


// Load song details into DOM

loadSong(songs[songIndex]);

function loadSong(song)
{
    title.innerText = song;
    audio.src = `music/${song}.mp3`
    cover.src = `images/${song}.jpg`
}

//handling music play event

function playSong()
{
    musicContainer.classList.add("play");
    playBtn.querySelector("i.fas").classList.remove("fa-play");
    playBtn.querySelector("i.fas").classList.add("fa-pause");

    audio.play();
}

function pauseSong()
{
    musicContainer.classList.remove("play");
    playBtn.querySelector("i.fas").classList.remove("fa-pause");
    playBtn.querySelector("i.fas").classList.add("fa-play");

    audio.pause();
}
playBtn.addEventListener("click", ()=>{
    const isPlaying = musicContainer.classList.contains("play");

    if(isPlaying) pauseSong();
    else playSong();
})

prevBtn.addEventListener("click",()=>{
    songIndex = (songIndex-1+n)%n;
    loadSong(songs[songIndex]);
    playSong();

});
nextBtn.addEventListener("click",()=>{
    songIndex = (songIndex+1)%n;
    loadSong(songs[songIndex]);
    const isPlaying = musicContainer.classList.contains("play");
    if(isPlaying) playSong();
});


function updateProgress(e)
{
    const {duration, currentTime} = e.srcElement;
    const progressPercent = (currentTime / duration)*100;
    progress.style.width = `${progressPercent}%`
    progress.style.color = "red";
    console.log(progressPercent)
}

function setProgress(e)
{
    const width = this.clientWidth;
    const clickX =e.offsetX;

    const duration = audio.duration;

    audio.currentTime = (clickX/width)*duration;


}

// Time / song update

audio.addEventListener("timeupdate",updateProgress);

// Click on progress bar

progressContainer.addEventListener("click",setProgress);

// song ends
audio.addEventListener("ended", nextSong);
