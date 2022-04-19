
// HEADER 


const header = document.querySelector('.relative-header');
const stickyHeader = document.querySelector('.sticky-header');
const backToTop = document.querySelector('.back-to-top')


window.addEventListener('scroll', () => {
  const scrollHeight = window.pageYOffset;
  const headerheight = header.getBoundingClientRect().height;

  if (scrollHeight > headerheight) {
    header.style.display = 'none';
    stickyHeader.style.transform = 'translateY(0%)'
  } else {
    header.style.display = 'flex';
    stickyHeader.style.transform = 'translateY(-100%)'
  }

  if (scrollHeight > 500) {
    backToTop.style.display = 'block';
  } else {
    backToTop.style.display = 'none'
  }



});


//    SLIDER


const sliders = [
  
  {
  url: 'image/girl.png',
  text: '"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi." JULIA KLEIN BIOLOGIST a “The first step to becoming a successful beekeeper is to learn as much as you can about the bees themselves. Beehives require management and good stewardship, which take time.”',
  fullname: "ANNA MORIBALDI",
  job:'HONEY LOVER'
},
{
  url:'image/girl two.png',
  text:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi.",
  fullname:'Julia Klein',
  job:'Biologist'
  
}


];

let count=0;



function showSlider(){
 var slider=document.querySelector('.slider');
 


count++;
if(count>sliders.length-1){
  count=0
}
 slider.innerHTML=`
   <div class="slider-img">
   <img src="${sliders[count].url}" class="slider-image" alt="">
   <p class="mark"><i class="fa-regular fa-quote-right"></i></p>
</div>
<div class="slider-text">
   <em class="slider-txt">
     ${sliders[count].text}  </em>
   <h3>${sliders[count].fullname}</h3>
   <h5 class="slider-h">${sliders[count].job}</h5>
</div>`
   

}
showSlider()

setInterval(()=>{
 
  showSlider()
 
},7000)



// mail


const mailBtn=document.querySelector('.mail button');
const mailInput=document.querySelector('.mail-input')
const mailSuccess=document.querySelector('.mail-succes');
const mailError=document.querySelector('.mail-error');

mailBtn.addEventListener('click',()=>{
  const values=mailInput.value.trim();
 
  if(values !==''){
    ValidateEmail(values)
  }else{
    mailError.style.opacity='1';

    setInterval(()=>{
     mailError.style.opacity='0';
    },4000)
  }
  
})


function ValidateEmail(mail) 
{
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail))
  {
   mailSuccess.style.opacity='1';

   setInterval(()=>{
    mailSuccess.style.opacity='0';
   },4000)
  }else{
    mailError.style.opacity='1';

    setInterval(()=>{
     mailError.style.opacity='0';
    },4000)
  }
    
}


// index.html modal-image

const images=document.querySelectorAll('.galery-img')
const myModal=document.getElementById('myModal');
const img=document.getElementById('img01');
const close=document.querySelector('.close');
const nextBtn=document.querySelector('.pro-right');
const prevBtn=document.querySelector('.pro-left');



images.forEach(item=>{
  item.addEventListener('click',()=>{
    const imgSrc=item.src;
    img.src=imgSrc;

   myModal.style.display='block'
  })
})

close.addEventListener('click',()=>{
  myModal.style.display='none'
})

nextBtn.addEventListener('click',()=>{

  if(count<images.length-1){
    count++
  }else{
count=0
  }
   img.src=images[count].src
  
 
})

prevBtn.addEventListener('click',()=>{
  if(count>0){
    count--
  }else{
    count=images.length-1
  }
  img.src=images[count].src
})


// video modal

const playModal=document.querySelector('.absoluty-play');
const iframeDisplay=document.querySelector('.iframe-page-parent');
const closeIframe=document.querySelector('.close-iframe-icon');
const mfPage=document.querySelector('.mfp-bg');



playModal.addEventListener('click',()=>{
  iframeDisplay.style.display='block'
})

closeIframe.addEventListener('click',()=>{
  iframeDisplay.style.display='none';
})
mfPage.addEventListener('click',()=>{
  iframeDisplay.style.display='none';
})






// dropdownmenu
const menuDownUp=document.querySelectorAll('.absoluty-menu-bar');
const nav=document.querySelectorAll('.navigation');

menuDownUp.forEach(men=>{


men.addEventListener('click',()=>{
  
  console.log('adfa')
nav.forEach(navm=>{
  navm.classList.toggle('navigation-add');
})

if(men.firstChild.classList=='fa-solid fa-bars'){
  menuDownUp.innerHTML='<i class="fa-solid fa-xmark"></i>'
}else{
  menuDownUp.innerHTML='<i class="fa-solid fa-bars"></i>'
}


})
})

const dropIcon=document.querySelectorAll('.menu-item');
const favICondr=document.querySelectorAll('.drop-icon')
const dropdownLittle=document.querySelectorAll('.dropdown');

favICondr.forEach(dr=>{
 dr.parentElement.addEventListener('click',()=>{
  dropdownLittle.forEach(element=>{
    element.classList.toggle('dropdown-add-menu')
   
  });

  
  favICondr.forEach(fav=>{
  if(fav.firstChild.classList=='fa-solid fa-caret-right'){
 
      fav.innerHTML='<i class="fa-solid fa-caret-down"></i>'
  }else{
    fav.innerHTML='<i class="fa-solid fa-caret-right"></i>'
  }
})

 })
 
})
