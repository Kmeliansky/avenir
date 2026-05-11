import SectionReveal from "@/components/SectionReveal"

const steps = [
  {
    number: "1",
    title: "Levantamento de Rquisitos",
    desc: "Análise técnica e funcional do produto para definir aplicação, desempenho, materiais e necessidades de fabricação.",
  },
  {
    number: "2",
    title: "Modelagem e Desenvolvimento 3D",
    desc: "Criação do modelo digital da peça ou produto com foco em funcionalidade, montagem e viabilidade produtiva.",
  },
  {
    number: "3",
    title: "Estudo de Viabilidade",
    desc: "Avaliação técnica do projeto considerando custos, materiais, processos produtivos e possibilidades de fabricação.",
  },
  {
    number: "4",
    title: "Prototipagem e Validação",
    desc: "Produção de protótipos para testes funcionais, validação dimensional e ajustes antes da fabricação final.",
  },
  {
    number: "5",
    title: "Preparação para Fabricação",
    desc: "Definição técnica do produto com arquivos, especificações e estrutura necessária para produção industrial.",
  },
]

export default function HowItWorks() {
  const cardStyle = {
    background:
      "linear-gradient(101deg, #363636 10.59%, #0A0A0A 47.85%, #2e2e2e 96.78%)",
    clipPath:
      "polygon(18px 0, 100% 0, 100% calc(100% - 18px), calc(100% - 18px) 100%, 0 100%, 0 18px)",
  } as const

  return (
    <section className="border-y border-zinc-700/50 bg-zinc-900 px-6 py-12 text-white md:py-20">
      <div className="mx-auto max-w-7xl">

        <SectionReveal from="left">
          <div className="mb-12 grid gap-6 md:grid-cols-2 md:items-end">
          <h2 className="text-3xl md:text-h2">
            Como funciona <br /> o nosso serviço
          </h2>
          <p className="text-[17px] font-medium text-zinc-300">
            O desenvolvimento de produto é conduzido a partir de requisitos técnicos e funcionais, abrangendo desde a concepção até a definição do projeto para fabricação. O processo envolve análise de aplicação, definição de materiais, estudo de viabilidade e preparação para produção. As tecnologias utilizadas incluem modelagem 3D, manufatura aditiva, prototipagem e processos complementares conforme a necessidade do projeto. validação, apresentação ou fabricação.
          </p>
          </div>
        </SectionReveal>

        <div className="grid gap-6 sm:grid-cols-2">
          {steps.slice(0, 4).map((step, index) => (
            <SectionReveal key={step.number} from={index % 2 === 0 ? "left" : "right"} delayMs={index * 50}>
              <div className="relative">
              <div
                className="pointer-events-none absolute inset-0"
                style={{ ...cardStyle, border: "1px solid #4F4F4F" }}
              />
              <div className="relative p-6 md:p-7">
                <span className="mb-4 block text-5xl font-bold text-zinc-600">{step.number}</span>
                <h3 className="mb-3 text-lg font-semibold">{step.title}</h3>
                <p className="text-[17px] font-medium text-zinc-300">{step.desc}</p>
              </div>
              </div>
            </SectionReveal>
          ))}
        </div>

        <div className="mt-6">
          <SectionReveal from="left" delayMs={120}>
            <div className="relative">
            <div
              className="pointer-events-none absolute inset-0"
              style={{ ...cardStyle, border: "1px solid #4F4F4F" }}
            />
            <div className="relative p-6 md:flex md:items-start md:gap-8 md:p-7">
              <span className="mb-4 block text-5xl font-bold text-zinc-600 md:mb-0 md:shrink-0">
                {steps[4].number}
              </span>
              <div>
                <h3 className="mb-3 text-lg font-semibold">{steps[4].title}</h3>
                <p className="text-[17px] font-medium text-zinc-300">{steps[4].desc}</p>
              </div>
            </div>
            </div>
          </SectionReveal>
        </div>

      </div>
    </section>
  )
}
