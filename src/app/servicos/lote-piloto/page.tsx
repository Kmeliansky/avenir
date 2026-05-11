import Metrics from "@/components/Metrics"
import Hero from "@/components/sections/servicos/lote-piloto/Hero"
import HowItWorks from "@/components/sections/servicos/lote-piloto/HowItWorks"
import Applications from "@/components/sections/servicos/lote-piloto/Applications"
import Technologies from "@/components/sections/servicos/lote-piloto/Technologies"
import Projects from "@/components/sections/servicos/lote-piloto/Projects"
import Footer from "@/components/Footer"

export default function ServicePage() {
  return (
    <>
      <Hero />
      <Metrics />
      <HowItWorks />
      <Applications />
      <Technologies />
      <Projects />
      <Footer />
    </>
  )
}
