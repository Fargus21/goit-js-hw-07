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
galleryEl.addEventListener('click', imagesHandler);

function imagesHandler(event) { 
    event.preventDefault();
if (event.target.nodeName !== 'IMG') {
    return;
    };
    console.log(event);
    let gallery = new SimpleLightbox('.gallery a', {
     captionSelector: 'img',
     captionsData: 'alt',
     captionPosition: 'bottom',
     captionDelay: 250,
    });
};

















//   let gallery = new SimpleLightbox(".gallery a")
    // gallery.on('show.Simplelightbox', function () {  
        // new SimpleLightbox('.gallery a', { caption: true, captionDelay: 250 });
//     new SimpleLightbox(".gallery a", {
//      captionSelector: `${modalImage}`,
//      captionsData: `${description}}`,
//      captionPosition: 'bottom',
//      captionDelay: 250,
//   });
    // });


// let gallery = new SimpleLightbox('.gallery a');
// gallery.on('show.simplelightbox', function () {
// 	   captionSelector: 'img'
//      captionsData: 'alt'
//      captionPosition: 'bottom'
//      captionDelay: 250
// });

// const lightbox = new SimpleLightbox('.gallery a', { caption: true, captionDelay: 250 });
//     console.log(modalImage);

// const lightbox = new SimpleLightbox('.gallery a', { caption: true, captionDelay: 250 });

// const lightBox = new SimpleLightbox(".gallery a", {
//      captionSelector: 'img',
//      captionsData: 'alt',
//      captionPosition: 'bottom',
//      captionDelay: 250,
//   });
