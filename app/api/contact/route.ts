import { NextRequest, NextResponse } from 'next/server'
import pool from '@/lib/db'
import type { ContactSubmission } from '@/types'

export async function POST(request: NextRequest) {
  try {
    const body: unknown = await request.json()

    if (
      typeof body !== 'object' ||
      body === null ||
      typeof (body as ContactSubmission).name !== 'string' ||
      typeof (body as ContactSubmission).email !== 'string' ||
      typeof (body as ContactSubmission).message !== 'string'
    ) {
      return NextResponse.json({ error: 'Invalid request body' }, { status: 400 })
    }

    const { name, email, message } = body as ContactSubmission

    if (!name.trim() || !email.trim() || !message.trim()) {
      return NextResponse.json({ error: 'All fields are required' }, { status: 400 })
    }

    await pool.query(
      'INSERT INTO contact_submissions (name, email, message) VALUES ($1, $2, $3)',
      [name.trim(), email.trim(), message.trim()]
    )

    return NextResponse.json({ message: 'Received' }, { status: 201 })
  } catch {
    return NextResponse.json({ error: 'Failed to submit' }, { status: 500 })
  }
}
