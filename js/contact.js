// submit

const nameContact=document.getElementById('nameContact');
const surnameContact=document.getElementById('surnameContact');
const mailContact=document.getElementById('mailContact');
const telphoneContact=document.getElementById('telephoneContact');
const yourMessage=document.getElementById('your-mesage');
const btnContact=document.getElementById('btnFContact');
const labelMessage=document.querySelector('.text-succes-error')
// const labelName=document.getElementById('nameLabel');
// const labelSurName=document.getElementById('surnameLabel');
// const labelMail=document.getElementById('mailLabel');

btnContact.addEventListener('click',(e)=>{
    
   if(nameContact.value.trim()===""){
       errorMessage('xananı doldurun',nameContact)
   }else{
succesMessage(nameContact)
   }

   if(surnameContact.value.trim()===""){
       errorMessage('Xananı doldurun',surnameContact)
   }else{
       succesMessage(surnameContact)
   }

   
   if(mailContact.value.trim()===""){
    
    ValidateEmail(mailContact)
}else{
    ValidateEmail(mailContact)
}

if(telphoneContact.value.trim()===""  ){
    errorMessage('Xananı doldurun',telphoneContact)
}else if(telphoneContact.value.length <10){
    errorMessage('Nömrənizi tam doldurun',telphoneContact)
}
else{
    succesMessage(telphoneContact)
}

if(yourMessage.value.trim()===""  ){
    errorMessage('Xananı doldurun',yourMessage)
}else if(yourMessage.value.length <10){
    errorMessage('10 hərfdən çox olmalıdır',yourMessage)
}
else{
    succesMessage(yourMessage)
}

   
    
})

console.log(telphoneContact.value.length)


function errorMessage(message,input){
    const formControl=input.previousElementSibling;
    console.log(formControl)

    formControl.style.display='block';
    formControl.style.color="red";
    input.style.borderColor="red"
    formControl.innerHTML=message;
}

function succesMessage(input){
    const formControl=input.previousElementSibling;
    input.style.borderColor='green';
    formControl.style.display='none';
}


function ValidateEmail(mail) 
{
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail.value))
  {
    succesMessage(mailContact)
  }else
  errorMessage('Xananı doldurun',mailContact)
}


// shop


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
