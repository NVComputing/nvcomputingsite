$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        items: 1, 
        singleItem: true,
        slideSpeed : 500,
        paginationSpeed : 400,
        loop: true,
        lazyLoad: true,
        autoplay: true,
        autoPlaySpeed: 3000,
        autoPlayTimeout: 3000,
        autoplayHoverPause: true,
    });
});