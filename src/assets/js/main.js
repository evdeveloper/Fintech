$(document).ready(function(){

    var $menu = $(".card__wrapper");

    $(window).scroll(function(){
        console.log($(this).scrollTop());
        if ( $(this).scrollTop() > 528 ){
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

    });//scroll

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

});