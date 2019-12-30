
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

    $('.form-open').click(function() {
        $('.form').toggle('d-none');
        $('.product__chat-box').toggle('d-none');
    });

    $('.form-btn').click(function() {
        $('.form').toggle('d-none');
        $('.product__chat-box').toggle('d-none');
    });


    // $(window).resize(function () {
    //     if ($(window).width() <= 800) {
    //         $('.lk-min__link').removeAttr('href').css("cursor","pointer");
    //     } else if ($(window).width() >= 801) {
    //         $('.lk-min__link').attr('href', 'lk-login.html');
    //     };
    // });

    $('.lk-min__link').click(function() {
        $('.lk-min').toggle('d-none');
    });

    $('.cards__btn').click(function(e) {
        e.preventDefault();
        $('.cards-close').toggleClass('open-vis-cards');
    });

    $('.said-bar-opening').click(function(e) {
        e.preventDefault();
        $('.said-bar').addClass('said-bar-open');
        $('.said-bar-opening').addClass('d-none');
        $('.said-bar-close').removeClass('d-none');
    });

    $('.said-bar-close').click(function(e) {
        e.preventDefault();
        $('.said-bar').removeClass('said-bar-open');
        $('.said-bar-opening').removeClass('d-none');
        $('.said-bar-close').addClass('d-none');
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


  var $range = $(".js-range-slider"),
    $inputFrom = $(".js-input-from"),
    $inputTo = $(".js-input-to"),
    instance,
    min = 5000,
    max = 50000,
    from = 0,
    to = 0;

$range.ionRangeSlider({
	skin: "round",
    type: "double",
    min: min,
    max: max,
    from: 5000,
    to: 50000,
    onStart: updateInputs,
    onChange: updateInputs
});
instance = $range.data("ionRangeSlider");

function updateInputs (data) {
	from = data.from;
    to = data.to;
    
    $inputFrom.prop("value", from);
    $inputTo.prop("value", to);	
}

$inputFrom.on("input", function () {
    var val = $(this).prop("value");
    
    // validate
    if (val < min) {
        val = min;
    } else if (val > to) {
        val = to;
    }
    
    instance.update({
        from: val
    });
});

$inputTo.on("input", function () {
    var val = $(this).prop("value");
    
    // validate
    if (val < from) {
        val = from;
    } else if (val > max) {
        val = max;
    }
    
    instance.update({
        to: val
    });
});

var $range = $(".js-range-slider-wid"),
    $inputFrom = $(".js-input-from-wid"),
    $inputTo = $(".js-input-to-wid"),
    instance,
    min = 12,
    max = 45,
    from = 0,
    to = 0;

$range.ionRangeSlider({
    skin: "round",
    type: "double",
    min: min,
    max: max,
    from: 12,
    to: 45,
    onStart: updateInputs,
    onChange: updateInputs
});
    instance = $range.data("ionRangeSlider");

function updateInputs (data) {
    from = data.from;
    to = data.to;

    $inputFrom.prop("value", from);
    $inputTo.prop("value", to);	
}

$inputFrom.on("input", function () {
    var val = $(this).prop("value");

    // validate
    if (val < min) {
        val = min;
    } else if (val > to) {
        val = to;
    }

    instance.update({
        from: val
    });
});

$inputTo.on("input", function () {
    var val = $(this).prop("value");

    // validate
    if (val < from) {
        val = from;
    } else if (val > max) {
        val = max;
    }

    instance.update({
        to: val
    });
});

var $range = $(".js-range-slider-dim"),
    $inputFrom = $(".js-input-from-dim"),
    $inputTo = $(".js-input-to-dim"),
    instance,
    min = 12,
    max = 45,
    from = 0,
    to = 0;

$range.ionRangeSlider({
    skin: "round",
    type: "double",
    min: min,
    max: max,
    from: 12,
    to: 45,
    onStart: updateInputs,
    onChange: updateInputs
});
    instance = $range.data("ionRangeSlider");

function updateInputs (data) {
    from = data.from;
    to = data.to;

    $inputFrom.prop("value", from);
    $inputTo.prop("value", to);	
}

$inputFrom.on("input", function () {
    var val = $(this).prop("value");

    // validate
    if (val < min) {
        val = min;
    } else if (val > to) {
        val = to;
    }

    instance.update({
        from: val
    });
});

$inputTo.on("input", function () {
    var val = $(this).prop("value");

    // validate
    if (val < from) {
        val = from;
    } else if (val > max) {
        val = max;
    }

    instance.update({
        to: val
    });
});