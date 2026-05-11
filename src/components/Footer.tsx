import Image from "next/image"
import Link from "next/link"

const quickLinks = [
  { label: "Início", href: "/" },
  { label: "Nossas Soluções", href: "/servicos" },
  { label: "Áreas de atuação", href: "/areas-de-atuacao" },
  { label: "Projetos", href: "/projetos" },
  { label: "Materiais", href: "/materiais" },
  { label: "Blog", href: "/blog" },
  { label: "Informações", href: "/sobre" },
]

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-zinc-700/50 bg-black px-6 pb-16 pt-14 text-zinc-300 md:pb-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 md:grid-cols-4 md:gap-8">
          <div>
            <Image
              src="/images/logo-avenir-principal.png"
              alt="Avenir 3D"
              width={200}
              height={60}
              className="h-9 w-auto object-contain"
            />
            <p className="mt-6 max-w-[220px] text-sm leading-relaxed text-zinc-400">
              Uma nova forma de desenvolver, prototipar e fabricar já é realidade
            </p>
            <p className="mt-4 text-sm text-zinc-500">Criação e tráfego por Kongo Digital</p>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-medium text-zinc-100">Links rápidos</h3>
            <ul className="space-y-2.5 text-sm text-zinc-400">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="transition-colors hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-medium text-zinc-100">Endereço</h3>
            <p className="max-w-[260px] text-sm leading-relaxed text-zinc-400">
              Filial: Via Atlântica, BA 530, km 2,5, Camaçari - BA, 42810-440
            </p>
            <p className="mt-3 max-w-[260px] text-sm leading-relaxed text-zinc-400">
              Incubadora R. Joaquim Lyra Brandão, 1120 - Incubadora - Vila Assumpção, Botucatu - SP, 18606-070
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-medium text-zinc-100">Contato</h3>
            <ul className="space-y-2.5 text-sm text-zinc-400">
              <li>(14) 98182-0674</li>
              <li>(71) 99911-2879</li>
              <li>
                <a href="mailto:contato@avenir3d.com.br" className="transition-colors hover:text-white">
                  contato@avenir3d.com.br
                </a>
              </li>
              <li>Central de atendimento</li>
            </ul>
          </div>
        </div>
      </div>

      <p
        aria-hidden
        className="pointer-events-none absolute -bottom-14 left-1/2 w-full -translate-x-1/2 text-center text-[110px] font-black uppercase leading-none tracking-[0.04em] text-white/[0.06] md:text-[190px]"
      >
        AVENIR 3D
      </p>
    </footer>
  )
}
