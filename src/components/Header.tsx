'use client'

import Link from 'next/link'
import { useState } from 'react'
import Image from 'next/image'


const services = [
  { label: 'Consultoria', href: '/serviços/consultoria' },
  { label: 'Desenvolvimento de Produto', href: '/serviços/desenvolvimento-de-produto' },
  { label: 'Lote Piloto', href: '/serviços/lote-piloto' },
  { label: 'Engenharia Reversa', href: '/serviços/engenharia-reversa' },
  { label: 'Prototipagem 3D', href: '/serviços/prototipagem-3d' },
  { label: 'Fabricação de Peças', href: '/serviços/fabricacao-de-pecas-de-uso-final' },
  { label: 'Digitalização', href: '/serviços/digitalizacao' },
  { label: 'Modelagem 3D', href: '/serviços/modelagem-3d' },
  { label: 'Ferramental Rápido', href: '/serviços/ferramental-rapido' },
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

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileServices, setMobileServices] = useState(false)
  const [mobileAreas, setMobileAreas] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-zinc-900 text-white shadow-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
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
        <nav className="hidden items-center gap-8 font-heading text-sm font-medium md:flex">
          {/* Serviços dropdown */}
          <div className="group relative">
            <Link
              href="/serviços"
              className="flex items-center gap-1 py-5 text-zinc-300 transition-colors hover:text-white"
            >
              Serviços
              <svg className="h-3 w-3 transition-transform group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </Link>
            <div className="pointer-events-none absolute left-0 top-full w-56 rounded-b-lg bg-zinc-800 py-2 opacity-0 shadow-lg transition-all duration-150 group-hover:pointer-events-auto group-hover:opacity-100">
              {services.map((item) => (
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
          <Link
            href="/contato"
            className="rounded-full bg-white px-5 py-2 text-zinc-900 transition-colors hover:bg-zinc-200"
          >
            Contato
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="flex flex-col justify-center gap-1.5 p-1 md:hidden"
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
              <Link href="/serviços" className="py-1.5 text-zinc-400 hover:text-white" onClick={() => setMobileOpen(false)}>
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
