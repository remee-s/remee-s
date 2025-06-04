/* header,footer 공통요소에 들어가는 javascript/jquary */

/*************************************************
 * << 공통된 사항 >>
 * pc와 mobile 버전을 구분
 * 스크롤 된값을 계산해 줘야함
 * ************************************************
 * 
 * 스크롤을 내리면 header에 fixed 클래스 추가
 * 메뉴에 마우스를 올리면 header에 menu_over 클래스 추가
 * 메뉴를 오버한 li에 over 클래스 추가
 * 
 * 스크롤을 내릴때는 gnb_up 클래스 추가
 * 스크롤을 내릴때는 gnb_up 클래스 삭제
 * ===> 이전의 스크롤값과 현재 스크롤 값을 비교해서 
 *      현재 값이 더 크면 내려가는 중( 100 ---> 200 내려가고 있는중)
 *      이전 값이 더 크면 올라가는 중( 200 ---> 100 올라가는 중)
***************************************************/

let device_status //pc인지 모바일인지 구분하는 값
let scrolling //브라우저가 스크롤 된 값
let scroll_prev //이전에 스크롤된 값
let window_w //브라우저의 넓이값
let mobile_size = 1024 //모바일로 변경되는 사이즈
let menu_hinged //모바일에서 사용할 메뉴의 여닫이 여부 

$(window).scroll(function(){ //브라우저가 스크롤 될때마다 1번 실행
    // console.log('스크롤???')
    scroll_chk()
})
$(window).resize(function(){ //리사이즈 될때마다 1번 실행
    // console.log('브라우저 크기 변한다???????')
    resize_chk()
})
$(document).ready(function(){ //문서가 로딩되고 단 1번 실행 (새로고침 하지 않는한 한번만)
    // console.log('로딩되었다!!!!!!')
    scroll_chk()
    resize_chk() // 함수의 실행

    $('header .gnb .gnb_wrap ul.depth1 > li').on('mouseenter', function(){
        if(device_status == 'pc'){
            //console.log('오버했는데??')  메뉴 오버했을때
            $('header').addClass('menu_over')
            $('header .gnb .gnb_wrap ul.depth1 > li').removeClass('over')
            $(this).addClass('over')
        }
    })
    $('header .gnb').on('mouseleave', function(){
        $('header').removeClass('menu_over')
        $('header .gnb .gnb_wrap ul.depth1 > li').removeClass('over')
    })

    /*********************모바일 메뉴 열고 닫기***********************/
    $('header .gnb .gnb_open').on('click', function(){
        //console.log('나 열건디??')
        $('header').addClass('menu_open')
    })
    $('header .gnb .gnb_close').on('click', function(){
        //console.log('나 닫을건디???')
        $('header').removeClass('menu_open')
    })

    /**************모바일 2차 메뉴 열고 닫기***********************
     * 지금 현재 메뉴가 열려있는지 닫혀있는지 구분(li에 open클래스가 있는지 유무)
     * 메뉴가 열려있으면 - li 에 open 클래스를 삭제 , 2차 메뉴를 접을것임
     * 메뉴가 닫혀있으면 - li 에 open 클래스를 추가, 2차 메뉴를 열것임
     * ---> 하는이유 : 2차메뉴를 스무스 하게 늘어났다가 줄어들었다가 하기 위해 (css로는 안됨)
     *************************************************************/
    $('header .gnb .gnb_wrap ul.depth1 > li > a').on('click', function(e){ 
        /* e = 눌렀을때 생기는 이벤트 / e.preventDefault() = a태그 링크 삭제 시켜주는것*/
        if(device_status == 'mobile'){ // == 이것은 비교 연산자(이거 맞아? 이런거) , = 이건 확정
            //console.log('눌리는거 맞니???')
            e.preventDefault()
            menu_hinged = $(this).parents('li').hasClass('open')
            //console.log(menu_hinged)
            if(menu_hinged == true){ //메뉴가 열려있으면 
                $(this).parents('li').removeClass('open')
            }else{ //메뉴가 닫혀있으면
                $('header .gnb .gnb_wrap ul.depth1 > li').removeClass('open')
                $('header .gnb .gnb_wrap ul.depth1 > li > ul.depth2').slideUp()
                $(this).parents('li').addClass('open')
                $(this).next().slideDown()
            }
        }
    })

})

//함수의 선언 (얘는 이런일을 해요! 라는거)
function resize_chk(){
    window_w = $(window).width()
    //console.log(window_w)
    if(window_w > mobile_size){ //1024px 보다 크면 
        device_status = 'pc'
    }else{ //1024와 같거나 작으면 
        device_status = 'mobile'
    }
    // console.log(device_status)
}
function scroll_chk(){
    scroll_prev = scrolling //스크롤 값을 다시 계산 하기 전에 이전값을 prev에 주는것
    scrolling = $(window).scrollTop()
    //console.log(scrolling)
    if(scrolling > 0){ //0보다 크면 (조금이라도 스크롤이 된경우)
        $('header').addClass('fixed') 
        if(scrolling > scroll_prev){
            //console.log('내려가는중!!!!!!!!!!!!')
            $('header').addClass('gnb_up')
        }else{
            //console.log('올라가는중!!!!!!!!!!!!')
            $('header').removeClass('gnb_up')
        }
    }else{ // 0 일때 (맨위로 가면)
        $('header').removeClass('fixed') 
    }
}