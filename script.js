document.addEventListener('DOMContentLoaded', () => {
    console.log("script.js loaded successfully!");

    // CTA Button Scroll Interaction
    const startBtn = document.getElementById('start-project-btn');
    if (startBtn) {
        startBtn.addEventListener('click', () => {
            const sitemapSection = document.getElementById('sitemap');
            if (sitemapSection) {
                sitemapSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }

    // Scroll active link highlight
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= (sectionTop - 120)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').substring(1) === current) {
                link.classList.add('active');
            }
        });
    });
});
