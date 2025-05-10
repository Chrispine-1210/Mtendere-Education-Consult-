AOS.init({
	duration: 800,
	easing: 'slide',
	once: true
});
document.addEventListener('DOMContentLoaded', function() {
  // Mobile menu toggle
  const burger = document.querySelector('.burger');
  const mobileMenu = document.querySelector('.site-mobile-menu');
  const overlay = document.createElement('div');
  overlay.className = 'mobile-menu-overlay';
  document.body.appendChild(overlay);
  
  burger.addEventListener('click', function() {
    this.classList.toggle('active');
    mobileMenu.classList.toggle('active');
    overlay.classList.toggle('active');
    document.body.classList.toggle('no-scroll');
  });
  
  // Close mobile menu when clicking overlay or close button
  overlay.addEventListener('click', closeMobileMenu);
  document.querySelector('.site-mobile-menu-close').addEventListener('click', closeMobileMenu);
  
  function closeMobileMenu() {
    burger.classList.remove('active');
    mobileMenu.classList.remove('active');
    overlay.classList.remove('active');
    document.body.classList.remove('no-scroll');
  }
  
  // Loading spinner simulation
  const loadingSpinner = document.getElementById('loadingSpinner');
  loadingSpinner.classList.add('active');
  setTimeout(() => {
    loadingSpinner.classList.remove('active');
  }, 1500);
  
  // Add shadow to navbar on scroll
  window.addEventListener('scroll', function() {
    const nav = document.querySelector('.site-nav');
    if (window.scrollY > 10) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  });
});

// Add touch support
burger.addEventListener('touchstart', function(e) {
    e.preventDefault();
    this.click();
});

document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    const burger = document.querySelector('.burger');
    const mobileMenu = document.querySelector('.site-mobile-menu');
    const overlay = document.querySelector('.mobile-menu-overlay');
    
    burger.addEventListener('click', function(e) {
        e.preventDefault();
        this.classList.toggle('active');
        mobileMenu.classList.toggle('active');
        overlay.classList.toggle('active');
        document.body.classList.toggle('no-scroll');
    });

    // Close Menu Handlers
    overlay.addEventListener('click', closeMobileMenu);
    document.querySelector('.site-mobile-menu-close').addEventListener('click', closeMobileMenu);

    function closeMobileMenu() {
        burger.classList.remove('active');
        mobileMenu.classList.remove('active');
        overlay.classList.remove('active');
        document.body.classList.remove('no-scroll');
    }

    // Handle Mobile Menu Links
    document.querySelectorAll('.mobile-menu-list a').forEach(link => {
        link.addEventListener('click', closeMobileMenu);
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
	// Add more universities and programs
];

function filterPrograms(keyword, level) {
	const results = [];

	universityDatabase.forEach(univ => {
		univ.programs.forEach(program => {
			const nameMatch = program.name.toLowerCase().includes(keyword.toLowerCase());
			const levelMatch = level ? program.level === level : true;

			if (nameMatch && levelMatch) {
				results.push({
					university: univ.university,
					program: program.name,
					level: program.level,
					country: program.country
				});
			}
		});
	});

	return results;
};

function displayResults(results) {
	const container = document.getElementById('searchResults');
	container.innerHTML = '';

	if (results.length === 0) {
		container.innerHTML = '<p class="text-danger">No matching programs found.</p>';
		return;
	}

	results.forEach(res => {
		const card = document.createElement('div');
		card.className = 'mb-3 p-3 bg-white border rounded';
		card.innerHTML = `
			<h5>${res.program} (${res.level})</h5>
			<p><strong>University:</strong> ${res.university}<br>
			<strong>Country:</strong> ${res.country}</p>`
			;
		container.appendChild(card);
	});
}

document.getElementById('searchBtn').addEventListener('click', () => {
	const keyword = document.getElementById('searchInput').value;
	const level = document.getElementById('courseLevelSelect').value;
	const results = filterPrograms(keyword, level);
	displayResults(results);
});

const courseData = [
	{ title: "Bachelor of Science in Engineering", type: "Undergraduate Degree", university: "Chandigarh University" },
	{ title: "Master of Business Administration", type: "Masters Degree", university: "Parul University" },
	{ title: "PhD in Biotechnology", type: "PhD Degree", university: "Shoolini University" },
	{ title: "Doctor of Philosophy in Education", type: "Doctoral Degree", university: "Jain University" },
	{ title: "Postgraduate Diploma in Computer Science", type: "Post-graduate Degree", university: "CT University" },
	{ title: "Master of Science in Data Analytics", type: "Masters Degree", university: "Parul University" },
];

let selectedType = "";

// Handle dropdown type selection
document.querySelectorAll(".dropdown-item").forEach(item => {
	item.addEventListener("click", function () {
		selectedType = this.textContent.trim();
		document.querySelector(".dropdown-toggle").textContent = selectedType;
	});
});

// Handle Search
document.querySelector(".btn-secondary").addEventListener("click", function () {
	const keyword = document.querySelector("input.form-control").value.toLowerCase().trim();
	const resultsContainer = document.getElementById("resultsContainer");
	resultsContainer.innerHTML = ""; // Clear old results

	// Filter data
	const filtered = courseData.filter(course =>
		course.type === selectedType &&
		course.title.toLowerCase().includes(keyword)
	);

	if (filtered.length === 0) {
		resultsContainer.innerHTML = `<p class="text-center">No matching results found.</p>`;
		return;
	}
}); // End of Search functionality

// Display filtered results
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

const courseList = [
	{ name: "Bachelor of Computer Science", level: "Undergraduate Degree", university: "Chandigarh University" },
	{ name: "MBA in Finance", level: "Post-graduate Degree", university: "Parul University" },
	{ name: "MSc in Data Science", level: "Masters Degree", university: "CT University" },
	{ name: "PhD in Robotics", level: "PhD Degree", university: "Jain University" }
];

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

// Function for like animation
const animateLike = (item) => {
  const likeAnim = item.querySelector('.like-animation');
  anime({
    targets: likeAnim,
    scale: [1, 1.5],
    opacity: [0, 1],
    easing: 'easeInOutQuad',
    duration: 600,
    complete: () => {
      setTimeout(() => {
        anime({
          targets: likeAnim,
          scale: [1.5, 1],
          opacity: [1, 0],
          easing: 'easeInOutQuad',
          duration: 600
        });
      }, 1000);
    }
  });
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

// Mobile Navigation Menu Toggle
document.addEventListener('DOMContentLoaded', function () {
	const burger = document.querySelector('.burger');
	const menu = document.querySelector('.site-menu');
  
	burger.addEventListener('click', function () {
	  menu.classList.toggle('active');
	  burger.classList.toggle('is-active');
	});
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

// Create Event Card Function
function createEventCard(event) {
    let mediaContent = '';

    if (event.type === 'video') {
        mediaContent = `
            <video class="img-fluid rounded-top" autoplay muted loop>
                <source src="${event.media}" type="video/mp4">
            </video>`;
    } else if (event.type === 'image') {
        mediaContent = `
            <img src="${event.media}" class="img-fluid rounded-top" alt="${event.title}">`;
    }

    return `
    <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
        <div class="card event-card shadow border-0">
            <div class="event-media">
                ${mediaContent}
            </div>
            <div class="card-body">
                <h5 class="card-title">${event.title}</h5>
                <p class="card-text">${event.description}</p>
                <ul class="list-unstyled mb-3">
                    <li><i class="fa fa-user text-primary me-2"></i>${event.speaker}</li>
                    <li><i class="fa fa-map-marker-alt text-primary me-2"></i>${event.location}</li>
                    <li><i class="fa fa-calendar-alt text-primary me-2"></i>${new Date(event.date).toDateString()}</li>
                </ul>
                <div class="d-flex justify-content-between">
                    <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#attendModal">Attend</button>
                    <button class="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#detailsModal">View More</button>
                </div>
            </div>
        </div>
    </div>`;
}

// Inject Events into Respective Sections
function displayEvents() {
    const upcomingContainer = document.getElementById('upcomingEvents');
    const pastContainer = document.getElementById('pastEvents');
    const allContainer = document.getElementById('allEvents');

    events.forEach(event => {
        const eventDate = new Date(event.date);
        const cardHTML = createEventCard(event);

        // Upcoming
        if (eventDate >= today) {
            upcomingContainer.innerHTML += cardHTML;
        }

        // Past
        if (eventDate < today) {
            pastContainer.innerHTML += cardHTML;
        }

        // All
        allContainer.innerHTML += cardHTML;
    });
}

// Call the function on page load
document.addEventListener('DOMContentLoaded', displayEvents);
  
  // Close success modal
  closeSuccessBtn.addEventListener('click', function() {
	  successModal.style.display = 'none';
  });
  

// Like button functionality
document.querySelectorAll('.btn-like').forEach(button => {
  button.addEventListener('click', (event) => {
    const likeStatus = event.target.closest('.gallery-item').querySelector('.like-status');
    const currentLikes = parseInt(likeStatus.querySelector('span').textContent.split(' ')[1]);
    likeStatus.querySelector('span').textContent = `👍 ${currentLikes + 1} Likes`;
    animateLike(event.target.closest('.gallery-item'));
  });
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


// Animate Hero Text on Load
window.addEventListener('load', function () {
	const hero = document.querySelector('.hero-slide');
	hero.classList.add('show');
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

document.querySelectorAll('.filter-btn').forEach(btn => {
	btn.addEventListener('click', () => {
		document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
		btn.classList.add('active');
		const filter = btn.getAttribute('data-filter');

		document.querySelectorAll('.category-card').forEach(card => {
			if (filter === 'all' || card.getAttribute('data-category') === filter) {
				card.style.display = 'block';
			} else {
				card.style.display = 'none';
			}
		});
	});
});

