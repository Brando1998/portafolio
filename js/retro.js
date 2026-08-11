// Live taskbar clock
const trayClock = document.getElementById('trayClock');
function updateClock() {
  const now = new Date();
  const time = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  const date = now.toLocaleDateString([], { day: '2-digit', month: '2-digit', year: 'numeric' });
  trayClock.textContent = `${time}  ${date}`;
}
updateClock();
setInterval(updateClock, 1000 * 30);

// Start menu toggle
const startBtn = document.getElementById('startBtn');
const startMenu = document.getElementById('startMenu');
startBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  startMenu.hidden = !startMenu.hidden;
});
document.addEventListener('click', (e) => {
  if (!startMenu.hidden && !startMenu.contains(e.target) && e.target !== startBtn) {
    startMenu.hidden = true;
  }
});
startMenu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => { startMenu.hidden = true; }));

// Taskbar tabs scroll to matching window
const tabTargets = { 0: 'win-hero', 1: 'win-projects', 2: 'win-skills' };
document.querySelectorAll('.taskbar-tab').forEach((tab, i) => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.taskbar-tab').forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    const target = document.getElementById(tabTargets[i]);
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

// Expandable project details
document.querySelectorAll('.details-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const more = btn.closest('.proj-info').querySelector('.proj-more');
    const expanded = !more.hidden;
    more.hidden = expanded;
    btn.textContent = expanded ? '[ Details... ]' : '[ Hide... ]';
  });
});

// Contact form -> mailto
const contactForm = document.getElementById('retroContactForm');
contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const subject = document.getElementById('retroSubject').value || 'Hello from PORTFOLIO_OS';
  const message = document.getElementById('retroMessage').value || '';
  const mailto = `mailto:brandodiazmont@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
  window.location.href = mailto;
});
