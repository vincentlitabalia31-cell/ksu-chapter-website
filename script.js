```javascript id="js8x2p"
// ===============================
// Kenyan Students Chapter Script
// ===============================

// Confirm site is loaded
window.addEventListener("load", () => {
  console.log("Kenyan Students Chapter Website Loaded Successfully");
});


// Smooth scroll for anchor links (if you add #sections later)
document.querySelectorAll('a[href^=\"#\"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    const targetId = this.getAttribute("href");

    if (targetId.length > 1) {
      e.preventDefault();
      const target = document.querySelector(targetId);

      if (target) {
        target.scrollIntoView({
          behavior: "smooth"
        });
      }
    }
  });
});


// Simple alert example (can reuse anywhere)
function showMessage(message) {
  alert(message);
}


// Example future use:
// <button onclick="showMessage('Welcome to the Chapter!')">Click</button>


// Highlight active page in navbar (basic)
const links = document.querySelectorAll(".navbar a");
const currentPage = window.location.pathname.split("/").pop();

links.forEach(link => {
  if (link.getAttribute("href") === currentPage) {
    link.style.color = "#00ffcc";
  }
});
```
const faders = document.querySelectorAll('.fade-in');

const appearOptions = {
  threshold: 0.2
};

const appearOnScroll = new IntersectionObserver(function(entries, observer) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('show');
    observer.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});
function scrollCarousel(direction) {
  const carousel = document.getElementById('carousel');
  carousel.scrollBy({
    left: direction * 300,
    behavior: 'smooth'
  });
}