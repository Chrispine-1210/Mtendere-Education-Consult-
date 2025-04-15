
export const initMobileMenu = () => {
    const $menu = $('.js-clone-nav').clone().attr('class', 'site-nav-wrap');
    $('#site-mobile-menu-body').append($menu);

    let counter = 0;

    setTimeout(() => {
        $('.has-children').each(function () {
            const $this = $(this);
            $this.prepend(`<span class="arrow-collapse collapsed" data-toggle="collapse" data-target="#collapseItem${counter}"></span>`);
            $this.find('> ul').attr({
                class: 'collapse',
                id: `collapseItem${counter++}`
            });
        });
    }, 1000);

    $(document).on('click', '.arrow-collapse', function (e) {
        const $this = $(this);
        if ($this.closest('li').find('.collapse').hasClass('show')) {
            $this.removeClass('active');
        } else {
            $this.addClass('active');
        }
        e.preventDefault();
    });

    $(window).resize(() => {
        if ($(window).width() > 768) {
            if ($('body').hasClass('offcanvas-menu')) {
                $('body').removeClass('offcanvas-menu');
            }
        }
    });

    $('.js-menu-toggle').on('click', function (e) {
        e.preventDefault();
        $('body').toggleClass('offcanvas-menu');
        $(this).toggleClass('active');
    });
};
