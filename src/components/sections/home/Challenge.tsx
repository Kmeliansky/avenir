import Image from "next/image"

export default function Challenges() {
  return (
    <section className="border-y border-zinc-700/50 bg-zinc-900 px-6 py-12 text-white md:py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">
        
        {/* Esquerda */}
        <div>
          <h2 className="mb-6 text-3xl md:text-h2">
            Qual seu desafio? fale com a gente
          </h2>

          <Image
            src="/images/wireframe-2.jpg"
            alt="Desafios"
            width={500}
            height={400}
            className="w-full rounded-xl object-cover"
          />
        </div>

        {/* Direita */}
        <div className="space-y-8">
          
          <div className="flex items-start gap-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-zinc-800">
              {/* Ícone */}
              <span>⚙️</span>
            </div>

            <div>
              <h3 className="mb-2">
                Desenvolvimento
              </h3>
              <p className="text-[17px] font-medium text-zinc-300">
                Empresas que pulam validações geram retrabalho e atrasos.Na AVENIR 3D desenvolvemos com Manufatura Aditiva, do conceito à peça final, reduzindo custo e risco.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-zinc-800">
              <span>⏱️</span>
            </div>

            <div>
              <h3 className="mb-2">
                Prototipagem
              </h3>
              <p className="text-[17px] font-medium text-zinc-300">
                Métodos tradicionais encarecem e atrasam testes.Na AVENIR 3D criamos protótipos funcionais rápidos com Manufatura Aditiva, validando com menos custo e tempo.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-zinc-800">
              <span>📦</span>
            </div>

            <div>
              <h3 className="mb-2">
                Fabricação de Produtos
              </h3>
              <p className="text-[17px] font-medium text-zinc-300">
                Produções tradicionais elevam custo e prazo.Na AVENIR 3D fabricamos peças finais com Manufatura Aditiva e materiais técnicos, da definição à peça pronta.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap gap-4">
            <button className="font-heading rounded-lg bg-white px-6 py-3 font-medium text-zinc-900 transition hover:bg-zinc-200">
              Envie o seu projeto
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}