import { SayHi } from "@/components/about/SayHi";
import { IntoTheDark } from "@/components/home/IntoTheDark";
import { wordSplitter } from "@/components/Words";
import { LabGrid, Sparkle } from "@/components/lab/LabGrid";

/**
 * The old ending of the homepage: the AI work as a full dark section. Kept but not rendered;
 * the homepage now ends on one dark card (LabRow) that opens /lab.
 */
export function SideQuests() {
  return (
    <IntoTheDark labelledBy="ai">
      <div className="dk-glow" aria-hidden />
      <div className="page-width dk-focus">
        <h2 id="ai" className="dk-title">
          {wordSplitter("fw").words("AI experiments and products")}
        </h2>
        <p className="dk-say">
          <Sparkle />
          Things I built with AI to learn how it feels to design with it.
        </p>
        <LabGrid />
        <SayHi inDark />
      </div>
    </IntoTheDark>
  );
}
