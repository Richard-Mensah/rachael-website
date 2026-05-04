'use client'

import { useState } from 'react'
import Button from '@/components/ui/Button'
import type { ContactSubmission } from '@/types'

type Status = 'idle' | 'loading' | 'success' | 'error'

export default function ContactForm() {
  const [form, setForm] = useState<ContactSubmission>({ name: '', email: '', message: '' })
  const [status, setStatus] = useState<Status>('idle')

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error()
      setStatus('success')
      setForm({ name: '', email: '', message: '' })
    } catch {
      setStatus('error')
    }
  }

  const inputClass =
    'w-full rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-sm text-white placeholder-white/40 focus:border-brand-gold focus:outline-none focus:ring-1 focus:ring-brand-gold'

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <input
        name="name"
        value={form.name}
        onChange={handleChange}
        placeholder="Your Name"
        required
        className={inputClass}
      />
      <input
        name="email"
        type="email"
        value={form.email}
        onChange={handleChange}
        placeholder="Your Email"
        required
        className={inputClass}
      />
      <textarea
        name="message"
        value={form.message}
        onChange={handleChange}
        placeholder="Your Message"
        required
        rows={4}
        className={inputClass}
      />
      <Button type="submit" disabled={status === 'loading'} className="w-full justify-center py-3">
        {status === 'loading' ? 'Sending…' : 'Send Message'}
      </Button>
      {status === 'success' && (
        <p className="text-center text-sm text-green-400">Message sent! I&apos;ll be in touch soon.</p>
      )}
      {status === 'error' && (
        <p className="text-center text-sm text-red-400">Something went wrong. Please try again.</p>
      )}
    </form>
  )
}
