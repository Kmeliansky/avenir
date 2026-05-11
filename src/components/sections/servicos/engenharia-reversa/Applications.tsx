import SectionReveal from "@/components/SectionReveal"

const applications = [
  {
    title: "Reposição de Peças",
    desc: "Reconstrução digital de componentes sem projeto original para fabricação e reposição técnica.",
    icon: "product",
  },
  {
    title: "Atualização de Componentes",
    desc: "Adequação de peças antigas para novos materiais, processos produtivos ou aplicações industriais.",
    icon: "printer",
  },
  {
    title: "Melhoria de Projetos",
    desc: "Análise e otimização de componentes existentes para melhorar desempenho e viabilidade de fabricação.",
    icon: "engineering",
  },
  {
    title: "Digitalização de Acervos",
    desc: "Conversão de peças físicas em arquivos digitais organizados para produção e consulta futura.",
    icon: "presentation",
  },
  {
    title: "Fabricação Sob Demanda",
    desc: "Preparação de modelos digitais para reprodução rápida de peças conforme necessidade produtiva.",
    icon: "validation",
  },
  {
    title: "Adaptação para Novos Processos",
    desc: "Reengenharia de componentes para compatibilidade com manufatura aditiva e tecnologias complementares.",
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
            Aplicações da Engenharia Reversa
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
