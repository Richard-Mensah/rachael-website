import type { BlogPost } from '@/types'
import FeaturedPost from './FeaturedPost'
import BlogCard from './BlogCard'

type Props = { posts: BlogPost[] }

export default function BlogList({ posts }: Props) {
  const [featured, ...rest] = posts
  return (
    <div>
      {featured && <FeaturedPost post={featured} />}
      <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {rest.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  )
}
