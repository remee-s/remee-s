$(document).ready(function(){ //일회용
    let scrolling
    let win_h // 브라우저의 높이값

    let slogan = $('.slogan')
    let slogan_obj =  $('.slogan p span').lenght
    let slogan_leng = slogan_obj.lenght
    let slogan_scroll //슬로건 start에서 부터 스크롤 된 값
    let slogan_top // 슬로건이 위에서 부터 떨어진 거리
    let slogan_start // 애니메이션 시작점
    let slogan_end // 애니메이션 종료점
    let slogan_w // span 태그의 넓이

    let dark = $('.life')
    let dark_top //위에서 부터 떨어진 거리
    let dark_start // 애니메이션 시작점

    let photo = $('.banner .photo')
    let photo_top
    let photo_start
    let photo_end
    let photo_scroll
    let photo_w_start = 35 // 시작할때 넓이
    let photo_w_end = 100 // 종료값
    let photo_w

    // 사진싸이즈가 스크롤 하면 커지는 애니메이션
    function photo_resize(){
        photo_top = photo.offset().top
        photo_start = photo_top - (win_h * 0.7) // 밑에서 30%면 0.7 ( 넓이 조정하려면 이 숫자 조절 하면 됨 )
        photo_end = photo_top + photo.height() - scrolling - (win_h * 0.7)
        photo_scroll = (scrolling - photo_top) / (photo_end - photo_start) * 100
        //console.log('scroll', photo_scroll)

        if(photo_start > scrolling){
            //console.log('시작 전!')
            photo.width(photo_start + '%')
        }else if(photo_end > scrolling){
            //console.log('애니매이션 중이다!!!')
            photo_w = (photo_w_end - photo_w_start / 100 * photo_scroll ) + photo_w_start
        }else{
            //console.log('종료!')
            photo.width(photo_w_end + '%')
            photo_w = (photo_w_end - photo_w_start / 100 * photo_scroll ) + photo_w_end //수정
        }
    }


    scroll_chk() //브라우저가 로딩됐을때 한번 
    resize_chk()
    slogan_ani()
    dark_bg()
    photo_resize()
    $(window).scroll(function(){
        //스크롤 할때 마다 한번씩
        scroll_chk()
        slogan_ani()
        dark_bg()
        photo_resize()
    })
    $(window).resize(function(){
        //브라우저가 리사이즈 될때마다 한번씩 실행
        slogan_ani()
        resize_chk()
        dark_bg()
        photo_resize()
    })

    function scroll_chk(){ // 다회용
        scrolling = $(window).scrollTop()
        //console.log(' 슬로건 값!! ',scrolling)
    }


    function resize_chk(){
        win_h = $(window).height()
        //console.log('브라우저의 높이', win_h)
    }


    $('.slogan p span').eq(1).hide() //eq(1) = 두번째 span 태그
    
    function slogan_ani(){

        slogan_top = slogan.offset().top
        slogan_start = slogan_top - win_h + (win_h * 0.3)
        //console.log('scroll', scrolling , 'start', slogan_start)
        //scroll 값 = start 값 ani 가 시작됨
        slogan_end = slogan_top + slogan.height() - win_h + (win_h * 0.3)
        //console.log('scroll', scrolling, 'end', slogan_end)
        //scroll 값 = end 값 ani 가 종료됨
        slogan_scroll = (scrolling - slogan_start) / (slogan_end - slogan_start) * 100
        //console.log(slogan_scroll)

        if(slogan_start > scrolling){
            //console.log('애니메이션 시작 이전')
            slogan_obj.width(0)
        }else if(slogan_end > scrolling){
            //console.log('애니메이션 중~~~')
            //slogan_w = 100/slogan_leng
            for(i = 0; i < slogan_leng; i++){
                slogan_w = (slogan_scroll - (100/slogan_leng)*i) * slogan_leng
                if(slogan_w > 100){
                    slogan_w = 100
                }
                slogan_obj.eq(i).width(slogan_w + '%')
            }
        }else{
            //console.log('애니메이션 종료!!!!')
            slogan_obj.width('100%')
        }

    }//slogan_ani

    // 배경색 바뀌게 하는것 자연스럽게
    function dark_bg(){
        dark_top = dark.offset().top
        dark_start = dark_top - scrolling - (win_h * 0.5)
        //console.log('scroll', scrolling, 'top', dark_top, 'start', dark_start)
        if(dark_start < 0){
            dark.addClass('dark')
        }else{
            dark.removeClass('dark')
        }
    }







})//$(document).ready