$(document).ready(function() {
    my_color = "#F0FFFF";
    $('body').css({"font-size":"+=2"});
    $('body').animate({"background-color": my_color});
    $('.block').addClass('.invisible').hide();
    $('table').css({font: "16px"});
    $('p, tr, .block h3').css({"border-radius": "10px"});
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
    });
    var newdiv =$('<div id="img"><img src="download.jpg"></div>');
    $('.cv').append(newdiv);
    var t = $('<p>You can move me with arrow buttons</p>');
    newdiv.prepend(t);
    newdiv.children('p').hide();
    $('img').css({width : '10%', height: '10%'});
    $('img').animate({"border-radius": "100%"}, 500);
    newdiv.css({'text-align':'center'});
    $('img').click(function() { 
        var pos = Math.floor((Math.random() * 100) - 50);
        var shift = '+=' + pos.toString() + 'px';
        // alert(shift);
        $(this).effect('bounce', {times:3}, 100).delay(100).animate({"margin-left": shift}, 'fast');
        newdiv.children('p').show();
        // newdiv.children('p').delay(500).hide();
    });
    $(document).keydown(function(key) {
        newdiv.children('p').hide();
        var how_far = "40px";
        switch(parseInt(key.which,10)) {
			// Left arrow key pressed
			case 37:
				$('img').animate({"margin-left": "-="+how_far}, 'fast');
				break;
			// Up Arrow Pressed
			case 38:
			    $('img').animate({"margin-top": "-="+how_far}, 'fast');
				// Put our code here
				break;
			// Right Arrow Pressed
			case 39:
			    $('img').animate({"margin-left": "+="+how_far}, 'fast');
				// Put our code here
				break;
			// Down Arrow Pressed
			case 40:
			    $('img').animate({"margin-top": "+="+how_far}, 'fast');
				// Put our code here
				break;
		}
	});
});