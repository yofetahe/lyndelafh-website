import { Wifi, Tv, BookOpen, Trees, Car, Sun, Gamepad2, Church } from 'lucide-react';

const amenities = [
  { icon: Trees, label: 'Garden & Patio' },
  { icon: Sun, label: 'Sunlit Common Areas' },
  { icon: BookOpen, label: 'Library Nook' },
  { icon: Tv, label: 'TV in Rooms' },
  { icon: Wifi, label: 'Free Wi-Fi' },
  { icon: Gamepad2, label: 'Games & Activities' },
  { icon: Church, label: 'Worship Services' },
  { icon: Car, label: 'Transportation Arranged' },
];

export default function Amenities() {
  return (
    <section id="amenities" className="relative overflow-hidden bg-sage-800 py-24 text-cream-50 sm:py-32">
      {/* Decorative texture */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '32px 32px' }} />

      <div className="relative mx-auto max-w-8xl px-5 sm:px-8 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left: heading + image */}
          <div>
            <span className="reveal text-xs font-semibold uppercase tracking-[0.2em] text-cream-300">
              Life at Lyndel
            </span>
            <h2 className="reveal mt-4 font-serif text-4xl font-semibold leading-tight text-cream-50 text-balance sm:text-5xl">
              Comforts that make a house feel like home
            </h2>
            <p className="reveal mt-6 text-lg leading-relaxed text-cream-100/85">
              Every detail of our home is designed for comfort, safety, and
              enjoyment. Residents can relax in beautiful shared spaces, tend to
              the garden, or simply enjoy the quiet of a peaceful neighborhood.
            </p>

            <div className="reveal mt-10 overflow-hidden rounded-3xl shadow-2xl">
              <img
                src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="A cozy, sunlit living room"
                className="aspect-[16/10] w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>

          {/* Right: amenities grid */}
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-2">
            {amenities.map(({ icon: Icon, label }, i) => (
              <div
                key={label}
                className="reveal flex items-center gap-4 rounded-2xl border border-cream-100/15 bg-white/5 p-5 backdrop-blur-sm transition-colors duration-300 hover:bg-white/10"
                style={{ transitionDelay: `${(i % 2) * 80}ms` }}
              >
                <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-cream-600/90 text-white">
                  <Icon className="h-6 w-6" strokeWidth={1.7} />
                </span>
                <span className="font-serif text-lg font-medium text-cream-50">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
