
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

    $('.search-open').click(function() {
        $('.search').toggle('d-none');
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



