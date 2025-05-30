//console.log('치치야')
$(document).ready(function(){

    /************************** header 와 메뉴 시작 *****************************
     * pc인지 모바일인지 구분 - 브라우저 넓이로...
     * 스크롤값 계산
     * 공통사항 : 브라우저가 스크롤 되면 or header에 오버하면 fixed 클래스 추가
     * pc 일때 : 마우스를 오버한 li에만 over클래스 추가
     * 모바일일때 : 메뉴열기를 클릭하면 header에 menu_open 클래스 추가
     *             1차메뉴를 클릭하면 (하위 메뉴가 있는 1차 메뉴만) 클릭한 li에 open 클래스 추가
     * */  

    let device_status //모바일인지 pc인지
    let scrolling //스크롤한 값
    let window_w //브라우저 넓이
    let mobile_size = 1024 //모바일로 전환되는 사이즈

    scroll_chk() //함수 실행 (문서가 로딩 되었을때 1번)
    resize_chk()
    $(window).resize(function(){ //브라우저가 리사이즈 될때마다 1번씩 실행
        resize_chk() //함수 실행
    })
    $(window).scroll(function(){//브라우저를 스크롤 할때마다 1번씩 실행
        scroll_chk() //함수 실행
    })
    function scroll_chk(){ //함수 선언
        //console.log('스크롤!!!!!!!!!!!!!!')
        scrolling = $(window).scrollTop()
        //console.log(scrolling)
        if(scrolling > 0){
            $('header').addClass('fixed')
        }else{
            $('header').removeClass('fixed')
        }
    }
    function resize_chk(){
        //console.log('리사이즈!!!!!!!!!!')
        window_w = $(window).width()
        if(window_w > mobile_size){
            device_status = 'pc'
        }else{
            device_status = 'mobile'
        }
        //console.log(device_status)
    }
     
    /* header에 마우스를 오버했을때 -- 클릭했을때도 작종함*/
    $('header').on('mouseenter', function(){
        if(device_status == 'pc'){
        $('header').addClass('fixed')
        }
    })
    $('header').on('mouseleave focusout', function(){
        /* 브라우저가 스크롤된 상태에서는 header에 fixed 클래스를 삭제하면 안됨!!
            맨위에 있을때만 삭제 해야함 */
        if(scrolling == 0){ 
            $('header').removeClass('fixed')
        }//if종료
    })
    $('header .gnb .gnb_wrap ul.dapth1 > li').on('mouseenter focusin', function(){
        if(device_status == 'pc'){
            $(this).addClass('over')
        }
    })
    $('header .gnb .gnb_wrap ul.dapth1 > li').on('mouseleave', function(){
        $(this).removeClass('over')
    })
    $('header .gnb .gnb_wrap ul.dapth1 > li > ul.dapth2 > li:last-child').on('focusout', function(){
        $('header .gnb .gnb_wrap ul.dapth1 > li').removeClass('over')
    })

    $('header .gnb .gnb_open').on('click', function(){
        $('header').addClass('menu_open')
    })
    $('header .gnb .gnb_close').on('click', function(){
        $('header').removeClass('menu_open')
    })
    /*
        닫힌 메뉴를 클릭하면 열리고, 열린 메뉴를 클릭하면 닫힘
        동시에 여러개의 메뉴가 열려있을 수도 있음
        toggleClass - 클래스가 없으면 추가하고, 있으면 삭제
    */
    $('header .gnb .gnb_wrap ul.depth1 > li:has(ul.dapth2) > a').on('click', function(e){
        if(device_status == 'mobile'){
            e.preventDefault()
            $(this).parents('li').toggleClass('open')
        }
        
    })

    /************************** header 와 메뉴 끝 ******************************/  

    /************************** visual swiper 시작 ******************************/   

    //console.log('안녕')
    const visual_swiper = new Swiper('.visual .swiper', { /* 팝업을 감싼는 요소의 class명 */

        autoplay: {  /* 팝업 자동 실행 */
            delay: 5000, //보통을 5초를 많이준다고 함
            disableOnInteraction: true,
        },

        //effect: "fade", /* fade 효과 (부드럽게 넘어가는것) */

        loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */
        navigation: {  /* 이전, 다음 버튼 */
            nextEl: '.visual .btn_wrap button.btn_next',  /* 다음 버튼의 클래스명 */
            prevEl: '.visual .btn_wrap button.btn_prev',  
        },

    });
    //visual_swiper.autoplay.stop();  /* 일시정지 기능 */
    //visual_swiper.autoplay.start();  /* 재생 기능 */
    $('.visual .btn_wrap button.btn_stop').on('click',function(){
        //console.log('일시정지 클릭')
        visual_swiper.autoplay.stop(); //const swiper랑 주어가 다르면 에러남
        $(this).hide() //정지 버튼을 숨김
        $('.visual .btn_wrap button.btn_play').show() // 재생버튼 나타남
    })
    $('.visual .btn_wrap button.btn_play').on('click',function(){
        //console.log('재생버튼 클릭')
        visual_swiper.autoplay.start(); //const swiper랑 주어가 다르면 에러남
        $(this).hide() //재생 버튼을 숨김
        $('.visual .btn_wrap button.btn_stop').show() // 정지버튼 나타남
    })
    /************************** visual swiper 끝 ******************************/  

    /*************************** find 탭 기능 : 시작 *******************************
     * 1. 클릭한 li에서 data - content 값을 가져와서
     * ==> tab_item 중에 해당 값이 id인 요소를 찾아서 나타나게 해야함(다른요소는숨김)
     * 2. 클릭한 li에만 active 클래스를 줌
     * 3. 클릭한 li안에 있는 span에 선택됨이라고 글자를 써줌(다른 li에 있는 건 삭제)
     * 4. 클릭한 li 속성 aria-selected 값을 true로 변경 (다른 li는 모두 false) 
     ************************/

    let find_content //클릭한 메뉴의 이름(id)
    $('.find .list .tab_list ul li').on('click', function(){
        //console.log('나 눌렀다')

        if($(this).hasClass('active') == false){
            //console.log('선택안된메뉴')
            find_content = $(this).attr('data-content')
            //console.log(find_content)

            $('.find .list .tab_content .tab_item').removeClass('active')
            $('.find .list .tab_content').find('#'+find_content).addClass('active')

            $('.find .list .tab_list ul li').removeClass('active')
            $(this).addClass('active')

            $('.find .list .tab_list ul li button span').text('')
            $(this).find('span').text('선택됨')

            $('.find .list .tab_list ul li').attr('aria-selected', 'false')
            $(this).attr('aria-selected', 'true')
        }
    })

    /*************************** find 탭 기능 : 끝 ********************************/

    /*************************** 분양 swiper : 시작 ********************************/

    const adpot_swiper = new Swiper('.adopt .swiper', { /* 팝업을 감싼는 요소의 class명 */
	slidesPerView: 'auto', /* 한번에 보일 팝업의 수 - 모바일 제일 작은 사이즈일때 */
	spaceBetween: 16, /* 팝업과 팝업 사이 여백 */
	breakpoints: {
            768: {    /* 768px 이상일때 적용 */ 
                spaceBetween: 20,
                centeredSlides: true,
            },
        },
        centeredSlides: false, /* 팝업을 화면에 가운데 정렬(가운데 1번이 옴) */
        loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */
        navigation: {
            nextEl: '.adopt .list_ctrl .btn_next',
            prevEl: '.adopt .list_ctrl .btn_prev',
        },
    });
    /*************************** 분양 swiper : 끝 ********************************/
    
    /*************************** 후기 swiper : 시작 ********************************/
    const review_swiper = new Swiper('.review .swiper', { /* 팝업을 감싼는 요소의 class명 */
	slidesPerView: 'auto', /* 한번에 보일 팝업의 수 - 모바일 제일 작은 사이즈일때 */
	spaceBetween: 16, /* 팝업과 팝업 사이 여백 */
        breakpoints: {
            768: {    /* 1024px 이상일때 적용 */
            slidesPerView: 3,    /*    'auto'   라고 쓰면 css에서 적용한 넓이값이 적용됨 */
            spaceBetween: 24, /* 사이의 여백 */
            },
            1024: {    /* 1024px 이상일때 적용 */
                slidesPerView: 4,    /*    'auto'   라고 쓰면 css에서 적용한 넓이값이 적용됨 */
                spaceBetween: 24, /* 사이의 여백 */
            },
        },
        //centeredSlides: true, /* 팝업을 화면에 가운데 정렬(가운데 1번이 옴) */
        loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */
        // autoplay: {  /* 팝업 자동 실행 */
        //     delay: 2500,
        //     disableOnInteraction: true,
        //},
        navigation: {
            nextEl: '.review .list .btn_next',
            prevEl: '.review .list .btn_prev',
        },
        pagination: {  /* 몇개의 팝업이 있는지 보여주는 동그라미 */
            el: '.swiper-pagination', /* 해당 요소의 class명 */
            clickable: true,  /* 클릭하면 해당 팝업으로 이동할 것인지 값 */
            type: 'fraction',  /* type fraction을 주면 paging이 숫자로 표시됨 */
        },
    });
    // review_swiper.autoplay.stop();  /* 일시정지 기능 */
    // review_swiper.autoplay.start();  /* 재생 기능 */

    /*************************** 후기 swiper : 끝 ********************************/

    /*************************** footer top : 시작 ********************************/
    $('footer .top_wrapper').on('click', function(){
        console.log('탑 눌렀니 ?????')
        //$(window).scrollTop(0)
        $('html, body').animate({
            scrollTop: 0
        }, 500) /*대부분 0.5초로 함*/
    })





    /*************************** footer top : 끝 ********************************/


})//$(document).ready