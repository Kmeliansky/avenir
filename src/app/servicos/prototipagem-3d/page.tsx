import Metrics from "@/components/Metrics"
import Hero from "@/components/sections/servicos/prototipagem-3d/Hero"
import HowItWorks from "@/components/sections/servicos/prototipagem-3d/HowItWorks"
import Applications from "@/components/sections/servicos/prototipagem-3d/Applications"
import Technologies from "@/components/sections/servicos/prototipagem-3d/Technologies"
import Projects from "@/components/sections/servicos/prototipagem-3d/Projects"
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
