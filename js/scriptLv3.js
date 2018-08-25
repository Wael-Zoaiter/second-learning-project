/*global $, alert, console
*/

$(function () {
    'use strict';
    $('html').niceScroll();
    
    $('header').height($(window).height());
    
    $('header section').css('paddingTop', ($(window).height() - $('header section').height()) / 2);
    
    $('header .arrow i').click(function () {
        $('html, body').animate({
            scrollTop: $('.features').offset().top
        }, 1000);
    });
    
    $('.our-work .show-more').click(function () {
        $('.our-work .hidden').fadeIn(1000);
        $(this).fadeOut(1000);
    });
    
    var leftArrow = $('.testim .fa-chevron-left'),
        rightArrow = $('.testim .fa-chevron-right');
    
    function checkArrow() {
        if ($('.slide:first').hasClass('active')) {
            leftArrow.fadeOut();
        } else {
            leftArrow.fadeIn();
        }
        if ($('.slide:last').hasClass('active')) {
            rightArrow.fadeOut();
        } else {
            rightArrow.fadeIn();
        }
    }
    checkArrow();
    
    function mySlider() {
        $('.testim i').click(function () {
            if ($(this).hasClass('fa-chevron-right')) {
                $('.testim .active').fadeOut(100, function () {
                    $(this).removeClass('active').next('.slide').addClass('active').fadeIn();
                    checkArrow();
                });
            } else {
                $('.testim .active').fadeOut(100, function () {
                    $(this).removeClass('active').prev('.slide').addClass('active').fadeIn();
                    checkArrow();
                });
            }
        });
    }
    mySlider();
    
});