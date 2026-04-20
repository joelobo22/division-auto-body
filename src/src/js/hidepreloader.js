/**
 * @file src/js/hidepreloader.js
 * @description Handles the smooth transition from the loading screen to Division Auto Body site.
 */

const preloader = document.getElementById("loader-wrapper");

/**
 * Ensures the preloader is removed and the page is visible.
 * We use a combination of a class toggle for CSS animations 
 * and a hard 'display: none' to ensure it's gone from the layout.
 */
function hidePreloader() {
  if (preloader) {
    preloader.classList.add("hide-preloader");
    
    // Completely remove from view after the fade animation
    setTimeout(() => {
      preloader.hidden = true;
      preloader.style.display = "none";
    }, 500); // 500ms matches standard CSS fade-out timing
  }
}

// 1. Force hide after a 2-second safety timeout (standard)
setTimeout(hidePreloader, 2000);

// 2. Hide immediately when the window finish loading everything (images/fonts)
window.addEventListener('load', hidePreloader);
