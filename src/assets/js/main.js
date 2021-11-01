$(document).ready(function(){


    $('[data-scroll]').on('click', function(e){
        e.preventDefault();

        var elemId = $(this).data('scroll');
        var elemOffset = $(elemId).offset().top;

        $('html, body').animate({
            scrollTop: elemOffset
        },1000);

    });

    var $menu = $(".card__wrapper");
    let $blockScroll = $(".screenshot");
    let $blockScrollHeight = $($blockScroll).height();
    let counterScroll = 0;
    console.log($blockScrollHeight);

    $(window).scroll(function(){
        if ($(this).scrollTop() > 528){
            $menu.addClass("stop_fixed");
        } else {
            $menu.removeClass("stop_fixed");
        }

        if ( $(this).scrollTop() > 85 ){
            var delta = $(this).scrollTop() - 85;
            $('.card_mask').height(386 - delta);
        } else {
            $('.card_mask').height(386);
        }

    });

    if ( $(window).scrollTop() > 528 ){
        $menu.addClass("stop_fixed");
    } else {
        $menu.removeClass("stop_fixed");
    }

    var swiper = new Swiper(".leaders_slider .swiper", {
        slidesPerView: 5,
        spaceBetween: 20,
        navigation: {
        nextEl: ".nav_slider .swiper-button-next",
        prevEl: ".nav_slider .swiper-button-prev",
        },
    });

    $('.burger').on('click', function() {
        let $body = $('body');
        $(this).parents().find('.header__menu').toggleClass('_active');
        $($body).toggleClass('hidden');
        $('.burger__menu').toggleClass('_active');
    })

});