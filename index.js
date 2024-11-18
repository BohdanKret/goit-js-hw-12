import{a as y,i as n,S as v}from"./assets/vendor-D73Uttp0.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const i of e)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function a(e){const i={};return e.integrity&&(i.integrity=e.integrity),e.referrerPolicy&&(i.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?i.credentials="include":e.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(e){if(e.ep)return;e.ep=!0;const i=a(e);fetch(e.href,i)}})();const L="47077986-634596916a6757457166893bd",F="https://pixabay.com/api/";async function b(t,o=1,a=15){const r=new URLSearchParams({key:L,q:`${t}`,image_type:"photo",orientation:"horizontal",safesearch:!0,page:o,per_page:a}),{data:e}=await y(`${F}?${r}`);return e}function A(t){return t.map(({webformatURL:o,largeImageURL:a,tags:r,likes:e,views:i,comments:l,downloads:p})=>`
            <li class="gallery-item">
                <div class="gallery-item-imgblock imgblock">
                    <a class="img-link" href="${a}">
		                <img 
			                class="gallery-image" 
			                src="${o}" 
			                alt="${r}" 
			            />
	                </a>
                </div>
                <ul class="gallery-info info-list">
                    <li class="info-item">
                        <h6>Likes</h6>
                        <p>${e}</p>
                    </li>
                    <li class="info-item">
                        <h6>Views</h6>
                        <p>${i}</p>
                    </li>
                    <li class="info-item">
                        <h6>Comments</h6>
                        <p>${l}</p>
                    </li>
                    <li class="info-item">
                        <h6>Downloads</h6>
                        <p>${p}</p>
                    </li>
                </ul>
            </li>
        `).join("")}const h=document.querySelector(".form"),d=document.querySelector("#loader"),f=document.querySelector(".gallery"),s=document.querySelector(".btn-load");let u="",c=0,m=15;h.addEventListener("submit",B);s.addEventListener("click",C);function B(t){t.preventDefault(),c=1,f.innerHTML="",s.classList.add("visually-hidden"),d.classList.remove("visually-hidden"),u=t.currentTarget.elements.search.value.trim(),u===""&&n.error({message:"Please fill out the search form!",messageColor:"#FAFAFB",backgroundColor:"#EF4040",position:"topRight",color:"#FAFAFB",iconUrl:"../img/svg/x-icon.svg",iconColor:"#FAFAFB"}),g(),h.reset()}async function g(){try{const t=await b(u,c,m);d.classList.add("visually-hidden"),s.disabled=!1,s.classList.remove("visually-hidden"),t.hits.length===0&&(s.classList.add("visually-hidden"),n.error({message:"Sorry, there are no images matching your search query. Please, try again!",messageColor:"#FAFAFB",backgroundColor:"#EF4040",position:"topRight",color:"#FAFAFB",iconUrl:"../img/svg/x-icon.svg",iconColor:"#FAFAFB"})),f.insertAdjacentHTML("beforeend",A(t.hits)),c+=1,c>=Math.ceil(t.totalHits/m)&&(s.classList.add("visually-hidden"),n.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"})),new v(".imgblock a",{captions:!0,captionsData:"alt",captionPosition:"bottom",captionDelay:250}).refresh()}catch(t){d.classList.add("visually-hidden"),s.classList.add("visually-hidden"),n.error({title:"Error",message:`${t.message}`})}}async function C(){s.disabled=!0,d.classList.remove("visually-hidden"),await g();const{height:t}=document.querySelector(".gallery").firstElementChild.getBoundingClientRect();window.scrollBy({top:t*3,behavior:"smooth"})}
//# sourceMappingURL=index.js.map
