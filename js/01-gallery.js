import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery')

const imgEl = galleryItems
	.map(({preview, original, description}) => 
		`<div class="gallery__item">
			<a class="gallery__link" href="${original}">
				<img class="gallery__image" src=${preview} data-source="${original}" alt=${description}></img>
			</a>
		</div>`)
	.join("");

gallery.insertAdjacentHTML("beforeend", imgEl);


function imgClick(event) {
	event.preventDefault()
	if (event.target.nodeName !== "IMG") {
		return
	}
	let fullSourceImg = event.target.dataset.source;
	const instance = basicLightbox.create(`<img src="${fullSourceImg}" width="800" height="600">`)

instance.show()
}

gallery.addEventListener("click", imgClick)
