$(document).ready(function(){
    const visual_swiper = new Swiper('.visual .swiper', { /* 팝업을 감싸는 요소의 class명 */

        autoplay: {  /* 팝업 자동 실행 */
            delay: 2500, /* 넘어가는 초 수 */
            disableOnInteraction: true,
        },

        effect: "fade", /* fade 효과 */

        loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 무한재생 */
                      /* loop: false, 는 팝업 마지막에서 안넘어감 */

        pagination: {  /* 몇개의 팝업이 있는지 보여주는 동그라미 */
            el: '.visual .paging', /* 해당 요소의 class명 */
            clickable: true,  /* 클릭하면 해당 팝업으로 이동할 것인지 값 */
            //type: 'fraction',  /* type fraction을 주면 paging이 숫자로 표시됨 */
            //renderBullet: function (index, className) {   /* paging에 특정 코드 넣기 */
            //    return '<span class="' + className + '">' + (index + 1) + "</span>";
            //},
        },


        navigation: {  /* 이전, 다음 버튼 */
            nextEl: '.visual .btn_next',  /* 다음 버튼의 클래스명 */
            prevEl: '.visual .btn_prev',  
        },

    });//visual_swiper

    const biz_swiper = new Swiper('.biz .swiper', { /* 팝업을 감싼는 요소의 class명 */
        slidesPerView: 1, /* 한번에 보일 팝업의 수 - 모바일 제일 작은 사이즈일때 */
        spaceBetween: 16, /* 팝업과 팝업 사이 여백 */
        breakpoints: {
            480: {    /* 768 ~ 480px 사이 일때 적용 */
            slidesPerView: 2,    /*    'auto'   라고 쓰면 css에서 적용한 넓이값이 적용됨 */
            spaceBetween: 24, /* 사이의 여백 */
            },
            768: {    /* 1024 ~ 768px 사이 일때 적용 */
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
        autoplay: {  /* 팝업 자동 실행 */
            delay: 2000,
            disableOnInteraction: true,
        },
    });//biz_swiper 

    const notice_swiper = new Swiper('.notice .swiper', { /* 팝업을 감싼는 요소의 class명 */
        slidesPerView: 'auto', /* 'auto' = css에서 준 넓이값으로 들어감  */
        spaceBetween: 16, /* 팝업과 팝업 사이 여백 */
        breakpoints: {
            768: {    /* 768px 이상일때 적용 */
                spaceBetween: 24,
            },
        },
        //loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */
    });
swiper.autoplay.stop();  /* 일시정지 기능 */
swiper.autoplay.start();  /* 재생 기능 */
	

})//$(document).ready

