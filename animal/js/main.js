//console.log('치치야')
$(document).ready(function(){
    //console.log('안녕')
    const visual_swiper = new Swiper('.visual .swiper', { /* 팝업을 감싼는 요소의 class명 */

        autoplay: {  /* 팝업 자동 실행 */
            delay: 5000, //보통을 5초를 많이준다고 함
            disableOnInteraction: true,
        },

        effect: "fade", /* fade 효과 (부드럽게 넘어가는것) */

        loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */

        pagination: {  /* 몇개의 팝업이 있는지 보여주는 동그라미 */
            el: '.swiper-pagination', /* 해당 요소의 class명 */
            clickable: true,  /* 클릭하면 해당 팝업으로 이동할 것인지 값 */
            type: 'fraction',  /* type fraction을 주면 paging이 숫자로 표시됨 */
            renderBullet: function (index, className) {   /* paging에 특정 코드 넣기 */
                return '<span class="' + className + '">' + (index + 1) + "</span>";
            },
        },
        

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
})//$(document).ready