import LifestyleSection from '@/components/features/lifestyle/LifestyleSection'
import SectionLabel from '@/components/ui/SectionLabel'

export const metadata = {
  title: 'Lifestyle | Rachael Otuah',
  description: 'The person behind the research — interests, values, and life beyond finance.',
}

export default function LifestylePage() {
  return (
    <div className="bg-brand-off-white min-h-screen">
      <div className="bg-brand-navy px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <SectionLabel className="mb-3">Lifestyle</SectionLabel>
          <h1 className="text-4xl font-extrabold text-white md:text-5xl">
            Beyond the Numbers
          </h1>
          <p className="mt-3 max-w-xl text-brand-beige/70">
            A glimpse into the interests and values that shape how I think and live.
          </p>
        </div>
      </div>
      <LifestyleSection />
    </div>
  )
}
