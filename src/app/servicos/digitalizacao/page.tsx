import Metrics from "@/components/Metrics"
import Hero from "@/components/sections/servicos/digitalizacao/Hero"
import HowItWorks from "@/components/sections/servicos/digitalizacao/HowItWorks"
import Applications from "@/components/sections/servicos/digitalizacao/Applications"
import Technologies from "@/components/sections/servicos/digitalizacao/Technologies"
import Projects from "@/components/sections/servicos/digitalizacao/Projects"
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
