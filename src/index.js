import './stylesheets/main.scss';

import '@babel/polyfill';

import './js/helpers'; // Empty
import './js/functions'; // Empty
import './js/packedges';

import Interface from './js/classes/Interface';

let menuButton = document.querySelector('.mobile-nav-btn');
let navMenu = document.querySelector('.nav');
let menuOpen = false;

window.addEventListener('resize', resize);
menuButton.addEventListener('click', hamburger);

function resize() {
    let width = window.innerWidth;

    if (width <= 768 && menuOpen === false) {
        navMenu.classList.add('nav_hide');
        menuButton.classList.remove('mobile-nav-btn_active');
    } else if (width > 768 && menuOpen === true) {
        navMenu.classList.remove('nav_hide');
        menuButton.classList.remove('mobile-nav-btn_active');
        menuOpen = false;
    } else {
        navMenu.classList.remove('nav_hide');
    }
}

function hamburger() {
    this.classList.toggle('mobile-nav-btn_active');
    navMenu.classList.toggle('nav_hide');

    menuOpen = navMenu.classList.contains('nav_hide') ? false : true;
}

resize();

Interface.activate(); // Empty
