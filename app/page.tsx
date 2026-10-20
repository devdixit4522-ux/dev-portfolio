import { wordSplitter } from "@/components/Words";
import { Intro } from "@/components/home/Intro";
import { ProjectRow } from "@/components/home/ProjectRow";
import { SideQuests } from "@/components/home/SideQuests";
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
      </div>

      {/* the homepage ends in the dark: AI experiments and products, then the sign-off */}
      <SideQuests />

      <ScrollMemory />
    </main>
  );
}
