

$(document).ready(function() {
    $('.AboutUs .item1').css('height', $('.AboutUs .item1 .img').height() + 32);
   $('.interactive-panels .img-right-text').css('height', $('.interactive-panels .img-right-text .img').height() + 32);
});


$(window).resize(function(){ 
    $('.AboutUs .item1').css('height', $('.AboutUs .item1 .img').height() + 32);
   $('.interactive-panels .img-right-text').css('height', $('.interactive-panels .img-right-text .img').height() + 32);
});

// $(document).on("click","",function() {
 
// }); 


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


