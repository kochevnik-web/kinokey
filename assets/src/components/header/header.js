import gsap from 'gsap';
import InputMask from 'inputmask';

jQuery(document).ready(function( $ ) {
    $(document).on('click', '.hamburger', function(){
        $(this).toggleClass('is-active');
        $('.header-nav ul').toggleClass('__show');
    });
});