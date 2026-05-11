import Image from "next/image"
import SectionReveal from "@/components/SectionReveal"

const tools = [
  {
    title: "Softwares CAD 3D",
    desc: "Utilizamos softwares CAD 3D para modelagem, edição e desenvolvimento de peças técnicas, permitindo ajustes dimensionais, análise de geometrias e preparação de arquivos para fabricação industrial.",
    icon: "/images/modelagem-3d/icone-software-de-modelagem-3d.svg",
  },
  {
    title: "Manufatura Aditiva",
    desc: "Aplicamos tecnologias de manufatura aditiva e impressão 3D para prototipagem rápida, fabricação funcional, validação de projetos e produção sob demanda em diferentes materiais e aplicações.",
    icon: "/images/modelagem-3d/icone-tolerancias-e-ajustes-dimensionais.svg",
  },
  {
    title: "Engenharia Reversa",
    desc: "Empregamos processos de engenharia reversa para reconstrução digital de peças e componentes através de escaneamento 3D e modelagem técnica, facilitando reprodução, melhorias e adaptações.",
    icon: "/images/modelagem-3d/icone-formatos-de-entrega.svg",
  },
  {
    title: "Seleção e análise de Materiais",
    desc: "Realizamos análise técnica de materiais para definir opções compatíveis com resistência mecânica, temperatura, acabamento superficial e necessidade funcional de cada projeto.",
    icon: "/images/modelagem-3d/icone-experiencias-com-materiais.svg",
  },
  {
    title: "Processos Híbridos de Fabricação",
    desc: "Integramos manufatura aditiva com processos complementares de fabricação para otimizar custos, desempenho, produtividade e viabilidade técnica de produtos industriais.",
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
            A consultoria técnica da AVENIR utiliza diferentes tecnologias e ferramentas para apoiar empresas no desenvolvimento de produtos, definição de processos produtivos e tomada de decisões relacionadas à manufatura aditiva. Cada projeto é analisado de forma técnica para identificar os recursos mais adequados conforme a aplicação, material, complexidade da peça e objetivo de fabricação.
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
