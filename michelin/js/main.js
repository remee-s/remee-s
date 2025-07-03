$(document).ready(function(){
	//header .total_menu .open
    //header .total_menu .total_menu_wrap .close
    $('header .total_menu .open').on('click', function(){
		$('header .total_menu .total_menu_wrap').addClass('active');	
	});
    $('header .total_menu .total_menu_wrap .close').on('click', function(){
		$('header .total_menu .total_menu_wrap').removeClass('active');	
	});


	const magazine_swiper = new Swiper('.magazine .magazine_swiper', { /* 팝업을 감싼는 요소의 class명 */
	slidesPerView: 1, /* 한번에 보일 팝업의 수 - 모바일 제일 작은 사이즈일때 */
	spaceBetween: 16, /* 팝업과 팝업 사이 여백 */
	breakpoints: {
			450: {    /* 640px 이상일때 적용 */
			slidesPerView: 2,    /*    'auto'   라고 쓰면 css에서 적용한 넓이값이 적용됨 */
			spaceBetween: 20,
			},
			768: {    /* 640px 이상일때 적용 */
				slidesPerView: 4,    /*    'auto'   라고 쓰면 css에서 적용한 넓이값이 적용됨 */
				spaceBetween: 20,
			},
			1260: {    /* 640px 이상일때 적용 */
			slidesPerView: 5,    /*    'auto'   라고 쓰면 css에서 적용한 넓이값이 적용됨 */
			spaceBetween: 24,
			},
			1500: {    /* 640px 이상일때 적용 */
			slidesPerView: 6,    /*    'auto'   라고 쓰면 css에서 적용한 넓이값이 적용됨 */
			spaceBetween: 24,
			},
		},
		//centeredSlides: true, /* 팝업을 화면에 가운데 정렬(가운데 1번이 옴) */
		loop: false, /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */
		scrollbar: {
			el: '.swiper-scrollbar', /* 스크롤바의 요소 */
			hide: false, /* 스크롤바 숨기지 않음 */
			draggable: true, /* 스크롤바를 드래그 가능하게 설정 */
			dragSize: 'auto',
		},
	});
	
})

