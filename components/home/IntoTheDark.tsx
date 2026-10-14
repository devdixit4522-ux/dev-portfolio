"use client";

import { useEffect, useRef, type ReactNode } from "react";

const TRIGGER = 0.4; // how far into the dark before it glides the rest of the way
const GLIDE_MS = 850;
const CANCEL = ["wheel", "touchstart", "keydown", "pointerdown"] as const;
// the visitor scrolling: a wheel, a finger, a key, or dragging the scrollbar
const INPUT = [...CANCEL, "touchmove"] as const;
const RECENT_MS = 3000;

/**
 * The homepage ends in the dark. As the section rises, its content comes into focus (--p, 0 to 1).
 * Once you're 40% of the way in, it glides the rest of the way so the dark fills the screen;
 * stop short of that and nothing moves. The same in reverse on the way out.
 * While the dark is under the nav, <html data-dark> turns the nav dark.
 */
export function IntoTheDark({ labelledBy, children }: { labelledBy: string; children: ReactNode }) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const root = document.documentElement;
    const nav = document.querySelector<HTMLElement>(".site-nav");
    const calm = window.matchMedia("(prefers-reduced-motion: reduce)");

    // 0 when the dark's top edge is at the bottom of the screen, 1 when it reaches the top
    const top = () => el.getBoundingClientRect().top + window.scrollY;
    const progress = () => Math.min(1, Math.max(0, (window.scrollY - (top() - window.innerHeight)) / window.innerHeight));

    let lastY = window.scrollY;
    let dir = 1;
    let frame = 0;
    let glide = 0;
    let idle: ReturnType<typeof setTimeout> | undefined;
    const hasScrollEnd = "onscrollend" in window;
    // Only the visitor's own scrolling can start a glide: input from the last few seconds.
    // The browser also scrolls on its own, putting you back where you were when you return
    // from a case study, and that must never set it off.
    let lastInput = -Infinity;
    const touch = () => (lastInput = performance.now());

    function paint() {
      frame = 0;
      // read the layout once, then write, so the browser doesn't measure twice a frame
      const edge = el!.getBoundingClientRect().top;
      const navH = nav?.offsetHeight ?? 68;
      // content is in full focus a little before the dark arrives
      const f = Math.min(1, Math.max(0, 1 - edge / window.innerHeight) / 0.8);
      el!.style.setProperty("--p", calm.matches ? "1" : (f * f * (3 - 2 * f)).toFixed(4));
      root.toggleAttribute("data-dark", edge < navH * 0.6);
    }

    function stopGlide() {
      if (glide) cancelAnimationFrame(glide);
      glide = 0;
      CANCEL.forEach((type) => window.removeEventListener(type, stopGlide));
    }

    // a quick, eased glide; any wheel, touch or key from the visitor cancels it
    function glideTo(to: number) {
      const from = window.scrollY;
      const start = performance.now();
      const ease = (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);
      CANCEL.forEach((type) => window.addEventListener(type, stopGlide, { passive: true }));
      const step = (now: number) => {
        const t = Math.min(1, (now - start) / GLIDE_MS);
        // "instant", or the page's smooth scrolling would animate every step
        window.scrollTo({ top: from + (to - from) * ease(t), behavior: "instant" });
        if (t < 1) glide = requestAnimationFrame(step);
        else stopGlide();
      };
      glide = requestAnimationFrame(step);
    }

    function settle() {
      if (calm.matches || glide || performance.now() - lastInput > RECENT_MS) return;
      const p = progress();
      if (p <= 0 || p >= 1) return;
      if (dir > 0 && p >= TRIGGER) glideTo(top());
      else if (dir < 0 && p <= 1 - TRIGGER) glideTo(top() - window.innerHeight);
    }

    function onScroll() {
      if (window.scrollY !== lastY) dir = window.scrollY > lastY ? 1 : -1;
      lastY = window.scrollY;
      if (!frame) frame = requestAnimationFrame(paint);
      // browsers without scrollend settle after a short pause instead
      if (!hasScrollEnd) {
        clearTimeout(idle);
        idle = setTimeout(settle, 160);
      }
    }

    // with reduced motion, recordings don't play on their own
    if (calm.matches) el.querySelectorAll("video").forEach((video) => video.pause());

    paint();
    INPUT.forEach((type) => window.addEventListener(type, touch, { passive: true }));
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("scrollend", settle);
    window.addEventListener("resize", paint);
    return () => {
      stopGlide();
      INPUT.forEach((type) => window.removeEventListener(type, touch));
      cancelAnimationFrame(frame);
      clearTimeout(idle);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("scrollend", settle);
      window.removeEventListener("resize", paint);
      root.removeAttribute("data-dark");
    };
  }, []);

  return (
    <section ref={ref} aria-labelledby={labelledBy} className="after-dark">
      {children}
    </section>
  );
}
