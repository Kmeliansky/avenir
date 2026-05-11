import SectionReveal from "@/components/SectionReveal"

const steps = [
  {
    number: "1",
    title: "Análise Técnica da Aplicação",
    desc: "Avaliamos as características da peça, condições de uso, esforços mecânicos e requisitos funcionais para definir a melhor estratégia de fabricação.",
  },
  {
    number: "2",
    title: "Definição de Tecnologia e Material",
    desc: "Selecionamos o processo produtivo mais adequado, como MEx, MJF ou DLP, além dos materiais compatíveis com a aplicação final do componente.",
  },
  {
    number: "3",
    title: "Preparação do Modelo 3D",
    desc: "Realizamos ajustes técnicos no arquivo digital para garantir precisão dimensional, desempenho e viabilidade de produção..",
  },
  {
    number: "4",
    title: "Fabricação Sob Demanda",
    desc: "Produzimos peças finais conforme a necessidade do projeto, desde unidades únicas até pequenos e médios lotes sem ferramental convencional.",
  },
  {
    number: "5",
    title: "Controle e Validação da Produção",
    desc: "As peças passam por verificações dimensionais e funcionais para garantir qualidade, repetibilidade e compatibilidade com a aplicação.",
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
            Como funciona o nosso serviço
          </h2>
          <p className="text-[17px] font-medium text-zinc-300">
            A fabricação de peças de uso final é realizada sob demanda, considerando requisitos técnicos, volume e aplicação do componente. As tecnologias utilizadas incluem manufatura aditiva, como MEx, MJF e DLP, além de processos complementares. Esse serviço é indicado para produção de peças finais, reposição de componentes e fabricação de lotes sem necessidade de ferramental convencional.
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
