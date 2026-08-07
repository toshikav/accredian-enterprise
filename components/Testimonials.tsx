import SectionHeading from "./SectionHeading";

const testimonials = [
  {
    quote:
      "The program helped our teams develop practical skills that they could immediately apply to real business challenges.",
    name: "Ananya Sharma",
    role: "Head of Learning & Development",
    company: "Enterprise Technology Company",
  },
  {
    quote:
      "What stood out was the combination of industry relevance and a structured learning experience. Our teams stayed engaged throughout.",
    name: "Rahul Mehta",
    role: "Chief People Officer",
    company: "Global Services Organization",
  },
  {
    quote:
      "The learning journey gave our managers the confidence and practical frameworks they needed to lead transformation more effectively.",
    name: "Priya Kapoor",
    role: "VP, Talent Development",
    company: "Leading Financial Services Firm",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-slate-950 px-6 py-20 text-white sm:py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Client perspective"
          title="Learning that creates an impact."
          description="Organizations choose practical, industry-focused learning experiences that connect directly to their business priorities."
          light
        />

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.name}
              className="flex flex-col rounded-3xl border border-white/10 bg-white/[0.04] p-7 transition duration-300 hover:-translate-y-1 hover:bg-white/[0.07] sm:p-8"
            >
              {/* Quote icon */}
              <div className="text-4xl leading-none text-blue-400">
                “
              </div>

              <blockquote className="mt-5 flex-1 text-base leading-7 text-slate-300">
                {testimonial.quote}
              </blockquote>

              <div className="mt-8 border-t border-white/10 pt-6">
                <p className="font-semibold text-white">
                  {testimonial.name}
                </p>

                <p className="mt-1 text-sm text-slate-400">
                  {testimonial.role}
                </p>

                <p className="mt-1 text-xs text-slate-500">
                  {testimonial.company}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}