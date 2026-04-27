import Link from 'next/link'
import { client } from '@/lib/grapqhl/client'
import {
  GET_POSTS_LIST,
  GET_ALL_CATEGORIES,
  GetPostsListResponse,
  GetAllCategoriesResponse,
  PostPreview,
} from '@/lib/grapqhl/queries'
import { PostCard } from '@/components/blog/PostCard'

async function fetchPosts(): Promise<PostPreview[]> {
  try {
    const data = await client.request<GetPostsListResponse>(GET_POSTS_LIST, { first: 6 })
    return data.posts.nodes
  } catch {
    return []
  }
}

async function fetchCategories(): Promise<{ name: string; slug: string }[]> {
  try {
    const data = await client.request<GetAllCategoriesResponse>(GET_ALL_CATEGORIES)
    return data.categories.nodes
  } catch {
    return []
  }
}

export default async function BlogPage() {
  const [posts, categories] = await Promise.all([fetchPosts(), fetchCategories()])

  return (
    <main className="min-h-screen bg-black text-white font-sans">
      {/* Header */}
      <section className="px-6 pt-20 pb-12 border-b border-zinc-800">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="max-w-xl">
              <h1 className="font-heading text-4xl md:text-5xl font-bold mb-8">
                Aprenda mais sobre manufatura aditiva
              </h1>
              <form role="search" method="GET" action="/blog" className="relative max-w-sm">
                <input
                  type="search"
                  name="q"
                  placeholder="Pesquisar artigo"
                  aria-label="Pesquisar artigo"
                  className="w-full bg-[#1a1a1a] border-none py-3 px-4 pr-10 text-sm focus:outline-none focus:ring-1 focus:ring-zinc-500"
                />
                <button
                  type="submit"
                  aria-label="Buscar"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-white transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z" />
                  </svg>
                </button>
              </form>
            </div>

            {/* Categorias dinâmicas */}
            {categories.length > 0 && (
              <nav aria-label="Categorias" className="flex flex-wrap gap-4 text-sm text-zinc-400 mb-2">
                {categories.map((cat) => (
                  <Link
                    key={cat.slug}
                    href={`/blog/categoria/${cat.slug}`}
                    className="hover:text-white transition-colors"
                  >
                    {cat.name}
                  </Link>
                ))}
              </nav>
            )}
          </div>
        </div>
      </section>

      {/* Conteúdo + Sidebar */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-3 gap-12">

          {/* Lista de artigos */}
          <div className="lg:col-span-2">
            {posts.length === 0 ? (
              <p className="text-zinc-500">
                Nenhum artigo encontrado. Configure{' '}
                <code className="rounded bg-zinc-800 px-1.5 py-0.5 text-xs">GRAPHQL_URL</code>{' '}
                no <code className="rounded bg-zinc-800 px-1.5 py-0.5 text-xs">.env.local</code>.
              </p>
            ) : (
              posts.map((post) => <PostCard key={post.slug} post={post} />)
            )}

            {/* Paginação */}
            <div className="flex justify-center gap-2 mt-12">
              {[1, 2, 3, 4].map((n) => (
                <button
                  key={n}
                  type="button"
                  className={`w-8 h-8 text-xs transition-colors ${n === 1 ? 'bg-zinc-800 text-white' : 'text-zinc-500 hover:text-white'}`}
                >
                  {n}
                </button>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <h3 className="font-heading text-lg font-bold mb-6">Artigos Recomendados</h3>
            <div className="space-y-4">
              {posts.slice(0, 3).map((post) => (
                <Link
                  key={`rec-${post.slug}`}
                  href={`/blog/${post.slug}`}
                  className="block text-sm text-zinc-400 hover:text-white transition-colors border-b border-zinc-800 pb-4"
                >
                  {post.title}
                </Link>
              ))}
            </div>

            {categories.length > 0 && (
              <div className="mt-10">
                <h3 className="font-heading text-lg font-bold mb-6">Categorias</h3>
                <div className="space-y-2">
                  {categories.map((cat) => (
                    <Link
                      key={`sidebar-${cat.slug}`}
                      href={`/blog/categoria/${cat.slug}`}
                      className="flex items-center justify-between text-sm text-zinc-400 hover:text-white transition-colors border-b border-zinc-800 pb-2"
                    >
                      {cat.name}
                      <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </aside>

        </div>
      </section>
    </main>
  )
}
