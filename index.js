$(document).ready(function(){
    $('ul.list li').mouseover(function(){
        var tab_id = $(this).attr('data-li');
        if (tab_id === 'tab-2') {
            alert('tab222');
        } else if (tab_id === 'tab-3'){
            alert(3333333);
        } else {
            alert('noooooooooo');
        }
        $('ul.list li').removeClass('current');
        $('.tab-content').removeClass('current');

        $(this).addClass('current');
        $('#'+tab_id).addClass('current');
    })
})
































// $(document).ready(function(){
//     $('ul.list li').click(function(){
//         var tab_id = $(this).attr('data-li');
//
//         $('ul.list li').removeClass('current');
//         $('.tab-content').removeClass('current');
//
//         $(this).addClass('current');
//         $("#" + tab_id).addClass('current');
//     })
// })








// $(document).ready(function(){
//     $('ul.tabs li').click(function(){
//         var tab_id = $(this).attr('data-tab');
//
//         $('ul.tabs li').removeClass('current');
//         $('.tab-content').removeClass('current');
//
//         $(this).addClass('current');
//         $("#"+tab_id).addClass('current');
//     })
// })



/*$(document).ready(function(){
    $('ul.tabs li').click(function(){
        var tab_id = $(this).attr('data-tab');

        $('ul.tabs li').removeClass('current');
        $('.tab-content').removeClass('current');

        $(this).addClass('current');
        $("#"+tab_id).addClass('current');
    })
})*/

/*$(document).ready(function(){

    $('ul.tabs li').click(function(){
        var tab_id = $(this).attr('data-tab');
        $('ul.tabs li').removeClass('current');
        $('tab-content').removeClass('current');

        $(this).addClass('current');
        $("#"+tab_id).addClass('current');
    })
})*/
