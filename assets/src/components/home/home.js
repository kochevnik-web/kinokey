import Swiper from 'swiper/bundle';
import 'youtube-background';
import window from "inputmask/lib/global/window";

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

    $('[data-vbg]').youtube_background();

    function changeAspectRatio() {
        if(window.innerWidth < 992){
            $('#slide-5 .___item img').css({aspectRatio: (window.innerWidth - 30) + '/' + (590 / 3)})
        }else{
            $('#slide-5 .___item img').css({aspectRatio: '567/613'})
        }
    }

    changeAspectRatio()

    $(window).resize(function(){
        changeAspectRatio()
    })

});