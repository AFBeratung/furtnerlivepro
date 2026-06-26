const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.15 });
document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

const stageObs = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      document.querySelectorAll('.funnel-stage').forEach((s, i) => {
        setTimeout(() => s.classList.add('visible'), i * 120);
      });
      stageObs.disconnect();
    }
  });
}, { threshold: 0.1 });
const fw = document.getElementById('funnelWrap');
if (fw) stageObs.observe(fw);
