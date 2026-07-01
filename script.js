console.log("ØB Rigg & Crew loaded");

// smooth fade-in (100% stabil)
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, {
  threshold: 0.15
});

document.querySelectorAll(".hidden").forEach(el => {
  observer.observe(el);
});