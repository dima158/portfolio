import './stylesheets/main.scss';

import '@babel/polyfill';

import './js/helpers'; // Empty
import './js/functions'; // Empty
import './js/packedges';

import Interface from './js/classes/Interface';

const menuButton = document.querySelector('.burger');
const navMenu = document.querySelector('.nav');
const menuLink = navMenu.querySelectorAll('.nav__link');

window.addEventListener('resize', resize);
menuButton.addEventListener('click', burgerMenuToggle);
[...menuLink].forEach((current) => { current.addEventListener('click', link); });

function resize() {
    if (innerWidth > 768) burgerMenuClose();
}

function burgerMenuToggle() {
    menuButton.classList.toggle('burger_active');
    navMenu.classList.toggle('nav_show');
}

function burgerMenuClose() {
    menuButton.classList.remove('burger_active');
    navMenu.classList.remove('nav_show');
}

function link(e) {
    e.preventDefault();
    burgerMenuClose();
    //Links code
}

Interface.activate(); // Empty
