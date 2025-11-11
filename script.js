document.addEventListener('DOMContentLoaded', () => {

    // --- 1. Vanta.js 3D Net Animation ---
    try {
        VANTA.NET({
            el: "#vanta-bg", // This matches the new div ID
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            scale: 1.00,
            scaleMobile: 1.00,
            color: 0xffffff,      // Line color (white)
            backgroundColor: 0x3a7bd5, // Background color (your blue)
            points: 10.00,        // Number of points
            maxDistance: 20.00,   // Max line distance
            spacing: 15.00        // Spacing of points
        });
    } catch (error) {
        console.error('Error loading Vanta.js animation. Site will continue.', error);
        // This 'catch' block ensures that even if Vanta fails,
        // the rest of the script below will still run.
    }


    // --- 2. Mobile Hamburger Menu Toggle ---
    const hamburger = document.getElementById('hamburger-menu');
    const navLinksList = document.getElementById('nav-links-list');

    hamburger.addEventListener('click', () => {
        navLinksList.classList.toggle('nav-active');
        hamburger.classList.toggle('toggle');
    });

    // Close menu when a link is clicked
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navLinksList.classList.remove('nav-active');
            hamburger.classList.remove('toggle');
        });
    });


    // --- 3. Fade-in Animation on Scroll ---
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1 // Triggers when 10% of the element is visible
    });

    // Observe all elements with the "hidden" class
    document.querySelectorAll('.hidden').forEach(el => {
        observer.observe(el);
    });

    


    // --- 4. Active Navigation Link Highlighting on Scroll ---
    const sections = document.querySelectorAll('.content-section');
    const navLinks = document.querySelectorAll('.nav-link');

    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Remove active class from all links
                navLinks.forEach(link => {
                    link.classList.remove('active-link');
                });

                // Get the ID of the current section
                const id = entry.target.getAttribute('id');
                // Find the corresponding nav link and add the active class
                const activeLink = document.querySelector(`.nav-link[href="#${id}"]`);
                if (activeLink) {
                    activeLink.classList.add('active-link');
                }
            }
        });
    }, {
        rootMargin: '-30% 0px -70% 0px', // Triggers when section is in middle 40% of viewport
        threshold: 0
    });

    sections.forEach(section => {
        sectionObserver.observe(section);
    });

});