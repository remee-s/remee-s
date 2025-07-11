
$(document).ready(function(){

	let device_status //pc인지 모바일인지 구분하는 값
	let scrolling //브라우저가 스크롤 된 값
	let scroll_prev //이전에 스크롤된 값
	let window_w //브라우저의 넓이값
	let mobile_size = 1024 //모바일로 변경되는 사이즈
	let menu_hinged //모바일에서 사용할 메뉴의 여닫이 여부 

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
		/* fixed 작동 하는거 ↑ */
	function resize_chk(){
        window_w = $(window).width()
        if(window_w > mobile_size){
            device_status = 'pc'
        }else{
            device_status = 'mobile'
        }
    }

	/* pc 형 메뉴 열고 닫기 하는 거 해야됨 */
	$('header .gnb .gnb_wrap ul.depth1 > li').on('click', function(){
        $(this).addClass('open')
    })
    $('header .gnb .gnb_wrap ul.depth1 > li').on('click', function(){
        $(this).removeClass('open')
    })
	$('header .gnb .gnb_wrap ul.dapth1 > li > ul.dapth2 > li:last-child').on('click', function(){
        $('header .gnb .gnb_wrap ul.dapth1 > li').removeClass('open')
    })






	/* visual 팝업 시작 ! */
	const visual_swiper = new Swiper('.visual .swiper', { /* 팝업을 감싼는 요소의 class명 */

		autoplay: {  /* 팝업 자동 실행 */
			delay: 3000,
			disableOnInteraction: true,
		},

		effect: "fade", /* fade 효과 */

		loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */
	});

	/* custom 카드 넘기기 swiper  */
	var custom_swiper = new Swiper(".custom .mySwiper", {
		effect: "cards",
		grabCursor: true,
	  });

	/* gallery swiper 시작 */  
	const gallery_swiper = new Swiper('.gallery .swiper', { /* 팝업을 감싼는 요소의 class명 */
	slidesPerView: 2, /* 한번에 보일 팝업의 수 - 모바일 제일 작은 사이즈일때 */
	spaceBetween: 16, /* 팝업과 팝업 사이 여백 */
	breakpoints: {
			768: {    /* 640px 이상일때 적용 */
				slidesPerView: 3,    /*    'auto'   라고 쓰면 css에서 적용한 넓이값이 적용됨 */
				spaceBetween: 16,
				},
			1260: {    /* 640px 이상일때 적용 */
				slidesPerView: 4,    /*    'auto'   라고 쓰면 css에서 적용한 넓이값이 적용됨 */
				spaceBetween: 16,
			},
		},
		//centeredSlides: true, /* 팝업을 화면에 가운데 정렬(가운데 1번이 옴) */
		loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */
		//autoplay: {  /* 팝업 자동 실행 */
			delay: 3000,
			disableOnInteraction: true,
		//},
	});




})//$(document).ready
