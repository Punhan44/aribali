// remove

const removeBtn=document.querySelectorAll('.remove-tr');
const staticInfo=document.querySelector('.cart-product-static-info');
const allCart=document.querySelector('.section-add-cart-header');
const cartEmpty=document.querySelector('.section-cart-empty')


removeBtn.forEach(element => {
    element.addEventListener('click',(e)=>{
        const currentButton=e.target.parentElement;

        currentButton.remove();

        if(staticInfo.children.length===0){
            allCart.style.display='none';
             cartEmpty.style.display='block'
        }
        
    })
});


// price add

const priceMoney=document.querySelectorAll(".price-th");
const btnLeft=staticInfo.querySelectorAll('.fa-chevron-left');
const btnRight=staticInfo.querySelectorAll('.fa-chevron-right');

 let countt;


 

btnRight.forEach(btnRightelement => {
    btnRightelement.addEventListener('click',(e)=>{
        const btnRightElementNumber=e.target.previousElementSibling;
         countt=(parseInt(btnRightElementNumber.innerHTML))
       
        if(countt<10){
            countt++;
            
        }else{
            alert("Maksimum 10 ədəd sifariş edə bilərsiniz")
        }
        btnRightElementNumber.innerHTML=countt;
       
    })
    

});

btnLeft.forEach(btnelement=>{
btnelement.addEventListener('click',(e)=>{
    const btnLeftElementNumber=e.target.nextElementSibling
  countt=(parseFloat(btnLeftElementNumber.innerHTML))
if(countt>1){
    countt--;
    
}else{
    countt=1;
}
btnLeftElementNumber.innerHTML=countt;
});





})

let cartUpdate=document.querySelector('.cart-update-btn');
let number=document.querySelector('.number');

let stringToNumber= parseFloat(number.parentElement.previousElementSibling.innerHTML)
console.log(stringToNumber)

cartUpdate.addEventListener('click',()=>{
    priceMoney.forEach(element => {
        
            let subTotal=element.nextElementSibling.nextElementSibling;
            subTotal.innerHTML=stringToNumber*countt+".00" + " Manat"
    
        
    

    
       
      });
  
})



// coupon

const cartInput=document.querySelector('.cart-input');
const cartBtn =document.getElementById('cartInputBtn');
const cartCouponDiv=document.querySelector('.section-blog-cart .cart-coupon')


cartBtn.addEventListener('click',()=>{
    if(cartInput.value.trim() ===""){
        cartInput.style.borderColor='red';
       function colorBordr(){

        cartInput.style.borderColor='rgb(133, 133, 133)';
       }
       
 setTimeout(colorBordr,2000)
       
    }else if(cartInput.value ==="Punhan"){
        cartInput.style.borderColor='green';

          function colorBordr(){

        cartInput.style.borderColor='rgb(133, 133, 133)';
       }
        setTimeout(colorBordr,2000)
    }else{
        cartCouponDiv.style.display='block';
        
        function colorBordr(){

            cartCouponDiv.style.display='none';
           }
            setTimeout(colorBordr,4000)
    }

cartInput.value="";
})



//shipping add

const shippingAddCart=document.querySelector('.adress-enter-down-down');
const shippingAdd=document.getElementById('shippingAdd');

shippingAdd.addEventListener('click',()=>{
    shippingAddCart.style.display='block'
})


// async

const cityes=document.getElementById('city');

let html;
async function Countries(){
    let res=await fetch('https://countriesnow.space/api/v0.1/countries/population/cities');
    let data = await res.json();

   
    for (let i= 122; i<=124; i++) {
        html +=  `<option value="Select city">${data.data[i].city}</option>` 

    }

    cityes.innerHTML=html;
    


}

Countries()

const addresAddInput=document.querySelector('.adress-enter');
const adressBtn=document.querySelector('.adress-enter-down .btn');
const subtotal=parseInt(document.querySelector('.subtotal-number').innerHTML);
const totalPric=document.querySelector('.total-price-p-number');
const defaultText=document.querySelector('.default-text-p');

adressBtn.addEventListener('click',()=>{
    if(addresAddInput.value.trim() ===""){
        addresAddInput.style.borderColor='red'
    }else{
  const subtotaladd=subtotal + 5
  totalPric.innerHTML=subtotaladd+'.00' + " Manat"
  addresAddInput.style.borderColor='green';

  defaultText.innerHTML='Çatdırılma Ünvanınız Seçildi' ;
  shippingAddCart.style.display='none';
  shippingAdd.innerText='Dəyiştir'
    }

    function colorBordr(){

        addresAddInput.style.borderColor='rgb(133, 133, 133)';
       }
       
 setTimeout(colorBordr,2000)

 
})


console.log(cityes.value)
