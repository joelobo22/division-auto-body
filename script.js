const $ = (s) => document.querySelector(s);

// Header style on scroll
const header = $("#header");
const onScroll = () => header.classList.toggle("scrolled", window.scrollY > 30);
onScroll();
window.addEventListener("scroll", onScroll, { passive: true });

// Mobile menu
const burger = $("#burger");
const menu = $("#menu");
const setMenu = (open) => {
  menu.classList.toggle("open", open);
  burger.setAttribute("aria-expanded", String(open));
};
burger.addEventListener("click", () => setMenu(!menu.classList.contains("open")));
menu.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => setMenu(false)));

// Open / closed status (uses the shop's own time zone, New Jersey)
const showStatus = () => {
  const now = new Date(new Date().toLocaleString("en-US", { timeZone: "America/New_York" }));
  const day = now.getDay();
  const hour = now.getHours();
  const open = day >= 1 && day <= 5 && hour >= 9 && hour < 17;
  $("#status").innerHTML = open
    ? '<span class="dot open"></span>Open now · until 5:00 PM'
    : '<span class="dot"></span>Closed now · opens Mon-Fri at 9:00 AM';
};
showStatus();

// Scroll reveal
const io = new IntersectionObserver(
  (entries) => entries.forEach((e) => {
    if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
  }),
  { threshold: 0.12 }
);
document.querySelectorAll(".reveal").forEach((el) => io.observe(el));

// Animated counters
const counters = new IntersectionObserver((entries) => {
  entries.forEach((e) => {
    if (!e.isIntersecting) return;
    const el = e.target;
    const to = +el.dataset.to;
    const t0 = performance.now();
    const tick = (t) => {
      const p = Math.min((t - t0) / 1600, 1);
      el.textContent = Math.floor(to * (1 - Math.pow(1 - p, 3))).toLocaleString();
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
    counters.unobserve(el);
  });
}, { threshold: 0.6 });
document.querySelectorAll(".count").forEach((c) => counters.observe(c));

// Contact form: opens the visitor's email app
$("#form").addEventListener("submit", (e) => {
  e.preventDefault();
  const name = $("#f-name").value.trim();
  const email = $("#f-email").value.trim();
  const msg = $("#f-msg").value.trim();
  const subject = encodeURIComponent("Website enquiry from " + name);
  const body = encodeURIComponent("Name: " + name + "\nEmail: " + email + "\n\n" + msg);
  window.location.href = "mailto:EMAIL@YOURDOMAIN.COM?subject=" + subject + "&body=" + body;
  $("#form-note").textContent = "Thank you. Your email app will open so you can send this message.";
});

// Footer year
$("#year").textContent = new Date().getFullYear();
