function resetCurrService(){    
    document.querySelector('.service-item.active').classList.remove('active');
    document.querySelector('.about-service.active').classList.remove('active');
};

let serviceDelivery = document.querySelector('.service-item-delivery');
if(serviceDelivery){
    serviceDelivery.addEventListener('click', function(evt){
        resetCurrService();
        serviceDelivery.classList.add('active');
        document.querySelector('.about-service-delivery').classList.add('active');
    });
}

let serviceGuarantee = document.querySelector('.service-item-guarantee');
if(serviceGuarantee){
    serviceGuarantee.addEventListener('click', function(evt){
        resetCurrService();
        serviceGuarantee.classList.add('active');
        document.querySelector('.about-service-guarantee').classList.add('active');
    });
}

let serviceCredit = document.querySelector('.service-item-credit');
if(serviceCredit){
    serviceCredit.addEventListener('click', function(evt){
        resetCurrService();
        serviceCredit.classList.add('active');
        document.querySelector('.about-service-credit').classList.add('active');
    });
}

function closeModal(modal){
    let close = modal.querySelector('.modal-close-btn');
    let closeHandler = function(evt){
        evt.preventDefault();
        modal.classList.remove('modal-show');
        close.removeEventListener('click', closeHandler);
    }
    close.addEventListener('click', closeHandler);
}

let mapSmall = document.querySelector('.map-small');
let mapPopup = document.querySelector('.map-popup');
if(mapSmall && mapPopup){
    mapSmall.addEventListener('click', function(evt){
        evt.preventDefault();
        mapPopup.classList.add('modal-show');
        closeModal(mapPopup);
    });   
}


let writeUs = document.querySelector('.write-us-btn');
let feedbackForm = document.querySelector('.feedback-modal');
if(writeUs && feedbackForm){
    writeUs.addEventListener('click', function(evt){
        evt.preventDefault();
        feedbackForm.classList.add('modal-show');
        closeModal(feedbackForm);
    });
}

let cartModal = document.querySelector('.cart-modal');

function showCartModal(){
    cartModal.classList.add('modal-show');
    closeModal(cartModal);
}

function addToBookmarks(){
    return addTo('.bookmark');
}

function addToCart(){
    showCartModal();
    return addTo('.cart');
}

function addTo(s){
    let element = document.querySelector(s);
    element.classList.add('active');
    let counter = element.querySelector('.counter');
    counter.innerHTML = parseInt(counter.innerHTML) + 1;
}

var catalogItems = document.querySelectorAll('.catalog-item');
for(i = 0; i < catalogItems.length; i++){
    let catalogItem = catalogItems[i];
    catalogItem.querySelector('.catalog-item-bookmark').addEventListener('click', addToBookmarks);
    catalogItem.querySelector('.catalog-item-buy').addEventListener('click', addToCart);
}

