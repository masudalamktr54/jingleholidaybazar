// swiper js +++++++++++++++++++++++++++++
let swiper = new Swiper(".mySwiper", {
	// direction: "vertical",
	direction: "horizontal",
	slidesPerView: 1,
	spaceBetween: 30,
	mousewheel: false,
	MouseEvent: true,	
	keyboard: true,
	pagination: {
	el: ".swiper-pagination",
	clickable: true,
	},

	navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

	autoplay: {
		delay: 2000,
		disableOnInteraction: false,
		pauseOnMouseEnter: true,
	},
});