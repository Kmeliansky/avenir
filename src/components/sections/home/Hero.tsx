import Image from "next/image";

export default function Hero() {
  return (
    <section className="border-y border-zinc-700/50 bg-zinc-900 px-6 py-16 text-white md:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-10 md:grid-cols-2 md:gap-12">
        
        {/* Coluna esquerda */}
        <div>
          <h1 className="mb-6 text-4xl md:text-h1">
            Manufatura aditiva e impressão 3D para levar seu projeto até a peça final
          </h1>

          <p className="mb-8 text-zinc-300">
            Na AVENIR 3D, aplicamos manufatura aditiva e impressão 3D como solução completa, do projeto à peça final, garantindo desempenho técnico e viabilidade industrial. 
          </p>

          <div className="flex flex-wrap gap-4">
            <button className="font-heading rounded-lg bg-white px-6 py-3 font-medium text-zinc-900 transition hover:bg-zinc-200">
              Orçamento rápido
            </button>

            <button className="font-heading rounded-lg border border-zinc-600 px-6 py-3 font-medium text-white transition hover:bg-zinc-800">
              Materiais impressos
            </button>
          </div>
        </div>

        {/* Coluna direita */}
        <div className="flex justify-center md:justify-end">
          <Image
            src="/images/wireframe.png"
            alt="Descrição da imagem"
            className="w-full max-w-md rounded-xl object-cover"
            width={200}
            height={80}
          />
        </div>

      </div>
    </section>
    
  );
}
