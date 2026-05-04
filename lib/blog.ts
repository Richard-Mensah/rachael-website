import pool from './db'
import type { BlogPost } from '@/types'

export async function getAllPosts(): Promise<BlogPost[]> {
  try {
    const { rows } = await pool.query<BlogPost>(
      `SELECT id, slug, title, tag, excerpt, read_time, created_at, updated_at
       FROM blog_posts
       WHERE published = true
       ORDER BY created_at DESC`
    )
    return rows
  } catch {
    return []
  }
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    const { rows } = await pool.query<BlogPost>(
      `SELECT id, slug, title, tag, excerpt, body, read_time, published, created_at, updated_at
       FROM blog_posts
       WHERE slug = $1 AND published = true`,
      [slug]
    )
    return rows[0] ?? null
  } catch {
    return null
  }
}

export async function getFeaturedPost(): Promise<BlogPost | null> {
  try {
    const { rows } = await pool.query<BlogPost>(
      `SELECT id, slug, title, tag, excerpt, read_time, created_at, updated_at
       FROM blog_posts
       WHERE published = true
       ORDER BY created_at DESC
       LIMIT 1`
    )
    return rows[0] ?? null
  } catch {
    return null
  }
}
