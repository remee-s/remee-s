$(document).ready(function(){
    let scrolling

    scoll_chk()

    $(window).scoll(function(){
        scoll_chk()
    })
    function scoll_chk(){
        scrolling = $(window).scollTop()
        console.log(scrolling)
        if(scrolling > 0){
            $('header').addClass('fixed')
        }else{
            $('header').removeClass('fixed')
        }
    }
})