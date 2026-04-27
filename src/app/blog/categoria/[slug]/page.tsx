import Link from 'next/link'
import { notFound } from 'next/navigation'
import { client } from '@/lib/grapqhl/client'
import {
  GET_ALL_CATEGORIES,
  GET_CATEGORY_BY_SLUG,
  GET_POSTS_BY_CATEGORY,
  GetAllCategoriesResponse,
  GetCategoryResponse,
  GetPostsByCategoryResponse,
} from '@/lib/grapqhl/queries'
import { PostCard } from '@/components/blog/PostCard'

export async function generateStaticParams() {
  try {
    const data = await client.request<GetAllCategoriesResponse>(GET_ALL_CATEGORIES)
    return data.categories.nodes.map((cat) => ({ slug: cat.slug }))
  } catch {
    return []
  }
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  try {
    const data = await client.request<GetCategoryResponse>(GET_CATEGORY_BY_SLUG, { slug })
    const category = data.category
    if (!category) return {}
    return {
      title: `${category.name} — Blog Avenir`,
      description: category.description ?? `Artigos sobre ${category.name}`,
    }
  } catch {
    return {}
  }
}

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params

  let category = null
  let posts: GetPostsByCategoryResponse['posts']['nodes'] = []
  let otherCategories: { name: string; slug: string }[] = []

  try {
    const [categoryData, postsData, allCatsData] = await Promise.all([
      client.request<GetCategoryResponse>(GET_CATEGORY_BY_SLUG, { slug }),
      client.request<GetPostsByCategoryResponse>(GET_POSTS_BY_CATEGORY, { slug, first: 6 }),
      client.request<GetAllCategoriesResponse>(GET_ALL_CATEGORIES),
    ])

    category = categoryData.category
    posts = postsData.posts.nodes
    otherCategories = allCatsData.categories.nodes.filter((c) => c.slug !== slug)
  } catch {
    // mantém valores padrão — categoria não encontrada será tratada abaixo
  }

  if (!category) notFound()

  return (
    <main className="min-h-screen bg-black text-white font-sans">
      {/* Header */}
      <section className="px-6 pt-20 pb-12 border-b border-zinc-800">
        <div className="mx-auto max-w-7xl">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-zinc-500 mb-8">
            <Link href="/" className="hover:text-white transition-colors">Início</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
            <span>/</span>
            <span className="text-zinc-300">{category.name}</span>
          </nav>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <p className="text-xs font-medium uppercase tracking-widest text-zinc-500 mb-3">Categoria</p>
              <h1 className="font-heading text-4xl md:text-5xl font-bold">
                {category.name}
              </h1>
              {category.description && (
                <p className="mt-4 max-w-xl text-zinc-400 text-sm leading-relaxed">
                  {category.description}
                </p>
              )}
              {category.count != null && (
                <p className="mt-2 text-xs text-zinc-600">
                  {category.count} {category.count === 1 ? 'artigo' : 'artigos'}
                </p>
              )}
            </div>

            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors shrink-0"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
              </svg>
              Todos os artigos
            </Link>
          </div>
        </div>
      </section>

      {/* Conteúdo + Sidebar */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-3 gap-12">

          {/* Lista de artigos */}
          <div className="lg:col-span-2">
            {posts.length === 0 ? (
              <div className="py-16 text-center">
                <p className="text-zinc-500 mb-4">Nenhum artigo encontrado nesta categoria.</p>
                <Link
                  href="/blog"
                  className="text-sm font-bold uppercase tracking-wider text-white hover:underline"
                >
                  Ver todos os artigos
                </Link>
              </div>
            ) : (
              posts.map((post) => <PostCard key={post.slug} post={post} />)
            )}

            {/* Paginação */}
            {posts.length === 6 && (
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
            )}
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-1">
            {otherCategories.length > 0 && (
              <div>
                <h4 className="font-heading text-lg font-bold mb-6">Outras Categorias</h4>
                <div className="space-y-2">
                  {otherCategories.map((cat) => (
                    <Link
                      key={cat.slug}
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
