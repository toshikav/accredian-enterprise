export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-950 pt-32 text-white">
      {/* Decorative background */}
      <div className="absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-blue-600/20 blur-3xl" />
        <div className="absolute -left-32 bottom-0 h-72 w-72 rounded-full bg-indigo-500/10 blur-3xl" />
      </div>

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-2 lg:px-8 lg:py-28">
        
        {/* Left content */}
        <div>
          <div className="mb-6 inline-flex items-center rounded-full border border-blue-400/30 bg-blue-400/10 px-4 py-2">
            <span className="mr-2 h-2 w-2 rounded-full bg-blue-400" />
            <span className="text-sm font-medium text-blue-200">
              Enterprise Learning Solutions
            </span>
          </div>

          <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Build a workforce
            <span className="text-blue-400"> ready for tomorrow.</span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-7 text-slate-300 sm:text-lg">
            Transform your organization with industry-aligned learning
            programs designed to build practical skills, strengthen teams,
            and create measurable business impact.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="#contact"
              className="rounded-full bg-blue-600 px-7 py-3.5 text-center text-sm font-semibold text-white transition hover:bg-blue-500"
            >
              Talk to our experts
            </a>

            <a
              href="#solutions"
              className="rounded-full border border-slate-600 px-7 py-3.5 text-center text-sm font-semibold text-white transition hover:border-slate-400 hover:bg-white/5"
            >
              Explore solutions
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm text-slate-400">
            <span>✓ Industry-led curriculum</span>
            <span>✓ Enterprise-ready delivery</span>
            <span>✓ Measurable outcomes</span>
          </div>
        </div>

        {/* Right visual */}
        <div className="relative mx-auto w-full max-w-xl">
          <div className="relative aspect-square overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-5 shadow-2xl backdrop-blur-sm">
            
            {/* Main card */}
            <div className="flex h-full flex-col justify-between rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-700 p-7">
              
              <div>
                <p className="text-sm font-medium text-blue-100">
                  Enterprise Impact
                </p>

                <p className="mt-3 text-5xl font-bold">
                  360°
                </p>

                <p className="mt-2 max-w-xs text-sm leading-6 text-blue-100">
                  Learning experiences built around your organization's
                  business goals.
                </p>
              </div>

              {/* Mini cards */}
              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-xl bg-white/10 p-4 backdrop-blur">
                  <p className="text-2xl font-bold">01</p>
                  <p className="mt-1 text-xs text-blue-100">
                    Assess
                  </p>
                </div>

                <div className="rounded-xl bg-white/10 p-4 backdrop-blur">
                  <p className="text-2xl font-bold">02</p>
                  <p className="mt-1 text-xs text-blue-100">
                    Train
                  </p>
                </div>

                <div className="rounded-xl bg-white/10 p-4 backdrop-blur">
                  <p className="text-2xl font-bold">03</p>
                  <p className="mt-1 text-xs text-blue-100">
                    Apply
                  </p>
                </div>

                <div className="rounded-xl bg-white/10 p-4 backdrop-blur">
                  <p className="text-2xl font-bold">04</p>
                  <p className="mt-1 text-xs text-blue-100">
                    Measure
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Floating card */}
          <div className="absolute -bottom-5 -left-4 rounded-2xl border border-slate-200/20 bg-white p-4 text-slate-900 shadow-xl sm:-left-8">
            <p className="text-xs font-medium text-slate-500">
              Learning → Business
            </p>
            <p className="mt-1 text-lg font-bold">
              Real-world impact
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}