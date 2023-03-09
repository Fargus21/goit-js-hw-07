import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryEl = document.querySelector('.gallery');
const imagesMarkup = makeImagesMarkup(galleryItems);

galleryEl.insertAdjacentHTML('beforeend', imagesMarkup);

function makeImagesMarkup(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `<li><a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a></li>`
    }).join("");
};
   let gallery = new SimpleLightbox('.gallery a', {
     captionSelector: 'img',
     captionsData: 'alt',
     captionPosition: 'bottom',
     captionDelay: 250,
    });