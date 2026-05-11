import Metrics from "@/components/Metrics"
import Hero from "@/components/sections/servicos/inventario-digital/Hero"
import HowItWorks from "@/components/sections/servicos/inventario-digital/HowItWorks"
import Applications from "@/components/sections/servicos/inventario-digital/Applications"
import Technologies from "@/components/sections/servicos/inventario-digital/Technologies"
import Projects from "@/components/sections/servicos/inventario-digital/Projects"
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
