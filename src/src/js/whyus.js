/**
 * @file src/js/whyus.js
 * @description Setup Counter Boxes and Reasons for Division Auto Body.
 */

// 1. STATS COUNTER DATA (The "Division" Track Record)
const counterBoxesData = [
  {
    id: "years-counter",
    number: 47, // Since 1977
    text: "Years of Excellence",
  },
  {
    id: "collision-counter",
    number: 15000,
    text: "Collision Repairs",
  },
  {
    id: "satisfied-counter",
    number: 12000,
    text: "Satisfied Clients",
  },
  {
    id: "restoration-counter",
    number: 500,
    text: "Custom Restorations",
  },
];

const counterBoxesHtml = counterBoxesData.map((cb) => {
  return `
    <div id="${cb.id}" class="counter-widget col-6 col-lg-3 mb-4">
      <div class="p-4 bg-dark border-start border-primary border-4 h-100 d-flex flex-column justify-content-center">
        <div class="counter-container">
          <div class="counter-head fs-2 fw-black text-white">
            <span class="counter-number">${cb.number}</span>+
          </div>
        </div>
        <div class="text-uppercase fw-bold text-secondary" style="font-size: 0.8rem; letter-spacing: 1px;">${cb.text}</div>
      </div>
    </div>`;
});

const counterBoxesElement = document.getElementById("counter-boxes");
if (counterBoxesElement) counterBoxesElement.innerHTML = counterBoxesHtml.join("");

// 2. ANIMATE COUNTERS LOGIC
function countWhenVisible(element, targetCount, speed) {
  let hasCounted = false;
  let observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting && !hasCounted) {
      hasCounted = true;
      let startTime = performance.now();
      let interval = setInterval(() => {
        let elapsedTime = performance.now() - startTime;
        let progress = elapsedTime / speed;
        if (progress >= 1) {
          clearInterval(interval);
          element.innerHTML = targetCount.toLocaleString();
        } else {
          element.innerHTML = Math.floor(progress * targetCount).toLocaleString();
        }
      }, 20);
    }
  });
  if (element) observer.observe(element);
}

document.querySelectorAll('.counter-number').forEach(span => {
  const target = parseInt(span.innerText);
  countWhenVisible(span, target, 1500);
});

// 3. WHY CHOOSE DIVISION DATA
const reasonBoxesData = [
  {
    title: `Established 1977`,
    body: `With nearly five decades of experience in Keyport, we aren't just a shop—we're a community staple. Our longevity is proof of our commitment to quality.`,
  },
  {
    title: `Precision Color Matching`,
    body: `We use state-of-the-art paint technology to ensure a seamless match for your vehicle. Whether it's a minor scratch or a full restoration, the finish is always flawless.`,
  },
  {
    title: `Expert Collision Repair`,
    body: `Our certified technicians specialize in bringing vehicles back to factory safety standards using high-performance diagnostic tools and structural equipment.`,
  },
  {
    title: `Insurance Specialists`,
    body: `We take the stress out of the process. We work directly with all major insurance carriers to handle your claim efficiently from start to finish.`,
  },
  {
    title: `Restoration Masters`,
    body: `Beyond daily drivers, we have a passion for classic cars. Our restoration work is handled with the same precision that has defined us for 45+ years.`,
  },
  {
    title: `Quality Guaranteed`,
    body: `At Division Auto Body, we don't cut corners. Every vehicle undergoes a rigorous multi-point inspection before it leaves our shop.`,
  },
];

const reasonBoxesHtml = reasonBoxesData.map((rs) => {
  return `
    <div class="col-lg-4 col-md-6 col-12 mb-4">
      <div class="card bg-dark border-secondary h-100 shadow-sm">
        <div class="card-body p-4">
          <h4 class="fs-5 text-primary fw-bold text-uppercase mb-3">${rs.title}</h4>
          <p class="text-light" style="font-size: 0.9rem; line-height: 1.6;">${rs.body}</p>
        </div>
      </div>
    </div>`;
});

const reasonBoxesElement = document.getElementById("reason-boxes");
if (reasonBoxesElement) reasonBoxesElement.innerHTML = reasonBoxesHtml.join("");
