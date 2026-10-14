"use client";

import { useEffect, useRef, useState, type CSSProperties, type FocusEvent } from "react";
import Image from "next/image";
import { ArrowRight, Volume2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { CaseStudy } from "@/lib/content";

// Only one row speaks at a time
let silenceOther: (() => void) | null = null;

/**
 * A project: the case study's own hero tile, then its title and a way in.
 * Hovering the tile, or tabbing into the row, plays the real prototype inside the middle screen.
 * The tile is a mouse shortcut; keyboard and screen readers get the title and the button.
 * "Listen to the walkthrough" does the same and reads a short description aloud, with captions.
 * The tile shares a view-transition name with the case study's hero, so it grows into it.
 */
export function ProjectRow({ study }: { study: CaseStudy }) {
  const [playing, setPlaying] = useState(false);
  const [live, setLive] = useState(false);
  const [ready, setReady] = useState(false);
  const [speaking, setSpeaking] = useState(false);
  const [scale, setScale] = useState(1);
  const phoneRef = useRef<HTMLDivElement>(null);
  const unmountTimer = useRef<ReturnType<typeof setTimeout>>(undefined);
  const speakingRef = useRef(false);

  // the prototype is 390px wide; scale it to the screen it sits in
  useEffect(() => {
    const phone = phoneRef.current;
    if (!phone) return;
    const observer = new ResizeObserver(() => setScale(phone.clientWidth / 390));
    observer.observe(phone);
    return () => observer.disconnect();
  }, []);

  // stop talking when the page goes away
  useEffect(() => {
    const hush = () => {
      if (speakingRef.current && "speechSynthesis" in window) window.speechSynthesis.cancel();
    };
    window.addEventListener("pagehide", hush);
    return () => {
      window.removeEventListener("pagehide", hush);
      hush();
    };
  }, []);

  function start() {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    clearTimeout(unmountTimer.current);
    setPlaying(true);
    setLive(true);
  }

  function release() {
    setPlaying(false);
    // keep the prototype long enough to fade out, then drop it
    unmountTimer.current = setTimeout(() => {
      setLive(false);
      setReady(false);
    }, 450);
  }

  function end() {
    if (!speakingRef.current) release();
  }

  // focus moving between the row's own links doesn't count as leaving it
  function leaveRow(event: FocusEvent<HTMLElement>) {
    if (!event.currentTarget.contains(event.relatedTarget as Node | null)) end();
  }

  function silence() {
    if ("speechSynthesis" in window) window.speechSynthesis.cancel();
    speakingRef.current = false;
    setSpeaking(false);
    if (silenceOther === silence) silenceOther = null;
    release();
  }

  function toggleSound() {
    if (speakingRef.current) {
      silence();
      return;
    }
    silenceOther?.();
    silenceOther = silence;
    speakingRef.current = true;
    setSpeaking(true);
    start();
    if ("speechSynthesis" in window) {
      const utterance = new SpeechSynthesisUtterance(study.say);
      utterance.lang = "en-IN";
      utterance.onend = () => {
        if (speakingRef.current) silence();
      };
      window.speechSynthesis.speak(utterance);
    }
  }

  return (
    <article
      className="row rv"
      data-playing={playing || undefined}
      style={study.brand as CSSProperties}
      onFocus={start}
      onBlur={leaveRow}
    >
      <a
        className="tile"
        href={study.href}
        tabIndex={-1}
        aria-hidden
        style={{ viewTransitionName: `hero-${study.slug}` }}
        onPointerEnter={(e) => !study.cover && e.pointerType === "mouse" && start()}
        onPointerLeave={(e) => !study.cover && e.pointerType === "mouse" && end()}
      >
        {study.cover ? (
          <Image className="tile-cover" src={study.cover} alt="" width={1536} height={1024} sizes="(min-width: 1200px) 720px, 100vw" />
        ) : study.screens.map((src, i) => (
          <div key={src} className="tile-phone" ref={i === 1 ? phoneRef : undefined}>
            <Image src={src} alt="" width={780} height={1688} sizes="(min-width: 1200px) 220px, 30vw" />
            {i === 1 && (
              <div className="tile-live" data-ready={ready || undefined}>
                {live && (
                  <iframe
                    src={study.loop}
                    title=""
                    tabIndex={-1}
                    aria-hidden
                    style={{ transform: `scale(${scale})` }}
                    onLoad={() => setReady(true)}
                  />
                )}
              </div>
            )}
          </div>
        ))}
      </a>

      {/* reading order: title, the finding, the rest, the facts, the way in */}
      <div className="row-copy">
        <h3 className="row-title">
          <a className="text-inherit no-underline" href={study.href}>
            {study.headline}
          </a>
        </h3>
        <p className="finding">
          <span>{study.finding}</span>
        </p>
        <p className="solution">{study.rest}</p>
        <dl className="facts">
          <div>
            <dt>Project</dt>
            {/* the project's own colour, once on this side */}
            <dd className="flex items-center gap-2">
              <i className="brand-dot" aria-hidden />
              {study.product}
            </dd>
          </div>
          {study.facts.map((fact) => (
            <div key={fact.label}>
              <dt>{fact.label}</dt>
              <dd>{fact.value}</dd>
            </div>
          ))}
        </dl>
        <div className="row-acts">
          <Button asChild className="read-btn rounded-full px-[22px] text-[15px] font-normal tracking-normal">
            <a href={study.href}>
              Read case study
              <ArrowRight aria-hidden />
            </a>
          </Button>
          <Button
            type="button"
            variant="secondary"
            aria-pressed={speaking}
            onClick={toggleSound}
            className="sand-btn gap-2 rounded-full px-[18px] text-[15px] font-normal tracking-normal"
          >
            <Volume2 aria-hidden />
            {speaking ? "Stop" : "Listen to the walkthrough"}
          </Button>
        </div>
        <p className="cc mt-4" aria-live="polite">
          {speaking ? study.say : ""}
        </p>
      </div>
    </article>
  );
}
