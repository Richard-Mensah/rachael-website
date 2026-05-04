import Image from 'next/image'
import Link from 'next/link'
import { Download } from 'lucide-react'
import Button from '@/components/ui/Button'

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-brand-navy">
      {/* Decorative glows */}
      <div className="pointer-events-none absolute right-0 top-0 h-80 w-80 rounded-full bg-brand-gold/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-56 w-56 rounded-full bg-brand-purple/20 blur-3xl" />

      <div className="mx-auto flex max-w-6xl flex-col items-end gap-8 px-6 pt-16 md:flex-row md:items-end md:pt-24">
        {/* Text */}
        <div className="flex-1 pb-12 md:pb-20">
          <span className="mb-5 inline-block rounded-full border border-brand-gold/50 bg-brand-gold/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-brand-gold">
            MSc Accounting &amp; Finance · Cardiff Metropolitan University
          </span>

          <h1 className="mb-5 text-5xl font-extrabold leading-tight text-white md:text-7xl">
            Rachael<br />Otuah
          </h1>

          <p className="mb-8 max-w-md text-base leading-relaxed text-brand-beige/80">
            Finance researcher and educator based in the UK, with a focus on ESG
            and sustainable finance. I write about what the data actually says,
            teach accounting to anyone who will listen, and am preparing for a PhD.
          </p>

          <div className="flex flex-wrap gap-3">
            <Link href="/research">
              <Button variant="primary">View My Research</Button>
            </Link>
            <Link href="/blog">
              <Button variant="secondary">Read My Blog</Button>
            </Link>
            <a
              href="/rachael-otuah-cv.pdf"
              download
              className="inline-flex items-center gap-2 rounded-lg border border-brand-gold/50 px-5 py-2.5 text-sm font-semibold text-brand-gold transition-colors hover:bg-brand-gold/10"
            >
              <Download size={15} />
              Download CV
            </a>
          </div>
        </div>

        {/* Portrait */}
        <div className="relative h-72 w-48 flex-shrink-0 overflow-hidden rounded-t-2xl border-2 border-brand-gold/40 shadow-2xl md:h-96 md:w-64">
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
