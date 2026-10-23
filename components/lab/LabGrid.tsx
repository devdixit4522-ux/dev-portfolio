import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { LabScreens } from "@/components/lab/LabScreens";
import { StepRepeatLive } from "@/components/lab/StepRepeatLive";
import { labProjects, type LabProject } from "@/lib/content";

const art: Record<string, React.ReactNode> = {
  "step-repeat": <StepRepeatLive mode="tile" />,
};

/** The AI projects as tiles in the dark, two by two; each opens its own page at /lab/<slug> */
export function LabGrid() {
  return (
    <ul className="dk-grid">
      {labProjects.map((project) => (
        <li key={project.slug}>
          <Quest project={project} />
        </li>
      ))}
    </ul>
  );
}

export function Sparkle() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 2c.6 4.6 2.9 7.2 7.6 8-4.7.8-7 3.4-7.6 8-.6-4.6-2.9-7.2-7.6-8 4.7-.8 7-3.4 7.6-8Z" />
      <path d="M19 15c.25 1.9 1.1 2.75 3 3-1.9.25-2.75 1.1-3 3-.25-1.9-1.1-2.75-3-3 1.9-.25 2.75-1.1 3-3Z" />
    </svg>
  );
}

function Quest({ project }: { project: LabProject }) {
  // the art is the thing itself, drawn live where the tool allows; the link reads as the name and line
  return (
    <Link className="quest" href={`/lab/${project.slug}`}>
      <div className="q-shot">{art[project.slug] ?? <LabScreens project={project} mode="tile" />}</div>
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
