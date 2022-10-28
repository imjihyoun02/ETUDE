'use strict';

// JavaScript
// Make toggler rotate
const toggler = document.querySelector('.navbar-toggler');

toggler.addEventListener('click', () => {
  toggler.classList.toggle('on');
});

// Window resize
const navbar = document.querySelector('.navbar-collapse');

window.onresize = () => {
  toggler.classList.remove('on');
  navbar.classList.remove('show');
}

// JQuery