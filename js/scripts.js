/*jshint devel:true */

/*
function getRandomInt (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
*/

$( document ).ready(function() {
    console.log( "ready!" );

    $("#locationmarker").popover({ html : true });

    var fruit = $(".fr_div");
    for (var i = 0; i < 3; i++) {
      $(fruit).clone().insertAfter(".fr_div");
    }

    $('.fr_div').each(function(index){
        $(this).addClass("category-" + (index % 2 === 0 ? 1 : 2));
    });

    var imgs = $(".fr_item").children().children().children("img");
    $.each(imgs, function (index) {
    	$(this).attr('src', 'assets/fullbleed/0'+(index+1)+'.jpg');
    });

    $(function(){
        $('#container').mixItUp({
         animation: {
            perspectiveDistance: '1000px',
            perspectiveOrigin: '0 50%',
            easing: 'cubic-bezier(0.375, 0.885, 0.32, 1.275)',
            enable: true,
            duration: 200,
            effects: 'fade stagger(100ms)',
            staggerSequence: function(i){ return i%3; }
            }
        });
    });

    
    
});



