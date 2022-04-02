var backdrop = document.querySelector('.backdrop');
var modal = document.querySelector('.modal');
var selectPlanButtons = document.querySelectorAll('.plan button');
var toggleButton = document.querySelector('.toggle-button');
var mobileNav = document.querySelector('.mobile-nav');
var modalNo = document.querySelector('.modal__action--negative');
var ctaButton = document.querySelector('.main-nav__item--cta');

console.log(backdrop);

console.log(selectPlanButtons);

selectPlanButtons.forEach(x => {
   x.addEventListener('click',()=>{
         
         modal.classList.add('open');
         backdrop.style.display = 'block';
         setTimeout(()=>{
            backdrop.classList.add('open');
        },10);
   });
})

  function closeModel()  {
     if(modal){
         modal.classList.remove("open");
         }
         backdrop.classList.remove('open');
        
         setTimeout(function(){
            backdrop.style.display = 'none';
        },200);


    };


backdrop.addEventListener('click',()=>{
   
    mobileNav.classList.remove('open');
    closeModel();
});

modalNo.addEventListener('click',()=>{
    mobileNav.style.display = 'none';
    closeModel();
});

toggleButton.addEventListener('click',()=>{
    mobileNav.classList.add('open');
    backdrop.style.display = 'block';
    setTimeout(()=>{
        backdrop.classList.add('open');
    },10);

});

ctaButton.addEventListener('animationstart',(e)=>{
    
});

ctaButton.addEventListener('animationend',(e)=>{
    
});

ctaButton.addEventListener('animationiteration',(e)=>{
    
});
