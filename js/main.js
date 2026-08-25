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

// Reveal on scroll (opacity only — purposeful, not decorative bounce)
const reveals = document.querySelectorAll('.reveal');
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); }
  });
}, {threshold:.12, rootMargin:'0px 0px -40px 0px'});
reveals.forEach(el => io.observe(el));

// Noise / grid toggle — explicit user control over visual density
const noiseToggle = document.getElementById('noiseToggle');
const html = document.documentElement;
const NOISE_KEY = 'portfolio-noise';
function applyNoiseState(state) {
  html.dataset.noise = state;
  noiseToggle.setAttribute('aria-pressed', state === 'on' ? 'true' : 'false');
  noiseToggle.querySelectorAll('span').forEach(s => {
    const isEN = s.classList.contains('en');
    s.textContent = state === 'on'
      ? (isEN ? 'GRID: ON' : 'CUADRÍCULA: ON')
      : (isEN ? 'GRID: OFF' : 'CUADRÍCULA: OFF');
  });
}
const savedNoise = localStorage.getItem(NOISE_KEY) || 'on';
applyNoiseState(savedNoise);
noiseToggle.addEventListener('click', () => {
  const next = html.dataset.noise === 'off' ? 'on' : 'off';
  applyNoiseState(next);
  localStorage.setItem(NOISE_KEY, next);
});

// Contact links — brief, real confirmation before handing off to mail/tel/external app
document.querySelectorAll('.contact-link').forEach(link => {
  link.addEventListener('click', function (e) {
    if (this.classList.contains('confirming')) return;
    e.preventDefault();
    const isEN = body.dataset.lang === 'en';
    const msg = isEN ? this.dataset.confirmEn : this.dataset.confirmEs;
    const statusEl = this.querySelector('.contact-link-status');
    this.classList.add('confirming');
    statusEl.textContent = msg || '...';
    const href = this.href;
    const targetBlank = this.target === '_blank';
    setTimeout(() => {
      if (targetBlank) {
        window.open(href, '_blank', 'noopener');
      } else {
        window.location.href = href;
      }
      setTimeout(() => {
        this.classList.remove('confirming');
        statusEl.textContent = '';
      }, 600);
    }, 450);
  });
});
