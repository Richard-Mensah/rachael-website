import ReactMarkdown from 'react-markdown'
import Link from 'next/link'
import type { BlogPost } from '@/types'
import Tag from '@/components/ui/Tag'

type Props = { post: BlogPost }

export default function BlogPost({ post }: Props) {
  return (
    <article className="mx-auto max-w-3xl px-6 py-16">
      <Link href="/blog" className="mb-8 inline-flex items-center gap-1 text-sm text-brand-purple hover:underline">
        ← Back to Blog
      </Link>

      <Tag variant="purple" className="mb-4">{post.tag}</Tag>

      <h1 className="mb-4 text-3xl font-extrabold leading-tight text-brand-navy md:text-4xl">
        {post.title}
      </h1>

      <p className="mb-10 text-sm text-gray-400">
        Rachael Otuah ·{' '}
        {new Date(post.created_at).toLocaleDateString('en-GB', {
          day: 'numeric', month: 'long', year: 'numeric',
        })}
        {' · '}
        {post.read_time} min read
      </p>

      <div className="prose prose-lg prose-headings:text-brand-navy prose-a:text-brand-purple max-w-none">
        <ReactMarkdown>{post.body ?? ''}</ReactMarkdown>
      </div>
    </article>
  )
}
