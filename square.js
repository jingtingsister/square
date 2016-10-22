$().ready(function(){
    $(".square2,.square3,.square4,.square5").hide();

    $(".square1").hover(function(){
        $(".square2").fadeIn();
        $(".square1").fadeOut();
    })
    $(".square2").hover(function(){
        $(".square3").fadeIn();
        $(".square2").fadeOut();
    })
    $(".square3").hover(function(){
        $(".square4").fadeIn();
        $(".square3").fadeOut();
    })
    $(".square4").hover(function(){
        $(".square5").fadeIn();
        $(".square4").fadeOut();
    })



})
