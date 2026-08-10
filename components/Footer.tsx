import { site } from "@/lib/content";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-border bg-white">
      <div className="mx-auto flex w-full max-w-[1100px] flex-col gap-7 px-5 py-10 sm:px-8 lg:flex-row lg:items-end lg:justify-between lg:px-10 lg:py-12">
        <div className="flex flex-col gap-2.5">
          <p className="font-[family-name:var(--font-bricolage)] text-xl font-bold tracking-[-0.03em] text-ink sm:text-2xl">
            {site.name}
          </p>
          <p className="max-w-md text-sm text-body">
            Product designer shaping AI products that feel clear, calm, and
            trustworthy.
          </p>
          <a
            href={`mailto:${site.email}`}
            className="w-fit text-sm font-semibold text-ink underline underline-offset-4 transition-colors hover:text-body focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
          >
            {site.email}
          </a>
        </div>

        <div className="flex flex-col gap-2.5 sm:items-end">
          <div className="flex flex-wrap gap-4 font-[family-name:var(--font-geist-sans)] text-xs text-pale-sky sm:text-sm">
            <a
              href={site.resumeUrl}
              className="underline underline-offset-4 transition-colors hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
            >
              Resume
            </a>
            <a
              href={site.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4 transition-colors hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
            >
              LinkedIn
            </a>
            <a
              href="#ai"
              className="underline underline-offset-4 transition-colors hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
            >
              AI Explorations
            </a>
          </div>
          <p className="text-xs text-muted">
            © {year} {site.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
