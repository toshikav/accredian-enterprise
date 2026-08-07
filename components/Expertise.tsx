import SectionHeading from "./SectionHeading";

const expertise = [
  {
    title: "Artificial Intelligence",
    shortTitle: "AI",
    description:
      "Help teams understand, adopt, and apply AI technologies to real business problems.",
    topics: ["Generative AI", "Machine Learning", "AI Strategy"],
  },
  {
    title: "Data & Analytics",
    shortTitle: "DATA",
    description:
      "Build data-literate teams that can turn complex information into meaningful business insights.",
    topics: ["Data Science", "Analytics", "Business Intelligence"],
  },
  {
    title: "Digital Transformation",
    shortTitle: "DX",
    description:
      "Develop the digital capabilities required to navigate changing technologies and business models.",
    topics: ["Digital Strategy", "Product", "Innovation"],
  },
  {
    title: "Leadership",
    shortTitle: "LEAD",
    description:
      "Develop confident leaders who can make better decisions and lead high-performing teams.",
    topics: ["Executive Leadership", "People Management", "Strategy"],
  },
  {
    title: "Sales & Marketing",
    shortTitle: "GROW",
    description:
      "Strengthen customer-centric capabilities that help teams create sustainable business growth.",
    topics: ["B2B Sales", "Marketing", "Customer Success"],
  },
  {
    title: "Finance & Business",
    shortTitle: "BIZ",
    description:
      "Build commercial and financial understanding across teams to improve business decision-making.",
    topics: ["Finance", "Business Acumen", "Strategy"],
  },
];

export default function Expertise() {
  return (
    <section
      id="expertise"
      className="bg-white px-6 py-20 sm:py-24 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Domain expertise"
          title="Capabilities that match the way business is changing."
          description="Build relevant skills across emerging technologies, business functions, and leadership capabilities."
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {expertise.map((item, index) => (
            <article
              key={item.title}
              className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl"
            >
              {/* Number */}
              <div className="flex items-start justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-100 text-xs font-bold tracking-wider text-slate-700 transition group-hover:bg-blue-600 group-hover:text-white">
                  {item.shortTitle}
                </div>

                <span className="text-sm font-medium text-slate-300">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              <h3 className="mt-7 text-xl font-bold text-slate-900">
                {item.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-600">
                {item.description}
              </p>

              {/* Topics */}
              <div className="mt-6 flex flex-wrap gap-2">
                {item.topics.map((topic) => (
                  <span
                    key={topic}
                    className="rounded-full bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-500"
                  >
                    {topic}
                  </span>
                ))}
              </div>

              {/* Bottom arrow */}
              <div className="mt-7 flex items-center text-sm font-semibold text-blue-600 opacity-0 transition group-hover:opacity-100">
                Explore expertise
                <span className="ml-2 transition-transform group-hover:translate-x-1">
                  →
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}