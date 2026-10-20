"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";

export type Look = {
  source: "image" | "text";
  text: string;
  face: "grotesk" | "narrow" | "didone";
  size: number;
  density: number;
  shiftX: number;
  shiftY: number;
  squeeze: number;
  compression: number;
  rotation: number;
  motion: number;
  speed: number;
};

const FACES = [
  { id: "grotesk", label: "Grotesk" },
  { id: "narrow", label: "Narrow" },
  { id: "didone", label: "Didone" },
] as const;
// a good starting size for each, since a picture and a letter need very different ones
const START_SIZE = { image: 2000, text: 560 };

// The tool's own controls and ranges (v2/app.js FIELDS). Size goes higher here, because the
// banner's picture is drawn wider than the frame.
const FIELDS: { key: keyof Look; label: string; min: number; max: number; step: number }[] = [
  { key: "size", label: "Size", min: 10, max: 3000, step: 10 },
  { key: "density", label: "Density", min: 1, max: 40, step: 1 },
  { key: "shiftX", label: "Shift X", min: 0, max: 80, step: 1 },
  { key: "shiftY", label: "Shift Y", min: 0, max: 80, step: 1 },
  { key: "squeeze", label: "Squeeze", min: -50, max: 50, step: 1 },
  { key: "compression", label: "Compress", min: 0, max: 100, step: 1 },
  { key: "rotation", label: "Twist", min: 0, max: 50, step: 1 },
  { key: "motion", label: "Drift", min: 0, max: 100, step: 1 },
  { key: "speed", label: "Speed", min: 0, max: 5, step: 0.1 },
];

/**
 * Dev only: the tool's sliders over the banner. Changes show live; Save writes them to
 * lib/step-repeat-look.json, so the banner and the homepage tile keep them.
 */
export function LookTuner({ look, saved, onChange, onClose }: { look: Look; saved: Look; onChange: (look: Look) => void; onClose: () => void }) {
  const [status, setStatus] = useState("");

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => event.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  async function save() {
    setStatus("Saving…");
    try {
      const res = await fetch("/api/lab-look", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(look) });
      setStatus(res.ok ? "Saved. Commit it when you're happy." : "Couldn't save. Is the dev server running?");
    } catch {
      setStatus("Couldn't save. Is the dev server running?");
    }
  }

  const changed = (["source", "text", "face", ...FIELDS.map((f) => f.key)] as const).some((key) => look[key] !== saved[key]);
  const set = (next: Partial<Look>) => {
    setStatus("");
    onChange({ ...look, ...next });
  };

  return (
    <div className="lab-tuner" role="dialog" aria-label="Tune the banner">
      <div className="lab-tuner-head">
        <b>Tune</b>
        <button type="button" className="hit" onClick={onClose} aria-label="Close">
          <X size={16} strokeWidth={1.75} aria-hidden />
        </button>
      </div>
      <div className="lab-tuner-seg" role="group" aria-label="Show">
        {(["image", "text"] as const).map((source) => (
          <button key={source} type="button" aria-pressed={look.source === source} onClick={() => look.source !== source && set({ source, size: START_SIZE[source] })}>
            {source === "image" ? "Picture" : "Text"}
          </button>
        ))}
      </div>
      {look.source === "text" && (
        <>
          <label className="lab-tuner-text">
            <span className="sr-only">Text</span>
            <textarea rows={2} value={look.text} onChange={(event) => set({ text: event.target.value })} placeholder="Type a letter or a word" />
          </label>
          <div className="lab-tuner-seg" role="group" aria-label="Typeface">
            {FACES.map(({ id, label }) => (
              <button key={id} type="button" aria-pressed={look.face === id} onClick={() => set({ face: id })}>
                {label}
              </button>
            ))}
          </div>
        </>
      )}
      {FIELDS.map(({ key, label, min, max, step }) => (
        <label key={key} className="lab-tuner-row">
          <span>{label}</span>
          <input
            type="range"
            min={min}
            max={max}
            step={step}
            value={look[key]}
            onChange={(event) => set({ [key]: Number(event.target.value) })}
          />
          <output>{look[key]}</output>
        </label>
      ))}
      <div className="lab-tuner-foot">
        <button type="button" onClick={() => onChange(saved)} disabled={!changed}>
          Undo changes
        </button>
        <button type="button" className="is-main" onClick={save}>
          Save
        </button>
      </div>
      <p className="lab-tuner-status" aria-live="polite">
        {status || "Only you see this, while the dev server runs."}
      </p>
    </div>
  );
}
