import Image from "next/image"
import SectionReveal from "@/components/SectionReveal"

const tools = [
  {
    title: "Impressão 3D MEx",
    desc: "Tecnologia amplamente utilizada para fabricação de protótipos funcionais, testes de montagem e validações dimensionais com excelente custo-benefício.",
    icon: "/images/modelagem-3d/icone-software-de-modelagem-3d.svg",
  },
  {
    title: "Impressão 3D DLP",
    desc: "Processo indicado para peças com alto nível de detalhe, acabamento refinado e geometrias complexas.",
    icon: "/images/modelagem-3d/icone-tolerancias-e-ajustes-dimensionais.svg",
  },
  {
    title: "Impressão 3D MJF",
    desc: "Tecnologia aplicada na produção de protótipos com maior resistência mecânica, precisão e qualidade superficial.",
    icon: "/images/modelagem-3d/icone-formatos-de-entrega.svg",
  },
  {
    title: "Modelagem CAD 3D",
    desc: "Utilização de softwares CAD para desenvolvimento, ajustes técnicos e preparação dos arquivos para impressão 3D.",
    icon: "/images/modelagem-3d/icone-experiencias-com-materiais.svg",
  },
  {
    title: "Engenharia de Produto",
    desc: "Análise técnica voltada para funcionalidade, desempenho e otimização das peças durante o processo de desenvolvimento e validação.",
    icon: "/images/modelagem-3d/icone-integracao-com-producao.svg",
  },
]

function ToolCard({ title, desc, icon }: { title: string; desc: string; icon: string }) {
  return (
    <article className="flex h-full flex-col justify-start p-6 md:p-8">
      <div className="mb-6">
        <Image
          src={icon}
          alt=""
          width={108}
          height={72}
          className="h-12 w-auto object-contain"
          aria-hidden
        />
      </div>
      <h3 className="mb-3 text-xl font-semibold leading-tight text-zinc-100">{title}</h3>
      <p className="text-base font-medium leading-relaxed text-zinc-400">{desc}</p>
    </article>
  )
}

function PlaceholderCard() {
  return (
    <div className="relative h-full min-h-[220px] overflow-hidden">
      <Image
        src="/images/ferrramentas-e-tecnologias.webp"
        alt="Ferramentas e tecnologias"
        fill
        className="object-cover"
        sizes="(min-width: 768px) 33vw, 100vw"
      />
    </div>
  )
}

export default function Technologies() {
  return (
    <section className="border-y border-zinc-700/50 bg-zinc-900 px-6 py-12 text-white md:py-20">
      <div className="mx-auto max-w-7xl">
        <SectionReveal from="left">
          <div className="mb-12 grid gap-6 md:grid-cols-2 md:items-start">
          <h2 className="text-3xl md:text-h2">Tecnologias e Ferramentas</h2>
          <p className="max-w-xl text-[17px] font-medium text-zinc-300">
            A prototipagem 3D utiliza diferentes tecnologias de fabricação para criar modelos físicos com rapidez, precisão e flexibilidade. Esse processo permite validar peças e produtos antes da produção final, reduzindo falhas de projeto, retrabalho e custos de desenvolvimento.          </p>
          </div>
        </SectionReveal>

        <div className="grid border border-zinc-700/50 md:grid-cols-3">
          <div className="flex flex-col border-b border-zinc-700/50 md:border-b-0 md:border-r">
            <div className="border-b border-zinc-700/50">
              <SectionReveal from="left">
                <ToolCard title={tools[0].title} desc={tools[0].desc} icon={tools[0].icon} />
              </SectionReveal>
            </div>
            <SectionReveal from="right" delayMs={60}>
              <ToolCard title={tools[3].title} desc={tools[3].desc} icon={tools[3].icon} />
            </SectionReveal>
          </div>

          <div className="flex flex-col border-b border-zinc-700/50 md:border-b-0 md:border-r">
            <div className="border-b border-zinc-700/50">
              <SectionReveal from="right" delayMs={30}>
                <ToolCard title={tools[1].title} desc={tools[1].desc} icon={tools[1].icon} />
              </SectionReveal>
            </div>
            <SectionReveal from="left" delayMs={90} className="h-full">
              <PlaceholderCard />
            </SectionReveal>
          </div>

          <div className="flex flex-col">
            <div className="border-b border-zinc-700/50">
              <SectionReveal from="left" delayMs={60}>
                <ToolCard title={tools[2].title} desc={tools[2].desc} icon={tools[2].icon} />
              </SectionReveal>
            </div>
            <SectionReveal from="right" delayMs={120}>
              <ToolCard title={tools[4].title} desc={tools[4].desc} icon={tools[4].icon} />
            </SectionReveal>
          </div>
        </div>
      </div>
    </section>
  )
}
