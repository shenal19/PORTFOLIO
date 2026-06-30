const channels = [
  { label: "Email", value: "shenal19406@gmail.com", href: "mailto:shenal19406@gmail.com" },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/shenbaga-balaji-6b4b8228a",
    href: "https://www.linkedin.com/in/shenbagabalaji-6b4b8228a",
  },
  { label: "GitHub", value: "github.com/shenal19", href: "https://github.com/shenal19" },
  { label: "Phone", value: "+91 73581 83753", href: "tel:+917358183753" },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <p className="label-eyebrow mb-4">05 / Contact</p>
        <div className="grid gap-12 md:grid-cols-[1.2fr_1fr] md:items-end">
          <div>
            <h2 className="font-display text-3xl font-medium leading-tight text-paper md:text-4xl">
              Have a dataset worth
              <br /> a second look?
            </h2>
            <p className="mt-5 max-w-md text-base leading-relaxed text-mist">
              Open to Data Science, Analytics, and Applied ML internships and
              entry-level roles. I reply fastest over email.
            </p>
            <a
              href="mailto:shenal19406@gmail.com"
              className="mt-8 inline-block rounded-sm bg-signal px-6 py-3 font-mono text-xs uppercase tracking-widest text-ink transition-transform hover:translate-y-[-2px]"
            >
              Email Shenbaga
            </a>
          </div>

          <div className="card-panel rounded-md p-2 transition-colors">
            {channels.map((c) => (
              <a
                key={c.label}
                href={c.href}
                target={c.label === "Email" || c.label === "Phone" ? undefined : "_blank"}
                rel="noopener noreferrer"
                className="flex items-center justify-between border-b border-line px-4 py-4 transition-colors last:border-none hover:bg-ink/40"
              >
                <span className="font-mono text-xs uppercase tracking-widest text-mist">
                  {c.label}
                </span>
                <span className="text-sm text-paper">{c.value}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
