import { example } from "./header/header.js";
//Проверка поддерживает ли браузер формат webp
testWebP(function (support) {
	if (support == true) {
		document.querySelector("body").classList.add("webp");
	} else {
		document.querySelector("body").classList.add("no-webp");
	}
});
function testWebP(callback) {
	var webP = new Image();
	webP.onload = webP.onerror = function () {
		callback(webP.height == 2);
	};
	webP.src =
		"data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}
$(document).ready(() => {
	$(".examples__settings-box").click(() => {
		settings();
	});
	$(".examples__wrap-back").click(() => {
		disableSettings();
	});
	const scene = document.querySelector(".about__back-inner");
	if (scene) {
		const parallaxInstance = new Parallax(scene, {
			hoverOnly: true,
		});
	}
	const places = new Swiper(".places__slider", {
		// Default parameters
		slidesPerView: 1,

		speed: 800,
		autoplay: {
			delay: 5000,
		},
		effect: "fade",
		fadeEffect: {
			crossFade: true,
		},
		breakpoints: {
			// when window width is >= 480px
			600: {
				slidesPerView: 1,
			},
			// when window width is >= 640px
		},
		spaceBetween: 10,
		pagination: {
			el: ".places__dots",
			clickable: true,
		},
		navigation: {
			nextEl: ".places__button-next",
			prevEl: ".places__button-prev",
		},
	});
	let tileSlider = $(".examples__galery");
	tileSlider.each(function () {
		let mySwiper = new Swiper(this, {
			loop: true,
			slidesPerView: 1,
			navigation: {
				nextEl: $(this).parent().find(".examples__button-next")[0],
				prevEl: $(this).parent().find(".examples__button-prev")[0],
			},
			pagination: {
				el: $(this).parent().find(".examples__dots")[0],
			},
		});
	});
	const first = new Swiper(".first__slider", {
		slidesPerView: 1,
		slidesPerGroup: 1,
		pagination: {
			clickable: true,
			el: ".first__dots",
		},
		speed: 200,
		slideToClickedSlide: true,
	});
	first.on("slideChange", function () {
		const index_currentSlide = first.realIndex;
		$(".first__current").text(index_currentSlide + 1);
		$(".first__dot").each((i, el) => {
			el.classList.remove("first__dot_active");
			el.textContent = "";
		});
		$(".first__dot")[first.realIndex].classList.add("first__dot_active");
		$(".first__dot")[first.realIndex].textContent = first.realIndex + 1;
	});
	const swiper = new Swiper(".complex__slider", {
		// Default parameters
		slidesPerView: 1,
		slideToClickedSlide: true,
		autoplay: {
			delay: 5000,
		},
		breakpoints: {
			600: {
				slidesPerView: "auto",
				spaceBetween: 45,
			},
		},
		speed: 800,
		spaceBetween: 10,
		pagination: {
			clickable: true,
			el: ".complex__dots",
		},
		navigation: {
			nextEl: ".complex__button-next",
			prevEl: ".complex__button-prev",
		},
		// Responsive breakpoints
	});
	const yandex = new Swiper(".trust__comments", {
		// Default parameters
		slidesPerView: 1,
		autoplay: {
			delay: 5000,
		},
		// breakpoints: {
		// 	// when window width is >= 480px
		// 	480: {
		// 		slidesPerView: "auto",
		// 		spaceBetween: 45,
		// 	},
		// 	// when window width is >= 640px
		// },
		speed: 800,
		spaceBetween: 20,
		pagination: {
			el: ".trust__dots",
		},
		navigation: {
			nextEl: ".trust__button-next",
			prevEl: ".trust__button-prev",
		},
		// Responsive breakpoints
	});
	const solutions = new Swiper(".solutions__swiper", {
		// Default parameters
		slidesPerView: 1,

		speed: 800,
		autoplay: {
			delay: 5000,
		},
		breakpoints: {
			// when window width is >= 480px
			600: {
				slidesPerView: "auto",
				spaceBetween: 45,
			},
			// when window width is >= 640px
		},
		spaceBetween: 10,
		pagination: {
			el: ".solutions__dots",
			clickable: true,
		},
		navigation: {
			nextEl: ".solutions__button-next",
			prevEl: ".solutions__button-prev",
		},
	});
	const serteficates = new Swiper(".about__slider", {
		// Default parameters
		slidesPerView: 1.8,
		slideToClickedSlide: true,
		autoplay: {
			delay: 5000,
		},
		breakpoints: {
			// when window width is >= 480px
			600: {
				slidesPerView: 3,
				spaceBetween: 52,
			},
			// when window width is >= 640px
		},
		speed: 800,
		spaceBetween: 23,
		navigation: {
			nextEl: ".about__button-next",
			prevEl: ".about__button-prev",
		},
		// Responsive breakpoints
	});
	const works = new Swiper(".works__slider", {
		// Default parameters
		slidesPerView: 1,

		speed: 800,
		autoplay: {
			delay: 5000,
		},
		effect: "fade",
		fadeEffect: {
			crossFade: true,
		},
		breakpoints: {
			// when window width is >= 480px
			600: {
				slidesPerView: 1,
			},
			// when window width is >= 640px
		},
		spaceBetween: 10,
		pagination: {
			el: ".works__dots",
			clickable: true,
		},
		navigation: {
			nextEl: ".works__button-next",
			prevEl: ".works__button-prev",
		},
	});
	const swup = new Swup({
		plugins: [
			new SwupScrollPlugin({
				doScrollingRightAway: false,
				animateScroll: false,
				scrollFriction: 0,
				scrollAcceleration: 0,
			}),
		],
	});
	swup.on("contentReplaced", init);
	swup.on("clickLink", () => {
		disableBurger();
	});
	AOS.init({
		once: true,
		disable: "mobile",
	});
	function init() {
		$(".seo__more").click(() => {
			$(".seo__text").toggleClass("seo__text_active");
			$(".seo__more").toggleClass("seo__more_active");
			if ($(".seo__text").hasClass("seo__text_active"))
				$(".seo__more-text").text("Закрыть");
			else {
				$(".seo__more-text").text("Раскрыть полностью");
			}
		});
		$(".examples__settings-box").click(() => {
			settings();
		});
		$(".examples__wrap-back").click(() => {
			disableSettings();
		});
		const scene = document.querySelector(".about__back-inner");
		if (scene) {
			const parallaxInstance = new Parallax(scene, {
				hoverOnly: true,
			});
		}
		AOS.init({
			once: true,
			disable: "mobile",
		});
		$(".header__link").each(function (i, el) {
			el.addEventListener("click", () => {
				if (!el.classList.contains("header__link_active")) {
					el.classList.add("header__link_active");
				} else {
					el.classList.remove("header__link_active");
				}
			});
		});
		$(".faq__quastion").click(e => {
			if (e.target.closest(".faq__quastion")) {
				e.target
					.closest(".faq__quastion")
					.classList.toggle("faq__quastion_active");
			}
		});
		$(".price__input").inputmask("+7 (999) 999-99-99");
		$(".catalog__number").inputmask("+7 (999) 999-99-99");
		$(".high__field-input").inputmask("+7 (999) 999-99-99");
		$(".header__burger").click(e => {
			burger();
		});
		const yandex = new Swiper(".trust__comments", {
			// Default parameters
			slidesPerView: 1,
			autoplay: {
				delay: 5000,
			},
			// breakpoints: {
			// 	// when window width is >= 480px
			// 	480: {
			// 		slidesPerView: "auto",
			// 		spaceBetween: 45,
			// 	},
			// 	// when window width is >= 640px
			// },
			speed: 800,
			spaceBetween: 20,
			pagination: {
				el: ".trust__dots",
			},
			navigation: {
				nextEl: ".trust__button-next",
				prevEl: ".trust__button-prev",
			},
			// Responsive breakpoints
		});
		const swiper = new Swiper(".complex__slider", {
			// Default parameters
			slidesPerView: 1,
			slideToClickedSlide: true,
			autoplay: {
				delay: 5000,
			},
			breakpoints: {
				// when window width is >= 480px
				600: {
					slidesPerView: "auto",
					spaceBetween: 45,
				},
				// when window width is >= 640px
			},
			speed: 800,
			spaceBetween: 10,
			pagination: {
				clickable: true,
				el: ".complex__dots",
			},
			navigation: {
				nextEl: ".complex__button-next",
				prevEl: ".complex__button-prev",
			},
			// Responsive breakpoints
		});
		const serteficates = new Swiper(".about__slider", {
			// Default parameters
			slidesPerView: 1.8,
			slideToClickedSlide: true,
			autoplay: {
				delay: 5000,
			},
			breakpoints: {
				// when window width is >= 480px
				600: {
					slidesPerView: 3,
					spaceBetween: 52,
				},
				// when window width is >= 640px
			},
			speed: 800,
			spaceBetween: 23,
			navigation: {
				nextEl: ".about__button-next",
				prevEl: ".about__button-prev",
			},
			// Responsive breakpoints
		});
		const first = new Swiper(".first__slider", {
			// Default parameters
			slidesPerView: 1,
			slidesPerGroup: 1,
			pagination: {
				clickable: true,
				el: ".first__dots",
			},
			on: {
				slideChange: function () {
					const index_currentSlide = first.realIndex;
					$(".first__current").text(index_currentSlide + 1);
				},
			},
			speed: 200,
			slideToClickedSlide: true,
		});
		first.on("slideChange", function () {
			const index_currentSlide = first.realIndex;
			$(".first__current").text(index_currentSlide + 1);
			$(".first__dot").each((i, el) => {
				el.classList.remove("first__dot_active");
				el.textContent = "";
			});
			$(".first__dot")[first.realIndex].classList.add("first__dot_active");
			$(".first__dot")[first.realIndex].textContent = first.realIndex + 1;
		});
		const solutions = new Swiper(".solutions__swiper", {
			slidesPerView: 1,
			speed: 800,
			autoplay: {
				delay: 5000,
			},
			breakpoints: {
				// when window width is >= 480px
				600: {
					slidesPerView: "auto",
					spaceBetween: 45,
				},
				// when window width is >= 640px
			},
			spaceBetween: 10,
			pagination: {
				el: ".solutions__dots",
				clickable: true,
			},
			navigation: {
				nextEl: ".solutions__button-next",
				prevEl: ".solutions__button-prev",
			},
		});
		const works = new Swiper(".works__slider", {
			// Default parameters
			slidesPerView: 1,

			speed: 800,
			autoplay: {
				delay: 5000,
			},
			effect: "fade",
			fadeEffect: {
				crossFade: true,
			},
			breakpoints: {
				// when window width is >= 480px
				600: {
					slidesPerView: 1,
				},
				// when window width is >= 640px
			},
			spaceBetween: 10,
			pagination: {
				el: ".works__dots",
				clickable: true,
			},
			navigation: {
				nextEl: ".works__button-next",
				prevEl: ".works__button-prev",
			},
		});
		const places = new Swiper(".places__slider", {
			// Default parameters
			slidesPerView: 1,

			speed: 800,
			autoplay: {
				delay: 5000,
			},
			effect: "fade",
			fadeEffect: {
				crossFade: true,
			},
			breakpoints: {
				// when window width is >= 480px
				600: {
					slidesPerView: 1,
				},
				// when window width is >= 640px
			},
			spaceBetween: 10,
			pagination: {
				el: ".places__dots",
				clickable: true,
			},
			navigation: {
				nextEl: ".places__button-next",
				prevEl: ".places__button-prev",
			},
		});
		let tileSlider = $(".examples__galery");
		tileSlider.each(function () {
			let mySwiper = new Swiper(this, {
				loop: true,
				slidesPerView: 1,
				navigation: {
					nextEl: $(this).parent().find(".examples__button-next")[0],
					prevEl: $(this).parent().find(".examples__button-prev")[0],
				},
				pagination: {
					el: $(this).parent().find(".examples__dots")[0],
				},
			});
		});
		const types = new Swiper(".types__slider", {
			// Default parameters
			slidesPerView: 1,

			speed: 800,
			autoplay: {
				delay: 5000,
			},
			breakpoints: {
				// when window width is >= 480px
				600: {
					slidesPerView: "auto",
					spaceBetween: 70,
				},
				// when window width is >= 640px
			},
			spaceBetween: 10,
			pagination: {
				el: ".types__dots",
				clickable: true,
			},
			navigation: {
				nextEl: ".types__button-next",
				prevEl: ".types__button-prev",
			},
		});
	}
	const types = new Swiper(".types__slider", {
		// Default parameters
		slidesPerView: 1,

		speed: 800,
		autoplay: {
			delay: 5000,
		},
		breakpoints: {
			// when window width is >= 480px
			600: {
				slidesPerView: "auto",
				spaceBetween: 70,
			},
			// when window width is >= 640px
		},
		spaceBetween: 10,
		pagination: {
			el: ".types__dots",
			clickable: true,
		},
		navigation: {
			nextEl: ".types__button-next",
			prevEl: ".types__button-prev",
		},
	});
	$(".price__input").inputmask("+7 (999) 999-99-99");
	$(".catalog__number").inputmask("+7 (999) 999-99-99");
	$(".high__field-input").inputmask("+7 (999) 999-99-99");
	$(".header__burger").click(e => {
		burger();
	});
	$(".header__link").each(function (i, el) {
		el.addEventListener("click", () => {
			if (!el.classList.contains("header__link_active")) {
				el.classList.add("header__link_active");
			} else {
				el.classList.remove("header__link_active");
			}
		});
	});
	$(".faq__quastion").click(e => {
		if (e.target.closest(".faq__quastion")) {
			e.target
				.closest(".faq__quastion")
				.classList.toggle("faq__quastion_active");
		}
	});
	document.addEventListener("scroll", event => {
		if (window.scrollY) {
			$(".header").addClass("header_fixed");
		} else {
			$(".header").removeClass("header_fixed");
		}
	});
});
$(".seo__more").click(() => {
	$(".seo__text").toggleClass("seo__text_active");
	$(".seo__more").toggleClass("seo__more_active");
	if ($(".seo__text").hasClass("seo__text_active"))
		$(".seo__more-text").text("Закрыть");
	else {
		$(".seo__more-text").text("Раскрыть полностью");
	}
});
function settings() {
	$(".examples__wrap").addClass("examples__wrap_active");
	if ($(".examples__wrap").hasClass("examples__wrap_active")) {
		$("body").css("overflow-y", "hidden");
	} else {
		$("body").css("overflow-y", "auto");
	}
}
function disableSettings() {
	$(".examples__wrap").removeClass("examples__wrap_active");
	$("body").css("overflow-y", "auto");
}
function burger() {
	$(".header__burger").toggleClass("header__burger_active");
	$(".header__nav").toggleClass("header__nav_active");
	if ($(".header__burger").hasClass("header__burger_active")) {
		$("body").css("overflow-y", "hidden");
		$(".header__navigation-row").addClass("header__navigation-hide");
	} else {
		$("body").css("overflow-y", "auto");
		$(".header__navigation-row").removeClass("header__navigation-hide");
	}
}
function disableBurger() {
	$(".header__burger").removeClass("header__burger_active");
	$(".header__nav").removeClass("header__nav_active");
	$("body").css("overflow-y", "auto");
	$(".header__navigation-row").removeClass("header__navigation-hide");
}
