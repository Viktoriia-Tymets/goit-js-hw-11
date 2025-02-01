import iziToast from "izitoast";
import SimpleLightbox from "simplelightbox";
import {createGaleryCard} from './render-functions';

export const searchPicture = event => {
    event.preventDefault();

    const KEY = '48586897-e2ee4ea242ed1cc66f698b76b';
    const dataUserQuery=event.currentTarget.elements.userQuery.value.trim();
    if (dataUserQuery.length ==0){
        iziToast.show({
            title: 'Attention !!',
            color: 'red',
            position:'center',
            message: 'Fill in the field to the form request..'
        });
        return;
    }

    fetch("https://pixabay.com/api/?key="+KEY+"&q="+
            encodeURIComponent(dataUserQuery) +
            "&image_type=photo"+
            "&orientation=horizontal"+
            "&safesearch=true"
        )
    .then(response=>{
        if(! response.ok) { throw new Error(response.status); }
        return response.json();
        })
        .then(data =>{
            const pictInfo=data.hits;
            const galleryUlList = document.querySelector('.js-gallery');
            if (pictInfo.length ==0) {
                iziToast.show({
                    title: '',
                    color: 'blue',
                    position:'center',
                    message: 'Sorry, there are no images matching your search query. Please try again!.'
                });
                galleryUlList.innerHTML= '';
                event.reset();
                return;
                }          

            const gallerySmallCard = '<div class="loader"></div>'+
                    pictInfo.map(pictInfo => createGaleryCard(pictInfo)).join('');
            galleryUlList.innerHTML= gallerySmallCard;
            
            new SimpleLightbox('.gallery-item a',{captionsData: 'alt', captionDelay:250});
            
            
        })      
    .catch(err =>{console.log(err);  });

} 