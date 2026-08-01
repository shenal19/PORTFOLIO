const stats = [
  { n: '93%', l: 'Defect prediction accuracy' },
  { n: '50k+', l: 'Records piped & modeled' },
  { n: '70%', l: 'Less manual analysis time' },
  { n: '3', l: 'Cloud & AI certifications' },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden pb-16 pt-24">
      <div className="bg-dot-grid pointer-events-none absolute inset-0 z-0" />
      <div className="relative z-10 mx-auto grid max-w-[1120px] grid-cols-1 items-center gap-14 px-7 md:grid-cols-[1.1fr_0.9fr] md:gap-16">
        <div>
          <div className="flex items-center gap-2.5 font-mono text-[12.5px] uppercase tracking-[0.14em] text-teal before:h-px before:w-4 before:bg-teal">
            Data Science · Analytics Engineering · Applied ML
          </div>
          <h1 className="mt-5 font-display text-[2.4rem] font-extrabold leading-[1.06] tracking-tight sm:text-[3rem] lg:text-[3.6rem]">
            Raw data, run through a pipeline, and turned into a{' '}
            <span className="bg-gradient-to-b from-transparent from-[62%] to-[62%] to-[rgba(227,169,75,0.14)] text-gold">
              decision.
            </span>
          </h1>
          <p className="mt-6 max-w-[520px] text-[17px] text-muted">
            I&apos;m Shenbaga Balaji — a Data Science engineer at VIT Chennai who builds ETL
            pipelines, predictive models, and dashboards designed to hold up outside a
            notebook.
          </p>
          <div className="mt-9 flex flex-wrap gap-3.5">
            <a
              href="#work"
              className="rounded-[9px] bg-ink px-[22px] py-[13px] text-[14.5px] font-semibold text-bg transition-all hover:-translate-y-0.5 hover:bg-teal"
            >
              View projects →
            </a>
            <a
              href="#contact"
              className="rounded-[9px] border border-border px-[22px] py-[13px] text-[14.5px] font-semibold text-ink transition-all hover:-translate-y-0.5 hover:border-teal hover:text-teal"
            >
              Get in touch
            </a>
          </div>
        </div>

        <div className="rounded-2xl border border-border bg-surface p-6 pb-5">
          <div className="mb-4 flex items-center justify-between font-mono text-[11.5px] tracking-wide text-muted">
            <span>pipeline.status</span>
            <span className="flex items-center gap-1.5 text-teal">
              <span className="inline-block h-1.5 w-1.5 animate-pulse-dot rounded-full bg-teal" />
              running
            </span>
          </div>

          <div className="relative py-2.5 pb-6">
            <svg viewBox="0 0 460 92" className="block w-full">
              <line x1="30" y1="46" x2="430" y2="46" stroke="#263252" strokeWidth="1.5" />
              <line
                x1="30"
                y1="46"
                x2="430"
                y2="46"
                stroke="#45c4b0"
                strokeWidth="1.5"
                strokeDasharray="6 8"
                className="animate-flow-move"
              />
              {[
                { cx: 30, label: 'IN', sub: 'raw data', stroke: '#e3a94b' },
                { cx: 170, label: 'ETL', sub: 'clean', stroke: '#45c4b0' },
                { cx: 290, label: 'ML', sub: 'model', stroke: '#45c4b0' },
                { cx: 430, label: 'OUT', sub: 'insight', stroke: '#e3a94b' },
              ].map((node) => (
                <g key={node.label}>
                  <circle cx={node.cx} cy="46" r="16" fill="#182238" stroke={node.stroke} strokeWidth="1.5" />
                  <text x={node.cx} y="50" textAnchor="middle" fontFamily="IBM Plex Mono" fontSize="9" fill="#eaedf5">
                    {node.label}
                  </text>
                  <text
                    x={node.cx}
                    y="76"
                    textAnchor="middle"
                    fontFamily="IBM Plex Mono"
                    fontSize="10.5"
                    fill="#8d96ac"
                    className="uppercase tracking-wide"
                  >
                    {node.sub}
                  </text>
                </g>
              ))}
            </svg>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {stats.map((s) => (
              <div key={s.l} className="rounded-[10px] border border-border bg-surface2 px-4 py-3.5">
                <div className="font-display text-[22px] font-extrabold text-gold">{s.n}</div>
                <div className="mt-0.5 text-[12px] text-muted">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
