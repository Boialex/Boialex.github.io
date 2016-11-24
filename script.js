$(document).ready(function() {
    my_color = "#F0FFFF";
    $('body').css({"font-size":"+=2"});
    $('body').animate({"background-color": my_color});
    $('.block').addClass('.invisible').hide();
    $('table').css({font: "16px"});
    var clicked = 0;
    $('h3').click(function() {
        var tag = $(this).next();
        if (tag.hasClass('.invisible')) {  
            tag.effect('slide');
            tag.removeClass('.invisible');
        }
        else {
            tag.effect('explode');
            tag.delay(500).addClass('.invisible');

        }
    });
    
    $('p, tr, .block h3').mouseenter(function() {
      $(this).animate({"background-color": '#dff0d8', "font-size" : "+=3"}, 300);
    });
    $('p, tr, .block h3').mouseleave(function() {
        $(this).delay(200).animate({"background-color" : my_color, "font-size" : "-=3"}, 300);
    })
});