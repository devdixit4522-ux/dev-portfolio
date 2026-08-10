import Image from "next/image";
import {
  Gamepad2,
  Globe,
  Keyboard,
  LayoutGrid,
  Shapes,
  Sparkles,
  Sun,
} from "lucide-react";
import {
  explorations,
  explorationsIntro,
  type Exploration,
  type ExplorationVariant,
} from "@/lib/content";

const variantIcon: Record<ExplorationVariant, typeof Sparkles> = {
  quote: Sparkles,
  browser: Globe,
  arcade: Gamepad2,
  icons: Shapes,
  dock: LayoutGrid,
  stats: Keyboard,
};

function QuotePreview() {
  return (
    <div className="flex min-h-[300px] items-center justify-center bg-gradient-to-br from-[#fdf6ec] via-[#faf1e4] to-[#f6ead9] px-8 py-14">
      <p className="text-center font-serif text-2xl leading-[1.6] text-[#3d2f27]">
        Go touch some grass.
        <br />
        Get a lil&apos;{" "}
        <Sun
          className="inline-block size-6 -translate-y-0.5 text-amber-500"
          fill="currentColor"
          aria-hidden
        />{" "}
        of sunlight.
        <br />
        Everything else can wait.
      </p>
    </div>
  );
}

function WindowDots() {
  return (
    <div className="flex gap-1.5">
      <span className="size-2.5 rounded-full bg-red-400" />
      <span className="size-2.5 rounded-full bg-amber-400" />
      <span className="size-2.5 rounded-full bg-emerald-400" />
    </div>
  );
}

function BrowserPreview() {
  return (
    <div className="min-h-[360px] bg-[#f4f4f5]">
      <div className="flex items-center gap-3 border-b border-black/5 bg-white px-4 py-3">
        <WindowDots />
        <div className="ml-2 h-5 flex-1 rounded-md bg-black/5" />
      </div>
      <div className="flex items-center justify-between px-6 pt-5 text-[11px] font-medium text-ink">
        <span className="flex items-center gap-1.5">
          <span className="size-4 rounded bg-emerald-500" />
          CodeKarma
        </span>
        <span className="flex gap-3 text-muted">
          <span>Product</span>
          <span>Blog</span>
          <span>Docs</span>
        </span>
      </div>
      <div className="px-6 pb-6 pt-8">
        <p className="font-[family-name:var(--font-bricolage)] text-2xl font-bold leading-tight tracking-[-0.02em] text-ink">
          Production
          <br />
          Intelligence
          <br />
          for the AI Era
        </p>
        <span className="mt-4 inline-block rounded-md bg-ink px-3 py-1.5 text-[11px] font-medium text-white">
          Schedule Demo
        </span>
      </div>
      <div className="mx-4 mb-4 h-24 rounded-lg bg-gradient-to-br from-[#1f2430] to-[#0e1116]" />
    </div>
  );
}

function ArcadePreview() {
  return (
    <div className="relative min-h-[300px] overflow-hidden bg-[#0a0c10]">
      <div className="flex items-center gap-3 border-b border-white/10 px-4 py-3">
        <WindowDots />
      </div>
      <div
        aria-hidden
        className="absolute inset-x-0 top-14 bottom-10 opacity-40"
        style={{
          backgroundImage:
            "repeating-linear-gradient(115deg, rgba(255,255,255,0.12) 0 2px, transparent 2px 16px)",
        }}
      />
      <div className="relative flex h-[188px] flex-col items-center justify-center gap-2">
        <p className="font-[family-name:var(--font-bricolage)] text-3xl font-bold tracking-[-0.03em] text-white">
          tarcade
        </p>
        <p className="font-mono text-[11px] text-emerald-400">
          ▸ insert coin to play
        </p>
      </div>
    </div>
  );
}

function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-border bg-white px-3 py-1.5 text-xs font-medium text-body shadow-sm">
      {children}
    </span>
  );
}

function IconsPreview() {
  return (
    <div className="flex min-h-[200px] flex-col items-center justify-center gap-3 bg-[#f7f7f8] px-6">
      <div className="flex items-center gap-2">
        <span className="flex size-9 items-center justify-center rounded-full border border-border bg-white shadow-sm">
          <LayoutGrid className="size-4 text-ink" aria-hidden />
        </span>
        <span className="flex size-9 items-center justify-center rounded-full border border-border bg-white shadow-sm">
          <Shapes className="size-4 text-ink" aria-hidden />
        </span>
      </div>
      <Chip>Note from Jahanvi</Chip>
    </div>
  );
}

function DockPreview() {
  const icons = [Sparkles, Shapes, LayoutGrid, Globe, Keyboard];
  return (
    <div className="flex min-h-[200px] items-center justify-center bg-[#f1f2f4] px-6">
      <div className="flex items-center gap-4 rounded-2xl bg-ink px-5 py-3 shadow-lg">
        {icons.map((Icon, i) => (
          <Icon key={i} className="size-5 text-white/90" aria-hidden />
        ))}
      </div>
    </div>
  );
}

function StatsPreview() {
  const stats = [
    { label: "TIME", value: "60s" },
    { label: "WPM", value: "92" },
    { label: "ACC", value: "100%" },
  ];
  return (
    <div className="flex min-h-[240px] flex-col items-center justify-center gap-5 bg-gradient-to-br from-[#f5f1ea] to-[#efe7db] px-8">
      <p className="text-center text-sm text-muted">
        The quick brown fox jumps over the lazy dog.
      </p>
      <div className="flex gap-3">
        {stats.map((s) => (
          <div
            key={s.label}
            className="rounded-xl border border-border bg-white px-4 py-3 text-center shadow-sm"
          >
            <p className="font-[family-name:var(--font-bricolage)] text-xl font-bold text-ink">
              {s.value}
            </p>
            <p className="text-[10px] uppercase tracking-wider text-muted">
              {s.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

function Preview({ card }: { card: Exploration }) {
  if (card.image) {
    return (
      <div className="relative min-h-[240px] w-full">
        <Image
          src={card.image}
          alt={card.imageAlt ?? ""}
          width={800}
          height={600}
          className="h-auto w-full object-cover"
        />
      </div>
    );
  }

  switch (card.variant) {
    case "quote":
      return <QuotePreview />;
    case "browser":
      return <BrowserPreview />;
    case "arcade":
      return <ArcadePreview />;
    case "icons":
      return <IconsPreview />;
    case "dock":
      return <DockPreview />;
    case "stats":
      return <StatsPreview />;
  }
}

function Card({ card }: { card: Exploration }) {
  const Icon = variantIcon[card.variant];

  return (
    <article className="mb-3 break-inside-avoid overflow-hidden rounded-xl border border-border bg-white shadow-sm transition-shadow duration-200 hover:shadow-md">
      <Preview card={card} />
      <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 border-t border-border/70 px-3.5 py-2.5 text-xs">
        <span className="flex size-5 shrink-0 items-center justify-center rounded-[6px] bg-ink/5">
          <Icon className="size-3 text-ink" aria-hidden />
        </span>
        {card.tags.map((tag) => (
          <span key={tag} className="text-muted">
            {tag}
          </span>
        ))}
        {card.link && (
          <a
            href={`https://${card.link}`}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-auto inline-flex items-center gap-1.5 font-medium text-ink transition-colors hover:text-body focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
          >
            <span className="size-1.5 rounded-full bg-emerald-500" />
            {card.link}
          </a>
        )}
      </div>
    </article>
  );
}

export function AIExplorations() {
  return (
    <section
      id="ai"
      className="w-full bg-background"
      aria-labelledby="ai-explorations-heading"
    >
      <div className="mx-auto w-full max-w-[1100px] px-5 py-14 sm:px-8 lg:px-10 lg:py-20">
        <header className="mb-8 flex flex-col items-center gap-3 text-center sm:mb-10">
          <h2
            id="ai-explorations-heading"
            className="font-[family-name:var(--font-bricolage)] text-2xl font-bold leading-[1.25] tracking-[-0.03em] text-ink sm:text-[32px]"
          >
            {explorationsIntro.titleLead}
            <br />
            <span className="font-[family-name:var(--font-script)] text-[1.15em] font-semibold tracking-normal">
              {explorationsIntro.titleScript}
            </span>{" "}
            {explorationsIntro.titleTail}
          </h2>
          <div className="flex flex-col gap-1 text-xs text-muted sm:text-sm">
            <p>{explorationsIntro.meta}</p>
            <p>{explorationsIntro.note}</p>
          </div>
        </header>

        <div className="columns-1 gap-3 sm:columns-2 lg:columns-3">
          {explorations.map((card) => (
            <Card key={card.id} card={card} />
          ))}
        </div>
      </div>
    </section>
  );
}
