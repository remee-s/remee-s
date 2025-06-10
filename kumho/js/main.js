$(document).ready(function(){
    AOS.init({
    offset: 300, // 해당 콘텐츠가 하단에서 몇 px 위로 올라와에 나타나는 효과가 나타날지 셋팅하는 값
    duration: 500, // 애니메이션 효과가 작동되는 시간
    easing: 'ease', // 가속도
    });





    const visual_swiper = new Swiper('.visual .swiper', { /* 팝업을 감싼는 요소의 class명 */

        autoplay: {  /* 팝업 자동 실행 */
            delay: 2500,
            disableOnInteraction: true,
        },

        effect: "fade", /* fade 효과 */

        loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */
        
        navigation: {  /* 이전, 다음 버튼 */
            nextEl: '.visual .ctrl_wrap button.btn_next',  /* 다음 버튼의 클래스명 */
            prevEl: '.visual .ctrl_wrap button.btn_prev',  
        },

    });
    //visual_swiper.autoplay.stop();  /* 일시정지 기능 */
    //visual_swiper.autoplay.start();  /* 재생 기능 */

    $('.visual .ctrl_wrap button.btn_stop').on('click',function(){
        // console.log('(ง˙∇˙)ว 정지!')
        visual_swiper.autoplay.stop();  /* 일시정지 기능 */
        $(this).hide()
        $('.visual .ctrl_wrap button.btn_play').show()
    })
    $('.visual .ctrl_wrap button.btn_play').on('click', function(){
        //console.log('⸜( ◜࿁◝ )⸝︎︎ 재생!')    
        visual_swiper.autoplay.start()   
        $(this).hide()
        $('.visual .ctrl_wrap button.btn_stop').show()    
    })
    /*********************** visual swiper 연결 : 끝 *************************/

    /**************** biz의 list에 마우스 오버 이벤트 : 시작 **********************/
    $('.biz .list ul li').on('mouseenter', function(){
        $('.biz .list ul li').removeClass('on')
        $(this).addClass('on')
    })
    /**************** biz의 list에 마우스 오버 이벤트 : 끝 **********************/

    /**************** news swiper 연결 : 시작 **********************/
    
    //news 는 loop가 돌면 안됨. 마지막 뉴스가 뭔지 표시가 안되기 때문.!!!!!!


    const news_swiper = new Swiper('.news .swiper', { /* 팝업을 감싼는 요소의 class명 */
	slidesPerView: 'auto', /* 한번에 보일 팝업의 수 - 모바일 제일 작은 사이즈일때 */
	spaceBetween: 16, /* 팝업과 팝업 사이 여백 */
	breakpoints: {
		768: {    /* 640px 이상일때 적용 */
			slidesPerView: 2,    /*    'auto'   라고 쓰면 css에서 적용한 넓이값이 적용됨 */
			spaceBetween: 24, /* 사진 사이의 여백 */
		},
        1024: {    /* 640px 이상일때 적용 */
            slidesPerView: 3,    /*    'auto'   라고 쓰면 css에서 적용한 넓이값이 적용됨 */
            spaceBetween: 24, /* 사진 사이의 여백 */
        },
        },
        //centeredSlides: true, /* 팝업을 화면에 가운데 정렬(가운데 1번이 옴) */
        //loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */
        // autoplay: {  /* 팝업 자동 실행 */
        //     delay: 2500,
        //     disableOnInteraction: true,
        // },
        navigation: {
            nextEl: '.news .ctrl_wrap .btn_next',
            prevEl: '.news .ctrl_wrap .btn_prev',
        },
        pagination: {  /* 몇개의 팝업이 있는지 보여주는 동그라미 */
            el: '.news .ctrl_wrap .count', /* 해당 요소의 class명 */
            type: 'fraction',  /* type fraction을 주면 paging이 숫자로 표시됨 */
        },
        scrollbar: {
            el: ".news .ctrl_wrap .swiper-scrollbar",
            hide: false,
            draggable: true,
            dragSize: 100,
        },
    });

    /**************** news swiper 연결 : 끝 **********************/

    /**************** service 배경변경 : 시작 **********************/

    /********************************************
     * .service .list ul li a에 마우스를 오버해서 a에 있는
     * data-name값을 가져다가 list의 class 명으로 줌
     ********************************************/

    let service_name // 가져온 date-name 값을 저장 할 바구니
    $('.service .list ul li a').on('mouseenter', function(){
        if($(window).width() > 1024){
            service_name = $(this).attr('data-name') // .attr() = 속성값 ( 아무거나 가져올수 있음 )
            //console.log(service_name)
            $('.service .list').attr('data-bg', service_name) //.attr() = 바꾸라는 명령
        }
    })
    $('.service .list').on('mouseleave', function(){
        $('.service .list').attr('data-bg', '') // '' = 없앤다는 뜻
    })





    /**************** service 배경변경 : 끝 **********************/


}); //$(document).ready

