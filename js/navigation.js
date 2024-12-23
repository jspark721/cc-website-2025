
//menu navbar function
let body = document.getElementsByTagName("BODY")[0];
let openNav = document.getElementById("nav--main");
let menuIcon = document.getElementById("menu--box");
let closeIcon = document.getElementById("menu--close");

function openMenu() {
  console.log('open')
  openNav.style.transform = 'translateY(0)';
  openNav.style.opacity = '1';
  body.style.overflow = 'hidden';
  menuIcon.style.transform = 'translateY(-100px)';
  closeIcon.style.transform = 'translateY(20px)';
}

function closeMenu() {
  openNav.style.transform = 'translateY(-100vh)';
  openNav.style.transition = 'all .5s ease-out';
  openNav.style.opacity = '0'
  body.style.overflow = 'visible';
  menuIcon.style.transform = 'translateY(0)';
  closeIcon.style.transform = 'translateY(-100px)';
}
