import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { SayHi } from "@/components/about/SayHi";
import { GlyphRoom } from "@/components/lab/GlyphRoom";

export const metadata: Metadata = {
  title: "AI experiments and products · Dev Dixit",
  description: "Things Dev Dixit designed and built with AI, using Claude Code and Cursor.",
};

/** The AI work as one terminal session, opened from the last card on the homepage */
export default function LabIndex() {
  return (
    <main id="main" className="lab lab-index">
      <div className="dk-glow" aria-hidden />
      <div className="page-width lab-list">
        <nav className="lab-trail" aria-label="Back to the work">
          <Link className="lab-back hit" href="/#work">
            <ArrowLeft size={16} strokeWidth={1.5} aria-hidden />
            Work
          </Link>
        </nav>
        <GlyphRoom />
        <SayHi inDark />
      </div>
    </main>
  );
}
