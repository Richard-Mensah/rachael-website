import { cn } from '@/lib/utils'
import SectionLabel from '@/components/ui/SectionLabel'

type TimelineNode = {
  year: string
  title: string
  subtitle: string
  future?: boolean
}

const nodes: TimelineNode[] = [
  {
    year: '2020 – 2024',
    title: 'BSc Business Administration',
    subtitle: 'University of Professional Studies, Accra, Ghana',
  },
  {
    year: '2025 – 2026',
    title: 'MSc Accounting & Finance',
    subtitle: 'Cardiff Metropolitan University, UK · Thesis: ESG Ratings & FTSE 100 Financial Performance',
  },
  {
    year: '2026 – Present',
    title: 'Finance Educator & Researcher',
    subtitle: 'Online content, podcast host, and workshop facilitator · Pursuing ACCA',
  },
  {
    year: 'Future',
    title: 'PhD in Accounting & Finance',
    subtitle: 'Doctoral research in ESG, sustainable finance & corporate performance',
    future: true,
  },
]

export default function AcademicTimeline() {
  return (
    <section className="bg-white px-6 py-16">
      <div className="mx-auto max-w-6xl">
        <SectionLabel className="mb-3">Academic & Professional Journey</SectionLabel>
        <h2 className="mb-10 text-3xl font-extrabold text-brand-navy md:text-4xl">
          My Path So Far
        </h2>

        <div className="relative border-l-2 border-brand-gold pl-8 md:pl-10">
          {nodes.map((node, i) => (
            <div key={i} className="relative mb-8 last:mb-0">
              <span
                className={cn(
                  'absolute -left-[41px] top-1 flex h-4 w-4 items-center justify-center rounded-full border-2 border-white ring-2',
                  node.future ? 'bg-brand-purple ring-brand-purple' : 'bg-brand-gold ring-brand-gold'
                )}
              />
              <p
                className={cn(
                  'mb-1 text-xs font-bold uppercase tracking-widest',
                  node.future ? 'text-brand-purple' : 'text-brand-gold'
                )}
              >
                {node.year}
              </p>
              <h3
                className={cn(
                  'mb-1 text-base font-bold',
                  node.future ? 'italic text-brand-purple' : 'text-brand-navy'
                )}
              >
                {node.title}
              </h3>
              <p className="text-sm leading-relaxed text-gray-500">{node.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
