/* CASE STUDY SYSTEM — canonical behaviour (v1.1). Do not edit per case study. */

/* contents rail: highlight the chapter being read */
(function () {
  var links = [].slice.call(document.querySelectorAll('nav.toc a'));
  var chapters = links.map(function (a) { return document.getElementById(a.getAttribute('href').slice(1)); });
  if (!links.length) return;
  function spy() {
    var line = window.innerHeight * 0.3, current = 0;
    chapters.forEach(function (el, i) { if (el && el.getBoundingClientRect().top <= line) current = i; });
    if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) current = chapters.length - 1;
    links.forEach(function (l, i) { l.classList.toggle('active', i === current); });
  }
  window.addEventListener('scroll', spy, { passive: true });
  window.addEventListener('resize', spy);
  spy();
})();

/* blocks marked .rv fade up once as they enter the viewport */
(function () {
  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduced || !('IntersectionObserver' in window)) return;
  var blocks = document.querySelectorAll('.rv');
  if (!blocks.length) return;
  document.documentElement.classList.add('reveal-ready');
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      io.unobserve(entry.target);
    });
  }, { threshold: 0.05, rootMargin: '0px 0px -40px 0px' });
  blocks.forEach(function (el) { io.observe(el); });
})();

/* live stages: scale the 390x844 prototype iframe to its device, and let the
   step list drive it. The prototype posts {type:'loop-scene', scene} as it
   plays and listens for {type:'loop-go', scene}. */
(function () {
  var lives = [].slice.call(document.querySelectorAll('.live'));
  if (!lives.length) return;
  function frameOf(l) { return l.querySelector('iframe'); }
  function fit(l) {
    var d = l.querySelector('.live-device'), f = frameOf(l);
    if (d && f && d.clientWidth) f.style.setProperty('--k', d.clientWidth / 390);
  }
  function mark(l, scene) {
    [].forEach.call(l.querySelectorAll('[data-scene]'), function (b) {
      if (b.getAttribute('data-scene') === scene) b.setAttribute('aria-current', 'step');
      else b.removeAttribute('aria-current');
    });
  }
  lives.forEach(function (l) {
    fit(l);
    var first = l.querySelector('[data-scene]');
    if (first) mark(l, first.getAttribute('data-scene'));
    l.addEventListener('click', function (ev) {
      var b = ev.target.closest('[data-scene]');
      if (!b) return;
      var f = frameOf(l), scene = b.getAttribute('data-scene');
      mark(l, scene);
      if (f && f.contentWindow) f.contentWindow.postMessage({ type: 'loop-go', scene: scene }, '*');
    });
  });
  if ('ResizeObserver' in window) {
    var ro = new ResizeObserver(function (es) { es.forEach(function (e) { fit(e.target.closest('.live')); }); });
    lives.forEach(function (l) { var d = l.querySelector('.live-device'); if (d) ro.observe(d); });
  }
  window.addEventListener('resize', function () { lives.forEach(fit); });
  window.addEventListener('message', function (e) {
    var d = e.data;
    if (!d || d.type !== 'loop-scene') return;
    lives.forEach(function (l) {
      var f = frameOf(l);
      if (!f || f.contentWindow !== e.source) return;
      mark(l, d.scene);
    });
  });
})();

/* site nav: the Contact card opens on hover, click, tap or keyboard,
   and closes on Escape, an outside click, or when the pointer leaves */
(function () {
  var item = document.querySelector('.nav-contact');
  if (!item) return;
  var btn = item.querySelector('.nav-contact-btn'), card = item.querySelector('.nav-card'), timer;
  function set(open) {
    clearTimeout(timer);
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    card.hidden = !open;
  }
  var hover = window.matchMedia('(hover: hover)').matches;
  if (hover) {
    item.addEventListener('pointerenter', function () { set(true); });
    item.addEventListener('pointerleave', function () { timer = setTimeout(function () { set(false); }, 200); });
  }
  btn.addEventListener('click', function () { set(hover ? true : card.hidden); });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !card.hidden) { set(false); btn.focus(); }
  });
  document.addEventListener('click', function (e) { if (!item.contains(e.target)) set(false); });
  item.addEventListener('focusout', function (e) { if (!item.contains(e.relatedTarget)) set(false); });
  [].forEach.call(card.querySelectorAll('[data-copy]'), function (b) {
    b.addEventListener('click', function () {
      if (!navigator.clipboard) return;
      navigator.clipboard.writeText(b.getAttribute('data-copy')).then(function () {
        b.textContent = 'Copied';
        setTimeout(function () { b.textContent = 'Copy'; }, 2000);
      });
    });
  });
})();

/* v1.1: name the hero panel after the page, so a homepage tile can grow into it */
(function () {
  var m = location.pathname.match(/\/work\/([\w-]+)/), panel = document.querySelector('.hero-panel');
  if (m && panel) panel.style.viewTransitionName = 'hero-' + m[1];
})();
