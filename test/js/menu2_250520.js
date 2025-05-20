$(document).ready(function(){
    /* 스크롤여부, 브라우저 넓이 */
    let scrolling //브라우저의 스크롤 값을 저장
    let win_w //브라우저 넓이
    let device_status //지금 현재 넓이가 pc인지 / 모바일인지 저장

    scroll_chk() //문서가 로딩되었을대
    $(window).scroll(function(){ //스크롤 할때마다 1번씩 실행
        scroll_chk() //함수의 실행
    })//$(window).scroll

    device_chk()//맨 처음에 문서가 로딩되었을때 1번 실행 
    $(window).resize(function(){ //브라우저가 리사이즈 할때마다 1번씩
        device_chk() //함수의 실행 
    })//$(window).resize

    function scroll_chk(){
        scrolling = $(window).scrollTop()
        if(scrolling > 0){ 
            $('header').addClass('fixed')
        }else{
            $('header').removeClass('fixed')
        }
    } // function scroll_chk

    function device_chk(){
        win_w = $(window).width()
        if(win_w > 1024){  //1025이상
            device_status = 'pc'
        }else{ //1024이하
            device_status = 'mobile'
        }
        console.log(device_status)
    }

    /*
        pc버전에서만
        메뉴에 마우스를 오버하면 
        >> header .gnb .gnb_wrap ul.depth1 > li
        1. header에 menu_over클래스 추가
        2. 오버한 1차메뉴 li에 over클래스 추가
           header .gnb .gnb_wrap ul.depth1 > li

        언제 메뉴의 오버상태를 해제할꺼냐...
        header 밖에 나가면 메뉴가 사라지게...
    */


    $('header .gnb .gnb_wrap ul.depth1 > li').on('mouseenter', function(){
        //마우스를 오버했을때만 실행 (pc 일때만 실행)
        if(device_status = 'pc'){
            $('header').addClass('menu_over')
            $('header .gnb .gnb_wrap ul.depth1 > li').removeClass('over')
            $(this).addClass('over')
        } 
    })
    $('header').on('mouseleave', function(){
        if(device_status = 'pc'){
            $('header').removeClass('menu_over')
            $('header .gnb .gnb_wrap ul.depth1 > li').removeClass('over')
        }
    })



})//$(document).ready
