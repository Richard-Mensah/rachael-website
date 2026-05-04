import GalleryGrid from '@/components/features/gallery/GalleryGrid'
import SectionLabel from '@/components/ui/SectionLabel'

export const metadata = {
  title: 'Gallery | Rachael Otuah',
  description: 'Moments and milestones from Rachael Otuah.',
}

export default function GalleryPage() {
  return (
    <div className="bg-brand-off-white min-h-screen">
      <div className="bg-brand-navy px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <SectionLabel className="mb-3">Gallery</SectionLabel>
          <h1 className="text-4xl font-extrabold text-white md:text-5xl">
            Moments &amp; Milestones
          </h1>
        </div>
      </div>
      <div className="mx-auto max-w-6xl px-6 py-16">
        <GalleryGrid />
      </div>
    </div>
  )
}
