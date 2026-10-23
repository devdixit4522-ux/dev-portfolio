"use client";

import { useEffect, useRef } from "react";
import type { LabProject } from "@/lib/content";

/**
 * A project's own launch video, whole, as a silent loop in a dark sheet: a playing preview,
 * never cropped. It plays only while it's on screen; with reduced motion it stays on its poster.
 */
export function LabMotion({ project }: { project: LabProject & { video: NonNullable<LabProject["video"]> } }) {
  const ref = useRef<HTMLVideoElement>(null);
  const { src, poster, w, h } = project.video;

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    const calm = window.matchMedia("(prefers-reduced-motion: reduce)");
    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !calm.matches) v.play().catch(() => {});
      else v.pause();
    });
    io.observe(v);
    return () => io.disconnect();
  }, []);

  return (
    <div className="motion" data-shape={h > w ? "tall" : "wide"} aria-hidden>
      <video ref={ref} src={src} poster={poster} width={w} height={h} muted loop playsInline preload="metadata" />
      <span className="motion-tag">Live demo</span>
    </div>
  );
}
