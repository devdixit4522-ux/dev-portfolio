/* STEP/REPEAT player, copied from the project (v2/engine.js + v2/embed/player.js), the same bundle its Export > Website embed makes. Don't edit here: copy it again from the project. */
(function () {
// STEP/REPEAT engine.
// The same mechanism as Version 1: one glyph (text or an image) is drawn once to an offscreen
// buffer, and the proof is built from square windows. The window at (col, row) shows the glyph
// shifted by (-col, -row) times the grid shift, so the form splits, echoes and recombines.
// Unlike Version 1, rendering takes its target, parameters and camera as arguments, so the same
// code draws the stage, the preset proofs and the high-resolution export.

const Engine = (() => {
  // Grid shift is measured against the window: UNIT (80) moves the type one whole window, which
  // rebuilds the letter, and 0 repeats it. The window itself is a fraction of the subject's line
  // height (p.density windows up one line of type, or across an image's short side), so Size
  // scales the art and its windows together and the cut never changes. Settings from before
  // density (no p.density) keep Version 1's fixed 80-unit window.
  const UNIT = 80;
  const NEAR_DIAG = 6; // squeeze fades out this many lens units above and below the middle
  const MAX_DENSITY = 40;
  const BOX_CELLS = 2500; // most windows over the subject itself; caps density for long text
  const MAX_CELLS = 4000; // most windows in the whole grid, so drift stays near 60fps
  const FAR_SCALE = 0.2; // the far view shows the same grid at a fifth of the size
  const GLYPH_PAD = 20;

  // [x frequency, y frequency, x phase, y phase, x amplitude, y amplitude]
  const WAVES = [
    [0.004, 0.006, 2.1, 1.6, 1.2, 0.9],
    [0.011, 0.008, 4.3, 3.2, 0.8, 0.7],
    [0.002, 0.003, 1.2, 1.0, 1.5, 1.0],
    [0.017, 0.014, 6.1, 5.0, 0.6, 0.5],
    [0.009, 0.01, 3.7, 4.5, 0.7, 0.6],
  ];
  const WAVE_AMP = 4.8; // the drift's farthest reach per unit of motion: the amplitudes summed

  const FACES = {
    grotesk: { label: 'Grotesk', font: (s) => `900 ${s}px Archivo, "Helvetica Neue", Helvetica, Arial, sans-serif` },
    narrow: { label: 'Narrow', font: (s) => `700 ${s}px "Archivo Narrow", "Arial Narrow", Arial, sans-serif` },
    didone: { label: 'Didone', font: (s) => `900 ${s}px "Bodoni Moda", Didot, "Bodoni 72", Georgia, serif` },
  };

  // k is device pixels per glyph unit; maxPx keeps very long text from asking for an impossible canvas.
  // ref is the length density counts windows along: one line of type, or the image's short side.
  function buildGlyph(p, image, { k = 1, maxPx = 4096, ink = '#000', invert = false } = {}) {
    let w;
    let h;
    let ref;
    let paint;

    if (p.source === 'image' && image) {
      const imgW = p.size * 0.8;
      const imgH = (imgW * image.naturalHeight) / image.naturalWidth;
      w = Math.ceil(imgW) + GLYPH_PAD * 2;
      h = Math.ceil(imgH) + GLYPH_PAD;
      ref = Math.min(imgW, imgH);
      paint = (g) => g.drawImage(image, (w - imgW) / 2, (h - imgH) / 2, imgW, imgH);
    } else {
      const font = (FACES[p.face] || FACES.grotesk).font(p.size);
      const probe = document.createElement('canvas').getContext('2d');
      probe.font = font;
      const lines = (p.text || 'A').split('\n');
      // Ink height of a tall letter and a descender, so text sits where its letters are
      // rather than where the font's line box says they should be.
      const ascent = probe.measureText('d').actualBoundingBoxAscent;
      const descent = probe.measureText('p').actualBoundingBoxDescent;
      const lineBox = ascent + descent;
      const leading = lineBox * 1.15;
      const textWidth = Math.max(1, ...lines.map((line) => probe.measureText(line).width));

      w = Math.ceil(textWidth) + GLYPH_PAD * 2;
      h = Math.ceil(lineBox + leading * (lines.length - 1)) + GLYPH_PAD;
      ref = lineBox;
      paint = (g) => {
        g.font = font;
        g.fillStyle = ink;
        g.textAlign = 'center';
        g.textBaseline = 'alphabetic';
        lines.forEach((line, i) => {
          const middle = h / 2 + (i - (lines.length - 1) / 2) * leading;
          g.fillText(line, w / 2, middle + (ascent - descent) / 2);
        });
      };
    }

    const scale = Math.max(0.02, Math.min(k, maxPx / w, maxPx / h));
    const buffer = document.createElement('canvas');
    buffer.width = Math.max(1, Math.round(w * scale));
    buffer.height = Math.max(1, Math.round(h * scale));
    const g = buffer.getContext('2d');
    g.scale(scale, scale);
    paint(g);

    // A negative proof of an image is the image inverted, the way lith film would record it.
    if (invert && p.source === 'image' && image) {
      const data = g.getImageData(0, 0, buffer.width, buffer.height);
      const px = data.data;
      for (let i = 0; i < px.length; i += 4) {
        px[i] = 255 - px[i];
        px[i + 1] = 255 - px[i + 1];
        px[i + 2] = 255 - px[i + 2];
      }
      g.putImageData(data, 0, 0);
    }
    return { canvas: buffer, w, h, ref: Math.max(1, ref), size: p.size };
  }

  // The waves' frequencies never line up, so the drift never repeats. p.loop (in time units) makes
  // it repeat: time goes round a circle, and each wave reads its distance along it from its own
  // angle, so every wave comes back to where it started without the whole field turning at once.
  // A radius of a quarter of the loop keeps each wave moving at its usual average pace.
  function wobble(p, time, x, y) {
    if (!p.motion) return [0, 0];
    const id = (x + y) * 0.01;
    const loop = p.loop > 0;
    const turn = loop ? (time / p.loop) * Math.PI * 2 : 0;
    const radius = loop ? p.loop / 4 : 0;
    let dx = 0;
    let dy = 0;
    for (const [fx, fy, px, py, ax, ay] of WAVES) {
      const tx = loop ? radius * Math.cos(turn - px) : time;
      const ty = loop ? radius * Math.cos(turn - py) : time;
      dx += Math.sin(tx * fx + id * px) * ax;
      dy += Math.cos(ty * fy + id * py) * ay;
    }
    return [dx * p.motion, dy * p.motion];
  }

  // Where the grid's centre sits on the target, and target pixels per grid unit.
  // cam.ratio is target pixels per CSS pixel; pan is in CSS pixels.
  function camera(p, cam, W, H) {
    const s = cam.ratio * cam.zoom * (p.view === 'far' ? FAR_SCALE : 1);
    return {
      s,
      ox: Math.round(W / 2 + cam.ratio * cam.panX),
      oy: Math.round(H / 2 + cam.ratio * cam.panY),
    };
  }

  // Everything the grid needs for one frame, in glyph units at the size being shown.
  // `most` is the highest density this subject allows; `density` is the one in use.
  function layout(p, glyph) {
    // While a size change is being eased in, the last glyph is stretched to the size in between.
    const gk = p.size / glyph.size;
    const gw = glyph.w * gk;
    const gh = glyph.h * gk;
    const legacy = !(p.density > 0);
    let cell = UNIT;
    let density = 0;
    let most = MAX_DENSITY;
    if (!legacy) {
      const ref = glyph.ref * gk;
      most = Math.max(1, Math.min(MAX_DENSITY, Math.floor(Math.sqrt((BOX_CELLS * ref * ref) / (gw * gh)))));
      density = Math.min(Math.max(1, p.density), most);
      cell = ref / density;
    }
    // The lenses and the drift scale with the subject, so they look the same at any density.
    const lens = legacy ? UNIT : p.size / 5; // 80 at the default size of 400
    const drift = legacy ? 1 : p.size / 400;
    const sx = (p.shiftX / UNIT) * cell;
    const sy = (p.shiftY / UNIT) * cell;

    // How far from the middle the art can land, in windows. The window at (col, row) shows the
    // glyph moved (col * sx, row * sy) off its centre, so a small shift spreads echoes far out.
    const amp = p.motion ? WAVE_AMP * p.motion * drift : 0;
    const flat = p.compression > 0 ? 0.1 : p.squeeze < 0 ? Math.max(0.1, 1 - Math.abs(p.squeeze) * 0.02) : 1;
    let reachX = gw / 2 + amp + cell;
    let reachY = gh / 2 + amp + cell / flat;
    if (p.rotation > 0) reachX = reachY = Math.max(reachX, reachY);
    let cols = sx > 0 ? Math.ceil(reachX / sx) : Infinity;
    let rows = sy > 0 ? Math.ceil(reachY / sy) : Infinity;

    // Past MAX_CELLS the grid stops short, keeping the art's proportions.
    if ((2 * cols + 1) * (2 * rows + 1) > MAX_CELLS) {
      const fitRows = Math.max(1, Math.floor(Math.sqrt((MAX_CELLS / 4) * (reachY / reachX))));
      const fitCols = Math.max(1, Math.floor(MAX_CELLS / 4 / fitRows));
      if (rows <= fitRows) cols = Math.max(1, Math.floor((MAX_CELLS / (2 * rows + 1) - 1) / 2));
      else if (cols <= fitCols) rows = Math.max(1, Math.floor((MAX_CELLS / (2 * cols + 1) - 1) / 2));
      else {
        cols = fitCols;
        rows = fitRows;
      }
    }
    return { cell, density, most, gw, gh, lens, drift, sx, sy, cols, rows };
  }

  function render(ctx, W, H, p, glyph, time, cam) {
    const { s, ox, oy } = camera(p, cam, W, H);
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.fillStyle = cam.paper;
    ctx.fillRect(0, 0, W, H);
    if (!glyph) return null;

    const L = layout(p, glyph);
    const { cell } = L;
    const minX = -ox / s;
    const maxX = (W - ox) / s;
    const minY = -oy / s;
    const maxY = (H - oy) / s;
    const rowLo = Math.max(-L.rows, Math.floor((minY + cell / 2) / cell));
    const rowHi = Math.min(L.rows, Math.ceil((maxY + cell / 2) / cell));
    const colLo = Math.max(-L.cols, Math.floor((minX + cell / 2) / cell));
    const colHi = Math.min(L.cols, Math.ceil((maxX + cell / 2) / cell));
    for (let row = rowLo; row <= rowHi; row++) {
      for (let col = colLo; col <= colHi; col++) drawCell(ctx, p, glyph, L, time, s, ox, oy, col, row);
    }
    return L;
  }

  function drawCell(ctx, p, glyph, L, time, s, ox, oy, col, row) {
    const { cell, gw, gh, lens, drift } = L;
    const half = cell / 2;
    const x = col * cell - half;
    const y = row * cell - half;
    const distance = (Math.hypot(col, row) * cell) / lens;

    // Squeeze stretches (or flattens) the rows near the middle and fades out six lens units away.
    const squeeze = Math.max(0, Math.abs(p.squeeze) * 0.02 * ((NEAR_DIAG - (Math.abs(row) * cell) / lens) / NEAR_DIAG));
    let scaleY = 1 + (p.squeeze > 0 ? squeeze : -squeeze);
    if (p.compression > 0) scaleY *= Math.max(0.1, 1 - distance * p.compression * 0.015);
    const angle = p.rotation > 0 ? distance * p.rotation * 0.8 : 0;
    const [wx, wy] = wobble(p, time, x / drift, y / drift);

    // Where the glyph's centre sits from the window's centre; skip windows it cannot reach.
    const cx = -col * L.sx + wx * drift;
    const cy = -row * L.sy + wy * drift;
    const outX = Math.max(0, Math.abs(cx) - gw / 2);
    const outY = Math.max(0, Math.abs(cy) - gh / 2) * scaleY;
    if (angle ? Math.hypot(outX, outY) > half * Math.SQRT2 : outX > half || outY > half) return;

    // Clip to whole target pixels so neighbouring windows meet exactly, with no hairline between them.
    const left = Math.round(ox + x * s);
    const right = Math.round(ox + (x + cell) * s);
    const top = Math.round(oy + y * s);
    const bottom = Math.round(oy + (y + cell) * s);
    if (right <= left || bottom <= top) return;

    ctx.save();
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.beginPath();
    ctx.rect(left, top, right - left, bottom - top);
    ctx.clip();
    ctx.setTransform(s, 0, 0, s, ox, oy);
    ctx.translate(x + half, y + half);
    if (angle) ctx.rotate((angle * Math.PI) / 180);
    ctx.scale(1, scaleY);
    ctx.drawImage(glyph.canvas, cx - gw / 2, cy - gh / 2, gw, gh);
    ctx.restore();
  }

  // The window under a point on the target, with its square in target pixels; null off the grid.
  function cellAt(p, glyph, cam, W, H, px, py) {
    if (!glyph) return null;
    const { s, ox, oy } = camera(p, cam, W, H);
    const { cell, cols, rows } = layout(p, glyph);
    const col = Math.floor(((px - ox) / s + cell / 2) / cell);
    const row = Math.floor(((py - oy) / s + cell / 2) / cell);
    if (Math.abs(col) > cols || Math.abs(row) > rows) return null;
    const x = col * cell - cell / 2;
    const y = row * cell - cell / 2;
    return { col, row, left: ox + x * s, top: oy + y * s, size: cell * s };
  }

  return { UNIT, MAX_DENSITY, FAR_SCALE, FACES, buildGlyph, layout, render, cellAt };
})();

// STEP/REPEAT player: one proof, running live on someone else's page.
// The Export menu bundles this file after engine.js inside one function, so `Engine` is in reach
// here and nothing reaches the host page except window.StepRepeat. Settings come from the
// data-step-repeat attribute (or StepRepeat.mount); images and fonts sit beside player.js.

const HOME = (document.currentScript && document.currentScript.src) || location.href;
const MAX_DPR = 2;
const lessMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

// s: the engine's settings plus paper, ink, zoom, panX, panY, frameW, frameH (the proof's frame in
// the editor, in CSS pixels), t0 (drift time when exported), image, fonts.
function mount(box, s, home = HOME) {
  const at = (name) => new URL(name, home).href;
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  canvas.setAttribute('aria-hidden', 'true');
  canvas.style.cssText = 'position:absolute;inset:0;display:block;width:100%;height:100%;opacity:0';
  if (getComputedStyle(box).position === 'static') box.style.position = 'relative';
  box.append(canvas);

  const p = { ...s, loop: 0 };
  const scale = p.view === 'far' ? Engine.FAR_SCALE : 1;
  let image = null;
  let glyph = null;
  let glyphK = 0;
  let ready = false;
  let shown = false;
  let onScreen = true;
  let time = s.t0 || 0;
  let raf = 0;
  let last = 0;
  let cap = MAX_DPR;
  let ratio = 1;
  let fit = 1;
  let slow = 0;
  let dprQuery = null;

  // The editor's frame covers the box, as a background image would: same crop as the poster.
  function measure() {
    const w = box.clientWidth || 1;
    const h = box.clientHeight || 1;
    const d = Math.min(cap, window.devicePixelRatio || 1);
    canvas.width = Math.max(1, Math.round(w * d));
    canvas.height = Math.max(1, Math.round(h * d));
    fit = Math.max(w / s.frameW, h / s.frameH);
    ratio = d * fit;
    const k = ratio * s.zoom * scale * 1.25;
    if (ready && (!glyph || Math.abs(k / glyphK - 1) > 0.15)) build(k);
    watchDpr();
    draw();
  }

  function build(k) {
    glyphK = k;
    const options = { k, maxPx: 4096, ink: s.ink, invert: !!s.negative };
    try {
      glyph = Engine.buildGlyph(p, image, options);
    } catch {
      // An image served from another origin cannot be read back to invert it; show it as it is.
      glyph = Engine.buildGlyph(p, image, { ...options, invert: false });
    }
  }

  function draw() {
    if (!ready || !glyph) return;
    const started = performance.now();
    Engine.render(ctx, canvas.width, canvas.height, p, glyph, time, { ratio, zoom: s.zoom, panX: s.panX, panY: s.panY, paper: s.paper });
    if (!shown) {
      shown = true;
      canvas.style.transition = lessMotion.matches ? '' : 'opacity 300ms ease';
      canvas.style.opacity = '1';
    }
    return performance.now() - started;
  }

  // Drift runs only while it can be seen, the tab is in front, and the visitor has not asked
  // for less motion.
  const moving = () => ready && onScreen && !document.hidden && !lessMotion.matches && p.motion > 0 && p.speed > 0;

  function frame(now) {
    raf = 0;
    const dt = last ? Math.min(64, now - last) : 16;
    last = now;
    time += p.speed * dt * 0.06;
    const cost = draw();
    // A machine that cannot keep up draws fewer pixels rather than dropping frames.
    slow = cost > 14 ? slow + 1 : Math.max(0, slow - 1);
    if (slow > 20 && cap > 1) {
      cap = Math.max(1, cap - 0.5);
      slow = 0;
      measure();
    }
    run();
  }

  function run() {
    if (moving()) {
      if (!raf) raf = requestAnimationFrame(frame);
    } else {
      if (raf) cancelAnimationFrame(raf);
      raf = 0;
      last = 0;
    }
  }

  function watchDpr() {
    dprQuery?.removeEventListener('change', measure);
    dprQuery = window.matchMedia(`(resolution: ${window.devicePixelRatio || 1}dppx)`);
    dprQuery.addEventListener('change', measure);
  }

  const resizer = new ResizeObserver(measure);
  const watcher = new IntersectionObserver((entries) => {
    onScreen = entries[entries.length - 1].isIntersecting;
    run();
  });
  const onMotionPref = () => {
    draw();
    run();
  };
  document.addEventListener('visibilitychange', run);
  lessMotion.addEventListener('change', onMotionPref);

  async function load() {
    if (s.image) {
      image = new Image();
      image.src = at(s.image);
      await image.decode();
    }
    for (const f of s.fonts || []) {
      const descriptors = { weight: f.weight };
      if (f.stretch) descriptors.stretch = f.stretch;
      if (f.range) descriptors.unicodeRange = f.range;
      const face = new FontFace(f.family, `url("${at(f.file)}")`, descriptors);
      document.fonts.add(face);
      await face.load().catch(() => {}); // a missing font falls back to the system face
    }
  }

  load()
    .then(() => {
      ready = true;
      glyph = null;
      measure();
      run();
    })
    .catch((error) => console.warn('STEP/REPEAT: could not load', s.image, error));
  resizer.observe(box);
  watcher.observe(box);

  return {
    destroy() {
      ready = false;
      run();
      resizer.disconnect();
      watcher.disconnect();
      dprQuery?.removeEventListener('change', measure);
      document.removeEventListener('visibilitychange', run);
      lessMotion.removeEventListener('change', onMotionPref);
      canvas.remove();
    },
  };
}

function boot() {
  for (const box of document.querySelectorAll('[data-step-repeat]')) {
    if (box.stepRepeat) continue;
    try {
      box.stepRepeat = mount(box, JSON.parse(box.dataset.stepRepeat));
    } catch (error) {
      console.warn('STEP/REPEAT: could not start', error);
    }
  }
}

window.StepRepeat = { mount, boot };
if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
else boot();
})();
