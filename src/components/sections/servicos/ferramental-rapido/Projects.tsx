import Image from "next/image"
import SectionReveal from "@/components/SectionReveal"

const projects = [
  {
    title: "Suporte Técnico para Sensor Industrial",
    desc: "Modelagem 3D de suporte para fixação de sensor em linha de produção. Projeto desenvolvido com foco em resistência mecânica e facilidade de instalação, pronto para impressão 3D e testes em campo.",
    image: "/images/modelagem-3d/imagem-de-um-suporte-tecnico-para-sensor-industrial.webp",
  },
  {
    title: "Carcaça para Dispositivo Eletrônico",
    desc: "Desenvolvimento de carcaça com encaixes internos e ventilação. A modelagem considerou dissipação térmica e montagem simplificada, reduzindo a necessidade de ajustes pós-produção.",
    image: "/images/modelagem-3d/carcaca-para-dispositivo-eletronico.webp",
  },
  {
    title: "Engrenagem para Sistema de Transmissão",
    desc: "Modelagem 3D de engrenagem com precisão dimensional para substituição de peça existente. Projeto validado para prototipagem e testes de funcionamento antes da fabricação final.",
    image: "/images/modelagem-3d/engrenagem-para-sistema-de-transmissao.webp",
  },
]

function ProjectImageCard({ title, image }: { title: string; image: string }) {
  return (
    <div className="group relative h-80 overflow-hidden bg-zinc-300">
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
        sizes="(min-width: 1024px) 33vw, 100vw"
      />
      <div
        aria-hidden
        className="absolute bottom-0 right-0 h-0 w-0 border-b-[26px] border-l-[42px] border-b-zinc-900 border-l-transparent"
      />
    </div>
  )
}

export default function Projects() {
  return (
    <section className="border-y border-zinc-700/50 bg-zinc-900 px-6 py-12 text-white md:py-20">
      <div className="mx-auto max-w-7xl">
        <SectionReveal from="left">
          <h2 className="mb-12 text-3xl font-semibold md:text-h2">Nossos projetos</h2>
        </SectionReveal>

        <div className="grid gap-7 lg:grid-cols-3">
          {projects.map((project, index) => (
            <SectionReveal key={project.title} from={index % 2 === 0 ? "left" : "right"} delayMs={index * 50}>
              <article>
              <ProjectImageCard title={project.title} image={project.image} />
              <div className="pt-5">
                <h3 className="mb-3 text-[34px] font-semibold leading-[1.05] tracking-[-0.02em] text-zinc-100 md:text-[36px]">
                  {project.title}
                </h3>
                <p className="text-[17px] font-medium leading-relaxed text-zinc-400">{project.desc}</p>
              </div>
              </article>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
