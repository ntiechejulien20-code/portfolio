// Petite animation de défilement et mise à jour automatique de l'année.

const yearEl = document.getElementById('year');
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

const revealObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('active');
      observer.unobserve(entry.target);
    });
  },
  {
    threshold: 0.18,
  }
);

document.querySelectorAll('.reveal').forEach((el) => revealObserver.observe(el));

// Menu hamburger
const hamburger = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.links');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  mobileMenu.classList.toggle('mobile');
  mobileMenu.classList.toggle('active');
});

// Animation de scroll sur la photo
const scrollAnimateEl = document.querySelector('.scroll-animate');
if (scrollAnimateEl) {
  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const scale = 1 + scrollY * 0.0002; // Agrandissement subtil
    scrollAnimateEl.style.transform = `scale(${Math.min(scale, 1.1)})`; // Max 1.1
  });
}
