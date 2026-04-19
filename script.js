document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll(".reveal");
    const header = document.querySelector(".site-header");

    if (!("IntersectionObserver" in window)) {
        elements.forEach((el) => el.classList.add("visible"));
    } else {
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.15,
            rootMargin: "0px 0px -10% 0px"
        });

        elements.forEach((el) => observer.observe(el));
    }

    document.querySelectorAll('a[href^="#"]').forEach((link) => {
        link.addEventListener("click", (e) => {
            const targetId = link.getAttribute("href");
            const target = document.querySelector(targetId);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: "smooth", block: "start" });
            }
        });
    });

    if (header) {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 10) {
                header.classList.add("scrolled");
            } else {
                header.classList.remove("scrolled");
            }
        });
    }
});
