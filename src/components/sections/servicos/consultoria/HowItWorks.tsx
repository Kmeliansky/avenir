import SectionReveal from "@/components/SectionReveal"

const steps = [
  {
    number: "1",
    title: "Definição do processo",
    desc: "Análise técnica para definir os processos mais viáveis para fabricação, prototipagem ou validação de produtos.",
  },
  {
    number: "2",
    title: "Seleção de Materiais",
    desc: "Suporte na escolha de materiais conforme aplicação, resistência, acabamento e necessidade do projeto.",
  },
  {
    number: "3",
    title: "Estratégia de fabricação",
    desc: "Planejamento técnico para definir a melhor abordagem produtiva entre manufatura aditiva e processos complementares.",
  },
  {
    number: "4",
    title: "Viabilização de Projetos",
    desc: "Consultoria para transformar ideias e conceitos em soluções tecnicamente possíveis e fabricáveis.",
  },
  {
    number: "5",
    title: "Otimização de Produção",
    desc: "Avaliação de processos e componentes para reduzir custos, melhorar desempenho e aumentar eficiência produtiva.",
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
            Como funciona o<br/> nosso serviço
          </h2>
          <p className="text-[17px] font-medium text-zinc-300">
            A consultoria técnica envolve suporte especializado na definição de processos, seleção de materiais e tomada de decisão em projetos relacionados ao desenvolvimento e fabricação de produtos. As tecnologias envolvidas abrangem todo o conjunto de processos disponíveis, incluindo manufatura aditiva e métodos complementares. Esse serviço é indicado para empresas que necessitam direcionamento técnico para viabilizar projetos, otimizar processos ou definir a melhor estratégia de fabricação.
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
