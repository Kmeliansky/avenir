import Image from "next/image"
import SectionReveal from "@/components/SectionReveal"

const tools = [
  {
    title: "Modelagem CAD 3D",
    desc: "Utilizamos softwares CAD 3D para desenvolver peças e produtos com precisão dimensional, permitindo ajustes técnicos, montagem virtual e preparação para fabricação.",
    icon: "/images/modelagem-3d/icone-software-de-modelagem-3d.svg",
  },
  {
    title: "Manufatura Aditiva",
    desc: "Aplicamos tecnologias de impressão 3D e manufatura aditiva na prototipagem, validação funcional e produção de componentes técnicos sob demanda.",
    icon: "/images/modelagem-3d/icone-tolerancias-e-ajustes-dimensionais.svg",
  },
  {
    title: "Prototipagem Técnica",
    desc: "Produção de protótipos físicos para testes de encaixe, validação dimensional, análise funcional e aprovação antes da fabricação final.",
    icon: "/images/modelagem-3d/icone-formatos-de-entrega.svg",
  },
  {
    title: "Engenharia de Produto",
    desc: "Processos técnicos voltados para definição de materiais, análise estrutural e viabilidade de fabricação conforme a aplicação do produto.",
    icon: "/images/modelagem-3d/icone-experiencias-com-materiais.svg",
  },
  {
    title: "Processos Complementares",
    desc: "Integração entre manufatura aditiva e métodos convencionais para otimizar acabamento, desempenho e estratégia de produção industrial.",
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
            O desenvolvimento de produto envolve diferentes tecnologias aplicadas na criação, validação e preparação de peças e componentes para fabricação. A AVENIR utiliza ferramentas digitais e processos produtivos que permitem maior precisão técnica, agilidade no desenvolvimento e adaptação conforme a necessidade de cada projeto industrial.
          </p>
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
