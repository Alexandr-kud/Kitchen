
$(document).ready(function () {

    $('.panel-heading').click(function() {
        $(this).toggleClass('in').next().slideToggle();
        $('.panel-heading').not(this).removeClass('in').next().slideUp();
    });

    $('.main__slaider').slick({
        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<img class="slaider-arrows slaider-arrows__left" id="slaider-arrows__left" src="img/arrow-left.png"><img>',
        nextArrow: '<img class="slaider-arrows slaider-arrows__right" id="slaider-arrows__right" src="img/arrow-right.png"><img>',
        responsive: [
            {
            breakpoint: 900,
            settings: {
                arrows: false,
                centerMode: false,
                centerPadding: '0px',
                slidesToShow: 1
            }
            },
            {
            breakpoint: 480,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '0px',
                slidesToShow: 1
            }
            }
        ]
    });

    $('.close').click(function() {
        $('.search').toggle('d-none');
    });

    $('.close-lk').click(function() {
        $('.lk-min').toggle('d-none');
    });

    $('.search-open').click(function() {
        $('.search').toggle('d-none');
    });

    $('.opened-sub-menu').click(function() {
        $('.open-sub-menu').toggle('d-none');
    });

    $('.close-open-menu').click(function() {
        $('.open__menu').toggle('d-none');
    });

    $('.hamburger').click(function() {
        $('.open__menu').toggle('d-none');
    });


    // $(window).resize(function () {
    //     if ($(window).width() <= 800) {
    //         $('.lk-min__link').removeAttr('href').css("cursor","pointer");
    //     } else if ($(window).width() >= 801) {
    //         $('.lk-min__link').attr('href', 'lk-login.html');
    //     };
    // });

    $('.lk-min__link').click(function() {
        console.log('клик');
        $('.lk-min').toggle('d-none');
    });

});


var swiper = new Swiper('.swiper-container', {
    pagination: {
      el: '.swiper-pagination',
      type: 'fraction',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

