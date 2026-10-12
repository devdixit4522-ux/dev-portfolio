import { site } from "@/lib/content";

export function Marquee() {
  const items = [...site.marqueeWords, ...site.marqueeWords];

  return (
    <div
      className="relative w-full overflow-hidden border-y border-border/60 bg-white"
      aria-hidden="true"
    >
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-white to-transparent sm:w-20" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-white to-transparent sm:w-20" />

      <div className="animate-marquee flex w-max items-center gap-10 py-3 pl-6 sm:gap-12">
        {items.map((word, i) => (
          <span
            key={`${word}-${i}`}
            className="flex shrink-0 items-center gap-10 sm:gap-12"
          >
            <span className="font-[family-name:var(--font-geist-sans)] text-xs font-medium uppercase tracking-[0.14em] text-muted">
              {word}
            </span>
            <span className="size-1 rounded-full bg-border" />
          </span>
        ))}
      </div>
    </div>
  );
}
