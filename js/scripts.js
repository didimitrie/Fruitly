/*jshint devel:true */

/*
function getRandomInt (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
*/

$( document ).ready(function() {
    console.log( "ready!" );

    var fruit = $(".fr_div");
    for (var i = 0; i < 3; i++) {
      $(fruit).clone().insertAfter(".fr_div");
    }

    var imgs = $(".fr_item").children().children().children("img");
    $.each(imgs, function (index) {
    	$(this).attr('src', 'assets/fullbleed/0'+(index+1)+'.jpg');
    });

    /* stupid hack to keep divs square 
		of course it doesn't compute with bstrap css */
    /*
    $(".fr_fruit").each(function(){
    	$(this).height(($(this).width()));
    });
	*/

});

