const filters=document.querySelectorAll('[data-filter]');
const cases=document.querySelectorAll('.case');
filters.forEach(button=>button.addEventListener('click',()=>{
 filters.forEach(item=>item.setAttribute('aria-pressed',String(item===button)));
 let count=0;
 cases.forEach(card=>{card.hidden=button.dataset.filter!=='all'&&card.dataset.category!==button.dataset.filter;if(!card.hidden)count++});
 document.querySelector('#case-count').textContent=String(count).padStart(2,'0')+' PROJECTS';
}));
const lightbox=document.querySelector('#lightbox');
document.querySelectorAll('.image-button').forEach(button=>button.addEventListener('click',()=>{
 const image=document.querySelector('#lightbox-image');image.src=button.querySelector('img').src;image.alt=button.querySelector('img').alt;
 document.querySelector('#lightbox-title').textContent=button.dataset.title;
 document.querySelector('#lightbox-caption').textContent=button.dataset.caption;
 lightbox.showModal();document.body.style.overflow='hidden';
}));
document.querySelector('#close-lightbox').addEventListener('click',()=>lightbox.close());
lightbox.addEventListener('close',()=>{document.body.style.overflow=''});
lightbox.addEventListener('click',event=>{if(event.target!==lightbox)return;const r=lightbox.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)lightbox.close()});
