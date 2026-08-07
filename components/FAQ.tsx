"use client";

import { useState } from "react";
import SectionHeading from "./SectionHeading";

const faqs = [
  {
    question: "What type of enterprise programs does Accredian offer?",
    answer:
      "Enterprise programs can cover areas such as leadership, artificial intelligence, data and analytics, digital transformation, sales, and business capabilities. Programs can be tailored around an organization's specific learning goals.",
  },
  {
    question: "Can programs be customized for our organization?",
    answer:
      "Yes. Enterprise learning journeys can be structured around your organization's business objectives, learner profiles, timelines, and desired outcomes.",
  },
  {
    question: "Who are these programs designed for?",
    answer:
      "Programs can be designed for senior leaders, managers, teams, emerging talent, and other employee groups depending on the organization's capability-building requirements.",
  },
  {
    question: "How are learning outcomes measured?",
    answer:
      "Learning outcomes can be evaluated through assessments, learner engagement, practical projects, feedback, and other metrics aligned with the organization's objectives.",
  },
  {
    question: "Can we speak with an enterprise learning expert?",
    answer:
      "Absolutely. Use the contact form on this page to share your requirements and our team can discuss the appropriate learning approach for your organization.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  return (
    <section
      id="faq"
      className="bg-slate-50 px-6 py-20 sm:py-24 lg:px-8"
    >
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          eyebrow="FAQ"
          title="Questions, answered."
          description="A few common questions about enterprise learning programs and how we work with organizations."
          centered
        />

        <div className="mt-12 divide-y divide-slate-200 rounded-3xl border border-slate-200 bg-white">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div key={faq.question}>
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-6 px-6 py-6 text-left sm:px-8"
                >
                  <span className="text-base font-semibold text-slate-900 sm:text-lg">
                    {faq.question}
                  </span>

                  <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xl transition ${
                      isOpen
                        ? "bg-blue-600 text-white"
                        : "bg-slate-100 text-slate-600"
                    }`}
                  >
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                <div
                  className={`grid transition-all duration-300 ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-6 leading-7 text-slate-600 sm:px-8">
                      {faq.answer}
                    </p>
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