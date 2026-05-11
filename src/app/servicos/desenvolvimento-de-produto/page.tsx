import Metrics from "@/components/Metrics"
import Hero from "@/components/sections/servicos/desenvolvimento-de-produto/Hero"
import HowItWorks from "@/components/sections/servicos/desenvolvimento-de-produto/HowItWorks"
import Applications from "@/components/sections/servicos/desenvolvimento-de-produto/Applications"
import Technologies from "@/components/sections/servicos/desenvolvimento-de-produto/Technologies"
import Projects from "@/components/sections/servicos/desenvolvimento-de-produto/Projects"
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
