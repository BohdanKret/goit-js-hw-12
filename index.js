import{a as y,i as c,S as v}from"./assets/vendor-D73Uttp0.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const i of e)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function a(e){const i={};return e.integrity&&(i.integrity=e.integrity),e.referrerPolicy&&(i.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?i.credentials="include":e.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(e){if(e.ep)return;e.ep=!0;const i=a(e);fetch(e.href,i)}})();const L="47077986-634596916a6757457166893bd",F="https://pixabay.com/api/";async function b(t,s=1,a=15){const r=new URLSearchParams({key:L,q:`${t}`,image_type:"photo",orientation:"horizontal",safesearch:!0,page:s,per_page:a}),{data:e}=await y(`${F}?${r}`);return e}function A(t){return t.map(({webformatURL:s,largeImageURL:a,tags:r,likes:e,views:i,comments:l,downloads:p})=>`
            <li class="gallery-item">
                <div class="gallery-item-imgblock imgblock">
                    <a class="img-link" href="${a}">
		                <img 
			                class="gallery-image" 
			                src="${s}" 
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
        `).join("")}const h=document.querySelector(".form"),n=document.querySelector("#loader"),f=document.querySelector(".gallery"),o=document.querySelector(".btn-load");let u="",d=30,m=15;h.addEventListener("submit",B);o.addEventListener("click",C);function B(t){if(t.preventDefault(),d=30,f.innerHTML="",o.classList.add("visually-hidden"),n.classList.remove("visually-hidden"),u=t.currentTarget.elements.search.value.trim(),u==="")return n.classList.add("visually-hidden"),c.error({message:"Please fill out the search form!",messageColor:"#FAFAFB",backgroundColor:"#EF4040",position:"topRight",color:"#FAFAFB",iconUrl:"../img/svg/x-icon.svg",iconColor:"#FAFAFB"});g(),h.reset()}async function g(){try{const t=await b(u,d,m);n.classList.add("visually-hidden"),o.disabled=!1,o.classList.remove("visually-hidden"),t.hits.length===0&&(o.classList.add("visually-hidden"),c.error({message:"Sorry, there are no images matching your search query. Please, try again!",messageColor:"#FAFAFB",backgroundColor:"#EF4040",position:"topRight",color:"#FAFAFB",iconUrl:"../img/svg/x-icon.svg",iconColor:"#FAFAFB"})),f.insertAdjacentHTML("beforeend",A(t.hits)),d>=Math.ceil(t.totalHits/m)&&t.hits.length&&(o.classList.add("visually-hidden"),c.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"})),d+=1,new v(".imgblock a",{captions:!0,captionsData:"alt",captionPosition:"bottom",captionDelay:250}).refresh()}catch(t){n.classList.add("visually-hidden"),o.classList.add("visually-hidden"),c.error({title:"Error",message:`${t.message}`})}}async function C(){o.disabled=!0,n.classList.remove("visually-hidden"),await g();const{height:t}=document.querySelector(".gallery").firstElementChild.getBoundingClientRect();window.scrollBy({top:t*3,behavior:"smooth"})}
//# sourceMappingURL=index.js.map
