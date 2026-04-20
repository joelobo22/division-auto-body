/**
 * @file glide.js
 * @description Configures Glide.js carousels for Division Auto Body.
 */

import "@glidejs/glide/dist/css/glide.core.min.css";
import "@glidejs/glide/dist/css/glide.theme.min.css";
import Glide from "@glidejs/glide";

// 1. DEALS CAROUSEL (Special Offers)
new Glide(".glide-deals", {
  type: "carousel",
  perView: 3,
  gap: 20,
  peek: 40,
  autoplay: 4000,
  hoverpause: true,
  breakpoints: {
    992: { perView: 2 },
    768: { perView: 1 }
  }
}).mount();

// 2. SERVICES CAROUSEL (Body Work, Paint, etc.)
new Glide(".glide-services", {
  type: "slider", // Slider is often better for services to show a clear start/end
  perView: 3,
  gap: 30,
  breakpoints: {
    992: { perView: 2 },
    768: { perView: 1 }
  }
}).mount();

// 3. REVIEWS CAROUSEL (Customer Testimonials)
new Glide(".glide-reviews", {
  type: "carousel",
  perView: 3,
  gap: 20,
  autoplay: 5000,
  animationDuration: 600,
  breakpoints: {
    992: { perView: 2 },
    768: { perView: 1 }
  }
}).mount();
