"use client";

import { useEffect, useRef, useState } from "react";
import { Pause, Play, SlidersHorizontal } from "lucide-react";
import saved from "@/lib/step-repeat-look.json";
import { LookTuner, type Look } from "@/components/lab/LookTuner";

// STEP/REPEAT drawing itself: the project's own player (public/lab/step-repeat/player.js, the
// bundle its "Website embed" export makes), so what you see is the real engine, not a recording.
const HOME = "/lab/step-repeat/";

// One picture through the window grid, cut finely and shifted only a little, so it reads as a
// picture first and the grid second. Swap the image here; FRAME matches its shape, and the
// picture is drawn a little wider than the frame so the grid's edges stay out of sight.
// The look itself lives in lib/step-repeat-look.json; the banner's Tune panel (dev only) saves it.
const PROOF = {
  image: "robot.webp", // Dev's illustration: a robot kneeling by a forest pond
  alt: "An illustration of a robot kneeling by a forest pond, cut into a grid of square windows by STEP/REPEAT",
  paper: "#181817",
  frame: { w: 1400, h: 656 },
};

const look = saved as Look;

const label = (look: Look) =>
  look.source === "text" ? `“${look.text.replace(/\s+/g, " ")}”, cut into a grid of square windows by STEP/REPEAT` : PROOF.alt;

// only on Dev's computer, while the dev server runs
const TUNE = process.env.NODE_ENV === "development";

type Player = { destroy(): void };
declare global {
  interface Window {
    StepRepeat?: { mount(box: HTMLElement, settings: object, home: string): Player };
  }
}

let loading: Promise<void> | null = null;
function loadPlayer() {
  if (window.StepRepeat) return Promise.resolve();
  loading ||= new Promise<void>((resolve, reject) => {
    const script = document.createElement("script");
    script.src = `${HOME}player.js`;
    script.onload = () => resolve();
    script.onerror = () => {
      loading = null;
      reject(new Error("STEP/REPEAT player did not load"));
    };
    document.head.append(script);
  });
  return loading;
}

// Text is set in the tool's own faces, Latin only, in its bromide white on the dark sheet
const LATIN =
  "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD";
const FONTS = {
  grotesk: { family: "Archivo", weight: "100 900", stretch: "62% 125%", range: LATIN, file: "archivo-latin.woff2" },
  narrow: { family: "Archivo Narrow", weight: "700", range: LATIN, file: "archivo-narrow-latin.woff2" },
  didone: { family: "Bodoni Moda", weight: "900", range: LATIN, file: "bodoni-moda-latin.woff2" },
};

// t0 lets a paused proof stop exactly where its drift had reached
function settings(look: Look, { still = false, t0 = 0 } = {}) {
  const { source, text, face, ...p } = look;
  const subject =
    source === "text"
      ? { source, text: text || "A", face, fonts: [FONTS[face] ?? FONTS.grotesk], ink: "#efece4" }
      : { source, image: PROOF.image, ink: "#000" };
  return {
    ...subject,
    view: "near",
    ...p,
    speed: still ? 0 : p.speed,
    negative: false,
    paper: PROOF.paper,
    zoom: 1,
    panX: 0,
    panY: 0,
    // the frame covers the banner, as a background image would. Text gets a square frame, so on
    // a narrow screen the whole word shrinks to fit instead of losing its sides
    frameW: PROOF.frame.w,
    frameH: source === "text" ? PROOF.frame.w : PROOF.frame.h,
    t0,
  };
}

/**
 * mode "banner": the project page's banner, drifting slowly, with a pause.
 * mode "tile": the homepage tile, the same proof.
 */
export function StepRepeatLive({ mode }: { mode: "banner" | "tile" }) {
  const stage = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);
  const [calm, setCalm] = useState(false);
  // what the proof shows; the Tune panel changes it, the drawing follows a moment later
  const [current, setCurrent] = useState<Look>(look);
  const [shown, setShown] = useState<Look>(look);
  const [tuning, setTuning] = useState(false);
  const live = useRef<{ player: Player; box: HTMLElement; t0: number; speed: number; started: number } | null>(null);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setCalm(query.matches);
    sync();
    query.addEventListener("change", sync);
    return () => query.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setShown(current), 120);
    return () => clearTimeout(timer);
  }, [current]);

  // (re)mount the proof; pausing, or a new look, mounts it again with the drift held where it was
  useEffect(() => {
    const el = stage.current;
    if (!el) return;
    let gone = false;

    loadPlayer()
      .then(() => {
        if (gone || !window.StepRepeat) return;
        // the drift's clock, counted as the player counts it
        const prev = live.current;
        const t0 = prev ? prev.t0 + prev.speed * (performance.now() - prev.started) * 0.06 : 0;
        const speed = paused ? 0 : shown.speed;
        const box = document.createElement("div");
        box.className = "sr-layer";
        el.append(box);
        const player = window.StepRepeat.mount(box, settings(shown, { still: paused, t0 }), new URL(HOME, location.href).href);
        live.current = { player, box, t0, speed, started: performance.now() };
        // the old layer goes once the new one has faded in over it
        setTimeout(() => {
          prev?.player.destroy();
          prev?.box.remove();
        }, 600);
      })
      .catch(() => {});

    return () => {
      gone = true;
    };
  }, [paused, shown]);

  // the whole thing goes when the page does
  useEffect(
    () => () => {
      live.current?.player.destroy();
      live.current = null;
    },
    [],
  );

  if (mode === "tile") return <div ref={stage} className="sr-stage" role="img" aria-label={label(shown)} />;

  return (
    <div className="lab-banner">
      <div ref={stage} className="sr-stage" role="img" aria-label={label(shown)} />
      <div className="lab-live">
        <span className="lab-live-tag">
          <span className="lab-live-dot" data-on={!paused && !calm ? "" : undefined} aria-hidden />
          Live, drawn by STEP/REPEAT
        </span>
        {TUNE && (
          <button type="button" className="lab-pause lab-tune-btn hit" onClick={() => setTuning((v) => !v)} aria-expanded={tuning} aria-label="Tune the banner">
            <SlidersHorizontal size={14} strokeWidth={1.75} aria-hidden />
          </button>
        )}
        {!calm && (
          <button type="button" className="lab-pause hit" onClick={() => setPaused((v) => !v)} aria-label={paused ? "Play" : "Pause"}>
            {paused ? <Play size={14} strokeWidth={1.75} aria-hidden /> : <Pause size={14} strokeWidth={1.75} aria-hidden />}
          </button>
        )}
      </div>
      {TUNE && tuning && <LookTuner look={current} saved={look} onChange={setCurrent} onClose={() => setTuning(false)} />}
    </div>
  );
}
