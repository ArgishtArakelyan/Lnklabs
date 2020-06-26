

$(document).ready(function() {
    $('.AboutUs .item1').css('height', $('.AboutUs .item1 .img').height() + 32);
});

$(window).resize(function(){ 
    $('.AboutUs .item1').css('height', $('.AboutUs .item1 .img').height() + 32);
});

// $(document).on("click","",function() {
 
// }); 


$(window).scroll(function() {
    var scroll = $(window).scrollTop();

    if (scroll > 0) {
        $('.navigation-wrap').addClass('bg-shap top');
    }
    if (scroll < 50) {
        $('.navigation-wrap').removeClass('top');
    }
    if (scroll < 400) {
        $('.navigation-wrap').removeClass('bg-shap');
    }
});


