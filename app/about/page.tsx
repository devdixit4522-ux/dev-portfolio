import type { Metadata } from "next";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Portrait } from "@/components/about/Portrait";
import { SayHi } from "@/components/about/SayHi";
import { about } from "@/lib/content";

export const metadata: Metadata = { title: "About · Dev Dixit" };

const link =
  "hit mt-3 inline-flex items-center gap-1.5 text-[15px] tracking-normal text-soft no-underline transition-colors duration-[180ms] hover:text-ink";

// The homepage's sibling: the same two-tone sentence, then Dev annotated in the
// hand the case studies use for their screens. Copy lives in lib/content.ts.
export default function AboutPage() {
  return (
    <main id="main" className="page-width pt-[calc(var(--nav-h)+var(--hero-top))]">
      <h1 className="statement rv max-w-[1040px]">
        <strong>Hi, I&apos;m Dev.</strong>{" "}
        <span className="quiet">
          The longer version: I talk to people before I draw anything, I prototype until the evidence says stop,
          and I keep the designs that didn&apos;t make it.
        </span>
      </h1>

      <Portrait />

      <section aria-labelledby="how" className="mt-[var(--gap-block)]">
        <h2 id="how" className="block-title rv">
          How I work, with receipts
        </h2>
        <ul className="mt-10 border-b border-hair">
          {about.receipts.map((r) => (
            <li
              key={r.claim}
              className="rv grid gap-x-14 gap-y-3 border-t border-hair py-8 desktop:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] desktop:py-10"
            >
              <h3 className="sub-title">{r.claim}</h3>
              <div className="max-w-[var(--read)]">
                <p>{r.proof}</p>
                <a className={link} href={r.href}>
                  {r.cta} <ArrowRight size={16} aria-hidden />
                </a>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="before" className="mt-[var(--gap-block)]">
        <h2 id="before" className="block-title rv">
          Before this
        </h2>
        <ul className="rv mt-10 border-b border-hair">
          {about.experience.map((e, i) => (
            <li key={i} className="flex flex-wrap justify-between gap-x-6 gap-y-1 border-t border-hair py-5">
              <span>
                <strong className="text-ink">{e.role}</strong> <span className="text-soft">at {e.company}</span>
              </span>
              <span className="text-soft tabular-nums">{e.years}</span>
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="built" className="mt-[var(--gap-block)]">
        <h2 id="built" className="block-title rv">
          Built on my own
        </h2>
        <ul className="mt-10 border-b border-hair">
          {about.built.map((b) => {
            const external = b.href?.startsWith("http");
            return (
              <li
                key={b.name}
                className="rv grid gap-x-14 gap-y-3 border-t border-hair py-8 desktop:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] desktop:py-10"
              >
                <div>
                  <h3 className="sub-title">{b.name}</h3>
                  <p className="mt-1 text-[15px] tracking-normal text-soft">
                    {b.kind} · <span className="tabular-nums">{b.years}</span>
                  </p>
                </div>
                <div className="max-w-[var(--read)]">
                  <p>{b.text}</p>
                  <p className="mt-2 text-[15px] tracking-normal text-soft">{b.stack}</p>
                  {b.href ? (
                    <a
                      className={link}
                      href={b.href}
                      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    >
                      {b.cta} {external ? <ArrowUpRight size={16} aria-hidden /> : <ArrowRight size={16} aria-hidden />}
                    </a>
                  ) : (
                    <p className="mt-3 text-[15px] tracking-normal text-soft">{b.cta}</p>
                  )}
                </div>
              </li>
            );
          })}
        </ul>
      </section>

      <SayHi />
    </main>
  );
}
