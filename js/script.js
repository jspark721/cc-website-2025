//homepage video button
let video = document.getElementById("hero-video");
let btn = document.getElementById("video-btn");


//mute and unmute video
function muteUnmute() {
  if(video.muted) {
    video.muted = false;
    btn.innerHTML = "mute <i class='fas fa-volume-off'></i>";
  }
  else {
    video.muted = true;
    btn.innerHTML = "unmute <i class='fas fa-volume-up'></i>";
  }
}
