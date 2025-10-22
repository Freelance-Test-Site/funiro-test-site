/************************************************************************ Slider - Swiper *******************************************************************/

new Swiper('.slider-main__body', {

	observer: true,
	observeParents: true,
	simulateTouch: true,
	touchRatio: 1,
	touchAngle: 90,
	grabCursor: true,
	watchOverflow: true,
	freeMode: true,
	spaceBetween: 32,
	speed: 800,
	loop: true,
	slidesPrGroup: 1,
	slideToClickedSlide: true,
	parallax: true,

	navigation: {
		nextEl: '.main-slider .slider-arrow_next',
		prevEl: '.main-slider .slider-arrow_prev'
	},
	pagination: {
		el: '.controls-slider-main__dotts',
		clickable: true,
	},
});


/************************************************************************ Slider - Swiper ******************************************************/