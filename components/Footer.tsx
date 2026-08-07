const footerLinks = {
  Solutions: [
    { label: "Leadership", href: "#solutions" },
    { label: "AI & Technology", href: "#solutions" },
    { label: "Data & Analytics", href: "#solutions" },
    { label: "Digital Transformation", href: "#solutions" },
  ],
  Explore: [
    { label: "Programs", href: "#programs" },
    { label: "Our Approach", href: "#process" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <a
              href="#home"
              className="inline-flex items-center gap-2"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-600 text-sm font-bold">
                A
              </span>

              <span className="text-xl font-bold tracking-tight">
                Accredian
              </span>
            </a>

            <p className="mt-5 max-w-md text-sm leading-7 text-slate-400">
              Building future-ready capabilities through practical,
              industry-focused enterprise learning experiences.
            </p>

            <a
              href="#contact"
              className="mt-6 inline-flex items-center rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-slate-900 transition hover:bg-slate-200"
            >
              Talk to us
            </a>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-300">
              Solutions
            </h3>

            <ul className="mt-5 space-y-3">
              {footerLinks.Solutions.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-slate-400 transition hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Explore */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-300">
              Explore
            </h3>

            <ul className="mt-5 space-y-3">
              {footerLinks.Explore.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-slate-400 transition hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} Accredian Enterprise. All
            rights reserved.
          </p>

          <div className="flex gap-5 text-sm text-slate-500">
            <a
              href="#"
              className="transition hover:text-white"
            >
              Privacy
            </a>

            <a
              href="#"
              className="transition hover:text-white"
            >
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}