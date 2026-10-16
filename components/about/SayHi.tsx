"use client";

import { useRef, useState } from "react";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { wordSplitter } from "@/components/Words";
import { site } from "@/lib/content";

const link = "hit inline-flex items-center gap-1.5 no-underline transition-colors duration-[180ms]";

/**
 * The sign-off: the email, big, with a Copy button.
 * On About, a hand note explains the button. At the end of the homepage it sits in the dark, without the note.
 */
export function SayHi({ inDark = false }: { inDark?: boolean }) {
  const id = inDark ? "say-hi-home" : "say-hi";
  const reveal = inDark ? "" : "rv"; // the dark section brings its own content into focus
  const tone = inDark ? "text-[var(--night-soft)] hover:text-white" : "text-soft hover:text-ink";
  const [copied, setCopied] = useState<"" | "copied" | "selected">("");
  const timer = useRef<ReturnType<typeof setTimeout>>(undefined);
  const email = useRef<HTMLAnchorElement>(null);

  // where the clipboard is blocked, select the address so it can be copied by hand
  async function copy() {
    try {
      await navigator.clipboard.writeText(site.email);
      setCopied("copied");
    } catch {
      if (email.current) window.getSelection()?.selectAllChildren(email.current);
      setCopied("selected");
    }
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setCopied(""), 2400);
  }

  return (
    <section aria-labelledby={id} className={cn("mt-[var(--gap-block)]", inDark && "on-night")}>
      <h2 id={id} className={cn("statement", reveal)}>
        {inDark ? (
          // in the dark, it lights up word by word as you scroll to it (.lw)
          <LitWords />
        ) : (
          <>
            <strong>Say hi.</strong> <span className="quiet">Tell me what you&apos;re building.</span>
          </>
        )}
      </h2>
      <div className={cn(reveal, "mt-8 flex flex-wrap items-center gap-x-5 gap-y-4")}>
        <a ref={email} className="signoff-email" href={`mailto:${site.email}`}>
          {site.email}
        </a>
        <span className="flex items-center gap-2">
          <Button
            type="button"
            variant="secondary"
            onClick={copy}
            className={cn(
              "h-auto rounded-full px-[18px] py-[11px] text-[15px] font-normal tracking-normal",
              inDark ? "bg-[var(--night-fill)] text-white hover:bg-[var(--night-fill-on)]" : "hover:bg-bubble"
            )}
          >
            {/* a new word blurs in, so the swap reads as one change */}
            <span key={copied} className="swap">
              {copied === "copied" ? "Copied" : copied === "selected" ? "Selected" : "Copy"}
            </span>
          </Button>
          <span className="sr-only" aria-live="polite">
            {copied === "copied" ? "Copied" : copied === "selected" ? "Selected, now press copy" : ""}
          </span>
        </span>
      </div>
      <p className={cn(reveal, "mt-8 flex flex-wrap gap-x-6 gap-y-2 text-[15px] tracking-normal")}>
        <a className={cn(link, tone)} href={site.linkedinUrl} target="_blank" rel="noopener noreferrer">
          LinkedIn <ArrowUpRight size={16} aria-hidden />
        </a>
        <a className={cn(link, tone)} href={site.resumeUrl}>
          Resume <ArrowDown size={16} aria-hidden />
        </a>
      </p>
    </section>
  );
}

function LitWords() {
  const { words } = wordSplitter("lw");
  return (
    <>
      <strong>{words("Say hi.")}</strong> <span className="quiet">{words("Tell me what you're building.")}</span>
    </>
  );
}
