$(function() {
    $(window).scroll(function() {
        var scroll  = $(window).scrollTop();
        if (scroll >= 100) {
            $('#NavXO').addClass('is-scrolled'); 
        }else{
            $('#NavXO').addClass('.is-scrolled')
        }
    });
});

