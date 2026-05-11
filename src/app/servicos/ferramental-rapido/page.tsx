import Metrics from "@/components/Metrics"
import Hero from "@/components/sections/servicos/ferramental-rapido/Hero"
import HowItWorks from "@/components/sections/servicos/ferramental-rapido/HowItWorks"
import Applications from "@/components/sections/servicos/ferramental-rapido/Applications"
import Technologies from "@/components/sections/servicos/ferramental-rapido/Technologies"
import Projects from "@/components/sections/servicos/ferramental-rapido/Projects"
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
