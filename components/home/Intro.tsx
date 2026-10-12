import Image from "next/image";
import { hero, site } from "@/lib/content";

/** Version A: the intro is shaped like a case study opening (headline, then lede) */
export function Intro() {
  const [first, ...rest] = hero.lines;
  return (
    <header className="rv">
      <h1 className="max-w-[var(--read-hero)] text-[length:var(--t-h1)] leading-[var(--lh-h1)] tracking-[-0.04em]">
        {first}
      </h1>
      <p className="mt-[var(--gap-h1-lede)] max-w-[var(--read-hero)]">{rest.join(" ")}</p>
    </header>
  );
}

/** Version C: Dev prominent, with the portrait video */
export function IntroWithVideo() {
  const [first, ...rest] = hero.lines;
  return (
    <header className="grid grid-cols-[minmax(0,1fr)] items-center gap-y-6 desktop:grid-cols-[minmax(0,560px)_minmax(0,1fr)] desktop:gap-x-[84px] tablet:min-h-[calc(100dvh-var(--nav-h)-var(--hero-top))]">
      <div className="rv">
        <h1 className="text-[length:var(--t-h1)] leading-[var(--lh-h1)] tracking-[-0.04em]">{first}</h1>
        <p className="mt-[var(--gap-h1-lede)]">{rest.join(" ")}</p>
        <p className="mt-[var(--gap-text-text)]">
          Say{" "}
          <a
            className="font-bold text-ink underline decoration-hair underline-offset-4 transition-colors duration-[180ms] hover:decoration-ink"
            href={`mailto:${site.email}`}
          >
            {site.email}
          </a>
        </p>
      </div>
      <div className="rv mx-auto aspect-[31/44] w-full max-w-[min(100%,calc(clamp(420px,78dvh,820px)*31/44))]">
        <video
          className="hero-video-mask h-full w-full object-contain object-bottom motion-reduce:hidden"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/images/hero-portrait.png"
          aria-label="Dev Dixit walking and looking at a phone"
        >
          <source src="/images/hero-portrait.mp4" type="video/mp4" />
        </video>
        {/* reduced motion: the still, not the loop */}
        <Image
          className="hero-video-mask hidden h-full w-full object-contain object-bottom motion-reduce:block"
          src="/images/hero-portrait.png"
          alt="Dev Dixit walking and looking at a phone"
          width={1024}
          height={1536}
        />
      </div>
    </header>
  );
}
