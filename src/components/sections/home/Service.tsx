"use client"

import { useState, useCallback, useLayoutEffect } from "react"
import useEmblaCarousel from "embla-carousel-react"

const services = [
  { title: "Desenvolvimento de Produto", desc: "Desenvolvimento e aprimoramento de produtos sob medida, do conceito ao projeto final pronto para fabricação." },
  { title: "Digitalização", desc: "Conversão de peças físicas em modelos digitais para edição, análise ou reprodução." },
  { title: "Modelagem 3D", desc: "Modelagem 3D em CAD para criar e ajustar peças com foco no uso final e fabricação." },
  { title: "Engenharia Reversa", desc: "Reconstrução digital de peças e sistemas com precisão, pronta para melhoria ou fabricação." },
  { title: "Prototipagem", desc: "Produção de protótipos funcionais ou visuais para testes e validações antes da fabricação." },
  { title: "Lote Piloto", desc: "Produção de pequenas séries para testes de engenharia, validação e preparação para escala." },
  { title: "Fabricação de Peças de Uso Final", desc: "Fabricação sob demanda de peças finais, de unidades a lotes, por manufatura aditiva ou híbrida." },
  { title: "Ferramental Rápido", desc: "Fabricação de moldes, gabaritos e dispositivos para testes e pequenas séries, sem usinagem." },
  { title: "Inventário Digital", desc: "Organização e digitalização de peças, com acervo digital para produção sob demanda." },
  { title: "Consultoria", desc: "Suporte técnico em projetos, processos, materiais e fabricação com manufatura aditiva." },
]

export default function Services() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })

  const [selectedIndex, setSelectedIndex] = useState(0)
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([])

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  useLayoutEffect(() => {
    if (!emblaApi) return

    const update = () => {
      setScrollSnaps(emblaApi.scrollSnapList())
      setSelectedIndex(emblaApi.selectedScrollSnap())
    }

    update()

    emblaApi.on("select", update)
    emblaApi.on("reInit", update)

    return () => {
      emblaApi.off("select", update)
      emblaApi.off("reInit", update)
    }
  }, [emblaApi])

  return (
    <section className="bg-zinc-900 px-6 py-20 text-white">
      <div className="mx-auto max-w-7xl">
        
        {/* Topo */}
        <div className="mb-12 grid gap-6 md:grid-cols-2">
          <h2 className="text-3xl font-semibold">
            O que fazemos
          </h2>

          <p className="text-zinc-300">
            Com a sinergia de tecnologias como Escaneamento e Modelagem 3D, Manufatura Aditiva, Corte a Laser, Injeção Plástica de bancada e Pintura Técnica, oferecemos soluções completas em desenvolvimento, prototipagem e fabricação de produtos.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative">
          
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {services.map((item, index) => (
                <div
                  key={index}
                  className="min-w-0 flex-[0_0_100%] px-3 sm:flex-[0_0_50%] lg:flex-[0_0_25%]"
                >
                  <div className="h-full rounded-xl bg-zinc-800 p-6">
                    
                    <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-zinc-700">
                      ⚙️
                    </div>

                    <h3 className="mb-2 text-xl font-semibold">
                      {item.title}
                    </h3>

                    <p className="text-zinc-300">
                      {item.desc}
                    </p>

                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Setas */}
          <button
            onClick={scrollPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 rounded-full bg-white p-2 text-black"
          >
            ←
          </button>

          <button
            onClick={scrollNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 rounded-full bg-white p-2 text-black"
          >
            →
          </button>

          {/* Bolinhas */}
          <div className="mt-8 flex justify-center gap-2">
            {scrollSnaps.map((_, index) => (
              <button
                key={index}
                onClick={() => emblaApi && emblaApi.scrollTo(index)}
                className={`h-2 w-2 rounded-full ${
                  index === selectedIndex ? "bg-white" : "bg-zinc-600"
                }`}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  )
}