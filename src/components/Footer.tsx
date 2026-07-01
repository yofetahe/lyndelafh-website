import { Heart, MapPin, Phone, Mail } from 'lucide-react';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Our Care', href: '#care' },
  { label: 'Amenities', href: '#amenities' },
  { label: 'Rooms', href: '#rooms' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  return (
    <footer className="bg-sage-950 text-cream-100">
      <div className="mx-auto max-w-8xl px-5 py-16 sm:px-8 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-3">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-sage-600 text-cream-50">
                <Heart className="h-5 w-5" strokeWidth={2.2} />
              </span>
              <span className="flex flex-col leading-none">
                <span className="font-serif text-xl font-semibold text-cream-50">Lyndel</span>
                <span className="text-[0.62rem] font-medium uppercase tracking-[0.18em] text-cream-300">
                  Adult Family Home
                </span>
              </span>
            </div>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-cream-100/70">
              A warm, family-style home providing compassionate, personalized
              care for seniors.
               {/* since 2003. */}
            </p>
          </div>

          {/* Quick links */}
          <div className="lg:justify-self-center">
            <h3 className="font-serif text-lg font-semibold text-cream-50">Explore</h3>
            <ul className="mt-4 grid grid-cols-2 gap-x-8 gap-y-2.5">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-sm text-cream-100/70 transition-colors hover:text-cream-300">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-serif text-lg font-semibold text-cream-50">Reach Us</h3>
            <ul className="mt-4 space-y-3 text-sm text-cream-100/70">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-cream-400" />
                19430 70th Pl W, Lynnwood WA, 98036
              </li>
              <li>
                <a href="tel:+15551234567" className="flex items-center gap-3 transition-colors hover:text-cream-300">
                  <Phone className="h-4 w-4 flex-shrink-0 text-cream-400" />
                  (206) 842-1791
                </a>
              </li>
              <li>
                <a href="mailto:hello@lyndelhome.com" className="flex items-center gap-3 transition-colors hover:text-cream-300">
                  <Mail className="h-4 w-4 flex-shrink-0 text-cream-400" />
                  lyndelafg@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-sage-800 pt-8 text-center sm:flex-row sm:text-left">
          <p className="text-xs text-cream-100/50">
            © {new Date().getFullYear()} Lyndel Adult Family Home. All rights reserved.
          </p>
          <p className="text-xs text-cream-100/50">
            Licensed Adult Family Home · State of Washington
          </p>
        </div>
      </div>
    </footer>
  );
}
