import SectionHeading from "./SectionHeading";

const steps = [
  {
    number: "01",
    title: "Understand",
    description:
      "We start by understanding your organization's goals, workforce needs, and the capabilities required to achieve them.",
  },
  {
    number: "02",
    title: "Design",
    description:
      "Our experts create a learning journey aligned with your business priorities, learner profiles, and desired outcomes.",
  },
  {
    number: "03",
    title: "Deliver",
    description:
      "Programs are delivered through engaging, practical experiences designed to keep learners involved and learning.",
  },
  {
    number: "04",
    title: "Measure",
    description:
      "We track engagement, learning outcomes, and business impact to continuously improve the learning experience.",
  },
];

export default function Process() {
  return (
    <section
      id="process"
      className="bg-white px-6 py-20 sm:py-24 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="How it works"
          title="From business challenge to measurable capability."
          description="A structured approach helps us create learning experiences that are relevant, practical, and connected to business outcomes."
        />

        <div className="relative mt-14">
          {/* Connecting line - desktop */}
          <div className="absolute left-[12.5%] right-[12.5%] top-7 hidden h-px bg-slate-200 lg:block" />

          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step) => (
              <article
                key={step.number}
                className="relative text-center lg:px-4"
              >
                {/* Number */}
                <div className="relative mx-auto flex h-14 w-14 items-center justify-center rounded-full border-4 border-white bg-blue-600 text-sm font-bold text-white shadow-lg">
                  {step.number}
                </div>

                <h3 className="mt-7 text-xl font-bold text-slate-900">
                  {step.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {step.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}