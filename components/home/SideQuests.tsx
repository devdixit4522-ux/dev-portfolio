import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SayHi } from "@/components/about/SayHi";
import { IntoTheDark } from "@/components/home/IntoTheDark";
import { wordSplitter } from "@/components/Words";
import { StepRepeatLive } from "@/components/lab/StepRepeatLive";
import { labProjects, type LabProject } from "@/lib/content";

const art: Record<string, React.ReactNode> = {
  "step-repeat": <StepRepeatLive mode="tile" />,
};

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
          {labProjects.map((project) => (
            <li key={project.slug}>
              <Quest project={project} />
            </li>
          ))}
        </ul>
        {/* the homepage ends on an ask, as About does */}
        <SayHi inDark />
      </div>
    </IntoTheDark>
  );
}

function Quest({ project }: { project: LabProject }) {
  // each experiment opens its own dark page, the art drawn live where the tool allows
  return (
    <Link className="quest" href={`/lab/${project.slug}`}>
      <div className="q-shot">{art[project.slug] ?? "Screenshot coming"}</div>
      <div className="q-meta">
        <div>
          <h3>{project.name}</h3>
          <p>{project.line}</p>
        </div>
        <ArrowUpRight className="q-out" size={18} strokeWidth={1.5} aria-hidden />
      </div>
    </Link>
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
