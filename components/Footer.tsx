import { site } from "@/lib/content";

const link = "hit text-soft no-underline transition-colors duration-[180ms] hover:text-ink";

// One grey line above a hairline, as at the end of every case study, with the ways to reach Dev.
// On the homepage it sits in the dark with the AI section (.site-foot in globals.css).
export function Footer() {
  return (
    <footer className="site-foot mt-[var(--gap-block)] border-t border-hair pt-7 pb-10 text-[14px] tracking-normal text-soft">
      <div className="page-width flex flex-wrap justify-between gap-x-6 gap-y-3">
        <span>
          {site.name} · {site.role} · {site.site}
        </span>
        <span className="flex flex-wrap gap-x-5 gap-y-1">
          <a className={link} href={`mailto:${site.email}`}>
            {site.email}
          </a>
          <a className={link} href={site.linkedinUrl} target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a className={link} href={site.resumeUrl}>
            Resume
          </a>
        </span>
      </div>
    </footer>
  );
}
