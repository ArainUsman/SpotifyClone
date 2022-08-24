console.log('Spotify Clone with HTML / CSS and JS..!!');

// initialize the variables
let songIndex = 1;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById("myProgressBar");
let gif = document.getElementById("gif");
let masterSongName = document.getElementById("masterSongName");

let songItems = Array.from(document.getElementsByClassName("songItem"));

let songs = [
    { songName: "ik dard sabhi ko..", filePath: "songs/1.mp3", coverPath: "covers/1.jpg" },
    { songName: "gum juddae ka yun to..", filePath: "songs/2.mp3", coverPath: "covers/2.jpg" },
    { songName: "chooti chooti raate lambi..", filePath: "songs/3.mp3", coverPath: "covers/3.jpg" },
    { songName: "kon han loog ye zakham..", filePath: "songs/4.mp3", coverPath: "covers/4.jpg" },
];

songItems.forEach((element, i) => {
    // console.log(element, i);
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
});

// handle Play / Pause Click
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        // console.log("masterPlay Event Trigerred..!!");
        audioElement.play();
        masterPlay.innerHTML = "Pause";
        gif.style.opacity = 1;
    }
    else {
        audioElement.pause();
        masterPlay.innerHTML = "Play";
        gif.style.opacity = 0;
    }
});

audioElement.addEventListener('timeupdate', () => {
    // console.log("Time Update Event Trigerred..!!");
    // Update Seekbar
    let progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    // console.log(progress);
    myProgressBar.value = progress;
});

myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = (myProgressBar.value * audioElement.duration) / 100;
});

let playSong = Array.from(document.getElementsByClassName("playSong"));

/*
const makeAllPlays = () =>{
    playSong.forEach((element) => {
    
    })
}
*/

playSong.forEach((element) => {
    element.addEventListener('click', (e) => {
        console.log(e.target);
        // makeAllPlays();
        // let index = e.target.id;
        let songIndex = parseInt(e.target.id);
        audioElement.src = `songs/${songIndex}.mp3`;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.innerText = "Pause";
        masterSongName.innerText = songs[songIndex - 1].songName;

        if (e.target = 'clicked') {
            e.target.innerHTML = "pause";
        }
    })
})

document.getElementById("next").addEventListener('click', () => {
    if (songIndex >= 4) {
        songIndex++;
    }
    else {
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.innerText = "Pause";
    masterSongName.innerText = songs[songIndex - 1].songName;
})

document.getElementById("previous").addEventListener('click', () => {
    if (songIndex <= 0) {
        songIndex = 1;

    }
    else {
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.innerText = "Pause";
    masterSongName.innerText = songs[songIndex - 1].songName;
})