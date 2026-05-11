import SectionReveal from "@/components/SectionReveal"

const applications = [
  {
    title: "Reposição de Componentes",
    desc: "Fabricação de peças para substituição de componentes danificados, descontinuados ou sem disponibilidade no mercado.",
    icon: "product",
  },
  {
    title: "Produção Sob Demanda",
    desc: "Produção de peças conforme necessidade, evitando estoque elevado e reduzindo custos operacionais.",
    icon: "printer",
  },
  {
    title: "Componentes Industriais",
    desc: "Fabricação de peças técnicas para máquinas, dispositivos, ferramentas e aplicações industriais diversas.",
    icon: "engineering",
  },
  {
    title: "Pequenos e Médios Lotes",
    desc: "Produção de séries reduzidas sem necessidade de moldes ou ferramental convencional.",
    icon: "presentation",
  },
  {
    title: "Personalização de Produtos",
    desc: "Desenvolvimento de peças customizadas conforme dimensões, aplicação e requisitos específicos do projeto.",
    icon: "validation",
  },
  {
    title: "Aplicações Funcionais",
    desc: "Produção de componentes finais para uso direto em equipamentos, sistemas e processos produtivos.",
    icon: "digital",
  },
]

function ApplicationIcon({ type }: { type: string }) {
  const cls = "h-5 w-5 text-zinc-300"

  if (type === "product") {
    return (
      <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.7}>
        <path strokeLinecap="round" strokeLinejoin="round" d="m12 3 8 4.5v9L12 21l-8-4.5v-9L12 3Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-9.5m8-4-8 4.5-8-4.5" />
      </svg>
    )
  }

  if (type === "printer") {
    return (
      <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.7}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7 8V4h10v4M6 17H5a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-1" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M7 14h10v6H7v-6Z" />
      </svg>
    )
  }

  if (type === "engineering") {
    return (
      <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.7}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10 14.5 4.5 20a2.1 2.1 0 1 1-3-3L7 11.5m3 3 2.5-2.5m0 0L18 6.5a2.1 2.1 0 1 1 3 3L15.5 15m-3-3 3 3" />
      </svg>
    )
  }

  if (type === "presentation") {
    return (
      <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.7}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 4h16v11H4V4Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M10 15v5m4-5v5m-6 0h8" />
      </svg>
    )
  }

  if (type === "validation") {
    return (
      <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.7}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 1 1-2.64-6.36" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 4v6h-6" />
      </svg>
    )
  }

  return (
    <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.7}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 7V4h3M20 7V4h-3M4 17v3h3M20 17v3h-3" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h8" />
    </svg>
  )
}

export default function Applications() {
  return (
    <section className="border-y border-zinc-700/50 bg-zinc-900 px-6 py-12 text-white md:py-20">
      <div className="mx-auto max-w-7xl">

        <SectionReveal from="left">
          <h2 className="mb-12 text-center text-3xl md:text-h2">
            Aplicações da modelagem 3D
          </h2>
        </SectionReveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {applications.map((app, index) => (
            <SectionReveal key={app.title} from={index % 2 === 0 ? "left" : "right"} delayMs={index * 40}>
              <div className="rounded-xl p-6">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-zinc-700">
                <ApplicationIcon type={app.icon} />
              </div>
              <h3 className="mb-2 text-lg font-semibold">{app.title}</h3>
              <p className="text-[17px] font-medium text-zinc-300">{app.desc}</p>
              </div>
            </SectionReveal>
          ))}
        </div>

      </div>
    </section>
  )
}
