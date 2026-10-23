import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { LabScreens } from "@/components/lab/LabScreens";
import { StepRepeatLive } from "@/components/lab/StepRepeatLive";
import { labProjects } from "@/lib/content";

export function generateStaticParams() {
  return labProjects.map(({ slug }) => ({ slug }));
}
export const dynamicParams = false;

export async function generateMetadata(props: PageProps<"/lab/[slug]">): Promise<Metadata> {
  const { slug } = await props.params;
  const project = labProjects.find((p) => p.slug === slug);
  return project ? { title: `${project.name} · Dev Dixit`, description: `${project.kind} ${project.line}` } : {};
}

// The live art for each project's banner
const art: Record<string, React.ReactNode> = {
  "step-repeat": <StepRepeatLive mode="banner" />,
};

/**
 * An AI experiment, on one dark screen that doesn't scroll: not a case study.
 * The banner is the thing itself; under it, what it is, what it does, and the way in.
 */
export default async function LabPage(props: PageProps<"/lab/[slug]">) {
  const { slug } = await props.params;
  const at = labProjects.findIndex((p) => p.slug === slug);
  if (at < 0) notFound();
  const project = labProjects[at];
  const next = labProjects.length > 1 ? labProjects[(at + 1) % labProjects.length] : null;

  return (
    <main id="main" className="lab">
      <div className="dk-glow" aria-hidden />
      <div className="page-width lab-frame">
        <nav className="lab-trail" aria-label="AI experiments">
          <Link className="lab-back hit" href="/lab">
            <ArrowLeft size={16} strokeWidth={1.5} aria-hidden />
            AI experiments
          </Link>
          {next && (
            <Link className="lab-back hit" href={`/lab/${next.slug}`}>
              Next: {next.name}
              <ArrowRight size={16} strokeWidth={1.5} aria-hidden />
            </Link>
          )}
        </nav>

        {art[project.slug] ?? <LabScreens project={project} mode="banner" />}

        <div className="lab-info">
          <div className="lab-what">
            <h1>{project.name}</h1>
            <p className="lab-kind">{project.kind}</p>
            <p className="lab-about">{project.about}</p>
          </div>

          <dl className="lab-can">
            {project.can.map(({ verb, what }) => (
              <div key={verb}>
                <dt>{verb}</dt>
                <dd>{what}</dd>
              </div>
            ))}
          </dl>

          <div className="lab-go">
            <dl className="lab-facts">
              {project.facts.map(({ label, value }) => (
                <div key={label}>
                  <dt>{label}</dt>
                  <dd>{value}</dd>
                </div>
              ))}
            </dl>
            {project.link ? (
              <a className="lab-open" href={project.link} target="_blank" rel="noopener noreferrer">
                Open {project.name}
                <ArrowUpRight size={18} strokeWidth={1.5} aria-hidden />
                <span className="sr-only">(opens in a new tab)</span>
              </a>
            ) : (
              <span className="lab-open" aria-disabled="true">
                {project.noLink ?? "Link coming soon"}
              </span>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
