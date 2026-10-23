"use client";

import { useEffect, useRef } from "react";

const RAMP = " .:-=+*#%@";
const INK = "240, 236, 228"; // warm white, the night's text colour
const DAMP = 0.982; // how quickly the water calms; closer to 1 rings longer
const SUB = 2; // water cells per character row: characters are about twice as tall as wide

/**
 * A quiet texture of characters behind the AI work, floating on water. At rest only faint
 * drifting bands print. Moving the pointer drags through the surface: the water is a real wave
 * simulation, so a wake trails behind it, ripples spread, cross, bounce off the edges and calm.
 * Crests thicken the type, troughs thin it, and each character slides along the slope it sits on.
 * Only movement disturbs it; a still pointer makes no waves. With reduced motion it holds still,
 * and off screen it stops.
 * scope "parent" fills its positioned parent; scope "page" sits fixed behind the whole page.
 */
export function GlyphField({ scope = "parent", strength = 1 }: { scope?: "parent" | "page"; strength?: number }) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current!;
    const ctx = canvas.getContext("2d")!;
    const host = scope === "page" ? document.documentElement : canvas.parentElement!;
    const calm = window.matchMedia("(prefers-reduced-motion: reduce)");
    const mono = getComputedStyle(canvas).getPropertyValue("--mono") || "monospace";

    let W = 0, H = 0, dpr = 1, cols = 0, rows = 0;
    const font = 12, cw = font * 0.6, ch = font * 1.25;
    // the water: one height per cell, now and a step ago (the wave equation needs both)
    let gw = 0, gh = 0;
    let cur = new Float32Array(0), prev = new Float32Array(0);
    let energy = 0;
    let lastX = NaN, lastY = NaN;
    let frame = 0, lastDraw = 0, visible = scope === "page", alive = true;
    const batch: number[][] = RAMP.split("").map(() => []);

    function size() {
      const b = canvas.getBoundingClientRect();
      W = b.width;
      H = b.height;
      dpr = Math.min(2, window.devicePixelRatio || 1);
      canvas.width = Math.round(W * dpr);
      canvas.height = Math.round(H * dpr);
      cols = Math.ceil(W / cw);
      rows = Math.ceil(H / ch);
      gw = cols + 2;
      gh = rows * SUB + 2;
      cur = new Float32Array(gw * gh);
      prev = new Float32Array(gw * gh);
      energy = 0;
      draw(performance.now());
    }

    // a touch on the surface: a soft dent, deeper the faster the pointer moves
    function dent(x: number, y: number, amp: number) {
      const gx = x / cw + 1, gy = (y / ch) * SUB + 1;
      const R = 5;
      for (let j = Math.floor(gy - R); j <= Math.ceil(gy + R); j++) {
        if (j < 1 || j >= gh - 1) continue;
        for (let i = Math.floor(gx - R); i <= Math.ceil(gx + R); i++) {
          if (i < 1 || i >= gw - 1) continue;
          const d2 = (i - gx) ** 2 + (j - gy) ** 2;
          if (d2 > R * R) continue;
          cur[j * gw + i] -= amp * Math.exp(-d2 / 6);
        }
      }
      energy = Math.max(energy, amp);
    }

    // one step of the 2D wave equation: each cell pulled toward its neighbours, with damping
    function step() {
      const next = prev;
      let e = 0;
      for (let j = 1; j < gh - 1; j++) {
        const row = j * gw;
        for (let i = 1; i < gw - 1; i++) {
          const k = row + i;
          const v = ((cur[k - 1] + cur[k + 1] + cur[k - gw] + cur[k + gw]) * 0.5 - next[k]) * DAMP;
          next[k] = v;
          e += v < 0 ? -v : v;
        }
      }
      prev = cur;
      cur = next;
      energy = e / (gw * gh) * 40;
    }

    function draw(now: number) {
      if (!W) return;
      const t = calm.matches ? 0 : now / 1000;
      const wet = energy > 0.002;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, W, H);
      ctx.font = `${font}px ${mono}`;
      ctx.textBaseline = "top";
      // characters are gathered by weight and drawn a weight at a time: one colour change each
      for (const b of batch) b.length = 0;
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          let h = 0, sx = 0, sy = 0;
          if (wet) {
            const k = (r * SUB + 1) * gw + c + 1;
            h = cur[k];
            sx = cur[k + 1] - cur[k - 1];
            sy = cur[k + gw] - cur[k - gw];
          }
          // the resting bands, seen through the water: the slope bends where you read them from
          const bc = c + sx * 6, br = r + sy * 3;
          const v = Math.sin(bc * 0.09 + t * 0.35) * Math.sin(br * 0.16 - t * 0.25) * 0.5 + Math.sin((bc + br * 1.7) * 0.05 + t * 0.2) * 0.5;
          let l = Math.min(0.42, Math.max(0, ((v + 1) / 2 - 0.58) * 2.2));
          // crests gather type, troughs clear it, steep water catches the light; never a solid mass
          l += Math.max(-0.35, Math.min(0.55, h * 1.1 + Math.sqrt(sx * sx + sy * sy) * 1.8));
          if (l <= 0.08) continue;
          l = Math.min(0.66, l);
          const k = Math.min(RAMP.length - 1, Math.max(1, Math.floor(l * RAMP.length)));
          // and each character rides the surface, sliding down the slope it sits on
          batch[k].push(c * cw - sx * 5, r * ch - sy * 4);
        }
      }
      for (let k = 1; k < RAMP.length; k++) {
        const b = batch[k];
        if (!b.length) continue;
        const l = (k + 0.5) / RAMP.length;
        ctx.fillStyle = `rgba(${INK}, ${((0.045 + 0.3 * l * l) * strength).toFixed(3)})`;
        for (let i = 0; i < b.length; i += 2) ctx.fillText(RAMP[k], b[i], b[i + 1]);
      }
    }

    function loop(now: number) {
      frame = 0;
      if (!alive || !visible) return;
      if (calm.matches) {
        draw(now);
        return;
      }
      if (energy > 0.0005) step();
      else if (energy) {
        cur.fill(0);
        prev.fill(0);
        energy = 0;
      }
      // the water steps every frame; the type is redrawn ~30 times a second moving, ~25 at rest
      if (now - lastDraw > (energy > 0.002 ? 30 : 40)) {
        lastDraw = now;
        draw(now);
      }
      frame = requestAnimationFrame(loop);
    }
    const kick = () => {
      if (!frame && visible) frame = requestAnimationFrame(loop);
    };

    // drag through the water: dents laid along the path, one per cell, scaled by speed
    function move(e: PointerEvent) {
      if (calm.matches || !W) return;
      const b = canvas.getBoundingClientRect();
      const x = e.clientX - b.left, y = e.clientY - b.top;
      if (x < -20 || y < -20 || x > W + 20 || y > H + 20) {
        lastX = NaN;
        return;
      }
      if (!Number.isNaN(lastX)) {
        const dx = x - lastX, dy = y - lastY;
        const dist = Math.hypot(dx, dy);
        const amp = Math.min(0.3, dist * 0.008);
        const n = Math.min(40, Math.ceil(dist / cw));
        for (let s = 1; s <= n; s++) dent(lastX + (dx * s) / n, lastY + (dy * s) / n, amp / Math.sqrt(n));
      }
      lastX = x;
      lastY = y;
      kick();
    }
    function leave() {
      lastX = NaN;
    }
    // a tap is one drop
    function down(e: PointerEvent) {
      if (calm.matches || !W) return;
      const b = canvas.getBoundingClientRect();
      dent(e.clientX - b.left, e.clientY - b.top, 0.6);
      kick();
    }

    const seen = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (visible) kick();
    });
    const resized = new ResizeObserver(size);

    // wait for the mono face so the first frame isn't drawn in a fallback
    (document.fonts?.load(`12px ${mono}`) ?? Promise.resolve())
      .catch(() => {})
      .then(() => {
        if (!alive) return;
        size();
        resized.observe(canvas);
        if (scope === "parent") seen.observe(canvas);
        kick();
      });

    host.addEventListener("pointermove", move);
    host.addEventListener("pointerleave", leave);
    host.addEventListener("pointerdown", down);
    calm.addEventListener("change", kick);
    return () => {
      alive = false;
      cancelAnimationFrame(frame);
      seen.disconnect();
      resized.disconnect();
      host.removeEventListener("pointermove", move);
      host.removeEventListener("pointerleave", leave);
      host.removeEventListener("pointerdown", down);
      calm.removeEventListener("change", kick);
    };
  }, [scope, strength]);

  return <canvas ref={ref} className={scope === "page" ? "glyph-field glyph-field-page" : "glyph-field"} aria-hidden />;
}
