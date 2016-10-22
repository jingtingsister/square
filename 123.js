var obj = {
    'xxxx': 'yyy',
    'left': '50%'
};

// setTimeout 多久後做一次 唯一一次
// setInterval 每多久做一次
$(function(){
    var num = $('#num');
    // $('#num').html()
    // $('#num').prop({'happy': 0}).animate(
    //     {
    //         'happy': 100
    //     },
    //     10000,
    //     'easeInOutCirc',
    //     function(){
    //
    //     }
    // );
    // 為什麼要把$('#num')改成num 像這樣var num = $('#num');因為東西盡量重複使用
    num.prop({'happy': 0}).animate(
        {
            'happy': 100
        },
        {
            step: function(now,fx){
                // console.log(now);
                num.html(Math.floor(now*10)/10);
            },
            duration: 10000,
            easing: 'easeInOutCirc',
            complete: function(){

            }
        }
    );
});
