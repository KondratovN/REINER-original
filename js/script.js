document.addEventListener("DOMContentLoaded", function () {
    var eventCalllback = function (e) {
        var el = e.target,
        clearVal = el.dataset.phoneClear,
        pattern = el.dataset.phonePattern,
        matrix_def = "+7(___) ___-__-__",
        matrix = pattern ? pattern : matrix_def,
        i = 0,
        def = matrix.replace(/\D/g, ""),
        val = e.target.value.replace(/\D/g, "");
        if (clearVal !== 'false' && e.type === 'blur') {
            if (val.length < matrix.match(/([\_\d])/g).length) {
                e.target.value = '';
                return;
            }
        }
        if (def.length >= val.length) val = def;
        e.target.value = matrix.replace(/./g, function (a) {
            return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? "" : a
        });
    }
    var phone_inputs = document.querySelectorAll('[data-phone-pattern]');
    for (let elem of phone_inputs) {
        for (let ev of ['input', 'blur', 'focus']) {
            elem.addEventListener(ev, eventCalllback);
        }
    }
});

$(document).ready(function(){
    $('.menu-img').click(function(event) {
        $('.header-bottom').addClass('active');
        $('.overlay').addClass('active');
        $('body').addClass('lock');
    });

    $('.men').click(function(event) {
        $('.header-bottom').addClass('active');
        $('.overlay').addClass('active');
        $('.men').removeClass('active');
        $('body').addClass('lock');
    });

    $('.close-img').click(function(event) {
        $('.header-bottom').removeClass('active');
        $('.overlay').removeClass('active');
        $('.men').addClass('active');
        $('body').removeClass('lock');
    });

    $('.rem').click(function(event) {
        $('.header-bottom').removeClass('active');
        $('.overlay').removeClass('active');
        $('body').removeClass('lock');
    });

    $('.overlay').click(function(event) {
        $('.header-bottom').removeClass('active');
        $('.overlay').removeClass('active');
        $('body').removeClass('lock');
    });
    
    $(window).scroll(function() {
    if ($(window).scrollTop() > 220) {
        $('.header-bottomTwo').addClass('active');
    } else {
        $('.header-bottomTwo').removeClass('active');
    }
});

$(window).scroll(function() {
    if ($(window).scrollTop() > 220) {
        $('.up').addClass('active');
    } else {
        $('.up').removeClass('active');
    }
});

$(window).scroll(function() {
    if ($(window).scrollTop() > 220) {
        $('.men').addClass('active');
    } else {
        $('.men').removeClass('active');
    }
});

$(window).scroll(function() {
    if ($(window).scrollTop() < 220) {
        $('.men').addClass('activeTwo');
    } else {
        $('.men').removeClass('activeTwo');
    }
});

$(window).scroll(function() {
    if ($(window).height() <= 1000) {
        if($(window).scrollTop() > 230) {
            $('.about-subtitle p').addClass('active');
        }
    } else if ($(window).height() > 1000) {
        if($(window).scrollTop() >= 0){
            $('.about-subtitle p').addClass('active');
        }
    } else {
            $('.about-subtitle p').removeClass('active');
    }
});

});