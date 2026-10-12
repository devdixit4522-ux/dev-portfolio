"use client"

import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import { caseStudies, type CaseStudy } from "@/lib/content"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

type ProjectCard = CaseStudy & { cover?: "gradient" }

const extraProjects: ProjectCard[] = [
  {
    id: "codekarma",
    title: "CodeKarma: Production intelligence for the AI era",
    description:
      "Directed the visual system and site for an AI operations product — making a complex platform feel clear, credible, and ready to demo.",
    tags: ["Website design", "Visual direction", "AI Products"],
    image: "",
    imageAlt: "CodeKarma marks on a soft gradient field",
    cover: "gradient",
    outcomes: [],
    href: "https://codekarma.ai",
  },
]

const projects: ProjectCard[] = [...caseStudies, ...extraProjects]

function ProjectCover({
  project,
  priority = false,
}: {
  project: ProjectCard
  priority?: boolean
}) {
  if (project.cover === "gradient" || !project.image) {
    return (
      <div
        className="relative flex size-full items-center justify-center overflow-hidden bg-gradient-to-br from-lavender via-gallery to-background"
        aria-hidden
      >
        <div className="flex flex-col items-center gap-3 text-center">
          <span className="rounded-full border border-ink/10 bg-white/70 px-3 py-1 text-xs font-medium tracking-[0.16em] text-body uppercase">
            Live product
          </span>
          <p className="font-display text-3xl font-bold tracking-[-0.02em] text-ink sm:text-4xl">
            CodeKarma
          </p>
        </div>
      </div>
    )
  }

  return (
    <Image
      src={project.image}
      alt={project.imageAlt}
      fill
      priority={priority}
      className="object-cover transition-transform duration-300 ease-out group-hover:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
      sizes="(max-width: 768px) 100vw, 50vw"
    />
  )
}

export function CaseStudiesShadcn() {
  return (
    <section
      id="work"
      className="project-dot-grid w-full py-16 sm:py-20 lg:py-24"
      aria-labelledby="case-studies-heading"
    >
      <div className="mx-auto flex w-full max-w-[1400px] flex-col gap-10 px-6 sm:px-10 lg:px-16">
        <div className="flex flex-col gap-2">
          <p className="text-xs font-medium tracking-[0.14em] text-pale-sky uppercase">
            Selected work
          </p>
          <h2
            id="case-studies-heading"
            className="font-display text-2xl font-bold leading-none tracking-[-0.03em] text-ink sm:text-3xl"
          >
            Case studies
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-x-10 md:gap-y-16 lg:gap-x-16">
          {projects.map((project, index) => (
            <article key={project.id} className="flex flex-col gap-5">
              <a
                href={project.href}
                className="group relative block overflow-hidden rounded-[2rem] bg-lavender focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink"
              >
                <div className="relative aspect-[16/10] min-h-[220px] w-full">
                  <ProjectCover project={project} priority={index === 0} />
                </div>
              </a>

              <div className="flex flex-col gap-2.5">
                <h3 className="max-w-[28rem] font-sans text-lg font-bold leading-snug tracking-[-0.015em] text-ink sm:text-xl">
                  <a
                    href={project.href}
                    className="rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink"
                  >
                    {project.title}
                  </a>
                </h3>
                <p className="max-w-[40rem] text-sm leading-[1.6] font-normal text-body">
                  {project.description}
                </p>
              </div>

              <div className="mt-auto flex items-end justify-between gap-4">
                <ul className="flex min-w-0 flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <li key={tag}>
                      <Badge
                        variant="outline"
                        className="h-7 rounded-full px-3 text-foreground"
                      >
                        {tag}
                      </Badge>
                    </li>
                  ))}
                </ul>

                <Button
                  asChild
                  size="icon"
                  className="size-12 rounded-full p-3 [&_svg:not([class*='size-'])]:size-4"
                  aria-label={`Open ${project.title}`}
                >
                  <a href={project.href}>
                    <ArrowUpRight data-icon="inline-end" />
                  </a>
                </Button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
