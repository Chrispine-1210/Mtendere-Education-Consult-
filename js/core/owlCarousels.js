
export const initOwlCarousels = () => {
    const defaultOptions = {
        loop: true,
        margin: 30,
        autoplay: true,
        autoplayTimeout: 4000,
        nav: true,
        dots: true,
        navText: ['<span class="icon-chevron-left">', '<span class="icon-chevron-right">'],
        responsive: {
            0: { items: 1 },
            600: { items: 2 },
            1000: { items: 3 }
        }
    };

    const sliders = [
        { selector: '.owl-3-slider', options: defaultOptions },
        { selector: '.owl-4-slider', options: { ...defaultOptions, responsive: { 0: { items: 1 }, 768: { items: 2 }, 1000: { items: 4 } } } },
        { selector: '.owl-single', options: { ...defaultOptions, items: 1, nav: false } }
    ];

    sliders.forEach(({ selector, options }) => {
        if ($(selector).length) {
            $(selector).owlCarousel(options);
        }
    });
};
