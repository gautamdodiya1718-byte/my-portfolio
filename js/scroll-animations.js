const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      if (entry.target.classList.contains('heading-underline')) entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('.scroll-reveal, .heading-underline:not(.hero-underline)').forEach((el) => observer.observe(el));
