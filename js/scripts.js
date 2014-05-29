/*jshint devel:true, unused: false, undef:false*/

/*
function getRandomInt (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
*/

function showFruitDetail()
{
    $("#fr_details").fadeToggle();
    console.log("bal");
    $("body").toggleClass("noscroll");
}

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

    var dupe = $('#container').html();
    $('#container').append(dupe);

    $(function(){
        $('#container').mixItUp({
         animation: {
            enable: true,
            duration: 200,
            effects: 'fade stagger(50ms)',
            staggerSequence: function(i){
                return i % 3;
                }
            }
        });
    });

    $('body').on('click', function (e) {
    $('[data-toggle=popover]').each(function () {
        // hide any open popovers when the anywhere else in the body is clicked
        if (!$(this).is(e.target) && $(this).has(e.target).length === 0 && $('.popover').has(e.target).length === 0) {
            $(this).popover('hide');
        }
    });
});

});



