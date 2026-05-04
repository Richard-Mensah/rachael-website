import { Plane, Heart, BookOpen, Shirt, Sprout } from 'lucide-react'
import Image from 'next/image'
import SectionLabel from '@/components/ui/SectionLabel'

const interests = [
  {
    icon: Plane,
    title: 'Travel & Culture',
    description: 'Exploring new cities and understanding different financial systems and economies through lived experience.',
  },
  {
    icon: Heart,
    title: 'Wellness',
    description: 'Maintaining balance through intentional living — a grounded mind supports sharper thinking.',
  },
  {
    icon: Sprout,
    title: 'Personal Growth',
    description: 'Committed to continuous learning — from academic reading to podcasts and professional communities.',
  },
  {
    icon: BookOpen,
    title: 'Reading',
    description: 'A mix of finance and economics non-fiction, biographies of leaders, and the occasional novel.',
  },
  {
    icon: Shirt,
    title: 'Fashion & Style',
    description: 'Style as self-expression — a creative outlet that complements the analytical side of life.',
  },
]

const galleryImages = [
  { src: '/images/gallery-1.jpeg', alt: 'Rachael in a cafe' },
  { src: '/images/gallery-2.jpeg', alt: 'Rachael in a restaurant' },
  { src: '/images/gallery-3.jpeg', alt: 'Rachael at an event' },
  { src: '/images/gallery-4.jpeg', alt: 'Rachael on a rooftop' },
  { src: '/images/gallery-5.jpeg', alt: 'Rachael selfie' },
]

export default function LifestyleSection() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <SectionLabel className="mb-3">Beyond the Numbers</SectionLabel>
      <h2 className="mb-4 text-3xl font-extrabold text-brand-navy md:text-4xl">
        The Person Behind the Research
      </h2>
      <p className="mb-12 max-w-2xl text-base leading-relaxed text-gray-600">
        Finance is what I do — but it is not all I am. Here is a glimpse into the
        interests and values that shape how I think, work, and show up in the world.
      </p>

      {/* Interest cards */}
      <div className="mb-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {interests.map(({ icon: Icon, title, description }) => (
          <div key={title} className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
            <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-brand-gold/10">
              <Icon className="text-brand-gold" size={22} />
            </div>
            <h3 className="mb-2 text-sm font-bold text-brand-navy">{title}</h3>
            <p className="text-sm leading-relaxed text-gray-500">{description}</p>
          </div>
        ))}
      </div>

      {/* Scrollable photo strip */}
      <div className="mb-16 flex gap-4 overflow-x-auto pb-2">
        {galleryImages.map((img) => (
          <div key={img.src} className="relative h-56 w-44 flex-shrink-0 overflow-hidden rounded-2xl">
            <Image src={img.src} alt={img.alt} fill className="object-cover" />
          </div>
        ))}
      </div>

      {/* Ethos quote */}
      <div className="rounded-2xl bg-brand-navy px-8 py-10 text-center">
        <p className="text-xl font-bold italic leading-relaxed text-white md:text-2xl">
          &ldquo;Profitability and sustainability are not competing priorities —
          they are increasingly inseparable.&rdquo;
        </p>
        <p className="mt-4 text-sm text-brand-beige/60">— Rachael Otuah</p>
      </div>
    </div>
  )
}
