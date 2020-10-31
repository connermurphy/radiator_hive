(function () {

    const navbarToggler = $(".nav__toggler__btn");
    const navLinks = $(".nav__links");

    const owl = $(".owl-carousel");

    const carouselLeft = $(".arrows--left");
    const carouselRight = $(".arrows--right");

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
    

}());