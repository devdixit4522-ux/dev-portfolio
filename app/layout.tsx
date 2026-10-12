import type { Metadata } from "next";
import localFont from "next/font/local";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { Reveal } from "@/components/Reveal";
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

export const metadata: Metadata = {
  title: "Dev Dixit, product designer",
  description:
    "Product designer based in India. Case studies on Groww and BookMyShow, and AI concept projects.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={nimbus.variable}>
      <body>
        <a className="skip" href="#main">
          Skip to content
        </a>
        <Navbar />
        {children}
        <Footer />
        <Reveal />
      </body>
    </html>
  );
}
