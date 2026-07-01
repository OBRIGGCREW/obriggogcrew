// ================================
// ØB Rigg & Crew
// Premium Interactions
// ================================

// Glass-effekt på meny ved scrolling
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 40) {

        navbar.style.background = "rgba(7,17,31,.85)";
        navbar.style.backdropFilter = "blur(24px)";
        navbar.style.boxShadow = "0 15px 45px rgba(0,0,0,.35)";

    } else {

        navbar.style.background = "rgba(255,255,255,.08)";
        navbar.style.boxShadow = "none";

    }

});

// Fade inn kort
const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";

        }

    });

}, {
    threshold: 0.2
});

document.querySelectorAll(".card").forEach(card => {

    card.style.opacity = "0";
    card.style.transform = "translateY(40px)";
    card.style.transition = ".6s";

    observer.observe(card);

});

// Smooth hover-effekt
document.querySelectorAll(".card").forEach(card => {

    card.addEventListener("mousemove", (e) => {

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        card.style.background =
        `radial-gradient(circle at ${x}px ${y}px,
        rgba(10,132,255,.18),
        rgba(255,255,255,.05))`;

    });

    card.addEventListener("mouseleave", () => {

        card.style.background =
        "rgba(255,255,255,.05)";

    });

});

console.log("ØB Rigg & Crew loaded.");