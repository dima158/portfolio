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

function burgerMenuToggle() {
  menuButton.classList.toggle('burger_active');
  navMenu.classList.toggle('nav_show');
}

function burgerMenuClose() {
  menuButton.classList.remove('burger_active');
  navMenu.classList.remove('nav_show');
}

function resize() {
  if (window.innerWidth > 768) burgerMenuClose();
}

function link(e) {
  e.preventDefault();
  burgerMenuClose();
  //Links code
}

window.addEventListener('resize', resize);
menuButton.addEventListener('click', burgerMenuToggle);
[...menuLink].forEach(current => {
  current.addEventListener('click', link);
});

// -----Projects Section-----
const projectsButton = document.querySelectorAll('.projects__filter-item');
const projects = document.querySelectorAll('.projects__project');

function portfolioButtonActive(element) {
  [...projectsButton].forEach(current => {
    if (current === element) {
      current.classList.add('projects__filter-item_active');
    } else {
      current.classList.remove('projects__filter-item_active');
    }
  });
}

function portfolio(e) {
  portfolioButtonActive(e.target);
  if (e.target.dataset.cat === 'all') {
    [...projects].forEach(element => {
      element.classList.remove('projects__project_hide');
    });
  } else {
    [...projects].forEach(element => {
      if (element.dataset.cat === e.target.dataset.cat) {
        element.classList.remove('projects__project_hide');
      } else {
        element.classList.add('projects__project_hide');
      }
    });
  }
}

[...projectsButton].forEach(element => {
  element.addEventListener('click', portfolio);
});

// -----Slider-----
const slider = document.querySelector('.members__list');
const sliderItemsCount = slider.querySelectorAll('.members__person').length;
const sliderDots = document.querySelector('.members__slider-dots');
const sliderBtns = [];
let sliderItemWidth = slider.querySelector('.members__person').offsetWidth;
let sliderBtnCount = Math.ceil(sliderItemsCount / (slider.offsetWidth / sliderItemWidth));

function sliderMove(offset) {
  const sliderLeft = slider.offsetWidth * +offset;
  slider.style.transform = `translateX(${-sliderLeft}px)`;
}

function sliderDotsActive(event) {
  [...sliderBtns].forEach(current => {
    if (current === event.target) {
      current.classList.add('members__slider-btn_active');
    } else {
      current.classList.remove('members__slider-btn_active');
    }
  });
  sliderMove(event.target.dataset.slider);
}

function sliderAddDots() {
  sliderBtns.length = 0;
  sliderDots.innerHTML = '';
  for (let i = 0; i < sliderBtnCount; i++) {
    const btn = document.createElement('button');
    btn.classList.add('members__slider-btn');
    if (i === 0) btn.classList.add('members__slider-btn_active');
    btn.dataset.slider = i;
    sliderDots.append(btn);
    btn.addEventListener('click', sliderDotsActive);
    sliderBtns.push(btn);
  }
}

function resizeSlider() {
  const currentOffset = document.querySelector('.members__slider-btn_active').dataset.slider;
  const itemWidth = slider.querySelector('.members__person').offsetWidth;
  const btnCount = Math.ceil(sliderItemsCount / (slider.offsetWidth / itemWidth));

  sliderItemWidth = itemWidth;
  if (btnCount !== sliderBtnCount) {
    slider.style.transform = 'translateX(0)';
    sliderBtnCount = btnCount;
    sliderAddDots();
  } else {
    sliderMove(currentOffset);
  }
}

sliderAddDots();

// -----Resize-----
function resizeEvent() {
  resizeSlider();
}

window.addEventListener('resize', resizeEvent);

// -----Instagram Photo-----
async function getPhoto() {
  const article = document.querySelectorAll('.article');
  const photos = await fetch('https://www.instagram.com/website_of_the_day/?__a=1')
    .then(response => response.json())
    .then(data => data.graphql.user.edge_owner_to_timeline_media.edges);

  for (let i = 0; i < 3; i++) {
    const image = article[i].querySelector('.article__img');
    const img = document.createElement('img');
    img.src = photos[i].node.thumbnail_src;
    img.classList.add('article__background');
    image.append(img);
  }
}

getPhoto();

Interface.activate(); // Empty
