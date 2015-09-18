var main = function() {
    String.prototype.format = function() {
        var s = this,
            i = arguments.length;

        while (i--) {
            s = s.replace(new RegExp('\\{' + i + '\\}', 'gm'), arguments[i]);
        }
        return s;
    };
    $('.arrow-next').click(function(e){
        e.preventDefault();
        var currentSlide = $('.active-slide');
        var nextSlide = currentSlide.next();
        var currentDot = $('.active-dot');
        var nextDot = currentDot.next();
        if (nextSlide.length == 0){
            nextSlide = $('.slide').first();
            nextDot = $('.dot').first();
        }
        currentSlide.fadeOut(600).removeClass('active-slide');
        nextSlide.fadeIn(600).addClass('active-slide');
        currentDot.removeClass('active-dot');
        nextDot.addClass('active-dot');
    })
    $('.arrow-prev').click(function(e){
        e.preventDefault();
        var currentSlide = $('.active-slide');
        var prevSlide = currentSlide.prev();
        var currentDot = $('.active-dot');
        var prevDot = currentDot.prev();
        if (prevSlide.length == 0){
            prevSlide = $('.slide').last();
            prevDot = $('.dot').last();
        }
        currentSlide.fadeOut(600).removeClass('active-slide');
        prevSlide.fadeIn(600).addClass('active-slide');
        currentDot.removeClass('active-dot');
        prevDot.addClass('active-dot');
    })
    $('.dot').click(function(e) {
        e.preventDefault();
        var currentSlide = $('.active-slide')
        var currentDot = $('.active-dot')
        var nextDot = $(this)
        var slideIndex = nextDot.index();
        var nextSlide = $('.slide').eq(slideIndex);
        currentDot.removeClass('active-dot');
        nextDot.addClass('active-dot');
        currentSlide.fadeOut(600).removeClass('active-slide');
        nextSlide.fadeIn(600).addClass('active-slide');

    })
    $('.social-media-link').hover(function() {
        $(this).stop(true, false).animate({
            marginTop: "20px", height: "53px"}, 50);
    }, function() {
        $(this).stop(true, false).animate({
            marginTop: "25px", height: "48px"}, 50);
        })
    $('.showhide').click(function(e) {
        e.preventDefault();
        var clickedName = $(this).text();
        var currentSection = $('.activesection');
        // alert(clickedName);
        // alert($('.activesection').attr('id') != clickedName);
        if($('.activesection').attr('id') != clickedName){
            var nextSection = currentSection.next();
            if (nextSection.length == 0){
                nextSection = $('.inactivesection').first()
            }
            while (nextSection.attr('id') != clickedName){
                nextSection = nextSection.next();
            }
            currentSection.fadeOut(300).removeClass('activesection');
            currentSection.addClass('inactivesection');
            nextSection.removeClass('inactivesection');
            nextSection.fadeIn(300).addClass('activesection');
        }
    })


    $(window).scroll(function() {
        if($(this).scrollTop() > 100){
            if($('#gotop').css('display') === 'none'){
                $('#gotop').fadeIn(800);
            }
        }
        else {
            $('#gotop').fadeOut(800);
        }

        if($(window).scrollTop() == $(document).height() - $(window).height()){
            $('.hidden').first().fadeIn(800);
            $('.hidden').first().removeClass('hidden');
        }
    });
    $('#gotop').click(function(e) {
        e.preventDefault();
        $('html, body').stop().animate({
           scrollTop: 0
        }, 400 , function() {
            $('#gotop').fadeOut(800, "linear");
        });
    });

    $('.menu-bar').click( function(e) {
        e.preventDefault();
        if($('.dropdown-menu').position().top === 50){
            $('.dropdown-menu').stop(true, false).animate({
                top: "-100px"}, 500);
            $('.header').delay(500).queue( function(next){
                $('.header').css('border-bottom', '1px solid #414141');
                next();
            });
            $(this).removeClass('black-mb', {duration:1000});
            $(this).addClass('gray-mb', 1000, "easeOutBounce");
        }
        else {
            $('.dropdown-menu').stop(true, false).animate({
                top: "50px"}, 500);
            $('.header').css('border-bottom', '0px solid white');
            $(this).removeClass('gray-mb', 1500);
            $(this).addClass('black-mb', 1500, "easeOutBounce");
        }
    });
};

$(document).ready(main);
