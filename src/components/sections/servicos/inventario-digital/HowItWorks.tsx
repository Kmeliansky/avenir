import SectionReveal from "@/components/SectionReveal"

const steps = [
  {
    number: "1",
    title: "Levantamento Técnico e Análise do Projeto",
    desc: "Nossa equipe analisa todas as informações disponíveis para definir o melhor caminho de modelagem 3D. Quando necessário, orientamos ajustes ainda nessa fase para evitar retrabalho e melhorar a viabilidade do projeto.",
  },
  {
    number: "2",
    title: "Desenvolvimento da Modelagem",
    desc: "Com base no briefing, iniciamos a construção do modelo 3D com precisão técnica. Trabalhamos proporções, encaixes e detalhes funcionais conforme a aplicação do projeto.",
  },
  {
    number: "3",
    title: "Ajustes e Validação do Modelo",
    desc: "Após a primeira versão, validamos o modelo junto com você. Essa etapa permite revisar detalhes, corrigir interferências e ajustar o que for necessário antes da entrega final.",
  },
  {
    number: "4",
    title: "Preparação para Uso Final ou Impressão 3D",
    desc: "Finalizamos o arquivo conforme a aplicação. Se for para manufatura aditiva, o modelo já é entregue pronto para impressão 3D. Se for para apresentação, ajustamos materiais e visualização conforme necessário.",
  },
  {
    number: "5",
    title: "Entrega Técnica e Suporte",
    desc: "Na AVENIR 3D, a entrega faz parte do processo, não é o fim dele. Garantimos que você tenha acesso ao formato correto e suporte para aplicar o modelo no seu fluxo, seja em prototipagem, validação ou produção.",
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
            O inventário digital consiste na organização e digitalização de peças de reposição, permitindo a identificação de componentes viáveis para fabricação por manufatura aditiva. A partir da análise técnica e econômica, é possível estruturar um acervo digital preparado para produção sob demanda. As tecnologias utilizadas incluem escaneamento 3D, modelagem 3D e ferramentas de análise e organização de dados. É aplicado na gestão de peças de reposição, redução de obsolescência, diminuição de prazos de aquisição e otimização de níveis de estoque, especialmente em operações industriais com grande variedade de componentes.
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
