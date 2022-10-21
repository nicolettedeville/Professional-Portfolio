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
const introContainer = document.querySelector('.intro');

window.onscroll = function () {
  stickyNav();
};

function stickyNav() {
  if (window.pageYOffset >= offset) {
    navbar.classList.add('sticky');
    introContainer.style.paddingTop = '60px';
  } else {
    navbar.classList.remove('sticky');
  }
}

//show the contact form
const footer = document.querySelector('.site-footer');
const contactButton = document.querySelector('.contact-button');

contactButton.addEventListener('click', () => {
  footer.classList.toggle('active');
});
