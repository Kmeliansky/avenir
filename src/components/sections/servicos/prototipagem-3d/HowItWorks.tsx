import SectionReveal from "@/components/SectionReveal"

const steps = [
  {
    number: "1",
    title: "Levantamento Técnico do Projeto",
    desc: "Analisamos as características da peça ou produto para definir objetivos da prototipagem, requisitos funcionais, nível de acabamento e condições de uso durante os testes.",
  },
  {
    number: "2",
    title: "Definição da Tecnologia e Material",
    desc: "Selecionamos a tecnologia de impressão 3D mais adequada, como MEx, DLP ou MJF, considerando resistência mecânica, precisão dimensional e necessidade de validação.",
  },
  {
    number: "3",
    title: "Fabricação do Protótipo 3D",
    desc: "Produzimos o modelo físico a partir do arquivo digital, permitindo validar formas, encaixes, ergonomia e comportamento do produto antes da fabricação definitiva.",
  },
  {
    number: "4",
    title: "Testes e Validações Funcionais",
    desc: "O protótipo pode ser utilizado para testes de montagem, análise dimensional, validação de conceito e avaliações técnicas em condições reais de aplicação.",
  },
  {
    number: "5",
    title: "Ajustes e Evolução do Produto",
    desc: "Após os testes, realizamos melhorias e correções no projeto para otimizar desempenho, reduzir falhas e preparar o produto para produção.",
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
            A prototipagem permite a fabricação de modelos físicos para testes funcionais, validações dimensionais e avaliação visual antes da produção. As tecnologias utilizadas incluem manufatura aditiva, especialmente MEx, DLP e MJF. Esse serviço é indicado para redução de riscos de projeto, validação de conceito e testes de montagem e uso.
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
