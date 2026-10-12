import type { Metadata } from "next";
import Image from "next/image";
import { about } from "@/lib/content";

export const metadata: Metadata = { title: "About · Dev Dixit" };

const h2 = "text-[length:var(--t-h2)] leading-[var(--lh-h2)] tracking-[-0.04em]";

// A reading page, so it uses the case study's own grammar: headline, lede, panels
export default function AboutPage() {
  return (
    <main id="main" className="mx-auto w-full max-w-[var(--page-max)] px-[var(--gutter)] pt-[calc(var(--nav-h)+var(--hero-top))]">
      <header>
        <h1 className="rv max-w-[var(--read-hero)] text-[length:var(--t-h1)] leading-[var(--lh-h1)] tracking-[-0.04em]">
          {about.headline}
        </h1>
        <p className="rv mt-[var(--gap-h1-lede)] max-w-[var(--read-hero)]">{about.lede}</p>
        {/* the portrait has a white ground, so it dissolves into the page rather than sitting on a panel */}
        <Image
          src="/images/hero-portrait.png"
          alt="Dev Dixit walking and looking at a phone"
          width={1024}
          height={1536}
          className="hero-video-mask rv mx-auto mt-[var(--gap-lede-hero)] h-auto w-[min(440px,80%)]"
          priority
        />
      </header>

      <div className="max-w-[1042px]">
        <section aria-labelledby="how" className="mt-[var(--gap-hero)]">
          <h2 id="how" className={`rv ${h2}`}>How I Work</h2>
          <div className="rv mt-[var(--gap-panel)] rounded-[var(--r-panel)] bg-panel px-6 py-2 tablet:px-10 tablet:py-4">
            <ul className="grid desktop:grid-cols-3">
              {about.principles.map((p) => (
                <li
                  key={p.title}
                  className="border-hair py-6 not-first:border-t desktop:px-7 desktop:py-7 desktop:not-first:border-t-0 desktop:not-first:border-l desktop:first:pl-0 desktop:last:pr-0"
                >
                  <h3 className="text-[length:var(--t-card-title)] leading-[1.25] tracking-[-0.02em]">{p.title}</h3>
                  <p className="mt-2 text-[length:var(--t-card-text)] leading-[1.35] tracking-[-0.01em]">{p.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section aria-labelledby="experience" className="mt-[var(--gap-section)]">
          <h2 id="experience" className={`rv ${h2}`}>Experience</h2>
          <div className="rv mt-[var(--gap-panel)] rounded-[var(--r-panel)] bg-panel px-6 py-2 tablet:px-10 tablet:py-4">
            <ul>
              {about.experience.map((e, i) => (
                <li
                  key={i}
                  className="flex flex-col gap-1 border-hair py-5 not-first:border-t tablet:flex-row tablet:justify-between"
                >
                  <span className="font-bold text-ink">
                    {e.role}, {e.company}
                  </span>
                  <span className="text-[14px] tracking-normal text-soft">{e.years}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section aria-labelledby="tools" className="mt-[var(--gap-section)]">
          <h2 id="tools" className={`rv ${h2}`}>Tools</h2>
          <p className="rv mt-[var(--gap-head-text)] max-w-[var(--read)]">{about.tools}</p>
        </section>
      </div>
    </main>
  );
}
