import { NextResponse } from 'next/server'
import { getAllPosts } from '@/lib/blog'

export async function GET() {
  try {
    const posts = await getAllPosts()
    return NextResponse.json({ posts }, { status: 200 })
  } catch {
    return NextResponse.json({ error: 'Failed to fetch posts' }, { status: 500 })
  }
}
