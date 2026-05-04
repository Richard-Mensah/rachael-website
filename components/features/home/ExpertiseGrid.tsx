import SectionLabel from '@/components/ui/SectionLabel'
import Card from '@/components/ui/Card'

type Expertise = { title: string; description: string }

const expertise: Expertise[] = [
  {
    title: 'ESG & Sustainable Finance',
    description: 'Linking ESG ratings to financial performance and market valuations across sectors.',
  },
  {
    title: 'Financial Reporting & Analysis',
    description: 'FTSE 100 corporate reporting, management accounting, and strategic financial decisions.',
  },
  {
    title: 'AI & FinTech in Accounting',
    description: 'How automation and data analytics are reshaping financial information systems.',
  },
  {
    title: 'Corporate Finance',
    description: 'Capital structure, investment decisions, and risk management in modern organisations.',
  },
  {
    title: 'Management Accounting',
    description: 'Supporting strategic decision-making through robust financial planning and control.',
  },
  {
    title: 'Research Methodology',
    description: 'Comparative quantitative analysis across industry sectors and ESG frameworks.',
  },
]

export default function ExpertiseGrid() {
  return (
    <section className="bg-brand-cream px-6 py-16">
      <div className="mx-auto max-w-6xl">
        <SectionLabel className="mb-3">Areas of Expertise</SectionLabel>
        <h2 className="mb-8 text-3xl font-extrabold text-brand-navy md:text-4xl">
          Knowledge &amp; Specialisms
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {expertise.map((item) => (
            <Card key={item.title} topBorder>
              <h3 className="mb-2 text-sm font-bold text-brand-navy">{item.title}</h3>
              <p className="text-sm leading-relaxed text-gray-500">{item.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
