import React, { useState } from "react";

const faqsData = [
  {
    // General & Transitioning Care
    question:
      "What is an Adult Family Home, and how is it different from assisted living?",
    answer:
      "An Adult Family Home (AFH) is a residential home licensed by Washington State to provide 24-hour personalized care, housing, and supervision for up to six seniors in a warm, neighborhood setting. Unlike large assisted living facilities with dozens or hundreds of residents, our smaller environment ensures a high caregiver-to-resident ratio, personalized daily routines, and a true family atmosphere where no resident is ever lost in the crowd.",
  },
  {
    question:
      "How do we know if Lyndel Adult Family Home is the right fit for our loved one?",
    answer:
      "Lyndel is ideal for seniors who require assistance with daily tasks (such as bathing, medication management, mobility, or meal preparation) or specialized support (including memory care), but who prefer the comfort, quiet, and dignity of a real home over an institutional facility. We conduct a personalized intake assessment prior to admission to ensure we can meet all of your loved one’s physical, medical, and social needs.",
  },
  {
    question: "How does the admission process work?",
    answer: `
    Getting started is simple and supportive:
    1. Schedule a Tour: Contact us to visit our home in Lynnwood, WA, and meet our care team.
    2. Assessment: Our licensed nursing team conducts a care assessment to evaluate your loved one's health history, daily routines, and care preferences.
    3. Care Plan Creation: We develop an individualized care plan tailored specifically to their needs.
    4. Move-In: Once paperwork and licensing requirements are complete, we welcome your family member home and assist them with a smooth, gentle transition.
    `,
  },
  {
    // Care, Medical & Staffing
    question:
      "What clinical and medical qualifications does the care team have?",
    answer:
      "Our facility is licensed by the State of Washington and led by a Licensed Practical Nurse (LPN) with extensive experience in clinical care, senior health, and specialized nursing supervision. Our caregivers receive continuous training in emergency response, medication administration, dementia care, safe transfer techniques, and dignified personal assistance.",
  },
  {
    question: "Is staff available during the night?",
    answer:
      "Yes. We provide 24/7 supervision and assistance. Caregivers are available round-the-clock to respond to calls, assist with nighttime routines, manage mobility needs, and handle any urgent situations.",
  },
  {
    question: "How are medications managed?",
    answer:
      "All medications are stored securely and administered by trained staff under professional nursing oversight in compliance with Washington State regulations. We handle order tracking, pharmacy coordination, daily delivery logs, and reminder schedules so families never have to worry about missed doses.",
  },
  {
    question: "Can residents keep their own primary care doctors?",
    answer:
      "Absolutely. Residents can continue seeing their preferred physicians, specialists, and therapists. We regularly coordinate with outside health providers, physical therapists, hospice teams, and visiting nurses to ensure seamless continuity of care.",

    // Daily Life & Accommodations
  },
  {
    question:
      "Can my loved one bring their own furniture and personal belongings?",
    answer:
      "Yes! We strongly encourage residents to bring favorite chairs, photos, bedding, and personal keepsakes to make their private or companion room feel like home.",
  },
  {
    question: "What options are available for meals and special diets?",
    answer:
      "We prepare fresh, home-cooked meals daily in our central kitchen. We easily accommodate special dietary requirements—including low-sodium, diabetic, pureed, soft food, or allergy-conscious menus—tailored to each resident's care plan and personal tastes.",
  },
  {
    question: "What are your visiting hours?",
    answer:
      "Family and friends are always welcome! Our standard visiting hours are daily from 9:00 AM to 6:00 PM, though we can easily accommodate flexible visit arrangements to fit your family's schedule.",
  },
];
export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
            Frequently Asked Questions
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600">
            Got questions? We’ve got answers.
          </p>
        </div>

        <div className="space-y-4">
          {faqsData.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-white border border-slate-200 rounded-lg shadow-sm transition-all overflow-hidden"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex justify-between items-center py-4 px-5 sm:py-5 sm:px-6 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                  aria-expanded={isOpen}
                >
                  {/* <span className="font-medium text-slate-900 text-sm sm:text-base">
                    {faq.question}
                  </span> */}
                  <span 
                    className="font-medium text-slate-900 text-sm sm:text-base"
                    dangerouslySetInnerHTML={{ __html: faq.question }}
                  />
                  <span
                    className={`ml-6 flex-shrink-0 transform transition-transform duration-200 text-slate-500 ${
                      isOpen ? "rotate-180" : "rotate-0"
                    }`}
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </span>
                </button>

                <div
                  className={`transition-all duration-300 ease-in-out grid ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="p-5 sm:p-6 pt-0 text-sm sm:text-base text-slate-600 leading-relaxed border-t border-slate-100">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
