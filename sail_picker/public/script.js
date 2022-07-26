$(document).ready(function(e) {
    $('.surfing-button').on('mouseenter', function(e) {
        x = e.pageX- $(this).offset().left;
        y = e.pageY- $(this).offset().top;
        $(this).find('span').css({top: y, left: x});    

    })
    $('.surfing-button').on('mouseout', function(e) {
        x = e.pageX- $(this).offset().left;
        y = e.pageY- $(this).offset().top;
        $(this).find('span').css({top: y, left: x});    

    })
});