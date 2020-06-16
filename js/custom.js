$(document).ready(function () {


    $('.image-slide').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        fade: true,
        autoplay: true,
        autoplaySpeed: 2000,
    });




    // $('.image-slide').slick({
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     arrows: false,
    //     fade: true,
    //     asNavFor: '.slide-text'
    // });
    // $('.slide-text').slick({
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     asNavFor: '.image-slide',
    //     prevArrow: '.team-arrow-left',
    //     nextArrow: '.team-arrow-right',
    //     dots: false,
    //     centerMode: true,
    //     centerPadding: '0px',
    //     focusOnSelect: true,
    //     arrows: true,
    //     autoplay: false,
    //     autoplaySpeed: 2000,





    
});