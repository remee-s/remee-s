$(document).ready(function(){   /* id= name은 #을 붙여서 이름을 줘야함 */

    const myFullpage = new fullpage('#fullpage', {  /* html에서 페이지 전체를 감싸는 요소 */

		navigation: true, /* 오른쪽에 각 페이지의 paging */
		navigationPosition: 'left', /* 툴팁의 위치 */
		navigationTooltips: ['Main', '나무심기', '숲 활동', '활동 이야기', 'footer'], /* 툴팁 이름*/
		showActiveTooltip: true, /* 현재 활성화된 페이지의 툴팁에 특정 클래스 주기 */
		
		lockAnchors: true,
		anchors: ['visual', 'tree', 'work', 'story','footer'], /* href="#link1" 이렇게 코딩하면 해당 링크명으로 이동 */

		autoScrolling:true, /* 한페이지씩 스크롤 */
		scrollHorizontally: true,

		verticalCentered: true, /* 컨텐츠 요소 위아래 가운데 */
		
		scrollOverflow: false, /* 컨텐츠가 넘쳐도 스크롤 할지 말지 여부 */

		afterLoad: function(origin, destination, direction, trigger){
			if(destination.index == 2){ /* index가 2면 슬라이드는 세번째 슬라이드입니다. index 수는 0/1/2/3 */
				//console.log('3번째 슬라이드가 로딩 되었을때');
			}
		},

		responsiveWidth: 768, /* fullpage를 적용시키지 않을 모바일 사이즈 */
        responsiveHeight: 700 /* 브라우저 높이가 700 이하로 줄어들면, 풀페이지 js 해지 시키는것 */
	});//myFullpage

	/********************************************************
	 * aside quick 열고 닫기
	 * 닫혀 있을때 ( open class가 있을때 ) 
	 * 1. close class로 교체
	 * 2. detail이 보임 
	 * 열려 있을때 ( open class가 없을때 )
	 * 1. open 클래스 교체
	 * 2. detail이 숨김
	 **********************************************************/

	$('.quick .btn').on('click', function(){
		//console.log('퀵버튼을 클릭클릭!!');
		if($(this).hasClass('open') == true){
			$(this).removeClass('open')
			$(this).addClass('close')
			$(this).find('span').text('CLOSE')
			$('.quick .detail').slideDown(500) /* 500 = 0.5초 슬라이드 올라가는 속도 */
		}else{
			$(this).addClass('open')
			$(this).removeClass('close')
			$(this).find('span').text('QUICK')
			$('.quick .detail').slideUp(300)
		}
	})//$('.quick .btn').on
/*****************************visual swiper 추가 : 시작*******************************/
	let visual_name = ['서울마이트리 챌린지' ,'산림복원 기금 모집','나무의 기억', 'HAPPY EARTH DAY']
	//console.log(visual_name[3]) 배열의 시작은 1이 아니라 0부터 시작임.
	const visual_swiper = new Swiper('.visual .swiper', { /* 팝업을 감싼는 요소의 class명 */

		autoplay: {  /* 팝업 자동 실행 */
			delay: 5000,
			disableOnInteraction: true,
		},

		effect: "fade", /* fade 효과 */

		loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */

		pagination: {  /* 몇개의 팝업이 있는지 보여주는 동그라미 */
			el: '.visual .paging', /* 해당 요소의 class명 */
			clickable: true,  /* 클릭하면 해당 팝업으로 이동할 것인지 값 */
			//type: 'fraction',  /* type fraction을 주면 paging이 숫자로 표시됨 */
			renderBullet: function (index, className) {   /* paging에 특정 코드 넣기 */
				return '<span class="' + className + '">' + visual_name[index] + "</span>";
			},
		},
	})
/*****************************visual swiper 추가 : 종료*******************************/	
})//$(document).ready!!!!!!