'use strict'


const slide_nav = document.querySelectorAll('.slide_nav');
slide_nav.forEach((el,index) =>{
    el.addEventListener('click',function(){
        active_slide(index)
    })
})

function active_slide(id){
    slide_nav.forEach(el =>{
        if(el.dataset.slide == id){
            el.classList.add('active');
            
        }else{
            el.classList.remove('active');
       
        }
    })
}   
var h1shi = document.getElementById('contenti_h1');
var spani = document.getElementById('spani1');
var backgroundi = document.getElementById('backroundi_tundrru');
console.log(spani);

const ndrroe1 =  function(){
    backgroundi.style.backgroundImage="url('/images/weeding.jpg')"
    h1shi.firstChild.textContent = "Weeding";
    spani.innerHTML = "Couple";
    spani.style.color="#e7605a";
}

const ndrroe2 =  function(){
    backgroundi.style.backgroundImage="url('/images/weeding2.jpg')"
    h1shi.firstChild.textContent = "Lorem";
    spani.innerHTML = "Ipsum";
    spani.style.color="#e7605a";
}

const ndrroe3 =  function(){
    backgroundi.style.backgroundImage="url('/images/weeding3.jpg')"
    h1shi.firstChild.textContent = "1";
    spani.innerHTML = "2";
    spani.style.color="#e7605a";
}