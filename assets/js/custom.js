import $ from 'jquery';
import 'owl.carousel';

import AOS from 'aos';
import 'aos/dist/aos.css';

// Initialize AOS
AOS.init({
    duration: 800,
    easing: 'ease-out',
    once: true
});

import Jarallax from 'jarallax';
import 'jarallax/dist/jarallax.css';

$(document).ready(function() {
    // Apply Jarallax to elements with the .jarallax class
    if ($('.jarallax').length) {
        $('.jarallax').jarallax();
    }
});


// Owl Carousel Initialization for .owl-3-slider
$(document).ready(function() {
    if ($('.owl-3-slider').length) {
        $('.owl-3-slider').owlCarousel({
            loop: true,
            margin: 40,
            autoplay: true,
            smartSpeed: 700,
            items: 4,
            stagePadding: 0,
            nav: true,
            dots: true,
            navText: ['<span class="icon-keyboard_backspace"></span>', '<span class="icon-keyboard_backspace"></span>'],
            responsive: {
                0: { items: 1 },
                600: { items: 1 },
                800: { items: 2 },
                1000: { items: 2 },
                1100: { items: 3 },
            }
        });
    }
});

import $ from 'jquery';

$(function () {
    var siteMenuClone = function () {
        $('.js-clone-nav').each(function () {
            var $this = $(this);
            $this.clone().attr('class', 'site-nav-wrap').appendTo('.site-mobile-menu-body');
        });

        // More logic for menu handling...
    };
    siteMenuClone();
});


// Owl Carousel Initialization
function initCarousel() {
	$(".owl-carousel").owlCarousel({
		items: 1,
		loop: true,
		autoplay: true,
		autoplayTimeout: 5000,
		autoplayHoverPause: true,
		nav: true,
		dots: true,
	});
}

// University Dropdown Setup
function setupUniversityDropdown(universityData) {
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
}

// Back to Top Button
function setupBackToTop() {
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
}

// Form Submission
function setupFormSubmission() {
	document.getElementById("applicationForm").addEventListener("submit", function (e) {
		e.preventDefault();
		alert("Your application has been submitted!");
		this.reset();
		if (typeof closeForm === "function") closeForm();
	});
}

// Video Modal Reset
function setupVideoReset() {
	const videoModal = document.getElementById("videoModal");
	if (videoModal) {
		videoModal.addEventListener("hidden.bs.modal", function () {
			document.getElementById("videoFrame").src = document.getElementById("videoFrame").src;
		});
	}
}

// Animated Counter
function setupCounter() {
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

// Jarallax Effect
function setupJarallax() {
	if ($('.jarallax').length > 0) {
		$('.jarallax').jarallax({ speed: 0.2 });
	}
}

// Enquiry Form Delay
function showEnquiryFormLater() {
	setTimeout(() => {
		document.getElementById('enquireForm')?.classList.add('show');
	}, 10000);
}

// FAQ Modal
function setupFAQModal() {
	const faqBtn = document.getElementById("faqBtn");
	const faqModal = document.getElementById("faqModal");
	const closeBtn = document.querySelector(".close-btn");

	faqBtn?.addEventListener("click", () => faqModal.style.display = "block");
	closeBtn?.addEventListener("click", () => faqModal.style.display = "none");
	window.addEventListener("click", e => {
		if (e.target === faqModal) faqModal.style.display = "none";
	});
}

// Accordion Setup
function setupAccordion() {
	$('.btn-link[aria-expanded="true"]').closest('.accordion-item').addClass('active');
	$('.collapse').on('show.bs.collapse', function () {
		$(this).closest('.accordion-item').addClass('active');
	});
	document.querySelectorAll(".accordion-item").forEach(item => {
		item.classList.remove("active");
	});
}

// Date Picker Initialization
function setupDatePicker() {
	if ($('.datepicker').length > 0) {
		$('.datepicker').datepicker();
	}
}

document.addEventListener("DOMContentLoaded", function () {
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

	initCarousel();
	setupUniversityDropdown(universityData);
	setupBackToTop();
	setupFormSubmission();
	setupVideoReset();
	setupCounter();
	setupJarallax();
	showEnquiryFormLater();
	setupFAQModal();
	setupAccordion();
	setupDatePicker();
});

// --- University Database ---
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

// --- Filtering Logic ---
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

// --- Display Logic ---
function displayResults(results) {
	const container = document.getElementById('searchResults');
	container.innerHTML = '';

	if (results.length === 0) {
		container.innerHTML = '<tr><td colspan="4" class="text-danger text-center">No matching programs found.</td></tr>';
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

// --- Search Button Event ---
document.getElementById('searchBtn').addEventListener('click', () => {
	const keyword = document.getElementById('searchInput').value.trim();
	const level = document.getElementById('courseLevelSelect').value;
	const results = filterPrograms(keyword, level);
	displayResults(results);
});

// --- Accordion Logic ---
document.querySelectorAll(".accordion").forEach(acc => {
	acc.addEventListener("click", function () {
		// Collapse all
		document.querySelectorAll(".accordion-item").forEach(item => {
			item.classList.remove("active");
			item.querySelector('.panel').style.maxHeight = null;
		});

		// Toggle active class
		const parent = this.closest('.accordion-item');
		const panel = parent.querySelector(".panel");

		if (!parent.classList.contains("active")) {
			parent.classList.add("active");
			panel.style.maxHeight = panel.scrollHeight + "px";
		}
	});
});


// ----- Data -----
const universityDatabase = [
	{
		university: "Harvard",
		programs: [
			{ name: "Computer Science", level: "Undergraduate", country: "USA" },
			{ name: "Data Science", level: "Masters", country: "USA" }
		]
	},
	{
		university: "Oxford",
		programs: [
			{ name: "Medicine", level: "Undergraduate", country: "UK" },
			{ name: "AI Research", level: "PhD", country: "UK" }
		]
	}
];

const courseData = [
	{ title: "AI Bootcamp", type: "Short Course", university: "MIT" },
	{ title: "MBA", type: "Degree", university: "Stanford" }
];

// ----- State -----
let selectedType = "";

// ----- Filter Functions -----
function filterPrograms(keyword: string, level: string) {
	return universityDatabase.flatMap(u =>
		u.programs
			.filter(p =>
				p.name.toLowerCase().includes(keyword.toLowerCase()) &&
				(level ? p.level === level : true)
			)
			.map(p => ({ university: u.university, ...p }))
	);
}

function filterCourses(keyword: string, type: string) {
	return courseData.filter(course =>
		course.type === type &&
		course.title.toLowerCase().includes(keyword.toLowerCase())
	);
}

// ----- Display Renderer -----
function renderResults(data: any[], type: 'program' | 'course') {
	const container = document.getElementById(type === 'program' ? 'searchResults' : 'resultsContainer');
	if (!container) return;

	container.innerHTML = '';

	if (data.length === 0) {
		container.innerHTML = `<p class="text-danger text-center">No matching ${type}s found.</p>`;
		return;
	}

	if (type === 'program') {
		data.forEach(p => {
			const row = document.createElement("tr");
			row.innerHTML = `
		  <td>${p.name}</td>
		  <td>${p.level}</td>
		  <td>${p.university}</td>
		  <td>${p.country}</td>`;
			container.appendChild(row);
		});
	} else {
		data.forEach(course => {
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
			container.appendChild(col);
		});
	}
}

// ----- Event Bindings -----
document.getElementById("searchBtn")?.addEventListener("click", () => {
	const keyword = (document.getElementById("searchInput") as HTMLInputElement)?.value ?? '';
	const level = (document.getElementById("courseLevelSelect") as HTMLSelectElement)?.value;
	const programResults = filterPrograms(keyword, level);
	renderResults(programResults, 'program');
});

document.querySelectorAll(".dropdown-item").forEach(item => {
	item.addEventListener("click", function () {
		selectedType = this.textContent?.trim() ?? '';
		document.querySelector(".dropdown-toggle")!.textContent = selectedType;
	});
});

document.querySelector(".btn-secondary")?.addEventListener("click", () => {
	const keyword = (document.querySelector("input.form-control") as HTMLInputElement)?.value.toLowerCase().trim() ?? '';
	const courseResults = filterCourses(keyword, selectedType);
	renderResults(courseResults, 'course');
});
