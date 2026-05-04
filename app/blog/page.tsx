import { getAllPosts } from '@/lib/blog'
import BlogList from '@/components/features/blog/BlogList'
import SectionLabel from '@/components/ui/SectionLabel'

export const metadata = {
  title: 'Blog | Rachael Otuah',
  description: 'Articles on ESG, sustainable finance, AI in accounting, and career development.',
}

export default async function BlogPage() {
  const posts = await getAllPosts()
  return (
    <div className="bg-brand-off-white min-h-screen px-6 py-16">
      <div className="mx-auto max-w-6xl">
        <SectionLabel className="mb-3">Articles & Publications</SectionLabel>
        <h1 className="mb-10 text-4xl font-extrabold text-brand-navy">
          Research Insights &amp; Commentary
        </h1>
        <BlogList posts={posts} />
      </div>
    </div>
  )
}
