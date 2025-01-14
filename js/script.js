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

//navigation 
let open = document.querySelector('.menubox');
let menu = document.querySelector('.nav--open');
let close = document.querySelector('.nav--close-icon');

window.onload = function() {
  menu.style.opacity = "0";
};

open.addEventListener('click', function() {
  menu.classList.toggle('close');
  menu.style.opacity = "1";
});

close.addEventListener('click', function() {
  menu.classList.toggle('close');
});

window.addEventListener('scroll', function() {
  console.log('scrolling');
  const navbar = document.querySelector('.navbar'); 
  const scrollTop = window.scrollY || document.documentElement.scrollTop;

  if (scrollTop > 100) { 
    navbar.classList.add('navshadow'); 
  } else {
    navbar.classList.remove('navshadow'); 
  }
});