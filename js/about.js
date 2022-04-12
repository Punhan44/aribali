
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
  



// dropdownmenu
const menuDownUp=document.querySelector('.absoluty-menu-bar');
const nav=document.querySelectorAll('.navigation');

menuDownUp.addEventListener('click',()=>{

nav.forEach(navm=>{
  navm.classList.toggle('navigation-add');
})

if(menuDownUp.firstChild.classList=='fa-solid fa-bars'){
  menuDownUp.innerHTML='<i class="fa-solid fa-xmark"></i>'
}else{
  menuDownUp.innerHTML='<i class="fa-solid fa-bars"></i>'
}


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
