let serviceDelivery = document.querySelector('.service-item-delivery');
let serviceGuarantee = document.querySelector('.service-item-guarantee');
let serviceCredit = document.querySelector('.service-item-credit');

function resetCurrService(){    
    document.querySelector('.service-item.active').classList.remove('active');
    document.querySelector('.about-service.active').classList.remove('active');
};

serviceDelivery.addEventListener('click', function(e){
    resetCurrService();
    serviceDelivery.classList.add('active');
    document.querySelector('.about-service-delivery').classList.add('active');
});

serviceGuarantee.addEventListener('click', function(e){
    resetCurrService();
    serviceGuarantee.classList.add('active');
    document.querySelector('.about-service-guarantee').classList.add('active');
});

serviceCredit.addEventListener('click', function(e){
    resetCurrService();
    serviceCredit.classList.add('active');
    document.querySelector('.about-service-credit').classList.add('active');
});

let modalClose = document.querySelector('.modal-close-btn');
let mapSmall = document.querySelector('.map-small');
let mapPopup = document.querySelector('.map-popup');
let writeUsBtn = document.querySelector('.write-us-btn');
let feedbackForm = document.querySelector('.feedback-modal');

modalClose.addEventListener('click', function(e){
    e.preventDefault();
    document.querySelector('.modal-show').classList.remove('modal-show');
});

mapSmall.addEventListener('click', function(e){
    e.preventDefault();
    mapPopup.classList.add('modal-show');
});

writeUsBtn.addEventListener('click', function(e){
    e.preventDefault();
    feedbackForm.classList.add('modal-show');
});

let bookmarkBtn = document.querySelector('.catalog-item-bookmark');
console.log(bookmarkBtn);
let cartModal = document.querySelector('.cart-modal');

bookmarkBtn.addEventListener('click', function(){
    cartModal.classList.add('modal-show');
});

