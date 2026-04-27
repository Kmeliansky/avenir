export default function Loading() {
  return (
    <main className="min-h-screen">
      <section className="bg-zinc-900 px-6 py-20 text-white">
        <div className="mx-auto max-w-7xl">
          <div className="mb-3 h-4 w-16 animate-pulse rounded bg-zinc-700" />
          <div className="h-10 w-40 animate-pulse rounded bg-zinc-700" />
          <div className="mt-4 h-4 w-72 animate-pulse rounded bg-zinc-700" />
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="overflow-hidden rounded-2xl border border-zinc-200">
                <div className="h-48 animate-pulse bg-zinc-100" />
                <div className="flex flex-col gap-3 p-6">
                  <div className="h-4 w-20 animate-pulse rounded-full bg-zinc-100" />
                  <div className="h-5 w-full animate-pulse rounded bg-zinc-100" />
                  <div className="h-4 w-3/4 animate-pulse rounded bg-zinc-100" />
                  <div className="h-3 w-24 animate-pulse rounded bg-zinc-100" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
