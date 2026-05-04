'use client'

import Image from 'next/image'
import { useState } from 'react'
import { X } from 'lucide-react'

type GalleryImage = { src: string; alt: string; wide?: boolean }

const images: GalleryImage[] = [
  { src: '/images/gallery-2.jpeg', alt: 'Rachael in a restaurant setting', wide: true },
  { src: '/images/gallery-1.jpeg', alt: 'Rachael in a cafe' },
  { src: '/images/gallery-5.jpeg', alt: 'Rachael selfie' },
  { src: '/images/gallery-3.jpeg', alt: 'Rachael at an outdoor event' },
  { src: '/images/gallery-4.jpeg', alt: 'Rachael on a rooftop' },
]

export default function GalleryGrid() {
  const [selected, setSelected] = useState<GalleryImage | null>(null)

  return (
    <>
      <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
        {images.map((img) => (
          <button
            key={img.src}
            onClick={() => setSelected(img)}
            className={`relative overflow-hidden rounded-xl ${img.wide ? 'col-span-2 aspect-video' : 'aspect-[3/4]'} cursor-zoom-in`}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover transition-transform duration-300 hover:scale-105"
            />
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={() => setSelected(null)}
        >
          <button
            className="absolute right-4 top-4 rounded-full bg-white/10 p-2 text-white hover:bg-white/20"
            onClick={() => setSelected(null)}
            aria-label="Close"
          >
            <X size={24} />
          </button>
          <div
            className="relative max-h-[90vh] max-w-4xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selected.src}
              alt={selected.alt}
              width={1200}
              height={900}
              className="rounded-xl object-contain max-h-[90vh] w-auto mx-auto"
            />
          </div>
        </div>
      )}
    </>
  )
}
