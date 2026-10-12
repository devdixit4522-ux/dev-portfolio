import { ChevronDown } from "lucide-react";
import { site } from "@/lib/content";

export function Hero() {
  return (
    <section className="flex min-h-dvh w-full flex-col justify-center px-6 pt-4 sm:px-10 lg:px-16">
      <div className="mx-auto flex w-full max-w-[1100px] flex-col items-center gap-8 lg:flex-row lg:items-center lg:justify-center lg:gap-10">
        <div className="flex max-w-[580px] flex-col gap-5 text-center lg:text-left">
          {site.hero.lines.map((line) => (
            <p
              key={line}
              className="text-lg font-bold leading-[1.6] text-ink sm:text-xl"
            >
              {line}
            </p>
          ))}
          <p className="text-lg font-bold leading-[1.6] text-ink sm:text-xl">
            Say{" "}
            <a
              href={`mailto:${site.email}`}
              className="underline underline-offset-4 transition-colors hover:text-body focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
            >
              {site.email}
            </a>
          </p>
        </div>

        <div className="relative aspect-[31/44] h-[clamp(450px,86dvh,878px)] shrink-0 -translate-y-12 sm:-translate-y-20 lg:-translate-y-24">
          <video
            className="hero-video-mask h-full w-full object-contain object-bottom"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            aria-label="Dev Dixit walking while looking at a phone"
          >
            <source src="/images/hero-portrait.mp4" type="video/mp4" />
          </video>
        </div>
      </div>

      <div className="mt-4 flex justify-center">
        <ChevronDown
          className="size-4 text-muted/60"
          strokeWidth={1.5}
          aria-hidden
        />
      </div>
    </section>
  );
}
