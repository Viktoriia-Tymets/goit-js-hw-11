// import iziToast from "izitoast";
// import SimpleLightbox from "simplelightbox";
// const API_KEY = '48586897-e2ee4ea242ed1cc66f698b76b';

import { searchPicture } from "../js/pixabay-api";

// import {createGaleryCard} from './js/render-functions';
// import {TestAndSearch} from './js/pixabay-api';


const galleryUlList = document.querySelector('.js-gallery');
console.log(galleryUlList);
const startBtn = document.querySelector('.js-search-form');

startBtn.addEventListener('submit', searchPicture);