/* Aatas Cat ESSENTIALS — shared JS */

// Mobile nav toggle
(function() {
  const btn  = document.querySelector('.nav-toggle');
  const menu = document.querySelector('.nav-links');
  if (!btn || !menu) return;
  btn.addEventListener('click', () => {
    const open = menu.classList.toggle('is-open');
    btn.setAttribute('aria-expanded', open);
  });
  // Close on outside click
  document.addEventListener('click', (e) => {
    if (!menu.contains(e.target) && !btn.contains(e.target)) {
      menu.classList.remove('is-open');
      btn.setAttribute('aria-expanded', 'false');
    }
  });
})();

// Variant image swap on product detail sections
(function() {
  document.querySelectorAll('[data-variant-group]').forEach(group => {
    const hero = group.querySelector('[data-variant-hero]');
    const thumbs = group.querySelectorAll('[data-variant-src]');
    thumbs.forEach(thumb => {
      thumb.addEventListener('click', () => {
        const src = thumb.getAttribute('data-variant-src');
        if (hero && src) hero.setAttribute('src', src);
        thumbs.forEach(t => t.classList.remove('is-active'));
        thumb.classList.add('is-active');
      });
    });
  });
})();

// Gentle scroll-reveal
(function() {
  const items = document.querySelectorAll('.reveal');
  if (!items.length || !('IntersectionObserver' in window)) {
    items.forEach(i => i.classList.add('is-visible'));
    return;
  }
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  items.forEach(el => io.observe(el));
})();

// Contact form (fake client-side handling)
(function() {
  const form = document.querySelector('#contact-form');
  if (!form) return;
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const note = form.querySelector('.form-status');
    if (note) {
      note.textContent = "Thanks! Your message was captured. We'll reply to " +
        (form.querySelector('[name=email]').value || 'you') + " shortly.";
      note.style.display = 'block';
    }
    form.reset();
  });
})();
