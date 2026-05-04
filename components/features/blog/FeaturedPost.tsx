import Link from 'next/link'
import type { BlogPost } from '@/types'

type Props = { post: BlogPost }

export default function FeaturedPost({ post }: Props) {
  return (
    <Link href={`/blog/${post.slug}`} className="group block">
      <article className="rounded-2xl bg-brand-navy p-6 md:p-8 transition-opacity hover:opacity-90">
        <span className="mb-3 inline-block rounded bg-brand-gold px-3 py-1 text-xs font-bold uppercase tracking-widest text-white">
          Featured Article
        </span>
        <h3 className="mb-3 text-lg font-bold leading-snug text-white md:text-xl">
          {post.title}
        </h3>
        <p className="mb-4 text-sm leading-relaxed text-brand-beige/70">{post.excerpt}</p>
        <p className="text-xs text-brand-beige/50">
          {new Date(post.created_at).toLocaleDateString('en-GB', {
            day: 'numeric', month: 'long', year: 'numeric',
          })}
          {' · '}
          {post.read_time} min read
        </p>
      </article>
    </Link>
  )
}
