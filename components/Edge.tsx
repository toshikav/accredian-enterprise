import SectionHeading from "./SectionHeading";

const advantages = [
  {
    number: "01",
    title: "Industry-led learning",
    description:
      "Programs are designed around real-world business challenges and current industry requirements, so learners can apply what they learn immediately.",
  },
  {
    number: "02",
    title: "Built for enterprises",
    description:
      "Flexible learning experiences can be aligned with your organization's goals, teams, timelines, and business priorities.",
  },
  {
    number: "03",
    title: "Practical outcomes",
    description:
      "Move beyond theoretical learning with hands-on projects, case studies, assessments, and experiences focused on measurable outcomes.",
  },
  {
    number: "04",
    title: "Continuous support",
    description:
      "Learners receive structured guidance throughout their journey, helping teams stay engaged and turn learning into long-term capability.",
  },
];

export default function Edge() {
  return (
    <section className="overflow-hidden bg-slate-950 px-6 py-20 text-white sm:py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          {/* Left */}
          <div className="lg:sticky lg:top-28">
            <SectionHeading
              eyebrow="The Accredian Edge"
              light
              title="More than learning. A capability-building partner."
              description="We combine practical learning, industry expertise, and structured delivery to help organizations build capabilities that create lasting impact."
            />

            <div className="mt-8">
              <a
                href="#contact"
                className="inline-flex items-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-200"
              >
                Talk to our experts
                <span className="ml-2">→</span>
              </a>
            </div>
          </div>

          {/* Right */}
          <div className="divide-y divide-white/10 rounded-3xl border border-white/10 bg-white/[0.03]">
            {advantages.map((advantage) => (
              <article
                key={advantage.number}
                className="group p-7 transition hover:bg-white/[0.04] sm:p-9"
              >
                <div className="flex gap-6">
                  <span className="shrink-0 text-sm font-semibold text-blue-400">
                    {advantage.number}
                  </span>

                  <div>
                    <h3 className="text-xl font-semibold text-white sm:text-2xl">
                      {advantage.title}
                    </h3>

                    <p className="mt-3 max-w-xl leading-7 text-slate-400">
                      {advantage.description}
                    </p>
                  </div>

                  <span className="ml-auto hidden text-xl text-slate-600 transition group-hover:text-blue-400 sm:block">
                    ↗
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}