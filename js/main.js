/* Interactions: sticky header, reveal-on-scroll, counters, toast, search, image fallback */
(function () {
  // Image fallback — if a remote photo fails, swap to a placeholder service
  const fallback = img => {
    if (img.dataset.fb) return;
    img.dataset.fb = 1;
    img.src = `https://picsum.photos/seed/${encodeURIComponent(img.alt || 'aurora')}${Math.floor(Math.random() * 99)}/1200/800`;
  };
  document.querySelectorAll('img').forEach(img => {
    if (img.complete && img.naturalWidth === 0) fallback(img);
    img.addEventListener('error', () => fallback(img));
  });

  // Sticky header shrink + back-to-top
  const header = document.getElementById('siteHeader');
  const toTop = document.getElementById('toTop');
  const onScroll = () => {
    const y = window.scrollY;
    header && header.classList.toggle('scrolled', y > 40);
    toTop && toTop.classList.toggle('show', y > 600);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
  toTop && toTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

  // Reveal on scroll (with optional stagger via data-delay)
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      const el = e.target;
      setTimeout(() => el.classList.add('is-visible'), +(el.dataset.delay || 0));
      io.unobserve(el);
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });
  document.querySelectorAll('[data-reveal]').forEach(el => io.observe(el));

  // Animated counters
  const countIO = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      const el = e.target;
      const target = parseFloat(el.dataset.count);
      const dec = (el.dataset.count.split('.')[1] || '').length;
      const dur = 1800, start = performance.now();
      const tick = now => {
        const p = Math.min((now - start) / dur, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        el.textContent = (target * eased).toFixed(dec);
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
      countIO.unobserve(el);
    });
  }, { threshold: 0.5 });
  document.querySelectorAll('[data-count]').forEach(el => countIO.observe(el));

  // "Coming soon" toast for pages not in the demo
  const toast = document.getElementById('soonToast');
  let t;
  window.showSoon = msg => {
    if (!toast) return;
    toast.querySelector('span').textContent = msg || 'This page will be available in the full version.';
    toast.classList.add('show');
    clearTimeout(t);
    t = setTimeout(() => toast.classList.remove('show'), 2600);
  };
  document.addEventListener('click', e => {
    const a = e.target.closest('[data-soon]');
    if (!a) return;
    e.preventDefault();
    window.showSoon();
  });

  // Search overlay
  const overlay = document.getElementById('searchOverlay');
  document.querySelectorAll('[data-search-open]').forEach(b => b.addEventListener('click', () => {
    overlay.classList.add('open');
    setTimeout(() => overlay.querySelector('input').focus(), 200);
  }));
  const closeSearch = () => overlay && overlay.classList.remove('open');
  document.querySelectorAll('[data-search-close]').forEach(b => b.addEventListener('click', closeSearch));
  document.addEventListener('keydown', e => e.key === 'Escape' && closeSearch());

  // Demo forms
  document.querySelectorAll('form[data-demo]').forEach(f => f.addEventListener('submit', e => {
    e.preventDefault();
    window.showSoon(f.dataset.demo);
    f.reset();
  }));

  // Footer year
  document.querySelectorAll('[data-year]').forEach(el => el.textContent = new Date().getFullYear());
})();
