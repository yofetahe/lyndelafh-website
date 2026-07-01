import { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const images = [
  { src: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1000', alt: 'Cozy living room', span: 'lg:col-span-2 lg:row-span-2' },
  { src: 'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Garden pathway', span: '' },
  { src: 'https://images.pexels.com/photos/6585757/pexels-photo-6585757.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Comfortable bedroom', span: '' },
  { src: 'https://images.pexels.com/photos/2631746/pexels-photo-2631746.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Dining area', span: '' },
  { src: 'https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Outdoor patio', span: '' },
  { src: 'https://images.pexels.com/photos/3935352/pexels-photo-3935352.jpeg?auto=compress&cs=tinysrgb&w=800', alt: 'Sunlit room', span: '' },
];

export default function Gallery() {
  const [lightbox, setLightbox] = useState<number | null>(null);

  const close = () => setLightbox(null);
  const prev = () => setLightbox((i) => (i === null ? null : (i - 1 + images.length) % images.length));
  const next = () => setLightbox((i) => (i === null ? null : (i + 1) % images.length));

  return (
    <section id="gallery" className="bg-sage-50 py-24 sm:py-32">
      <div className="mx-auto max-w-8xl px-5 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-2xl text-center">
          <span className="reveal text-xs font-semibold uppercase tracking-[0.2em] text-cream-600">
            Gallery
          </span>
          <h2 className="reveal mt-4 font-serif text-4xl font-semibold leading-tight text-sage-900 text-balance sm:text-5xl">
            Take a look around
          </h2>
          <p className="reveal mt-5 text-lg leading-relaxed text-sage-700">
            A glimpse of the warm spaces and peaceful surroundings our residents
            enjoy every day.
          </p>
        </div>

        <div className="reveal mt-14 grid auto-rows-[200px] grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {images.map((img, i) => (
            <button
              key={i}
              onClick={() => setLightbox(i)}
              className={`group relative overflow-hidden rounded-2xl shadow-sm transition-shadow hover:shadow-lg ${img.span}`}
              aria-label={`View image: ${img.alt}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-sage-950/0 transition-colors duration-300 group-hover:bg-sage-950/20" />
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-sage-950/90 p-4 backdrop-blur-sm"
          onClick={close}
        >
          <button
            onClick={close}
            className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-cream-50 transition-colors hover:bg-white/20"
            aria-label="Close"
          >
            <X className="h-6 w-6" />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); prev(); }}
            className="absolute left-4 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-cream-50 transition-colors hover:bg-white/20 sm:left-8"
            aria-label="Previous"
          >
            <ChevronLeft className="h-7 w-7" />
          </button>
          <img
            src={images[lightbox].src}
            alt={images[lightbox].alt}
            className="max-h-[85vh] max-w-[90vw] rounded-2xl object-contain shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            onClick={(e) => { e.stopPropagation(); next(); }}
            className="absolute right-4 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-cream-50 transition-colors hover:bg-white/20 sm:right-8"
            aria-label="Next"
          >
            <ChevronRight className="h-7 w-7" />
          </button>
        </div>
      )}
    </section>
  );
}
