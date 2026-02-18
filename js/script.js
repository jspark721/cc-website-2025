//homepage video button
let video = document.getElementById("hero-video");
let btn = document.getElementById("video-btn");
let mobileVideo = document.getElementById("hero-video-mobile");

//mute and unmute video
function muteUnmute() {
  if(video.muted || mobileVideo.muted) {
    video.muted = false;
    mobileVideo.muted = false;
    btn.innerHTML = "mute <i class='fas fa-volume-off'></i>";
  }
  else {
    video.muted = true;
    mobileVideo.muted = true;
    btn.innerHTML = "unmute <i class='fas fa-volume-up'></i>";
  }
}

// play video 
const playButton = document.getElementById("play-btn-mobile");

playButton.addEventListener("click", () => {
  mobileVideo.play();
  playButton.remove();
});