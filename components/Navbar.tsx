"use client";

import { useEffect, useRef, useState, useSyncExternalStore, type KeyboardEvent, type MouseEvent, type RefObject } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { site } from "@/lib/content";

// Same markup and classes as the case studies' nav (scripts/sync-nav.mjs, public/system/nav.css)
export function Navbar() {
  const pathname = usePathname();
  const onHome = pathname === "/";
  const workInView = useWorkInView();
  const [contact, setContact] = useState("");
  const contactBtn = useRef<HTMLButtonElement>(null);
  const navRef = useRef<HTMLElement>(null);
  useSlidingPill(navRef, `${pathname} ${workInView}`);

  function current(href: string) {
    if (href === "/#work") {
      if (pathname.startsWith("/work")) return "page";
      return onHome && workInView ? "location" : undefined;
    }
    return pathname.startsWith(href) ? "page" : undefined;
  }

  // The name always means home. On the homepage itself, that's the top of the page.
  function goHome(event: MouseEvent<HTMLAnchorElement>) {
    if (!onHome) return;
    event.preventDefault();
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reduced ? "auto" : "smooth" });
    window.history.replaceState(window.history.state, "", "/");
  }

  // On the homepage, Work always scrolls to the work, even when the address already ends in #work
  // (the browser treats a repeat of the same #hash as "already there" and does nothing)
  function goWork(event: MouseEvent<HTMLAnchorElement>) {
    const work = onHome && document.getElementById("work");
    if (!work) return;
    event.preventDefault();
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    work.scrollIntoView({ behavior: reduced ? "auto" : "smooth" });
    window.history.replaceState(window.history.state, "", "/#work");
  }

  // Escape anywhere in the card closes it and puts you back on Contact
  function closeOnEscape(event: KeyboardEvent<HTMLDivElement>) {
    if (event.key !== "Escape") return;
    event.preventDefault();
    setContact("");
    contactBtn.current?.focus();
  }

  return (
    <header className="site-nav">
      <div className="nav-frost-pane" aria-hidden />
      <nav ref={navRef} className="site-nav-in" aria-label="Primary">
        <Link className="nav-name" href="/" onClick={goHome}>
          {site.name}
        </Link>

        <NavigationMenu viewport={false}>
          <NavigationMenuList>
            {site.pages.map((page) => (
              <NavigationMenuItem key={page.href}>
                <NavigationMenuLink asChild>
                  <Link
                    className="nav-item"
                    href={page.href}
                    aria-current={current(page.href)}
                    onClick={page.href === "/#work" ? goWork : undefined}
                  >
                    {page.label}
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Contact: hover, click, tap or keyboard opens the card (Radix handles Escape and focus) */}
        <NavigationMenu
          viewport={false}
          delayDuration={200}
          skipDelayDuration={0}
          value={contact}
          onValueChange={setContact}
          className="nav-ext"
          aria-label="Contact"
        >
          <NavigationMenuList className="nav-contact">
            <NavigationMenuItem value="contact">
              <NavigationMenuTrigger ref={contactBtn} className="nav-contact-btn">
                Contact
              </NavigationMenuTrigger>
              <NavigationMenuContent onKeyDown={closeOnEscape}>
                <ContactCard />
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </nav>
    </header>
  );
}

function ContactCard() {
  const [copied, setCopied] = useState<"" | "copied" | "selected">("");
  const value = useRef<HTMLSpanElement>(null);

  // where the clipboard is blocked, select the address so it can be copied by hand
  async function copy() {
    try {
      await navigator.clipboard.writeText(site.email);
      setCopied("copied");
    } catch {
      if (value.current) window.getSelection()?.selectAllChildren(value.current);
      setCopied("selected");
    }
    setTimeout(() => setCopied(""), 2400);
  }

  return (
    <>
      <div className="nav-row">
        <NavigationMenuLink asChild>
          <a href={`mailto:${site.email}`}>
            <span className="nav-row-label">Email</span>
            <span ref={value} className="nav-row-value">
              {site.email}
            </span>
          </a>
        </NavigationMenuLink>
        <button className="nav-copy" type="button" onClick={copy}>
          <span key={copied} className="swap">
            {copied === "copied" ? "Copied" : copied === "selected" ? "Selected" : "Copy"}
          </span>
        </button>
      </div>
      <NavigationMenuLink asChild>
        <a className="nav-row" href={site.linkedinUrl} target="_blank" rel="noopener noreferrer">
          <span>
            <span className="nav-row-label">LinkedIn</span>
            <span className="nav-row-value">Message me</span>
          </span>
          <ArrowUpRight className="nav-row-arrow" size={16} strokeWidth={2} aria-hidden />
        </a>
      </NavigationMenuLink>
      <NavigationMenuLink asChild>
        <a className="nav-row" href={site.resumeUrl}>
          <span>
            <span className="nav-row-label">Resume</span>
            <span className="nav-row-value">Download PDF</span>
          </span>
          <ArrowDown className="nav-row-arrow" size={16} strokeWidth={2} aria-hidden />
        </a>
      </NavigationMenuLink>
    </>
  );
}

/**
 * The white segment in the switcher slides to the current item instead of jumping.
 * It's one pill behind both items (.nav-switch[data-pill]), placed with --pill-x and --pill-w.
 * When it first appears it fades in where it is, rather than sliding in from the left.
 */
function useSlidingPill(navRef: RefObject<HTMLElement | null>, key: string) {
  const shown = useRef(false);

  useEffect(() => {
    const list = navRef.current?.querySelector<HTMLElement>(".nav-switch");
    if (!list) return;
    list.dataset.pill = "";

    function place() {
      const on = list!.querySelector<HTMLElement>(".nav-item[aria-current]");
      if (!on) {
        list!.style.setProperty("--pill-o", "0");
        shown.current = false;
        return;
      }
      const a = list!.getBoundingClientRect();
      const b = on.getBoundingClientRect();
      if (!shown.current) list!.dataset.pillJump = "";
      list!.style.setProperty("--pill-x", `${b.left - a.left}px`);
      list!.style.setProperty("--pill-w", `${b.width}px`);
      list!.style.setProperty("--pill-o", "1");
      shown.current = true;
      // let the jump land before sliding is allowed again
      requestAnimationFrame(() => requestAnimationFrame(() => delete list!.dataset.pillJump));
    }

    place();
    window.addEventListener("resize", place);
    document.fonts?.ready.then(place);
    return () => window.removeEventListener("resize", place);
  }, [navRef, key]);
}

/** On the homepage, Work lights up while the work section holds the middle of the screen */
function useWorkInView() {
  return useSyncExternalStore(
    (onChange) => {
      window.addEventListener("scroll", onChange, { passive: true });
      window.addEventListener("resize", onChange);
      return () => {
        window.removeEventListener("scroll", onChange);
        window.removeEventListener("resize", onChange);
      };
    },
    () => {
      const work = document.getElementById("work");
      const dark = document.querySelector(".after-dark");
      const middle = window.innerHeight / 2;
      // and goes quiet again once the AI section takes over
      return !!work && work.getBoundingClientRect().top < middle && !(dark && dark.getBoundingClientRect().top < middle);
    },
    () => false
  );
}
