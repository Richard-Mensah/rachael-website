import Image from 'next/image'

const images = [
  { src: '/images/gallery-1.jpeg', alt: 'Rachael Otuah' },
  { src: '/images/gallery-2.jpeg', alt: 'Rachael Otuah' },
  { src: '/images/gallery-3.jpeg', alt: 'Rachael Otuah' },
  { src: '/images/gallery-4.jpeg', alt: 'Rachael Otuah' },
  { src: '/images/gallery-5.jpeg', alt: 'Rachael Otuah' },
]

const scrollImages = [...images, ...images]

export default function PhotoScroll() {
  return (
    <div className="overflow-hidden border-t border-brand-gold/20 bg-brand-navy">
      <div
        className="flex gap-3 py-3"
        style={{ animation: 'marquee 28s linear infinite', width: 'max-content' }}
      >
        {scrollImages.map((img, i) => (
          <div
            key={i}
            className="relative h-48 w-72 flex-shrink-0 overflow-hidden rounded-xl"
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover"
              sizes="288px"
            />
          </div>
        ))}
      </div>
    </div>
  )
}
