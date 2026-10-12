import { Home, Mail, MousePointer2, Pencil } from "lucide-react";
import { site } from "@/lib/content";

const navIcons = [
  { icon: Home, label: "Home", active: true },
  { icon: MousePointer2, label: "Work", active: false },
  { icon: Pencil, label: "Writing", active: false },
  { icon: Mail, label: "Contact", active: false },
] as const;

export function Navbar() {
  return (
    <header className="fixed top-0 right-0 left-0 z-50 h-[68px] w-full overflow-visible">
      {/* Blur pane sits behind nav content; blur samples page content underneath */}
      <div className="nav-frost-pane" aria-hidden />
      <nav
        aria-label="Primary"
        className="relative z-10 mx-auto flex h-full max-w-[1400px] items-center justify-between gap-4 px-6 sm:px-10 lg:px-16"
      >
        <div className="flex items-center gap-2">
          <span className="font-[family-name:var(--font-geist-sans)] text-[13px] text-ink">
            {site.name}
          </span>
          <span className="rounded-md bg-gallery px-1.5 py-0.5 font-[family-name:var(--font-geist-sans)] text-[11px] text-muted">
            Portfolio
          </span>
        </div>

        <div className="hidden items-center gap-0.5 rounded-full bg-gallery p-1 sm:flex">
          {navIcons.map(({ icon: Icon, label, active }) => (
            <button
              key={label}
              type="button"
              aria-label={label}
              aria-current={active ? "page" : undefined}
              className={`flex size-8 items-center justify-center rounded-full transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink ${
                active
                  ? "bg-white text-ink shadow-sm"
                  : "text-muted hover:bg-white/70 hover:text-ink hover:shadow-sm"
              }`}
            >
              <Icon className="size-3.5" strokeWidth={1.75} aria-hidden />
            </button>
          ))}
        </div>

        <div className="flex items-center gap-4 font-[family-name:var(--font-geist-sans)] text-[13px] text-muted">
          <a
            href={site.resumeUrl}
            className="transition-colors duration-200 hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
          >
            Resume
          </a>
          <a
            href={site.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors duration-200 hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
          >
            LinkedIn
          </a>
        </div>
      </nav>
    </header>
  );
}
