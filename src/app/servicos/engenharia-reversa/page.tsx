import Metrics from "@/components/Metrics"
import Hero from "@/components/sections/servicos/engenharia-reversa/Hero"
import HowItWorks from "@/components/sections/servicos/engenharia-reversa/HowItWorks"
import Applications from "@/components/sections/servicos/engenharia-reversa/Applications"
import Technologies from "@/components/sections/servicos/engenharia-reversa/Technologies"
import Projects from "@/components/sections/servicos/engenharia-reversa/Projects"
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
