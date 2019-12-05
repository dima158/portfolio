import './stylesheets/main.scss';

import '@babel/polyfill';

import './js/helpers'; // Empty
import './js/functions'; // Empty
import './js/packedges';

import Interface from './js/classes/Interface';

// -----Burger Menu-----
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

// -----Projects Section-----
const projectsButton = document.querySelectorAll('.projects__filter-item');
const projects = document.querySelectorAll('.projects__project');

[...projectsButton].forEach(function (element) {
    element.addEventListener('click', portfolio);
});

function portfolio(e) {
    portfolioButtonActive(e.target);
    if (e.target.dataset.cat === 'all') {
        [...projects].forEach(function (element) {
            element.classList.remove('projects__project_hide');
        });
    } else {
        [...projects].forEach(function (element) {
            if (element.dataset.cat === e.target.dataset.cat) {
                element.classList.remove('projects__project_hide');
            } else {
                element.classList.add('projects__project_hide');
            }
        });
    }
}

function portfolioButtonActive(element) {
    [...projectsButton].forEach(function (current) {
        if (current === element) {
            current.classList.add('projects__filter-item_active');
        } else {
            current.classList.remove('projects__filter-item_active');
        }
    });
}

// -----Slider-----
const slider = document.querySelector('.members__list');
const sliderItemsCount = slider.querySelectorAll('.members__person').length;
const sliderDots = document.querySelector('.members__slider-dots');
let sliderItemWidth = slider.querySelector('.members__person').offsetWidth;
let sliderBtnCount = Math.ceil(sliderItemsCount / (slider.offsetWidth / sliderItemWidth));
let sliderBtn = [];

sliderAddDots();

function sliderMove(offset) {
    let sliderLeft = slider.offsetWidth * +offset;
    slider.style.transform = 'translateX(' + -sliderLeft + 'px)';
}

function sliderDotsActive(event) {
    [...sliderBtn].forEach((current) => {
        if (current === event.target) {
            current.classList.add('members__slider-btn_active');
        } else {
            current.classList.remove('members__slider-btn_active');
        }
    });
    sliderMove(event.target.dataset.slider);
}

function sliderAddDots() {
    sliderBtn.length = 0;
    sliderDots.innerHTML = '';
    for (let i = 0; i < sliderBtnCount; i++) {
        let btn = document.createElement('button');
        btn.classList.add('members__slider-btn');
        if (i === 0) btn.classList.add('members__slider-btn_active');
        btn.dataset.slider = i;
        sliderDots.append(btn);
        btn.addEventListener('click', sliderDotsActive);
        sliderBtn.push(btn);
    }
}

function resizeSlider() {
    let currentOffset = document.querySelector('.members__slider-btn_active').dataset.slider;
    let itemWidth = slider.querySelector('.members__person').offsetWidth;
    let btnCount = Math.ceil(sliderItemsCount / (slider.offsetWidth / itemWidth));

    sliderItemWidth = itemWidth;
    if (btnCount !== sliderBtnCount) {
        slider.style.transform = 'translateX(0)';
        sliderBtnCount = btnCount;
        sliderAddDots();
    } else {
        sliderMove(currentOffset);
    }
}

// -----Resize-----
window.addEventListener('resize', resizeEvent);

function resizeEvent() {
    resizeSlider();
}

// -----Instagram Photo-----
async function getPhoto() {
    const article = document.querySelectorAll('.article');
    const data = await fetch('https://www.instagram.com/website_of_the_day/?__a=1')
        .then(response => response.json())
        .then(data => data.graphql.user.edge_owner_to_timeline_media.edges);

    for (let i = 0; i < 3; i++) {
        const image = article[i].querySelector('.article__img');
        let img = document.createElement('img');
        img.src = data[i].node.thumbnail_src;
        img.classList.add('article__background');
        image.append(img);
    }
}
getPhoto();


Interface.activate(); // Empty
