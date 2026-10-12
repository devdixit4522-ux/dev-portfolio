import { AIExplorations } from "@/components/AIExplorations";
import { CaseStudies } from "@/components/CaseStudies";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { Navbar } from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Marquee />
        <CaseStudies />
        <AIExplorations />
      </main>
      <Footer />
    </>
  );
}
