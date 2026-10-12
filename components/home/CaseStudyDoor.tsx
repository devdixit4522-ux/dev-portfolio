import type { CSSProperties } from "react";
import Image from "next/image";
import type { CaseStudy } from "@/lib/content";

/** A door into a case study: its own hero panel, tint and screens, then its name and lede */
export function CaseStudyDoor({ study }: { study: CaseStudy }) {
  return (
    <article className="rv">
      <a href={study.href} className="group block rounded-[var(--r-panel)]">
        <div
          className="door-panel"
          style={study.brand as CSSProperties}
          role="img"
          aria-label={study.heroLabel}
        >
          {study.screens.map((src) => (
            <div key={src} className="door-phone">
              <Image src={src} alt="" width={780} height={1688} sizes="(min-width: 1200px) 24vw, (min-width: 810px) 27vw, 36vw" />
            </div>
          ))}
        </div>

        <div className="mt-6 flex flex-col gap-4 desktop:flex-row desktop:items-start desktop:justify-between desktop:gap-[84px]">
          <div className="max-w-[var(--read)]">
            <h2 className="text-[length:var(--t-h2)] leading-[var(--lh-h2)] tracking-[-0.04em]">
              {study.product} · {study.project}
            </h2>
            <p className="mt-[var(--gap-h1-lede)]">{study.lede}</p>
          </div>
          <div className="flex shrink-0 flex-col gap-1 text-[14px] leading-[1.3] tracking-normal desktop:items-end desktop:text-right">
            <span className="text-soft">{study.meta.join(" · ")}</span>
            <span className="font-bold text-soft transition-colors duration-[180ms] group-hover:text-ink">
              Read case study
            </span>
          </div>
        </div>
      </a>
    </article>
  );
}
