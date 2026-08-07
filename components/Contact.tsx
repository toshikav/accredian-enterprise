import LeadForm from "./LeadForm";

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-white px-6 py-20 sm:py-24 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="overflow-hidden rounded-[2rem] bg-slate-100">
          <div className="grid lg:grid-cols-[0.8fr_1.2fr]">
            {/* Content */}
            <div className="bg-slate-950 p-8 text-white sm:p-10 lg:p-12">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
                Let's work together
              </p>

              <h2 className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl">
                Build the capabilities your business needs next.
              </h2>

              <p className="mt-5 leading-7 text-slate-400">
                Tell us about your organization's learning and
                capability-building goals. Our team will help you
                explore the right approach.
              </p>

              <div className="mt-10 space-y-5">
                <div className="flex gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10 text-blue-400">
                    ✓
                  </span>

                  <div>
                    <p className="font-semibold">
                      Business-aligned programs
                    </p>
                    <p className="mt-1 text-sm text-slate-400">
                      Designed around your organization's priorities.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10 text-blue-400">
                    ✓
                  </span>

                  <div>
                    <p className="font-semibold">
                      Industry-relevant learning
                    </p>
                    <p className="mt-1 text-sm text-slate-400">
                      Practical skills teams can apply immediately.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10 text-blue-400">
                    ✓
                  </span>

                  <div>
                    <p className="font-semibold">
                      Flexible delivery
                    </p>
                    <p className="mt-1 text-sm text-slate-400">
                      Experiences designed for different teams and
                      learner groups.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="p-8 sm:p-10 lg:p-12">
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-slate-900">
                  Tell us what you need
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  Share a few details and we'll take it from there.
                </p>
              </div>

              <LeadForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}