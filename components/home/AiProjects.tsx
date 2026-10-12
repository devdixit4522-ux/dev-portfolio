import Image from "next/image";
import { Card, CardDescription, CardFooter, CardTitle } from "@/components/ui/card";
import { aiProjects } from "@/lib/content";

/** Media cards on one beige panel: a real screenshot, then a white card */
export function AiProjects() {
  if (!aiProjects.length) return null;

  return (
    <section aria-labelledby="ai-heading" className="mt-[var(--gap-section)]">
      <h2 id="ai-heading" className="rv text-[length:var(--t-h2)] leading-[var(--lh-h2)] tracking-[-0.04em]">
        AI Concept Projects
      </h2>
      <p className="rv mt-[var(--gap-head-text)] max-w-[var(--read)]">
        Smaller things I built to learn, mostly with AI. Some shipped, some didn&apos;t.
      </p>
      <div className="rv mt-[var(--gap-panel)] grid gap-5 rounded-[var(--r-panel)] bg-panel p-5 tablet:grid-cols-2 tablet:p-10 desktop:grid-cols-3">
        {aiProjects.map((project) => (
          <figure key={project.id} className="flex flex-col gap-4">
            {project.image ? (
              <Image
                src={project.image}
                alt={`${project.name} screenshot`}
                width={1200}
                height={900}
                className="aspect-[4/3] w-full rounded-card object-cover"
              />
            ) : (
              <div className="flex aspect-[4/3] w-full items-center justify-center rounded-card bg-bubble text-[14px] tracking-normal text-soft">
                Screenshot placeholder
              </div>
            )}
            <Card className="flex-1">
              <CardTitle>
                {project.name}
                {project.placeholder && (
                  <span className="ml-2 text-[13px] font-normal tracking-normal text-soft">Placeholder</span>
                )}
              </CardTitle>
              <CardDescription>{project.line}</CardDescription>
              {project.link && (
                <CardFooter>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[14px] font-bold tracking-normal text-soft transition-colors duration-[180ms] hover:text-ink"
                  >
                    {project.link.replace(/^https?:\/\//, "")}
                  </a>
                </CardFooter>
              )}
            </Card>
          </figure>
        ))}
      </div>
    </section>
  );
}
