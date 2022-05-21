import gsap from 'gsap';
import InputMask from 'inputmask';

jQuery(document).ready(function( $ ) {
    $(document).on('click', '.hamburger', function(){
        $(this).toggleClass('is-active');
        $('.header-nav ul').toggleClass('__show');
    });

    const colors = ['#C9223A', '#CFFD51', '#FFE75F', '#AC7BD7'];
    $('.header-logo a').hover(function(){
        $(this).find('svg path').css({fill: colors[Math.floor(Math.random() * 4)]})
    }, function(){
        $(this).find('svg path').css({fill: '#fff'})
    });
});