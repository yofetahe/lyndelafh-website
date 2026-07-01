import {
  Activity,
  Pill,
  Bath,
  UtensilsCrossed,
  Footprints,
  Brain,
  Stethoscope,
  Sparkles,
} from 'lucide-react';

const services = [
  {
    icon: Activity,
    title: '24-Hour Supervision',
    text: 'Round-the-clock caregivers ensure safety and prompt assistance, day and night.',
  },
  {
    icon: Pill,
    title: 'Medication Management',
    text: 'Trained staff handle medication administration, reminders, and coordination with pharmacies.',
  },
  {
    icon: Bath,
    title: 'Personal Care',
    text: 'Dignified assistance with bathing, dressing, grooming, and toileting as needed.',
  },
  {
    icon: UtensilsCrossed,
    title: 'Home-Cooked Meals',
    text: 'Nutritious, freshly prepared meals with accommodations for dietary needs and preferences.',
  },
  {
    icon: Footprints,
    title: 'Mobility Assistance',
    text: 'Help with walking, transfers, and wheelchair use to keep residents active and safe.',
  },
  {
    icon: Brain,
    title: 'Memory Care',
    text: 'Compassionate support for residents with dementia and Alzheimer’s in a calm environment.',
  },
  {
    icon: Stethoscope,
    title: 'Health Coordination',
    text: 'We coordinate with doctors, nurses, and therapists to manage ongoing health needs.',
  },
  {
    icon: Sparkles,
    title: 'Housekeeping & Laundry',
    text: 'Clean rooms, fresh linens, and personal laundry taken care of every day.',
  },
];

export default function Care() {
  return (
    <section id="care" className="bg-sage-50 py-24 sm:py-32">
      <div className="mx-auto max-w-8xl px-5 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-2xl text-center">
          <span className="reveal text-xs font-semibold uppercase tracking-[0.2em] text-cream-600">
            Our Care
          </span>
          <h2 className="reveal mt-4 font-serif text-4xl font-semibold leading-tight text-sage-900 text-balance sm:text-5xl">
            Comprehensive support, delivered with heart
          </h2>
          <p className="reveal mt-5 text-lg leading-relaxed text-sage-700">
            From daily living assistance to specialized memory care, our services
            are designed to support the whole person — body, mind, and spirit.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map(({ icon: Icon, title, text }, i) => (
            <div
              key={title}
              className="reveal group rounded-2xl border border-sage-100 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-sage-200 hover:shadow-lg"
              style={{ transitionDelay: `${(i % 4) * 60}ms` }}
            >
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-sage-100 text-sage-700 transition-colors duration-300 group-hover:bg-sage-600 group-hover:text-cream-50">
                <Icon className="h-7 w-7" strokeWidth={1.7} />
              </span>
              <h3 className="mt-5 font-serif text-xl font-semibold text-sage-900">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-sage-600">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
