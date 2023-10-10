function initSlider() {
	if ( window.innerWidth < 768 && !document.querySelector(".why_choose .slider").classList.contains("swiper-container-initialized") ) {
		pageSlider = new Swiper(".why_choose .slider", {
			spaceBetween: 16,
			slidesPerView: 2,
			autoHeight: true,
			loop: true,
			pagination: {
				bulletActiveClass: 'slider-dot_active',
				bulletClass: 'slider-dot',
				clickableClass: 'slider-pagination-clickable',
				el: '.slider-pagination',
				clickable: true,
			},
			breakpoints: {
				'320': {
					slidesPerView: 1,
					spaceBetween: 16,
				},
				'480': {
					slidesPerView: 2,
					spaceBetween: 16,
				},
			},
		})

		if (document.querySelector(".why_choose .slider .swiper-wrapper").classList.contains("flex")) {
			document.querySelector(".why_choose .slider .swiper-wrapper").classList.remove("flex")
		}

		pageSlider.init()
	} else if ( window.innerWidth > 767 && document.querySelector(".why_choose .slider").classList.contains("swiper-container-initialized") ) {
		pageSlider.destroy(true, true)
		if (!document.querySelector(".why_choose .slider .swiper-wrapper").classList.contains("flex")) {
			document.querySelector(".why_choose .slider .swiper-wrapper").classList.add("flex")
		}
	}
}

setTimeout(function() {
	initSlider()
}, 500)


window.addEventListener( 'resize', function () {
	initSlider()
})