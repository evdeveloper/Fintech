/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/assets/js/main.js":
/*!*******************************!*\
  !*** ./src/assets/js/main.js ***!
  \*******************************/
/***/ (function() {

eval("$(document).ready(function(){\n\n\n    $('[data-scroll]').on('click', function(e){\n        e.preventDefault();\n\n        var elemId = $(this).data('scroll');\n        var elemOffset = $(elemId).offset().top;\n\n        $('html, body').animate({\n            scrollTop: elemOffset\n        },1000);\n\n    });\n\n    var $menu = $(\".card__wrapper\");\n    let $blockScroll = $(\".screenshot\");\n    let $blockScrollHeight = $($blockScroll).height();\n    let counterScroll = 0;\n    console.log($blockScrollHeight);\n\n    $(window).scroll(function(){\n        if ($(this).scrollTop() > 528){\n            $menu.addClass(\"stop_fixed\");\n        } else {\n            $menu.removeClass(\"stop_fixed\");\n        }\n\n        if ( $(this).scrollTop() > 85 ){\n            var delta = $(this).scrollTop() - 85;\n            $('.card_mask').height(386 - delta);\n        } else {\n            $('.card_mask').height(386);\n        }\n\n    });\n\n    if ( $(window).scrollTop() > 528 ){\n        $menu.addClass(\"stop_fixed\");\n    } else {\n        $menu.removeClass(\"stop_fixed\");\n    }\n\n    var swiper = new Swiper(\".leaders_slider .swiper\", {\n        slidesPerView: 5,\n        spaceBetween: 20,\n        navigation: {\n        nextEl: \".nav_slider .swiper-button-next\",\n        prevEl: \".nav_slider .swiper-button-prev\",\n        },\n    });\n\n    $('.burger').on('click', function() {\n        let $body = $('body');\n        $(this).parents().find('.header__menu').toggleClass('_active');\n        $($body).toggleClass('hidden');\n        $('.burger__menu').toggleClass('_active');\n    })\n\n});\n\n//# sourceURL=webpack://fintech/./src/assets/js/main.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/assets/js/main.js"]();
/******/ 	
/******/ })()
;