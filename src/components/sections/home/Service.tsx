"use client"

import Link from "next/link"
import { useState, useCallback, useLayoutEffect } from "react"
import useEmblaCarousel from "embla-carousel-react"

const services = [
  { title: "Desenvolvimento de Produto", href: "/servicos/desenvolvimento-de-produto", desc: "Desenvolvimento e aprimoramento de produtos sob medida, do conceito ao projeto final pronto para fabricação." },
  { title: "Digitalização", href: "/servicos/digitalizacao", desc: "Conversão de peças físicas em modelos digitais para edição, análise ou reprodução." },
  { title: "Modelagem 3D", href: "/servicos/modelagem-3d", desc: "Modelagem 3D em CAD para criar e ajustar peças com foco no uso final e fabricação." },
  { title: "Engenharia Reversa", href: "/servicos/engenharia-reversa", desc: "Reconstrução digital de peças e sistemas com precisão, pronta para melhoria ou fabricação." },
  { title: "Prototipagem", href: "/servicos/prototipagem-3d", desc: "Produção de protótipos funcionais ou visuais para testes e validações antes da fabricação." },
  { title: "Lote Piloto", href: "/servicos/lote-piloto", desc: "Produção de pequenas séries para testes de engenharia, validação e preparação para escala." },
  { title: "Fabricação de Peças de Uso Final", href: "/servicos/fabricacao-de-pecas-de-uso-final", desc: "Fabricação sob demanda de peças finais, de unidades a lotes, por manufatura aditiva ou híbrida." },
  { title: "Ferramental Rápido", href: "/servicos/ferramental-rapido", desc: "Fabricação de moldes, gabaritos e dispositivos para testes e pequenas séries, sem usinagem." },
  { title: "Inventário Digital", href: "/servicos/inventario-digital", desc: "Organização e digitalização de peças, com acervo digital para produção sob demanda." },
  { title: "Consultoria", href: "/servicos/consultoria", desc: "Suporte técnico em projetos, processos, materiais e fabricação com manufatura aditiva." },
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

          <p className="text-[17px] font-medium text-zinc-300">
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
                  <article
                    className="relative flex h-full min-h-[390px] flex-col overflow-hidden border border-zinc-600/55 px-9 py-8 transition-colors duration-300 hover:border-zinc-400/70"
                    style={{ clipPath: "polygon(12% 0, 100% 0, 100% 88%, 88% 100%, 0 100%, 0 15%)" }}
                  >
                    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_74%_7%,rgba(255,255,255,0.18),transparent_36%),linear-gradient(145deg,#171717_0%,#060606_53%,#1a1a1a_100%)]" />
                    <div className="pointer-events-none absolute -left-20 bottom-0 h-44 w-64 bg-white/10 blur-3xl" />
                    <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.03)_0%,rgba(255,255,255,0)_30%,rgba(255,255,255,0.04)_100%)]" />

                    <div className="relative mb-16 h-14 w-14">
                      <div className="absolute left-2 top-2 h-10 w-10 rounded-sm border border-zinc-500/35 bg-zinc-300/50" />
                      <div className="absolute left-1 top-1 h-10 w-10 rounded-sm border border-zinc-500/45 bg-zinc-200/85 shadow-[0_10px_18px_rgba(0,0,0,0.45)]" />
                      <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-sm border border-zinc-400/70 bg-zinc-100 text-zinc-900 shadow-[0_8px_16px_rgba(0,0,0,0.35)]">
                        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                          <path d="M9 4H4v5" />
                          <path d="M4 9l4-4" />
                          <path d="M15 20h5v-5" />
                          <path d="M20 15l-4 4" />
                          <path d="M20 9V4h-5" />
                          <path d="M15 4l5 5" />
                          <path d="M4 15v5h5" />
                          <path d="M9 20l-5-5" />
                        </svg>
                      </div>
                    </div>

                    <h3 className="relative mb-5 text-[clamp(2.2rem,1.95rem+1vw,2.85rem)] font-semibold leading-[1.02] tracking-[-0.025em] text-zinc-100">
                      {item.title}
                    </h3>

                    <Link
                      href={item.href}
                      className="relative mt-auto text-[clamp(1.85rem,1.45rem+1.2vw,2.35rem)] font-heading font-medium leading-[1.04] tracking-[-0.02em] text-zinc-300 transition-colors hover:text-white"
                    >
                      Conheça a solução
                    </Link>
                  </article>
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
