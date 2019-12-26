
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


  $('.hamburger').click(function() {
    $('.menu-collapse').toggleClass('nav-none');
    $('.nav__list').toggleClass('nav__list_open');
    $('.nav__list_menu-hiden_main').toggleClass('d-block');
    $('.hamburger__item').toggleClass('hamburger__item_open');
  });
  
  $('.sub > a').click(function(){
    $('.sub ul').slideUp();
      if ($(this).next().is(":visible")){
          $(this).next().slideUp();
      } else {
        $(this).next().slideToggle();
      }
    return false;
  });

    $('.menu-collapse > ul > li > a').click(function(){
      $('.menu-collapse > ul > li > a, .sub a').removeClass('active');
      $(this).addClass('active');
      }),
      $('.sub ul li a').click(function(){
        $('.sub ul li a').removeClass('active');
        $(this).addClass('active');
    });

    $('.sub1 > a').click(function(){
        $('.sub1 ul').slideUp();
        if ($(this).next().is(":visible")){
            $(this).next().slideUp();
        } else {
          $(this).next().slideToggle();
        }
      return false;
    });

    $('.menu-collapse > ul > li > a').click(function(){
      $('.menu-collapse > ul > li > a, .sub1 a').removeClass('active');
      $(this).addClass('active');
      }),
      $('.sub1 ul li a').click(function(){
        $('.sub1 ul li a').removeClass('active');
        $(this).addClass('active');
    });
