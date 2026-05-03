export type BlogPost = {
  id: number
  slug: string
  title: string
  tag: string
  excerpt: string
  body?: string
  read_time: number
  published: boolean
  created_at: string
  updated_at: string
}

export type ContactSubmission = {
  name: string
  email: string
  message: string
}
