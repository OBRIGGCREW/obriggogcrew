// ================================
// ØB Rigg & Crew — Level 7 JS
// Premium clean interactions
// ================================

// NAVBAR GLASS ON SCROLL
const navbar = document.querySelector(".nav");

window.addEventListener("scroll", () => {
  if (!navbar) return;

  if (window.scrollY > 40) {
    navbar.style.background = "rgba(7,17,31,.75)";
    navbar.style.backdropFilter = "blur(24px)";
    navbar.style.boxShadow = "0 15px 45px rgba(0,0,0,.35)";
  } else {
    navbar.style.background = "rgba(7,17,31,.35)";
    navbar.style.boxShadow = "none";
  }
});

// SCROLL FADE-IN (Apple style reveal)
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  { threshold: 0.15 }
);

document.querySelectorAll(".hidden").forEach((el) => {
  observer.observe(el);
});

// PREMIUM HOVER EFFECT (boxes/cards)
document.querySelectorAll(".box").forEach((box) => {
  box.addEventListener("mousemove", (e) => {
    const rect = box.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    box.style.background = `
      radial-gradient(circle at ${x}px ${y}px,
      rgba(10,132,255,.15),
      rgba(255,255,255,.04))
    `;
  });

  box.addEventListener("mouseleave", () => {
    box.style.background = "rgba(255,255,255,0.04)";
  });
});

console.log("ØB Rigg & Crew — Level 7 loaded");