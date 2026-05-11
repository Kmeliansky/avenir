'use client'

import { useEffect, useRef, useState } from "react"
import SectionReveal from "@/components/SectionReveal"

type Metric = {
  value: number
  label: string
  format: (n: number) => string
}

const metrics: Metric[] = [
  {
    value: 250,
    label: "Projetos desenvolvidos, prototipados, fabricados e entregues",
    format: (n) => `+${n}`,
  },
  {
    value: 50,
    label: "Peças produzidas com manufatura aditiva",
    format: (n) => `+ de ${n} mil`,
  },
  {
    value: 200,
    label: "Clientes já atendidos em mais de 8 anos de experiência",
    format: (n) => `+${n}`,
  },
  {
    value: 12,
    label: "diferentes setores de atuação",
    format: (n) => `+${n}`,
  },
]

export default function Metrics() {
  const [counts, setCounts] = useState(metrics.map(() => 0))
  const [started, setStarted] = useState(false)
  const sectionRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const node = sectionRef.current
    if (!node || started) return

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setStarted(true)
          observer.disconnect()
        }
      },
      { threshold: 0.35 }
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [started])

  useEffect(() => {
    if (!started) return

    const duration = 1400
    const start = performance.now()
    let frameId = 0

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1)
      setCounts(metrics.map((metric) => Math.floor(metric.value * progress)))
      if (progress < 1) frameId = requestAnimationFrame(tick)
    }

    frameId = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frameId)
  }, [started])

  return (
    <section ref={sectionRef} className="border-y border-zinc-700/50 bg-zinc-900 px-6 py-12 text-white md:py-16">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4 lg:gap-10">
          {metrics.map((metric, index) => (
            <SectionReveal key={metric.label} from={index % 2 === 0 ? "left" : "right"} delayMs={index * 40}>
              <div>
              <h3 className="mb-2 text-2xl md:text-h5">{metric.format(counts[index] ?? 0)}</h3>
              <p className="text-zinc-300">{metric.label}</p>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
