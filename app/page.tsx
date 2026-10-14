import { wordSplitter } from "@/components/Words";
import { SayHi } from "@/components/about/SayHi";
import { Intro } from "@/components/home/Intro";
import { ProjectRow } from "@/components/home/ProjectRow";
import { ScrollMemory } from "@/components/home/ScrollMemory";
import { caseStudies } from "@/lib/content";

export default function Home() {
  return (
    <main id="main">
      <div className="page-width">
        <Intro />

        {/* the nav's Work link lands here */}
        <section id="work" aria-labelledby="work-title" className="mt-[var(--gap-section)]">
          {/* its words come into focus as it scrolls in (.fw) */}
          <h2 id="work-title" className="block-title rv">
            {wordSplitter("fw").words("Selected work")}
          </h2>
          <div className="mt-10 grid gap-16 tablet:gap-20">
            {caseStudies.map((study) => (
              <ProjectRow key={study.slug} study={study} />
            ))}
          </div>
        </section>

        {/* AI experiments and products (<SideQuests />, in the dark) are hidden until the products and their pages are ready.
            Until then the homepage ends on the light sign-off, as About does */}
        <SayHi />
      </div>

      <ScrollMemory />
    </main>
  );
}
