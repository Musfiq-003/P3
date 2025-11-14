// Insert year
document.getElementById('year').textContent = new Date().getFullYear();

// Typing cursor (CSS blink handles it). No heavy typing logic to keep it accessible.

// Skill bar animation
function animateSkills(){
  document.querySelectorAll('.bar i').forEach(i=>{
    const val = parseInt(i.getAttribute('data-val') || '60', 10);
    i.style.width = val + '%';
  });
}

// Trigger skill animation after initial load or when visible
document.addEventListener('DOMContentLoaded', ()=>{
  setTimeout(animateSkills, 450);

  // Fade-up reveal delays
  document.querySelectorAll('.fade-up').forEach((el, idx)=>{
    el.style.animationDelay = (idx * 80) + 'ms';
  });
});

// Theme toggle
const themeBtn = document.getElementById('themeBtn');
themeBtn.addEventListener('click', ()=>{
  const root = document.documentElement;
  const current = root.getAttribute('data-theme') || 'dark';
  const next = current === 'light' ? 'dark' : 'light';
  root.setAttribute('data-theme', next);
  themeBtn.setAttribute('aria-pressed', next === 'light');
});

// Download CV button behaviour
document.getElementById('downloadCvBtn').addEventListener('click', ()=>{
  const a = document.getElementById('cvLink');
  if (a) a.click();
});

// Respect reduced motion
if (window.matchMedia('(prefers-reduced-motion: reduce)').matches){
  document.querySelectorAll('.fade-up').forEach(e=>{
    e.style.animation = 'none';
    e.style.opacity = 1;
    e.style.transform = 'none';
  });
  document.querySelectorAll('.bar i').forEach(i=>{
    i.style.transition = 'none';
    i.style.width = i.getAttribute('data-val') + '%';
  });
}
