import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { SayHi } from "@/components/about/SayHi";
import { IntoTheDark } from "@/components/home/IntoTheDark";
import { wordSplitter } from "@/components/Words";
import { Badge } from "@/components/ui/badge";
import { sideQuests, type SideQuest } from "@/lib/content";

/** AI experiments and products: the homepage ends in the dark, set apart from the case studies */
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
        <ul className="dk-grid">
          {sideQuests.map((quest) => (
            <li key={quest.id}>
              <Quest quest={quest} />
            </li>
          ))}
        </ul>
        {/* the homepage ends on an ask, as About does */}
        <SayHi inDark />
      </div>
    </IntoTheDark>
  );
}

function Quest({ quest }: { quest: SideQuest }) {
  const body = (
    <>
      <div className="q-shot">
        {quest.video ? (
          <video src={quest.video} poster={quest.image} muted loop playsInline autoPlay aria-label={`${quest.name} recording`} />
        ) : quest.image ? (
          <Image src={quest.image} alt={`${quest.name} screenshot`} width={1200} height={900} />
        ) : (
          "Screenshot placeholder"
        )}
      </div>
      <div className="q-meta">
        <div>
          <h3>
            {quest.name}
            {quest.placeholder && (
              <Badge variant="secondary" className="ml-2 h-auto border-0 bg-white/10 px-2 py-0.5 align-[2px] text-[12px] font-normal tracking-normal text-white/70">
                Placeholder
              </Badge>
            )}
          </h3>
          <p>{quest.line}</p>
        </div>
        {quest.link && <ArrowUpRight className="q-out" size={18} strokeWidth={1.5} aria-hidden />}
      </div>
    </>
  );

  // placeholders aren't links yet; real ones open the project
  return quest.link ? (
    <a className="quest" href={quest.link} target="_blank" rel="noopener noreferrer">
      {body}
      <span className="sr-only">(opens in a new tab)</span>
    </a>
  ) : (
    <div className="quest">{body}</div>
  );
}

function Sparkle() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 2c.6 4.6 2.9 7.2 7.6 8-4.7.8-7 3.4-7.6 8-.6-4.6-2.9-7.2-7.6-8 4.7-.8 7-3.4 7.6-8Z" />
      <path d="M19 15c.25 1.9 1.1 2.75 3 3-1.9.25-2.75 1.1-3 3-.25-1.9-1.1-2.75-3-3 1.9-.25 2.75-1.1 3-3Z" />
    </svg>
  );
}
