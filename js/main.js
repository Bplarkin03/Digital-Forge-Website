// Particle System Class
// Star Field Generator
const generateStars = (n) => {
    let value = '';
    for (let i = 0; i < n; i++) {
        const x = Math.floor(Math.random() * 2000);
        const y = Math.floor(Math.random() * 2000);
        value += `${x}px ${y}px #FFF, `;
    }
    return value.slice(0, -2); // Remove trailing comma
};

// Main Initialization
console.log("Digital Forge engine initialized...");

document.addEventListener('DOMContentLoaded', () => {
    // Initialize Star Shadows
    const starsSmall = document.getElementById('stars');
    const starsMedium = document.getElementById('stars2');
    const starsBig = document.getElementById('stars3');

    if (starsSmall) starsSmall.style.boxShadow = generateStars(700);
    if (starsMedium) starsMedium.style.boxShadow = generateStars(200);
    if (starsBig) starsBig.style.boxShadow = generateStars(100);

    // Add grid overlay dynamically
    const grid = document.createElement('div');
    grid.className = 'grid-overlay';
    document.body.prepend(grid);

    // Button Mouse Tracking for Border Light Effect
    document.querySelectorAll('button').forEach(btn => {
        btn.addEventListener('mousemove', (e) => {
            const rect = btn.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            btn.style.setProperty('--x', `${x}px`);
            btn.style.setProperty('--y', `${y}px`);
        });
    });

    // Scroll Reveal Observer
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Select elements to reveal
    // We target generic classes so new sections are automatically picked up if they use these classes
    const revealElements = document.querySelectorAll('.hero-title, .hero-subtitle, .hero-cta-group, .section-header, .card, .cta-content, .journey-step');
    revealElements.forEach(el => {
        el.classList.add('reveal-on-scroll');
        observer.observe(el);
    });
});
