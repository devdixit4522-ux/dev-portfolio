import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { caseStudies } from "@/lib/content";

export function CaseStudies() {
  return (
    <section
      id="work"
      className="mx-auto w-full max-w-[1100px] px-5 py-14 sm:px-8 lg:px-10 lg:py-20"
      aria-labelledby="case-studies-heading"
    >
      <div className="mb-8 flex flex-col gap-1.5 sm:mb-10">
        <p className="font-[family-name:var(--font-geist-sans)] text-xs tracking-[-0.3px] text-pale-sky">
          Selected work
        </p>
        <h2
          id="case-studies-heading"
          className="font-[family-name:var(--font-bricolage)] text-2xl font-bold tracking-[-0.03em] text-ink sm:text-3xl"
        >
          Case studies
        </h2>
      </div>

      <div className="flex flex-col gap-12">
        {caseStudies.map((study, index) => {
          const imageFirst = index % 2 === 0;

          return (
            <article
              key={study.id}
              className="flex flex-col items-center gap-6 lg:flex-row lg:gap-9"
            >
              <a
                href={study.href}
                className={`group relative w-full overflow-hidden rounded-xl bg-lavender focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink lg:w-[44%] lg:shrink-0 ${
                  imageFirst ? "lg:order-1" : "lg:order-2"
                }`}
              >
                <div className="relative aspect-[4/3] w-full transition-transform duration-500 group-hover:scale-[1.02]">
                  <Image
                    src={study.image}
                    alt={study.imageAlt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 480px"
                  />
                </div>
              </a>

              <div
                className={`flex w-full flex-col gap-4 lg:flex-1 ${
                  imageFirst ? "lg:order-2" : "lg:order-1"
                }`}
              >
                <div className="flex flex-col gap-2">
                  <a
                    href={study.href}
                    className="group inline-flex items-center gap-1.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink"
                  >
                    <h3 className="font-[family-name:var(--font-bricolage)] text-2xl font-bold tracking-[-0.02em] text-ink sm:text-[28px]">
                      {study.title}
                    </h3>
                    <ArrowUpRight
                      className="size-5 text-ink opacity-0 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100"
                      aria-hidden
                    />
                  </a>
                  <p className="text-sm font-medium leading-relaxed text-body sm:text-base">
                    {study.description}
                  </p>
                </div>

                <ul className="flex flex-wrap gap-2">
                  {study.tags.map((tag) => (
                    <li
                      key={tag}
                      tabIndex={0}
                      className="cursor-default rounded-full border border-border bg-white px-3 py-1 text-xs font-medium text-body outline-none transition-all duration-200 hover:-translate-y-0.5 hover:border-ink hover:bg-ink hover:text-white hover:shadow-sm focus-visible:-translate-y-0.5 focus-visible:border-ink focus-visible:bg-ink focus-visible:text-white active:translate-y-0 active:scale-95"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-col gap-2.5">
                  <p className="text-xs font-medium text-muted">
                    Key outcomes
                  </p>
                  <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-3">
                    {study.outcomes.map((outcome) => (
                      <div
                        key={outcome.value}
                        tabIndex={0}
                        className="group/tip relative cursor-help rounded-lg border border-border bg-white px-3.5 py-2.5 outline-none transition-colors hover:border-ink/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
                      >
                        <p className="font-[family-name:var(--font-bricolage)] text-lg font-bold tracking-[-0.01em] text-ink">
                          {outcome.value}
                        </p>
                        <p className="mt-0.5 text-xs text-muted decoration-muted/40 decoration-dotted underline-offset-2 group-hover/tip:underline">
                          {outcome.label}
                        </p>

                        <div
                          role="tooltip"
                          className="pointer-events-none absolute bottom-full left-1/2 z-20 mb-2 w-56 -translate-x-1/2 translate-y-1 rounded-lg border border-border bg-white px-3 py-2 text-xs leading-relaxed text-body opacity-0 shadow-md transition-all duration-200 group-hover/tip:translate-y-0 group-hover/tip:opacity-100 group-focus-visible/tip:translate-y-0 group-focus-visible/tip:opacity-100"
                        >
                          {outcome.detail}
                          <span className="absolute left-1/2 top-full -mt-px size-2 -translate-x-1/2 rotate-45 border-b border-r border-border bg-white" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
