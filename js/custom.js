$(function() {
    new WOW().init();
    $('.nav').singlePageNav({
    	offset: 70
    });

    $('.navbar-collapse a').click(function(){
        $(".navbar-collapse").collapse('hide');
    });
})