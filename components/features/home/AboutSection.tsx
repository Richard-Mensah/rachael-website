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
            Rachael Otuah is a finance professional with a strong academic foundation
            built across two institutions and two disciplines. Holding a BSc in Business
            Administration from the University of Professional Studies, Accra, and an MSc
            in Accounting &amp; Finance from Cardiff Metropolitan University, her research
            examines how ESG factors translate into measurable financial outcomes — a
            question she believes is reshaping how markets assess long-term value.
          </p>
          <p>
            She is drawn to the growing convergence of traditional finance with ESG
            reporting standards, financial technology, and data analytics — and closely
            follows how artificial intelligence and automation are fundamentally reshaping
            how financial information is produced, interpreted, and acted upon. She is
            preparing for doctoral research to push these questions further.
          </p>
        </div>
      </div>
    </section>
  )
}
