// Lang toggle
const toggle = document.getElementById('langToggle');
const body = document.body;
toggle.addEventListener('click', () => {
  const isEN = body.dataset.lang === 'en';
  body.dataset.lang = isEN ? 'es' : 'en';
  toggle.textContent = isEN ? 'EN' : 'ES';
});

// Scroll nav
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 20);
}, {passive:true});

// Reveal on scroll
const reveals = document.querySelectorAll('.reveal');
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); }
  });
}, {threshold:.12, rootMargin:'0px 0px -40px 0px'});
reveals.forEach(el => io.observe(el));
