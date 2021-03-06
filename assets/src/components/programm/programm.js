import Swiper from 'swiper/bundle';
import tooltip from 'bootstrap';

jQuery(document).ready(function( $ ) {
     new Swiper('.programm-swiper', {
        loop: true,
        slidesPerView: 3,
        spaceBetween: 30,
        slidesPerGroup: 3,
        loopFillGroupWithBlank: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
         breakpoints: {
             1200: {
                 slidesPerView: 7,
                 slidesPerGroup: 7
             },
             // when window width is >= 480px
             992: {
                 slidesPerView: 5,
                 slidesPerGroup: 5,
             },
             // when window width is >= 640px
             768: {
                 slidesPerView: 4,
                 slidesPerGroup: 4,
             }
         }
    });

    $('body').tooltip({
        selector: '[data-toggle="tooltip"]',
        html: true,
        trigger: 'hover',
        placement: 'bottom',
        delay: {
            show: 50,
            hide: 400
        }
    })

    $('.swiper-slide__tab').on('click', function(){
        $('.swiper-slide__tab').removeClass('active')
        $('.programm-list').removeClass('_show').hide()
        $('#' + $(this).data('id')).fadeIn(400)
        $(this).addClass('active')
    })

    function onlineProgress () {
        const item = $('.programm-list-item.online');
        const date = new Date().getTime()
        const start = item.data('start') * 1000
        const end = item.data('end') * 1000
        if(start < date && date < end){
            item.find('.programm-list-item__line').css({width: ((date - start) / ((end - start) / 100)) + '%'})
        }
    }

    setInterval(() => {
        onlineProgress()
    }, 3000)

    onlineProgress()

});