import { useEffect, useState } from 'react';
import { Menu, X, Heart } from 'lucide-react';

const links = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Care', href: '#care' },
  { label: 'Amenities', href: '#amenities' },
  { label: 'Rooms', href: '#rooms' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-cream-50/95 shadow-[0_2px_24px_rgba(45,60,40,0.08)] backdrop-blur-md'
          : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-8xl items-center justify-between px-5 py-4 sm:px-8 lg:px-12">
        <a href="#home" className="flex items-center gap-2.5" aria-label="Lyndel Adult Family Home">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-sage-600 text-cream-50 shadow-sm">
            <Heart className="h-5 w-5" strokeWidth={2.2} />
          </span>
          <span className="flex flex-col leading-none">
            <span
              className={`font-serif text-xl font-semibold tracking-tight transition-colors ${
                scrolled ? 'text-sage-800' : 'text-cream-50'
              }`}
            >
              Lyndel
            </span>
            <span
              className={`text-[0.62rem] font-medium uppercase tracking-[0.18em] transition-colors ${
                scrolled ? 'text-sage-500' : 'text-cream-200'
              }`}
            >
              Adult Family Home
            </span>
          </span>
        </a>

        <ul className="hidden items-center gap-7 lg:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className={`text-sm font-medium transition-colors hover:text-cream-600 ${
                  scrolled ? 'text-sage-700' : 'text-cream-100'
                }`}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden rounded-full bg-cream-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:bg-cream-700 hover:shadow-md lg:inline-block"
        >
          Schedule a Tour
        </a>

        <button
          onClick={() => setOpen((v) => !v)}
          className={`flex h-10 w-10 items-center justify-center rounded-full transition-colors lg:hidden ${
            scrolled ? 'text-sage-800 hover:bg-sage-100' : 'text-cream-50 hover:bg-white/10'
          }`}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden bg-cream-50/98 backdrop-blur-md transition-all duration-400 lg:hidden ${
          open ? 'max-h-[28rem] border-t border-sage-100' : 'max-h-0'
        }`}
      >
        <ul className="flex flex-col gap-1 px-5 py-4 sm:px-8">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-3 py-3 text-base font-medium text-sage-800 transition-colors hover:bg-sage-100"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li className="mt-2">
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="block rounded-full bg-cream-600 px-5 py-3 text-center text-sm font-semibold text-white"
            >
              Schedule a Tour
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
