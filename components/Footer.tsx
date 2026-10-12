import { site } from "@/lib/content";

// One grey line above a hairline, as at the end of every case study
export function Footer() {
  return (
    <footer className="mt-[120px] border-t border-hair pt-7 pb-10 text-[14px] tracking-normal text-mute">
      <div className="mx-auto w-full max-w-[1680px] px-[var(--gutter)]">
        {site.name} · {site.role} · {site.site}
      </div>
    </footer>
  );
}
