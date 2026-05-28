window.addEventListener("load", () => {
  document.body.classList.add("site-loaded");
});

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", (event) => {
    const targetId = anchor.getAttribute("href");
    if (!targetId || targetId.length <= 1) return;

    const target = document.querySelector(targetId);
    if (!target) return;

    event.preventDefault();
    target.scrollIntoView({ behavior: "smooth" });
  });
});

const navLinks = document.querySelectorAll(".nav-links a");
const currentPage = window.location.pathname.split("/").pop() || "index.html";

navLinks.forEach((link) => {
  if (link.getAttribute("href") === currentPage) {
    link.classList.add("active");
  }
});

const faders = document.querySelectorAll(".fade-in");

if ("IntersectionObserver" in window) {
  const appearOnScroll = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("show");
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.2 }
  );

  faders.forEach((fader) => appearOnScroll.observe(fader));
} else {
  faders.forEach((fader) => fader.classList.add("show"));
}

function showMessage(message) {
  window.alert(message);
}

function scrollCarousel(direction) {
  const carousel = document.getElementById("carousel");
  if (!carousel) return;

  carousel.scrollBy({
    left: direction * 300,
    behavior: "smooth",
  });
}
