/*jshint devel:true */

function getRandomInt (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


$( document ).ready(function() {
    console.log( "ready!" );

    var imgs = $(".fr_fruit").children("img");
    $.each(imgs, function () {
    	$(this).attr('src', 'assets/imgs/' + getRandomInt(2,100) + ".png");
    });

    /* stupid hack to keep divs square 
		of course it doesn't compute with bstrap css */
    /*
    $(".fr_fruit").each(function(){
    	$(this).height(($(this).width()));
    });
	*/

});

