document.addEventListener('DOMContentLoaded', () => {
    const heroContent = document.querySelector('.hero-content');
    const features = document.querySelectorAll('.feature');
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.querySelector('.nav-menu');

    // Animate hero content on page load
    setTimeout(() => {
        heroContent.classList.add('visible');
    }, 500);

    // Animate features on scroll
    const animateFeatures = () => {
        const windowHeight = window.innerHeight;
        features.forEach(feature => {
            const featureTop = feature.getBoundingClientRect().top;
            if (featureTop < windowHeight * 0.8) {
                feature.classList.add('visible');
            }
        });
    };

    window.addEventListener('scroll', animateFeatures);
    animateFeatures(); // Initial check

    // Navbar toggle functionality
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    // // Form submission (optional)
    // document.querySelector('.contact-form').addEventListener('submit', function (event) {
    //     event.preventDefault();
    //     alert('Form submitted! We will get back to you soon.');
    //     // You can add more logic here to handle the form submission, such as sending the data to a server.
    // });
});
