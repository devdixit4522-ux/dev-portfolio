"use client";

import { useRef, useSyncExternalStore, type CSSProperties, type PointerEvent } from "react";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { about } from "@/lib/content";

// Where each photo lands on the desk, and its tilt
const spots = [
  { x: "5%", y: "64px", r: "-4deg" },
  { x: "29%", y: "150px", r: "3deg" },
  { x: "52%", y: "44px", r: "-2deg" },
  { x: "75%", y: "126px", r: "4deg" },
];

const DRAG_QUERY = "(min-width: 1200px) and (hover: hover) and (pointer: fine)";

function useCanDrag() {
  return useSyncExternalStore(
    (onChange) => {
      const query = window.matchMedia(DRAG_QUERY);
      query.addEventListener("change", onChange);
      return () => query.removeEventListener("change", onChange);
    },
    () => window.matchMedia(DRAG_QUERY).matches,
    () => false
  );
}

/** Photos from outside work, scattered on a beige desk. With a mouse, you can move them around. */
export function Desk() {
  const deskRef = useRef<HTMLDivElement>(null);
  const topLayer = useRef(10);
  const canDrag = useCanDrag();

  function pickUp(event: PointerEvent<HTMLDivElement>) {
    const desk = deskRef.current;
    if (!canDrag || !desk || event.button !== 0 || event.pointerType === "touch") return;
    const card = event.currentTarget;
    card.setPointerCapture(event.pointerId);
    card.style.zIndex = String(++topLayer.current);
    card.dataset.held = "";

    const [tx, ty] = (card.dataset.at ?? "0 0").split(" ").map(Number);
    const startX = event.clientX;
    const startY = event.clientY;
    // the photo can travel anywhere, as long as it stays on the desk
    const deskBox = desk.getBoundingClientRect();
    const box = card.getBoundingClientRect();
    const clamp = (v: number, min: number, max: number) => Math.min(Math.max(v, min), max);

    const move = (e: globalThis.PointerEvent) => {
      const x = tx + clamp(e.clientX - startX, deskBox.left - box.left + 8, deskBox.right - box.right - 8);
      const y = ty + clamp(e.clientY - startY, deskBox.top - box.top + 8, deskBox.bottom - box.bottom - 8);
      card.style.translate = `${x}px ${y}px`;
      card.dataset.at = `${x} ${y}`;
    };
    const drop = () => {
      delete card.dataset.held;
      card.removeEventListener("pointermove", move);
      card.removeEventListener("pointerup", drop);
      card.removeEventListener("pointercancel", drop);
    };
    card.addEventListener("pointermove", move);
    card.addEventListener("pointerup", drop);
    card.addEventListener("pointercancel", drop);
  }

  return (
    <div ref={deskRef} className="desk rv mt-10">
      {about.photos.map((photo, i) => (
        <Card
          key={photo.id}
          className="polaroid gap-0"
          data-draggable={canDrag || undefined}
          style={{ "--x": spots[i].x, "--y": spots[i].y, "--r": spots[i].r } as CSSProperties}
          onPointerDown={pickUp}
        >
          <figure>
            <div className="polaroid-shot">
              {photo.src ? (
                <Image src={photo.src} alt={photo.alt ?? ""} width={600} height={600} sizes="236px" draggable={false} />
              ) : (
                <div className="polaroid-empty">Your photo</div>
              )}
            </div>
            <figcaption className="hand">{photo.caption}</figcaption>
          </figure>
        </Card>
      ))}
      <p className="desk-hint hand" aria-hidden>
        Go on, move them around
        <svg viewBox="0 0 46 22" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <path d="M2 5c12-4 28-2 40 11M34 15l8 1 1-8" />
        </svg>
      </p>
    </div>
  );
}
