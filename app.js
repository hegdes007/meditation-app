// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();

const song = document.querySelector(".song");
const play = document.querySelector(".play");
const replay = document.querySelector(".replay");
const video = document.querySelector(".vid-container video");
const outline = document.querySelector(".moving-outline circle");

const sounds = document.querySelectorAll(".sound-picker button");

const timeDisplay = document.querySelector(".time-display");
const timeSelect = document.querySelectorAll(".time-selector button");


const outlineLength = outline.getTotalLength();

let fakeDuration = 1200;


outline.style.strokeDashoffset = outlineLength;
outline.style.strokeDasharray = outlineLength;

timeDisplay.textContent = `${Math.floor(fakeDuration / 60)}:${Math.floor(
    fakeDuration % 60
  )}`;

sounds.forEach (sound => {
    sound.addEventListener("click", function() {
     song.src = this.getAttribute("data-sound");
     video.src = this.getAttribute("data-video");
     checkPlaying(song);  
    });
});

play.addEventListener("click",() => {
    checkPlaying(song);
});

replay.addEventListener("click", () =>{
    restartSong(song);
});

const restartSong = song => {
    let currentTime = song.currentTime;
    song.currentTime = 0;
};


timeSelect.forEach(option => {
    option.addEventListener('click',function() {
        fakeDuration = this.getAttribute("data-time");
        timeDisplay.textContent = `${Math.floor(fakeDuration/60)}:${Math.floor(fakeduration % 60)}`;
    });
});

const checkPlaying = song => {
    if(song.paused) {
        song.play();
        video.play();
        play.src = "./svg/pause.svg";
    }
    else {
        song.pause();
        video.pause();
        play.src = "./svg/play.svg";
    }
    song.ontimeupdate = () => {
        let currentTime = song.currentTime;
        let elapsed = fakeDuration - currentTime;
        let seconds = Math.floor(elapsed % 60);
        let minutes = Math.floor(elapsed / 60);
        timeDisplay.textContent = `${minutes}:${seconds}`;
        let progress = outlineLength - (currentTime/fakeDuration) * outlineLength;
        outline.style.strokeDashoffset = progress;

        if (currentTime >= fakeDuration) {
            song.pause();
            song.currentTime = 0;
            play.src = "./svg/play.svg";
            video.pause();
        }
    };
};

function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }
  

