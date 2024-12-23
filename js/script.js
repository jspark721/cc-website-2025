//homepage video button
let video = document.getElementById("hero-video");
let btn = document.getElementById("video-btn");

// pause and play the video
function playPause() {
  if (video.paused) {
    video.play();
    btn.innerHTML = "pause <i class='fas fa-pause'></i>";
  } else {
    video.pause();
    btn.innerHTML = "play <i class='fas fa-play'></i>";
  }
}

//landing page animation

// let homepageLogo = document.getElementById('logo-main');

// document.addEventListener("DOMContentLoaded", function(e) {
//   document.getElementById('page-load').classList.add('fade');
// });

// setTimeout(function() {
//   homepageLogo.style.opacity = '1';
//   homepageLogo.style.transform = 'translateY(-20px)';
// }, 700);
// setTimeout(function() {
//   document.getElementById('page-load').style.zIndex = '-10';
// }, 1700);


//modal

// let socialStrategy = document.getElementById('services--strategy');


let modal = document.querySelector(".modal");
let modal2 = document.querySelector(".modal2");
let modal3 = document.querySelector(".modal3");
let modal4 = document.querySelector(".modal4");

let closeButton = document.querySelector(".close-button");
let closeButton2 = document.querySelector(".close-button2");
let closeButton3 = document.querySelector(".close-button3");
let closeButton4 = document.querySelector(".close-button4");
let strategyModal = document.getElementById('services--strategy');
let contentModal = document.getElementById('services--content');
let managementModal = document.getElementById('services--management');
let productionModal = document.getElementById('services--production');



function showModal(e) {
  if(e.target === strategyModal) {
    modal.classList.add('show-modal');
  }
  if(e.target === contentModal) {
    modal2.classList.add('show-modal');
  }
  if(e.target === managementModal) {
    modal3.classList.add('show-modal');
  }
  if(e.target === productionModal) {
    modal4.classList.add('show-modal');
  }
}

function hideModal(e) {
  if(e.target === closeButton) {
    modal.classList.remove('show-modal');
  }
  if(e.target === closeButton2) {
    modal2.classList.remove('show-modal');
  }
  if(e.target === closeButton3) {
    modal3.classList.remove('show-modal');
  }
  if(e.target === closeButton4) {
    modal4.classList.remove('show-modal');
  }
}



strategyModal.addEventListener("click", showModal);
contentModal.addEventListener("click", showModal);
managementModal.addEventListener("click", showModal);
productionModal.addEventListener("click", showModal);


closeButton.addEventListener("click", hideModal);
closeButton2.addEventListener("click", hideModal);
closeButton3.addEventListener("click", hideModal);
closeButton4.addEventListener("click", hideModal);


// let modal;
// document.addEventListener("click", (e) => {
//   console.log('clicked')
//   if (e.target.className === "services--item") {
//     console.log(e.target);
//     modal = document.getElementById(e.target.dataset.id);
//     openModal(modal);
//   } else if (e.target.className === "modal-close") {
//     closeModal(modal);
//   } else {
//     return;
//   }
// });

// const openModal = (modal) => {
//   document.body.style.overflow = "hidden";
//   modal.setAttribute("open", "true");
//   document.addEventListener("keydown", escClose);
//   let overlay = document.createElement("div");
//   overlay.id = "modal-overlay";
//   document.body.appendChild(overlay);
// };

// const closeModal = (modal) => {
//   document.body.style.overflow = "auto";
//   modal.removeAttribute("open");
//   document.removeEventListener("keydown", escClose);
//   document.body.removeChild(document.getElementById("modal-overlay"));
// };

// const escClose = (e) => {
//   if (e.keyCode == 27) {
//     closeModal();
//   }
// };
