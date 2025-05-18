// Initialize AOS (Animate on Scroll)
AOS.init({
    duration: 800,
    easing: 'slide',
    once: true,
});

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

// Modal Video Handling
const videoModal = document.getElementById('videoModal');
if (videoModal) {
    videoModal.addEventListener('hidden.bs.modal', () => {
        const iframe = document.getElementById('videoFrame');
        if (iframe) {
            iframe.contentWindow.postMessage('{"event":"command","func":"stopVideo","args":""}', '*');
        }
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

(() => {
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

    try {
        initializeDatePicker();
        initializeStickyHeader();
    } catch (error) {
        console.error('Initialization failed:', error);
    }

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

    $(document).ready(function () {
        $(".testimonial-carousel").owlCarousel({
            items: 1,
            loop: true,
            autoplay: true,
            autoplayTimeout: 5000, // 5 seconds
            autoplayHoverPause: true,
            dots: true,
            nav: false,
            animateOut: 'fadeOut',
            smartSpeed: 600,
            responsive: {
                0: { items: 1 },
                768: { items: 1 }
            }
        });
    });

    $(document).ready(function () {
        $('.blog-carousel').owlCarousel({
            loop: true,
            margin: 30,
            nav: false,
            dots: true,
            autoplay: true,
            autoplayTimeout: 4000,
            smartSpeed: 600,
            responsive: {
                0: { items: 1 },
                768: { items: 2 },
                992: { items: 3 }
            }
        });
    });


    // Application Form Submission Handling
    const applicationForm = document.getElementById('applicationForm');
    if (applicationForm) {
        applicationForm.addEventListener('submit', (e) => {
            e.preventDefault();
            showToast('Your application has been submitted successfully!');
            applicationForm.reset();
            const applicationModal = document.getElementById('formModal');
            if (applicationModal) applicationModal.style.display = 'none';
        });
    }
})();

//Counter
var deadline = new Date("july 25 2022 12:37:25").getTime();
//console.log(deadline)
var x = setInterval(function () {
    var now = new Date().getTime();
    var t = deadline - now;
    //console.log(t)

    var days = Math.floor(t / (1000 * 60 * 60 * 24));
    var Hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var Minute = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));

    var Seconds = Math.floor((t % (1000 * 60)) / 1000);
    document.getElementById("counter").innerHTML = days + "d-" + Hours + "h-" + Minute + "M-" + Seconds + "s";

    //
    document.getElementById("counter1").innerHTML = days + "d-" + Hours + "h-" + Minute + "M-" + Seconds + "s";


    if (t < 0) {
        clearInterval(x);
        document.getElementById("counter").innerHTML = "EXPIRED"
    }

    if (t < 0) {
        clearInterval(x);
        document.getElementById("counter1").innerHTML = "EXPIRED"
    }



})

const showToast = (message) => {
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 3000);
};

showToast('Your application has been submitted successfully!');

document.querySelectorAll('[data-modal]').forEach((trigger) => {
    const modalId = trigger.getAttribute('data-modal');
    const modal = document.getElementById(modalId);
    if (modal) {
        trigger.addEventListener('click', () => {
            modal.style.display = 'block';
        });
        modal.querySelector('.btn-close')?.addEventListener('click', () => {
            modal.style.display = 'none';
        });
    }
});