import { FileText, BookOpen, BarChart2, Globe } from 'lucide-react'
import Link from 'next/link'
import SectionLabel from '@/components/ui/SectionLabel'
import Card from '@/components/ui/Card'

export const metadata = {
  title: 'Research | Rachael Otuah',
  description: 'ESG research, thesis work, and academic expertise in accounting and finance.',
}

const expertiseDetail = [
  {
    icon: Globe,
    title: 'ESG & Sustainable Finance',
    body: 'My MSc thesis examined how ESG ratings relate to financial performance across FTSE 100 companies, comparing carbon-intensive and low-carbon sectors. The research revealed a sector-dependent relationship that challenges blanket ESG screening approaches.',
  },
  {
    icon: BarChart2,
    title: 'Quantitative Comparative Analysis',
    body: 'Using financial performance metrics, including ROE, ROA, EPS, and market capitalisation, the research applied comparative quantitative methods across multiple sectors to identify statistically meaningful patterns in ESG and performance relationships.',
  },
  {
    icon: BookOpen,
    title: 'Financial Reporting Standards',
    body: 'Deep familiarity with IFRS, UK GAAP, and the emerging landscape of ESG disclosure standards including GRI, TCFD, and ISSB frameworks. Understanding how standardisation affects comparability of ESG data.',
  },
  {
    icon: FileText,
    title: 'Doctoral Research Direction',
    body: 'Preparing for PhD research exploring why ESG quality does or does not translate into financial outperformance, with a particular interest in how AI-driven disclosure analysis can improve the consistency of ESG measurement.',
  },
]

export default function ResearchPage() {
  return (
    <div className="bg-brand-off-white min-h-screen">
      {/* Header */}
      <div className="bg-brand-navy px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <SectionLabel className="mb-4">Research</SectionLabel>
          <h1 className="mb-4 text-4xl font-extrabold text-white md:text-5xl">
            Academic Research &amp; Expertise
          </h1>
          <p className="max-w-2xl text-base leading-relaxed text-brand-beige/70">
            My research sits at the intersection of sustainable finance and corporate
            performance. I want to know whether the commitments companies make on ESG
            actually translate into the financial outcomes that markets care about.
          </p>
        </div>
      </div>

      {/* Thesis spotlight */}
      <div className="px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="rounded-2xl border border-brand-gold/30 bg-brand-gold/10 p-8">
            <SectionLabel className="mb-3">MSc Thesis</SectionLabel>
            <h2 className="mb-3 text-2xl font-bold text-brand-navy">
              The Impact of ESG Ratings on the Financial Performance and Market Valuations
              of UK FTSE 100 Companies: A Comparative Analysis of Carbon-Intensive vs
              Low-Carbon Sectors
            </h2>
            <p className="mb-4 text-sm text-gray-500">
              Cardiff Metropolitan University · MSc Accounting &amp; Finance · 2026
            </p>
            <p className="max-w-3xl text-base leading-relaxed text-gray-600">
              This research investigates whether ESG ratings systematically predict
              financial performance across UK FTSE 100 companies — and critically, whether
              that relationship differs between carbon-intensive industries (oil &amp; gas,
              mining, aviation) and lower-carbon sectors (technology, financial services,
              healthcare). Using ROE, ROA, EPS, and market capitalisation as performance
              proxies over a five-year period, the findings reveal a nuanced, sector-
              dependent relationship with significant implications for ESG-integrated
              financial analysis.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {expertiseDetail.map(({ icon: Icon, title, body }) => (
              <Card key={title} className="flex gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-brand-navy">
                  <Icon className="text-brand-gold" size={18} />
                </div>
                <div>
                  <h3 className="mb-2 text-sm font-bold text-brand-navy">{title}</h3>
                  <p className="text-sm leading-relaxed text-gray-500">{body}</p>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-10">
            <Link href="/blog/esg-ratings-financial-performance"
                  className="text-sm font-semibold text-brand-purple hover:underline">
              Read my article on ESG ratings and financial performance →
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
