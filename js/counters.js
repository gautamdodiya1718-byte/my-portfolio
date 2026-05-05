function formatMetric(value, suffix) {
  if (suffix === 'M') return (value / 1000000).toFixed(1) + 'M';
  if (suffix === 'K') return (value / 1000).toFixed(1) + 'K';
  if (suffix === '+') return Math.round(value) + '+';
  return Math.round(value).toString();
}
function animateCounter(el) {
  const target = parseFloat(el.dataset.target || '0');
  const suffix = el.dataset.suffix || '';
  const duration = 1400;
  const start = performance.now();
  function update(now) {
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    const current = target * eased;
    el.textContent = formatMetric(current, suffix);
    if (progress < 1) requestAnimationFrame(update);
  }
  requestAnimationFrame(update);
}
document.querySelectorAll('.gsc-number').forEach(animateCounter);
