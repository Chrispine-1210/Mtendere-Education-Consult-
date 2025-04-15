import $ from 'jquery';
import 'bootstrap';
import 'owl.carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.carousel.theme.default.css';
import 'animate.css';
import 'jarallax';
import 'jarallax/dist/jarallax.css';
import 'jquery-ui/ui/widgets/datepicker';
import 'jquery-ui/themes/base/all.css';

AOS.init({
	duration: 800,
	easing: 'ease-out',
	once: true
});

$(function () {

	'use strict';

	$(".loader").delay(200).fadeOut("slow");
	$("#overlayer").delay(200).fadeOut("slow");

	var siteMenuClone = function () {

		$('.js-clone-nav').each(function () {
			var $this = $(this);
			$this.clone().attr('class', 'site-nav-wrap').appendTo('.site-mobile-menu-body');
		});

		$('body').toggleClass('no-scroll', $('body').hasClass('offcanvas-menu'));

		setTimeout(function () {

			var counter = 0;
			$('.site-mobile-menu .has-children').each(function () {
				var $this = $(this);

				$this.prepend('<span class="arrow-collapse collapsed">');

				$this.find('.arrow-collapse').attr({
					'data-toggle': 'collapse',
					'data-target': '#collapseItem' + counter,
				});

				$this.find('> ul').attr({
					'class': 'collapse',
					'id': 'collapseItem' + counter,
				});

				counter++;

			});

		}, 1000);

		$('body').on('click', '.arrow-collapse', function (e) {
			var $this = $(this);
			if ($this.closest('li').find('.collapse').hasClass('show')) {
				$this.removeClass('active');
			} else {
				$this.addClass('active');
			}
			e.preventDefault();

		});

		$(window).resize(function () {
			var $this = $(this),
				w = $this.width();

			if (w > 768) {
				if ($('body').hasClass('offcanvas-menu')) {
					$('body').removeClass('offcanvas-menu');
				}
			}
		})

		$('body').on('click', '.js-menu-toggle', function (e) {
			var $this = $(this);
			e.preventDefault();

			if ($('body').hasClass('offcanvas-menu')) {
				$('body').removeClass('offcanvas-menu');
				$('body').find('.js-menu-toggle').removeClass('active');
			} else {
				$('body').addClass('offcanvas-menu');
				$('body').find('.js-menu-toggle').addClass('active');
			}
		})

		// click outside offcanvas
		$(document).mouseup(function (e) {
			var container = $(".site-mobile-menu");
			if (!container.is(e.target) && container.has(e.target).length === 0) {
				if ($('body').hasClass('offcanvas-menu')) {
					$('body').removeClass('offcanvas-menu');
					$('body').find('.js-menu-toggle').removeClass('active');
				}
			}
		});
	};
	siteMenuClone();
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
	});
	$('.js-custom-prev-v2').click(function (e) {
		e.preventDefault();
		owl3.trigger('prev.owl.carousel');
	});
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

// Function to handle autoscrolling
function scrollToTop() {
	window.scrollTo({ top: 0, behavior: 'smooth' });
};

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

document.addEventListener("DOMContentLoaded", function () {
	// --- University Selection & Display ---
	const universityData = {
		chandigarh: {
			intakes: ["January", "July"],
			programs: ["Engineering", "Business", "IT", "Hospitality"],
			documents: "Passport, Academic Transcript, English Proficiency (IELTS 6.0+)",
			requirements: "Minimum 60% aggregate in high school, IELTS 6.0 or equivalent"
		},
		parul: {
			intakes: ["February", "September"],
			programs: ["Medicine", "Physiotherapy", "Engineering", "Design"],
			documents: "Transcript, Passport, Medical Certificate",
			requirements: "High school diploma with science subjects, minimum 55%, valid ID"
		},
		ct: {
			intakes: ["January", "July", "November"],
			programs: ["Applied Sciences", "Agriculture", "Media"],
			documents: "Transcript, Passport, Proof of English",
			requirements: "Pass in relevant subjects, English proficiency certificate"
		},
		shoolini: {
			intakes: ["March", "August"],
			programs: ["Pharmacy", "Biotech", "Liberal Arts"],
			documents: "60%+ in core subjects, English Proof, ID",
			requirements: "Minimum 60% in science stream, English proficiency"
		},
		jain: {
			intakes: ["January", "June", "October"],
			programs: ["Sports Science", "Aviation", "Engineering"],
			documents: "GPA ≥ 2.5, English Test, Passport Copy",
			requirements: "Minimum GPA of 2.5, strong academic background in chosen program"
		}
	};

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
});

const universitySelect = document.getElementById("university");
const intakeSelect = document.getElementById("intakeMonth");
const programSelect = document.getElementById("program");
const documentsField = document.getElementById("documents");
const requirementsField = document.getElementById("requirements");

universitySelect.addEventListener("change", function () {
	const selected = this.value;
	const data = universityData[selected];

	intakeSelect.innerHTML = "";
	programSelect.innerHTML = "";

	if (data) {
		data.intakes.forEach(month => {
			const option = document.createElement("option");
			option.value = month;
			option.textContent = month;
			intakeSelect.appendChild(option);
		});

		data.programs.forEach(program => {
			const option = document.createElement("option");
			option.value = program;
			option.textContent = program;
			programSelect.appendChild(option);
		});

		documentsField.value = data.documents;
		requirementsField.value = data.requirements;
	} else {
		documentsField.value = "";
		requirementsField.value = "";
	}
});

// --- Back to Top Button ---
const backToTopButton = document.getElementById("backToTopButton");

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

// --- Form Submission ---
document.getElementById("applicationForm").addEventListener("submit", function (e) {
	e.preventDefault();
	alert("Your application has been submitted!");
	this.reset();
	// Implement closeForm() only if it's defined
	if (typeof closeForm === "function") closeForm();
});

// --- Reset video on close ---
const videoModal = document.getElementById("videoModal");
if (videoModal) {
	videoModal.addEventListener("hidden.bs.modal", function () {
		const iframe = document.getElementById("videoFrame");
		iframe.src = iframe.src;
	});
}

// --- Animated Counter ---
const counter = function () {
	$('.count-numbers').waypoint(function (direction) {
		if (direction === 'down' && !$(this.element).hasClass('ut-animated')) {
			var comma_separator = $.animateNumber.numberStepFactories.separator(',');
			$('.counter > span').each(function () {
				var $this = $(this),
					num = $this.data('number');
				$this.animateNumber({ number: num, numberStep: comma_separator }, 5000);
			});
		}
	}, { offset: '95%' });
}
counter();

// --- Jarallax ---
if ($('.jarallax').length > 0) {
	$('.jarallax').jarallax({ speed: 0.2 });
}

// --- Enquiry Form Show Delay ---
setTimeout(() => {
	document.getElementById('enquireForm')?.classList.add('show');
}, 10000);

// --- FAQ Modal ---
const faqBtn = document.getElementById("faqBtn");
const faqModal = document.getElementById("faqModal");
const closeBtn = document.querySelector(".close-btn");

faqBtn?.addEventListener("click", () => faqModal.style.display = "block");
closeBtn?.addEventListener("click", () => faqModal.style.display = "none");
window.addEventListener("click", e => {
	if (e.target === faqModal) faqModal.style.display = "none";
});

$('.btn-link[aria-expanded="true"]').closest('.accordion-item').addClass('active');
$('.collapse').on('show.bs.collapse', function () {
	$(this).closest('.accordion-item').addClass('active');
});

// Remove active class from all accordion items when the page loads
document.addEventListener("DOMContentLoaded", function () {
	document.querySelectorAll(".accordion-item").forEach(item => {
		item.classList.remove("active");
	});
});

// Import the jQuery UI library
import $ from 'jquery-ui/ui/widgets/datepicker';

// Initialize the date picker functionality
$(document).ready(function () {
	// Check if there is an element with the class "datepicker" present in the HTML document
	if ($('.datepicker').length > 0) {
		// Initialize the date picker functionality using the 'datepicker' method provided by the jQuery UI library
		$('.datepicker').datepicker();
	}
});

// --- Sticky Header ---
$(".js-sticky-header").sticky({ topSpacing: 0 });

// --- Program Filter ---
const universityDatabase = [
	{
		university: 'Chandigarh University',
		programs: [
			{ name: 'Engineering', level: 'Undergraduate', country: 'India' },
			{ name: 'MBA', level: 'Postgraduate', country: 'India' }
		]
	},
	{
		university: 'Jain University',
		programs: [
			{ name: 'Sports Science', level: 'Masters', country: 'India' },
			{ name: 'Aviation Management', level: 'Undergraduate', country: 'India' }
		]
	}
];

function filterPrograms(keyword, level) {
	const results = [];
	universityDatabase.forEach(university => {
		university.programs.forEach(program => {
			const nameMatch = program.name.toLowerCase().includes(keyword.toLowerCase());
			const levelMatch = level ? program.level === level : true;
			if (nameMatch && levelMatch) {
				results.push({
					university: university.university,
					program: program.name,
					level: program.level,
					country: program.country
				});
			}
		});
	});
	return results;
}

function displayResults(results) {
	const container = document.getElementById('searchResults');
	container.innerHTML = '';
	if (results.length === 0) {
		container.innerHTML = '<p class="text-danger">No matching programs found.</p>';
		return;
	}
	results.forEach(result => {
		const row = document.createElement('tr');
		row.innerHTML = `
            <td>${result.program}</td>
            <td>${result.level}</td>
            <td>${result.university}</td>
            <td>${result.country}</td>
        `;
		container.appendChild(row);
	});
}

document.getElementById('searchBtn').addEventListener('click', () => {
	const keyword = document.getElementById('searchInput').value;
	const level = document.getElementById('courseLevelSelect').value;
	const results = filterPrograms(keyword, level);
	displayResults(results);
});

// --- Accordion Logic ---
const accordions = document.querySelectorAll < HTMLElement > (".accordion");
accordions.forEach(acc => {
	acc.addEventListener("click", function () {
		// Remove active class from all accordion items
		document.querySelectorAll < HTMLElement > (".accordion-item").forEach(item => {
			item.classList.remove("active");
		});

		// Add active class to the clicked accordion item
		this.classList.toggle("active");

		const panel = this.nextElementSibling as HTMLElement;
		panel.style.maxHeight = panel.style.maxHeight ? null : panel.scrollHeight + "px";
	});
});

// --- Sticky Header ---
$(".js-sticky-header").sticky({ topSpacing: 0 });

// --- Program Filter ---
const universityDatabase: { university: string; programs: { name: string; level: string; country: string }[] }[] = [
	// ...
];

function filterPrograms(keyword: string, level: string): { university: string; program: string; level: string; country: string }[] {
	const results: { university: string; program: string; level: string; country: string }[] = [];
	universityDatabase.forEach(university => {
		university.programs.forEach(program => {
			const nameMatch = program.name.toLowerCase().includes(keyword.toLowerCase());
			const levelMatch = level ? program.level === level : true;
			if (nameMatch && levelMatch) {
				results.push({
					university: university.university,
					program: program.name,
					level: program.level,
					country: program.country
				});
			}
		});
	});
	return results;
}

function displayResults(results: { university: string; program: string; level: string; country: string }[]): void {
	const container = document.getElementById('searchResults') as HTMLElement;
	container.innerHTML = '';
	if (results.length === 0) {
		container.innerHTML = '<p class="text-danger">No matching programs found.</p>';
		return;
	}
	results.forEach(result => {
		const row = document.createElement('tr');
		row.innerHTML = `
            <td>${result.program}</td>
            <td>${result.level}</td>
            <td>${result.university}</td>
            <td>${result.country}</td>
        `;
		container.appendChild(row);
	});
}

document.getElementById('searchBtn')?.addEventListener('click', () => {
	const keyword = document.getElementById('searchInput')?.value ?? '';
	const level = document.getElementById('courseLevelSelect')?.value;
	const results = filterPrograms(keyword, level);
	displayResults(results);
});

// --- Course Filter with Dropdown ---
const courseData: { title: string; type: string; university: string }[] = [
	// ...
];

let selectedType = "";

document.querySelectorAll(".dropdown-item").forEach(item => {
	item.addEventListener("click", function () {
		selectedType = this.textContent?.trim() ?? '';
		document.querySelector(".dropdown-toggle")?.textContent = selectedType;
	});
});

document.querySelector(".btn-secondary")?.addEventListener("click", function () {
	const keyword = document.querySelector("input.form-control")?.value?.toLowerCase().trim() ?? '';
	const resultsContainer = document.getElementById("resultsContainer") as HTMLElement;
	resultsContainer.innerHTML = "";

	const filtered = courseData.filter(course =>
		course.type === selectedType &&
		course.title.toLowerCase().includes(keyword)
	);

	if (filtered.length === 0) {
		resultsContainer.innerHTML = `<p class="text-center">No matching results found.</p>`;
		return;
	}

	filtered.forEach(course => {
		const col = document.createElement("div");
		col.className = "col-md-6 col-lg-4 mb-4";
		col.innerHTML = `
                <div class="card shadow-sm border-0">
                    <div class="card-body">
                        <h5 class="card-title">${course.title}</h5>
                        <p class="card-text"><strong>Type:</strong> ${course.type}</p>
                        <p class="card-text"><strong>University:</strong> ${course.university}</p>
                    </div>
                </div>`;
		resultsContainer.appendChild(col);
	});
});