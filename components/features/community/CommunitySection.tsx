import { Mic, PenLine, GraduationCap } from 'lucide-react'
import SectionLabel from '@/components/ui/SectionLabel'

const channels = [
  {
    icon: Mic,
    title: 'Podcast',
    subtitle: 'Finance Conversations',
    description:
      'In-depth conversations on ESG, sustainable finance, the future of the accounting profession, and what it means to build a career in modern finance. Covering everything from thesis insights to industry trends.',
    colour: 'bg-brand-gold/10',
    iconColour: 'text-brand-gold',
  },
  {
    icon: PenLine,
    title: 'Online Content',
    subtitle: 'Articles & Insights',
    description:
      'Regular articles and commentary on financial markets, ESG developments, accounting standards, and career guidance for finance students and early professionals. Published across LinkedIn and this blog.',
    colour: 'bg-brand-purple/10',
    iconColour: 'text-brand-purple',
  },
  {
    icon: GraduationCap,
    title: 'Workshops',
    subtitle: 'Practical Finance Education',
    description:
      'Hands-on workshops designed to build financial literacy, introduce ESG concepts, and help participants navigate professional qualifications like ACCA and CIMA. Open to students and community members.',
    colour: 'bg-brand-navy/10',
    iconColour: 'text-brand-navy',
  },
]

export default function CommunitySection() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <SectionLabel className="mb-3">Community & Education</SectionLabel>
      <h1 className="mb-4 text-4xl font-extrabold text-brand-navy">
        Sharing Finance Knowledge
      </h1>
      <p className="mb-12 max-w-2xl text-base leading-relaxed text-gray-600">
        Rachael believes finance education should be accessible to everyone. Through
        three channels, she brings financial insight, research findings, and practical
        career guidance to wider communities.
      </p>

      <div className="grid gap-8 md:grid-cols-3">
        {channels.map(({ icon: Icon, title, subtitle, description, colour, iconColour }) => (
          <div key={title} className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm">
            <div className={`mb-5 flex h-14 w-14 items-center justify-center rounded-2xl ${colour}`}>
              <Icon className={iconColour} size={28} />
            </div>
            <p className="mb-1 text-xs font-bold uppercase tracking-widest text-gray-400">{subtitle}</p>
            <h2 className="mb-3 text-xl font-bold text-brand-navy">{title}</h2>
            <p className="text-sm leading-relaxed text-gray-500">{description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
