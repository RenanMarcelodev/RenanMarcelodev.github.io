$(document).ready(function () {
    const navbar = $('.navbar-custom');
    const navbarHeight = navbar.outerHeight();
    const navbarOriginalColor = getComputedStyle(document.documentElement).getPropertyValue('--navbar-color');
    const navbarScrolledColor = getComputedStyle(document.documentElement).getPropertyValue('--intro-background-color');
    
    function updateNavbarColor() {
        const introSection = $('.intro-section');
        const introSectionEnd = introSection.offset().top + introSection.outerHeight();
        const scrollPosition = $(window).scrollTop();

        if (scrollPosition > (introSectionEnd - navbarHeight)) {
            navbar.css('background-color', navbarScrolledColor);
        } else {
            navbar.css('background-color', navbarOriginalColor);
        }
    }

    $("a").on('click', function (event) {
        const hash = this.hash;

        if (hash !== "") {
            event.preventDefault();
            const targetScrollTop = hash === "#intro" ? 0 : $(hash).offset().top;

            $('html, body').animate({ scrollTop: targetScrollTop }, 800, function () {
                if (hash !== "#intro") {
                    window.location.hash = hash;
                }
                updateNavbarColor();
            });
        }
    });

    $(window).scroll(updateNavbarColor);
});