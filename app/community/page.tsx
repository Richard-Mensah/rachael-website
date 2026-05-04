import CommunitySection from '@/components/features/community/CommunitySection'

export const metadata = {
  title: 'Community | Rachael Otuah',
  description: 'Finance education through podcast, online content, and workshops.',
}

export default function CommunityPage() {
  return (
    <div className="bg-brand-off-white min-h-screen">
      <div className="bg-brand-navy px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <h1 className="text-4xl font-extrabold text-white md:text-5xl">Community</h1>
          <p className="mt-3 text-brand-beige/70">Finance education for everyone.</p>
        </div>
      </div>
      <CommunitySection />
    </div>
  )
}
