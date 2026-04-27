import Link from 'next/link'
import { notFound } from 'next/navigation'
import { client } from '@/lib/grapqhl/client'
import { GET_POST_BY_SLUG, GetPostBySlugResponse, GET_POSTS_LIST, GetPostsListResponse } from '@/lib/grapqhl/queries'

function formatDate(dateString: string) {
  return new Intl.DateTimeFormat('pt-BR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(new Date(dateString))
}

export async function generateStaticParams() {
  try {
    const data = await client.request<GetPostsListResponse>(GET_POSTS_LIST, { first: 100 })
    return data.posts.nodes.map((post) => ({ slug: post.slug }))
  } catch {
    return []
  }
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  try {
    const data = await client.request<GetPostBySlugResponse>(GET_POST_BY_SLUG, { slug })
    const post = data.post
    if (!post) return {}
    return {
      title: post.title,
      description: post.excerpt?.replace(/<[^>]*>/g, '').trim().slice(0, 160),
    }
  } catch {
    return {}
  }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params

  let post
  try {
    const data = await client.request<GetPostBySlugResponse>(GET_POST_BY_SLUG, { slug })
    post = data.post
  } catch {
    post = null
  }

  if (!post) notFound()

  return (
    <main className="min-h-screen pb-24">
      {/* Featured image */}
      {post.featuredImage && (
        <div className="h-64 w-full overflow-hidden md:h-96">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={post.featuredImage.node.sourceUrl}
            alt={post.featuredImage.node.altText || post.title}
            className="h-full w-full object-cover"
          />
        </div>
      )}

      <div className="mx-auto max-w-3xl px-6 pt-12">
        {/* Breadcrumb */}
        <nav className="mb-8 flex items-center gap-2 text-sm text-zinc-400">
          <Link href="/" className="hover:text-zinc-700">Início</Link>
          <span>/</span>
          <Link href="/blog" className="hover:text-zinc-700">Blog</Link>
          <span>/</span>
          <span className="truncate text-zinc-600">{post.title}</span>
        </nav>

        {/* Categories */}
        {post.categories.nodes.length > 0 && (
          <div className="mb-4 flex flex-wrap gap-2">
            {post.categories.nodes.map((cat) => (
              <span
                key={cat.slug}
                className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-600"
              >
                {cat.name}
              </span>
            ))}
          </div>
        )}

        {/* Title */}
        <h1 className="font-heading text-3xl font-bold leading-tight text-zinc-900 md:text-4xl">
          {post.title}
        </h1>

        {/* Meta */}
        <div className="mt-4 flex items-center gap-4 text-sm text-zinc-400">
          <span>{formatDate(post.date)}</span>
          {post.author && (
            <>
              <span>·</span>
              <span>{post.author.node.name}</span>
            </>
          )}
        </div>

        {/* Divider */}
        <hr className="my-10 border-zinc-200" />

        {/* Content */}
        <div
          className="wp-content"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Back link */}
        <div className="mt-16 border-t border-zinc-200 pt-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-medium text-zinc-900 hover:text-zinc-600"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
            </svg>
            Voltar ao blog
          </Link>
        </div>
      </div>
    </main>
  )
}
