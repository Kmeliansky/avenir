import SectionReveal from "@/components/SectionReveal"

const steps = [
  {
    number: "1",
    title: "Digitalização da Peça",
    desc: "Captura das dimensões e geometrias do componente físico através de escaneamento 3D ou medição técnica.",
  },
  {
    number: "2",
    title: "Reconstrução em CAD 3D",
    desc: "Criação do modelo digital da peça com fidelidade dimensional para edição, análise e fabricação.",
  },
  {
    number: "3",
    title: "Análise Técnica do Componente",
    desc: "Avaliação estrutural e funcional da peça para identificar melhorias, ajustes ou adaptações produtivas.",
  },
  {
    number: "4",
    title: "Correção e Otimização",
    desc: "Ajustes técnicos no modelo digital para melhorar desempenho, resistência ou compatibilidade de fabricação.",
  },
  {
    number: "5",
    title: "Preparação para Fabricação",
    desc: "Desenvolvimento dos arquivos técnicos necessários para reprodução, prototipagem ou produção da peça.",
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
            A engenharia reversa consiste na reconstrução digital de peças e componentes a partir de um item físico, com fidelidade dimensional e possibilidade de ajustes técnicos. As tecnologias utilizadas incluem digitalização e modelagem 3D. É aplicada na reposição de peças sem documentação, melhoria de projetos existentes e adaptação para novos processos de fabricação.
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
