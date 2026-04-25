import { HeroCarousel } from "@/components/sections/HeroCarousel"
import { BookingQuickSearch } from "@/components/sections/BookingQuickSearch"
import { ValueProposition } from "@/components/sections/ValueProposition"
import { CabanasPreview } from "@/components/sections/CabanasPreview"
import { ExperienciasGrid } from "@/components/sections/ExperienciasGrid"
import { GastronomiaSection } from "@/components/sections/GastronomiaSection"
import { TestimonialsSection } from "@/components/sections/TestimonialsSection"
import { CTASection } from "@/components/sections/CTASection"
import { VideoSection } from "@/components/sections/VideoSection"

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <HeroCarousel />
      <BookingQuickSearch />
      <VideoSection />
      <CabanasPreview />
      <ValueProposition />
      <ExperienciasGrid />
      <GastronomiaSection />
      <TestimonialsSection />
      <CTASection />
    </main>
  )
}
