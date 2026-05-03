import Image from 'next/image'
import Link from 'next/link'
import Button from '@/components/ui/Button'

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-brand-navy">
      {/* Decorative radial glow */}
      <div className="pointer-events-none absolute right-0 top-0 h-64 w-64 rounded-full bg-brand-gold/10 blur-3xl" />

      <div className="mx-auto flex max-w-6xl flex-col items-end gap-8 px-6 pt-16 md:flex-row md:items-end md:pt-20">
        {/* Text */}
        <div className="flex-1 pb-12 md:pb-16">
          <span className="mb-4 inline-block rounded-full border border-brand-gold/40 bg-brand-gold/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-brand-gold">
            MSc Accounting &amp; Finance · Cardiff Metropolitan University
          </span>

          <h1 className="mb-4 text-5xl font-extrabold leading-tight text-white md:text-6xl">
            Rachael<br />Otuah
          </h1>

          <p className="mb-8 max-w-md text-base leading-relaxed text-brand-beige/80">
            Finance professional, ESG researcher, and finance educator — bridging
            sustainability and financial performance for tomorrow&apos;s markets.
          </p>

          <div className="flex flex-wrap gap-3">
            <Link href="/research">
              <Button variant="primary">View My Research</Button>
            </Link>
            <Link href="/blog">
              <Button variant="secondary">Read My Blog</Button>
            </Link>
          </div>
        </div>

        {/* Portrait */}
        <div className="relative h-72 w-48 flex-shrink-0 overflow-hidden rounded-t-2xl border-2 border-brand-gold/40 md:h-80 md:w-56">
          <Image
            src="/images/passport.jpg"
            alt="Rachael Otuah"
            fill
            className="object-cover object-top"
            priority
          />
        </div>
      </div>
    </section>
  )
}
