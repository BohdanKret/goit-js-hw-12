// Описаний у документації
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';
// Описаний у документації
import SimpleLightbox from 'simplelightbox';
// Додатковий імпорт стилів
import 'simplelightbox/dist/simple-lightbox.min.css';

import dataRequest from './js/pixabay-api';
import makeMarkup from './js/render-functions';

const form = document.querySelector('.form');
const loader = document.querySelector('#loader');
const gallery = document.querySelector('.gallery');
const loadButton = document.querySelector('.btn-load');

let userRequest = '';
let page = 0;
let per_page = 15;

form.addEventListener('submit', onBtnSubmit);
loadButton.addEventListener('click', onBtnClick);

function onBtnSubmit(event) {
  event.preventDefault();
  page = 1;

  gallery.innerHTML = '';
  loadButton.classList.add('visually-hidden');
  loader.classList.remove('visually-hidden');

  userRequest = event.currentTarget.elements.search.value.trim();

  if (userRequest === '') {
    iziToast.error({
      message: 'Please fill out the search form!',
      messageColor: '#FAFAFB',
      backgroundColor: '#EF4040',
      position: 'topRight',
      color: '#FAFAFB',
      iconUrl: '../img/svg/x-icon.svg',
      iconColor: '#FAFAFB',
    });
  }

  uploadMoreItems();

  form.reset();
}

async function uploadMoreItems() {
  try {
    const data = await dataRequest(userRequest, page, per_page);

    loader.classList.add('visually-hidden');
    loadButton.disabled = false;
    loadButton.classList.remove('visually-hidden');

    if (data.hits.length === 0) {
      loadButton.classList.add('visually-hidden');

      iziToast.error({
        message:
          'Sorry, there are no images matching your search query. Please, try again!',
        messageColor: '#FAFAFB',
        backgroundColor: '#EF4040',
        position: 'topRight',
        color: '#FAFAFB',
        iconUrl: '../img/svg/x-icon.svg',
        iconColor: '#FAFAFB',
      });
    }

    gallery.insertAdjacentHTML('beforeend', makeMarkup(data.hits));
    page += 1;

    if (page >= Math.ceil(data.totalHits / per_page)) {
      loadButton.classList.add('visually-hidden');
      iziToast.info({
        message: "We're sorry, but you've reached the end of search results.",
        position: 'topRight',
      });
    }

    let onPictureClick = new SimpleLightbox('.imgblock a', {
      captions: true,
      captionsData: 'alt',
      captionPosition: 'bottom',
      captionDelay: 250,
    });

    onPictureClick.refresh();
  } catch (error) {
    loader.classList.add('visually-hidden');
    loadButton.classList.add('visually-hidden');

    iziToast.error({
      title: 'Error',
      message: `${error.message}`,
    });
  }
}

async function onBtnClick() {
  loadButton.disabled = true;
  loader.classList.remove('visually-hidden');
  await uploadMoreItems();

  const { height: itemHeight } = document
    .querySelector('.gallery')
    .firstElementChild.getBoundingClientRect();
  window.scrollBy({
    top: itemHeight * 3,
    behavior: 'smooth',
  });
}
