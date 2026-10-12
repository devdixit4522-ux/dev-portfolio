"use client";

import { useState } from "react";
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
  const isCurrent = (href: string) =>
    href === "/" ? pathname === "/" || pathname.startsWith("/work") : pathname.startsWith(href);

  return (
    <header className="site-nav">
      <div className="nav-frost-pane" aria-hidden />
      <nav className="site-nav-in" aria-label="Primary">
        <Link className="nav-name" href="/">
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
                    aria-current={isCurrent(page.href) ? "page" : undefined}
                  >
                    {page.label}
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
            <NavigationMenuItem>
              <NavigationMenuTrigger>Contact</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ContactCard />
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <div className="nav-ext">
          <a href={site.resumeUrl}>Resume</a>
          <a href={site.linkedinUrl} target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
        </div>
      </nav>
    </header>
  );
}

function ContactCard() {
  const [copied, setCopied] = useState(false);

  async function copy() {
    if (!navigator.clipboard) return;
    await navigator.clipboard.writeText(site.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <>
      <div className="nav-row">
        <NavigationMenuLink asChild>
          <a href={`mailto:${site.email}`}>
            <span className="nav-row-label">Email</span>
            <span className="nav-row-value">{site.email}</span>
          </a>
        </NavigationMenuLink>
        <button className="nav-copy" type="button" onClick={copy}>
          {copied ? "Copied" : "Copy"}
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
