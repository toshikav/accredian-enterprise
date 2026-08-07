import SectionHeading from "./SectionHeading";

const solutions = [
  {
    number: "01",
    title: "Leadership Development",
    description:
      "Build stronger leaders with practical learning experiences focused on decision-making, communication, and strategic thinking.",
    tags: ["Leadership", "Strategy", "Management"],
  },
  {
    number: "02",
    title: "Technology & AI",
    description:
      "Equip your teams with relevant technology and AI capabilities that help them adapt to rapidly changing business environments.",
    tags: ["AI", "Technology", "Digital"],
  },
  {
    number: "03",
    title: "Data & Analytics",
    description:
      "Develop data-driven teams capable of turning information into insights and better business decisions.",
    tags: ["Data", "Analytics", "Business"],
  },
  {
    number: "04",
    title: "Sales & Business",
    description:
      "Strengthen commercial capabilities through programs designed around customer-centric selling and business growth.",
    tags: ["Sales", "Growth", "Business"],
  },
];

export default function Solutions() {
  return (
    <section
      id="solutions"
      className="bg-slate-50 px-6 py-20 sm:py-24 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Our solutions"
          title="Learning programs designed around your business."
          description="From leadership to emerging technologies, build the capabilities your teams need to perform today and prepare for tomorrow."
        />

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {solutions.map((solution) => (
            <article
              key={solution.number}
              className="group rounded-3xl border border-slate-200 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl sm:p-8"
            >
              <div className="flex items-start justify-between">
                <span className="text-sm font-semibold text-blue-600">
                  {solution.number}
                </span>

                <span className="text-2xl text-slate-300 transition group-hover:text-blue-500">
                  ↗
                </span>
              </div>

              <h3 className="mt-8 text-2xl font-bold text-slate-900">
                {solution.title}
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                {solution.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {solution.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-slate-100 px-3 py-1.5 text-xs font-medium text-slate-600"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}