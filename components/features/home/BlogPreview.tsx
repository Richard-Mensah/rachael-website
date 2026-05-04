import Link from 'next/link'
import { getFeaturedPost, getAllPosts } from '@/lib/blog'
import SectionLabel from '@/components/ui/SectionLabel'
import BlogCard from '@/components/features/blog/BlogCard'
import FeaturedPost from '@/components/features/blog/FeaturedPost'

export default async function BlogPreview() {
  const [featured, all] = await Promise.all([getFeaturedPost(), getAllPosts()])
  const rest = all.filter((p) => p.slug !== featured?.slug).slice(0, 2)

  return (
    <section className="bg-brand-off-white px-6 py-16">
      <div className="mx-auto max-w-6xl">
        <SectionLabel className="mb-3">Articles & Publications</SectionLabel>
        <h2 className="mb-8 text-3xl font-extrabold text-brand-navy md:text-4xl">
          Research Insights &amp; Commentary
        </h2>

        {featured && <FeaturedPost post={featured} />}

        <div className="mt-5 grid gap-4 sm:grid-cols-2">
          {rest.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>

        <div className="mt-8">
          <Link href="/blog" className="text-sm font-semibold text-brand-purple hover:underline">
            View all articles →
          </Link>
        </div>
      </div>
    </section>
  )
}
