import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    quote:
      'The moment we walked into Lyndel, we knew it was different. Mom is treated with such dignity and warmth — she’s genuinely happy for the first time in years.',
    name: 'Sarah M.',
    relation: 'Daughter of resident',
  },
  {
    quote:
      'The staff know my father by name, know his stories, know what makes him laugh. The level of personal attention is something we never found at the larger facilities.',
    name: 'David & Linda T.',
    relation: 'Family of resident',
  },
  {
    quote:
      'I was nervous about moving into a home, but Lyndel feels like a real family. The meals are wonderful, the garden is peaceful, and I’ve made true friends here.',
    name: 'Margaret R.',
    relation: 'Resident',
  },
];

export default function Testimonials() {
  return (
    <section className="bg-cream-100 py-24 sm:py-32">
      <div className="mx-auto max-w-8xl px-5 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-2xl text-center">
          <span className="reveal text-xs font-semibold uppercase tracking-[0.2em] text-cream-600">
            Testimonials
          </span>
          <h2 className="reveal mt-4 font-serif text-4xl font-semibold leading-tight text-sage-900 text-balance sm:text-5xl">
            Loved by residents and families alike
          </h2>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <figure
              key={t.name}
              className="reveal flex flex-col rounded-3xl bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-lg"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <Quote className="h-9 w-9 flex-shrink-0 text-cream-400" />
              <div className="mt-4 flex gap-1">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star key={s} className="h-4 w-4 fill-cream-500 text-cream-500" />
                ))}
              </div>
              <blockquote className="mt-5 flex-1 font-serif text-lg italic leading-relaxed text-sage-800">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-6 border-t border-sage-100 pt-5">
                <p className="font-semibold text-sage-900">{t.name}</p>
                <p className="text-sm text-sage-500">{t.relation}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
