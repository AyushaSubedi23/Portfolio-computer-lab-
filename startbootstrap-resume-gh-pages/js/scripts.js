// Wait until the DOM is fully loaded
window.addEventListener('DOMContentLoaded', event => {

    // Activate Bootstrap scrollspy on the main nav element
    const sideNav = document.body.querySelector('#sideNav');
    if (sideNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#sideNav',
            rootMargin: '0px 0px -40%'
        });
    }

    // Collapse responsive navbar when toggler is visible and a link is clicked
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveItems.map(function (responsiveItem) {
        responsiveItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});