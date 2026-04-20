import Glide from '@glidejs/glide';
import '@fontsource-variable/inter';
import '@fontsource-variable/montserrat';

// --- 1. Business Hours Logic (Division Autobody) ---
const checkStoreStatus = () => {
    const statusElement = document.getElementById('storestatus');
    if (!statusElement) return;

    const now = new Date();
    const day = now.getDay(); // 0 = Sunday, 1 = Monday...
    const hour = now.getHours();

    // Division Autobody Hours: Mon-Fri (9 AM - 5 PM)
    const isOpenDay = day >= 1 && day <= 5;
    const isOpenHour = hour >= 9 && hour < 17;

    if (isOpenDay && isOpenHour) {
        statusElement.innerHTML = '<span class="badge bg-success">Open Now</span> until 5:00 PM';
    } else {
        statusElement.innerHTML = '<span class="badge bg-danger">Closed Now</span> - Opens at 9:00 AM';
    }
};

// --- 2. Glide.js Slider Initializations ---
const initSliders = () => {
    // Reviews/Testimonials Slider
    if (document.querySelector('.glide-reviews')) {
        new Glide('.glide-reviews', {
            type: 'carousel',
            perView: 3,
            gap: 20,
            breakpoints: {
                1024: { perView: 2 },
                768: { perView: 1 }
            }
        }).mount();
    }

    // Service Slides
    if (document.querySelector('.glide-services')) {
        new Glide('.glide-services', {
            type: 'slider',
            perView: 4,
            gap: 15,
            breakpoints: {
                1200: { perView: 3 },
                992: { perView: 2 },
                576: { perView: 1 }
            }
        }).mount();
    }
};

// --- 3. Mobile Menu Toggle ---
const initMenu = () => {
    const toggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('.nav-primary');

    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            const expanded = toggle.getAttribute('aria-expanded') === 'true';
            toggle.setAttribute('aria-expanded', !expanded);
            nav.classList.toggle('is-open');
        });
    }
};

// --- 4. Load Everything ---
document.addEventListener('DOMContentLoaded', () => {
    checkStoreStatus();
    initSliders();
    initMenu();

    // Update Footer Year
    const yearSpan = document.getElementById('year');
    if (yearSpan) yearSpan.textContent = new Date().getFullYear();
    
    // Hide Preloader
    const loader = document.getElementById('loader-wrapper');
    if (loader) {
        setTimeout(() => {
            loader.style.opacity = '0';
            setTimeout(() => loader.remove(), 500);
        }, 1000);
    }
});
