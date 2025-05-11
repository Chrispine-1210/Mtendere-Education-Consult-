AOS.init({
	duration: 800,
	easing: 'slide',
	once: true
});

$(function () {
    'use strict';

    // Off-canvas menu toggle for mobile
    $('body').on('click', '.js-menu-toggle', function (e) {
        e.preventDefault();
        $('body').toggleClass('offcanvas-menu');
        $(this).toggleClass('active');
    });

    // Initialize owl carousel
    $('.owl-3-slider').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 5000,
        margin: 10,
        items: 1,
        nav: false,
        dots: true,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
    });

    // Next and Previous buttons for carousel
    $('.hero-controls .next-btn').click(function () {
        $('.owl-3-slider').trigger('next.owl.carousel');
    });

    $('.hero-controls .prev-btn').click(function () {
        $('.owl-3-slider').trigger('prev.owl.carousel');
    });
});

var owlPlugin = function () {
	if ($('.owl-3-slider').length > 0) {
		var owl3 = $('.owl-3-slider').owlCarousel({
			loop: true,
			autoHeight: true,
			margin: 40,
			autoplay: true,
			smartSpeed: 700,
			items: 4,
			stagePadding: 0,
			nav: true,
			dots: true,
			navText: ['<span class="icon-keyboard_backspace"></span>', '<span class="icon-keyboard_backspace"></span>'],
			responsive: {
				0: {
					items: 1
				},
				600: {
					items: 1
				},
				800: {
					items: 2
				},
				1000: {
					items: 2
				},
				1100: {
					items: 3
				}
			}
		});
	}
	$('.js-custom-next-v2').click(function (e) {
		e.preventDefault();
		owl3.trigger('next.owl.carousel');
	})
	$('.js-custom-prev-v2').click(function (e) {
		e.preventDefault();
		owl3.trigger('prev.owl.carousel');
	})
	if ($('.owl-4-slider').length > 0) {
		var owl4 = $('.owl-4-slider').owlCarousel({
			loop: true,
			autoHeight: true,
			margin: 10,
			autoplay: true,
			smartSpeed: 700,
			items: 4,
			nav: false,
			dots: true,
			navText: ['<span class="icon-keyboard_backspace"></span>', '<span class="icon-keyboard_backspace"></span>'],
			responsive: {
				0: {
					items: 1
				},
				600: {
					items: 2
				},
				800: {
					items: 2
				},
				1000: {
					items: 3
				},
				1100: {
					items: 4
				}
			}
		});
	}


	if ($('.owl-single-text').length > 0) {
		var owlText = $('.owl-single-text').owlCarousel({
			loop: true,
			autoHeight: true,
			margin: 0,
			autoplay: true,
			smartSpeed: 1200,
			items: 1,
			nav: false,
			navText: ['<span class="icon-keyboard_backspace"></span>', '<span class="icon-keyboard_backspace"></span>']
		});
	}

	if ($('.events-slider').length > 0) {
		var owl = $('.events-slider').owlCarousel({
			loop: true,
			autoHeight: true,
			margin: 0,
			autoplay: true,
			smartSpeed: 800,
			mouseDrag: false,
			touchDrag: false,
			items: 1,
			nav: false,
			navText: ['<span class="icon-keyboard_backspace"></span>', '<span class="icon-keyboard_backspace"></span>'],
		});
	}
	if ($('.owl-single').length > 0) {

		var owl = $('.owl-single').owlCarousel({
			loop: true,
			autoHeight: true,
			margin: 0,
			autoplay: true,
			smartSpeed: 800,
			mouseDrag: false,
			touchDrag: false,
			items: 1,
			nav: false,
			navText: ['<span class="icon-keyboard_backspace"></span>', '<span class="icon-keyboard_backspace"></span>'],
			onChanged: changed,
		});

		function changed(event) {
			var i = event.item.index;

			if (i == 0 || i == null) {
				i = 1;
			} else {
				i = i - 1;

				$('.js-custom-dots li').removeClass('active');
				$('.js-custom-dots li[data-index="' + i + '"]').addClass('active');
			}
		}

		$('.js-custom-dots li').each(function (i) {

			var i = i + 1;
			$(this).attr('data-index', i);
		});

		$('.js-custom-dots a').on('click', function (e) {
			e.preventDefault();
			owl.trigger('stop.owl.autoplay');
			var k = $(this).closest('li').data('index');
			k = k - 1;
			owl.trigger('to.owl.carousel', [k, 500]);
		})

	}


	if ($('.wide-slider-testimonial').length > 0) {
		$('.wide-slider-testimonial').owlCarousel({
			loop: true,
			autoplay: true,
			margin: 0,
			nav: false,
			autoplayHoverPause: false,
			items: 1,
			smartSpeed: 1000,
			autoHeight: true,
			navText: ["<span class='ion-android-arrow-dropleft'></span>", "<span class='ion-android-arrow-dropright'></span>"],
			responsive: {
				0: {
					items: 1,
					nav: false
				},
				600: {
					items: 1,
					nav: false
				},
				1000: {
					items: 1,
					nav: false
				}
			}
		});
	}

}
owlPlugin();

$(document).ready(function () {
	$(".hero-carousel").owlCarousel({
		items: 1,
		loop: true,
		autoplay: true,
		autoplayTimeout: 6000,
		nav: true,
		dots: true
	});
});

// Initialize Owl Carousel for dynamic testimonial sliding
$(document).ready(function () {
	$(".owl-carousel").owlCarousel({
		items: 1, // Display one item at a time
		loop: true, // Continuous loop of items
		autoplay: true, // Auto-play testimonials
		autoplayTimeout: 5000, // Scroll every 5 seconds
		autoplayHoverPause: true, // Pause on hover
		nav: true, // Show next/prev buttons
		dots: true, // Show dots
	});
});

// Back to Top functionality
const backToTopButton = document.getElementById("backToTop");

$('#universitySelect').on('change', function () {
	const selectedUni = $(this).val();
	const data = universityData[selectedUni];

	if (data) {
		$('#intakesList').text(data.intakes.join(', '));
		$('#programsList').text(data.programs.join(', '));
		$('#documentsList').text(data.documents);
		$('#requirementsText').text(data.requirements);
	}
});

window.onscroll = function () {
	if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
		backToTopButton.style.display = "block";
	} else {
		backToTopButton.style.display = "none";
	}
};

backToTopButton.addEventListener("click", function () {
	window.scrollTo({ top: 0, behavior: "smooth" });
});

document.getElementById("applicationForm").addEventListener("submit", function (e) {
	e.preventDefault();
	alert("Your application has been submitted!");
	this.reset();
	closeForm();
});

const videoModal = document.getElementById("videoModal");
videoModal.addEventListener("hidden.bs.modal", function () {
	const iframe = document.getElementById("videoFrame");
	iframe.src = iframe.src; // resets the video
});

var counter = function () {

	$('.count-numbers').waypoint(function (direction) {

		if (direction === 'down' && !$(this.element).hasClass('ut-animated')) {

			var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',')
			$('.counter > span').each(function () {
				var $this = $(this),
					num = $this.data('number');
				$this.animateNumber(
					{
						number: num,
						numberStep: comma_separator_number_step
					}, 5000
				);
			});

		}

	}, { offset: '95%' });

}
counter();

// jarallax
var jarallaxPlugin = function () {
	if ($('.jarallax').length > 0) {
		$('.jarallax').jarallax({
			speed: 0.2
		});
	}
};
jarallaxPlugin();

setTimeout(() => {
	document.getElementById('enquireForm').classList.add('show');
}, 10000);


const faqBtn = document.getElementById("faqBtn");
const faqModal = document.getElementById("faqModal");
const closeBtn = document.querySelector(".close-btn");

faqBtn.onclick = () => faqModal.style.display = "block";
closeBtn.onclick = () => faqModal.style.display = "none";
window.onclick = (e) => {
	if (e.target === faqModal) faqModal.style.display = "none";
};

const accordions = document.querySelectorAll(".accordion");
accordions.forEach(acc => {
	acc.addEventListener("click", function () {
		this.classList.toggle("active");
		const panel = this.nextElementSibling;
		if (panel.style.maxHeight) {
			panel.style.maxHeight = null;
		} else {
			panel.style.maxHeight = panel.scrollHeight + "px";
		}
	});
});

var accordion = function () {
	$('.btn-link[aria-expanded="true"]').closest('.accordion-item').addClass('active');
	$('.collapse').on('show.bs.collapse', function () {
		$(this).closest('.accordion-item').addClass('active');
	});

	$('.collapse').on('hidden.bs.collapse', function () {
		$(this).closest('.accordion-item').removeClass('active');
	});
}
accordion();

var siteDatePicker = function () {

	if ($('.datepicker').length > 0) {
		$('.datepicker').datepicker();
	}

};
siteDatePicker();

var siteSticky = function () {
	$(".js-sticky-header").sticky({ topSpacing: 0 });
};
siteSticky();

// Handle dropdown type selection
document.querySelectorAll(".dropdown-item").forEach(item => {
	item.addEventListener("click", function () {
		selectedType = this.textContent.trim();
		document.querySelector(".dropdown-toggle").textContent = selectedType;
	});
});

function togglePopup(register = false) {
	const popup = document.getElementById("popupContainer");
	const card = document.getElementById("flipCard");
	popup.style.display = "flex";
	card.classList.remove("flipped");
	if (register) card.classList.add("flipped");
};

function closePopup() {
	document.getElementById("popupContainer").style.display = "none";
};

function flipCard() {
	document.getElementById("flipCard").classList.toggle("flipped");
};

let slideIndex = 0;
const galleryItems = document.querySelectorAll('.gallery-item');
const toggleButton = document.getElementById('toggleGallery');
let galleryInterval;

// Function to start the slideshow
const startSlideshow = () => {
  galleryInterval = setInterval(() => {
    galleryItems.forEach(item => item.classList.remove('active'));
    slideIndex = (slideIndex + 1) % galleryItems.length;
    galleryItems[slideIndex].classList.add('active');
    animateLike(galleryItems[slideIndex]);
  }, 5000);
};

// Function to stop the slideshow
const stopSlideshow = () => {
  clearInterval(galleryInterval);
};

// Toggle button functionality
toggleButton.addEventListener('click', () => {
  if (galleryInterval) {
    stopSlideshow();
    toggleButton.textContent = 'Resume Slideshow';
  } else {
    startSlideshow();
    toggleButton.textContent = 'Pause Slideshow';
  }
});
  
// Shrink Header on Scroll
window.addEventListener('scroll', function () {
	const nav = document.querySelector('.site-nav');
	if (window.scrollY > 50) {
	  nav.classList.add('shrink');
	} else {
	  nav.classList.remove('shrink');
	}
  });
  
  const form = document.getElementById('applicationForm');
  const loadingSpinner = document.getElementById('loadingSpinner');
  const successModal = document.getElementById('successModal');
  const closeSuccessBtn = document.getElementById('closeSuccessBtn');
  const formModal = document.getElementById('formModal');
  
  form.addEventListener('submit', function(e) {
	  e.preventDefault();
  
	  // Show Spinner
	  loadingSpinner.style.display = 'flex';
  
	  // Simulate a form processing delay
	  setTimeout(function() {
		  loadingSpinner.style.display = 'none';
		  formModal.style.display = 'none';
		  successModal.style.display = 'block';
		  form.reset(); // Reset the form
	  }, 2000); // 2 seconds
  });
  
  AOS.init({
	duration: 1200,
	once: true,
	offset: 200
  });

// Event Data Array
const events = [
    {
        title: "Global Education Summit 2025",
        description: "Join top scholars for an international discussion on education opportunities.",
        speaker: "Dr. Grace Banda",
        location: "Mount Soche Hotel, Blantyre",
        date: "2025-07-22",
        media: "video/event-sample.mp4",
        type: "video"
    },
    {
        title: "Scholarship Bootcamp",
        description: "Exclusive training on how to secure scholarships abroad and excel.",
        speaker: "Mr. Kelvin Mwale",
        location: "Lilongwe BICC",
        date: "2024-05-15",
        media: "img/scholarship.jpg",
        type: "image"
    },
    {
        title: "Youth Tech Innovation Day",
        description: "Empowering the next generation in digital transformation and AI.",
        speaker: "Prof. Sarah Mponda",
        location: "Mzuzu Tech Park",
        date: "2025-01-10",
        media: "img/techday.jpg",
        type: "image"
    }
];

// Current Date
const today = new Date();

// Close success modal
closeSuccessBtn.addEventListener('click', function() {
	  successModal.style.display = 'none';
});

const modal = document.getElementById('applyModal');
const openModalBtn = document.querySelector('.open-modal');
const closeModalBtn = document.querySelector('.close-button');

openModalBtn.addEventListener('click', function () {
  modal.style.display = 'flex';
});

closeModalBtn.addEventListener('click', function () {
  modal.style.display = 'none';
});

window.addEventListener('click', function (e) {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});

// Initialize the slideshow on page load
startSlideshow();

// Modal Video Handling
var videoSrc;
$('#videoModal').on('show.bs.modal', function (e) {
	videoSrc = $(e.relatedTarget).data('src');
	$("#video").attr('src', videoSrc);
});
$('#videoModal').on('hide.bs.modal', function (e) {
	$("#video").attr('src', '');
});