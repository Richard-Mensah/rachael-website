import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-900 px-6 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 md:flex-row">
        <span className="text-sm font-bold text-brand-gold">Rachael Otuah</span>
        <div className="flex gap-6">
          <Link href="/research" className="text-xs text-white/40 hover:text-white/70">Research</Link>
          <Link href="/blog" className="text-xs text-white/40 hover:text-white/70">Blog</Link>
          <Link href="/community" className="text-xs text-white/40 hover:text-white/70">Community</Link>
          <Link href="/lifestyle" className="text-xs text-white/40 hover:text-white/70">Lifestyle</Link>
        </div>
        <p className="text-xs text-white/30">© 2025 Rachael Otuah. All rights reserved.</p>
      </div>
    </footer>
  )
}
