/*
    js에서 html요소를 부를때는 
    html요소가 로딩된 이후에 불러야 함 !! (중요)
    문서의 구조상
    js를 head안에서 먼저 부르고
    그 다음 body에서 html요소를 씀..
*/

$(document).ready(function(){
    //$('group').addClass('on')
    console.log('document.ready 안...')

    $('.group').on('mouseenter', function(){
        //group마우스를 올릴때마다 실행
        $('.group').addClass('on')
        $('.group span').text('오버했음')
    })
    
    $('.group').on('mouseleave', function(){
        //group마우스를 올릴때마다 실행
        $('.group').removeClass('on')
        $('.group span').text('오버전')
        //console.log('되니????')
    })

    //문서가 로딩되고 단 1번 만 실행 된다는 것
    let scrolling = $(window).scrollTop()
    console.log(scrolling)

    $(window).scroll(function(){
        scrolling = $(window).scrollTop()
        console.log(scrolling)
        if(scrolling > 0){ //스크롤 값이 0보다 크면 
            $('header').addClass('fixed')
        }else{
            $('header').removeClass('fixed')
        }
    })

    $('.list ul li').on('mouseenter', function(){
        $(this).addClass('on')
        //li 중에서 오버한 li만 지칭하는것. (전체 선택 말고)

    })
})//$(document).ready

console.log('누가 먼저 실행 될까요??')