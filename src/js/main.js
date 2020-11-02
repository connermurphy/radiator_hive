$(document).ready(function() {
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
            $(".header__content").css({ marginTop: navbarHeight });

        } else {
            $(navbar).removeClass("scrolled");
            $(".header__content").css({ marginTop: 0 });
        }

        if (isScrolledIntoView($("#vision"))) {

            $(".vision__text h1, .vision__text p, a, .vision__img").addClass("visible");

        } else if (isScrolledIntoView("#carousel")) {
            $(".carousel__item, .dots, .arrows--left, .arrows--right").addClass("visible");

        } else if (isScrolledIntoView("#add-value")) {
            $("#add-value, #add-value h1, #add-value p, #add-value a").addClass("visible");
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
            items: 1,
            dots: true,
            dotsContainer: ".dots",
            loop: true,
            slideTransition: "fadeOut",
            autoPlay: true,
            mouseDrag: false,
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

    function isScrolledIntoView(elem) {
        var docViewTop = $(window).scrollTop();
        var docViewBottom = docViewTop + $(window).height();

        var elemTop = $(elem).offset().top;
        var elemBottom = elemTop + $(elem).height();

        return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
    }
})