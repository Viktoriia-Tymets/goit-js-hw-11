import iziToast from "izitoast";
import SimpleLightbox from "simplelightbox";

export const createGaleryCard = pictInfo => {
    return `
         <li class="gallery-item list">
            <a class="gallery-link" href="${pictInfo.largeImageURL}">
                <img
                    class="gallery-image"
                    width="300 px"
                    heigth="300 px"
                    src="${pictInfo.previewURL}"
                    data-source="${pictInfo.largeImageURL}"
                    alt="${pictInfo.tags}"
                />

                <div class="info-about">
                    <div class="info">
                        <span class="cl-name">Likes</span>
                        <span class="cl-number" >${pictInfo.likes}</span>
                        </div>

                    <div class="info">
                        <span class="cl-name">Views</span>
                        <span class="cl-number" >${pictInfo.views}</span>
                        </div>

                    <div class="info">
                        <span class="cl-name">Comments</span>
                        <span class="cl-number" >${pictInfo.comments}</span>
                        </div>

                    <div class="info">
                        <span class="cl-name">Downloads</span>
                        <span class="cl-number" >${pictInfo.downloads}</span>
                        </div>
                </div>
            </a>
        </li>
        `;
    };