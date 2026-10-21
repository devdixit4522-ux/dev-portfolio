import type { Metadata } from "next";
import { Caveat } from "next/font/google";
import localFont from "next/font/local";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { Reveal } from "@/components/Reveal";
import { site } from "@/lib/content";
import "./globals.css";

// The same files the case studies load, from the Case Study System
const nimbus = localFont({
  src: [
    { path: "../public/system/fonts/NimbusSans-Regular.otf", weight: "400", style: "normal" },
    { path: "../public/system/fonts/NimbusSans-Bold.otf", weight: "700", style: "normal" },
  ],
  variable: "--font-nimbus",
  display: "swap",
  fallback: ["Helvetica Neue", "Helvetica"],
});

// The system's hand-note face (--hand), as the case studies' annotated screens use it
const caveat = Caveat({
  subsets: ["latin"],
  weight: "500",
  variable: "--font-caveat",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dev Dixit, product designer",
  description:
    "Product designer based in India. Case studies on Groww and BookMyShow, and AI side projects.",
};

// Back to the homepage from a case study: put it where you left it while the page is still loading,
// so it's never drawn anywhere else first. ScrollMemory keeps the place as you scroll.
const RESTORE_HOME = `(function(){try{
if(location.pathname!=="/")return;
var n=performance.getEntriesByType("navigation")[0];
if(!n||n.type!=="back_forward")return;
var y=Number(sessionStorage.getItem("home-scroll"));
if(y>0)window.scrollTo({top:y,behavior:"instant"});
}catch(e){}})()`;

// First visit in a tab: a short name-and-veil intro (styles in public/system/shared.css). The same
// script is written into each case study by scripts/sync-nav.mjs; both share one flag, so a tab sees it once.
const INTRO = `(function(){try{if(sessionStorage.getItem("cs-intro"))return;sessionStorage.setItem("cs-intro","1")}catch(e){return}
if(matchMedia("(prefers-reduced-motion: reduce)").matches)return;
var h=document.documentElement;h.classList.add("cs-intro");
addEventListener("pagereveal",function(e){if(e.viewTransition)h.classList.remove("cs-intro")});})()`;

const SPECULATION = JSON.stringify({
  prerender: [{ where: { href_matches: ["/work/*", "/lab/*"] }, eagerness: "moderate" }],
});

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    // data-scroll-behavior: page changes jump to the top; only in-page links scroll smoothly
    <html lang="en" className={`${nimbus.variable} ${caveat.variable}`} data-scroll-behavior="smooth" suppressHydrationWarning>
      <body>
        <script dangerouslySetInnerHTML={{ __html: INTRO }} />
        <div className="cs-intro-veil" aria-hidden="true">
          <span className="cs-intro-name">
            <span>{site.name}</span>
          </span>
        </div>
        <a className="skip" href="#main">
          Skip to content
        </a>
        <Navbar />
        {children}
        <Footer />
        {/* after the whole page, so its full height is known */}
        <script dangerouslySetInnerHTML={{ __html: RESTORE_HOME }} />
        <Reveal />
        {/* Case studies are separate pages. Chrome and Edge start building one in the background
            as soon as you hover or press its link, so the tile can grow into a page that's already drawn. */}
        <script type="speculationrules" dangerouslySetInnerHTML={{ __html: SPECULATION }} />
      </body>
    </html>
  );
}
