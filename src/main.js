// FONTS - Using Montserrat for that aggressive, bold "Car Club" look
import '@fontsource-variable/montserrat'; 
import '@fontsource-variable/inter';

// STYLES - This connects your Red/Black/White theme
import "./scss/style.scss"

// ICONS - For phone icons and social media
import "boxicons/css/boxicons.css"

// SECTION LOGIC - Bottom to Top
// We are importing the scripts that make each part of your site work
import "./js/footer.js"      // The bottom
import "./js/contact.js"     // Contact & Map
import "./js/testimonials.js"// Customer reviews
import "./js/aboutus.js"      // "The Foundation" (You)
import "./js/whyus.js"        // Why Division Auto Body?
import "./js/deals.js"        // Services & Specials
import "./js/header.js"       // The top navigation

// UTILITIES
import "./js/hidepreloader.js"
import "./js/glide.js"

console.log("Division Auto Body Inc. - Site Loaded Successfully");
