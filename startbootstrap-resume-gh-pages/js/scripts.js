/*!
* Start Bootstrap - Resume v7.0.6 (https://startbootstrap.com/theme/resume)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Activate Bootstrap scrollspy on the main nav element
    const sideNav = document.body.querySelector('#sideNav');
    if (sideNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#sideNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});
<script>
            // Your existing Typed.js script stays here...
            new Typed("#typing", {
                strings: [
                    "Software Engineering Student 💻",
                    "Web Developer 🌐",
                    "Photographer 📸",
                    "AI Enthusiast 🤖",
                    "Creative Problem Solver 🚀"
                ],
                typeSpeed: 60,
                backSpeed: 40,
                backDelay: 1500,
                loop: true
            });

            // ELITE ADDITION: Dark Mode Toggle Logic
            const themeToggle = document.getElementById('darkModeToggle');
            
            themeToggle.addEventListener('change', () => {
                if (themeToggle.checked) {
                    // Bootstrap 5.3 dynamic attribute rule
                    document.documentElement.setAttribute('data-bs-theme', 'dark');
                } else {
                    document.documentElement.setAttribute('data-bs-theme', 'light');
                }
            });
        </script>
