import Swiper from 'swiper/bundle';

jQuery(document).ready(function( $ ) {
    const mainslider = new Swiper('.home-swiper', {
        loop: true,

        pagination: {
            el: ".swiper-pagination",
            type: "progressbar",
        },

        navigation: {
            nextEl: '.swiper-button .swiper-button-next',
            prevEl: '.swiper-button .swiper-button-prev',
        },
    });
});