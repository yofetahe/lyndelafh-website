import { HeartHandshake, Users, Leaf } from 'lucide-react';

const values = [
  {
    icon: HeartHandshake,
    title: 'Personalized Care',
    text: 'Care plans tailored to each resident’s unique needs, preferences, and routines — never a one-size-fits-all approach.',
  },
  {
    icon: Users,
    title: 'Family Atmosphere',
    text: 'A small, intimate home where residents form genuine bonds with caregivers and one another, never lost in a crowd.',
  },
  {
    icon: Leaf,
    title: 'Peaceful Setting',
    text: 'A quiet residential neighborhood with gardens, natural light, and calm spaces designed for comfort and dignity.',
  },
];

export default function About() {
  return (
    <section id="about" className="bg-cream-50 py-24 sm:py-32">
      <div className="mx-auto max-w-8xl px-5 sm:px-8 lg:px-12">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Image */}
          <div className="reveal relative order-2 lg:order-1">
            <div className="relative overflow-hidden rounded-3xl shadow-xl">
              <img
                src="https://images.pexels.com/photos/7556265/pexels-photo-7556265.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="A caregiver spending time with a senior resident"
                className="aspect-[4/5] w-full object-cover"
                loading="lazy"
              />
            </div>
            {/* Floating stat card */}
            <div className="absolute -bottom-6 -right-4 rounded-2xl bg-white p-5 shadow-xl sm:-right-6 sm:p-6">
              {/* <p className="font-serif text-4xl font-semibold text-sage-700">20+</p> */}
              <p className="mt-1 text-sm font-medium text-sage-600">A place where FAMILY always comes first.</p>
            </div>
            {/* Decorative accent */}
            <div className="absolute -left-4 -top-4 -z-10 h-32 w-32 rounded-3xl bg-sage-200/60 sm:-left-6 sm:-top-6" />
          </div>

          {/* Text */}
          <div className="order-1 lg:order-2">
            <span className="reveal text-xs font-semibold uppercase tracking-[0.2em] text-cream-600">
              Welcome to Lyndel
            </span>
            <h2 className="reveal mt-4 font-serif text-4xl font-semibold leading-tight text-sage-900 text-balance sm:text-5xl">
              A home, not a facility
            </h2>
            <p className="reveal mt-6 text-lg leading-relaxed text-sage-700">
              For over two decades, Lyndel Adult Family Home has been a sanctuary
              for seniors who need a little extra support but still want the
              warmth and dignity of a real home. We believe that growing older
              should never mean giving up comfort, connection, or joy.
            </p>
            <p className="reveal mt-4 text-base leading-relaxed text-sage-600">
              Our small resident count means every person is truly known — their
              stories, their preferences, their needs. It’s the kind of care
              only a family home can provide.
            </p>

            <div className="mt-10 space-y-5">
              {values.map(({ icon: Icon, title, text }) => (
                <div key={title} className="reveal flex gap-4">
                  <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-sage-100 text-sage-700">
                    <Icon className="h-6 w-6" strokeWidth={1.7} />
                  </span>
                  <div>
                    <h3 className="font-serif text-xl font-semibold text-sage-900">{title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-sage-600">{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
