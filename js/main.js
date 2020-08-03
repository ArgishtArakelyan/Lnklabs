

$(document).ready(function() {
    $('.AboutUs .item1').css('height', $('.AboutUs .item1 .img').height() + 32);
    $('.interactive-panels .img-right-text').css('height', $('.interactive-panels .img-right-text .img').height() + 32);
});


$(window).resize(function(){ 
    $('.AboutUs .item1').css('height', $('.AboutUs .item1 .img').height() + 32);
   $('.interactive-panels .img-right-text').css('height', $('.interactive-panels .img-right-text .img').height() + 32);
});

 

$(window).scroll(function() {
    var scroll = $(window).scrollTop();

//     if (scroll > 0) {
//         $('.navigation-wrap').addClass('bg-shap top');
//         $(".black .menu .logo img").attr("src","../img/logo_white.png");
//     }
 
//     if (scroll < 400) {
//         $('.navigation-wrap').removeClass('bg-shap');
//         $(".black .menu .logo img").attr("src","../img/logo_black.png");
//     }

    if (scroll > 0) {
        $('.temperature-scanner .top-wrap .menu').addClass('bg-shap');
    }

    if (scroll < 72) {
        $('.temperature-scanner .top-wrap .menu').removeClass('bg-shap');
    }
});

$('.product_card_wrap .slider').owlCarousel({
    loop:false,
    nav:false,
    dots:true,
    dotsData:true,
    items:1,
    smartSpeed:500
});


$('.product_card_wrap .tab_menu ul li').on('click', function() {
    var attr = $(this).attr('rel');
    $('.product_card_wrap .tab_menu ul li').removeClass('active')
    $(this).addClass('active');
    $('.product_card_wrap .tab_items >ul >li').hide();
    $('#' + attr).show();
});


$('.product_card_1 .item-wrap .item ul li , .product_card_2 .item-wrap .item ,.product_card_3 .item-wrap .item ul li').on('click', function() {
    $(this).toggleClass('active');
});

$('.plus_minus .minus').click(function () {
    var $input = $(this).parent().find('input');
    var count = parseInt($input.val()) - 1;
    count = count < 1 ? 1 : count;
    $input.val(count);
    $input.change();
    return false;
});

$('.plus_minus .plus').click(function () {
    var $input = $(this).parent().find('input');
    $input.val(parseInt($input.val()) + 1);
    $input.change();
    return false;
});


$( function() {
    $( "#preferred_date" ).datepicker();
  } );


  $(document).on("click",".m-lines",function() {
	$(this).toggleClass('open');

    if ($(this).hasClass("open")) {
        $('.popup_menu').fadeIn();
        $('body').addClass('hidden-b');
        $('.welcome-wrap header .inner-wrap .menu ul').addClass('open');
    }else{
        $('.popup_menu').fadeOut();
        $('body').removeClass('hidden-b');
        $('.welcome-wrap header .inner-wrap .menu ul').removeClass('open');
    }
}); 