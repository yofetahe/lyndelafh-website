import { ArrowRight, Phone, ShieldCheck, Clock, Utensils } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[100svh] overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="A warm, sunlit home surrounded by greenery"
          className="h-full w-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-sage-950/70 via-sage-950/55 to-sage-950/75" />
        <div className="absolute inset-0 bg-gradient-to-r from-sage-950/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative mx-auto flex min-h-[100svh] max-w-8xl flex-col justify-center px-5 pt-28 pb-16 sm:px-8 lg:px-12">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-cream-200/40 bg-white/10 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-cream-100 backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-cream-400" />
            A place to call home
          </span>

          <h1 className="mt-6 font-serif text-5xl font-semibold leading-[1.05] text-cream-50 text-balance sm:text-6xl lg:text-7xl">
            Compassionate care in a warm, family setting
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-cream-100/90">
            At Lyndel Adult Family Home, we provide personalized, 24-hour support
            for seniors in a peaceful residential home — where every resident is
            treated like family.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-cream-600 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-sage-950/20 transition-all duration-300 hover:bg-cream-700 hover:shadow-xl"
            >
              Schedule a Tour
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="tel:+15551234567"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-cream-100/40 bg-white/5 px-7 py-3.5 text-sm font-semibold text-cream-50 backdrop-blur-sm transition-all duration-300 hover:bg-white/15"
            >
              <Phone className="h-4 w-4" />
              (206) 842-1791
            </a>
          </div>

          {/* Trust badges */}
          <div className="mt-12 grid max-w-lg grid-cols-3 gap-4 border-t border-cream-100/20 pt-7">
            {[
              { icon: Clock, label: '24-Hour Care' },
              { icon: Utensils, label: 'Home-Cooked Meals' },
              { icon: ShieldCheck, label: 'Licensed & Insured' },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="flex flex-col items-center gap-2 text-center sm:items-start sm:text-left">
                <Icon className="h-5 w-5 text-cream-300" strokeWidth={1.8} />
                <span className="text-xs font-medium text-cream-100/85 sm:text-sm">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" className="h-[60px] w-full sm:h-[80px]" preserveAspectRatio="none">
          <path d="M0,80 C480,0 960,0 1440,80 L1440,80 L0,80 Z" fill="#fdfbf7" />
        </svg>
      </div>
    </section>
  );
}
