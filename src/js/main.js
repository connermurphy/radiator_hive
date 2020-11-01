(function () {

    const navbar = $("nav");

    let navbarHeight = $(navbar).outerHeight();

    const navbarToggler = $(".nav__toggler__btn");
    const navLinks = $(".nav__links");

    const owl = $(".owl-carousel");

    const carouselLeft = $(".arrows--left");
    const carouselRight = $(".arrows--right");

    const newsletterInput = $(".footer__newsletter__wrapper").find("input");
    const newsletterInputArrow = $(".footer__newsletter__wrapper").find("span");
    const inputFill = $(".input__fill");
    const inputFillText = $(".input__fill__text")

    $(newsletterInput).val("");

    $(document).on("scroll", _ => {
        
        if ($(document).scrollTop() > (navbarHeight)) {

            $(navbar).addClass("scrolled");
            $(".header__content").css({ marginTop : navbarHeight });

        } else {
            $(navbar).removeClass("scrolled");
            $(".header__content").css({ marginTop : 0 });
        }

    });
    

    navbarToggler.on("click", _ => {
        $(navLinks).toggleClass("open");
        $(navbarToggler).toggleClass("open");
    });

    $(navLinks).find("a").on("click", _ => {
        $(navLinks).toggleClass("open");
        $(navbarToggler).toggleClass("open");
    });

    $(document).ready(function () {
        $(".owl-carousel").owlCarousel({
            items : 1,
            dots : true,
            dotsContainer : ".dots",
            loop: true,
            slideTransition: "fadeOut",
            autoPlay : true,
            mouseDrag : false,
        });
    });

    $(carouselLeft).on("click", _ => {
        owl.trigger("prev.owl.carousel");
    });

    $(carouselRight).on("click", _ => {
        owl.trigger("next.owl.carousel");
    });

    $(newsletterInput).on("keyup", (e) => {
        $(inputFillText).text(e.target.value);
    });

    $(newsletterInputArrow).on("mouseenter", _ => {
        $(inputFill).addClass("fill");  
        $(inputFillText).addClass("fill");
        $(newsletterInputArrow).addClass("fill");

    }).on("mouseleave", _ => {
        $(inputFill).removeClass("fill");      
        $(inputFillText).removeClass("fill");  
        $(newsletterInputArrow).removeClass("fill");
    });
    

}());