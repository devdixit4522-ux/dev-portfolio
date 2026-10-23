import type { CSSProperties } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { GlyphField } from "@/components/lab/GlyphField";
import { LabCover } from "@/components/lab/LabCover";
import { LabMotion } from "@/components/lab/LabMotion";
import { labProjects } from "@/lib/content";

/**
 * The last row of the work, and a door: a chat app's artifact gallery, "Dev's artifacts", with each
 * AI project as an artifact card showing its launch video (or its cover) and only what kind of thing it is. The
 * work is the picture; the whole card opens /lab. The water texture moves behind it.
 */
export function LabRow() {
  return (
    <article className="gate rv">
      <GlyphField />
      <Link href="/lab" className="gate-link">
        <div className="gate-head">
          <div>
            <h3 className="gate-title">Dev&apos;s artifacts</h3>
            <p className="gate-sub">
              Things I designed and built with AI, using Claude Code and Cursor.
            </p>
          </div>
          <span className="gate-tabs" aria-hidden>
            <span>Inspiration</span>
            <span data-on>Your artifacts</span>
          </span>
          <span className="gate-open">
            Open the lab <ArrowRight size={15} strokeWidth={2} aria-hidden />
          </span>
        </div>

        <ul className="gate-grid" style={{ "--n": Math.min(4, labProjects.length) } as CSSProperties}>
          {labProjects.map((p) => (
            <li key={p.slug} className="gate-card">
              <div className="gate-thumb">
                {p.video ? <LabMotion project={{ ...p, video: p.video }} /> : <LabCover project={p} />}
              </div>
              <p className="gate-label">{p.kind.replace(/\.$/, "")}</p>
              <p className="gate-meta">Artifact</p>
            </li>
          ))}
        </ul>
      </Link>
    </article>
  );
}
