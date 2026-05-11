import Metrics from "@/components/Metrics"
import Hero from "@/components/sections/servicos/consultoria/Hero"
import HowItWorks from "@/components/sections/servicos/consultoria/HowItWorks"
import Applications from "@/components/sections/servicos/consultoria/Applications"
import Technologies from "@/components/sections/servicos/consultoria/Technologies"
import Projects from "@/components/sections/servicos/consultoria/Projects"
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
