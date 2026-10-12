/* ==========================================================================
   BookMyShow — Funnel 2 (category homes)
   Prototype interactions: navigation, views, booking flow, preview sheet,
   search, and history-based state management.
   ========================================================================== */
(function () {
  'use strict';

  /* ----- Data ----- */
  const ITEMS = {
    spider: {
      kind: 'movie', title: 'Spider-Man: Brand New Day',
      hero: 'linear-gradient(160deg,#1a2332,#c44)',
      social: '★ 9/10 · 133K+ votes', meta: '2h 25m · Action, Adventure · UA13+',
      desc: 'Marvel’s next Spider-Man chapter — trailers, cast, and showtimes in Agra.',
      fact1Lab: 'Formats', fact1: '2D, 3D, IMAX · ENGLISH, HINDI',
      fact2Lab: 'Release', fact2: 'In cinemas · 30 Jul, 2026',
      fact3Lab: 'From', fact3: '₹250 onwards',
      status: 'Trending', when: 'Today onwards', whenPipe: 'Showtimes today',
      where: 'Cinemas near Agra', whereShort: 'Agra cinemas',
      price: '₹250 onwards', ticketPrice: 250, tier: 'Standard'
    },
    odyssey: {
      kind: 'movie', title: 'The Odyssey',
      hero: 'linear-gradient(160deg,#2a1810,#8a5a2a)',
      social: '★ 9.2/10 · 164K+ votes', meta: '2h 10m · Drama · UA',
      desc: 'An epic journey on the big screen — critics and audiences are locked in.',
      fact1Lab: 'Formats', fact1: '2D · ENGLISH, HINDI',
      fact2Lab: 'Release', fact2: 'In cinemas',
      fact3Lab: 'From', fact3: '₹200 onwards',
      status: 'Must watch', when: 'Today onwards', whenPipe: 'Showtimes today',
      where: 'Cinemas near Agra', whereShort: 'Agra cinemas',
      price: '₹200 onwards', ticketPrice: 200, tier: 'Standard'
    },
    janneta: {
      kind: 'movie', title: 'Jan Neta',
      hero: 'linear-gradient(160deg,#1e2a1e,#4a6b3a)',
      social: '★ 8.7/10 · 12K+ votes', meta: '2h · Political drama · UA',
      desc: 'A regional drama finding a national audience.',
      fact1Lab: 'Formats', fact1: '2D · HINDI',
      fact2Lab: 'Release', fact2: 'In cinemas',
      fact3Lab: 'From', fact3: '₹180 onwards',
      status: 'Popular', when: 'Today onwards', whenPipe: 'Showtimes today',
      where: 'Cinemas near Agra', whereShort: 'Agra cinemas',
      price: '₹180 onwards', ticketPrice: 180, tier: 'Standard'
    },
    weekend: {
      kind: 'movie', title: 'Weekend pick',
      hero: 'linear-gradient(160deg,#101828,#405060)',
      social: 'Coming soon', meta: 'Notify me · Trailer available',
      desc: 'Mark your interest — we’ll remind you when tickets open.',
      fact1Lab: 'Status', fact1: 'Coming soon',
      fact2Lab: 'City', fact2: 'Agra',
      fact3Lab: 'From', fact3: 'Price TBA',
      status: 'Notify me', when: 'TBA', whenPipe: 'TBA',
      where: 'Agra', whereShort: 'Agra',
      price: 'TBA', ticketPrice: 200, tier: 'Standard'
    },
    nextbig: {
      kind: 'movie', title: 'Next big release',
      hero: 'linear-gradient(160deg,#2a1020,#603040)',
      social: 'Coming soon', meta: 'Notify me · Trailer available',
      desc: 'The next big title on the calendar — interest is building.',
      fact1Lab: 'Status', fact1: 'Coming soon',
      fact2Lab: 'City', fact2: 'Agra',
      fact3Lab: 'From', fact3: 'Price TBA',
      status: 'Notify me', when: 'TBA', whenPipe: 'TBA',
      where: 'Agra', whereShort: 'Agra',
      price: 'TBA', ticketPrice: 200, tier: 'Standard'
    },
    pratyush: {
      kind: 'event', title: 'Pratyush Chaubey Live',
      hero: 'linear-gradient(160deg,#3a1020,#c02040)',
      social: '412 interested', meta: '2h · Stand up Comedy',
      desc: 'Sharp observational comedy — venue and lineup strong enough to trust without checking Instagram first.',
      fact1Lab: 'When', fact1: 'Sun, 2 Aug, 2026 · 8:00 PM',
      fact2Lab: 'Where', fact2: 'The Laugh Casa, Rcube Monad Mall, Noida',
      fact3Lab: 'From', fact3: '₹499 onwards',
      status: 'Fast Filling', when: 'Sun, 2 Aug, 2026 · 8:00 PM', whenPipe: 'Sun, 2 Aug, 2026 | 8:00 PM',
      where: 'The Laugh Casa, Rcube Monad Mall, Noida', whereShort: 'The Laugh Casa, Noida',
      price: '₹499 onwards', ticketPrice: 499, tier: 'General Admission'
    },
    adam: {
      kind: 'event', title: 'Adam Port — Delhi',
      hero: 'linear-gradient(160deg,#102030,#2060a0)',
      social: '633 interested', meta: '6h · Music Shows',
      desc: 'Keinemusik presents Adam Port — cutting-edge electronic music at NSIC Exhibition Ground.',
      fact1Lab: 'When', fact1: 'Fri, 13 Nov, 2026 · 4:00 PM',
      fact2Lab: 'Where', fact2: 'NSIC Exhibition Ground, Okhla, Delhi-NCR',
      fact3Lab: 'From', fact3: '₹3000 onwards',
      status: 'Fast Filling', when: 'Fri, 13 Nov, 2026 · 4:00 PM', whenPipe: 'Fri, 13 Nov, 2026 | 4:00 PM',
      where: 'NSIC Exhibition Ground, Okhla, Delhi-NCR', whereShort: 'NSIC Exhibition Ground, Okhla',
      price: '₹3000 onwards', ticketPrice: 3000, tier: 'General Admission'
    },
    long: {
      kind: 'event', title: 'Krishnamurthy Venkataraghavan’s Midnight Stand-Up Extravaganza Featuring Special Guests',
      hero: 'linear-gradient(160deg,#201018,#803050)',
      social: 'Sponsored', meta: '3h · Comedy',
      desc: 'A late-night stand-up marathon with special guests — the Happening Now push slot.',
      fact1Lab: 'When', fact1: 'Sat, 9 Aug, 2026 · 10:00 PM',
      fact2Lab: 'Where', fact2: 'Open Mic Stage, Agra',
      fact3Lab: 'From', fact3: '₹699 onwards',
      status: 'Fast Filling', when: 'Sat, 9 Aug, 2026 · 10:00 PM', whenPipe: 'Sat, 9 Aug, 2026 | 10:00 PM',
      where: 'Open Mic Stage, Agra', whereShort: 'Open Mic Stage, Agra',
      price: '₹699 onwards', ticketPrice: 699, tier: 'General Admission'
    },
    brocode: {
      kind: 'event', title: 'Brocode The Big Line Up 2026',
      hero: 'linear-gradient(160deg,#8a3010,#c02040)',
      social: '6k interested', meta: '3h · Stand up Comedy',
      desc: "India's biggest comedy line-up — 50+ artists, one afternoon in Gurugram.",
      fact1Lab: 'When', fact1: 'Sun, 2 Aug, 2026 · 3:00 PM',
      fact2Lab: 'Where', fact2: 'A DOT by GNH, Gurugram',
      fact3Lab: 'From', fact3: '₹799 onwards',
      status: 'Fast Filling', when: 'Sun, 2 Aug, 2026 · 3:00 PM', whenPipe: 'Sun, 2 Aug, 2026 | 3:00 PM',
      where: 'A DOT by GNH, Gurugram', whereShort: 'A DOT by GNH, Gurugram',
      price: '₹799 onwards', ticketPrice: 799, tier: 'General Admission'
    }
  };

  const ALSO_FOR_MOVIE = ['pratyush', 'adam', 'brocode'];
  const ALSO_FOR_EVENT = ['pratyush', 'adam', 'long'];
  const YMAL_MOVIES = ['odyssey', 'janneta', 'spider'];
  const YMAL_EVENTS = ['adam', 'long', 'brocode'];

  const PAGE_TITLES = { home: 'It All Starts Here!', movies: 'Movies', events: 'Events' };

  const DESIGN_W = 390;
  const FILL_MAX = 699;

  /* ----- Mutable state ----- */
  const state = {
    currentId: 'spider',
    previewId: null,
    ticketCount: 0,
    lastBooking: null,
    expanding: false
  };

  /* ----- Responsive phone scaling ----- */
  function fitPhoneScale() {
    const phone = document.getElementById('app');
    if (!phone) return;
    const w = (window.visualViewport && window.visualViewport.width) || window.innerWidth;
    if (w > FILL_MAX) {
      phone.style.transform = '';
      phone.style.marginBottom = '';
      phone.style.marginLeft = '';
      return;
    }
    const scale = w / DESIGN_W;
    phone.style.transform = 'scale(' + scale + ')';
    phone.style.transformOrigin = 'top left';
    phone.style.marginLeft = '0';
    phone.style.marginBottom = (phone.scrollHeight * (scale - 1)) + 'px';
    document.documentElement.style.background = '#FFFFFF';
    document.body.style.background = '#FFFFFF';
  }

  /* ----- History / state application ----- */
  function navState() { return document.body.dataset.view || 'home'; }

  function applyState(s) {
    if (!s) { setView('home'); return; }
    if (s.v) setView(s.v);
    switch (s.t) {
      case 'view': break;
      case 'screen': openScreen(s.s, false); break;
      case 'search': runSearch(s.q); break;
      case 'detail': openDetail(s.id); break;
      case 'preview': if (s.detailId) openDetail(s.detailId); openPreview(s.id); break;
      case 'select': state.currentId = s.id; openSelect(); break;
      case 'confirm': state.currentId = s.id; openSelect(); openConfirm(); break;
      case 'done': state.currentId = s.id; finishBooking(); break;
      default: setView('home');
    }
  }

  /* ----- Views ----- */
  function setView(name) {
    document.body.classList.remove('booking-mode');
    document.body.dataset.view = name;
    const h1 = document.getElementById('page-title');
    if (h1 && PAGE_TITLES[name]) h1.textContent = PAGE_TITLES[name];
    document.querySelectorAll('.view').forEach(v => v.classList.toggle('is-active', v.dataset.viewPanel === name));
    document.querySelectorAll('.nav-item').forEach(n => {
      n.classList.toggle('active', n.dataset.view === name);
    });
    closeScreens();
    closePreview();
    window.scrollTo(0, 0);
    fitPhoneScale();
  }

  function openScreen(name, booking) {
    document.querySelectorAll('.view').forEach(v => v.classList.remove('is-active'));
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('is-open'));
    const el = document.getElementById('screen-' + name);
    if (el) el.classList.add('is-open');
    document.body.classList.toggle('booking-mode', !!booking);
    document.querySelectorAll('.nav-item').forEach(n => {
      n.classList.toggle('active', n.getAttribute('data-go') === name);
    });
    window.scrollTo(0, 0);
    fitPhoneScale();
  }

  function closeScreens() {
    closePreview();
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('is-open'));
    document.body.classList.remove('booking-mode');
    const v = document.body.dataset.view || 'home';
    document.querySelectorAll('.view').forEach(panel => {
      panel.classList.toggle('is-active', panel.dataset.viewPanel === v);
    });
  }

  /* ----- Card rendering ----- */
  function cardHtml(id, mode) {
    const it = ITEMS[id];
    if (!it) return '';
    const attr = mode === 'preview' ? 'data-preview="' + id + '"' : 'data-open="' + id + '"';
    const cls = it.kind === 'movie' ? 'movie-card' : 'event-card';
    const pill = it.kind === 'event'
      ? '<span class="date-pill">' + (it.when.split(',')[0] || '') + '</span>'
      : '';
    const sub = it.kind === 'movie'
      ? '<p class="votes">' + it.social.replace(/^★\s*/, '') + '</p><p class="movie-title clamp-2">' + it.title + '</p>'
      : '<p class="title clamp-2">' + it.title + '</p><p class="facts">' + it.meta + '</p><p class="status-fast">' + it.status + '</p>';
    return '<button type="button" class="' + cls + '" ' + attr + '>' +
      '<div class="poster" style="background:' + it.hero + '">' + pill + '</div>' + sub + '</button>';
  }

  /* ----- Detail screen ----- */
  function fillDetail(id) {
    state.currentId = id;
    const it = ITEMS[id];
    document.getElementById('detail-bar-title').textContent = it.title;
    document.getElementById('detail-hero').style.background = it.hero;
    document.getElementById('detail-social').textContent = it.social;
    document.getElementById('detail-title').textContent = it.title;
    document.getElementById('detail-meta').textContent = it.meta;
    document.getElementById('detail-desc').textContent = it.desc;
    document.getElementById('fact1-lab').textContent = it.fact1Lab;
    document.getElementById('fact1').textContent = it.fact1;
    document.getElementById('fact2-lab').textContent = it.fact2Lab;
    document.getElementById('fact2').textContent = it.fact2;
    document.getElementById('fact3-lab').textContent = it.fact3Lab;
    document.getElementById('fact3').textContent = it.fact3;
    document.getElementById('detail-status').textContent = it.status;

    const also = (it.kind === 'movie' ? ALSO_FOR_MOVIE : ALSO_FOR_EVENT).filter(k => k !== id);
    const ymal = (it.kind === 'movie' ? YMAL_MOVIES : YMAL_EVENTS).filter(k => k !== id);
    document.getElementById('also-row').innerHTML = also.map(k => cardHtml(k, 'preview')).join('');
    document.getElementById('ymal-row').innerHTML = ymal.map(k => cardHtml(k, 'preview')).join('');
  }

  function openDetail(id) {
    if (!ITEMS[id]) return;
    fillDetail(id);
    openScreen('detail', true);
  }

  /* ----- Preview bottom sheet ----- */
  function openPreview(id) {
    if (!ITEMS[id]) return;
    state.previewId = id;
    const it = ITEMS[id];
    document.getElementById('preview-hero').style.background = it.hero;
    document.getElementById('preview-social').textContent = it.social;
    document.getElementById('preview-meta').textContent = it.meta;
    document.getElementById('preview-title').textContent = it.title;
    document.getElementById('preview-type').textContent = it.kind === 'movie' ? 'Movies' : it.meta;
    document.getElementById('preview-desc').textContent = it.desc;
    document.getElementById('preview-when').textContent = it.whenPipe;
    document.getElementById('preview-where').textContent = it.whereShort;
    document.getElementById('preview-price').textContent = it.price;
    document.getElementById('preview-backdrop').classList.add('open');
    document.getElementById('preview-sheet').classList.add('open');
    document.getElementById('preview-sheet').setAttribute('aria-hidden', 'false');
  }

  function closePreview() {
    state.previewId = null;
    const sheet = document.getElementById('preview-sheet');
    const backdrop = document.getElementById('preview-backdrop');
    backdrop.classList.remove('open', 'fading');
    sheet.classList.remove('open', 'expanding');
    sheet.setAttribute('aria-hidden', 'true');
    sheet.style.height = '';
    sheet.style.maxHeight = '';
    sheet.style.borderRadius = '';
    sheet.style.transition = '';
    sheet.style.overflow = '';
  }

  function expandPreviewToDetail(id) {
    if (state.expanding || !ITEMS[id]) return;
    state.expanding = true;
    const sheet = document.getElementById('preview-sheet');
    const backdrop = document.getElementById('preview-backdrop');
    const fromId = state.currentId;
    history.pushState({ t: 'detail', id, detailId: fromId, v: navState() }, '');
    sheet.scrollTop = 0;

    const startH = sheet.getBoundingClientRect().height;
    sheet.style.maxHeight = 'none';
    sheet.style.height = startH + 'px';
    sheet.style.transition = 'none';
    void sheet.offsetHeight;

    sheet.style.transition = 'height 360ms cubic-bezier(0.22, 0.61, 0.36, 1), border-radius 360ms cubic-bezier(0.22, 0.61, 0.36, 1)';
    backdrop.classList.add('fading');
    requestAnimationFrame(() => {
      sheet.style.height = '100vh';
      sheet.style.borderRadius = '0';
    });

    setTimeout(() => {
      openDetail(id);
      sheet.style.transition = 'none';
      sheet.classList.remove('open', 'expanding');
      sheet.style.height = '';
      sheet.style.maxHeight = '';
      sheet.style.borderRadius = '';
      sheet.setAttribute('aria-hidden', 'true');
      backdrop.classList.remove('open', 'fading');
      state.previewId = null;
      void sheet.offsetWidth;
      sheet.style.transition = '';
      state.expanding = false;
    }, 380);
  }

  /* ----- Ticket selection / booking ----- */
  function openSelect() {
    closePreview();
    const it = ITEMS[state.currentId];
    state.ticketCount = 0;
    document.getElementById('select-title').textContent = it.title;
    document.getElementById('select-venue').textContent = it.whereShort;
    document.getElementById('select-when').textContent = it.whenPipe;
    document.getElementById('tier-name').textContent = it.tier;
    document.getElementById('tier-price').textContent = '₹' + it.ticketPrice;
    document.getElementById('tier-status').textContent = it.status;
    document.getElementById('add-btn').textContent = 'Add';
    document.getElementById('select-footer').classList.add('hidden');
    openScreen('select', true);
  }

  function addTicket() {
    const it = ITEMS[state.currentId];
    state.ticketCount = 1;
    document.getElementById('add-btn').textContent = '−  1  +';
    document.getElementById('select-total').textContent = '₹' + it.ticketPrice;
    document.getElementById('select-footer').classList.remove('hidden');
  }

  function openConfirm() {
    const it = ITEMS[state.currentId];
    const sub = it.ticketPrice;
    const total = sub + 49;
    document.getElementById('confirm-title').textContent = it.title;
    document.getElementById('confirm-details').textContent = it.whenPipe + ' · ' + it.tier + ' × 1';
    document.getElementById('confirm-venue').textContent = it.where;
    document.getElementById('confirm-sub').textContent = '₹' + sub + '.00';
    document.getElementById('confirm-total').textContent = '₹' + total + '.00';
    document.getElementById('confirm-bottom-total').textContent = '₹' + total + '.00';
    openScreen('confirm', true);
  }

  function finishBooking() {
    const it = ITEMS[state.currentId];
    state.lastBooking = it.title;
    document.getElementById('done-copy').textContent = it.title + ' — path complete.';
    document.getElementById('bookings-empty').classList.add('hidden');
    document.getElementById('bookings-list').classList.remove('hidden');
    document.getElementById('bookings-list').innerHTML =
      '<div class="confirm-card"><strong>' + it.title + '</strong><p class="meta confirm-details">' + it.whenPipe + '</p></div>';
    openScreen('done', true);
  }

  /* ----- Search ----- */
  function runSearch(raw) {
    const q = (raw || '').trim().toLowerCase();
    openScreen('search', false);
    const hits = document.getElementById('search-hits');
    const none = document.getElementById('search-none');
    if (!q) {
      hits.innerHTML = '';
      none.classList.remove('hidden');
      none.textContent = 'Type something to search movies and events.';
      return;
    }
    const matched = Object.keys(ITEMS).filter(id => {
      const it = ITEMS[id];
      return it.title.toLowerCase().includes(q) || it.kind.includes(q) || id.includes(q);
    });
    if (!matched.length) {
      hits.innerHTML = '';
      none.classList.remove('hidden');
      none.textContent = 'No results for “‘ + raw + ’”. Try Movies or Events.';
      return;
    }
    none.classList.add('hidden');
    hits.innerHTML = matched.map(id => {
      const it = ITEMS[id];
      return '<button type="button" class="list-card" data-open="' + id + '">' +
        '<div class="thumb" style="background:' + it.hero + '"></div>' +
        '<div><h3 class="clamp-2">' + it.title + '</h3><p>' + it.kind + '</p></div></button>';
    }).join('');
  }

  /* ----- Event wiring ----- */
  function init() {
    document.querySelectorAll('.proto-btn[data-proto]').forEach((btn) => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.proto-btn[data-proto]').forEach((b) => b.classList.remove('active'));
        btn.classList.add('active');
        document.body.dataset.proto = btn.dataset.proto;
      });
    });

    const searchForm = document.getElementById('search-form');
    if (searchForm) {
      searchForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const q = document.getElementById('global-search').value;
        history.pushState({ t: 'search', q, v: navState() }, '');
        runSearch(q);
      });
    }

    const backdrop = document.getElementById('preview-backdrop');
    if (backdrop) backdrop.addEventListener('click', () => history.back());

    document.getElementById('app').addEventListener('click', handleAppClick);

    window.addEventListener('popstate', (e) => applyState(e.state));
    window.addEventListener('resize', fitPhoneScale);
    window.addEventListener('orientationchange', fitPhoneScale);
    if (window.visualViewport) {
      window.visualViewport.addEventListener('resize', fitPhoneScale);
    }

    history.replaceState({ t: 'view', v: 'home' }, '');
    setView('home');
    fitPhoneScale();
    applyCaseStudyParams();
  }

  function applyCaseStudyParams() {
    const raw = (location.hash || '').replace(/^#/, '') || (location.search || '').replace(/^\?/, '');
    const p = new URLSearchParams(raw);
    const also = p.get('also');
    const alsoBlock = document.getElementById('also-block');
    const ymalBlock = document.getElementById('ymal-block');
    if (also === 'after' && alsoBlock && ymalBlock && alsoBlock.parentNode) {
      alsoBlock.parentNode.insertBefore(ymalBlock, alsoBlock);
    }
    if (also === 'off' && alsoBlock) alsoBlock.style.display = 'none';
    const proto = p.get('proto');
    if (proto) document.body.setAttribute('data-proto', proto);
    const view = p.get('view');
    if (view) setView(view);
    const detail = p.get('detail');
    const preview = p.get('preview');
    const select = p.get('select');
    const confirm = p.get('confirm');
    if (detail) openDetail(detail);
    if (preview) {
      if (!detail) openDetail('spider');
      openPreview(preview);
    }
    if (select) { state.currentId = select; openSelect(); }
    if (confirm) { state.currentId = confirm; openSelect(); openConfirm(); }
    const scrollTo = p.get('scroll');
    if (scrollTo === 'also' || scrollTo === 'end') {
      requestAnimationFrame(function () {
        const target = scrollTo === 'also'
          ? document.getElementById('also-block')
          : document.querySelector('.sticky-book');
        const scroller = document.querySelector('.phone') || document.scrollingElement;
        if (target && scroller) scroller.scrollTop = Math.max(0, target.offsetTop - 72);
      });
    }
  }

  function handleAppClick(e) {
    const pill = e.target.closest('.pill');
    if (pill && pill.closest('.pill-row')) {
      pill.closest('.pill-row').querySelectorAll('.pill').forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      return;
    }

    const action = e.target.closest('[data-action]');
    if (action) {
      e.preventDefault();
      e.stopPropagation();
      const a = action.getAttribute('data-action');
      if (a === 'close-preview') history.back();
      if (a === 'preview-more') {
        const id = state.previewId;
        if (id) expandPreviewToDetail(id);
      }
      if (a === 'preview-book') {
        if (state.previewId) {
          state.currentId = state.previewId;
          history.pushState({ t: 'select', id: state.currentId, v: navState() }, '');
          openSelect();
        }
      }
      if (a === 'book') {
        history.pushState({ t: 'select', id: state.currentId, v: navState() }, '');
        openSelect();
      }
      if (a === 'add') addTicket();
      if (a === 'back-detail') history.back();
      if (a === 'back-select') history.back();
      if (a === 'confirm') {
        history.pushState({ t: 'confirm', id: state.currentId, v: navState() }, '');
        openConfirm();
      }
      if (a === 'done') {
        history.pushState({ t: 'done', id: state.currentId, v: navState() }, '');
        finishBooking();
      }
      return;
    }

    const open = e.target.closest('[data-open]');
    if (open) {
      e.preventDefault();
      const id = open.getAttribute('data-open');
      history.pushState({ t: 'detail', id, v: navState() }, '');
      openDetail(id);
      return;
    }

    const preview = e.target.closest('[data-preview]');
    if (preview) {
      e.preventDefault();
      const id = preview.getAttribute('data-preview');
      history.pushState({ t: 'preview', id, detailId: state.currentId, v: navState() }, '');
      openPreview(id);
      return;
    }

    if (e.target.closest('.page-back')) {
      e.preventDefault();
      history.back();
      return;
    }

    const viewBtn = e.target.closest('button[data-view], a[data-view]');
    if (viewBtn && !viewBtn.closest('.proto')) {
      e.preventDefault();
      const v = viewBtn.getAttribute('data-view');
      history.pushState({ t: 'view', v }, '');
      setView(v);
      return;
    }
    if (e.target.closest('[data-back]')) {
      e.preventDefault();
      history.back();
      return;
    }
    const go = e.target.closest('button[data-go]');
    if (!go) return;
    e.preventDefault();
    const name = go.getAttribute('data-go');
    history.pushState({ t: 'screen', s: name, v: navState() }, '');
    openScreen(name, false);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
