import Image from "next/image"

export default function About() {
  return (
    <section className="border-y border-zinc-700/50 bg-zinc-900 px-6 py-12 text-white md:py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-10 md:grid-cols-2 md:gap-16">

        {/* Esquerda */}
        <div className="flex justify-center md:justify-start">
          <Image
            src="/images/wireframe-2.jpg"
            alt="Sobre a empresa"
            width={500}
            height={400}
            className="w-full rounded-xl object-cover md:max-w-md"
          />
        </div>

        {/* Direita */}
        <div>
          <h2 className="mb-6 text-3xl md:text-h2">
            Quem Somos
          </h2>

          <div className="space-y-4">
            <p className="text-zinc-300">
              A AVENIR 3D é uma empresa brasileira especializada no desenvolvimento, prototipagem e fabricação de produtos com o uso da manufatura aditiva para entregar soluções completas e inovadoras.
            </p>
            <p className="text-zinc-300">
              Desde 2018, transformamos a maneira como os produtos são concebidos e fabricados, combinando engenharia, tecnologia e visão estratégica voltada à inovação. Nosso compromisso é acelerar o ciclo de desenvolvimento, reduzir custos e otimizar processos, proporcionando soluções sob medida, repensando métodos, desafiando limites e impulsionando a indústria rumo ao futuro.
            </p>
            <p className="text-zinc-300">
              Referência em soluções de desenvolvimento, prototipagem e fabricação de produtos utilizando a manufatura aditiva
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}