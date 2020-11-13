$(function () {
    /*======Add class on scroll======*/
    window.addEventListener("scroll", function () {
        var header = document.getElementById("header");
        header.classList.toggle("sticky-header", window.scrollY > 0);
    });

    /*====Smooth scroll to section====*/
    $(".scrollTo").on('click', function (e) {
        e.preventDefault();
        var target = $(this).attr('href');
        var offset = 87;

        $('html, body').animate({
            scrollTop: ($(target).offset().top - offset)
        }, 1000);
    });

});

/*====Scroll Spy====*/
window.onload = function () {
    scrollSpy('#main-menu', {
        sectionClass: '.scrollspy',
        menuActiveTarget: '.menu-item',
        offset: 88
    })
}