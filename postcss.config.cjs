const IN_PRODUCTION = process.env.NODE_ENV === "production";
const bootstrap = "node_modules/bootstrap";

module.exports = {
  plugins: [
    // 1. PurgeCSS: Removes unused CSS in Production
    IN_PRODUCTION &&
      require("@fullhuman/postcss-purgecss")({
        content: [
          "index.html",
          "./src/**/*.js",
          "./src/**/*.html",
          // Include Bootstrap JS components to ensure their specific classes aren't deleted
          `${bootstrap}/js/dist/alert.js`,
          `${bootstrap}/js/dist/button.js`,
          `${bootstrap}/js/dist/collapse.js`,
          `${bootstrap}/js/dist/dropdown.js`,
          `${bootstrap}/js/dist/modal.js`,
          `${bootstrap}/js/dist/offcanvas.js`,
          `${bootstrap}/js/dist/tab.js`,
        ],
        // Safelist protects specific classes and variables from being removed
        safelist: {
          standard: [/modal-/, /show/, /fade/, /collapse/, /collapsing/],
          deep: [/data-bs-/],
          greedy: [/var/, /--bs-/]
        },
        defaultExtractor(content) {
          // Removes style blocks before scanning to avoid matching internal CSS logic
          const contentWithoutStyleBlocks = content.replace(/<style[^]+?<\/style>/gi, "");
          return (
            contentWithoutStyleBlocks.match(/[A-Za-z0-9-_/:]*[A-Za-z0-9-_/]+/g) || []
          );
        },
        keyframes: true, // Removes unused @keyframes animations
        variables: true, // Enables variable purging (protected by the greedy safelist above)
      }),

    // 2. Autoprefixer: Handles browser "auto-specs" (vendor prefixes)
    // Runs in both Dev and Production to ensure layout consistency across browsers
    require("autoprefixer"),

    // 3. CSSNano: Minifies the CSS and removes comments in Production
    IN_PRODUCTION &&
      require("cssnano")({
        preset: [
          "default",
          {
            discardComments: {
              removeAll: true,
            },
          },
        ],
      }),
  ].filter(Boolean), // This line removes the "false" values from the array when not in production
};
