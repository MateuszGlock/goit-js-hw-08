document.addEventListener("DOMContentLoaded",(function(){const e=new SimpleLightbox(".galleryitem a",{captions:!0,captionDelay:250,captionPosition:"outside"}),t=document.querySelector(".gallery"),a=document.createElement("ul");a.classList.add("gallery"),galleryItems.forEach((e=>{const t=document.createElement("li");t.classList.add("galleryitem");const n=document.createElement("a");n.classList.add("gallery__link"),n.href=e.original;const l=document.createElement("img");l.classList.add("galleryimage"),l.src=e.preview,l.title=e.description,l.dataset.source=e.original,n.appendChild(l),t.appendChild(n),a.appendChild(t)})),t.appendChild(a),e.refresh(),document.addEventListener("keydown",(t=>{"Escape"===t.key&&e.isOpen()&&e.close()}))}));
//# sourceMappingURL=01-gallery.953ac599.js.map
