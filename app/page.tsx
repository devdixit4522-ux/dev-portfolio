import { AiProjects } from "@/components/home/AiProjects";
import { CaseStudyDoor } from "@/components/home/CaseStudyDoor";
import { Intro, IntroWithVideo } from "@/components/home/Intro";
import { caseStudies } from "@/lib/content";

// Two hero versions to compare: `/` (work first) and `/?hero=video` (Dev prominent)
export default async function Home({ searchParams }: PageProps<"/">) {
  const { hero } = await searchParams;
  const withVideo = hero === "video";

  return (
    <main id="main" className="mx-auto w-full max-w-[var(--page-max)] px-[var(--gutter)] pt-[calc(var(--nav-h)+var(--hero-top))]">
      {withVideo ? <IntroWithVideo /> : <Intro />}

      <section
        aria-label="Case studies"
        className={`flex flex-col gap-[var(--gap-section)] ${withVideo ? "mt-[var(--gap-section)]" : "mt-[var(--gap-lede-hero)]"}`}
      >
        {caseStudies.map((study) => (
          <CaseStudyDoor key={study.slug} study={study} />
        ))}
      </section>

      <AiProjects />
    </main>
  );
}
