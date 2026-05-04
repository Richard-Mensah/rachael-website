import SectionLabel from '@/components/ui/SectionLabel'

export default function AboutSection() {
  return (
    <section className="border-t border-brand-cream bg-white px-6 py-16">
      <div className="mx-auto max-w-6xl">
        <SectionLabel className="mb-3">About Me</SectionLabel>
        <h2 className="mb-8 text-3xl font-extrabold text-brand-navy md:text-4xl">
          Where Finance Meets Sustainability
        </h2>
        <div className="max-w-3xl border-l-4 border-brand-gold pl-6 space-y-4 text-base leading-relaxed text-gray-600">
          <p>
            Rachael grew up in Ghana, studied business in Accra, and moved to the UK
            to complete her MSc in Accounting and Finance at Cardiff Metropolitan
            University. Her dissertation looked at whether ESG ratings actually predict
            financial performance for FTSE 100 companies, split between carbon-intensive
            and low-carbon sectors. The short answer is that it depends on the sector,
            which is not the tidy answer anyone wanted, but it is the honest one.
          </p>
          <p>
            She is interested in where traditional finance meets ESG reporting,
            financial technology, and the way data analytics is changing how financial
            information gets produced and used. She is currently preparing for doctoral
            research to push these questions further.
          </p>
        </div>
      </div>
    </section>
  )
}
