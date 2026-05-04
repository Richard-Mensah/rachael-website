import { FileText } from 'lucide-react'

const tags = ['ESG Ratings', 'FTSE 100', 'Corporate Finance', 'Carbon Sectors', 'Market Valuation']

export default function ThesisSpotlight() {
  return (
    <section className="bg-brand-navy px-6 pb-12">
      <div className="mx-auto max-w-6xl">
        <div className="rounded-2xl border border-brand-gold/30 bg-brand-gold/10 p-6 md:p-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-start md:gap-6">
            {/* Icon */}
            <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-brand-gold">
              <FileText className="text-white" size={22} />
            </div>

            {/* Content */}
            <div>
              <p className="mb-2 text-xs font-bold uppercase tracking-widest text-brand-gold">
                MSc Thesis Research
              </p>
              <h2 className="mb-2 text-lg font-bold leading-snug text-white md:text-xl">
                The Impact of ESG Ratings on the Financial Performance and Market
                Valuations of UK FTSE 100 Companies: A Comparative Analysis of
                Carbon-Intensive vs Low-Carbon Sectors
              </h2>
              <p className="mb-4 text-sm text-brand-beige/60">
                Cardiff Metropolitan University · 2025 · Accounting &amp; Finance
              </p>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-brand-purple/50 bg-brand-purple/20 px-3 py-1 text-xs text-brand-beige/90"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
