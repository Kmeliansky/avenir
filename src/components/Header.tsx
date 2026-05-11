'use client'

import Link from 'next/link'
import { useState } from 'react'
import Image from 'next/image'


const services = [
  { label: 'Consultoria', href: '/servicos/consultoria', desc: 'Direcionamento técnico rápido.', icon: 'chat' },
  { label: 'Desenvolvimento de Produto', href: '/servicos/desenvolvimento-de-produto', desc: 'Da ideia ao produto viável.', icon: 'cube' },
  { label: 'Lote Piloto', href: '/servicos/lote-piloto', desc: 'Validação em pequena escala.', icon: 'layers' },
  { label: 'Engenharia Reversa', href: '/servicos/engenharia-reversa', desc: 'Reconstrução digital precisa.', icon: 'refresh' },
  { label: 'Prototipagem 3D', href: '/servicos/prototipagem-3d', desc: 'Protótipos funcionais ágeis.', icon: 'printer' },
  { label: 'Fabricação de Peças', href: '/servicos/fabricacao-de-pecas-de-uso-final', desc: 'Peças finais sob demanda.', icon: 'cog' },
  { label: 'Digitalização', href: '/servicos/digitalizacao', desc: 'Captura 3D de geometrias.', icon: 'scan' },
  { label: 'Modelagem 3D', href: '/servicos/modelagem-3d', desc: 'Modelos CAD para produção.', icon: 'draft' },
  { label: 'Ferramental Rápido', href: '/servicos/ferramental-rapido', desc: 'Dispositivos e gabaritos.', icon: 'tool' },
]

const areas = [
  { label: 'Saúde', href: '/areas-de-atuacao/saude' },
  { label: 'Automobilismo', href: '/areas-de-atuacao/automobilismo' },
  { label: 'Engenharia', href: '/areas-de-atuacao/engenharia' },
  { label: 'Indústria', href: '/areas-de-atuacao/industria' },
  { label: 'Educação', href: '/areas-de-atuacao/educacao' },
  { label: 'Comércio', href: '/areas-de-atuacao/comercio' },
  { label: 'Arquitetura', href: '/areas-de-atuacao/arquitetura' },
]

function ServiceIcon({ type }: { type: string }) {
  const common = 'h-4 w-4'

  if (type === 'chat') {
    return (
      <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
        <path d="M21 12a8.5 8.5 0 0 1-8.5 8.5H5l-2 2v-7.5A8.5 8.5 0 1 1 21 12Z" />
      </svg>
    )
  }
  if (type === 'cube') {
    return (
      <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
        <path d="m12 2 8 4.5v11L12 22l-8-4.5v-11L12 2Z" />
        <path d="M12 22V11.5M20 6.5l-8 5-8-5" />
      </svg>
    )
  }
  if (type === 'layers') {
    return (
      <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
        <path d="m12 3 9 4.5-9 4.5L3 7.5 12 3Z" />
        <path d="m3 12 9 4.5 9-4.5M3 16.5 12 21l9-4.5" />
      </svg>
    )
  }
  if (type === 'refresh') {
    return (
      <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
        <path d="M21 12a9 9 0 1 1-2.64-6.36" />
        <path d="M21 3v6h-6" />
      </svg>
    )
  }
  if (type === 'printer') {
    return (
      <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
        <path d="M7 8V3h10v5M6 17H5a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-1" />
        <path d="M7 14h10v7H7v-7Z" />
      </svg>
    )
  }
  if (type === 'cog') {
    return (
      <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
        <path d="m12 15.5 1.2-.6 1.3.3 1-1 1.3-.3.6-1.2-.6-1.2.3-1.3-1-1-1.3.3-1.2-.6-1.2.6-1.3-.3-1 1 .3 1.3-.6 1.2.6 1.2-.3 1.3 1 1 1.3-.3 1.2.6Z" />
        <circle cx="12" cy="12" r="2.2" />
      </svg>
    )
  }
  if (type === 'scan') {
    return (
      <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
        <path d="M4 7V4h3M20 7V4h-3M4 17v3h3M20 17v3h-3" />
        <path d="M6 12h12" />
      </svg>
    )
  }
  if (type === 'draft') {
    return (
      <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
        <path d="M3 21h18M7 17 17 7m-6 10-4 4m10-10 4-4" />
      </svg>
    )
  }
  return (
    <svg className={common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
      <path d="M4 20h4l10-10a2.1 2.1 0 0 0-3-3L5 17v3Z" />
      <path d="m13 7 3 3" />
    </svg>
  )
}

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileServices, setMobileServices] = useState(false)
  const [mobileAreas, setMobileAreas] = useState(false)
  const [desktopServicesOpen, setDesktopServicesOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-zinc-900 text-white shadow-md">
      <div className="mx-auto grid h-16 max-w-7xl grid-cols-[auto_1fr_auto] items-center px-6">
        {/* Logo */}
        <Link href="/" className="shrink-0">
          <Image
            src="/images/logo-avenir-principal.png"
            alt="Avenir"
            width={200}
            height={80}
            className="h-10 w-auto object-contain"
            priority
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center justify-center gap-8 font-heading text-sm font-medium md:flex">
          {/* Serviços dropdown */}
          <div
            className="static"
            onMouseEnter={() => setDesktopServicesOpen(true)}
            onMouseLeave={() => setDesktopServicesOpen(false)}
          >
            <Link
              href="/servicos"
              className="flex items-center gap-1 py-5 text-zinc-300 transition-colors hover:text-white"
            >
              Serviços
              <svg
                className={`h-3 w-3 transition-transform ${desktopServicesOpen ? 'rotate-180' : ''}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </Link>
            <div
              className={`absolute left-1/2 top-full w-[calc(min(100vw-3rem,80rem))] -translate-x-1/2 rounded-2xl border border-zinc-700/80 bg-zinc-900/95 p-4 shadow-2xl shadow-black/40 backdrop-blur-sm transition-all duration-150 ${
                desktopServicesOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
              }`}
            >
              <div className="grid grid-cols-9 gap-3">
                {services.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="rounded-xl border border-zinc-700/60 bg-zinc-800/70 p-3 text-zinc-300 transition-colors hover:border-zinc-500 hover:text-white"
                  >
                    <div className="mb-2 flex h-8 w-8 items-center justify-center rounded-lg bg-zinc-700/70 text-zinc-100">
                      <ServiceIcon type={item.icon} />
                    </div>
                    <p className="mb-1 text-[13px] font-semibold leading-tight">{item.label}</p>
                    <p className="text-[11px] leading-snug text-zinc-400">{item.desc}</p>
                  </Link>
                ))}
              </div>
              <div className="mt-3 border-t border-zinc-700/70 pt-3">
                <Link href="/servicos" className="text-xs font-semibold uppercase tracking-wide text-zinc-300 transition-colors hover:text-white">
                  Ver todos os serviços
                </Link>
              </div>
            </div>
          </div>

          {/* Áreas de Atuação dropdown */}
          <div className="group relative">
            <Link
              href="/areas-de-atuacao"
              className="flex items-center gap-1 py-5 text-zinc-300 transition-colors hover:text-white"
            >
              Áreas de Atuação
              <svg className="h-3 w-3 transition-transform group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </Link>
            <div className="pointer-events-none absolute left-0 top-full w-48 rounded-b-lg bg-zinc-800 py-2 opacity-0 shadow-lg transition-all duration-150 group-hover:pointer-events-auto group-hover:opacity-100">
              {areas.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block px-4 py-2 text-zinc-300 transition-colors hover:bg-zinc-700 hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <Link href="/projetos" className="text-zinc-300 transition-colors hover:text-white">
            Projetos
          </Link>
          <Link href="/blog" className="text-zinc-300 transition-colors hover:text-white">
            Blog
          </Link>
          <Link href="/sobre" className="text-zinc-300 transition-colors hover:text-white">
            Sobre
          </Link>
        </nav>

        <Link
          href="/contato"
          className="hidden rounded-full bg-white px-5 py-2 text-zinc-900 transition-colors hover:bg-zinc-200 md:inline-flex"
        >
          Contato
        </Link>

        {/* Mobile hamburger */}
        <button
          className="col-start-3 flex flex-col justify-center justify-self-end gap-1.5 p-1 md:hidden"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Abrir menu"
        >
          <span className={`block h-0.5 w-6 bg-white transition-transform duration-200 ${mobileOpen ? 'translate-y-2 rotate-45' : ''}`} />
          <span className={`block h-0.5 w-6 bg-white transition-opacity duration-200 ${mobileOpen ? 'opacity-0' : ''}`} />
          <span className={`block h-0.5 w-6 bg-white transition-transform duration-200 ${mobileOpen ? '-translate-y-2 -rotate-45' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <nav className="border-t border-zinc-700 bg-zinc-900 px-6 pb-6 font-heading text-sm font-medium md:hidden">
          {/* Serviços accordion */}
          <button
            className="flex w-full items-center justify-between py-3 text-zinc-300"
            onClick={() => setMobileServices((v) => !v)}
          >
            Serviços
            <svg className={`h-3 w-3 transition-transform ${mobileServices ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {mobileServices && (
            <div className="mb-2 flex flex-col gap-1 pl-4">
              <Link href="/servicos" className="py-1.5 text-zinc-400 hover:text-white" onClick={() => setMobileOpen(false)}>
                Todos os Serviços
              </Link>
              {services.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="py-1.5 text-zinc-400 hover:text-white"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          )}

          {/* Áreas accordion */}
          <button
            className="flex w-full items-center justify-between py-3 text-zinc-300"
            onClick={() => setMobileAreas((v) => !v)}
          >
            Áreas de Atuação
            <svg className={`h-3 w-3 transition-transform ${mobileAreas ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {mobileAreas && (
            <div className="mb-2 flex flex-col gap-1 pl-4">
              <Link href="/areas-de-atuacao" className="py-1.5 text-zinc-400 hover:text-white" onClick={() => setMobileOpen(false)}>
                Todas as Áreas
              </Link>
              {areas.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="py-1.5 text-zinc-400 hover:text-white"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          )}

          <Link href="/projetos" className="block py-3 text-zinc-300 hover:text-white" onClick={() => setMobileOpen(false)}>
            Projetos
          </Link>
          <Link href="/blog" className="block py-3 text-zinc-300 hover:text-white" onClick={() => setMobileOpen(false)}>
            Blog
          </Link>
          <Link href="/sobre" className="block py-3 text-zinc-300 hover:text-white" onClick={() => setMobileOpen(false)}>
            Sobre
          </Link>
          <Link
            href="/contato"
            className="mt-2 block rounded-full bg-white px-5 py-2.5 text-center text-zinc-900 hover:bg-zinc-200"
            onClick={() => setMobileOpen(false)}
          >
            Contato
          </Link>
        </nav>
      )}
    </header>
  )
}
