import Link from 'next/link'
import type { BlogPost } from '@/types'

type Props = { post: BlogPost }

export default function BlogCard({ post }: Props) {
  return (
    <Link href={`/blog/${post.slug}`} className="group block">
      <article className="h-full rounded-xl border border-gray-100 bg-white p-5 shadow-sm transition-shadow hover:shadow-md border-t-4 border-t-brand-purple">
        <span className="mb-3 inline-block text-xs font-bold uppercase tracking-widest text-brand-purple">
          {post.tag}
        </span>
        <h3 className="mb-2 text-sm font-bold leading-snug text-brand-navy group-hover:text-brand-gold transition-colors">
          {post.title}
        </h3>
        <p className="text-xs text-gray-400">
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
