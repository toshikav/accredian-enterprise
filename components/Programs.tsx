"use client";

import { useState } from "react";
import SectionHeading from "./SectionHeading";

const categories = [
  {
    id: "leaders",
    label: "Leaders",
    title: "For leaders driving transformation",
    description:
      "Help senior professionals develop strategic, leadership, and technology capabilities required to lead teams through change.",
    benefits: [
      "Strategic decision-making",
      "AI & digital transformation",
      "Leadership effectiveness",
      "Business strategy",
    ],
  },
  {
    id: "teams",
    label: "Teams",
    title: "For teams building new capabilities",
    description:
      "Create targeted learning journeys that help teams develop the skills needed to execute your organization's priorities.",
    benefits: [
      "Role-based learning",
      "Practical projects",
      "Collaborative learning",
      "Skill assessments",
    ],
  },
  {
    id: "talent",
    label: "Emerging Talent",
    title: "For the next generation of talent",
    description:
      "Prepare high-potential and early-career professionals with practical capabilities that accelerate their contribution.",
    benefits: [
      "Industry-ready skills",
      "Mentorship",
      "Applied learning",
      "Career development",
    ],
  },
];

export default function Programs() {
  const [activeCategory, setActiveCategory] = useState("leaders");

  const activeProgram =
    categories.find((category) => category.id === activeCategory) ??
    categories[0];

  return (
    <section className="bg-slate-50 px-6 py-20 sm:py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Built for every stage"
          title="Learning that meets people where they are."
          description="Different roles need different learning experiences. Choose a learner group to see how we can support them."
        />

        {/* Category buttons */}
        <div className="mt-10 flex flex-wrap gap-3">
          {categories.map((category) => {
            const isActive = category.id === activeCategory;

            return (
              <button
                key={category.id}
                type="button"
                onClick={() => setActiveCategory(category.id)}
                className={`rounded-full px-5 py-2.5 text-sm font-semibold transition ${
                  isActive
                    ? "bg-blue-600 text-white shadow-md"
                    : "border border-slate-200 bg-white text-slate-600 hover:border-blue-200 hover:text-blue-600"
                }`}
              >
                {category.label}
              </button>
            );
          })}
        </div>

        {/* Active content */}
        <div className="mt-8 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
          <div className="grid lg:grid-cols-2">
            {/* Left */}
            <div className="p-8 sm:p-10 lg:p-12">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
                {activeProgram.label}
              </p>

              <h3 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                {activeProgram.title}
              </h3>

              <p className="mt-5 max-w-xl leading-7 text-slate-600">
                {activeProgram.description}
              </p>

              <a
                href="#contact"
                className="mt-8 inline-flex items-center rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-700"
              >
                Discuss your needs
                <span className="ml-2">→</span>
              </a>
            </div>

            {/* Right */}
            <div className="bg-slate-950 p-8 text-white sm:p-10 lg:p-12">
              <p className="text-sm font-medium text-slate-400">
                What your program can include
              </p>

              <div className="mt-7 space-y-5">
                {activeProgram.benefits.map((benefit, index) => (
                  <div
                    key={benefit}
                    className="flex items-center gap-4 border-b border-white/10 pb-5 last:border-0"
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-blue-600 text-xs font-bold">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="text-sm font-medium text-slate-200">
                      {benefit}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}