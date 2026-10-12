import { AIExplorations } from "@/components/AIExplorations"
import { CaseStudiesShadcn } from "@/components/CaseStudies.shadcn"
import { Footer } from "@/components/Footer"
import { Hero } from "@/components/Hero"
import { Marquee } from "@/components/Marquee"
import { Navbar } from "@/components/Navbar"

export default function ShadcnPreviewPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Marquee />
        <CaseStudiesShadcn />
        <AIExplorations />
      </main>
      <Footer />
    </>
  )
}
