const stats = [
  {
    value: "10+",
    label: "Years of learning expertise",
  },
  {
    value: "500K+",
    label: "Learners impacted",
  },
  {
    value: "100+",
    label: "Enterprise partners",
  },
  {
    value: "4.8/5",
    label: "Learner satisfaction",
  },
];

export default function Stats() {
  return (
    <section className="border-b border-slate-200 bg-white">
      <div className="mx-auto grid max-w-7xl grid-cols-2 px-6 py-12 lg:grid-cols-4 lg:px-8">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="border-slate-200 px-5 py-5 text-center first:border-0 sm:px-8 lg:border-l"
          >
            <p className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              {stat.value}
            </p>

            <p className="mt-2 text-sm leading-5 text-slate-500">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}