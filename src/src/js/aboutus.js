/**
 * @file aboutus.js
 * @description Dynamic service slides for Division Auto Body - Collision Specialists.
 */

const serviceSlidesData = [
  {
    icon: `<i class="icon bx bxs-car-crash display-6"></i>`,
    title: `Collision Repair`,
    body: `Our core specialty since 1977. We restore vehicles to factory safety standards using precision structural repair techniques and high-grade materials.`,
  },
  {
    icon: `<i class="icon bx bxs-paint-roll display-6"></i>`,
    title: `Expert Color Matching`,
    body: `Using advanced computerized paint matching technology, we ensure a seamless finish that is indistinguishable from the original factory paint.`,
  },
  {
    icon: `<i class="icon bx bxs-wrench display-6"></i>`,
    title: `Frame Straightening`,
    body: `We use state-of-the-art frame alignment systems to ensure your vehicle's structural integrity is perfectly restored after a major impact.`,
  },
  {
    icon: `<i class="icon bx bxs-shield display-6"></i>`,
    title: `Insurance Claims`,
    body: `We take the headache out of repairs. We work directly with all major insurance companies to ensure your claim is processed quickly and correctly.`,
  },
  {
    icon: `<i class="icon bx bxs-hot display-6"></i>`,
    title: `Custom Restoration`,
    body: `From classic muscle cars to modern luxury vehicles, we have the passion and the tools to bring your custom vision or restoration project to life.`,
  },
  {
    icon: `<i class="icon bx bxs-check-shield display-6"></i>`,
    title: `Quality Inspection`,
    body: `Every car undergoes a rigorous multi-point safety and aesthetic inspection before it leaves our shop. We don't cut corners on quality.`,
  },
];

const generateSlideBoxesHtml = (slidesData) => {
  return slidesData.map((sl) => {
    const body = sl.body || ``;
    const icon = sl.icon || ``;
    const title = sl.title || ``;
    
    return `
      <li class="glide__slide h-auto">
        <div class="card h-100 bg-dark border-secondary shadow-sm">
          <div class="card-body p-4">
            <div class="card-title text-primary fw-bold fs-5 text-uppercase mb-3">
              ${icon} <br> ${title}
            </div>
            <p class="text-light" style="font-size: 0.9rem; line-height: 1.6;">${body}</p>
          </div>
        </div>
      </li>`;
  });
};

const slideBoxesElement = document.getElementById("service-slides");

if (slideBoxesElement) {
  slideBoxesElement.innerHTML = generateSlideBoxesHtml(serviceSlidesData).join("");
}
