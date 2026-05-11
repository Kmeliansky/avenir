import Metrics from "@/components/Metrics"
import Hero from "@/components/sections/servicos/fabricacao-de-pecas-de-uso-final/Hero"
import HowItWorks from "@/components/sections/servicos/fabricacao-de-pecas-de-uso-final/HowItWorks"
import Applications from "@/components/sections/servicos/fabricacao-de-pecas-de-uso-final/Applications"
import Technologies from "@/components/sections/servicos/fabricacao-de-pecas-de-uso-final/Technologies"
import Projects from "@/components/sections/servicos/fabricacao-de-pecas-de-uso-final/Projects"
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
