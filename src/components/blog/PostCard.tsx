import Link from 'next/link'
import { PostPreview } from '@/lib/grapqhl/queries'

function formatDate(dateString: string) {
  const date = new Date(dateString)
  return `${date.getDate().toString().padStart(2, '0')}/${(date.getMonth() + 1).toString().padStart(2, '0')}/${date.getFullYear()}`
}

function stripHtml(html: string) {
  return html.replace(/<[^>]*>/g, '').trim()
}

export function PostCard({ post }: { post: PostPreview }) {
  const rawExcerpt = post.excerpt ? stripHtml(post.excerpt) : ''
  const excerpt = rawExcerpt.slice(0, 120)
  const hasTrail = rawExcerpt.length > 120
  const category = post.categories.nodes[0]

  return (
    <article className="group mb-6 flex flex-col overflow-hidden border border-transparent bg-zinc-900 transition-all hover:border-zinc-700 sm:flex-row">
      {/* Imagem à esquerda */}
      <div className="flex h-48 w-full items-center justify-center overflow-hidden bg-zinc-800 sm:h-auto sm:w-1/3 sm:min-w-[160px]">
        {post.featuredImage ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={post.featuredImage.node.sourceUrl}
            alt={post.featuredImage.node.altText || post.title}
            className="h-full w-full object-cover transition-transform group-hover:scale-105"
          />
        ) : (
          <div className="flex items-center justify-center opacity-20">
            <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
              <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z" />
            </svg>
          </div>
        )}
      </div>

      {/* Conteúdo à direita */}
      <div className="flex w-full flex-col justify-center p-6 sm:w-2/3 sm:p-8">
        <div className="flex items-center gap-2 text-zinc-400 text-xs mb-2">
          {category ? (
            <Link
              href={`/blog/categoria/${category.slug}`}
              className="font-semibold text-zinc-300 hover:text-white transition-colors"
            >
              {category.name}
            </Link>
          ) : (
            <span className="font-semibold text-zinc-300">Geral</span>
          )}
          <span>•</span>
          <span>{formatDate(post.date)}</span>
        </div>

        <h3 className="mb-3 text-white transition-colors group-hover:text-zinc-300">
          {post.title}
        </h3>

        {excerpt && (
          <p className="mb-4 line-clamp-2 text-sm text-zinc-400">
            {excerpt}{hasTrail ? '…' : ''}
          </p>
        )}

        <Link
          href={`/blog/${post.slug}`}
          className="text-white text-sm font-bold uppercase tracking-wider hover:underline"
        >
          Continuar lendo
        </Link>
      </div>
    </article>
  )
}
