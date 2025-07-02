



let isPlaying = true;


const esg = new Swiper('.swiper5', {
slidesPerView: 1, 
spaceBetween: 30,
loop: true,
centeredSlides: true,
// autoplay: {
//     delay: 3000,
//     disableOnInteraction: false,
// },
pagination: {
    el: '.swiper-pagination',
    type: 'progressbar',
},
navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
},
});


