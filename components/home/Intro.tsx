import type { CSSProperties } from "react";
import Image from "next/image";
import { wordSplitter } from "@/components/Words";
import { heroNotes, site } from "@/lib/content";

// Places in the video's 1000 × 1000 square (see .me in globals.css), in its empty white corners.
// Each arrow ends just off the thing it points at.
const notes: { text: string; at: CSSProperties; arrow: string }[] = [
  {
    text: heroNotes.laptop,
    at: { left: "2%", top: "9%", width: "34%" },
    arrow: "M170 192C150 260 180 340 238 388M230 365L238 388L214 384",
  },
  {
    text: heroNotes.socks,
    at: { right: "1%", top: "4%", width: "30%", textAlign: "right" },
    arrow: "M880 128C870 170 830 192 774 190M793 180L774 190L793 202",
  },
  {
    text: heroNotes.blanket,
    at: { left: "2%", top: "83%", width: "40%" },
    arrow: "M300 826C320 760 350 700 390 670M368 673L390 670L381 690",
  },
];

/** One sentence beside the portrait video. Claude's wording, a placeholder until Dev rewrites it. */
export function Intro() {
  // On load the sentence comes into focus word by word (.statement .w)
  const { words, next } = wordSplitter();

  return (
    <section className="intro" aria-label="About Dev">
      <div className="intro-copy">
        <h1 className="statement">
          {words("I'm")} <span className="face w" style={{ "--i": next() } as CSSProperties} aria-hidden />
          <strong>{words("Dev")}</strong>
          {words(", a product designer in India.")}{" "}
          <span className="quiet">{words("I like problems where people get stuck. Lately: why first-time investors freeze on")}</span>{" "}
          <strong>{words("Groww")}</strong>
          <span className="quiet">{words(", and why nobody finds the concerts on")}</span> <strong>{words("BookMyShow")}</strong>
          <span className="quiet">{words(".")}</span>
        </h1>
        <p className="hello mt-8">
          Say hi at <a className="hit" href={`mailto:${site.email}`}>{site.email}</a>
        </p>
      </div>

      <div className="me">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/images/hero-still.jpg"
          aria-label="Dev Dixit lying on a bed, working on a laptop"
          suppressHydrationWarning
        >
          <source src="/images/hero-portrait.mp4" type="video/mp4" />
        </video>
        {/* reduced motion: a still from the same loop */}
        <Image src="/images/hero-still.jpg" alt="Dev Dixit lying on a bed, working on a laptop" width={1080} height={1080} sizes="(min-width: 810px) 50vw, 100vw" priority />

        {/* the case studies' hand notes, written on once the video has developed */}
        <svg className="me-lines" viewBox="0 0 1000 1000" aria-hidden>
          {notes.map((note, i) => (
            <path key={note.arrow} d={note.arrow} pathLength={1} style={{ "--i": i } as CSSProperties} />
          ))}
        </svg>
        {notes.map((note, i) => (
          <p key={note.text} className="me-note hand" style={{ ...note.at, "--i": i } as CSSProperties} aria-hidden>
            {note.text}
          </p>
        ))}
      </div>
    </section>
  );
}
