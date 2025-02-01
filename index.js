import{i as l,S as c}from"./assets/vendor-B07T6_gy.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(e){if(e.ep)return;e.ep=!0;const s=o(e);fetch(e.href,s)}})();const u=t=>`
         <li class="gallery-item list">
            <a class="gallery-link" href="${t.largeImageURL}">
                <img
                    class="gallery-image"
                    width="300 px"
                    heigth="300 px"
                    src="${t.previewURL}"
                    data-source="${t.largeImageURL}"
                    alt="${t.tags}"
                />

                <div class="info-about">
                    <div class="info">
                        <span class="cl-name">Likes</span>
                        <span class="cl-number" >${t.likes}</span>
                        </div>

                    <div class="info">
                        <span class="cl-name">Views</span>
                        <span class="cl-number" >${t.views}</span>
                        </div>

                    <div class="info">
                        <span class="cl-name">Comments</span>
                        <span class="cl-number" >${t.comments}</span>
                        </div>

                    <div class="info">
                        <span class="cl-name">Downloads</span>
                        <span class="cl-number" >${t.downloads}</span>
                        </div>
                </div>
            </a>
        </li>
        `,d=t=>{t.preventDefault();const a="48586897-e2ee4ea242ed1cc66f698b76b",o=t.currentTarget.elements.userQuery.value.trim();if(o.length==0){l.show({title:"Attention !!",color:"red",position:"center",message:"Fill in the field to the form request.."});return}fetch("https://pixabay.com/api/?key="+a+"&q="+encodeURIComponent(o)+"&image_type=photo&orientation=horizontal&safesearch=true").then(r=>{if(!r.ok)throw new Error(r.status);return r.json()}).then(r=>{const e=r.hits,s=document.querySelector(".js-gallery");if(e.length==0){l.show({title:"",color:"blue",position:"center",message:"Sorry, there are no images matching your search query. Please try again!."}),s.innerHTML="",t.reset();return}const n='<div class="loader"></div>'+e.map(i=>u(i)).join("");s.innerHTML=n,new c(".gallery-item a",{captionsData:"alt",captionDelay:250})}).catch(r=>{console.log(r)})},m=document.querySelector(".js-gallery");console.log(m);const p=document.querySelector(".js-search-form");p.addEventListener("submit",d);
//# sourceMappingURL=index.js.map
