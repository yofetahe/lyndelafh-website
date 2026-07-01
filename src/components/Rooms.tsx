import { Check } from 'lucide-react';

const rooms = [
  {
    name: 'Private Room',
    image: 'https://images.pexels.com/photos/6585757/pexels-photo-6585757.jpeg?auto=compress&cs=tinysrgb&w=1000',
    desc: 'A spacious private room with a large window, personal bathroom access, and room for cherished furniture.',
    features: ['Private bedroom', 'Large window', 'Personal closet & dresser', 'Emergency call system'],
    featured: false,
  },
  {
    name: 'Garden Room',
    image: 'https://images.pexels.com/photos/3935352/pexels-photo-3935352.jpeg?auto=compress&cs=tinysrgb&w=1000',
    desc: 'Our most popular option — a bright room overlooking the garden patio, perfect for nature lovers.',
    features: ['Garden view', 'Morning sunlight', 'Steps from common area', 'Half bath nearby'],
    featured: false,
  },
  {
    name: 'Companion Room',
    image: 'https://images.pexels.com/photos/6438792/pexels-photo-6438792.jpeg?auto=compress&cs=tinysrgb&w=1000',
    desc: 'A shared room option that offers companionship and affordability without sacrificing comfort.',
    features: ['Shared bedroom', 'Two single beds', 'Shared bathroom', 'Built-in companionship'],
    featured: false,
  },
];

export default function Rooms() {
  return (
    <section id="rooms" className="bg-cream-50 py-24 sm:py-32">
      <div className="mx-auto max-w-8xl px-5 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-2xl text-center">
          <span className="reveal text-xs font-semibold uppercase tracking-[0.2em] text-cream-600">
            Accommodations
          </span>
          <h2 className="reveal mt-4 font-serif text-4xl font-semibold leading-tight text-sage-900 text-balance sm:text-5xl">
            A room to call your own
          </h2>
          <p className="reveal mt-5 text-lg leading-relaxed text-sage-700">
            Residents are encouraged to bring personal items, photos, and
            favorite furniture to make their space truly theirs.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {rooms.map((room, i) => (
            <div
              key={room.name}
              className={`reveal group flex flex-col overflow-hidden rounded-3xl bg-white shadow-md transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl ${
                room.featured ? 'ring-2 ring-cream-500 lg:scale-[1.03]' : ''
              }`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={room.image}
                  alt={room.name}
                  className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                {room.featured && (
                  <span className="absolute left-4 top-4 rounded-full bg-cream-600 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white shadow-md">
                    Most Loved
                  </span>
                )}
              </div>

              <div className="flex flex-1 flex-col p-7">
                <h3 className="font-serif text-2xl font-semibold text-sage-900">{room.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-sage-600">{room.desc}</p>

                <ul className="mt-5 space-y-2.5">
                  {room.features.map((f) => (
                    <li key={f} className="flex items-center gap-2.5 text-sm text-sage-700">
                      <Check className="h-4 w-4 flex-shrink-0 text-sage-500" strokeWidth={2.5} />
                      {f}
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className="mt-7 inline-flex items-center justify-center rounded-full border border-sage-200 px-5 py-2.5 text-sm font-semibold text-sage-700 transition-colors hover:bg-sage-600 hover:text-cream-50"
                >
                  Inquire About Availability
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
