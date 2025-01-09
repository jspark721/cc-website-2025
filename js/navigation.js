let open = document.querySelector('.menubox');
let menu = document.querySelector('.nav--open');
let close = document.querySelector('.nav--close-icon');

open.addEventListener('click', function() {
  menu.classList.toggle('close');
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