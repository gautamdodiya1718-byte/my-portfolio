const nav = document.getElementById('mobile-nav');
document.getElementById('hamburger')?.addEventListener('click', () => nav.classList.add('open'));
document.getElementById('mobile-close')?.addEventListener('click', () => nav.classList.remove('open'));
nav?.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => nav.classList.remove('open')));
