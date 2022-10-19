//hamburger menu on mobile
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
});

document.querySelectorAll('.nav-link').forEach((n) =>
  n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
  })
);

//sticky navbar effect
const navbar = document.getElementById('navigation');
const offset = navbar.offsetTop;
const mainContainer = document.querySelector('.main-conatiner');

window.onscroll = function () {
  stickyNav();
};

function stickyNav() {
  if (window.pageYOffset >= offset) {
    navbar.classList.add('sticky');
  } else {
    navbar.classList.remove('sticky');
  }
}
