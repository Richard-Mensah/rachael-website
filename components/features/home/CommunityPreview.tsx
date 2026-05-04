import Link from 'next/link'
import { Mic, PenLine, GraduationCap } from 'lucide-react'
import SectionLabel from '@/components/ui/SectionLabel'

const channels = [
  { icon: Mic, label: 'Podcast', desc: 'ESG, sustainable finance, and the future of accounting.' },
  { icon: PenLine, label: 'Online Content', desc: 'Articles and commentary on markets and career development.' },
  { icon: GraduationCap, label: 'Workshops', desc: 'Practical finance workshops building financial literacy.' },
]

export default function CommunityPreview() {
  return (
    <section className="bg-brand-cream px-6 py-16">
      <div className="mx-auto max-w-6xl">
        <SectionLabel className="mb-3">Community & Education</SectionLabel>
        <h2 className="mb-2 text-3xl font-extrabold text-brand-navy md:text-4xl">
          Sharing Finance Knowledge
        </h2>
        <p className="mb-8 max-w-xl text-base text-gray-600">
          Finance education should be accessible to everyone. Rachael brings financial
          insight to wider communities through three channels.
        </p>

        <div className="grid gap-5 sm:grid-cols-3">
          {channels.map(({ icon: Icon, label, desc }) => (
            <div key={label} className="rounded-2xl bg-white p-6 shadow-sm">
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-brand-gold/10">
                <Icon className="text-brand-gold" size={22} />
              </div>
              <h3 className="mb-2 text-sm font-bold text-brand-navy">{label}</h3>
              <p className="text-sm leading-relaxed text-gray-500">{desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-8">
          <Link
            href="/community"
            className="text-sm font-semibold text-brand-purple hover:underline"
          >
            Learn more about my community work →
          </Link>
        </div>
      </div>
    </section>
  )
}
