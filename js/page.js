let aboutText = document.getElementById("about-text");

window.onscroll = function() {
  aboutText.style.transform = 'translateY(130px)';
  if(window.scrollY < 5) {
    aboutText.style.transform = 'translateY(0)';
  }
}

//homepage video button
let workVid = document.getElementById("hero-work-video");
let btn = document.getElementById("video-btn");

// pause and play the video
function playPause() {
  if (workVid.paused) {
    workVid.play();
    btn.innerHTML = "pause <i class='fas fa-pause'></i>";
  } else {
    workVid.pause();
    btn.innerHTML = "play <i class='fas fa-play'></i>";
  }
}

//modal
let modal;
document.addEventListener("click", (e) => {
  if (e.target.className === "modal-open") {
    modal = document.getElementById(e.target.dataset.id);
    openModal(modal);
  } else if (e.target.className === "modal-close") {
    closeModal(modal);
  } else {
    return;
  }
});

const openModal = (modal) => {
  document.body.style.overflow = "hidden";
  modal.setAttribute("open", "true");
  document.addEventListener("keydown", escClose);
  let overlay = document.createElement("div");
  overlay.id = "modal-overlay";
  document.body.appendChild(overlay);
};

const closeModal = (modal) => {
  document.body.style.overflow = "auto";
  modal.removeAttribute("open");
  document.removeEventListener("keydown", escClose);
  document.body.removeChild(document.getElementById("modal-overlay"));
};

const escClose = (e) => {
  if (e.keyCode == 27) {
    closeModal();
  }
};
