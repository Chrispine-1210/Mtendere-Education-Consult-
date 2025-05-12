// Initialize AOS (Animate on Scroll)
AOS.init({
    duration: 800,
    easing: 'slide',
    once: true,
});

// Owl Carousel Initialization
const initializeOwlCarousel = () => {
    const owl3Slider = $('.owl-3-slider');
    if (owl3Slider.length > 0) {
        owl3Slider.owlCarousel({
            loop: true,
            autoHeight: true,
            margin: 40,
            autoplay: true,
            smartSpeed: 700,
            items: 4,
            nav: true,
            dots: true,
            navText: ['<span class="icon-keyboard_backspace"></span>', '<span class="icon-keyboard_backspace"></span>'],
            responsive: {
                0: { items: 1 },
                600: { items: 1 },
                800: { items: 2 },
                1000: { items: 2 },
                1100: { items: 3 },
            },
        });

        $('.js-custom-next-v2').on('click', (e) => {
            e.preventDefault();
            owl3Slider.trigger('next.owl.carousel');
        });

        $('.js-custom-prev-v2').on('click', (e) => {
            e.preventDefault();
            owl3Slider.trigger('prev.owl.carousel');
        });
    }

    const owl4Slider = $('.owl-4-slider');
    if (owl4Slider.length > 0) {
        owl4Slider.owlCarousel({
            loop: true,
            autoHeight: true,
            margin: 10,
            autoplay: true,
            smartSpeed: 700,
            items: 4,
            dots: true,
            responsive: {
                0: { items: 1 },
                600: { items: 2 },
                800: { items: 2 },
                1000: { items: 3 },
                1100: { items: 4 },
            },
        });
    }
};
initializeOwlCarousel();

// Back to Top Button
const backToTopButton = document.getElementById('backToTop');
if (backToTopButton) {
    window.addEventListener('scroll', () => {
        backToTopButton.style.display = window.scrollY > 200 ? 'block' : 'none';
    });

    backToTopButton.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// Form Submission Handling
const applicationForm = document.getElementById('applicationForm');
if (applicationForm) {
    applicationForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Your application has been submitted!');
        applicationForm.reset();
    });
}

// Modal Video Handling
const videoModal = document.getElementById('videoModal');
if (videoModal) {
    videoModal.addEventListener('hidden.bs.modal', () => {
        const iframe = document.getElementById('videoFrame');
        if (iframe) iframe.src = iframe.src; // Reset video
    });
}

// Accordion Functionality
const accordions = document.querySelectorAll('.accordion');
accordions.forEach((accordion) => {
    accordion.addEventListener('click', function () {
        this.classList.toggle('active');
        const panel = this.nextElementSibling;
        if (panel) {
            panel.style.maxHeight = panel.style.maxHeight ? null : `${panel.scrollHeight}px`;
        }
    });
});

// Sticky Header
const siteNav = document.querySelector('.site-nav');
if (siteNav) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            siteNav.classList.add('shrink');
        } else {
            siteNav.classList.remove('shrink');
        }
    });
}

// Success Modal
const successModal = document.getElementById('successModal');
const closeSuccessBtn = document.querySelector('.close-success-button');
const applyBtn = document.getElementById('applyBtn');

if (successModal && closeSuccessBtn && applyBtn) {
    applyBtn.addEventListener('click', () => {
        successModal.style.display = 'block';
    });

    closeSuccessBtn.addEventListener('click', () => {
        successModal.style.display = 'none';
    });

    successModal.addEventListener('click', (event) => {
        if (event.target === successModal) {
            successModal.style.display = 'none';
        }
    });
}

// Dropdown Selection Handling
const dropdownItems = document.querySelectorAll('.dropdown-item');
dropdownItems.forEach((item) => {
    item.addEventListener('click', function () {
        const selectedType = this.textContent.trim();
        const dropdownToggle = document.querySelector('.dropdown-toggle');
        if (dropdownToggle) dropdownToggle.textContent = selectedType;
    });
});

// Popup Handling
const togglePopup = (register = false) => {
    const popup = document.getElementById('popupContainer');
    const card = document.getElementById('flipCard');
    if (popup && card) {
        popup.style.display = 'flex';
        card.classList.toggle('flipped', register);
    }
};

const closePopup = () => {
    const popup = document.getElementById('popupContainer');
    if (popup) popup.style.display = 'none';
};

// Slideshow Functionality
const galleryItems = document.querySelectorAll('.gallery-item');
const toggleButton = document.getElementById('toggleGallery');
let galleryInterval;
let slideIndex = 0;

const startSlideshow = () => {
    galleryInterval = setInterval(() => {
        galleryItems.forEach((item) => item.classList.remove('active'));
        slideIndex = (slideIndex + 1) % galleryItems.length;
        galleryItems[slideIndex].classList.add('active');
    }, 5000);
};

const stopSlideshow = () => {
    clearInterval(galleryInterval);
};

if (toggleButton) {
    toggleButton.addEventListener('click', () => {
        if (galleryInterval) {
            stopSlideshow();
            toggleButton.textContent = 'Resume Slideshow';
        } else {
            startSlideshow();
            toggleButton.textContent = 'Pause Slideshow';
        }
    });
}

// Date Picker Initialization
const initializeDatePicker = () => {
    if ($('.datepicker').length > 0) {
        $('.datepicker').datepicker();
    }
};
initializeDatePicker();

// Sticky Header Initialization
const initializeStickyHeader = () => {
    if ($('.js-sticky-header').length > 0) {
        $('.js-sticky-header').sticky({ topSpacing: 0 });
    }
};
initializeStickyHeader();

// Utility Function to Initialize Modals
const initializeModal = (modalId, triggerSelector, closeSelector) => {
    const modal = document.getElementById(modalId);
    const triggers = document.querySelectorAll(triggerSelector);
    const closeButton = modal?.querySelector(closeSelector);

    if (modal) {
        // Open Modal
        triggers.forEach((trigger) => {
            trigger.addEventListener('click', (e) => {
                e.preventDefault();
                modal.style.display = 'block';
            });
        });

        // Close Modal
        closeButton?.addEventListener('click', () => {
            modal.style.display = 'none';
        });

        // Close Modal on Outside Click
        window.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.style.display = 'none';
            }
        });
    }
};

// Initialize Student Modals
initializeModal('story3', '.read-story-btn[data-bs-target="#story3"]', '.btn-close');
initializeModal('story4', '.read-story-btn[data-bs-target="#story4"]', '.btn-close');

// Initialize FAQ Modal
initializeModal('faqModal', 'a[href="#faqModal"]', '.close-btn');

// Initialize Application Modal
initializeModal('formModal', '.application-modal-trigger', '#closeFormBtn');

// FAQ Accordion Functionality
const faqAccordions = document.querySelectorAll('.accordion');
faqAccordions.forEach((accordion) => {
    accordion.addEventListener('click', function () {
        this.classList.toggle('active');
        const panel = this.nextElementSibling;
        if (panel) {
            panel.style.maxHeight = panel.style.maxHeight ? null : `${panel.scrollHeight}px`;
        }
    });
});

// Application Form Submission Handling
const applicationForm = document.getElementById('applicationForm');
if (applicationForm) {
    applicationForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Your application has been submitted successfully!');
        applicationForm.reset();
        const applicationModal = document.getElementById('formModal');
        if (applicationModal) applicationModal.style.display = 'none';
    });
}