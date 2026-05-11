import SectionReveal from "@/components/SectionReveal"

const steps = [
  {
    number: "1",
    title: "Análise Técnica da Peça",
    desc: "Avaliamos o componente físico para definir o método de captura mais adequado, considerando geometria, nível de detalhe, dimensões e objetivo da digitalização.",
  },
  {
    number: "2",
    title: "Captura por Escaneamento 3D",
    desc: "Realizamos a digitalização da peça utilizando escaneamento 3D para obter a geometria completa do componente com alta precisão dimensional.",
  },
  {
    number: "3",
    title: "Medição e Complementação Técnica",
    desc: "Em peças com regiões críticas ou detalhes específicos, utilizamos medições manuais para complementar e validar as informações capturadas.",
  },
  {
    number: "4",
    title: "Tratamento e Reconstrução da Malha",
    desc: "Os dados obtidos passam por tratamento técnico para correção de falhas, alinhamento de superfícies e preparação do modelo digital para uso em CAD.",
  },
  {
    number: "5",
    title: "Conversão para Modelo Digital Utilizável",
    desc: "O arquivo gerado pode ser utilizado para engenharia reversa, controle dimensional, reprodução de peças ou integração com softwares de modelagem 3D e fabricação.",
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
            A digitalização consiste na conversão de peças físicas em modelos digitais por meio de escaneamento 3D ou medição manual. Os dados obtidos permitem edição, análise, reprodução e integração com sistemas CAD. As tecnologias utilizadas incluem escaneamento 3D e ferramentas de medição e tratamento de malha. É aplicada quando não há documentação técnica disponível, para controle dimensional, reprodução de peças ou preparação para engenharia reversa.
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
