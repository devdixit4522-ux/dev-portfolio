import type { CSSProperties } from "react";
import Image from "next/image";
import { about } from "@/lib/content";

// Places in the stage's 1800 × 1536 units (see .fig-stage in globals.css).
// Each arrow ends just off the silhouette, so nothing is drawn over Dev.
const notes = [
  { side: "r", x: "63.9%", y: "86%", text: about.notes.head, arrow: "M1140 205C1090 232 1020 218 972 196M987 217L972 196L998 194" },
  { side: "l", x: "68.9%", y: "63.5%", text: about.notes.bag, arrow: "M572 548C612 560 642 592 653 640M661 615L653 640L635 621" },
  { side: "r", x: "60.3%", y: "20.2%", text: about.notes.shoe, arrow: "M1075 1215C1030 1214 990 1236 963 1262M988 1256L963 1262L970 1237" },
] as const;

/** Fig. 1: Dev, annotated like a screen in one of his case studies */
export function Portrait() {
  return (
    <figure className="fig rv mt-14">
      <div className="rounded-panel bg-panel px-6 pt-10 pb-8 tablet:pt-14 tablet:pb-0">
        <div className="fig-stage">
          <Image
            src="/images/hero-portrait.png"
            alt="Dev Dixit walking and looking at his phone, a green tote bag on his shoulder"
            width={1024}
            height={1536}
            sizes="(min-width: 810px) 450px, 260px"
            priority
          />
          <svg className="fig-arrows" viewBox="0 0 1800 1536" aria-hidden>
            {notes.map((note, i) => (
              <path key={note.arrow} d={note.arrow} pathLength={1} style={{ "--i": i } as CSSProperties} />
            ))}
          </svg>
          {notes.map((note, i) => (
            <p
              key={note.text}
              className={`fig-note hand ${note.side}`}
              style={{ "--x": note.x, "--y": note.y, "--i": i } as CSSProperties}
            >
              {note.text}
            </p>
          ))}
        </div>
      </div>
      <figcaption className="mt-5 text-center text-[15px] tracking-normal text-soft">
        Fig. 1: Dev, in the wild
      </figcaption>
    </figure>
  );
}
