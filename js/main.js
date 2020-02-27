//Creiamo un hamburger menu modificando il file JavaScript.


$('.header-right').click(function () {
    $('.hamburger-menu').addClass('active');
});

$('.close').click(function () {
    $('.hamburger-menu').removeClass('active');
});
