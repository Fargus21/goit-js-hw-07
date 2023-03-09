import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
const galleryEl = document.querySelector('.gallery');
const imagesMarkup = makeImagesMarkup(galleryItems);
galleryEl.insertAdjacentHTML('beforeend', imagesMarkup);

function makeImagesMarkup(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `<div class="gallery__item">
   <a class="gallery__link" href="${original}">
     <img
       class="gallery__image"
       src="${preview}"
      data-source="${original}"
       alt="${description}"
    />
  </a>
 </div>`
    })
      .join("");
};
// --------------------------
galleryEl.addEventListener('click', imagesHandler);

function imagesHandler(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  };

  const modalImage = event.target.getAttribute('data-source');
   const instance = basicLightbox.create(`
      <img src="${modalImage}" width="800" height="600">
`);
  instance.show();

  window.addEventListener('keydown', onClose);
  function onClose(event) {
    if (event.code === "Escape") {
      instance.close();
      console.log(event)
    };
  };
};






// galleryEl.addEventListener('click', imagesHandler);

// function imagesHandler(event) {
//   event.preventDefault();
//   if (event.target.nodeName !== "IMG") {
//     return;
//   };
//   const modalImage = event.target.getAttribute('data-source');
//    const instance = basicLightbox.create(`
//       <img src="${modalImage}" width="800" height="600">
// `);
//   instance.show();
// };












