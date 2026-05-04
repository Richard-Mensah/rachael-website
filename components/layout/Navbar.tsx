'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const links = [
  { href: '/', label: 'Home' },
  { href: '/research', label: 'Research' },
  { href: '/blog', label: 'Blog' },
  { href: '/community', label: 'Community' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/lifestyle', label: 'Lifestyle' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-brand-navy shadow-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-lg font-extrabold tracking-tight text-brand-gold">
          Rachael Otuah
        </Link>

        {/* Desktop links */}
        <div className="hidden items-center gap-6 md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-white/70 transition-colors hover:text-brand-gold"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/#contact"
            className="rounded-full bg-brand-gold px-4 py-2 text-sm font-bold text-white transition-colors hover:bg-brand-gold/80"
          >
            Contact Me
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="text-white md:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="flex flex-col gap-1 border-t border-white/10 bg-brand-navy px-6 pb-4 md:hidden">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="py-2 text-sm font-medium text-white/80 hover:text-brand-gold"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/#contact"
            onClick={() => setOpen(false)}
            className="mt-2 rounded-full bg-brand-gold px-4 py-2 text-center text-sm font-bold text-white"
          >
            Contact Me
          </Link>
        </div>
      )}
    </nav>
  )
}
