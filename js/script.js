$(document).ready(function(){
     $('.nav-link').click(function(event) {
        $('.burger, .menu, .support, .header-list').removeClass('active');
        $('body').removeClass('lock');
    });

    $('.burger').click(function(event) {
        $('.burger, .menu, .support, .header-list').toggleClass('active');
        $('body, .header_container').toggleClass('lock');
    });

    $('.slick-news').slick({
        autoplay: true,
        autoplaySpeed: 5000
    });

    $('.blog-item').mouseenter(function(event) {
        $(this).addClass('animate');
    });
    $('.blog-item').mouseleave(function(event) {
        $(this).removeClass('animate');
    });
})