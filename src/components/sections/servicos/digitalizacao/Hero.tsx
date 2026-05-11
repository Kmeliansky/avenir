import Image from "next/image"
import SectionReveal from "@/components/SectionReveal"

type HeroProps = {
  title?: string
}

export default function Hero({ title = "Digitalização" }: HeroProps) {
  return (
    <section className="border-y border-zinc-700/50 bg-zinc-900 px-6 py-16 text-white md:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-10 md:grid-cols-2 md:gap-12">

        <SectionReveal from="left">
          <h1 className="mb-6 text-4xl md:text-h1">
            {title}
          </h1>

          <p className="mb-8 text-[17px] font-medium text-zinc-300">
            Convertemos peças físicas em arquivos digitais por escaneamento 3D ou medição manual, gerando modelos para edição, análise ou reprodução..
          </p>

          <div className="flex flex-wrap gap-4">
            <button className="font-heading rounded-lg bg-white px-6 py-3 font-medium text-zinc-900 transition hover:bg-zinc-200">
              Orçamento rápido
            </button>
            <button className="font-heading rounded-lg border border-zinc-600 px-6 py-3 font-medium text-white transition hover:bg-zinc-800">
              Materiais impressos
            </button>
          </div>
        </SectionReveal>

        <SectionReveal from="right" delayMs={80}>
          <div className="flex justify-center md:justify-end">
          <Image
            src="/images/modelagem-3d/imagem-de-modelagem-3d.webp"
            alt="Modelagem 3D"
            className="w-full max-w-md rounded-xl object-cover"
            width={500}
            height={400}
          />
          </div>
        </SectionReveal>

      </div>
    </section>
  )
}
