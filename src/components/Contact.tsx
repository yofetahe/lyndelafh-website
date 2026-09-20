import { useState, type FormEvent } from 'react';
import { MapPin, Phone, Smartphone, Mail, Clock, Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { db } from '../firebase.ts';
import { ref, set, push } from "firebase/database";

type Status = 'idle' | 'submitting' | 'success' | 'error';
type ErrorType = {
  fullName?: string,
  email?: string,
  phoneNumber?: string,
  levelOfCare?: string,
}

const careLevels = ['Independent Living', 'Assisted Living', 'Memory Care', 'Not Sure Yet'];

export default function Contact() {
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const [errors, setErrors] = useState<ErrorType>({ fullName: '', email: '', phoneNumber: '' });

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^\d{10}$/;

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();    
    setErrorMsg('');
    setErrors({ fullName: '', email: '', phoneNumber: '' });

    let formErrors: ErrorType = {};

    // 1. Extract and clean the form data  
    const form = e.currentTarget;
    const data = new FormData(form);

    const name = String(data.get('name') || '').trim();
    const email = String(data.get('email') || '').trim();
    const phone = String(data.get('phone') || '').trim();
    const careLevel = String(data.get('careLevel') || '').trim();
    const message = String(data.get('message') || '').trim();

    if (!name || name.split(" ").length < 2 || name.split(" ").length > 3) {
      formErrors.fullName = "Full name is required"
    }

    if (email && !emailRegex.test(email)) {
      formErrors.email = 'Invalid email address format';
    }

    if (phone && !phoneRegex.test(phone)) {
      formErrors.phoneNumber = 'Phone number must be exactly 10 digits';
    }

    if (careLevel.length === 0) {
      formErrors.levelOfCare = 'Please selected type of level of care needed';
    }

    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return
    }
    
    // Validation check: ensure at least a name and contact info are provided
    if (!name || (!email && !phone)) {
      setStatus('error');
      setErrorMsg('Please provide a name and at least one contact method.');
      return;
    }

    setStatus('submitting');

    // 2. Format the data into a clean structured object
    const inquiryData = {
      name: name,
      email: email,
      phone: phone,
      careLevel: careLevel,
      message: message,
      status: "pending",               // Helpful tracker for the AFH admin
      submittedAt: new Date().toISOString() // ISO timestamp for easy chronological sorting
    };

    try {
      // 3. Reference the node where you want to store submissions (e.g., 'inquiries')
      const inquiriesRef = ref(db, 'inquiries');
      
      // 4. Generate a unique ID slot for this specific inquiry
      const newInquiryRef = push(inquiriesRef);
      
      // 5. Save the structured object to Firebase Realtime Database
      await set(newInquiryRef, inquiryData);
      
      // Success: Clear the form fields
      setStatus('success');
      form.reset();
      // alert("Thank you! Your inquiry has been submitted successfully.");
    } catch (error) {
      console.error("Firebase write error: ", error);
      setStatus('error');
      setErrorMsg('Something went wrong sending your message. Please call us instead.');
    }
  }

  return (
    <section id="contact" className="bg-cream-50 py-24 sm:py-32">
      <div className="mx-auto max-w-8xl px-5 sm:px-8 lg:px-12">
        <div className="overflow-hidden rounded-3xl bg-white shadow-xl lg:grid lg:grid-cols-2">
          {/* Info panel */}
          <div className="relative bg-sage-800 p-8 text-cream-50 sm:p-12 lg:p-14">
            <div className="pointer-events-none absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '28px 28px' }} />
            <div className="relative">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-cream-300">
                Get in Touch
              </span>
              <h2 className="mt-4 font-serif text-4xl font-semibold leading-tight text-cream-50 text-balance sm:text-5xl">
                Schedule a visit today
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-cream-100/85">
                We’d love to show you around and answer any questions. Reach out
                and we’ll get back to you within one business day.
              </p>

              <div className="mt-10 space-y-6">
                <ContactInfo icon={MapPin} label="Address" value="19430 70th Pl W, Lynnwood WA, 98036" />
                <ContactInfo icon={Phone} label="Phone" value="(206) 842-1719" href="tel:+12068421719" />
                <ContactInfo icon={Smartphone} label="Phone" value="(206) 765-0002" href="tel:+12067650002" />
                <ContactInfo icon={Mail} label="Email" value="lyndel.afh@gmail.com" href="mailto:lyndel.afh@gmail.com" />
                <ContactInfo icon={Clock} label="Visiting Hours" value="Daily, 9:00 AM – 6:00 PM" />
              </div>
            </div>
          </div>

          {/* Form panel */}
          <div className="p-8 sm:p-12 lg:p-14">
            {status === 'success' ? (
              <div className="flex h-full flex-col items-center justify-center text-center">
                <span className="flex h-16 w-16 items-center justify-center rounded-full bg-sage-100 text-sage-600">
                  <CheckCircle2 className="h-9 w-9" />
                </span>
                <h3 className="mt-5 font-serif text-3xl font-semibold text-sage-900">Thank you!</h3>
                <p className="mt-3 max-w-sm text-sage-600">
                  Your inquiry has been received. A member of our team will reach
                  out to you shortly.
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="mt-7 rounded-full border border-sage-200 px-6 py-2.5 text-sm font-semibold text-sage-700 transition-colors hover:bg-sage-100"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Full Name" name="name" type="text" required placeholder="Jane Doe" error={!!errors.fullName} />
                  <Field label="Email" name="email" type="email" required placeholder="jane@email.com" error={!!errors.email} />
                </div>
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Phone (optional)" name="phone" type="tel" placeholder="(555) 000-0000" error={!!errors.phoneNumber} />
                  <div>
                    <label htmlFor="careLevel" className="mb-1.5 block text-sm font-medium text-sage-800">
                      Level of Care
                    </label>
                    <select
                      id="careLevel"
                      name="careLevel"
                      defaultValue=""
                      className={`w-full rounded-xl border border-sage-200 bg-cream-50 px-4 py-3 text-sage-900 outline-none transition-colors 
                        ${errors.levelOfCare 
                          ? 'border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-500' 
                          : 'border-gray-300 focus:border-sage-500 focus:ring-2 focus:ring-sage-500'
                        }`}
                    >
                      <option value="" disabled>Select an option</option>
                      {careLevels.map((c) => (
                        <option key={c} value={c}>{c}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-sage-800">
                    Message (optional)
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Tell us about your loved one's needs or any questions you have…"
                    className="w-full resize-none rounded-xl border border-sage-200 bg-cream-50 px-4 py-3 text-sage-900 outline-none transition-colors placeholder:text-sage-400 focus:border-sage-500 focus:ring-2 focus:ring-sage-200"
                  />
                </div>

                {status === 'error' && (
                  <div className="flex items-center gap-2.5 rounded-xl bg-warm-100 px-4 py-3 text-sm text-warm-700">
                    <AlertCircle className="h-5 w-5 flex-shrink-0" />
                    {errorMsg}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-cream-600 px-7 py-3.5 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:bg-cream-700 hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {status === 'submitting' ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Sending…
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                      Send Inquiry
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactInfo({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: typeof MapPin;
  label: string;
  value: string;
  href?: string;
}) {
  const content = (
    <div className="flex gap-4">
      <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-cream-600/90 text-white">
        <Icon className="h-5 w-5" strokeWidth={1.8} />
      </span>
      <div>
        <p className="text-xs font-semibold uppercase tracking-wider text-cream-300">{label}</p>
        <p className="mt-0.5 text-cream-50">{value}</p>
      </div>
    </div>
  );
  return href ? (
    <a href={href} className="block transition-opacity hover:opacity-80">{content}</a>
  ) : (
    content
  );
}

function Field({
  label,
  name,
  type,
  required,
  placeholder,
  error = false
}: {
  label: string;
  name: string;
  type: string;
  required?: boolean;
  placeholder?: string;
  error?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-1.5 block text-sm font-medium text-sage-800">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        // className="w-full rounded-xl border border-sage-200 bg-cream-50 px-4 py-3 text-sage-900 outline-none transition-colors placeholder:text-sage-400 focus:border-sage-500 focus:ring-2 focus:ring-sage-200"
        className={`w-full rounded-xl border border-sage-200 bg-cream-50 px-4 py-3 text-sage-900 outline-none transition-colors placeholder:text-sage-400
          ${error 
            ? 'border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-500' 
            : 'border-gray-300 focus:border-sage-500 focus:ring-2 focus:ring-sage-500'
          }`}
      />
    </div>
  );
}
